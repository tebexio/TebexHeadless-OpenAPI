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
    /// RemoveGiftCardRequest
    /// </summary>
    [DataContract(Name = "removeGiftCard_request")]
    public partial class RemoveGiftCardRequest : IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RemoveGiftCardRequest" /> class.
        /// </summary>
        /// <param name="cardNumber">cardNumber.</param>
        public RemoveGiftCardRequest(string cardNumber = default(string))
        {
            this.CardNumber = cardNumber;
        }

        /// <summary>
        /// Gets or Sets CardNumber
        /// </summary>
        /// <example>0127 0244 7210 1111</example>
        [DataMember(Name = "card_number", EmitDefaultValue = false)]
        public string CardNumber { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("class RemoveGiftCardRequest {\n");
            sb.Append("  CardNumber: ").Append(CardNumber).Append("\n");
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
