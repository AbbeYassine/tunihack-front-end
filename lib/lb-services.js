// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://10.128.1.242:3000/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/accessTokens/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.uservices.findById() instead.
            "prototype$__findById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.uservices.destroyById() instead.
            "prototype$__destroyById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.updateById() instead.
            "prototype$__updateById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.uservices.link() instead.
            "prototype$__link__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.uservices.unlink() instead.
            "prototype$__unlink__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.exists() instead.
            "prototype$__exists__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use User.picture() instead.
            "prototype$__get__picture": {
              url: urlBase + "/users/:id/picture",
              method: "GET",
            },

            // INTERNAL. Use User.picture.create() instead.
            "prototype$__create__picture": {
              url: urlBase + "/users/:id/picture",
              method: "POST",
            },

            // INTERNAL. Use User.picture.update() instead.
            "prototype$__update__picture": {
              url: urlBase + "/users/:id/picture",
              method: "PUT",
            },

            // INTERNAL. Use User.picture.destroy() instead.
            "prototype$__destroy__picture": {
              url: urlBase + "/users/:id/picture",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/users/:id/accessTokens/count",
              method: "GET",
            },

            // INTERNAL. Use User.uservices() instead.
            "prototype$__get__uservices": {
              isArray: true,
              url: urlBase + "/users/:id/uservices",
              method: "GET",
            },

            // INTERNAL. Use User.uservices.create() instead.
            "prototype$__create__uservices": {
              url: urlBase + "/users/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use User.uservices.destroyAll() instead.
            "prototype$__delete__uservices": {
              url: urlBase + "/users/:id/uservices",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.count() instead.
            "prototype$__count__uservices": {
              url: urlBase + "/users/:id/uservices/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#myServices
             * @methodOf lbServices.User
             *
             * @description
             *
             * get my services
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "myServices": {
              isArray: true,
              url: urlBase + "/users/my-services",
              method: "GET",
            },

            // INTERNAL. Use Service.users.findById() instead.
            "::findById::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.users.destroyById() instead.
            "::destroyById::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.updateById() instead.
            "::updateById::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.users.link() instead.
            "::link::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.users.unlink() instead.
            "::unlink::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.exists() instead.
            "::exists::Service::users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.users() instead.
            "::get::Service::users": {
              isArray: true,
              url: urlBase + "/services/:id/users",
              method: "GET",
            },

            // INTERNAL. Use Service.users.create() instead.
            "::create::Service::users": {
              url: urlBase + "/services/:id/users",
              method: "POST",
            },

            // INTERNAL. Use Service.users.createMany() instead.
            "::createMany::Service::users": {
              isArray: true,
              url: urlBase + "/services/:id/users",
              method: "POST",
            },

            // INTERNAL. Use Service.users.destroyAll() instead.
            "::delete::Service::users": {
              url: urlBase + "/services/:id/users",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.count() instead.
            "::count::Service::users": {
              url: urlBase + "/services/:id/users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";

    /**
     * @ngdoc object
     * @name lbServices.User.uservices
     * @header lbServices.User.uservices
     * @object
     * @description
     *
     * The object `User.uservices` groups methods
     * manipulating `Service` instances related to `User`.
     *
     * Call {@link lbServices.User#uservices User.uservices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#uservices
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries uservices of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::get::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#count
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Counts uservices of user.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.uservices.count = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::count::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#create
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Creates a new instance in uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.create = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::create::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#createMany
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Creates a new instance in uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.createMany = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::createMany::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#destroyAll
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Deletes all uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.destroyAll = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::delete::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#destroyById
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Delete a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.destroyById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::destroyById::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#exists
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Check the existence of uservices relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.exists = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::exists::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#findById
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Find a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.findById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::findById::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#link
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Add a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.link = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::link::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#unlink
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Remove the uservices relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.unlink = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::unlink::User::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.uservices#updateById
             * @methodOf lbServices.User.uservices
             *
             * @description
             *
             * Update a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.updateById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::updateById::User::uservices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.User.picture
     * @header lbServices.User.picture
     * @object
     * @description
     *
     * The object `User.picture` groups methods
     * manipulating `Media` instances related to `User`.
     *
     * Call {@link lbServices.User#picture User.picture()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.User#picture
             * @methodOf lbServices.User
             *
             * @description
             *
             * Fetches hasOne relation picture.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.picture = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::get::User::picture"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picture#create
             * @methodOf lbServices.User.picture
             *
             * @description
             *
             * Creates a new instance in picture of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.picture.create = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::create::User::picture"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picture#createMany
             * @methodOf lbServices.User.picture
             *
             * @description
             *
             * Creates a new instance in picture of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.picture.createMany = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::createMany::User::picture"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picture#destroy
             * @methodOf lbServices.User.picture
             *
             * @description
             *
             * Deletes picture of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.picture.destroy = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::destroy::User::picture"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.User.picture#update
             * @methodOf lbServices.User.picture
             *
             * @description
             *
             * Update picture of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.picture.update = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::update::User::picture"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Service
 * @header lbServices.Service
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Service` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Service",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/services/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Service.uservices.findById() instead.
            "prototype$__findById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices.destroyById() instead.
            "prototype$__destroyById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.updateById() instead.
            "prototype$__updateById__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.uservices.link() instead.
            "prototype$__link__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.uservices.unlink() instead.
            "prototype$__unlink__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.exists() instead.
            "prototype$__exists__uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.users.findById() instead.
            "prototype$__findById__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.users.destroyById() instead.
            "prototype$__destroyById__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.updateById() instead.
            "prototype$__updateById__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.users.link() instead.
            "prototype$__link__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.users.unlink() instead.
            "prototype$__unlink__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.exists() instead.
            "prototype$__exists__users": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/users/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.categories.findById() instead.
            "prototype$__findById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.categories.destroyById() instead.
            "prototype$__destroyById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.updateById() instead.
            "prototype$__updateById__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.categories.link() instead.
            "prototype$__link__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.categories.unlink() instead.
            "prototype$__unlink__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.exists() instead.
            "prototype$__exists__categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.media.findById() instead.
            "prototype$__findById__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.media.destroyById() instead.
            "prototype$__destroyById__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.updateById() instead.
            "prototype$__updateById__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.media.link() instead.
            "prototype$__link__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.media.unlink() instead.
            "prototype$__unlink__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.exists() instead.
            "prototype$__exists__media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.city() instead.
            "prototype$__get__city": {
              url: urlBase + "/services/:id/city",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices() instead.
            "prototype$__get__uservices": {
              isArray: true,
              url: urlBase + "/services/:id/uservices",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices.create() instead.
            "prototype$__create__uservices": {
              url: urlBase + "/services/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use Service.uservices.destroyAll() instead.
            "prototype$__delete__uservices": {
              url: urlBase + "/services/:id/uservices",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.count() instead.
            "prototype$__count__uservices": {
              url: urlBase + "/services/:id/uservices/count",
              method: "GET",
            },

            // INTERNAL. Use Service.users() instead.
            "prototype$__get__users": {
              isArray: true,
              url: urlBase + "/services/:id/users",
              method: "GET",
            },

            // INTERNAL. Use Service.users.create() instead.
            "prototype$__create__users": {
              url: urlBase + "/services/:id/users",
              method: "POST",
            },

            // INTERNAL. Use Service.users.destroyAll() instead.
            "prototype$__delete__users": {
              url: urlBase + "/services/:id/users",
              method: "DELETE",
            },

            // INTERNAL. Use Service.users.count() instead.
            "prototype$__count__users": {
              url: urlBase + "/services/:id/users/count",
              method: "GET",
            },

            // INTERNAL. Use Service.categories() instead.
            "prototype$__get__categories": {
              isArray: true,
              url: urlBase + "/services/:id/categories",
              method: "GET",
            },

            // INTERNAL. Use Service.categories.create() instead.
            "prototype$__create__categories": {
              url: urlBase + "/services/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Service.categories.destroyAll() instead.
            "prototype$__delete__categories": {
              url: urlBase + "/services/:id/categories",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.count() instead.
            "prototype$__count__categories": {
              url: urlBase + "/services/:id/categories/count",
              method: "GET",
            },

            // INTERNAL. Use Service.media() instead.
            "prototype$__get__media": {
              isArray: true,
              url: urlBase + "/services/:id/media",
              method: "GET",
            },

            // INTERNAL. Use Service.media.create() instead.
            "prototype$__create__media": {
              url: urlBase + "/services/:id/media",
              method: "POST",
            },

            // INTERNAL. Use Service.media.destroyAll() instead.
            "prototype$__delete__media": {
              url: urlBase + "/services/:id/media",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.count() instead.
            "prototype$__count__media": {
              url: urlBase + "/services/:id/media/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#create
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/services",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#createMany
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/services",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#upsert
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/services",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#replaceOrCreate
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/services/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#upsertWithWhere
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/services/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#exists
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/services/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#findById
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/services/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#replaceById
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/services/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#find
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/services",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#findOne
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/services/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#updateAll
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/services/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#deleteById
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/services/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#count
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/services/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#prototype$updateAttributes
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/services/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#createChangeStream
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/services/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#publishService
             * @methodOf lbServices.Service
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{string=}` -
             */
            "publishService": {
              url: urlBase + "/services/publish-service",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#useService
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Use service
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `serviceId` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "useService": {
              url: urlBase + "/services/use-service",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#createService
             * @methodOf lbServices.Service
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `ctx` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `status` – `{string=}` -
             */
            "createService": {
              url: urlBase + "/services/create-service",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#useServiceCombined
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Use combined service
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `serviceId` – `{string}` -
             *
             *  - `combinedServiceId` – `{string}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "useServiceCombined": {
              url: urlBase + "/services/use-service-combined",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#prepareService
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Prepare service (create combined service)
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `name` – `{string=}` -
             *
             *  - `description` – `{string=}` -
             *
             *  - `categoriesIds` – `{*=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "prepareService": {
              url: urlBase + "/services/prepare-service",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#recommendService
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Prepare service (create combined service)
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `combinedServiceId` – `{string=}` -
             *
             *  - `cityId` – `{string=}` -
             *
             *  - `categoriesIds` – `{*=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "recommendService": {
              isArray: true,
              url: urlBase + "/services/recommend",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#popular
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Prepare service (create combined service)
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `cityId` – `{string=}` -
             *
             *  - `categoriesIds` – `{*=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "popular": {
              isArray: true,
              url: urlBase + "/services/popular",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Service#recent
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Prepare service (create combined service)
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `cityId` – `{string=}` -
             *
             *  - `categoriesIds` – `{*=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
            "recent": {
              isArray: true,
              url: urlBase + "/services/recent",
              method: "GET",
            },

            // INTERNAL. Use User.uservices.findById() instead.
            "::findById::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "GET",
            },

            // INTERNAL. Use User.uservices.destroyById() instead.
            "::destroyById::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.updateById() instead.
            "::updateById::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.uservices.link() instead.
            "::link::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use User.uservices.unlink() instead.
            "::unlink::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.exists() instead.
            "::exists::User::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/users/:id/uservices/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use User.uservices() instead.
            "::get::User::uservices": {
              isArray: true,
              url: urlBase + "/users/:id/uservices",
              method: "GET",
            },

            // INTERNAL. Use User.uservices.create() instead.
            "::create::User::uservices": {
              url: urlBase + "/users/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use User.uservices.createMany() instead.
            "::createMany::User::uservices": {
              isArray: true,
              url: urlBase + "/users/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use User.uservices.destroyAll() instead.
            "::delete::User::uservices": {
              url: urlBase + "/users/:id/uservices",
              method: "DELETE",
            },

            // INTERNAL. Use User.uservices.count() instead.
            "::count::User::uservices": {
              url: urlBase + "/users/:id/uservices/count",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices.findById() instead.
            "::findById::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices.destroyById() instead.
            "::destroyById::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.updateById() instead.
            "::updateById::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.uservices.link() instead.
            "::link::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.uservices.unlink() instead.
            "::unlink::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.exists() instead.
            "::exists::Service::uservices": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/uservices/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.uservices() instead.
            "::get::Service::uservices": {
              isArray: true,
              url: urlBase + "/services/:id/uservices",
              method: "GET",
            },

            // INTERNAL. Use Service.uservices.create() instead.
            "::create::Service::uservices": {
              url: urlBase + "/services/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use Service.uservices.createMany() instead.
            "::createMany::Service::uservices": {
              isArray: true,
              url: urlBase + "/services/:id/uservices",
              method: "POST",
            },

            // INTERNAL. Use Service.uservices.destroyAll() instead.
            "::delete::Service::uservices": {
              url: urlBase + "/services/:id/uservices",
              method: "DELETE",
            },

            // INTERNAL. Use Service.uservices.count() instead.
            "::count::Service::uservices": {
              url: urlBase + "/services/:id/uservices/count",
              method: "GET",
            },

            // INTERNAL. Use Media.services.findById() instead.
            "::findById::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use Media.services.destroyById() instead.
            "::destroyById::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.updateById() instead.
            "::updateById::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Media.services.link() instead.
            "::link::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Media.services.unlink() instead.
            "::unlink::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.exists() instead.
            "::exists::Media::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Media.services() instead.
            "::get::Media::services": {
              isArray: true,
              url: urlBase + "/medias/:id/services",
              method: "GET",
            },

            // INTERNAL. Use Media.services.create() instead.
            "::create::Media::services": {
              url: urlBase + "/medias/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Media.services.createMany() instead.
            "::createMany::Media::services": {
              isArray: true,
              url: urlBase + "/medias/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Media.services.destroyAll() instead.
            "::delete::Media::services": {
              url: urlBase + "/medias/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.count() instead.
            "::count::Media::services": {
              url: urlBase + "/medias/:id/services/count",
              method: "GET",
            },

            // INTERNAL. Use City.services.findById() instead.
            "::findById::City::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.services.destroyById() instead.
            "::destroyById::City::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.services.updateById() instead.
            "::updateById::City::services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.services() instead.
            "::get::City::services": {
              isArray: true,
              url: urlBase + "/cities/:id/services",
              method: "GET",
            },

            // INTERNAL. Use City.services.create() instead.
            "::create::City::services": {
              url: urlBase + "/cities/:id/services",
              method: "POST",
            },

            // INTERNAL. Use City.services.createMany() instead.
            "::createMany::City::services": {
              isArray: true,
              url: urlBase + "/cities/:id/services",
              method: "POST",
            },

            // INTERNAL. Use City.services.destroyAll() instead.
            "::delete::City::services": {
              url: urlBase + "/cities/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use City.services.count() instead.
            "::count::City::services": {
              url: urlBase + "/cities/:id/services/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Service#patchOrCreate
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Service#updateOrCreate
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Service#patchOrCreateWithWhere
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Service#update
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Service#destroyById
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Service#removeById
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Service#patchAttributes
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Service#modelName
        * @propertyOf lbServices.Service
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Service`.
        */
        R.modelName = "Service";

    /**
     * @ngdoc object
     * @name lbServices.Service.uservices
     * @header lbServices.Service.uservices
     * @object
     * @description
     *
     * The object `Service.uservices` groups methods
     * manipulating `Service` instances related to `Service`.
     *
     * Call {@link lbServices.Service#uservices Service.uservices()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Service#uservices
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Queries uservices of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::get::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#count
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Counts uservices of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.uservices.count = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::count::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#create
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Creates a new instance in uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.create = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::create::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#createMany
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Creates a new instance in uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.createMany = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::createMany::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#destroyAll
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Deletes all uservices of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.destroyAll = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::delete::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#destroyById
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Delete a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.destroyById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::destroyById::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#exists
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Check the existence of uservices relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.exists = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::exists::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#findById
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Find a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.findById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::findById::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#link
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Add a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.link = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::link::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#unlink
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Remove the uservices relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.uservices.unlink = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::unlink::Service::uservices"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.uservices#updateById
             * @methodOf lbServices.Service.uservices
             *
             * @description
             *
             * Update a related item by id for uservices.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for uservices
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.uservices.updateById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::updateById::Service::uservices"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Service.users
     * @header lbServices.Service.users
     * @object
     * @description
     *
     * The object `Service.users` groups methods
     * manipulating `User` instances related to `Service`.
     *
     * Call {@link lbServices.Service#users Service.users()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Service#users
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Queries users of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::get::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#count
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Counts users of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.users.count = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::count::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#create
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Creates a new instance in users of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.create = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::create::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#createMany
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Creates a new instance in users of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.createMany = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::createMany::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#destroyAll
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Deletes all users of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.users.destroyAll = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::delete::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#destroyById
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Delete a related item by id for users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.users.destroyById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::destroyById::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#exists
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Check the existence of users relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.exists = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::exists::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#findById
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Find a related item by id for users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.findById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::findById::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#link
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Add a related item by id for users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.link = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::link::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#unlink
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Remove the users relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.users.unlink = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::unlink::Service::users"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.users#updateById
             * @methodOf lbServices.Service.users
             *
             * @description
             *
             * Update a related item by id for users.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for users
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R.users.updateById = function() {
          var TargetResource = $injector.get("User");
          var action = TargetResource["::updateById::Service::users"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Service.categories
     * @header lbServices.Service.categories
     * @object
     * @description
     *
     * The object `Service.categories` groups methods
     * manipulating `Category` instances related to `Service`.
     *
     * Call {@link lbServices.Service#categories Service.categories()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Service#categories
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Queries categories of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#count
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Counts categories of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#create
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Creates a new instance in categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#createMany
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Creates a new instance in categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#destroyAll
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Deletes all categories of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#destroyById
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Delete a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#exists
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Check the existence of categories relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#findById
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Find a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#link
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Add a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#unlink
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Remove the categories relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::Service::categories"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.categories#updateById
             * @methodOf lbServices.Service.categories
             *
             * @description
             *
             * Update a related item by id for categories.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for categories
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Service::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Service.media
     * @header lbServices.Service.media
     * @object
     * @description
     *
     * The object `Service.media` groups methods
     * manipulating `Media` instances related to `Service`.
     *
     * Call {@link lbServices.Service#media Service.media()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Service#media
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Queries media of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::get::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#count
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Counts media of Service.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.media.count = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::count::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#create
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Creates a new instance in media of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.create = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::create::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#createMany
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Creates a new instance in media of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.createMany = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::createMany::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#destroyAll
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Deletes all media of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.media.destroyAll = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::delete::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#destroyById
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Delete a related item by id for media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.media.destroyById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::destroyById::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#exists
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Check the existence of media relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.exists = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::exists::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#findById
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Find a related item by id for media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.findById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::findById::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#link
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Add a related item by id for media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.link = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::link::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#unlink
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Remove the media relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.media.unlink = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::unlink::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service.media#updateById
             * @methodOf lbServices.Service.media
             *
             * @description
             *
             * Update a related item by id for media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for media
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.media.updateById = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::updateById::Service::media"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Service#city
             * @methodOf lbServices.Service
             *
             * @description
             *
             * Fetches belongsTo relation city.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.city = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Service::city"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Category",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/categories/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Category.logo() instead.
            "prototype$__get__logo": {
              url: urlBase + "/categories/:id/logo",
              method: "GET",
            },

            // INTERNAL. Use Category.logo.create() instead.
            "prototype$__create__logo": {
              url: urlBase + "/categories/:id/logo",
              method: "POST",
            },

            // INTERNAL. Use Category.logo.update() instead.
            "prototype$__update__logo": {
              url: urlBase + "/categories/:id/logo",
              method: "PUT",
            },

            // INTERNAL. Use Category.logo.destroy() instead.
            "prototype$__destroy__logo": {
              url: urlBase + "/categories/:id/logo",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#create
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/categories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#createMany
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/categories",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#upsert
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/categories",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/categories/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#upsertWithWhere
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/categories/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#exists
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/categories/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/categories/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#replaceById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/categories/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#find
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/categories",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#findOne
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/categories/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#updateAll
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/categories/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#deleteById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/categories/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#count
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/categories/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#prototype$updateAttributes
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/categories/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Category#createChangeStream
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/categories/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Service.categories.findById() instead.
            "::findById::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.categories.destroyById() instead.
            "::destroyById::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.updateById() instead.
            "::updateById::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.categories.link() instead.
            "::link::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.categories.unlink() instead.
            "::unlink::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.exists() instead.
            "::exists::Service::categories": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/categories/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.categories() instead.
            "::get::Service::categories": {
              isArray: true,
              url: urlBase + "/services/:id/categories",
              method: "GET",
            },

            // INTERNAL. Use Service.categories.create() instead.
            "::create::Service::categories": {
              url: urlBase + "/services/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Service.categories.createMany() instead.
            "::createMany::Service::categories": {
              isArray: true,
              url: urlBase + "/services/:id/categories",
              method: "POST",
            },

            // INTERNAL. Use Service.categories.destroyAll() instead.
            "::delete::Service::categories": {
              url: urlBase + "/services/:id/categories",
              method: "DELETE",
            },

            // INTERNAL. Use Service.categories.count() instead.
            "::count::Service::categories": {
              url: urlBase + "/services/:id/categories/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Category#patchOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Category#updateOrCreate
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Category#patchOrCreateWithWhere
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Category#update
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Category#destroyById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Category#removeById
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Category#patchAttributes
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Category` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Category#modelName
        * @propertyOf lbServices.Category
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Category`.
        */
        R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.logo
     * @header lbServices.Category.logo
     * @object
     * @description
     *
     * The object `Category.logo` groups methods
     * manipulating `Media` instances related to `Category`.
     *
     * Call {@link lbServices.Category#logo Category.logo()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Category#logo
             * @methodOf lbServices.Category
             *
             * @description
             *
             * Fetches hasOne relation logo.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.logo = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::get::Category::logo"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.logo#create
             * @methodOf lbServices.Category.logo
             *
             * @description
             *
             * Creates a new instance in logo of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.logo.create = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::create::Category::logo"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.logo#createMany
             * @methodOf lbServices.Category.logo
             *
             * @description
             *
             * Creates a new instance in logo of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.logo.createMany = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::createMany::Category::logo"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.logo#destroy
             * @methodOf lbServices.Category.logo
             *
             * @description
             *
             * Deletes logo of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.logo.destroy = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::destroy::Category::logo"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Category.logo#update
             * @methodOf lbServices.Category.logo
             *
             * @description
             *
             * Update logo of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R.logo.update = function() {
          var TargetResource = $injector.get("Media");
          var action = TargetResource["::update::Category::logo"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Media
 * @header lbServices.Media
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Media` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Media",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/medias/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Media.services.findById() instead.
            "prototype$__findById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use Media.services.destroyById() instead.
            "prototype$__destroyById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.updateById() instead.
            "prototype$__updateById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Media.services.link() instead.
            "prototype$__link__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Media.services.unlink() instead.
            "prototype$__unlink__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.exists() instead.
            "prototype$__exists__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/medias/:id/services/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Media.services() instead.
            "prototype$__get__services": {
              isArray: true,
              url: urlBase + "/medias/:id/services",
              method: "GET",
            },

            // INTERNAL. Use Media.services.create() instead.
            "prototype$__create__services": {
              url: urlBase + "/medias/:id/services",
              method: "POST",
            },

            // INTERNAL. Use Media.services.destroyAll() instead.
            "prototype$__delete__services": {
              url: urlBase + "/medias/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use Media.services.count() instead.
            "prototype$__count__services": {
              url: urlBase + "/medias/:id/services/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#create
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/medias",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#createMany
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/medias",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#upsert
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/medias",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#replaceOrCreate
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/medias/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#upsertWithWhere
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/medias/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#exists
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/medias/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#findById
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/medias/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#replaceById
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/medias/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#find
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/medias",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#findOne
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/medias/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#updateAll
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/medias/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#deleteById
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/medias/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#count
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/medias/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#prototype$updateAttributes
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/medias/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Media#createChangeStream
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/medias/change-stream",
              method: "POST",
            },

            // INTERNAL. Use User.picture() instead.
            "::get::User::picture": {
              url: urlBase + "/users/:id/picture",
              method: "GET",
            },

            // INTERNAL. Use User.picture.create() instead.
            "::create::User::picture": {
              url: urlBase + "/users/:id/picture",
              method: "POST",
            },

            // INTERNAL. Use User.picture.createMany() instead.
            "::createMany::User::picture": {
              isArray: true,
              url: urlBase + "/users/:id/picture",
              method: "POST",
            },

            // INTERNAL. Use User.picture.update() instead.
            "::update::User::picture": {
              url: urlBase + "/users/:id/picture",
              method: "PUT",
            },

            // INTERNAL. Use User.picture.destroy() instead.
            "::destroy::User::picture": {
              url: urlBase + "/users/:id/picture",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.findById() instead.
            "::findById::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "GET",
            },

            // INTERNAL. Use Service.media.destroyById() instead.
            "::destroyById::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.updateById() instead.
            "::updateById::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.media.link() instead.
            "::link::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Service.media.unlink() instead.
            "::unlink::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.exists() instead.
            "::exists::Service::media": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/services/:id/media/rel/:fk",
              method: "HEAD",
            },

            // INTERNAL. Use Service.media() instead.
            "::get::Service::media": {
              isArray: true,
              url: urlBase + "/services/:id/media",
              method: "GET",
            },

            // INTERNAL. Use Service.media.create() instead.
            "::create::Service::media": {
              url: urlBase + "/services/:id/media",
              method: "POST",
            },

            // INTERNAL. Use Service.media.createMany() instead.
            "::createMany::Service::media": {
              isArray: true,
              url: urlBase + "/services/:id/media",
              method: "POST",
            },

            // INTERNAL. Use Service.media.destroyAll() instead.
            "::delete::Service::media": {
              url: urlBase + "/services/:id/media",
              method: "DELETE",
            },

            // INTERNAL. Use Service.media.count() instead.
            "::count::Service::media": {
              url: urlBase + "/services/:id/media/count",
              method: "GET",
            },

            // INTERNAL. Use Category.logo() instead.
            "::get::Category::logo": {
              url: urlBase + "/categories/:id/logo",
              method: "GET",
            },

            // INTERNAL. Use Category.logo.create() instead.
            "::create::Category::logo": {
              url: urlBase + "/categories/:id/logo",
              method: "POST",
            },

            // INTERNAL. Use Category.logo.createMany() instead.
            "::createMany::Category::logo": {
              isArray: true,
              url: urlBase + "/categories/:id/logo",
              method: "POST",
            },

            // INTERNAL. Use Category.logo.update() instead.
            "::update::Category::logo": {
              url: urlBase + "/categories/:id/logo",
              method: "PUT",
            },

            // INTERNAL. Use Category.logo.destroy() instead.
            "::destroy::Category::logo": {
              url: urlBase + "/categories/:id/logo",
              method: "DELETE",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Media#patchOrCreate
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Media#updateOrCreate
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Media#patchOrCreateWithWhere
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Media#update
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Media#destroyById
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Media#removeById
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Media#patchAttributes
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Media` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Media#modelName
        * @propertyOf lbServices.Media
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Media`.
        */
        R.modelName = "Media";

    /**
     * @ngdoc object
     * @name lbServices.Media.services
     * @header lbServices.Media.services
     * @object
     * @description
     *
     * The object `Media.services` groups methods
     * manipulating `Service` instances related to `Media`.
     *
     * Call {@link lbServices.Media#services Media.services()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Media#services
             * @methodOf lbServices.Media
             *
             * @description
             *
             * Queries services of Media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::get::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#count
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Counts services of Media.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.services.count = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::count::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#create
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.create = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::create::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#createMany
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.createMany = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::createMany::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#destroyAll
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Deletes all services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyAll = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::delete::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#destroyById
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Delete a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::destroyById::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#exists
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Check the existence of services relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.exists = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::exists::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#findById
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Find a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.findById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::findById::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#link
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Add a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.link = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::link::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#unlink
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Remove the services relation to an item by id.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.unlink = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::unlink::Media::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Media.services#updateById
             * @methodOf lbServices.Media.services
             *
             * @description
             *
             * Update a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.updateById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::updateById::Media::services"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.City
 * @header lbServices.City
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `City` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "City",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/cities/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use City.services.findById() instead.
            "prototype$__findById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "GET",
            },

            // INTERNAL. Use City.services.destroyById() instead.
            "prototype$__destroyById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use City.services.updateById() instead.
            "prototype$__updateById__services": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/cities/:id/services/:fk",
              method: "PUT",
            },

            // INTERNAL. Use City.country() instead.
            "prototype$__get__country": {
              url: urlBase + "/cities/:id/country",
              method: "GET",
            },

            // INTERNAL. Use City.services() instead.
            "prototype$__get__services": {
              isArray: true,
              url: urlBase + "/cities/:id/services",
              method: "GET",
            },

            // INTERNAL. Use City.services.create() instead.
            "prototype$__create__services": {
              url: urlBase + "/cities/:id/services",
              method: "POST",
            },

            // INTERNAL. Use City.services.destroyAll() instead.
            "prototype$__delete__services": {
              url: urlBase + "/cities/:id/services",
              method: "DELETE",
            },

            // INTERNAL. Use City.services.count() instead.
            "prototype$__count__services": {
              url: urlBase + "/cities/:id/services/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#create
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#createMany
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/cities",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#upsert
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/cities",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/cities/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#upsertWithWhere
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/cities/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#exists
             * @methodOf lbServices.City
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/cities/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/cities/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#replaceById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/cities/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#find
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/cities",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#findOne
             * @methodOf lbServices.City
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/cities/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#updateAll
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/cities/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#deleteById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/cities/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#count
             * @methodOf lbServices.City
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/cities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#prototype$updateAttributes
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/cities/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.City#createChangeStream
             * @methodOf lbServices.City
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/cities/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Service.city() instead.
            "::get::Service::city": {
              url: urlBase + "/services/:id/city",
              method: "GET",
            },

            // INTERNAL. Use Country.cities.findById() instead.
            "::findById::Country::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.cities.destroyById() instead.
            "::destroyById::Country::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.cities.updateById() instead.
            "::updateById::Country::cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.cities() instead.
            "::get::Country::cities": {
              isArray: true,
              url: urlBase + "/countries/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use Country.cities.create() instead.
            "::create::Country::cities": {
              url: urlBase + "/countries/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Country.cities.createMany() instead.
            "::createMany::Country::cities": {
              isArray: true,
              url: urlBase + "/countries/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Country.cities.destroyAll() instead.
            "::delete::Country::cities": {
              url: urlBase + "/countries/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use Country.cities.count() instead.
            "::count::Country::cities": {
              url: urlBase + "/countries/:id/cities/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.City#patchOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#updateOrCreate
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.City#patchOrCreateWithWhere
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.City#update
             * @methodOf lbServices.City
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.City#destroyById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.City#removeById
             * @methodOf lbServices.City
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.City#patchAttributes
             * @methodOf lbServices.City
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.City#modelName
        * @propertyOf lbServices.City
        * @description
        * The name of the model represented by this $resource,
        * i.e. `City`.
        */
        R.modelName = "City";

    /**
     * @ngdoc object
     * @name lbServices.City.services
     * @header lbServices.City.services
     * @object
     * @description
     *
     * The object `City.services` groups methods
     * manipulating `Service` instances related to `City`.
     *
     * Call {@link lbServices.City#services City.services()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.City#services
             * @methodOf lbServices.City
             *
             * @description
             *
             * Queries services of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::get::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#count
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Counts services of City.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.services.count = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::count::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#create
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.create = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::create::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#createMany
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Creates a new instance in services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.createMany = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::createMany::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#destroyAll
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Deletes all services of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyAll = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::delete::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#destroyById
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Delete a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.services.destroyById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::destroyById::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#findById
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Find a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.findById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::findById::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City.services#updateById
             * @methodOf lbServices.City.services
             *
             * @description
             *
             * Update a related item by id for services.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for services
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Service` object.)
             * </em>
             */
        R.services.updateById = function() {
          var TargetResource = $injector.get("Service");
          var action = TargetResource["::updateById::City::services"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.City#country
             * @methodOf lbServices.City
             *
             * @description
             *
             * Fetches belongsTo relation country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R.country = function() {
          var TargetResource = $injector.get("Country");
          var action = TargetResource["::get::City::country"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Country
 * @header lbServices.Country
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Country` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Country",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/countries/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Country.cities.findById() instead.
            "prototype$__findById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "GET",
            },

            // INTERNAL. Use Country.cities.destroyById() instead.
            "prototype$__destroyById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Country.cities.updateById() instead.
            "prototype$__updateById__cities": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/countries/:id/cities/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Country.cities() instead.
            "prototype$__get__cities": {
              isArray: true,
              url: urlBase + "/countries/:id/cities",
              method: "GET",
            },

            // INTERNAL. Use Country.cities.create() instead.
            "prototype$__create__cities": {
              url: urlBase + "/countries/:id/cities",
              method: "POST",
            },

            // INTERNAL. Use Country.cities.destroyAll() instead.
            "prototype$__delete__cities": {
              url: urlBase + "/countries/:id/cities",
              method: "DELETE",
            },

            // INTERNAL. Use Country.cities.count() instead.
            "prototype$__count__cities": {
              url: urlBase + "/countries/:id/cities/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#create
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#createMany
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/countries",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#upsert
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/countries",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/countries/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#upsertWithWhere
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/countries/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#exists
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/countries/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/countries/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#replaceById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/countries/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#find
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/countries",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#findOne
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/countries/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#updateAll
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/countries/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#deleteById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/countries/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#count
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/countries/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#prototype$updateAttributes
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/countries/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Country#createChangeStream
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/countries/change-stream",
              method: "POST",
            },

            // INTERNAL. Use City.country() instead.
            "::get::City::country": {
              url: urlBase + "/cities/:id/country",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Country#patchOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#updateOrCreate
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Country#patchOrCreateWithWhere
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Country#update
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Country#destroyById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Country#removeById
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Country#patchAttributes
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Country` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Country#modelName
        * @propertyOf lbServices.Country
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Country`.
        */
        R.modelName = "Country";

    /**
     * @ngdoc object
     * @name lbServices.Country.cities
     * @header lbServices.Country.cities
     * @object
     * @description
     *
     * The object `Country.cities` groups methods
     * manipulating `City` instances related to `Country`.
     *
     * Call {@link lbServices.Country#cities Country.cities()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Country#cities
             * @methodOf lbServices.Country
             *
             * @description
             *
             * Queries cities of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::get::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#count
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Counts cities of Country.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.cities.count = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::count::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#create
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.create = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::create::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#createMany
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Creates a new instance in cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.createMany = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::createMany::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#destroyAll
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Deletes all cities of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cities.destroyAll = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::delete::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#destroyById
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Delete a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.cities.destroyById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::destroyById::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#findById
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Find a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.findById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::findById::Country::cities"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Country.cities#updateById
             * @methodOf lbServices.Country.cities
             *
             * @description
             *
             * Update a related item by id for cities.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - PersistedModel id
             *
             *  - `fk` – `{*}` - Foreign key for cities
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `City` object.)
             * </em>
             */
        R.cities.updateById = function() {
          var TargetResource = $injector.get("City");
          var action = TargetResource["::updateById::Country::cities"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Container
 * @header lbServices.Container
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Container` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Container",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/containers/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainers
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainers": {
              isArray: true,
              url: urlBase + "/containers",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#createContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "createContainer": {
              url: urlBase + "/containers",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#destroyContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "destroyContainer": {
              url: urlBase + "/containers/:container",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getContainer
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getContainer": {
              url: urlBase + "/containers/:container",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFiles
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFiles": {
              isArray: true,
              url: urlBase + "/containers/:container/files",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#getFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Container` object.)
             * </em>
             */
            "getFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#removeFile
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `` – `{undefined=}` -
             */
            "removeFile": {
              url: urlBase + "/containers/:container/files/:file",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#upload
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `result` – `{object=}` -
             */
            "upload": {
              url: urlBase + "/containers/:container/upload",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Container#download
             * @methodOf lbServices.Container
             *
             * @description
             *
             * <em>
             * (The remote method definition does not provide any description.)
             * </em>
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `container` – `{string=}` -
             *
             *  - `file` – `{string=}` -
             *
             *  - `req` – `{object=}` -
             *
             *  - `res` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "download": {
              url: urlBase + "/containers/:container/download/:file",
              method: "GET",
            },
          }
        );




        /**
        * @ngdoc property
        * @name lbServices.Container#modelName
        * @propertyOf lbServices.Container
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Container`.
        */
        R.modelName = "Container";



        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
