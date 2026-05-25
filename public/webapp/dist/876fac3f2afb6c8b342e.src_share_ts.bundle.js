"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_share_ts"],{

/***/ "./src/PdfExport.ts":
/*!**************************!*\
  !*** ./src/PdfExport.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createPDF: () => (/* binding */ createPDF)
/* harmony export */ });
/* harmony import */ var html2canvas__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! html2canvas */ "./node_modules/html2canvas/dist/html2canvas-pro.esm.js");
/* harmony import */ var jspdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jspdf */ "./node_modules/jspdf/dist/jspdf.es.min.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

// tslint:disable-next-line: no-var-requires


// require("./NotoSans-Regular-normal");
// // switch (i18n.language) {
//   // case "ar":
// require("./NotoSansArabic-Regular-normal");
//     // break;
//   // case "ja":
// require("./NotoSansJP-Regular-normal");
//     // break;
//   // case "ko":
// require("./NotoSansKR-Regular-normal");
//     // break;
//   // case "th":
// require("./NotoSansThai-Regular-normal");
//     // break;
//   // case "zh-CN":
// require("./NotoSansSC-Regular-normal");
//     // break;
//   // case "zh-TW":/
// require("./NotoSansTC-Regular-normal");
//     // break;
//   // default:
//     // break;
// // }

// require("./")
// This is essential to import custom fonts.
// require("./NotoSans-Regular-normal")
// require("./NotoSansArabic-Regular-normal")
window.html2canvas = html2canvas__WEBPACK_IMPORTED_MODULE_0__["default"];
function prepareData(params) {
  var rowData = "";
  if (params.metadata.length > 0) {
    params.metadata.map(function (item) {
      if (item.type === "image") {
        rowData += "<img width='100%' src='" + item.value + "' alt='meta-image' />";
      } else if (item.type === "imageheight") {
        rowData += "<img height='780pt' src='" + item.value + "' alt='meta-image' />";
      } else if (item.type === "imageheightpad") {
        rowData += "<div style='page-break-before: always'><img height='780pt' src='" + item.value + "' alt='meta-image' /></div>";
      } else if (item.type === "imageArray") {
        var imageSet = "";
        item.value.map(function (image) {
          imageSet += "<img width='100%' src='" + image + "' alt='meta-image' />";
        });
        rowData += imageSet;
      }
    });
  }
  var htmlContent = "<div style=\"width: 550px; margin: 10px auto; \">" + rowData + "</div>";
  // debugger;
  return htmlContent;
}
function createPDF(_x, _x2) {
  return _createPDF.apply(this, arguments);
}
function _createPDF() {
  _createPDF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(params, textHTML) {
    var _params$element;
    var htmlContent, pdf;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          htmlContent = !textHTML ? prepareData(params) + (((_params$element = params.element) === null || _params$element === void 0 ? void 0 : _params$element.innerHTML) || "") : textHTML; // if (params.type === "html" || !params.element) {
          pdf = new jspdf__WEBPACK_IMPORTED_MODULE_1__.jsPDF("portrait", "pt", "a4");
          _context.next = 4;
          return new Promise(function (resolve) {
            pdf.html(htmlContent, {
              callback: resolve,
              x: 0,
              y: 0,
              margin: [10, 0, 30, 0],
              autoPaging: "text"
            });
            var maxWidth = pdf.internal.pageSize.getWidth() - 30;
            var maxHeight = pdf.internal.pageSize.getHeight() - 70;
            var pageRatio = maxHeight / maxWidth;
            var firstPage = true;
            if (params.pngs) {
              var _iterator = _createForOfIteratorHelper(params.pngs),
                _step;
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var png = _step.value;
                  if (firstPage) {
                    firstPage = false;
                  } else {
                    pdf.addPage();
                  }
                  var imgRatio = png.height / png.width;
                  var height = 0;
                  var width = 0;
                  if (imgRatio > pageRatio) {
                    height = maxHeight;
                    width = height / imgRatio;
                  } else {
                    width = maxWidth;
                    height = width * imgRatio;
                  }
                  pdf.addImage(png.data, "PNG", 15, 15, width, height, undefined, "SLOW");
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          });
        case 4:
          return _context.abrupt("return", _context.sent);
        case 5:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return _createPDF.apply(this, arguments);
}

/***/ }),

/***/ "./src/share.ts":
/*!**********************!*\
  !*** ./src/share.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generatePDF: () => (/* binding */ generatePDF),
/* harmony export */   generateShareText: () => (/* binding */ generateShareText),
/* harmony export */   generateShareTextFile: () => (/* binding */ generateShareTextFile),
/* harmony export */   grabWorkspaceSVGs: () => (/* binding */ grabWorkspaceSVGs)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Blockly_BlocklyAccess__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Blockly/BlocklyAccess */ "./src/Blockly/BlocklyAccess.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FileSys/ProjectManager */ "./src/FileSys/ProjectManager.ts");
/* harmony import */ var _nativeInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nativeInterface */ "./src/nativeInterface.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _PdfExport__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PdfExport */ "./src/PdfExport.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _texteditor_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./texteditor/editor */ "./src/texteditor/editor.tsx");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _SimWindow_SimWindowController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SimWindow/SimWindowController */ "./src/SimWindow/SimWindowController.ts");
/* harmony import */ var _FeatureLock_Licenses__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./FeatureLock/Licenses */ "./src/FeatureLock/Licenses.ts");
/* harmony import */ var _FeatureLock_LicenseSystem__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./FeatureLock/LicenseSystem */ "./src/FeatureLock/LicenseSystem.ts");
/* harmony import */ var _FeatureLock_VRClassSystem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./FeatureLock/VRClassSystem */ "./src/FeatureLock/VRClassSystem.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! . */ "./src/index.tsx");
/* harmony import */ var _layout_Paths__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./layout/Paths */ "./src/layout/Paths.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("share system");
log.setLevel(log.levels.WARN);
// dev only
// log.enableAll();


















//#region types

//#endregion types

//#region upload/download helpers
//#region local downloads
/**
 * A simple funtion to trigger a file download.
 * 
 * NOTE: there is no way to get information on the result or progress of the download
 * 
 * @param filename the name of the file
 * @param content the raw content to download
 * @param mimeType the MIME type of the file
 */
