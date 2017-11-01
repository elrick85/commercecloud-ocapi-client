/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */
/* Copyright (c) 2017 Mobify Research & Development Inc. All rights reserved. */
/* * *  *  * *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  *  * */

/**
 * Shop API
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: 17.8
 *
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

import expect from 'expect.js'
import ShopApi from '../../src/index'

let instance

beforeEach(() => {
    instance = new ShopApi.PublicProductList()
})

const getProperty = (object, getter, property) => {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function') {
        return object[getter]()
    } else {
        return object[property]
    }
}

const setProperty = (object, setter, property, value) => {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function') {
        object[setter](value)
    } else {
        object[property] = value
    }
}

describe('PublicProductListModel', () => {
    it('should create an instance of PublicProductListModel', () => {
        // uncomment below and update the code to test PublicProductListModel
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be.a(ShopApi.PublicProductList);
    })

    it('should have the property coRegistrant (base name: "co_registrant")', () => {
        // uncomment below and update the code to test the property coRegistrant
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property creationDate (base name: "creation_date")', () => {
        // uncomment below and update the code to test the property creationDate
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property description (base name: "description")', () => {
        // uncomment below and update the code to test the property description
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property event (base name: "event")', () => {
        // uncomment below and update the code to test the property event
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property id (base name: "id")', () => {
        // uncomment below and update the code to test the property id
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property itemsLink (base name: "items_link")', () => {
        // uncomment below and update the code to test the property itemsLink
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property lastModified (base name: "last_modified")', () => {
        // uncomment below and update the code to test the property lastModified
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property name (base name: "name")', () => {
        // uncomment below and update the code to test the property name
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property productListItems (base name: "product_list_items")', () => {
        // uncomment below and update the code to test the property productListItems
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property productListShippingAddress (base name: "product_list_shipping_address")', () => {
        // uncomment below and update the code to test the property productListShippingAddress
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property _public (base name: "public")', () => {
        // uncomment below and update the code to test the property _public
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property registrant (base name: "registrant")', () => {
        // uncomment below and update the code to test the property registrant
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

    it('should have the property type (base name: "type")', () => {
        // uncomment below and update the code to test the property type
        // var instane = new ShopApi.PublicProductList()
        // expect(instance).to.be();
    })

})