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
import java.net.URI;
import java.time.OffsetDateTime;
import java.util.Arrays;
import org.openapitools.jackson.nullable.JsonNullable;

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
 * Webstore
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-28T09:45:28.830932-05:00[America/Chicago]", comments = "Generator version: 7.5.0")
public class Webstore {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private Integer id;

  public static final String SERIALIZED_NAME_DESCRIPTION = "description";
  @SerializedName(SERIALIZED_NAME_DESCRIPTION)
  private String description;

  public static final String SERIALIZED_NAME_NAME = "name";
  @SerializedName(SERIALIZED_NAME_NAME)
  private String name;

  public static final String SERIALIZED_NAME_WEBSTORE_URL = "webstore_url";
  @SerializedName(SERIALIZED_NAME_WEBSTORE_URL)
  private URI webstoreUrl;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_LANG = "lang";
  @SerializedName(SERIALIZED_NAME_LANG)
  private String lang;

  public static final String SERIALIZED_NAME_LOGO = "logo";
  @SerializedName(SERIALIZED_NAME_LOGO)
  private URI logo;

  public static final String SERIALIZED_NAME_PLATFORM_TYPE = "platform_type";
  @SerializedName(SERIALIZED_NAME_PLATFORM_TYPE)
  private String platformType;

  public static final String SERIALIZED_NAME_PLATFORM_TYPE_ID = "platform_type_id";
  @SerializedName(SERIALIZED_NAME_PLATFORM_TYPE_ID)
  private String platformTypeId;

  public static final String SERIALIZED_NAME_CREATED_AT = "created_at";
  @SerializedName(SERIALIZED_NAME_CREATED_AT)
  private OffsetDateTime createdAt;

  public Webstore() {
  }

  public Webstore id(Integer id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }


  public Webstore description(String description) {
    this.description = description;
    return this;
  }

   /**
   * Store description in HTML format
   * @return description
  **/
  @javax.annotation.Nullable
  public String getDescription() {
    return description;
  }

  public void setDescription(String description) {
    this.description = description;
  }


  public Webstore name(String name) {
    this.name = name;
    return this;
  }

