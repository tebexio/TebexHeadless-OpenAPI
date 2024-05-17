#!/usr/bin/python

import yaml
import requests
import re
import csv
import json
import ast

from requests.auth import HTTPBasicAuth
from typing import List
from datetime import datetime, timezone

PASSES = 0
FAILURES = 0

API_PATH = ""

OPENAPI_SPEC = {}       # Full document spec as dict
CONFIG = {}             # Full config as dict
PERSIST_VARIABLES = {}  # Variables from config marked `persist`
REPORT = None           # CSV writer

def expandRef(ref: str) -> dict:
    """
        Returns the reference pointed to by the provided `ref`.
        
        Example `#/components/schemas/Basket` would be replaced with the complete Basket object definition.
    """
    # Split the reference string into parts
    parts = ref.split('/')
    if parts[0] != '#':
        raise ValueError(f"Invalid reference format: {ref}. Must start with '#'.")

    # Remove the '#' part as it's not needed for traversal
    parts = parts[1:]
    current = OPENAPI_SPEC

    # Traverse the spec based on the parts of the reference
    for part in parts:
        if part in current:
            current = current[part]
        else:
            raise KeyError(f"Reference path '{part}' not found in the specification.")

    return current

class RequestParameter:
    """
        A possible parameter in a request. These correspond to the `properties` of a given `requestBody` in the OpenAPI spec.
    """

    def __init__(self, key: str, typeName: str, example):
        self.key = key
        self.typeName = typeName
        self.example = example
    def __str__(self):
        return self.key + ", " + self.typeName + ", " + str(self.example)
    
class Response:
    """
        An HTTP response from the API.
    """
    def __init__(self, code: int, textBody: str, jsonBody: dict):
        self.code = code
        self.textBody = textBody
        self.jsonBody = jsonBody

    def __str__(self):
        if self.jsonBody is not None:
            return str(self.code) + ",\n   text: " + grey(self.textBody) + "   json: " + grey(str(self.jsonBody))
        else:
            return str(self.code) + ",\n   text: " + grey(self.textBody)

