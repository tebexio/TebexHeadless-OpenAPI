/**
 * Tebex Headless API
 * The headless API is designed for implementing your own store frontend with the data of your store. You are able to call the Headless API directly from a web browser (such as within an SPA), or from a backend server, such as for in-game GUIs.
 *
 * The version of the OpenAPI document: 1.0.0
 * Contact: tebex-integrations@overwolf.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/TebexHeadless/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/TebexHeadless/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.TebexHeadlessApi);
  }
}(this, function(expect, TebexHeadlessApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new TebexHeadlessApi.PackageCategory();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PackageCategory', function() {
    it('should create an instance of PackageCategory', function() {
      // uncomment below and update the code to test PackageCategory
      //var instance = new TebexHeadlessApi.PackageCategory();
      //expect(instance).to.be.a(TebexHeadlessApi.PackageCategory);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new TebexHeadlessApi.PackageCategory();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new TebexHeadlessApi.PackageCategory();
      //expect(instance).to.be();
    });

  });

}));
