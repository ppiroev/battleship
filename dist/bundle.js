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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style/style.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style/style.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! Fun Games.otf */ \"./src/style/Fun Games.otf\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: battleship;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n* {\\n  margin: 0;\\n  padding: 0;\\n  font-family: battleship;\\n}\\n\\n.content{\\n  height: 100vh;\\n  text-align: center;\\n  display: grid;\\n  align-content: center;\\n  justify-content: center;\\n}\\n\\n.header{\\n  font-size: 4rem;\\n  letter-spacing: 1rem;\\n  padding-bottom: 10%;\\n}\\n\\n.gameMode {\\n  font-size: 2rem;\\n  display: grid;\\n  gap: 25px;\\n}\\n\\n.hidden {\\n  visibility: hidden;\\n}\\n\\n.gamefield {\\n  display: grid;\\n  gap: 50px;\\n  grid-template-columns: 1fr 1fr;\\n  \\n}\\n\\n.left-grid, .right-grid {\\n  display: grid;\\n  justify-content: center;\\n  grid-template-columns: repeat(10, 1fr);\\n  width: 400px;\\n  height: 400px;\\n  border: 4px black solid;\\n}\\n\\n.cell-p1, .cell-p2 {\\n  box-sizing: border-box;\\n  width: 40px;\\n  height: 40px;\\n  border: solid 1px black;\\n}\\n\\n.winnerDisplay {\\n  position: fixed;\\n  width: 100vw;\\n  height: 100vh;\\n  top: 0%;\\n  left: 0%;\\n  background-color: white;\\n}\\n\\n.winnerDisplay h1 {\\n  font-size: 5rem;\\n  margin-top: 15%;\\n}\\n\\n.winnerDisplay p {\\n  font-size: 2rem;\\n}\\n\\n.drag-drop {\\n  display: grid;\\n  grid-template-rows: repeat(5, 40px);\\n  justify-content: start;\\n  gap: 3px;\\n}\\n\\n.carrier {\\n  display: grid;\\n  grid-template-columns: repeat(5, 40px);\\n  justify-content: start;\\n  border: 1px solid black;\\n  width: 200px;\\n}\\n\\n.battleship {\\n  display: grid;\\n  grid-template-columns: repeat(4, 40px);\\n  justify-content: start;\\n  border: 1px solid black;\\n  width: 160px;\\n}\\n\\n.cruiser {\\n  display: grid;\\n  grid-template-columns: repeat(3, 40px);\\n  justify-content: start;\\n  border: 1px solid black;\\n  width: 120px;\\n}\\n\\n.submarine {\\n  display: grid;\\n  grid-template-columns: repeat(3, 40px);\\n  justify-content: start;\\n  border: 1px solid black;\\n  width: 120px;\\n}\\n\\n.destroyer {\\n  display: grid;\\n  grid-template-columns: repeat(2, 40px);\\n  justify-content: start;\\n  border: 1px solid black;\\n  width: 80px;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style/style.css":
/*!*****************************!*\
  !*** ./src/style/style.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/style/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.css */ \"./src/style/style.css\");\n/* harmony import */ var _scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/dom.js */ \"./src/scripts/dom.js\");\n\n\n\n\n_scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__.modes.forEach((mode) => {\n  mode.addEventListener(\"click\", (e) => {\n    const selectedMode = e.target.id;\n    (0,_scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderGameField)(selectedMode);\n    (0,_scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderPlayerBoard)();\n    (0,_scripts_dom_js__WEBPACK_IMPORTED_MODULE_1__.renderComputerBoard)();\n    const initScreen = document.querySelector(\".gameMode\");\n    initScreen.remove();\n  });\n});\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/scripts/dom.js":