class Route:
    """
        A route as defined in the OpenAPI specification. The complete route definition is saved in `Route.routeDefinition`.
    """
    def __init__(self, method: str, path: str, operationId: str, routeDefinition: dict) -> None:
        self.method = method
        self.path = path
        self.operationId = operationId
        self.definition = routeDefinition

    def expandPathTokensWithNoVar(self) -> str:
        """
            If a route's path contains parameters ex. `/baskets/{ident}/packages/{row.id}`, this function returns the path with 'novar' replacing their token.
        """
        tokenPattern = r'\{[^}]*\}'
        matches = re.findall(tokenPattern, self.path)
        parsedPath = self.path

        for curlyBraceMatch in matches:
            parsedPath = parsedPath.replace(curlyBraceMatch, "NOVAR")
    
        return parsedPath
    
    def expandPathTokens(self) -> str:
        """
            If a route's path contains parameters ex. `/baskets/{ident}/packages/{row.id}`, this function returns the path with example 
            data filling each token surrounded with {}
        """
        tokenPattern = r'\{[^}]*\}'
        matches = re.findall(tokenPattern, self.path)
        parsedPath = self.path

        pathParameters = self.definition['parameters'] # [{in: 'path', name:'ident'}]
        matchedPathParameters = []

        for curlyBraceMatch in matches:
            paramName = curlyBraceMatch.replace("{", "").replace("}", "")

            # Replace persisted variables first
            if paramName in PERSIST_VARIABLES.keys():
                parsedPath = parsedPath.replace(curlyBraceMatch, PERSIST_VARIABLES[paramName])

            # Then replace the parameter with any example that we found
            else:
                for index in enumerate(pathParameters):
                    parameter = pathParameters[index]
                    if parameter["name"] == paramName:
                        if "example" not in parameter["schema"]:
                            writeTestFail("schema for url parameter " + str(parameter) + " has no example")
                            return "error"
                        example = parameter["schema"]["example"]
                        parsedPath = parsedPath.replace(curlyBraceMatch, str(example))
                        matchedPathParameters.append(paramName)
    
        return parsedPath
    
    def getPossibleResponseCodes(self) -> List[int]:
        """
            Returns a list of response codes defined in the specification for this route. During testing we will attempt to receive
            each of these codes.
        """
        if "responses" not in self.definition:
            writeTestFail("no responses defined")
            return []
        
        responseCodes = []
        for key in self.definition["responses"].keys():
            responseCodes.append(int(key))
        return responseCodes

    def getExampleRequestBody(self, omitVars: list = None) -> dict:
        """
            Builds an example payload to send to this Route based on the specification. 
            
            This is referenced from the `requestBody.content.application/json.schema` of a particular Route.
        """
        
        # Not all requests have a body to send, so verify it's present first in the route definition
        if "requestBody" not in self.definition.keys():
            return ""
        
        exampleBodyDefinition = self.definition["requestBody"]["content"]["application/json"]['schema']

        # Some request bodies are references to full components/models and need to be expanded
        if "$ref" in exampleBodyDefinition.keys():
            exampleBodyDefinition = expandRef(exampleBodyDefinition["$ref"])

        # Go through each property and ensure the needed type info and example info are present. Otherwise we don't know
        # how to build the route's required payload correctly.
        parameters = []
        exampleBodyProperties = exampleBodyDefinition["properties"].keys()
        for key in exampleBodyProperties:
            property = exampleBodyDefinition["properties"][key]
            example = ""
            typeName = ""

            # Examples are required, based on how the example is formatted (provided in spec, via ref, or potentially an array, this determines how to get example data.)
            if "example" in property.keys():
                example = property["example"]
            elif "$ref" in property.keys():
                objectRef = expandRef(property["$ref"])['properties']
                
                objItems = {}
                for objKey in objectRef:
                    if 'example' not in objectRef[objKey]:
                        print(f"{red(f'  error - no example on object ref `{itemKey}` for object ' + key)}")
                        return "error"
                    objItems[objKey] = objectRef[objKey]['example']
                
                example = objItems
                
            elif "type" in property.keys() and property["type"] == "array":
                items = property["items"]
                if "$ref" in items:
                    itemsRef = expandRef(items["$ref"])['properties']
                    itemsKeys = itemsRef.keys()
                    exampleItems = {}
                    for itemKey in itemsKeys:
                        itemRef = itemsRef[itemKey]
                        if "example" not in itemRef:
                            print(f"{red(f'  error - no example on ref property `{itemKey}` for item array: ' + key)}")
                            return "error"
                        else:
                            exampleItems[itemKey] = itemsRef[itemKey]['example']

                    example = [exampleItems]
                else: # no ref, so it's probably a wrapped array of objects
                    if "items" in property:
                        itemArrayProps = property['items']['properties']
                        exampleItems = {}
                        for prop in itemArrayProps.keys():
                            if "$ref" in itemArrayProps[prop]:
                                itemArrayProps[prop] = expandRef(itemArrayProps[prop]['$ref'])
                                innerItems = {}
                                for expandedRefKey in itemArrayProps[prop]['properties'].keys():
                                    innerItems[expandedRefKey] = itemArrayProps[prop]['properties'][expandedRefKey]['example']
                                exampleItems[prop] = innerItems
                            example = [exampleItems]
                    else:
                        print(f"{red('  error - no items for array: ' + key)}   available properties: {itemArrayProps.keys()}")
                        return "error"
            else:
                print(f"{red('  error - no example for parameter ' + key)}")
                return "error"

            parameters.append(RequestParameter(key, typeName, example))

        # The final example payload is a dict with our found parameter names matched to their example values.
        examplePayload = {}
        for parameter in parameters:
            examplePayload[parameter.key] = parameter.example

        # If any vars need to be omitted, remove them before returning the request body
        if omitVars is not None:
            for omitVar in omitVars:
                print(yellow(f"  omitting {omitVar} from example"), end='')
                if omitVar in examplePayload:
                    del examplePayload[omitVar]

        return examplePayload
    
    def getEmptyRequestBody(self) -> dict:
        """
            An empty request body should be a representation of an 'empty' object for the API.
        """
        return {}
    
    def getMalformedRequestBody(self) -> dict:
        """
            A malformed request body should appear valid but have invalid data
        """
        exampleRequestBody = self.getExampleRequestBody()
        malformedPayload = {}

        #FIXME
        if 'datetime.datetime' in exampleRequestBody:
            return {'foo':'bar'}
        
        if exampleRequestBody is not None and exampleRequestBody != "error" and exampleRequestBody != "":
            exampleRequestBody = json.loads(exampleRequestBody)
            for key in exampleRequestBody.keys():
                malformedPayload[key] = "<value>"
        return malformedPayload
    
    def run(self, path, requestBody: dict) -> Response:
        """
            Executes a given route with the provided request body. 
            A `Response` is returned containing the response code, a text copy of the response, and json response if provided.
        """
        
        try:
            jsonRequestBodyDict = {}
            if requestBody is not None and requestBody != "":    
                for key, value in requestBody.items():
                    if isinstance(value, datetime):
                        requestBody[key] = convert_datetime(value)
                # Convert the dictionary to a JSON string
                jsonRequestBody = json.dumps(requestBody)
                # Attempt to load the JSON string back to a dictionary as a simulation of receiving and processing JSON data
                jsonRequestBodyDict = json.loads(jsonRequestBody)

            #jsonRequestBodyDict = "" if requestBody == None or requestBody == "" or requestBody == {} else json.loads(requestBody.replace("'", "\""))
            # Python datetimes are not serialized to json, for any datetimes we put them in a serializable format here.
            #print(yellow(jsonRequestBodyDict))
            
            auth = HTTPBasicAuth(CONFIG['auth']['username'], CONFIG['auth']['password'])
            headers = {
                'Accept' : 'application/json'
            }

            jsonRequestBody = json.dumps(jsonRequestBodyDict)
            if self.method == "get":
                response = requests.get(API_PATH + path, json = jsonRequestBodyDict, auth=auth, headers=headers)
            elif self.method == "post":
                response = requests.post(API_PATH + path, json = jsonRequestBodyDict, auth=auth, headers=headers)
            elif self.method == "put":
                response = requests.put(API_PATH + path, json = jsonRequestBodyDict, auth=auth, headers=headers)
            elif self.method == "delete":
                response = requests.delete(API_PATH + path, json = jsonRequestBodyDict, auth=auth, headers=headers)
            else:
                print(" invalid method: " + red(str(self.method)))
                return None
            try:
                return Response(response.status_code, response.text, response.json())
            except ValueError:
                return Response(response.status_code, response.text, {})
            
        except Exception as e:
            global FAILURES
            FAILURES += 1
            print(" " + red(str(e)) + ": " + grey(requestBody))
            return None
    
