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
    ///  Class for testing UpdatePackageQuantityRequest
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the model.
    /// </remarks>
    public class UpdatePackageQuantityRequestTests : IDisposable
    {
        // TODO uncomment below to declare an instance variable for UpdatePackageQuantityRequest
        //private UpdatePackageQuantityRequest instance;

        public UpdatePackageQuantityRequestTests()
        {
            // TODO uncomment below to create an instance of UpdatePackageQuantityRequest
            //instance = new UpdatePackageQuantityRequest();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of UpdatePackageQuantityRequest
        /// </summary>
        [Fact]
        public void UpdatePackageQuantityRequestInstanceTest()
        {
            // TODO uncomment below to test "IsType" UpdatePackageQuantityRequest
            //Assert.IsType<UpdatePackageQuantityRequest>(instance);
        }

        /// <summary>
        /// Test the property 'Quantity'
        /// </summary>
        [Fact]
        public void QuantityTest()
        {
            // TODO unit test for the property 'Quantity'
        }
    }
}