/*!****************************!*\
  !*** ./src/scripts/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modes\": () => (/* binding */ modes),\n/* harmony export */   \"renderComputerBoard\": () => (/* binding */ renderComputerBoard),\n/* harmony export */   \"renderGameField\": () => (/* binding */ renderGameField),\n/* harmony export */   \"renderPlayerBoard\": () => (/* binding */ renderPlayerBoard),\n/* harmony export */   \"renderWinner\": () => (/* binding */ renderWinner),\n/* harmony export */   \"updateBoard\": () => (/* binding */ updateBoard)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player.js */ \"./src/scripts/player.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.js */ \"./src/scripts/helper.js\");\n\n\n\n\nconst modes = document.querySelectorAll(\".mode\");\n\nconst player = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(\"human\");\nconst computer = new _player_js__WEBPACK_IMPORTED_MODULE_1__.Player(\"computer\");\n\nlet playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard();\nconst computerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard();\n\ncomputerBoard.placeShipsRandom();\nplayerBoard.placeShipsRandom();\n\nfunction randomPlacementBtn() {\n  const leftGrid = document.querySelector(\".left-grid\");\n  while (leftGrid.firstChild) {\n    leftGrid.firstChild.remove();\n  }\n\n  playerBoard = new _gameboard_js__WEBPACK_IMPORTED_MODULE_0__.gameBoard();\n  playerBoard.placeShipsRandom();\n\n  renderPlayerBoard();\n}\n\nfunction renderComputerBoard() {\n  const rightGrid = document.querySelector(\".right-grid\");\n  for (let i = 0; i < 10; i++) {\n    const row = document.createElement(\"div\");\n    rightGrid.appendChild(row);\n\n    computerBoard.board[i].forEach((c, j) => {\n      let cell = document.createElement(\"div\");\n      cell.classList.add(\"cell-p2\");\n      cell.setAttribute(\"data-col\", `${i}`);\n      cell.setAttribute(\"data-row\", `${j}`);\n      row.appendChild(cell);\n\n      cell.addEventListener(\"click\", function handleRound(e) {\n        const x = e.target.dataset.col;\n        const y = e.target.dataset.row;\n        if (typeof computerBoard.board[x][y] === \"object\") {\n          e.target.style.backgroundColor = \"darkred\";\n        } else {\n          e.target.style.backgroundColor = \"lightgray\";\n        }\n        computerBoard.receiveAttack(x, y);\n        const computerSunk = computerBoard.allShipsSunk();\n        if (computerSunk === true) {\n          renderWinner(\"player\");\n        } else {\n          computer.randomAttack((0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.randLoc)(), (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.randLoc)(), playerBoard);\n\n          const playerSunk = playerBoard.allShipsSunk();\n          if (playerSunk === true) {\n            renderWinner(\"computer\");\n          }\n        }\n        cell.removeEventListener(\"click\", handleRound);\n      });\n    });\n  }\n}\n\nfunction renderPlayerBoard() {\n  const leftGrid = document.querySelector(\".left-grid\");\n  for (let i = 0; i < 10; i++) {\n    const row = document.createElement(\"div\");\n    row.classList.add(\"row-p1\");\n    leftGrid.appendChild(row);\n\n    playerBoard.board[i].forEach((e, j) => {\n      let cell = document.createElement(\"div\");\n      cell.classList.add(\"cell-p1\");\n      cell.setAttribute(\"data-p1col\", `${i}`);\n      cell.setAttribute(\"data-p1row\", `${j}`);\n      if (typeof e === \"object\") {\n        cell.style.backgroundColor = \"gray\";\n      }\n      row.appendChild(cell);\n    });\n  }\n}\n\nfunction updateBoard(x, y) {\n  const cell = document.querySelector(\n    `.cell-p1[data-p1col=\"${x}\"][data-p1row=\"${y}\"]`\n  );\n  if (typeof playerBoard.board[x][y] === \"object\") {\n    cell.style.backgroundColor = \"darkred\";\n  } else {\n    cell.style.backgroundColor = \"yellow\";\n  }\n}\n\nfunction renderWinner(winner) {\n  const view = document.querySelector(\".content\");\n  const winnerDisplay = document.createElement(\"div\");\n  winnerDisplay.classList.add(\"winnerDisplay\");\n  const winnerMessage = document.createElement(\"h1\");\n  const instMessage = document.createElement(\"p\");\n  instMessage.textContent = \"Refresh to play again\";\n\n  if (winner === \"player\") {\n    winnerMessage.textContent = \"Player Wins\";\n  } else {\n    winnerMessage.textContent = \"Computer Wins\";\n  }\n  winnerDisplay.append(winnerMessage, instMessage);\n  view.append(winnerDisplay);\n}\n\nfunction renderGameField(mode) {\n  const gamefield = document.createElement(\"div\");\n  gamefield.classList.add(\"gamefield\");\n\n  const leftside = document.createElement(\"div\");\n  leftside.classList.add(\"left\");\n  const player1 = document.createElement(\"p\");\n\n  const rightside = document.createElement(\"div\");\n  rightside.classList.add(\"right\");\n  const player2 = document.createElement(\"p\");\n\n  if (mode === \"pvc\") {\n    player1.textContent = \"Player\";\n    player2.textContent = \"Computer\";\n  } else if (mode === \"pvp\") {\n    player1.textContent = \"Player One\";\n    player2.textContent = \"Player Two\";\n  }\n\n  const leftGrid = document.createElement(\"div\");\n  leftGrid.classList.add(\"left-grid\");\n  const rightGrid = document.createElement(\"div\");\n  rightGrid.classList.add(\"right-grid\");\n\n  const placement = document.createElement('div');\n  const randPlaceBtn = document.createElement(\"p\");\n  randPlaceBtn.classList.add(\"randBtn\");\n  randPlaceBtn.textContent = \"Place Random\";\n  randPlaceBtn.addEventListener(\"click\", (e) => {\n    randomPlacementBtn();\n  });\n  placement.append(randPlaceBtn)\n\n  leftside.append(player1, leftGrid, placement);\n  rightside.append(player2, rightGrid);\n  gamefield.append(leftside, rightside);\n\n  const content = document.querySelector(\".content\");\n  content.append(gamefield);\n}\n\n// function dragAndDropShips(side){\n//   const leftside = document.querySelector('.left');\n//   const dragDropShips = document.createElement('div');\n//   dragDropShips.classList.add('drag-drop');\n//   shipTypes.forEach(ship => {\n//     const shipElement = document.createElement('div');\n//     shipElement.classList.add(`${ship.type}`)\n//     shipElement.classList.add('shipElement')\n//     for(let i = 0; i < ship.length; i++){\n//       const cell = document.createElement('div');\n//       cell.classList.add('cell-p1');\n//       shipElement.append(cell);\n//     }\n\n//     dragDropShips.append(shipElement);\n//   })\n//   side.append(dragDropShips)\n// }\n\n\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/dom.js?");