function downloadFile(filename, content, mimeType) {
  // TODO: use the filesystem or project manager in the future
  var element = document.createElement("a");
  element.setAttribute("href", "data:".concat(mimeType, ";base64,").concat(btoa(content)));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/**
 * will download the project and share pdf to the local machine
 * @param pdf the pdf to save
 * @param pdfFilename the name of the PDF file
 * @param projectData the raw project data
 * @param projectFilename the name of the project file
 */
function localDownload(_x, _x2, _x3, _x4) {
  return _localDownload.apply(this, arguments);
} //#endregion local downloads
//#region cloud uploaders
/**
 * will upload a file to dropbox at the provided location
 * @param token the API auth token
 * @param filename the name of the file with extension
 * @param data the content of the file to upload
 * @param path the path to upload the file to
 * 
 * @returns a promise that will resolve when the upload is complete
 */
function _localDownload() {
  _localDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(pdf, pdfFilename, projectData, projectFilename) {
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(_platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsIOS || _platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsAndroid)) {
            _context.next = 8;
            break;
          }
          _context.next = 4;
          return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.sharePDF)(pdf.output("datauristring"), pdfFilename, ".pdf");
        case 4:
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.close();
          return _context.abrupt("return");
        case 8:
          downloadFile(pdfFilename, pdf.output(), "application/applicationpdf");
        case 9:
          // downloadFile(projectFilename, projectData, "text/plain");
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.close();
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareDownloadedPrompt();
          _context.next = 16;
          break;
        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](0);
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareDownloadFailedPrompt();
        case 16:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 13]]);
  }));
  return _localDownload.apply(this, arguments);
}
function dropboxFileUpload(_x5, _x6, _x7, _x8) {
  return _dropboxFileUpload.apply(this, arguments);
}
/**
 * will upload a file to dropbox at the provided location
 * @param token the API auth token
 * @param filename the name of the file with extension
 * @param data the content of the file to upload
 * @param parent the ID of the parent folder to upload the file to
 * @param mimeType the mime type of the file getting uploaded
 * 
 * @returns a promise that will resolve when the upload is complete
 */
function _dropboxFileUpload() {
  _dropboxFileUpload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(token, filename, data, path) {
    var myHeaders, requestOptions, dest, dropboxArgs, response, result;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          log.info("dropboxFileUpload", filename);
          myHeaders = new Headers();
          myHeaders.append("Content-Type", "text/plain; charset=dropbox-cors-hack");
          myHeaders.append("Authorization", "Bearer ".concat(token));
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: data,
            redirect: 'follow'
          };
          dest = "/".concat(path, "/").concat(filename).replace("//", "/");
          dropboxArgs = {
            "autorename": true,
            "mode": "add",
            "mute": false,
            "path": dest,
            "strict_conflict": false
          };
          _context2.next = 9;
          return fetch("https://content.dropboxapi.com/2/files/upload?arg=".concat(JSON.stringify(dropboxArgs)), requestOptions);
        case 9:
          response = _context2.sent;
          if (response.ok) {
            _context2.next = 12;
            break;
          }
          throw new Error("upload response not ok.");
        case 12:
          _context2.next = 14;
          return response.text();
        case 14:
          result = _context2.sent;
          log.debug("upload to", dest, result);
        case 16:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return _dropboxFileUpload.apply(this, arguments);
}
function googleDriveFileUpload(_x9, _x10, _x11, _x12, _x13) {
  return _googleDriveFileUpload.apply(this, arguments);
} //#endregion cloud uploaders
/**
 * a fucntion to route the share data to the correct location base don if in a class and where that class
 * wants the data sent.
 * 
 * NOTE: if this uses a local download, we don't know when that is done so it returns as soon as the download
 * has been started
 * 
 * @param name the name of the student
 * @param assignement the assignement this is for
 * @param pdfData the raw data of the PDF
 * @returns Promise that resolves when the upload os done
 */
function _googleDriveFileUpload() {
  _googleDriveFileUpload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(token, filename, data, parent, mimeType) {
    var myHeaders, metadata, metadataBlob, fileBlob, formdata, requestOptions, response, result;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          log.info("googleDriveFileUpload", filename);
          myHeaders = new Headers();
          myHeaders.append("Authorization", "Bearer ".concat(token));
          metadata = {
            "name": filename,
            mimeType: mimeType,
            "parents": [parent]
          };
          metadataBlob = new Blob([JSON.stringify(metadata)], {
            type: "application/json"
          });
          fileBlob = data instanceof Blob ? data : new Blob([data], {
            type: mimeType
          });
          formdata = new FormData();
          formdata.append("", metadataBlob, "metadata.json");
          formdata.append("", fileBlob, filename);
          requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
          };
          _context3.next = 12;
          return fetch("https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart", requestOptions);
        case 12:
          response = _context3.sent;
          if (response.ok) {
            _context3.next = 15;
            break;
          }
          throw new Error("upload response not ok.");
        case 15:
          _context3.next = 17;
          return response.text();
        case 17:
          result = _context3.sent;
          log.debug("upload", filename, result);
        case 19:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return _googleDriveFileUpload.apply(this, arguments);
}
function uploadShareData(_x14, _x15, _x16) {
  return _uploadShareData.apply(this, arguments);
} //#endregion upload/download helpers
/**
 * call this to grab the blockly styles for the SVGs
 * @returns a style string with the Blockly styles
 */
