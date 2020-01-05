module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-properties */ "core-js/library/fn/object/define-properties");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptors */ "core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _defineProperty; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);

function _defineProperty(obj, key, value) {
  if (key in obj) {
    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./pages/api/index.ts":
/*!****************************!*\
  !*** ./pages/api/index.ts ***!
  \****************************/
/*! exports provided: config, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "config", function() { return config; });
/* harmony import */ var _prisma_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../prisma/server */ "./prisma/server.ts");

const config = {
  api: {
    bodyParser: false
  }
};
/* harmony default export */ __webpack_exports__["default"] = (_prisma_server__WEBPACK_IMPORTED_MODULE_0__["default"].createHandler({
  path: '/api'
}));

/***/ }),

/***/ "./prisma/context.ts":
/*!***************************!*\
  !*** ./prisma/context.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _prisma_photon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @prisma/photon */ "@prisma/photon");
/* harmony import */ var _prisma_photon__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_prisma_photon__WEBPACK_IMPORTED_MODULE_7__);








function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }


const photon = new _prisma_photon__WEBPACK_IMPORTED_MODULE_7__["Photon"]();

const createContext = request => _objectSpread({}, request, {
  photon
});

/* harmony default export */ __webpack_exports__["default"] = (createContext);

/***/ }),

/***/ "./prisma/permissions/index.ts":
/*!*************************************!*\
  !*** ./prisma/permissions/index.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-shield */ "graphql-shield");
/* harmony import */ var graphql_shield__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_shield__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./prisma/utils.ts");


const rules = {
  isAuthenticatedUser: Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["rule"])()((parent, args, context) => {
    const userId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUserId"])(context);
    return Boolean(userId);
  }),
  isPostOwner: Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["rule"])()(async (parent, {
    id
  }, context) => {
    const userId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUserId"])(context);
    const author = await context.photon.posts.findOne({
      where: {
        id
      }
    }).author();
    return userId === author.id;
  })
};
const permissions = Object(graphql_shield__WEBPACK_IMPORTED_MODULE_0__["shield"])({
  Query: {
    me: rules.isAuthenticatedUser,
    filterPosts: rules.isAuthenticatedUser,
    post: rules.isAuthenticatedUser
  },
  Mutation: {
    createDraft: rules.isAuthenticatedUser,
    deletePost: rules.isPostOwner,
    publish: rules.isPostOwner
  }
});
/* harmony default export */ __webpack_exports__["default"] = (permissions);

/***/ }),

/***/ "./prisma/schema.ts":
/*!**************************!*\
  !*** ./prisma/schema.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var nexus_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus-prisma */ "nexus-prisma");
/* harmony import */ var nexus_prisma__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus_prisma__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types */ "./prisma/types/index.ts");




const schema = Object(nexus__WEBPACK_IMPORTED_MODULE_1__["makeSchema"])({
  types: _types__WEBPACK_IMPORTED_MODULE_3__,
  plugins: [Object(nexus_prisma__WEBPACK_IMPORTED_MODULE_0__["nexusPrismaPlugin"])()],
  outputs: {
    schema: Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(__dirname, '/generated/schema.graphql'),
    typegen: Object(path__WEBPACK_IMPORTED_MODULE_2__["join"])(__dirname, '/generated/nexus.ts')
  },
  typegenAutoConfig: {
    sources: [{
      source: '@prisma/photon',
      alias: 'photon'
    }, {
      source: /*require.resolve*/(/*! ./context */ "./prisma/context.ts"),
      alias: 'Context'
    }],
    contextType: 'Context.Context'
  }
});
/* harmony default export */ __webpack_exports__["default"] = (schema);
/* WEBPACK VAR INJECTION */}.call(this, "/"))

/***/ }),

/***/ "./prisma/server.ts":
/*!**************************!*\
  !*** ./prisma/server.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-server-micro */ "apollo-server-micro");
/* harmony import */ var apollo_server_micro__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! graphql-middleware */ "graphql-middleware");
/* harmony import */ var graphql_middleware__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(graphql_middleware__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _permissions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./permissions */ "./prisma/permissions/index.ts");
/* harmony import */ var _schema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./schema */ "./prisma/schema.ts");
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./context */ "./prisma/context.ts");