def parseOpenAPISpec(filename: str) -> List[Route]:
    """
        Reads the OpenAPI specification and configures the script for testing, returning a list of routes to test.
    """
    with open(filename, 'r') as file:
        api_doc = yaml.safe_load(file)

    global OPENAPI_SPEC
    OPENAPI_SPEC = api_doc

    routes = []
    paths = api_doc.get('paths', {})
    
    # Ensure a test server was found
    servers = api_doc.get('servers', {})
    if len(servers) == 0:
        writeTestFail("no production api server defined in spec")
        return []
    
    global API_PATH
    API_PATH = servers[0]["url"]
    print("production api path: " + blue_underline(API_PATH) + "\n")

    # Parse the YAML down to each path's method, and build a Route object
    for path, operations in paths.items():
        for method, details in operations.items():
            operation_id = details.get('operationId', 'undefined')
            route = Route(method, path, operation_id, details)
            routes.append(route)

    return routes

def parseConfig():
    with open('e2e_config.yaml', 'r') as file:
        config_doc = yaml.safe_load(file)

    global CONFIG
    CONFIG = config_doc

def writeTestPass(message: str):
    """
        Indicates a test passed and increments the number of overall passes
    """
    global PASSES
    PASSES += 1
    print(f" {green('[PASS]')} {message}")

def writeTestFail(message: str):
    """
        Indicates a test failed /an error occurred during testing a route, and increments the number of overall failures.
    """
    global FAILURES
    FAILURES += 1
    print(f" {red('[FAIL]')} {message}")