function _uploadShareData() {
  _uploadShareData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(name, assignement, pdf) {
    var _projectManager$curre;
    var forceLocal,
      projectContent,
      nameAssignment,
      baseFilename,
      pdfFilename,
      projectFilename,
      license,
      deleiveryInfo,
      accessToken,
      destination,
      _args4 = arguments;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          forceLocal = _args4.length > 3 && _args4[3] !== undefined ? _args4[3] : false;
          log.info("uploadShareData");
          if ((_projectManager$curre = _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.currentProject) !== null && _projectManager$curre !== void 0 && _projectManager$curre.getFileContentString) {
            _context4.next = 5;
            break;
          }
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareUploadFailedPrompt();
          return _context4.abrupt("return");
        case 5:
          _context4.next = 7;
          return _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.currentProject.getFileContentString();
        case 7:
          projectContent = _context4.sent;
          nameAssignment = "".concat(name, " - ").concat(assignement).trim();
          if (nameAssignment === "-") {
            nameAssignment = "";
          }
          baseFilename = nameAssignment ? nameAssignment : name ? name : _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.projectName;
          log.warn("baseFilename:", baseFilename);
          pdfFilename = "".concat(baseFilename, ".pdf");
          projectFilename = "".concat(baseFilename, ".").concat(_FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.fileSystem.getSaveProjectExtension());
          if (!forceLocal) {
            _context4.next = 19;
            break;
          }
          log.debug("using local download due to force local param");
          _context4.next = 18;
          return localDownload(pdf, pdfFilename, projectContent, projectFilename);
        case 18:
          return _context4.abrupt("return");
        case 19:
          license = _FeatureLock_LicenseSystem__WEBPACK_IMPORTED_MODULE_13__.getLicenseWithoutRefresh();
          if (!(license === _FeatureLock_Licenses__WEBPACK_IMPORTED_MODULE_12__.FeatureLockLicense.Standard || license === _FeatureLock_Licenses__WEBPACK_IMPORTED_MODULE_12__.FeatureLockLicense.VirtualSkillsIQ || license === _FeatureLock_Licenses__WEBPACK_IMPORTED_MODULE_12__.FeatureLockLicense.VirtualSkillsV5)) {
            _context4.next = 25;
            break;
          }
          log.debug("using local download due to no VR class");
          _context4.next = 24;
          return localDownload(pdf, pdfFilename, projectContent, projectFilename);
        case 24:
          return _context4.abrupt("return");
        case 25:
          _context4.next = 27;
          return _FeatureLock_VRClassSystem__WEBPACK_IMPORTED_MODULE_14__.classSystem.getDeliveryInfo();
        case 27:
          deleiveryInfo = _context4.sent;
          accessToken = deleiveryInfo.accessToken;
          destination = deleiveryInfo.destination;
          _context4.prev = 30;
          if (!(deleiveryInfo.deliveryMethod === "Dropbox")) {
            _context4.next = 40;
            break;
          }
          _context4.next = 34;
          return dropboxFileUpload(accessToken, pdfFilename, pdf.output("blob"), destination);
        case 34:
          _context4.next = 36;
          return dropboxFileUpload(accessToken, projectFilename, projectContent, destination);
        case 36:
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareUploadedPrompt();
          return _context4.abrupt("return");
        case 40:
          if (!(deleiveryInfo.deliveryMethod === "Google Drive")) {
            _context4.next = 49;
            break;
          }
          _context4.next = 43;
          return googleDriveFileUpload(accessToken, pdfFilename, pdf.output("blob"), destination, "application/pdf");
        case 43:
          _context4.next = 45;
          return googleDriveFileUpload(accessToken, projectFilename, projectContent, destination, "text/plain");
        case 45:
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareUploadedPrompt();
          return _context4.abrupt("return");
        case 49:
          if (!(deleiveryInfo.deliveryMethod === "email")) {
            _context4.next = 56;
            break;
          }
          log.warn("email deliver is not yet supported");
          _context4.next = 53;
          return localDownload(pdf, pdfFilename, projectContent, projectFilename);
        case 53:
          return _context4.abrupt("return");
        case 56:
          if (!(deleiveryInfo.deliveryMethod === "Local Download")) {
            _context4.next = 62;
            break;
          }
          _context4.next = 59;
          return localDownload(pdf, pdfFilename, projectContent, projectFilename);
        case 59:
          return _context4.abrupt("return");
        case 62:
          log.warn("found unexpected delivery method", deleiveryInfo.deliveryMethod);
          _context4.next = 65;
          return localDownload(pdf, pdfFilename, projectContent, projectFilename);
        case 65:
          return _context4.abrupt("return");
        case 66:
          _context4.next = 72;
          break;
        case 68:
          _context4.prev = 68;
          _context4.t0 = _context4["catch"](30);
          log.error(_context4.t0);
          _widget_Modal__WEBPACK_IMPORTED_MODULE_10__.MODALCONTROL.showShareUploadFailedPrompt();
        case 72:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[30, 68]]);
  }));
  return _uploadShareData.apply(this, arguments);
}
function grabBlocklyStyles(doc) {
  // find all the style elements in the page so we can detect the blockly ones
  var styleElements = Array.from(doc.getElementsByTagName("style"));

  // create a serializer so that we don't need to create it multiple times
  var serializer = new XMLSerializer();

  // filter the styles so that we only have the ones added by Blockly
  var blocklyStyles = styleElements.filter(function (styleElem) {
    return serializer.serializeToString(styleElem).includes(".blockly");
  });
  log.warn("found", blocklyStyles.length, "blockly style elements");

  // process the blockly style
  var styleElementStrings = blocklyStyles.map(function (styleElem) {
    // clone the element so we can make changes without impacting the actual style
    var clonedStyle = styleElem.cloneNode(true);
    if (_platformInfo__WEBPACK_IMPORTED_MODULE_2__.isSafari && !_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
      // needed to deal with bad escaping in safari
      if (!_platformInfo__WEBPACK_IMPORTED_MODULE_2__.OSisiOS) {
        clonedStyle.textContent = clonedStyle.textContent.replace(/>/g, "&gt;").replace(/</g, "&lt;");
      }
    }
    return serializer.serializeToString(clonedStyle);
  });

  // return the joined styles
  return styleElementStrings.join("\n");
}

/**
 * create a styled SVG from the blocks and option notes provided
 * 
 * NOTE: cloned objects do not have a bounding box, so we pass that in as params to handle that case
 * @param styleXML the styles to apply to the SVG
 * @param blocks the SVG g element with the blocks to show
 * @param blocksBBox the bounding box of the blocke element
 * @param notes the SVG g element with the notes to show
 * @returns the SVG data for the requested content
 */