/***/ }),

/***/ "./src/scripts/gameboard.js":
/*!**********************************!*\
  !*** ./src/scripts/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"gameBoard\": () => (/* binding */ gameBoard)\n/* harmony export */ });\n/* harmony import */ var _shipfactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipfactory.js */ \"./src/scripts/shipfactory.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helper.js */ \"./src/scripts/helper.js\");\n\n\n\n\nclass gameBoard {\n  constructor() {\n    this.board = this.createBoard();\n    this.shotsFired = [];\n  }\n\n  createBoard() {\n    let board = [];\n    for (let i = 0; i < 10; i++) {\n      board[i] = [];\n      for (let j = 0; j < 10; j++) {\n        board[i].push(false);\n      }\n    }\n    return board;\n  }\n\n  receiveAttack(x, y) {\n    const locHit = this.board[x][y];\n    if (typeof locHit === \"object\") {\n      locHit.onHit();\n      locHit.isSunk();\n      this.shotsFired.push([x, y]);\n    } else {\n      this.shotsFired.push([x, y]);\n    }\n  }\n\n  setShip(x, y, l, dir) {\n    let ship = new _shipfactory_js__WEBPACK_IMPORTED_MODULE_0__.Ship(l);\n    if (x + l < 10 && y + l < 10) {\n      if (dir === \"v\") {\n        for (let i = y; i < y + l; i++) {\n          this.board[x][i] = ship;\n        }\n      } else if (dir === \"h\") {\n        for (let i = x; i < x + l; i++) {\n          this.board[i][y] = ship;\n        }\n      }\n    }\n  }\n\n  isTaken(x, y, l, dir) {\n    let cells = [];\n    if (dir === \"v\") {\n      for (let i = y; i < y + l; i++) {\n        cells.push(this.board[x][i]);\n      }\n    } else if (dir === \"h\") {\n      for (let i = x; i < x + l; i++) {\n        cells.push(this.board[i][y]);\n      }\n    }\n\n    let obj = (obj) => typeof obj === \"object\";\n    return cells.some(obj);\n  }\n\n  allShipsSunk() {\n    let allSunk = true;\n    this.board.forEach((arr) => {\n      arr.forEach((e) => {\n        if (typeof e === \"object\") {\n          if (e.isSunk() === false) {\n            allSunk = false;\n          }\n        }\n      });\n    });\n    return allSunk;\n  }\n\n  isAdjacentTaken(x, y) {\n    const adjacentCells = [\n      [x - 1, y],\n      [x + 1, y],\n      [x, y - 1],\n      [x, y + 1],\n    ];\n\n    return adjacentCells.some(([i, j]) => {\n      if (i < 0 || j < 0 || i > 9 || j > 9) {\n        return false;\n      }\n      return typeof this.board[i][j] === \"object\";\n    });\n  }\n\n  placeShipsRandom() {\n    _helper_js__WEBPACK_IMPORTED_MODULE_1__.shipTypes.forEach((ship) => {\n      let flag = false;\n      while (flag === false) {\n        let x = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.randLoc)();\n        let y = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.randLoc)();\n        let dir = (0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.randDir)();\n        if ((0,_helper_js__WEBPACK_IMPORTED_MODULE_1__.ifLegal)(x, y, ship.length)) {\n          if (this.isTaken(x, y, ship.length, dir)) {\n            continue;\n          } else if (this.isAdjacentTaken(x, y)) {\n            continue;\n          } else {\n            this.setShip(x, y, ship.length, dir);\n            flag = true;\n          }\n        }\n      }\n    });\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/gameboard.js?");

/***/ }),

