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
 * UpdateTierRequest
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-28T09:45:28.830932-05:00[America/Chicago]", comments = "Generator version: 7.5.0")
public class UpdateTierRequest {
  public static final String SERIALIZED_NAME_PACKAGE_ID = "package_id";
  @SerializedName(SERIALIZED_NAME_PACKAGE_ID)
  private String packageId;

  public UpdateTierRequest() {
  }

  public UpdateTierRequest packageId(String packageId) {
    this.packageId = packageId;
    return this;
  }

   /**
   * Get packageId
   * @return packageId
  **/
  @javax.annotation.Nullable
  public String getPackageId() {
    return packageId;
  }

  public void setPackageId(String packageId) {
    this.packageId = packageId;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    UpdateTierRequest updateTierRequest = (UpdateTierRequest) o;
    return Objects.equals(this.packageId, updateTierRequest.packageId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(packageId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class UpdateTierRequest {\n");
    sb.append("    packageId: ").append(toIndentedString(packageId)).append("\n");
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
    openapiFields.add("package_id");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to UpdateTierRequest
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!UpdateTierRequest.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in UpdateTierRequest is not found in the empty JSON string", UpdateTierRequest.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!UpdateTierRequest.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `UpdateTierRequest` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("package_id") != null && !jsonObj.get("package_id").isJsonNull()) && !jsonObj.get("package_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `package_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("package_id").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!UpdateTierRequest.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'UpdateTierRequest' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<UpdateTierRequest> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(UpdateTierRequest.class));

       return (TypeAdapter<T>) new TypeAdapter<UpdateTierRequest>() {
           @Override
           public void write(JsonWriter out, UpdateTierRequest value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public UpdateTierRequest read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of UpdateTierRequest given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of UpdateTierRequest
  * @throws IOException if the JSON string is invalid with respect to UpdateTierRequest
  */
  public static UpdateTierRequest fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, UpdateTierRequest.class);
  }

 /**
  * Convert an instance of UpdateTierRequest to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