function buildSVGFromElement(_x17, _x18, _x19, _x20, _x21) {
  return _buildSVGFromElement.apply(this, arguments);
}
function _buildSVGFromElement() {
  _buildSVGFromElement = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(styleXML, blocks, blocksBBox, notes, notesBBox) {
    var minx, miny, blocksMaxX, blocksMaxY, notesMaxX, notesMaxY, maxx, maxy, bbox, images, imagePromises, blocksXML, notesXML, xmlRootAttributes, backgroundRect, xml, SVG;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          // Creates a complete SVG document with the correct bounds
          if (!notesBBox) {
            notesBBox = blocksBBox;
          }
          log.debug("block bbox: ", blocksBBox);
          log.debug("notes bbox: ", notesBBox);
          minx = blocksBBox.x < notesBBox.x ? blocksBBox.x : notesBBox.x;
          miny = blocksBBox.y < notesBBox.y ? blocksBBox.y : notesBBox.y;
          blocksMaxX = blocksBBox.x + blocksBBox.width;
          blocksMaxY = blocksBBox.y + blocksBBox.height;
          notesMaxX = notesBBox.x + notesBBox.width;
          notesMaxY = notesBBox.y + notesBBox.height;
          maxx = Math.ceil((blocksMaxX > notesMaxX ? blocksMaxX : notesMaxX) * 100) / 100;
          maxy = Math.ceil((blocksMaxY > notesMaxY ? blocksMaxY : notesMaxY) * 100) / 100;
          bbox = {
            x: minx,
            y: miny,
            width: maxx - minx,
            height: maxy - miny
          };
          log.debug("Building SVG - Final bbox:", bbox);

          // Find and replace all xlink:href attributes
          images = blocks.getElementsByTagName("image");
          log.debug("Found image elements in blocks:", images.length);

          // Convert all images to data URLs
          imagePromises = Array.from(images).map(/*#__PURE__*/function () {
            var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(img, i) {
              var originalHref, isLocalPath, dataUrl, resourcePath, staticPath, response, blob, reader;
              return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    originalHref = img.getAttribute("xlink:href");
                    if (!originalHref) {
                      _context5.next = 42;
                      break;
                    }
                    _context5.prev = 2;
                    if (!originalHref.startsWith("data:")) {
                      _context5.next = 6;
                      break;
                    }
                    log.debug("Image ".concat(i, " is already a data URL."));
                    return _context5.abrupt("return");
                  case 6:
                    // Determine if it's a local path (relative or potentially absolute file path)
                    // vs. a remote http/https URL. Assume local if not http/https.
                    isLocalPath = !originalHref.startsWith("http://") && !originalHref.startsWith("https://");
                    dataUrl = null;
                    if (!(isLocalPath && (_platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsIOS || _platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsAndroid))) {
                      _context5.next = 16;
                      break;
                    }
                    // Use native handler on mobile platforms
                    // Convert relative path to static path if needed (adjust if STATIC handling is different)
                    // The native side will handle resolving bundle paths
                    resourcePath = originalHref.startsWith('../') ? originalHref.substring(3) // Remove ../, native side expects path relative to webapp dir usually
                    : originalHref;
                    log.debug("Image ".concat(i, ": Requesting native read for local resource: ").concat(resourcePath));
                    // Use the specific native handler wrapper for iOS
                    _context5.next = 13;
                    return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.readLocalImageResourceIOS)(resourcePath);
                  case 13:
                    dataUrl = _context5.sent;
                    _context5.next = 35;
                    break;
                  case 16:
                    if (!isLocalPath) {
                      _context5.next = 33;
                      break;
                    }
                    // Fallback for non-mobile or if native handler fails? Or handle desktop platforms differently?
                    // Keep existing fetch logic for non-iOS/Android local files for now, 
                    // although fetch might also be problematic on desktop depending on security settings.
                    // Consider a unified native approach if needed.
                    staticPath = originalHref.startsWith('../') ? originalHref.replace('../', "".concat(_layout_Paths__WEBPACK_IMPORTED_MODULE_16__.STATIC, "/")) : originalHref;
                    log.debug("Image ".concat(i, ": Using fetch for local path: ").concat(staticPath));
                    _context5.next = 21;
                    return fetch(staticPath);
                  case 21:
                    response = _context5.sent;
                    if (response.ok) {
                      _context5.next = 24;
                      break;
                    }
                    throw new Error("Fetch failed for ".concat(staticPath, " with status ").concat(response.status));
                  case 24:
                    _context5.next = 26;
                    return response.blob();
                  case 26:
                    blob = _context5.sent;
                    reader = new FileReader();
                    _context5.next = 30;
                    return new Promise(function (resolve, reject) {
                      reader.onloadend = function () {
                        return resolve(reader.result);
                      };
                      reader.onerror = reject;
                      reader.readAsDataURL(blob);
                    });
                  case 30:
                    dataUrl = _context5.sent;
                    _context5.next = 35;
                    break;
                  case 33:
                    // Handle remote URLs (http/https) - current code didn't explicitly fetch these,
                    // but if needed, fetch would go here. For now, assume they are not fetched/converted.
                    log.warn("Image ".concat(i, ": Remote URL detected, conversion not implemented: ").concat(originalHref));
                    // Keep originalHref or decide on handling
                    dataUrl = originalHref; // Or maybe try to fetch if required?
                  case 35:
                    if (dataUrl) {
                      img.setAttribute("xlink:href", dataUrl);
                      log.debug("Image ".concat(i, ": Successfully set data URL."));
                    } else {
                      log.error("Image ".concat(i, ": Failed to get data URL for ").concat(originalHref));
                    }
                    _context5.next = 42;
                    break;
                  case 38:
                    _context5.prev = 38;
                    _context5.t0 = _context5["catch"](2);
                    log.error("Failed to convert image ".concat(i, " (").concat(originalHref, ") to data URL:"), _context5.t0);
                    // Keep original href or handle error?
                    img.setAttribute("xlink:href", originalHref); // Revert or keep original on error
                  case 42:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5, null, [[2, 38]]);
            }));
            return function (_x29, _x30) {
              return _ref.apply(this, arguments);
            };
          }()); // Wait for all images to be converted
          _context6.next = 18;
          return Promise.all(imagePromises);
        case 18:
          blocksXML = new XMLSerializer().serializeToString(blocks);
          notesXML = notes ? new XMLSerializer().serializeToString(notes) : "";
          xmlRootAttributes = ["version=\"1.1\"", "xmlns=\"http://www.w3.org/2000/svg\"", "xmlns:xlink=\"http://www.w3.org/1999/xlink\"", "width=\"".concat(bbox.width, "\""), "height=\"".concat(bbox.height, "\""), "viewBox=\"".concat(bbox.x, " ").concat(bbox.y, " ").concat(bbox.width, " ").concat(bbox.height, "\"")].join(" ");
          backgroundRect = "<rect x=\"".concat(bbox.x - 10, "\" y=\"").concat(bbox.y - 10, "\" width=\"").concat(bbox.width + 20, "\" height=\"").concat(bbox.height + 20, "\" fill=\"white\" />");
          xml = "<svg ".concat(xmlRootAttributes, ">").concat(backgroundRect).concat(styleXML, "<g>").concat(blocksXML).concat(notesXML, "</g></svg>"); // needed to deal with bad escaping in safari
          if (_platformInfo__WEBPACK_IMPORTED_MODULE_2__.isSafari && !_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
            xml = xml.replace(/&nbsp;/g, " ");
          }
          SVG = {
            width: bbox.width,
            height: bbox.height,
            xml: xml
          };
          log.debug("SVG:", SVG.xml);
          return _context6.abrupt("return", SVG);
        case 27:
        case "end":
          return _context6.stop();
      }
    }, _callee6);
  }));
  return _buildSVGFromElement.apply(this, arguments);
}
function grabStackSVG(_x22, _x23, _x24) {
  return _grabStackSVG.apply(this, arguments);
}
function _grabStackSVG() {
  _grabStackSVG = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(blockCanvas, blockID, styleXML) {
    var groups, stackGroupOriginal, stackGroup;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          // get the SVG group
          groups = Array.from(blockCanvas.getElementsByTagName("g")).filter(function (node) {
            return node.getAttribute("data-id") === blockID;
          });
          if (!(groups.length !== 1)) {
            _context7.next = 4;
            break;
          }
          log.error("unexpected number of groups when looking for stack group", groups);
          return _context7.abrupt("return", null);
        case 4:
          stackGroupOriginal = groups[0];
          stackGroup = stackGroupOriginal.cloneNode(true); // we want the block to be at origin
          stackGroup.removeAttribute("width");
          stackGroup.removeAttribute("height");
          stackGroup.removeAttribute("transform");
          return _context7.abrupt("return", buildSVGFromElement(styleXML, stackGroup, stackGroupOriginal.getBBox()));
        case 10:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _grabStackSVG.apply(this, arguments);
}
function grabWorkspaceSVGs(_x25) {
  return _grabWorkspaceSVGs.apply(this, arguments);
}
function _grabWorkspaceSVGs() {
  _grabWorkspaceSVGs = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(doc) {
    var workspace,
      SVGs,
      topNotes,
      i,
      topNote,
      blocksGroup,
      notesGroup,
      currTheme,
      stylesXML,
      blocksNode,
      notesNode,
      overviewSVG,
      topBlocks,
      index,
      topBlock,
      stackSVG,
      _args8 = arguments;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          workspace = _args8.length > 1 && _args8[1] !== undefined ? _args8[1] : _Blockly_BlocklyAccess__WEBPACK_IMPORTED_MODULE_1__.Blockly.mainWorkspace;
          SVGs = [];
          topNotes = workspace.getTopComments(true);
          for (i = 0; i < topNotes.length; i++) {
            topNote = topNotes[i];
            topNote.textarea_.innerText = topNote.content_;
          }
          blocksGroup = workspace.svgBlockCanvas_;
          notesGroup = workspace.svgBubbleCanvas_; // Zelos-renderer styling does not apply to SVG's so it must be removed in order to properly apply SVG styling for sharing PDF
          currTheme = ___WEBPACK_IMPORTED_MODULE_15__.BlocklyController.getCurrentMainController().blocklyWorkspace.getTheme().name;
          stylesXML = grabBlocklyStyles(doc).replace(new RegExp("\\.Zelos-renderer\\.".concat(currTheme, "-theme"), 'g'), ''); // get overview image
          blocksNode = blocksGroup.cloneNode(true);
          blocksNode.removeAttribute("width");
          blocksNode.removeAttribute("height");
          blocksNode.removeAttribute("transform");
          notesNode = notesGroup.cloneNode(true);
          notesNode.removeAttribute("width");
          notesNode.removeAttribute("height");
          notesNode.removeAttribute("transform");
          _context8.next = 18;
          return buildSVGFromElement(stylesXML, blocksNode, blocksGroup.getBBox(), notesNode, notesGroup.getBBox());
        case 18:
          overviewSVG = _context8.sent;
          log.debug("Overview SVG XML:", overviewSVG.xml);
          SVGs.push(overviewSVG);

          // get image for each stack
          topBlocks = workspace.getTopBlocks(true);
          index = 0;
        case 23:
          if (!(index < topBlocks.length)) {
            _context8.next = 32;
            break;
          }
          topBlock = topBlocks[index];
          _context8.next = 27;
          return grabStackSVG(blocksGroup, topBlock.id, stylesXML);
        case 27:
          stackSVG = _context8.sent;
          if (stackSVG) {
            log.debug("Stack ".concat(index, " SVG XML:"), stackSVG.xml);
            SVGs.push(stackSVG);
          }
        case 29:
          index++;
          _context8.next = 23;
          break;
        case 32:
          return _context8.abrupt("return", SVGs);
        case 33:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return _grabWorkspaceSVGs.apply(this, arguments);
}
var maxHeight = 775 * 2;
var maxWidth = 570 * 2;
var limitRatio = maxHeight / maxWidth;
function convertSvgToPng(_x26) {
  return _convertSvgToPng.apply(this, arguments);
}
function _convertSvgToPng() {
  _convertSvgToPng = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(svgData) {
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          return _context9.abrupt("return", new Promise(function (resolve, reject) {
            var canvasElem = document.createElement("canvas");
            var width = svgData.width + 1;
            var height = svgData.height + 1;

            // limit to a max size to prevent large images
            var imgRatio = height / width;
            if (imgRatio > limitRatio) {
              height = maxHeight;
              width = height / imgRatio;
            } else {
              width = maxWidth;
              height = width * imgRatio;
            }
            canvasElem.setAttribute("width", width + "px");
            canvasElem.setAttribute("height", height + "px");
            log.debug("canvas: ", canvasElem);
            var ctx = canvasElem.getContext("2d");
            var img = new Image();
            img.onload = function () {
              log.debug("Image loaded successfully with dimensions:", img.width, "x", img.height);
              ctx.drawImage(img, 0, 0, width, height);
              var datauri = canvasElem.toDataURL("image/png");
              log.debug("PNG data URI generated, length:", datauri.length);
              resolve({
                data: datauri,
                width: width,
                height: height
              });
            };
            img.onerror = function (event, source, lineno, colno, error) {
              log.error("Image load error:", error);
              log.error("Image source length:", img.src.length);
              log.error("Image source:", img.src);
              reject(error);
            };
            var svgEncoded = btoa(unescape(encodeURIComponent(svgData.xml)));
            var finalSrc = "data:image/svg+xml;base64," + svgEncoded;
            log.debug("svg: ", svgData.xml);
            img.src = finalSrc;
          }));
        case 1:
        case "end":
          return _context9.stop();
      }
    }, _callee9);
  }));
  return _convertSvgToPng.apply(this, arguments);
}
function downloadSharePdfFile(filename, content) {
  var element = document.createElement("a");
  element.setAttribute("href", "data:application/applicationpdf;base64," + btoa(content));
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}
function downloadShareTextFile(filename, content) {
  var element = document.createElement("a");
  var encodedFile = "data:text/plain;base64," + b64EncodeUnicode(content);
  element.setAttribute("href", encodedFile);
  element.setAttribute("download", filename);
  element.style.display = "none";
  document.body.appendChild(element);
  element.click();
  document.body.removeChild(element);
}

