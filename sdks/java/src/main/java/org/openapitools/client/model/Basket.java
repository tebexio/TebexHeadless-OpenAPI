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
import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import org.openapitools.client.model.BasketLinks;
import org.openapitools.client.model.BasketPackage;
import org.openapitools.client.model.Coupon;
import org.openapitools.client.model.GiftCard;
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
 * Basket
 */
@javax.annotation.Generated(value = "org.openapitools.codegen.languages.JavaClientCodegen", date = "2024-06-28T09:45:28.830932-05:00[America/Chicago]", comments = "Generator version: 7.5.0")
public class Basket {
  public static final String SERIALIZED_NAME_ID = "id";
  @SerializedName(SERIALIZED_NAME_ID)
  private String id;

  public static final String SERIALIZED_NAME_IDENT = "ident";
  @SerializedName(SERIALIZED_NAME_IDENT)
  private String ident;

  public static final String SERIALIZED_NAME_COMPLETE = "complete";
  @SerializedName(SERIALIZED_NAME_COMPLETE)
  private Boolean complete;

  public static final String SERIALIZED_NAME_EMAIL = "email";
  @SerializedName(SERIALIZED_NAME_EMAIL)
  private String email;

  public static final String SERIALIZED_NAME_USERNAME = "username";
  @SerializedName(SERIALIZED_NAME_USERNAME)
  private String username;

  public static final String SERIALIZED_NAME_COUPONS = "coupons";
  @SerializedName(SERIALIZED_NAME_COUPONS)
  private List<Coupon> coupons = new ArrayList<>();

  public static final String SERIALIZED_NAME_GIFTCARDS = "giftcards";
  @SerializedName(SERIALIZED_NAME_GIFTCARDS)
  private List<GiftCard> giftcards = new ArrayList<>();

  public static final String SERIALIZED_NAME_CREATOR_CODE = "creator_code";
  @SerializedName(SERIALIZED_NAME_CREATOR_CODE)
  private String creatorCode;

  public static final String SERIALIZED_NAME_CANCEL_URL = "cancel_url";
  @SerializedName(SERIALIZED_NAME_CANCEL_URL)
  private String cancelUrl;

  public static final String SERIALIZED_NAME_COMPLETE_URL = "complete_url";
  @SerializedName(SERIALIZED_NAME_COMPLETE_URL)
  private String completeUrl;

  public static final String SERIALIZED_NAME_COMPLETE_AUTO_REDIRECT = "complete_auto_redirect";
  @SerializedName(SERIALIZED_NAME_COMPLETE_AUTO_REDIRECT)
  private Boolean completeAutoRedirect;

  public static final String SERIALIZED_NAME_COUNTRY = "country";
  @SerializedName(SERIALIZED_NAME_COUNTRY)
  private String country;

  public static final String SERIALIZED_NAME_IP = "ip";
  @SerializedName(SERIALIZED_NAME_IP)
  private String ip;

  public static final String SERIALIZED_NAME_USERNAME_ID = "username_id";
  @SerializedName(SERIALIZED_NAME_USERNAME_ID)
  private BigDecimal usernameId;

  public static final String SERIALIZED_NAME_BASE_PRICE = "base_price";
  @SerializedName(SERIALIZED_NAME_BASE_PRICE)
  private Float basePrice;

  public static final String SERIALIZED_NAME_SALES_TAX = "sales_tax";
  @SerializedName(SERIALIZED_NAME_SALES_TAX)
  private Float salesTax;

  public static final String SERIALIZED_NAME_TOTAL_PRICE = "total_price";
  @SerializedName(SERIALIZED_NAME_TOTAL_PRICE)
  private Float totalPrice;

  public static final String SERIALIZED_NAME_CURRENCY = "currency";
  @SerializedName(SERIALIZED_NAME_CURRENCY)
  private String currency;