   /**
   * Name of the store
   * @return name
  **/
  @javax.annotation.Nullable
  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }


  public Webstore webstoreUrl(URI webstoreUrl) {
    this.webstoreUrl = webstoreUrl;
    return this;
  }

   /**
   * URL of the webstore
   * @return webstoreUrl
  **/
  @javax.annotation.Nullable
  public URI getWebstoreUrl() {
    return webstoreUrl;
  }

  public void setWebstoreUrl(URI webstoreUrl) {
    this.webstoreUrl = webstoreUrl;
  }


  public Webstore currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * Currency used in the store
   * @return currency
  **/
  @javax.annotation.Nullable
  public String getCurrency() {
    return currency;
  }

  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public Webstore lang(String lang) {
    this.lang = lang;
    return this;
  }

   /**
   * Language of the store
   * @return lang
  **/
  @javax.annotation.Nullable
  public String getLang() {
    return lang;
  }

  public void setLang(String lang) {
    this.lang = lang;
  }


  public Webstore logo(URI logo) {
    this.logo = logo;
    return this;
  }

   /**
   * URL of the store&#39;s logo
   * @return logo
  **/
  @javax.annotation.Nullable
  public URI getLogo() {
    return logo;
  }

  public void setLogo(URI logo) {
    this.logo = logo;
  }


  public Webstore platformType(String platformType) {
    this.platformType = platformType;
    return this;
  }

   /**
   * Platform type for the store
   * @return platformType
  **/
  @javax.annotation.Nullable
  public String getPlatformType() {
    return platformType;
  }

  public void setPlatformType(String platformType) {
    this.platformType = platformType;
  }


  public Webstore platformTypeId(String platformTypeId) {
    this.platformTypeId = platformTypeId;
    return this;
  }

   /**
   * Get platformTypeId
   * @return platformTypeId
  **/
  @javax.annotation.Nullable
  public String getPlatformTypeId() {
    return platformTypeId;
  }

  public void setPlatformTypeId(String platformTypeId) {
    this.platformTypeId = platformTypeId;
  }


  public Webstore createdAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
    return this;
  }

   /**
   * The date and time when the store was created
   * @return createdAt
  **/
  @javax.annotation.Nullable
  public OffsetDateTime getCreatedAt() {
    return createdAt;
  }

  public void setCreatedAt(OffsetDateTime createdAt) {
    this.createdAt = createdAt;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Webstore webstore = (Webstore) o;
    return Objects.equals(this.id, webstore.id) &&
        Objects.equals(this.description, webstore.description) &&
        Objects.equals(this.name, webstore.name) &&
        Objects.equals(this.webstoreUrl, webstore.webstoreUrl) &&
        Objects.equals(this.currency, webstore.currency) &&
        Objects.equals(this.lang, webstore.lang) &&
        Objects.equals(this.logo, webstore.logo) &&
        Objects.equals(this.platformType, webstore.platformType) &&
        Objects.equals(this.platformTypeId, webstore.platformTypeId) &&
        Objects.equals(this.createdAt, webstore.createdAt);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, description, name, webstoreUrl, currency, lang, logo, platformType, platformTypeId, createdAt);
  }

  private static <T> int hashCodeNullable(JsonNullable<T> a) {
    if (a == null) {
      return 1;
    }
    return a.isPresent() ? Arrays.deepHashCode(new Object[]{a.get()}) : 31;
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Webstore {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    description: ").append(toIndentedString(description)).append("\n");
    sb.append("    name: ").append(toIndentedString(name)).append("\n");
    sb.append("    webstoreUrl: ").append(toIndentedString(webstoreUrl)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    lang: ").append(toIndentedString(lang)).append("\n");
    sb.append("    logo: ").append(toIndentedString(logo)).append("\n");
    sb.append("    platformType: ").append(toIndentedString(platformType)).append("\n");
    sb.append("    platformTypeId: ").append(toIndentedString(platformTypeId)).append("\n");
    sb.append("    createdAt: ").append(toIndentedString(createdAt)).append("\n");
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
    openapiFields.add("id");
    openapiFields.add("description");
    openapiFields.add("name");
    openapiFields.add("webstore_url");
    openapiFields.add("currency");
    openapiFields.add("lang");
    openapiFields.add("logo");
    openapiFields.add("platform_type");
    openapiFields.add("platform_type_id");
    openapiFields.add("created_at");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to Webstore
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!Webstore.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Webstore is not found in the empty JSON string", Webstore.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!Webstore.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Webstore` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("description") != null && !jsonObj.get("description").isJsonNull()) && !jsonObj.get("description").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `description` to be a primitive type in the JSON string but got `%s`", jsonObj.get("description").toString()));
      }
      if ((jsonObj.get("name") != null && !jsonObj.get("name").isJsonNull()) && !jsonObj.get("name").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `name` to be a primitive type in the JSON string but got `%s`", jsonObj.get("name").toString()));
      }
      if ((jsonObj.get("webstore_url") != null && !jsonObj.get("webstore_url").isJsonNull()) && !jsonObj.get("webstore_url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `webstore_url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("webstore_url").toString()));
      }
      if ((jsonObj.get("currency") != null && !jsonObj.get("currency").isJsonNull()) && !jsonObj.get("currency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `currency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("currency").toString()));
      }
      if ((jsonObj.get("lang") != null && !jsonObj.get("lang").isJsonNull()) && !jsonObj.get("lang").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `lang` to be a primitive type in the JSON string but got `%s`", jsonObj.get("lang").toString()));
      }
      if ((jsonObj.get("logo") != null && !jsonObj.get("logo").isJsonNull()) && !jsonObj.get("logo").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `logo` to be a primitive type in the JSON string but got `%s`", jsonObj.get("logo").toString()));
      }
      if ((jsonObj.get("platform_type") != null && !jsonObj.get("platform_type").isJsonNull()) && !jsonObj.get("platform_type").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platform_type` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platform_type").toString()));
      }
      if ((jsonObj.get("platform_type_id") != null && !jsonObj.get("platform_type_id").isJsonNull()) && !jsonObj.get("platform_type_id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `platform_type_id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("platform_type_id").toString()));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Webstore.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Webstore' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Webstore> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Webstore.class));

       return (TypeAdapter<T>) new TypeAdapter<Webstore>() {
           @Override
           public void write(JsonWriter out, Webstore value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Webstore read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Webstore given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Webstore
  * @throws IOException if the JSON string is invalid with respect to Webstore
  */
  public static Webstore fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Webstore.class);
  }

 /**
  * Convert an instance of Webstore to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