const apolloServer = new apollo_server_micro__WEBPACK_IMPORTED_MODULE_0__["ApolloServer"]({
  schema: Object(graphql_middleware__WEBPACK_IMPORTED_MODULE_1__["applyMiddleware"])(_schema__WEBPACK_IMPORTED_MODULE_3__["default"], _permissions__WEBPACK_IMPORTED_MODULE_2__["default"]),
  context: _context__WEBPACK_IMPORTED_MODULE_4__["default"]
});
/* harmony default export */ __webpack_exports__["default"] = (apolloServer);

/***/ }),

/***/ "./prisma/types/AuthPayload.ts":
/*!*************************************!*\
  !*** ./prisma/types/AuthPayload.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);

const AuthPayload = Object(nexus__WEBPACK_IMPORTED_MODULE_0__["objectType"])({
  name: 'AuthPayload',

  definition(t) {
    t.string('token');
    t.field('user', {
      type: 'User'
    });
  }

});
/* harmony default export */ __webpack_exports__["default"] = (AuthPayload);

/***/ }),

/***/ "./prisma/types/Mutation.ts":
/*!**********************************!*\
  !*** ./prisma/types/Mutation.ts ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcryptjs */ "bcryptjs");
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./prisma/utils.ts");




const Mutation = Object(nexus__WEBPACK_IMPORTED_MODULE_2__["mutationType"])({
  definition(t) {
    t.field('signup', {
      type: 'AuthPayload',
      args: {
        name: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])(),
        email: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])({
          nullable: false
        }),
        password: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])({
          nullable: false
        })
      },
      resolve: async (_parent, {
        name,
        email,
        password
      }, ctx) => {
        const hashedPassword = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["hash"])(password, 10);
        const user = await ctx.photon.users.create({
          data: {
            name,
            email,
            password: hashedPassword
          }
        });
        return {
          token: Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["sign"])({
            userId: user.id
          }, _utils__WEBPACK_IMPORTED_MODULE_3__["APP_SECRET"]),
          user
        };
      }
    });
    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])({
          nullable: false
        }),
        password: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])({
          nullable: false
        })
      },
      resolve: async (_parent, {
        email,
        password
      }, context) => {
        const user = await context.photon.users.findOne({
          where: {
            email
          }
        });

        if (!user) {
          throw new Error(`No user found for email: ${email}`);
        }

        const passwordValid = await Object(bcryptjs__WEBPACK_IMPORTED_MODULE_0__["compare"])(password, user.password);

        if (!passwordValid) {
          throw new Error('Invalid password');
        }

        return {
          token: Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__["sign"])({
            userId: user.id
          }, _utils__WEBPACK_IMPORTED_MODULE_3__["APP_SECRET"]),
          user
        };
      }
    });
    t.field('createDraft', {
      type: 'Post',
      args: {
        title: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])({
          nullable: false
        }),
        content: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["stringArg"])()
      },
      resolve: (parent, {
        title,
        content
      }, ctx) => {
        const userId = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["getUserId"])(ctx);
        return ctx.photon.posts.create({
          data: {
            title,
            content,
            published: false,
            author: {
              connect: {
                id: userId
              }
            }
          }
        });
      }
    });
    t.field('deletePost', {
      type: 'Post',
      nullable: true,
      args: {
        id: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["idArg"])()
      },
      resolve: (parent, {
        id
      }, ctx) => {
        return ctx.photon.posts.delete({
          where: {
            id
          }
        });
      }
    });
    t.field('publish', {
      type: 'Post',
      nullable: true,
      args: {
        id: Object(nexus__WEBPACK_IMPORTED_MODULE_2__["idArg"])()
      },
      resolve: (parent, {
        id
      }, ctx) => {
        return ctx.photon.posts.update({
          where: {
            id
          },
          data: {
            published: true
          }
        });
      }
    });
  }

});
/* harmony default export */ __webpack_exports__["default"] = (Mutation);

/***/ }),

/***/ "./prisma/types/Post.ts":
/*!******************************!*\
  !*** ./prisma/types/Post.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);

const Post = Object(nexus__WEBPACK_IMPORTED_MODULE_0__["objectType"])({
  name: 'Post',

  definition(t) {
    t.model.id(); // t.model.createdAt();
    // t.model.updatedAt();

    t.model.published();
    t.model.title();
    t.model.content();
    t.model.author();
  }

});
/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ "./prisma/types/Query.ts":
/*!*******************************!*\
  !*** ./prisma/types/Query.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils */ "./prisma/utils.ts");