/**
 * Returns a url pointing the logo. Logos are located in static/img/icons/vex_logos
 * @returns url for the header logo depending on which platform the target is on
 */
function getLogoSRC() {
  var src = "../static/img/icons/vex_logos/";
  if (_platformInfo__WEBPACK_IMPORTED_MODULE_2__.PlatformIsElectron) {
    src = "../dist/static/img/icons/vex_logos/";
  }
  if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIs123) {
    src += "logo-vex-123.png";
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsGO) {
    src += "logo-vex-go.png";
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsEXP) {
    src += "logo-vex-exp.png";
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsIQ) {
    src += "logo-vex-iq.png";
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsV5) {
    src += "logo-vex-v5.png";
  } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
    src += "logo-vexcode-vr.png";
  } else {
    src += "logo-vex-robotics.png";
  }
  return src;
}
/**
 * Generates a meta data for the information of the project
 * @param data meta data
 * @returns array of PdfMetadata
 */
function generateMetaData(data) {
  var metadata = [];
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Student Name"),
    type: "string",
    value: "".concat(data.name)
  });
  if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
    // Should this change with the Virtual Skills licenses?
    var className = _FeatureLock_VRClassSystem__WEBPACK_IMPORTED_MODULE_14__.classSystem.getClassName();
    var classCode = _FeatureLock_VRClassSystem__WEBPACK_IMPORTED_MODULE_14__.classSystem.getClassCode();
    if (classCode === (_FeatureLock_LicenseSystem__WEBPACK_IMPORTED_MODULE_13__ === null || _FeatureLock_LicenseSystem__WEBPACK_IMPORTED_MODULE_13__ === void 0 ? void 0 : _FeatureLock_LicenseSystem__WEBPACK_IMPORTED_MODULE_13__.getDataScienceCode())) {
      classCode = "DATASCIENCE";
    }
    if (className && classCode) {
      metadata.push({
        property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Class"),
        type: "string",
        value: "".concat(className, " (").concat(classCode, ")")
      });
    }
  }
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Assignment"),
    type: "string",
    value: "".concat(data.assignment)
  });
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Notes"),
    type: "string",
    value: "".concat(data.notes)
  });
  if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
    var scene = _SimWindow_SimWindowController__WEBPACK_IMPORTED_MODULE_11__.simWindowController.getSceneName();
    if (scene !== "default") {
      metadata.push({
        property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Playground"),
        type: "string",
        value: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Playground ".concat(scene))
      });
    }
  }
  // Project name
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Project Name"),
    type: "string",
    value: _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.projectName
  });

  // Project Type
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Project Type"),
    type: "string",
    value: function () {
      var state = _AppInfo__WEBPACK_IMPORTED_MODULE_7__.appState.getAppState();
      if (state.mode === "Blocks") {
        return _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Blocks");
      } else {
        switch (state.lang) {
          case "python":
            return _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Python");
          case "cpp":
            return _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("C++");
          default:
            return state.lang;
        }
      }
    }()
  });

  // Date the pdf is exported
  metadata.push({
    property: _i18n_i18n__WEBPACK_IMPORTED_MODULE_8__.i18n.t("Date"),
    type: "string",
    value: new Date().toDateString()
  });
  return metadata;
}
/**
 * Generates a pdf and saves it
 * @param doc instance of the page document object. needed since NWJS does strange things...
 * @param data PDFMetaData
 */
