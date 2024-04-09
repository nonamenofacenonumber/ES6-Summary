/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./lib/pack.js":
/*!*********************!*\
  !*** ./lib/pack.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   packFunc: () => (/* binding */ packFunc)\n/* harmony export */ });\nfunction packFunc() {\n  console.log(\"This is a pack.js function\");\n}\n\n\n//# sourceURL=webpack:///./lib/pack.js?");

/***/ }),

/***/ "./logger1.js":
/*!********************!*\
  !*** ./logger1.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   logger1Func: () => (/* binding */ logger1Func),\n/* harmony export */   name: () => (/* binding */ name),\n/* harmony export */   packFunc_in_logger1: () => (/* binding */ packFunc_in_logger1)\n/* harmony export */ });\n/* harmony import */ var _lib_pack__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/pack */ \"./lib/pack.js\");\n\nvar name = 'Saeed';\nfunction logger1Func() {\n  console.log('This is a logger1.js function');\n}\nfunction packFunc_in_logger1() {\n  (0,_lib_pack__WEBPACK_IMPORTED_MODULE_0__.packFunc)();\n}\n\n\n//# sourceURL=webpack:///./logger1.js?");

/***/ }),

/***/ "./logger2.js":
/*!********************!*\
  !*** ./logger2.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   logger2Func1: () => (/* binding */ logger2Func1),\n/* harmony export */   logger2Func2: () => (/* binding */ logger2Func2)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Logger2 = /*#__PURE__*/function () {\n  function Logger2() {\n    _classCallCheck(this, Logger2);\n  }\n  _createClass(Logger2, null, [{\n    key: \"success\",\n    value: function success(message) {\n      console.log(\"%c \".concat(message), 'color : green');\n    }\n  }, {\n    key: \"error\",\n    value: function error(message) {\n      console.log(\"%c \".concat(message), 'color : red');\n    }\n  }]);\n  return Logger2;\n}();\nfunction logger2Func1() {\n  console.log('This is a logger2.js function 1');\n}\nfunction logger2Func2() {\n  console.log('This is a logger2.js function 2');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logger2);\n\n\n//# sourceURL=webpack:///./logger2.js?");

/***/ }),

/***/ "./logger3.js":
/*!********************!*\
  !*** ./logger3.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Logger3 = /*#__PURE__*/function () {\n  function Logger3() {\n    _classCallCheck(this, Logger3);\n  }\n  _createClass(Logger3, [{\n    key: \"success\",\n    value: function success(message) {\n      console.log(\"%c \".concat(message), 'color : green');\n    }\n  }, {\n    key: \"error\",\n    value: function error(message) {\n      console.log(\"%c \".concat(message), 'color : red');\n    }\n  }]);\n  return Logger3;\n}();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger3());\n\n//# sourceURL=webpack:///./logger3.js?");

/***/ }),

/***/ "./logger4.js":
/*!********************!*\
  !*** ./logger4.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   logger4Func1: () => (/* binding */ logger4Func1),\n/* harmony export */   logger4Func2: () => (/* binding */ logger4Func2)\n/* harmony export */ });\nfunction _typeof(o) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o; }, _typeof(o); }\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\nvar Logger4 = /*#__PURE__*/function () {\n  function Logger4() {\n    _classCallCheck(this, Logger4);\n  }\n  _createClass(Logger4, null, [{\n    key: \"success\",\n    value: function success(message) {\n      console.log(\"%c \".concat(message), 'color : green');\n    }\n  }, {\n    key: \"error\",\n    value: function error(message) {\n      console.log(\"%c \".concat(message), 'color : red');\n    }\n  }]);\n  return Logger4;\n}();\nfunction logger4Func1() {\n  console.log('This is a logger4.js function 1');\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Logger4);\n\nfunction logger4Func2() {\n  console.log('This is a logger4.js function 2');\n}\n\n//# sourceURL=webpack:///./logger4.js?");

/***/ }),

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _logger1__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger1 */ \"./logger1.js\");\n/* harmony import */ var _logger2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger2 */ \"./logger2.js\");\n/* harmony import */ var _logger3__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logger3 */ \"./logger3.js\");\n/* harmony import */ var _logger4__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logger4 */ \"./logger4.js\");\n\n\n\n\n(0,_logger1__WEBPACK_IMPORTED_MODULE_0__.logger1Func)();\n(0,_logger1__WEBPACK_IMPORTED_MODULE_0__.packFunc_in_logger1)();\n_logger2__WEBPACK_IMPORTED_MODULE_1__[\"default\"].error('This is a logger2.js static function in class');\n(0,_logger2__WEBPACK_IMPORTED_MODULE_1__.logger2Func1)();\n(0,_logger2__WEBPACK_IMPORTED_MODULE_1__.logger2Func2)();\n_logger3__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error('This is a logger3.js function in class');\n_logger4__WEBPACK_IMPORTED_MODULE_3__.logger4Func1();\n_logger4__WEBPACK_IMPORTED_MODULE_3__.logger4Func2();\n\n//# sourceURL=webpack:///./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./script.js");
/******/ 	
/******/ })()
;