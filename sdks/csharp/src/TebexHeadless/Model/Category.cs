/*
 * Tebex Headless API
 *
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using System;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.IO;
using System.Runtime.Serialization;
using System.Text;
using System.Text.RegularExpressions;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using System.ComponentModel.DataAnnotations;
using OpenAPIDateConverter = TebexHeadless.Client.OpenAPIDateConverter;

namespace TebexHeadless.Model
{
    /// <summary>
    /// Category
    /// </summary>
    [DataContract(Name = "Category")]
    public partial class Category : IValidatableObject
    {
        /// <summary>
        /// How the category should be displayed
        /// </summary>
        /// <value>How the category should be displayed</value>
        [JsonConverter(typeof(StringEnumConverter))]
        public enum DisplayTypeEnum
        {
            /// <summary>
            /// Enum List for value: list
            /// </summary>
            [EnumMember(Value = "list")]
            List = 1,

            /// <summary>
            /// Enum Grid for value: grid
            /// </summary>
            [EnumMember(Value = "grid")]
            Grid = 2
        }


        /// <summary>
        /// How the category should be displayed
        /// </summary>
        /// <value>How the category should be displayed</value>
        [DataMember(Name = "display_type", EmitDefaultValue = false)]
        public DisplayTypeEnum? DisplayType { get; set; }
        /// <summary>
        /// Initializes a new instance of the <see cref="Category" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="name">User-friendly name of the category.</param>
        /// <param name="slug">Short identifier slug for the category.</param>
        /// <param name="parent">Parent category, if applicable.</param>
        /// <param name="description">HTML description of the category.</param>
        /// <param name="packages">packages.</param>
        /// <param name="order">The numeric order in which to display the category..</param>
        /// <param name="displayType">How the category should be displayed.</param>
        public Category(int id = default(int), string name = default(string), string slug = default(string), Object parent = default(Object), string description = default(string), List<Package> packages = default(List<Package>), int order = default(int), DisplayTypeEnum? displayType = default(DisplayTypeEnum?))
        {
            this.Id = id;
            this.Name = name;
            this.Slug = slug;
            this.Parent = parent;
            this.Description = description;
            this.Packages = packages;
            this.Order = order;
            this.DisplayType = displayType;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public int Id { get; set; }

        /// <summary>
        /// User-friendly name of the category
        /// </summary>
        /// <value>User-friendly name of the category</value>
        /// <example>Test</example>
        [DataMember(Name = "name", EmitDefaultValue = false)]
        public string Name { get; set; }

        /// <summary>
        /// Short identifier slug for the category
        /// </summary>
        /// <value>Short identifier slug for the category</value>
        [DataMember(Name = "slug", EmitDefaultValue = true)]
        public string Slug { get; set; }

        /// <summary>
        /// Parent category, if applicable
        /// </summary>
        /// <value>Parent category, if applicable</value>
        [DataMember(Name = "parent", EmitDefaultValue = true)]
        public Object Parent { get; set; }

        /// <summary>
        /// HTML description of the category
        /// </summary>
        /// <value>HTML description of the category</value>
        [DataMember(Name = "description", EmitDefaultValue = false)]
        public string Description { get; set; }

        /// <summary>
        /// Gets or Sets Packages
        /// </summary>
        [DataMember(Name = "packages", EmitDefaultValue = true)]
        public List<Package> Packages { get; set; }

        /// <summary>
        /// The numeric order in which to display the category.
        /// </summary>
        /// <value>The numeric order in which to display the category.</value>
        /// <example>1</example>
        [DataMember(Name = "order", EmitDefaultValue = false)]
        public int Order { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class Category {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  Name: ").Append(Name).Append("\n");
            sb.Append("  Slug: ").Append(Slug).Append("\n");
            sb.Append("  Parent: ").Append(Parent).Append("\n");
            sb.Append("  Description: ").Append(Description).Append("\n");
            sb.Append("  Packages: ").Append(Packages).Append("\n");
            sb.Append("  Order: ").Append(Order).Append("\n");
            sb.Append("  DisplayType: ").Append(DisplayType).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }

        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return Newtonsoft.Json.JsonConvert.SerializeObject(this, Newtonsoft.Json.Formatting.Indented);
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