/***/ "./src/scripts/helper.js":
/*!*******************************!*\
  !*** ./src/scripts/helper.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrayEquals\": () => (/* binding */ arrayEquals),\n/* harmony export */   \"ifLegal\": () => (/* binding */ ifLegal),\n/* harmony export */   \"randDir\": () => (/* binding */ randDir),\n/* harmony export */   \"randLoc\": () => (/* binding */ randLoc),\n/* harmony export */   \"shipTypes\": () => (/* binding */ shipTypes)\n/* harmony export */ });\nconst shipTypes = [\n  { type: \"carrier\", length: 5 },\n  { type: \"battleship\", length: 4 },\n  { type: \"cruiser\", length: 3 },\n  { type: \"submarine\", length: 3 },\n  { type: \"destroyer\", length: 2 },\n];\n\nfunction arrayEquals(a, b) {\n  return (\n    Array.isArray(a) &&\n    Array.isArray(b) &&\n    a.length === b.length &&\n    a.every((val, index) => val === b[index])\n  );\n}\n\nfunction ifLegal(x, y, l) {\n  return x + l < 10 && y + l < 10 && x > -1 && y > -1 ? true : false;\n}\n\nfunction randLoc() {\n  return Math.floor(Math.random() * 10);\n}\n\nfunction randDir() {\n  let num = Math.floor(Math.random() * 2);\n  return num > 0 ? \"h\" : \"v\";\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/helper.js?");

/***/ }),

/***/ "./src/scripts/player.js":
/*!*******************************!*\
  !*** ./src/scripts/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Player\": () => (/* binding */ Player)\n/* harmony export */ });\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard.js */ \"./src/scripts/gameboard.js\");\n/* harmony import */ var _dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom.js */ \"./src/scripts/dom.js\");\n/* harmony import */ var _helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helper.js */ \"./src/scripts/helper.js\");\n\n\n\n\nclass Player {\n  constructor(type) {\n    this.type = type;\n    this.board = null;\n    this.turn = false;\n    this.lastShot = [9, 9];\n  }\n\n  randomAttack(x, y, board) {\n    const isShotFired = board.shotsFired.some((v) => (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.arrayEquals)(v, [x, y]));\n    if (isShotFired === true) {\n      this.randomAttack((0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.randLoc)(), (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.randLoc)(), board);\n    } else {\n      if (typeof board.board[this.lastShot[0]][this.lastShot[1]] === \"object\") {\n        const nextShot = this.adjacentShot(\n          this.lastShot[0],\n          this.lastShot[1],\n          board\n        );\n        if (nextShot != null) {\n          board.receiveAttack(nextShot[0], nextShot[1]);\n          (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(nextShot[0], nextShot[1]);\n          this.lastShot = [nextShot[0], nextShot[1]];\n        } else {\n          board.receiveAttack(x, y);\n          (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(x, y);\n          this.lastShot = [x, y];\n        }\n      } else {\n        board.receiveAttack(x, y);\n        (0,_dom_js__WEBPACK_IMPORTED_MODULE_1__.updateBoard)(x, y);\n        this.lastShot = [x, y];\n      }\n    }\n  }\n\n  adjacentShot(x, y, board) {\n    let potentialShots = [];\n\n    const adjacentCells = [\n      [x - 1, y],\n      [x + 1, y],\n      [x, y - 1],\n      [x, y + 1],\n    ];\n\n    adjacentCells.forEach((e) => {\n      if(e[0] < 0 || e[0] > 9 || e[1] < 0 || e[1] > 9 ){\n      } else {\n        if (!board.shotsFired.some((v) => (0,_helper_js__WEBPACK_IMPORTED_MODULE_2__.arrayEquals)(v, [e[0], e[1]]))) {\n          potentialShots.push([e[0], e[1]]);\n        }\n      }\n      \n    });\n    if (potentialShots.length > 0) {\n      const random = Math.floor(Math.random() * potentialShots.length);\n      return potentialShots[random];\n    } else return null;\n  }\n\n  changeTurn(enemy) {\n    this.turn = true;\n    enemy.turn = false;\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/player.js?");

/***/ }),

/***/ "./src/scripts/shipfactory.js":
/*!************************************!*\
  !*** ./src/scripts/shipfactory.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Ship\": () => (/* binding */ Ship)\n/* harmony export */ });\nclass Ship {\n  constructor(length) {\n    this.length = length;\n    this.hit = 0;\n  }\n\n  onHit() {\n    this.hit += 1;\n  }\n\n  isSunk() {\n    if (this.hit === this.length) {\n      return true;\n    } else \n    {return false;}\n  }\n}\n\n\n\n\n//# sourceURL=webpack://battleship/./src/scripts/shipfactory.js?");

/***/ }),

/***/ "./src/style/Fun Games.otf":
/*!*********************************!*\
  !*** ./src/style/Fun Games.otf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d17fbbf50b6f9088cdc2.otf\";\n\n//# sourceURL=webpack://battleship/./src/style/Fun_Games.otf?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;