  public static final String SERIALIZED_NAME_PACKAGES = "packages";
  @SerializedName(SERIALIZED_NAME_PACKAGES)
  private List<BasketPackage> packages = new ArrayList<>();

  public static final String SERIALIZED_NAME_CUSTOM = "custom";
  @SerializedName(SERIALIZED_NAME_CUSTOM)
  private Object custom;

  public static final String SERIALIZED_NAME_LINKS = "links";
  @SerializedName(SERIALIZED_NAME_LINKS)
  private BasketLinks links;

  public Basket() {
  }

  public Basket id(String id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @javax.annotation.Nullable
  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }


  public Basket ident(String ident) {
    this.ident = ident;
    return this;
  }

   /**
   * Get ident
   * @return ident
  **/
  @javax.annotation.Nullable
  public String getIdent() {
    return ident;
  }

  public void setIdent(String ident) {
    this.ident = ident;
  }


  public Basket complete(Boolean complete) {
    this.complete = complete;
    return this;
  }

   /**
   * Get complete
   * @return complete
  **/
  @javax.annotation.Nullable
  public Boolean getComplete() {
    return complete;
  }

  public void setComplete(Boolean complete) {
    this.complete = complete;
  }


  public Basket email(String email) {
    this.email = email;
    return this;
  }

