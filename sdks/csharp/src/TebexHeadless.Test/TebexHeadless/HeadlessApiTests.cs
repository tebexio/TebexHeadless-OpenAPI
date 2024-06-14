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
using System.IO;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Linq;
using System.Reflection;
using RestSharp;
using Xunit;

using TebexHeadless.Client;
using TebexHeadless.TebexHeadless;
// uncomment below to import models
//using TebexHeadless.Model;

namespace TebexHeadless.Test.Api
{
    /// <summary>
    ///  Class for testing HeadlessApi
    /// </summary>
    /// <remarks>
    /// This file is automatically generated by OpenAPI Generator (https://openapi-generator.tech).
    /// Please update the test case below to test the API endpoint.
    /// </remarks>
    public class HeadlessApiTests : IDisposable
    {
        private HeadlessApi instance;

        public HeadlessApiTests()
        {
            instance = new HeadlessApi();
        }

        public void Dispose()
        {
            // Cleanup when everything is done.
        }

        /// <summary>
        /// Test an instance of HeadlessApi
        /// </summary>
        [Fact]
        public void InstanceTest()
        {
            // TODO uncomment below to test 'IsType' HeadlessApi
            //Assert.IsType<HeadlessApi>(instance);
        }

        /// <summary>
        /// Test AddBasketPackage
        /// </summary>
        [Fact]
        public void AddBasketPackageTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string basketIdent = null;
            //AddBasketPackageRequest? addBasketPackageRequest = null;
            //var response = instance.AddBasketPackage(basketIdent, addBasketPackageRequest);
            //Assert.IsType<Basket>(response);
        }

        /// <summary>
        /// Test ApplyCoupon
        /// </summary>
        [Fact]
        public void ApplyCouponTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //Coupon? coupon = null;
            //var response = instance.ApplyCoupon(token, basketIdent, coupon);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test ApplyCreatorCode
        /// </summary>
        [Fact]
        public void ApplyCreatorCodeTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //ApplyCreatorCodeRequest? applyCreatorCodeRequest = null;
            //var response = instance.ApplyCreatorCode(token, basketIdent, applyCreatorCodeRequest);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test ApplyGiftCard
        /// </summary>
        [Fact]
        public void ApplyGiftCardTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //GiftCard? giftCard = null;
            //var response = instance.ApplyGiftCard(token, basketIdent, giftCard);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test CreateBasket
        /// </summary>
        [Fact]
        public void CreateBasketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //CreateBasketRequest? createBasketRequest = null;
            //var response = instance.CreateBasket(token, createBasketRequest);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test GetAllCategories
        /// </summary>
        [Fact]
        public void GetAllCategoriesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //var response = instance.GetAllCategories(token);
            //Assert.IsType<CategoryResponse>(response);
        }

        /// <summary>
        /// Test GetAllCategoriesIncludingPackages
        /// </summary>
        [Fact]
        public void GetAllCategoriesIncludingPackagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //var response = instance.GetAllCategoriesIncludingPackages(token);
            //Assert.IsType<CategoryResponse>(response);
        }

        /// <summary>
        /// Test GetAllPackages
        /// </summary>
        [Fact]
        public void GetAllPackagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //var response = instance.GetAllPackages(token);
            //Assert.IsType<PackageResponse>(response);
        }

        /// <summary>
        /// Test GetAllPackagesWithAuthedIP
        /// </summary>
        [Fact]
        public void GetAllPackagesWithAuthedIPTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string ipAddress = null;
            //var response = instance.GetAllPackagesWithAuthedIP(token, ipAddress);
            //Assert.IsType<PackageResponse>(response);
        }

        /// <summary>
        /// Test GetAllPackagesWithAuthedIPAndBasket
        /// </summary>
        [Fact]
        public void GetAllPackagesWithAuthedIPAndBasketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //string ipAddress = null;
            //var response = instance.GetAllPackagesWithAuthedIPAndBasket(token, basketIdent, ipAddress);
            //Assert.IsType<List<PackageResponse>>(response);
        }

        /// <summary>
        /// Test GetAllPackagesWithBasket
        /// </summary>
        [Fact]
        public void GetAllPackagesWithBasketTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //var response = instance.GetAllPackagesWithBasket(token, basketIdent);
            //Assert.IsType<PackageResponse>(response);
        }

        /// <summary>
        /// Test GetBasketAuthUrl
        /// </summary>
        [Fact]
        public void GetBasketAuthUrlTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //string returnUrl = null;
            //var response = instance.GetBasketAuthUrl(token, basketIdent, returnUrl);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test GetBasketById
        /// </summary>
        [Fact]
        public void GetBasketByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //var response = instance.GetBasketById(token, basketIdent);
            //Assert.IsType<BasketResponse>(response);
        }

        /// <summary>
        /// Test GetCategoryById
        /// </summary>
        [Fact]
        public void GetCategoryByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string categoryId = null;
            //var response = instance.GetCategoryById(token, categoryId);
            //Assert.IsType<List<CategoryResponse>>(response);
        }

        /// <summary>
        /// Test GetCategoryIncludingPackages
        /// </summary>
        [Fact]
        public void GetCategoryIncludingPackagesTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string categoryId = null;
            //var response = instance.GetCategoryIncludingPackages(token, categoryId);
            //Assert.IsType<CategoryResponse>(response);
        }

        /// <summary>
        /// Test GetPackageById
        /// </summary>
        [Fact]
        public void GetPackageByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //decimal packageId = null;
            //var response = instance.GetPackageById(token, packageId);
            //Assert.IsType<PackageResponse>(response);
        }

        /// <summary>
        /// Test GetWebstoreById
        /// </summary>
        [Fact]
        public void GetWebstoreByIdTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //var response = instance.GetWebstoreById(token);
            //Assert.IsType<WebstoreResponse>(response);
        }

        /// <summary>
        /// Test RemoveBasketPackage
        /// </summary>
        [Fact]
        public void RemoveBasketPackageTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string basketIdent = null;
            //RemoveBasketPackageRequest? removeBasketPackageRequest = null;
            //var response = instance.RemoveBasketPackage(basketIdent, removeBasketPackageRequest);
            //Assert.IsType<Basket>(response);
        }

        /// <summary>
        /// Test RemoveCoupon
        /// </summary>
        [Fact]
        public void RemoveCouponTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //instance.RemoveCoupon(token, basketIdent);
        }

        /// <summary>
        /// Test RemoveCreatorCode
        /// </summary>
        [Fact]
        public void RemoveCreatorCodeTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //instance.RemoveCreatorCode(token, basketIdent);
        }

        /// <summary>
        /// Test RemoveGiftCard
        /// </summary>
        [Fact]
        public void RemoveGiftCardTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string token = null;
            //string basketIdent = null;
            //RemoveGiftCardRequest? removeGiftCardRequest = null;
            //instance.RemoveGiftCard(token, basketIdent, removeGiftCardRequest);
        }

        /// <summary>
        /// Test UpdatePackageQuantity
        /// </summary>
        [Fact]
        public void UpdatePackageQuantityTest()
        {
            // TODO uncomment below to test the method and replace null with proper value
            //string basketIdent = null;
            //decimal packageId = null;
            //UpdatePackageQuantityRequest? updatePackageQuantityRequest = null;
            //instance.UpdatePackageQuantity(basketIdent, packageId, updatePackageQuantityRequest);
        }
    }
}