def writeTestResult(name: str, verb: str, path: str, url: str, request: str, expectedCode: int, actualCode: int, responseBody: str, passed: bool, notes: str):
    #if "DOCTYPE" in responseBody:
        #print(red("   !! html response: " + responseBody))

    REPORT.writerow({
        'Name': name, 
        'Verb': verb, 
        'Path': path,
        'URL': url, 
        'Request': json.dumps(request, default=convert_datetime).replace(",","\",\""), 
        'Expected': str(expectedCode), 
        'Actual': str(actualCode), 
        'Response': "html document" if "DOCTYPE" in responseBody else responseBody, 
        'Status': "Pass" if passed else "Fail", 
        'Notes': notes})
    
def testRoute(route: Route, expectedResponseCode: int, persistVars: list = None, omitVars: list = None):
    """
        Tests a route against an expected response code. The appropriate requestBody will be fetched from the route definition.
    """
    ['Name', 'Verb', 'Path', 'URL', 'Request', 'Expected', 'Actual','Response', 'Status', 'Notes']
    testName = route.definition['description'] if 'description' in route.definition else route.definition['operationId']
    testVerb = route.method
    testUrl = route.path

    # Test using the example body first, ensuring that we were able to find and parse it
    testingRequestBody = {}
    testPath = route.path
    if expectedResponseCode == 200 or expectedResponseCode == 204:
        if '{' in route.path:
            testPath = route.expandPathTokens()
            if testPath == "error":
                return
            print(f"  using: " + blue_underline(testPath), end='')

        testingRequestBody = route.getExampleRequestBody(omitVars)
        if testingRequestBody == "error":
            writeTestFail(f"invalid schema")
            return
    elif expectedResponseCode == 400:
        if '{' in route.path:
            testPath = route.expandPathTokens()
            if testPath == "error":
                return
            print(f"  using: " + blue_underline(testPath), end='')

        if testingRequestBody == "error":
            writeTestFail(f"invalid schema")
            return
    elif expectedResponseCode == 404:
        if '{' in testPath:
            testPath = route.expandPathTokensWithNoVar()
        print(f"  using: " + blue_underline(testPath), end='')
        testingRequestBody = route.getExampleRequestBody()
        if testingRequestBody == "error":
            writeTestFail(f"invalid schema")
            return
    elif expectedResponseCode == 422:
        if '{' in testPath:
            testPath = route.expandPathTokensWithNoVar()
        print(f"  using: " + blue_underline(testPath), end='')
        if testingRequestBody == "error":
            writeTestFail(f"invalid schema")
            return
    else:
        writeTestFail(red("unexpected response code in spec, potential missing request body: " + str(expectedResponseCode)))
        return
    

    # Ensure an empty request body is always a dict
    if testingRequestBody == "":
        testingRequestBody = {}

    testResponse = route.run(testPath, testingRequestBody)
    if testResponse is not None and testResponse.code != expectedResponseCode:
        #if testingRequestBody is not None and testingRequestBody != "":
            #print(f" | '{grey(testingRequestBody)}'")

        writeTestFail(f"got {testResponse.code} | request: " + yellow(json.dumps(testingRequestBody)) + " | response: " + grey(json.dumps(testResponse.jsonBody)))
        writeTestResult(testName, testVerb, testUrl, testPath, testingRequestBody, expectedResponseCode, testResponse.code, testResponse.textBody, False, "")
        return
    elif testResponse is None: # No response from remote
        return
    else: # we got an expected response code

        # check the json response for variables to persist
        if testResponse.jsonBody is not {} and persistVars is not None:
            jsonBodyDict = json.dumps(testResponse.jsonBody)
            jsonBodyDict = json.loads(jsonBodyDict)
            for var in persistVars:
                if var in jsonBodyDict:
                    print(purple(f" persisting response variable: {var}={jsonBodyDict[var]}"), end='')
                    global PERSIST_VARIABLES
                    PERSIST_VARIABLES[var] = jsonBodyDict[var]
        
        #ensure response body matches expected if content is provided
        expectedResponseJson = route.definition['responses'][str(expectedResponseCode)]
        if 'content' in expectedResponseJson:
            expectedResponseJson = expectedResponseJson['content']['application/json']
            if 'schema' in expectedResponseJson:
                expectedResponseJson = expectedResponseJson['schema']
                if '$ref' in expectedResponseJson:
                    expectedResponseJson = expandRef(expectedResponseJson['$ref'])['properties']

            keysMissing = []
            for key in expectedResponseJson:
                if key not in testResponse.jsonBody:
                    keysMissing.append(key)

            if len(keysMissing) > 0:
                writeTestFail(f"API response keys do not match specification")
                writeTestResult(testName, testVerb, testUrl, testPath, testingRequestBody, expectedResponseCode, testResponse.code, testResponse.textBody, False, "Response keys do not match specification")
                return
            else:
                writeTestPass(f"")
                writeTestResult(testName, testVerb, testUrl, testPath, testingRequestBody, expectedResponseCode, testResponse.code, testResponse.textBody, True, "")
                return
        
        writeTestPass(f"")
        writeTestResult(testName, testVerb, testUrl, testPath, testingRequestBody, expectedResponseCode, testResponse.code, testResponse.textBody, True, "")

