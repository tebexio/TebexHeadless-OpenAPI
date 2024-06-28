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
    /// CMSPage
    /// </summary>
    [DataContract(Name = "CMSPage")]
    public partial class CMSPage : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="CMSPage" /> class.
        /// </summary>
        /// <param name="id">id.</param>
        /// <param name="createdAt">createdAt.</param>
        /// <param name="updatedAt">updatedAt.</param>
        /// <param name="accountId">accountId.</param>
        /// <param name="title">title.</param>
        /// <param name="slug">slug.</param>
        /// <param name="varPrivate">varPrivate.</param>
        /// <param name="hidden">hidden.</param>
        /// <param name="disabled">disabled.</param>
        /// <param name="sequence">sequence.</param>
        /// <param name="content">content.</param>
        public CMSPage(decimal id = default(decimal), DateTime createdAt = default(DateTime), DateTime updatedAt = default(DateTime), decimal accountId = default(decimal), string title = default(string), string slug = default(string), bool varPrivate = default(bool), bool hidden = default(bool), bool disabled = default(bool), bool sequence = default(bool), string content = default(string))
        {
            this.Id = id;
            this.CreatedAt = createdAt;
            this.UpdatedAt = updatedAt;
            this.AccountId = accountId;
            this.Title = title;
            this.Slug = slug;
            this.Private = varPrivate;
            this.Hidden = hidden;
            this.Disabled = disabled;
            this.Sequence = sequence;
            this.Content = content;
        }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        /// <example>127</example>
        [DataMember(Name = "id", EmitDefaultValue = false)]
        public decimal Id { get; set; }

        /// <summary>
        /// Gets or Sets CreatedAt
        /// </summary>
        /// <example>2023-11-13T20:59:54Z</example>
        [DataMember(Name = "created_at", EmitDefaultValue = false)]
        public DateTime CreatedAt { get; set; }

        /// <summary>
        /// Gets or Sets UpdatedAt
        /// </summary>
        /// <example>2023-11-13T20:59:54Z</example>
        [DataMember(Name = "updated_at", EmitDefaultValue = false)]
        public DateTime UpdatedAt { get; set; }

        /// <summary>
        /// Gets or Sets AccountId
        /// </summary>
        /// <example>244</example>
        [DataMember(Name = "account_id", EmitDefaultValue = false)]
        public decimal AccountId { get; set; }

        /// <summary>
        /// Gets or Sets Title
        /// </summary>
        /// <example>About</example>
        [DataMember(Name = "title", EmitDefaultValue = false)]
        public string Title { get; set; }

        /// <summary>
        /// Gets or Sets Slug
        /// </summary>
        /// <example>about</example>
        [DataMember(Name = "slug", EmitDefaultValue = false)]
        public string Slug { get; set; }

        /// <summary>
        /// Gets or Sets Private
        /// </summary>
        /// <example>false</example>
        [DataMember(Name = "private", EmitDefaultValue = true)]
        public bool Private { get; set; }

        /// <summary>
        /// Gets or Sets Hidden
        /// </summary>
        /// <example>false</example>
        [DataMember(Name = "hidden", EmitDefaultValue = true)]
        public bool Hidden { get; set; }

        /// <summary>
        /// Gets or Sets Disabled
        /// </summary>
        /// <example>false</example>
        [DataMember(Name = "disabled", EmitDefaultValue = true)]
        public bool Disabled { get; set; }

        /// <summary>
        /// Gets or Sets Sequence
        /// </summary>
        /// <example>false</example>
        [DataMember(Name = "sequence", EmitDefaultValue = true)]
        public bool Sequence { get; set; }

        /// <summary>
        /// Gets or Sets Content
        /// </summary>
        /// <example>&lt;p&gt;This is a custom page which you can add your own content to if you wish.&lt;/p&gt;

&lt;p&gt;You can modify your pages by going to &lt;strong&gt;Webstore&lt;/strong&gt; &amp;gt; &lt;strong&gt;Pages&lt;/strong&gt; from within the
Tebex Store control panel.&lt;/p&gt;

&lt;p&gt;Make sure to take a look at our &lt;a href&#x3D;&quot;https://help.tebex.io&quot; rel&#x3D;&quot;noreferrer&quot; target&#x3D;&quot;_blank&quot;&gt;knowledgebase&lt;/a&gt;
for helpful guides on getting started.&lt;/p&gt;</example>
        [DataMember(Name = "content", EmitDefaultValue = false)]
        public string Content { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class CMSPage {\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  CreatedAt: ").Append(CreatedAt).Append("\n");
            sb.Append("  UpdatedAt: ").Append(UpdatedAt).Append("\n");
            sb.Append("  AccountId: ").Append(AccountId).Append("\n");
            sb.Append("  Title: ").Append(Title).Append("\n");
            sb.Append("  Slug: ").Append(Slug).Append("\n");
            sb.Append("  Private: ").Append(Private).Append("\n");
            sb.Append("  Hidden: ").Append(Hidden).Append("\n");
            sb.Append("  Disabled: ").Append(Disabled).Append("\n");
            sb.Append("  Sequence: ").Append(Sequence).Append("\n");
            sb.Append("  Content: ").Append(Content).Append("\n");
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
