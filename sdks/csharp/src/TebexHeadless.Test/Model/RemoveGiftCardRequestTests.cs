/*
 * Tebex Headless API
 *
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 * Generated by: https://github.com/openapitools/openapi-generator.git
 */


using Xunit;

using System;
using System.Linq;
using System.IO;
using System.Collections.Generic;
using TebexHeadless.Model;
using TebexHeadless.Client;
using System.Reflection;
using Newtonsoft.Json;

namespace TebexHeadless.Test.Model
{
    /// <summary>
    ///  Class for testing RemoveGiftCardRequest
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class RemoveGiftCardRequestTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for RemoveGiftCardRequest
        //private RemoveGiftCardRequest instance;

        public RemoveGiftCardRequestTests()
        {
            // TODO uncomment below to create an instance of RemoveGiftCardRequest
            //instance = new RemoveGiftCardRequest();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of RemoveGiftCardRequest
        /// </summary>
        [Fact]
        public void RemoveGiftCardRequestInstanceTest()
        {
            // TODO uncomment below to test "IsType" RemoveGiftCardRequest
            //Assert.IsType<RemoveGiftCardRequest>(instance);
        }

        /// <summary>
        /// Test the property 'CardNumber'
        /// </summary>
        [Fact]
        public void CardNumberTest()
        {
            // TODO unit test for the property 'CardNumber'
        }
    }
}