   /**
   * Get email
   * @return email
  **/
  @javax.annotation.Nullable
  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }


  public Basket username(String username) {
    this.username = username;
    return this;
  }

   /**
   * Get username
   * @return username
  **/
  @javax.annotation.Nullable
  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }


  public Basket coupons(List<Coupon> coupons) {
    this.coupons = coupons;
    return this;
  }

  public Basket addCouponsItem(Coupon couponsItem) {
    if (this.coupons == null) {
      this.coupons = new ArrayList<>();
    }
    this.coupons.add(couponsItem);
    return this;
  }

   /**
   * Get coupons
   * @return coupons
  **/
  @javax.annotation.Nullable
  public List<Coupon> getCoupons() {
    return coupons;
  }

  public void setCoupons(List<Coupon> coupons) {
    this.coupons = coupons;
  }


  public Basket giftcards(List<GiftCard> giftcards) {
    this.giftcards = giftcards;
    return this;
  }

  public Basket addGiftcardsItem(GiftCard giftcardsItem) {
    if (this.giftcards == null) {
      this.giftcards = new ArrayList<>();
    }
    this.giftcards.add(giftcardsItem);
    return this;
  }

   /**
   * Get giftcards
   * @return giftcards
  **/
  @javax.annotation.Nullable
  public List<GiftCard> getGiftcards() {
    return giftcards;
  }

  public void setGiftcards(List<GiftCard> giftcards) {
    this.giftcards = giftcards;
  }


  public Basket creatorCode(String creatorCode) {
    this.creatorCode = creatorCode;
    return this;
  }

   /**
   * The creator code is used to share a percentage of the payment with another party. See more about creator codes at https://docs.tebex.io/creators/tebex-control-panel/engagement/creator-codes
   * @return creatorCode
  **/
  @javax.annotation.Nullable
  public String getCreatorCode() {
    return creatorCode;
  }

  public void setCreatorCode(String creatorCode) {
    this.creatorCode = creatorCode;
  }


  public Basket cancelUrl(String cancelUrl) {
    this.cancelUrl = cancelUrl;
    return this;
  }

   /**
   * Get cancelUrl
   * @return cancelUrl
  **/
  @javax.annotation.Nullable
  public String getCancelUrl() {
    return cancelUrl;
  }

  public void setCancelUrl(String cancelUrl) {
    this.cancelUrl = cancelUrl;
  }


  public Basket completeUrl(String completeUrl) {
    this.completeUrl = completeUrl;
    return this;
  }

   /**
   * Get completeUrl
   * @return completeUrl
  **/
  @javax.annotation.Nullable
  public String getCompleteUrl() {
    return completeUrl;
  }

  public void setCompleteUrl(String completeUrl) {
    this.completeUrl = completeUrl;
  }


  public Basket completeAutoRedirect(Boolean completeAutoRedirect) {
    this.completeAutoRedirect = completeAutoRedirect;
    return this;
  }

   /**
   * Get completeAutoRedirect
   * @return completeAutoRedirect
  **/
  @javax.annotation.Nullable
  public Boolean getCompleteAutoRedirect() {
    return completeAutoRedirect;
  }

  public void setCompleteAutoRedirect(Boolean completeAutoRedirect) {
    this.completeAutoRedirect = completeAutoRedirect;
  }


  public Basket country(String country) {
    this.country = country;
    return this;
  }

   /**
   * A two-character country code
   * @return country
  **/
  @javax.annotation.Nullable
  public String getCountry() {
    return country;
  }

  public void setCountry(String country) {
    this.country = country;
  }


  public Basket ip(String ip) {
    this.ip = ip;
    return this;
  }

   /**
   * Get ip
   * @return ip
  **/
  @javax.annotation.Nullable
  public String getIp() {
    return ip;
  }

  public void setIp(String ip) {
    this.ip = ip;
  }


  public Basket usernameId(BigDecimal usernameId) {
    this.usernameId = usernameId;
    return this;
  }

   /**
   * Get usernameId
   * @return usernameId
  **/
  @javax.annotation.Nullable
  public BigDecimal getUsernameId() {
    return usernameId;
  }

  public void setUsernameId(BigDecimal usernameId) {
    this.usernameId = usernameId;
  }


  public Basket basePrice(Float basePrice) {
    this.basePrice = basePrice;
    return this;
  }

   /**
   * Get basePrice
   * @return basePrice
  **/
  @javax.annotation.Nullable
  public Float getBasePrice() {
    return basePrice;
  }

  public void setBasePrice(Float basePrice) {
    this.basePrice = basePrice;
  }


  public Basket salesTax(Float salesTax) {
    this.salesTax = salesTax;
    return this;
  }

   /**
   * Get salesTax
   * @return salesTax
  **/
  @javax.annotation.Nullable
  public Float getSalesTax() {
    return salesTax;
  }

  public void setSalesTax(Float salesTax) {
    this.salesTax = salesTax;
  }


  public Basket totalPrice(Float totalPrice) {
    this.totalPrice = totalPrice;
    return this;
  }

   /**
   * Get totalPrice
   * @return totalPrice
  **/
  @javax.annotation.Nullable
  public Float getTotalPrice() {
    return totalPrice;
  }

  public void setTotalPrice(Float totalPrice) {
    this.totalPrice = totalPrice;
  }


  public Basket currency(String currency) {
    this.currency = currency;
    return this;
  }

   /**
   * A 3 character currency code
   * @return currency
  **/
  @javax.annotation.Nullable
  public String getCurrency() {
    return currency;
  }

  public void setCurrency(String currency) {
    this.currency = currency;
  }


  public Basket packages(List<BasketPackage> packages) {
    this.packages = packages;
    return this;
  }

  public Basket addPackagesItem(BasketPackage packagesItem) {
    if (this.packages == null) {
      this.packages = new ArrayList<>();
    }
    this.packages.add(packagesItem);
    return this;
  }

   /**
   * Get packages
   * @return packages
  **/
  @javax.annotation.Nullable
  public List<BasketPackage> getPackages() {
    return packages;
  }

  public void setPackages(List<BasketPackage> packages) {
    this.packages = packages;
  }


  public Basket custom(Object custom) {
    this.custom = custom;
    return this;
  }

   /**
   * Get custom
   * @return custom
  **/
  @javax.annotation.Nullable
  public Object getCustom() {
    return custom;
  }

  public void setCustom(Object custom) {
    this.custom = custom;
  }


  public Basket links(BasketLinks links) {
    this.links = links;
    return this;
  }

   /**
   * Get links
   * @return links
  **/
  @javax.annotation.Nullable
  public BasketLinks getLinks() {
    return links;
  }

  public void setLinks(BasketLinks links) {
    this.links = links;
  }



  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Basket basket = (Basket) o;
    return Objects.equals(this.id, basket.id) &&
        Objects.equals(this.ident, basket.ident) &&
        Objects.equals(this.complete, basket.complete) &&
        Objects.equals(this.email, basket.email) &&
        Objects.equals(this.username, basket.username) &&
        Objects.equals(this.coupons, basket.coupons) &&
        Objects.equals(this.giftcards, basket.giftcards) &&
        Objects.equals(this.creatorCode, basket.creatorCode) &&
        Objects.equals(this.cancelUrl, basket.cancelUrl) &&
        Objects.equals(this.completeUrl, basket.completeUrl) &&
        Objects.equals(this.completeAutoRedirect, basket.completeAutoRedirect) &&
        Objects.equals(this.country, basket.country) &&
        Objects.equals(this.ip, basket.ip) &&
        Objects.equals(this.usernameId, basket.usernameId) &&
        Objects.equals(this.basePrice, basket.basePrice) &&
        Objects.equals(this.salesTax, basket.salesTax) &&
        Objects.equals(this.totalPrice, basket.totalPrice) &&
        Objects.equals(this.currency, basket.currency) &&
        Objects.equals(this.packages, basket.packages) &&
        Objects.equals(this.custom, basket.custom) &&
        Objects.equals(this.links, basket.links);
  }

  private static <T> boolean equalsNullable(JsonNullable<T> a, JsonNullable<T> b) {
    return a == b || (a != null && b != null && a.isPresent() && b.isPresent() && Objects.deepEquals(a.get(), b.get()));
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, ident, complete, email, username, coupons, giftcards, creatorCode, cancelUrl, completeUrl, completeAutoRedirect, country, ip, usernameId, basePrice, salesTax, totalPrice, currency, packages, custom, links);
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
    sb.append("class Basket {\n");
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    ident: ").append(toIndentedString(ident)).append("\n");
    sb.append("    complete: ").append(toIndentedString(complete)).append("\n");
    sb.append("    email: ").append(toIndentedString(email)).append("\n");
    sb.append("    username: ").append(toIndentedString(username)).append("\n");
    sb.append("    coupons: ").append(toIndentedString(coupons)).append("\n");
    sb.append("    giftcards: ").append(toIndentedString(giftcards)).append("\n");
    sb.append("    creatorCode: ").append(toIndentedString(creatorCode)).append("\n");
    sb.append("    cancelUrl: ").append(toIndentedString(cancelUrl)).append("\n");
    sb.append("    completeUrl: ").append(toIndentedString(completeUrl)).append("\n");
    sb.append("    completeAutoRedirect: ").append(toIndentedString(completeAutoRedirect)).append("\n");
    sb.append("    country: ").append(toIndentedString(country)).append("\n");
    sb.append("    ip: ").append(toIndentedString(ip)).append("\n");
    sb.append("    usernameId: ").append(toIndentedString(usernameId)).append("\n");
    sb.append("    basePrice: ").append(toIndentedString(basePrice)).append("\n");
    sb.append("    salesTax: ").append(toIndentedString(salesTax)).append("\n");
    sb.append("    totalPrice: ").append(toIndentedString(totalPrice)).append("\n");
    sb.append("    currency: ").append(toIndentedString(currency)).append("\n");
    sb.append("    packages: ").append(toIndentedString(packages)).append("\n");
    sb.append("    custom: ").append(toIndentedString(custom)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
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
    openapiFields.add("ident");
    openapiFields.add("complete");
    openapiFields.add("email");
    openapiFields.add("username");
    openapiFields.add("coupons");
    openapiFields.add("giftcards");
    openapiFields.add("creator_code");
    openapiFields.add("cancel_url");
    openapiFields.add("complete_url");
    openapiFields.add("complete_auto_redirect");
    openapiFields.add("country");
    openapiFields.add("ip");
    openapiFields.add("username_id");
    openapiFields.add("base_price");
    openapiFields.add("sales_tax");
    openapiFields.add("total_price");
    openapiFields.add("currency");
    openapiFields.add("packages");
    openapiFields.add("custom");
    openapiFields.add("links");

    // a set of required properties/fields (JSON key names)
    openapiRequiredFields = new HashSet<String>();
  }

 /**
  * Validates the JSON Element and throws an exception if issues found
  *
  * @param jsonElement JSON Element
  * @throws IOException if the JSON Element is invalid with respect to Basket
  */
  public static void validateJsonElement(JsonElement jsonElement) throws IOException {
      if (jsonElement == null) {
        if (!Basket.openapiRequiredFields.isEmpty()) { // has required fields but JSON element is null
          throw new IllegalArgumentException(String.format("The required field(s) %s in Basket is not found in the empty JSON string", Basket.openapiRequiredFields.toString()));
        }
      }

      Set<Map.Entry<String, JsonElement>> entries = jsonElement.getAsJsonObject().entrySet();
      // check to see if the JSON string contains additional fields
      for (Map.Entry<String, JsonElement> entry : entries) {
        if (!Basket.openapiFields.contains(entry.getKey())) {
          throw new IllegalArgumentException(String.format("The field `%s` in the JSON string is not defined in the `Basket` properties. JSON: %s", entry.getKey(), jsonElement.toString()));
        }
      }
        JsonObject jsonObj = jsonElement.getAsJsonObject();
      if ((jsonObj.get("id") != null && !jsonObj.get("id").isJsonNull()) && !jsonObj.get("id").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `id` to be a primitive type in the JSON string but got `%s`", jsonObj.get("id").toString()));
      }
      if ((jsonObj.get("ident") != null && !jsonObj.get("ident").isJsonNull()) && !jsonObj.get("ident").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `ident` to be a primitive type in the JSON string but got `%s`", jsonObj.get("ident").toString()));
      }
      if ((jsonObj.get("email") != null && !jsonObj.get("email").isJsonNull()) && !jsonObj.get("email").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `email` to be a primitive type in the JSON string but got `%s`", jsonObj.get("email").toString()));
      }
      if ((jsonObj.get("username") != null && !jsonObj.get("username").isJsonNull()) && !jsonObj.get("username").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `username` to be a primitive type in the JSON string but got `%s`", jsonObj.get("username").toString()));
      }
      if (jsonObj.get("coupons") != null && !jsonObj.get("coupons").isJsonNull()) {
        JsonArray jsonArraycoupons = jsonObj.getAsJsonArray("coupons");
        if (jsonArraycoupons != null) {
          // ensure the json data is an array
          if (!jsonObj.get("coupons").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `coupons` to be an array in the JSON string but got `%s`", jsonObj.get("coupons").toString()));
          }

          // validate the optional field `coupons` (array)
          for (int i = 0; i < jsonArraycoupons.size(); i++) {
            Coupon.validateJsonElement(jsonArraycoupons.get(i));
          };
        }
      }
      if (jsonObj.get("giftcards") != null && !jsonObj.get("giftcards").isJsonNull()) {
        JsonArray jsonArraygiftcards = jsonObj.getAsJsonArray("giftcards");
        if (jsonArraygiftcards != null) {
          // ensure the json data is an array
          if (!jsonObj.get("giftcards").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `giftcards` to be an array in the JSON string but got `%s`", jsonObj.get("giftcards").toString()));
          }

          // validate the optional field `giftcards` (array)
          for (int i = 0; i < jsonArraygiftcards.size(); i++) {
            GiftCard.validateJsonElement(jsonArraygiftcards.get(i));
          };
        }
      }
      if ((jsonObj.get("creator_code") != null && !jsonObj.get("creator_code").isJsonNull()) && !jsonObj.get("creator_code").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `creator_code` to be a primitive type in the JSON string but got `%s`", jsonObj.get("creator_code").toString()));
      }
      if ((jsonObj.get("cancel_url") != null && !jsonObj.get("cancel_url").isJsonNull()) && !jsonObj.get("cancel_url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `cancel_url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("cancel_url").toString()));
      }
      if ((jsonObj.get("complete_url") != null && !jsonObj.get("complete_url").isJsonNull()) && !jsonObj.get("complete_url").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `complete_url` to be a primitive type in the JSON string but got `%s`", jsonObj.get("complete_url").toString()));
      }
      if ((jsonObj.get("country") != null && !jsonObj.get("country").isJsonNull()) && !jsonObj.get("country").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `country` to be a primitive type in the JSON string but got `%s`", jsonObj.get("country").toString()));
      }
      if ((jsonObj.get("ip") != null && !jsonObj.get("ip").isJsonNull()) && !jsonObj.get("ip").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `ip` to be a primitive type in the JSON string but got `%s`", jsonObj.get("ip").toString()));
      }
      if ((jsonObj.get("currency") != null && !jsonObj.get("currency").isJsonNull()) && !jsonObj.get("currency").isJsonPrimitive()) {
        throw new IllegalArgumentException(String.format("Expected the field `currency` to be a primitive type in the JSON string but got `%s`", jsonObj.get("currency").toString()));
      }
      if (jsonObj.get("packages") != null && !jsonObj.get("packages").isJsonNull()) {
        JsonArray jsonArraypackages = jsonObj.getAsJsonArray("packages");
        if (jsonArraypackages != null) {
          // ensure the json data is an array
          if (!jsonObj.get("packages").isJsonArray()) {
            throw new IllegalArgumentException(String.format("Expected the field `packages` to be an array in the JSON string but got `%s`", jsonObj.get("packages").toString()));
          }

          // validate the optional field `packages` (array)
          for (int i = 0; i < jsonArraypackages.size(); i++) {
            BasketPackage.validateJsonElement(jsonArraypackages.get(i));
          };
        }
      }
      // validate the optional field `links`
      if (jsonObj.get("links") != null && !jsonObj.get("links").isJsonNull()) {
        BasketLinks.validateJsonElement(jsonObj.get("links"));
      }
  }

  public static class CustomTypeAdapterFactory implements TypeAdapterFactory {
    @SuppressWarnings("unchecked")
    @Override
    public <T> TypeAdapter<T> create(Gson gson, TypeToken<T> type) {
       if (!Basket.class.isAssignableFrom(type.getRawType())) {
         return null; // this class only serializes 'Basket' and its subtypes
       }
       final TypeAdapter<JsonElement> elementAdapter = gson.getAdapter(JsonElement.class);
       final TypeAdapter<Basket> thisAdapter
                        = gson.getDelegateAdapter(this, TypeToken.get(Basket.class));

       return (TypeAdapter<T>) new TypeAdapter<Basket>() {
           @Override
           public void write(JsonWriter out, Basket value) throws IOException {
             JsonObject obj = thisAdapter.toJsonTree(value).getAsJsonObject();
             elementAdapter.write(out, obj);
           }

           @Override
           public Basket read(JsonReader in) throws IOException {
             JsonElement jsonElement = elementAdapter.read(in);
             validateJsonElement(jsonElement);
             return thisAdapter.fromJsonTree(jsonElement);
           }

       }.nullSafe();
    }
  }

 /**
  * Create an instance of Basket given an JSON string
  *
  * @param jsonString JSON string
  * @return An instance of Basket
  * @throws IOException if the JSON string is invalid with respect to Basket
  */
  public static Basket fromJson(String jsonString) throws IOException {
    return JSON.getGson().fromJson(jsonString, Basket.class);
  }

 /**
  * Convert an instance of Basket to an JSON string
  *
  * @return JSON string
  */
  public String toJson() {
    return JSON.getGson().toJson(this);
  }
}