function generatePDF(_x27, _x28) {
  return _generatePDF.apply(this, arguments);
}
function _generatePDF() {
  _generatePDF = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(doc, data) {
    var isText,
      forceLocal,
      endgameScreenshotData,
      metadata,
      pngs,
      svgs,
      _iterator,
      _step,
      stackSVG,
      pdf,
      height,
      width,
      heightTracker,
      generatedInfoPage,
      handleCreatingPages,
      addCenteredImage,
      addText,
      _iterator2,
      _step2,
      itemFromMetaData,
      pageCount,
      i,
      _i,
      dataName,
      dataAssignment,
      footerInfo,
      footerString,
      _args10 = arguments;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          addText = function _addText(text) {
            var marginTop = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20;
            var fontSize = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 12;
            var xMargin = 20;
            var textDimensions = pdf.getTextDimensions(text, {
              maxWidth: width - xMargin * 2,
              fontSize: fontSize
            });
            var contentHeight = marginTop + textDimensions.h;
            handleCreatingPages(contentHeight);
            pdf.setFontSize(fontSize);
            pdf.text(text, xMargin, heightTracker + marginTop, {
              maxWidth: width - xMargin * 2
            });
            heightTracker += contentHeight;
          };
          addCenteredImage = function _addCenteredImage(url) {
            var scale = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.5;
            var imageMarginTop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 20;
            var caption = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
            var captionMarginTop = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 10;
            var captionFontSize = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 10;
            try {
              var imagePropties = pdf.getImageProperties(url);
              var imageWidth = imagePropties.width * scale;
              imageWidth = scale === -1 ? 480 : imageWidth;
              var imageHeight = imagePropties.height * scale;
              imageHeight = scale === -1 ? 270 : imageHeight;
              var imageType = imagePropties.fileType;
              var isCaptionValid = caption && caption.length > 0 && caption !== "null" ? true : false;
              // If caption is give, find the height it takes up
              // tslint:disable-next-line: max-line-length
              var captionDimensions = isCaptionValid ? pdf.getTextDimensions(caption, {
                align: "center",
                maxWidth: width - 40,
                fontSize: captionFontSize
              }) : {
                h: 0,
                w: 0
              };
              var contentHeight = imageMarginTop + imageHeight + captionMarginTop + captionDimensions.h;
              contentHeight += isCaptionValid ? captionMarginTop : 0;
              handleCreatingPages(contentHeight);
              // tslint:disable-next-line: max-line-length
              pdf.addImage(url, imageType, (width - imageWidth) / 2, heightTracker + imageMarginTop, imageWidth, imageHeight, undefined, "SLOW");
              if (isCaptionValid) {
                pdf.setFontSize(captionFontSize);
                // tslint:disable-next-line: max-line-length
                pdf.text(caption, width / 2, heightTracker + imageMarginTop + imageHeight + captionMarginTop, {
                  align: "center",
                  maxWidth: width - 40
                });
              }
              heightTracker += contentHeight;
            } catch (error) {
              log.debug("JSPDF: Failed to get the image from the URL");
            }
          };
          handleCreatingPages = function _handleCreatingPages(contentHeight) {
            if (generatedInfoPage < 1) {
              pdf.addPage();
              generatedInfoPage++;
            } else if (height - 30 < heightTracker + contentHeight) {
              pdf.addPage();
              generatedInfoPage++;
              heightTracker = 0;
            }
          };
          isText = _args10.length > 2 && _args10[2] !== undefined ? _args10[2] : false;
          forceLocal = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : false;
          _context10.next = 7;
          return _SimWindow_SimWindowController__WEBPACK_IMPORTED_MODULE_11__.simWindowController.getUnityScreenshot();
        case 7:
          endgameScreenshotData = _context10.sent;
          metadata = generateMetaData(data);
          pngs = [];
          log.debug("generating pdf");
          if (isText) {
            _context10.next = 43;
            break;
          }
          _context10.next = 14;
          return grabWorkspaceSVGs(doc);
        case 14:
          svgs = _context10.sent;
          if (!(svgs.length === 2)) {
            _context10.next = 23;
            break;
          }
          _context10.t0 = pngs;
          _context10.next = 19;
          return convertSvgToPng(svgs[0]);
        case 19:
          _context10.t1 = _context10.sent;
          _context10.t0.push.call(_context10.t0, _context10.t1);
          _context10.next = 43;
          break;
        case 23:
          _iterator = _createForOfIteratorHelper(svgs);
          _context10.prev = 24;
          _iterator.s();
        case 26:
          if ((_step = _iterator.n()).done) {
            _context10.next = 35;
            break;
          }
          stackSVG = _step.value;
          _context10.t2 = pngs;
          _context10.next = 31;
          return convertSvgToPng(stackSVG);
        case 31:
          _context10.t3 = _context10.sent;
          _context10.t2.push.call(_context10.t2, _context10.t3);
        case 33:
          _context10.next = 26;
          break;
        case 35:
          _context10.next = 40;
          break;
        case 37:
          _context10.prev = 37;
          _context10.t4 = _context10["catch"](24);
          _iterator.e(_context10.t4);
        case 40:
          _context10.prev = 40;
          _iterator.f();
          return _context10.finish(40);
        case 43:
          if (isText) {
            _context10.next = 49;
            break;
          }
          _context10.next = 46;
          return (0,_PdfExport__WEBPACK_IMPORTED_MODULE_6__.createPDF)({
            type: "html",
            metadata: metadata,
            pngs: pngs
          });
        case 46:
          pdf = _context10.sent;
          _context10.next = 52;
          break;
        case 49:
          _context10.next = 51;
          return (0,_PdfExport__WEBPACK_IMPORTED_MODULE_6__.createPDF)({
            type: "html",
            metadata: metadata
          }, doc);
        case 51:
          pdf = _context10.sent;
        case 52:
          height = pdf.internal.pageSize.getHeight();
          width = pdf.internal.pageSize.getWidth(); // Height tracker is increamented when a content is added to the page
          // It will allows us to track how much space is left before we have to make another page
          heightTracker = 0; // This will keep track of how many pages we created
          // Know that doc has already pdf pages from converting html to pdf, when we are adding a page,
          // we are simply appending a page at the bottom of the document.
          // Later we have to move all the generated pages to the top
          generatedInfoPage = 0;
          /**
           * Given the height of the content that is being added to the page, this function will decide wheather to
           * to create another page or just append the content to the current page
           * @param {*} contentHeight total heigh of the content you are adding, including the margins
           */
          /**
           * This function adds an image to the document and centers it.
           * If caption is provided, it will add the caption in the center below the image.
           * @param {*} url image url
           * @param {*} scale the scale of the image; -1 is will give default dimentions
           * @param {*} imageMarginTop margin before the image
           * @param {*} caption if needed, caption
           * @param {*} captionMarginTop caption margin
           * @param {*} captionFontSize caption font size
           */
          // tslint:disable-next-line: max-line-length
          /**
           * This will handle adding text to the screen
           * @param {*} text text content
           * @param {*} marginTop pt: margin top
           * @param {*} fontSize pt: font size
           */
          // VR only for now, we can remove this 'if' when expanding to other platforms
          // if (targetIsPlaygrounds) {
          // Logo on top
          addCenteredImage(getLogoSRC(), 0.3);
          addText("  ", 20); // Blankline

          // Print the metadata one by one
          _iterator2 = _createForOfIteratorHelper(metadata);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              itemFromMetaData = _step2.value;
              if (itemFromMetaData.type === "string") {
                addText(itemFromMetaData.property + ": " + itemFromMetaData.value);
              }
            }

            // END GAME Screenshot
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (endgameScreenshotData && endgameScreenshotData.length > 1) {
            // Add playground end game image here: replace getLogoSRC() with url to img
            addCenteredImage(endgameScreenshotData, -1, 25);
          } else if (_targetPlatform__WEBPACK_IMPORTED_MODULE_5__.targetIsPlaygrounds) {
            // No playground was found
            addCenteredImage("../static/img/icons/vex_logos/NoPlaygroundRuns.png", -1, 25);
          }

          //  Moves all the pages there were generated to the top.
          pageCount = pdf.internal.getNumberOfPages();
          for (i = generatedInfoPage; i > 0; i--) {
            pdf.movePage(pageCount, 1);
          }

          // For each page, print the page number and the total pages
          for (_i = 1; _i <= pageCount; _i++) {
            pdf.setPage(_i);
            pdf.setFontSize(10);
            dataName = data.name && data.name.length > 1 ? data.name + " - " : "";
            dataAssignment = data.assignment && data.assignment.length > 1 ? data.assignment + " - " : "";
            footerInfo = "".concat(dataName).concat(dataAssignment);
            footerString = footerInfo + "Page " + String(_i) + " of " + String(pageCount);
            pdf.text(footerString, width / 2, height - 20, null, null, "center");
          }
          // }
          _context10.next = 66;
          return uploadShareData(data.name, data.assignment, pdf, forceLocal);
        case 66:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[24, 37, 40, 43]]);
  }));
  return _generatePDF.apply(this, arguments);
}
function generateShareTextFile() {
  return _generateShareTextFile.apply(this, arguments);
}
function _generateShareTextFile() {
  _generateShareTextFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
    var projectData, textContent, extension;
    return _regeneratorRuntime().wrap(function _callee11$(_context11) {
      while (1) switch (_context11.prev = _context11.next) {
        case 0:
          projectData = _FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.currentProject;
          textContent = projectData.getShareFileContentString();
          extension = projectData.getShareFileExtension();
          _context11.t0 = _platformInfo__WEBPACK_IMPORTED_MODULE_2__.currentPlatform;
          _context11.next = _context11.t0 === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.NWJSWindows ? 6 : _context11.t0 === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.NWJSmacOS ? 6 : _context11.t0 === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.ChromeOS ? 7 : _context11.t0 === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.iOS ? 8 : _context11.t0 === _platformInfo__WEBPACK_IMPORTED_MODULE_2__.Platform.Android ? 9 : 10;
          break;
        case 6:
          return _context11.abrupt("break", 11);
        case 7:
          return _context11.abrupt("break", 11);
        case 8:
          return _context11.abrupt("break", 11);
        case 9:
          return _context11.abrupt("break", 11);
        case 10:
          downloadShareTextFile(_FileSys_ProjectManager__WEBPACK_IMPORTED_MODULE_3__.projectManager.projectName + extension, textContent);
        case 11:
        case "end":
          return _context11.stop();
      }
    }, _callee11);
  }));
  return _generateShareTextFile.apply(this, arguments);
}
function generateShareText() {
  return _generateShareText.apply(this, arguments);
} // Encoding UTF8 ⇢ base64
function _generateShareText() {
  _generateShareText = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
    var html, header, marginIndex, injectLineNumbers, linesArray, lines, footer;
    return _regeneratorRuntime().wrap(function _callee12$(_context12) {
      while (1) switch (_context12.prev = _context12.next) {
        case 0:
          injectLineNumbers = function _injectLineNumbers(line) {
            marginIndex += 1;
            var leftMargin = marginIndex > 999 ? "" : marginIndex > 99 ? "  " : marginIndex > 9 ? "   " : "    ";
            return "<div class=\"line\"><span class=\"line-number\">".concat(marginIndex).concat(leftMargin, "</span><span class=\"code\">").concat(line, "</span></div>");
          };
          _context12.next = 3;
          return _texteditor_editor__WEBPACK_IMPORTED_MODULE_9__.monacoEditor.getColorizedMonacoHTML();
        case 3:
          html = _context12.sent;
          header = "<html>\n  <head>\n      <meta http-equiv=\"Content-Type\" content=\"text/html;charset=UTF-8\">\n  </head>\n  <body>\n  <style>\n  .root {\n      width: 530px;\n      word-break: break-all;\n      color: #000000;\n      background-color: #ffffff;\n      font-size: 10px !important;;\n      font-family: 'Courier New', monospace;\n      white-space: break-spaces;\n      margin: 0px 0px 0px 15px; /* Keep margin for container positioning */\n  }\n  .line {\n      margin: 0 !important;\n      padding: 0 !important;\n      font-size: 10px !important;\n      margin-bottom: 1px !important;\n      margin-top: 1px !important;\n  }\n  .line-number {\n      font-size: 10px !important;\n      color: #666;\n      font-family: 'Courier New', monospace;\n      width: 40px;\n      text-align: right;\n      margin: 0 !important;\n      padding: 0 !important;\n      margin-right: 5px;\n  }\n  .code {\n      font-size: 10px !important;\n      flex: 1 !important;\n      white-space: pre-wrap;\n      word-break: break-all; /* Use break-all for consistent wrapping */\n      padding-left: 5px !important; /* Offset to align code with container */\n  }\n\n  .code span{\n    font-size: 10px !important;\n    margin: 0 !important;\n    padding: 0 !important;\n  }\n  </style>\n  <div class=\"root\">";
          marginIndex = 0;
          // Split the HTML into lines
          linesArray = html.split(/<br\s*\/?>/);
          lines = linesArray.map(function (line) {
            return injectLineNumbers(line);
          }).join("");
          footer = "</div></body></html>";
          return _context12.abrupt("return", header + lines + footer);
        case 10:
        case "end":
          return _context12.stop();
      }
    }, _callee12);
  }));
  return _generateShareText.apply(this, arguments);
}
function b64EncodeUnicode(str) {
  return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
    return String.fromCharCode(parseInt(p1, 16));
  }));
}


/***/ })

}]);
//# sourceMappingURL=876fac3f2afb6c8b342e.src_share_ts.bundle.js.map