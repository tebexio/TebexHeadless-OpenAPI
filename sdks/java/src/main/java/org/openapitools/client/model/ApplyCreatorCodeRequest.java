/*
 * Tebex Headless API
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


package org.openapitools.client.model;

import java.util.Objects;
import com.google.gson.TypeAdapter;
import com.google.gson.annotations.JsonAdapter;
import com.google.gson.annotations.SerializedName;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;
import java.util.Arrays;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import com.google.gson.JsonArray;
import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonObject;
import com.google.gson.JsonParseException;
import com.google.gson.TypeAdapterFactory;
import com.google.gson.reflect.TypeToken;
import com.google.gson.TypeAdapter;
import com.google.gson.stream.JsonReader;
import com.google.gson.stream.JsonWriter;
import java.io.IOException;

import java.lang.reflect.Type;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import TebexHeadless.JSON;

/**
 * ApplyCreatorCodeRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-28T09:45:28.830932-05:00[America/Chicago]", comments = "Generator version: 7.5.0")
public class ApplyCreatorCodeRequest {
  public static final String SERIALIZED_NAME_CREATOR_CODE = "creator_code";
  @SerializedName(SERIALIZED_NAME_CREATOR_CODE)
  private String creatorCode;

  public ApplyCreatorCodeRequest() {
  }

  public ApplyCreatorCodeRequest creatorCode(String creatorCode) {
    this.creatorCode = creatorCode;
    return this;
  }

   /**
   * Get creatorCode
   * @return creatorCode
  **/
  @javax.annotation.Nullable
  public String getCreatorCode() {
    return creatorCode;
  }

  public void setCreatorCode(String creatorCode) {
    this.creatorCode = creatorCode;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ApplyCreatorCodeRequest applyCreatorCodeRequest = (ApplyCreatorCodeRequest) o;
    return Objects.equals(this.creatorCode, applyCreatorCodeRequest.creatorCode);
  }

  @Override
  public int hashCode() {
    return Objects.hash(creatorCode);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ApplyCreatorCodeRequest {\n");
    sb.append("    creatorCode: ").append(toIndentedString(creatorCode)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }


  public static HashSet<String> openapiFields;
  public static HashSet<String> openapiRequiredFields;

  static {
    // a set of all properties/fields (JSON key names)
    openapiFields = new HashSet<String>();
    openapiFields.add("creator_code");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to ApplyCreatorCodeRequest
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!ApplyCreatorCodeRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in ApplyCreatorCodeRequest is not found in the empty JSON string", ApplyCreatorCodeRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!ApplyCreatorCodeRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `ApplyCreatorCodeRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("creator_code") != null && !jsonObj.get("creator_code").isJsonNull()) && !jsonObj.get("creator_code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `creator_code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("creator_code").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!ApplyCreatorCodeRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'ApplyCreatorCodeRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<ApplyCreatorCodeRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(ApplyCreatorCodeRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<ApplyCreatorCodeRequest>() {
           @Override
           public void write(JsonWriter out, ApplyCreatorCodeRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public ApplyCreatorCodeRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of ApplyCreatorCodeRequest given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of ApplyCreatorCodeRequest
  * @throws IOException if the JSON string is invalid with respect to ApplyCreatorCodeRequest
  */
  public static ApplyCreatorCodeRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, ApplyCreatorCodeRequest.class);
  }

 /**
  * Convert an instance of ApplyCreatorCodeRequest to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