const Query = Object(nexus__WEBPACK_IMPORTED_MODULE_0__["queryType"])({
  definition(t) {
    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: (parent, args, ctx) => {
        const userId = Object(_utils__WEBPACK_IMPORTED_MODULE_1__["getUserId"])(ctx);
        return ctx.photon.users.findOne({
          where: {
            id: userId
          }
        });
      }
    });
    t.list.field('feed', {
      type: 'Post',
      resolve: (parent, args, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            published: true
          }
        });
      }
    });
    t.list.field('filterPosts', {
      type: 'Post',
      args: {
        searchString: Object(nexus__WEBPACK_IMPORTED_MODULE_0__["stringArg"])({
          nullable: true
        })
      },
      resolve: (parent, {
        searchString
      }, ctx) => {
        return ctx.photon.posts.findMany({
          where: {
            OR: [{
              title: {
                contains: searchString
              }
            }, {
              content: {
                contains: searchString
              }
            }]
          }
        });
      }
    });
    t.field('post', {
      type: 'Post',
      nullable: true,
      args: {
        id: Object(nexus__WEBPACK_IMPORTED_MODULE_0__["idArg"])()
      },
      resolve: (parent, {
        id
      }, ctx) => {
        return ctx.photon.posts.findOne({
          where: {
            id
          }
        });
      }
    });
  }

});
/* harmony default export */ __webpack_exports__["default"] = (Query);

/***/ }),

/***/ "./prisma/types/User.ts":
/*!******************************!*\
  !*** ./prisma/types/User.ts ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nexus */ "nexus");
/* harmony import */ var nexus__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nexus__WEBPACK_IMPORTED_MODULE_0__);

const User = Object(nexus__WEBPACK_IMPORTED_MODULE_0__["objectType"])({
  name: 'User',

  definition(t) {
    t.model.id();
    t.model.name();
    t.model.email();
    t.model.posts({
      pagination: false
    });
  }

});
/* harmony default export */ __webpack_exports__["default"] = (User);

/***/ }),

/***/ "./prisma/types/index.ts":
/*!*******************************!*\
  !*** ./prisma/types/index.ts ***!
  \*******************************/
/*! exports provided: AuthPayload, Mutation, Post, Query, User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthPayload__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthPayload */ "./prisma/types/AuthPayload.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthPayload", function() { return _AuthPayload__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Mutation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Mutation */ "./prisma/types/Mutation.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Mutation", function() { return _Mutation__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _Post__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Post */ "./prisma/types/Post.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Post", function() { return _Post__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _Query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Query */ "./prisma/types/Query.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Query", function() { return _Query__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./User */ "./prisma/types/User.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "User", function() { return _User__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./prisma/utils.ts":
/*!*************************!*\
  !*** ./prisma/utils.ts ***!
  \*************************/
/*! exports provided: APP_SECRET, getUserId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SECRET", function() { return APP_SECRET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserId", function() { return getUserId; });
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jsonwebtoken */ "jsonwebtoken");
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const APP_SECRET = 'appsecret321';
const getUserId = context => {
  const {
    authorization
  } = context.req.headers;

  if (authorization) {
    const token = authorization.replace('Bearer ', '');
    const verifiedToken = Object(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__["verify"])(token, APP_SECRET);
    return verifiedToken && verifiedToken.userId;
  }
};

/***/ }),

/***/ 4:
/*!**********************************!*\
  !*** multi ./pages/api/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielkov/projects/DevStarter/pages/api/index.ts */"./pages/api/index.ts");


/***/ }),

/***/ "@prisma/photon":
/*!*********************************!*\
  !*** external "@prisma/photon" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@prisma/photon");

/***/ }),

/***/ "apollo-server-micro":
/*!**************************************!*\
  !*** external "apollo-server-micro" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("apollo-server-micro");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("bcryptjs");

/***/ }),

/***/ "core-js/library/fn/object/define-properties":
/*!**************************************************************!*\
  !*** external "core-js/library/fn/object/define-properties" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-properties");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptors":
/*!*************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptors" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptors");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "graphql-middleware":
/*!*************************************!*\
  !*** external "graphql-middleware" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-middleware");

/***/ }),

/***/ "graphql-shield":
/*!*********************************!*\
  !*** external "graphql-shield" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("graphql-shield");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),

/***/ "nexus":
/*!************************!*\
  !*** external "nexus" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nexus");

/***/ }),

/***/ "nexus-prisma":
/*!*******************************!*\
  !*** external "nexus-prisma" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nexus-prisma");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ })

/******/ });
//# sourceMappingURL=api.js.map