def main():
    """
       Main entrypoint. Parses the OpenAPI specification and outputs the test results.

       If a route is missing type or example data on any of its parameters, it will not be tested.

       The number of routes tested vs the number of routes found in the specification will be output when complete.

       The overall number of test passes and fails are also printed on completion.
    """
    parseConfig()
    routes = parseOpenAPISpec("../openapi.yaml")
    numRoutesTested = 0
    routesTested = []

    # Prepare CSV report for test results.
    csvReport = open("e2e_test_results.csv", mode='w', newline='', encoding='utf-8')
    global REPORT
    REPORT = csv.DictWriter(csvReport, fieldnames=['Name', 'Verb', 'Path', 'URL', 'Request', 'Expected', 'Actual','Response', 'Status', 'Notes'])
    REPORT.writeheader()

    # Persist any pre-defined variables
    global PERSIST_VARIABLES
    for variable in CONFIG['variables']:
        PERSIST_VARIABLES[str(variable)] = str(CONFIG['variables'][variable])

    for order in CONFIG['order']:
        for route in routes:
            parsedRoute = route.method.lower() + " " + route.path.lower()
            if parsedRoute == order['url'].lower():
                possibleResponses = route.getPossibleResponseCodes()
                print(f"{purple(route.method.upper())} {blue_underline(route.path)}")
                for possibleResponseCode in possibleResponses:
                    print(f"  -> expect {possibleResponseCode}", end='')
                    omitVars = []
                    if 'omit' in order:
                        omitVars.append(order['omit'])
                    if 'persist' in order:
                        testRoute(route, possibleResponseCode, [order['persist']],omitVars)
                    else:
                        testRoute(route, possibleResponseCode, None, omitVars)
                routesTested.append(route)
                numRoutesTested += 1

    csvReport.close()

    # Print the overall passes and fails
    print(f"\n {green('PASSES')}: {PASSES}   {red('FAILS')}: {FAILURES}")
    print("")

    # Print the routes we tested
    print(f"{numRoutesTested} routes tested: ")
    for route in routes:
        if route in routesTested:
            print(f" {purple(route.method.upper())}\t {blue_underline(route.path)}")

    # Print the routes we didn't test
    numRoutesNotTested = len(routes) - numRoutesTested
    if numRoutesNotTested > 0:
        print(f"{numRoutesNotTested} routes not tested: ")
        for route in routes:
            if route not in routesTested:
                print(f" {purple(route.method.upper())}\t {blue_underline(route.path)}")
    print("------------------------------------------------------------")
    print("Testing completed. Results written to `e2e_test_results.csv`")
    
# Convert datetime objects to ISO 8601 format strings
def convert_datetime(obj):
    if isinstance(obj, datetime):
        return obj.isoformat()
    return obj

# Helper functions for printing colors 
def grey(text: str) -> str:
    return "\033[38;5;244m" + str(text) + "\033[0m"

def red(text: str) -> str:
    return "\033[91m" + str(text) + "\033[0m"

def blue(text: str) -> str:
    return "\033[94m" + str(text) + "\033[0m"

def blue_underline(text: str) -> str:
    return "\033[94;4m" + str(text) + "\033[0m"

def yellow(text: str) -> str:
    return "\033[93m" + str(text) + "\033[0m"

def purple(text: str) -> str:
    return "\033[95m" + str(text) + "\033[0m"

def green(text: str) -> str:
    return "\033[92m" + str(text) + "\033[0m"

if __name__ == '__main__':
    main()