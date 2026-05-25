"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_FileSystem_FileSystemAndroid_ts"],{

/***/ "./src/FileSys/FileSystem/FileSystemAndroid.ts":
/*!*****************************************************!*\
  !*** ./src/FileSys/FileSystem/FileSystemAndroid.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemAndroid: () => (/* binding */ FileSystemAndroid)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileSystemBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSystemBase */ "./src/FileSys/FileSystem/FileSystemBase.ts");
/* harmony import */ var _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSystemErrors */ "./src/FileSys/FileSystem/FileSystemErrors.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./src/FileSys/FileSystem/helpers.ts");
/* harmony import */ var _nativeInterface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../nativeInterface */ "./src/nativeInterface.ts");
/* harmony import */ var _extendedBase64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../extendedBase64 */ "./src/extendedBase64.ts");
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../.. */ "./src/index.tsx");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("FileSystemAndroid");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("FileSystem");

// local imports




// global imports




// TODO: iOS and Android are very similar. we should move common code to a new parent

/**
 * the class for all Android file system operations
 * 
 */
var FileSystemAndroid = /*#__PURE__*/function (_FileSystemBase) {
  function FileSystemAndroid() {
    _classCallCheck(this, FileSystemAndroid);
    return _callSuper(this, FileSystemAndroid, arguments);
  }
  _inherits(FileSystemAndroid, _FileSystemBase);
  return _createClass(FileSystemAndroid, [{
    key: "canLoadFromURI",
    get:
    //#region information
    // jsdoc in parent class
    function get() {
      return true;
    }

    // jsdoc in parent class
  }, {
    key: "canLoadAnyFile",
    get: function get() {
      return false;
    }

    // jsdoc in parent class
  }, {
    key: "supportsRename",
    get: function get() {
      return false;
    }

    // jsdoc in parent class
  }, {
    key: "supportsStringRename",
    get: function get() {
      return false;
    }

    // jsdoc in parent class
  }, {
    key: "saveAfterRename",
    get: function get() {
      return true;
    }

    // jsdoc in parent class
  }, {
    key: "savesToFileReference",
    get: function get() {
      return true;
    }
    //#endregion information

    //#region base operations
    // jsdoc in parent class
  }, {
    key: "readFile",
    value: function () {
      var _readFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileRef) {
        var uri, rawData, tmp;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("readFile:", fileRef);
              uri = fileRef.pathData;
              if (uri) {
                _context.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context.next = 7;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.readNativeFile)(uri);
            case 7:
              rawData = _context.sent;
              if (!(rawData === null)) {
                _context.next = 11;
                break;
              }
              log.error("There was an issue reading the file");
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSReadError();
            case 11:
              log.debug("native file read - success: ", rawData);

              // decode the base64 encoded data. this is harder since we have to handle utf16 as well
              tmp = (0,_extendedBase64__WEBPACK_IMPORTED_MODULE_5__.base64ToUtf16)(rawData);
              if (!(tmp[0] === "{")) {
                _context.next = 15;
                break;
              }
              return _context.abrupt("return", tmp);
            case 15:
              return _context.abrupt("return", atob(rawData));
            case 16:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function readFile(_x) {
        return _readFile.apply(this, arguments);
      }
      return readFile;
    }() // jsdoc in parent class
  }, {
    key: "readFileAsData",
    value: function () {
      var _readFileAsData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(fileRef) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function readFileAsData(_x2) {
        return _readFileAsData.apply(this, arguments);
      }
      return readFileAsData;
    }() // jsdoc in parent class
  }, {
    key: "readFileAsBuffer",
    value: function () {
      var _readFileAsBuffer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fileRef) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function readFileAsBuffer(_x3) {
        return _readFileAsBuffer.apply(this, arguments);
      }
      return readFileAsBuffer;
    }() // jsdoc in parent class
  }, {
    key: "writeFile",
    value: function () {
      var _writeFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(fileRef, content) {
        var uri, result;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.info("writeFile:", "file reference:", fileRef, "content-length:", content === null || content === void 0 ? void 0 : content.length);
              uri = fileRef.pathData;
              if (uri) {
                _context4.next = 5;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context4.next = 7;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.writeNativeFile)(uri, content);
            case 7:
              result = _context4.sent;
              if (result) {
                _context4.next = 10;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 10:
              return _context4.abrupt("return");
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4);
      }));
      function writeFile(_x4, _x5) {
        return _writeFile.apply(this, arguments);
      }
      return writeFile;
    }() // jsdoc in parent class
  }, {
    key: "writeFileWithBuffer",
    value: function () {
      var _writeFileWithBuffer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(fileRef, content) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function writeFileWithBuffer(_x6, _x7) {
        return _writeFileWithBuffer.apply(this, arguments);
      }
      return writeFileWithBuffer;
    }() // jsdoc in parent class
  }, {
    key: "renameFile",
    value: function () {
      var _renameFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(fileRef, newName) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function renameFile(_x8, _x9) {
        return _renameFile.apply(this, arguments);
      }
      return renameFile;
    }()
  }, {
    key: "checkFileExists",
    value: function () {
      var _checkFileExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(fileRef) {
        var path, exists;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              path = fileRef.pathData;
              if (path) {
                _context7.next = 4;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 4:
              _context7.next = 6;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.doesFileExist)(path);
            case 6:
              exists = _context7.sent;
              return _context7.abrupt("return", exists);
            case 8:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function checkFileExists(_x10) {
        return _checkFileExists.apply(this, arguments);
      }
      return checkFileExists;
    }()
  }, {
    key: "requestWritePermission",
    value: function () {
      var _requestWritePermission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(fileRef) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              log.warn("requestWritePermission should not get called for android");
              return _context8.abrupt("return", !!fileRef.pathData);
            case 2:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function requestWritePermission(_x11) {
        return _requestWritePermission.apply(this, arguments);
      }
      return requestWritePermission;
    }() //#endregion base operations
    //#region UI
    // jsdoc in parent class
  }, {
    key: "selectFileToOpen",
    value: function () {
      var _selectFileToOpen2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(fileRef) {
        var uri, fileName, name, newFileRef;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.info("selectFileToOpen", fileRef);
              _context9.next = 3;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.selectFileToOpen)();
            case 3:
              uri = _context9.sent;
              log.debug("selectFileToOpen - uri:", uri);
              if (uri) {
                _context9.next = 8;
                break;
              }
              log.error("There was an issue selecting the file", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound();
            case 8:
              if (!(uri === null)) {
                _context9.next = 11;
                break;
              }
              log.error("There was an issue selecting the file", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound();
            case 11:
              _context9.next = 13;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.getProjectName)(uri, "");
            case 13:
              fileName = _context9.sent;
              log.debug("opening file:", uri, fileName);
              if (!(uri === null || fileName.length === 0)) {
                _context9.next = 19;
                break;
              }
              // For Android we don't check for file extensions
              // So we need to let the user know if they try to load non VEXcode project file
              // such as an image. Thus, we need to let the user know.
              ___WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.alert(___WEBPACK_IMPORTED_MODULE_6__.i18n.t("Corrupt project"));
              log.warn("Path Info not valid for open or the open was canceled");
              return _context9.abrupt("return");
            case 19:
              name = fileName;
              newFileRef = {
                name: name,
                pathData: uri,
                // we need to pull the extension from the file name. it is not part of the URI
                fileExtension: fileName.substring(fileName.lastIndexOf(".") + 1),
                hasWritePermission: true,
                hasFolderWritePermissions: true
              };
              return _context9.abrupt("return", newFileRef);
            case 22:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function selectFileToOpen(_x12) {
        return _selectFileToOpen2.apply(this, arguments);
      }
      return selectFileToOpen;
    }() // jsdoc in parent class
  }, {
    key: "selectFileToSave",
    value: function () {
      var _selectFileToSave2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(fileRef) {
        var ext, currentName, uri, fileName, name, newFileRef;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.info("selectFileToSave", fileRef);
              ext = fileRef.fileExtension;
              if (ext) {
                _context10.next = 5;
                break;
              }
              log.error("unable to read file. no extension in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              currentName = fileRef.name;
              if (currentName) {
                _context10.next = 9;
                break;
              }
              log.error("unable to read file. no name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 9:
              _context10.next = 11;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.selectFileToSave)(currentName, ext);
            case 11:
              uri = _context10.sent;
              _context10.next = 14;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.getProjectName)(uri, ext);
            case 14:
              fileName = _context10.sent;
              log.debug("using file:", uri, fileName);
              if (!(uri === null || fileName.length === 0)) {
                _context10.next = 19;
                break;
              }
              log.warn("Path Info not valid for save as or the save was canceled");
              return _context10.abrupt("return");
            case 19:
              name = fileName;
              newFileRef = {
                name: name,
                pathData: uri,
                fileExtension: ext,
                hasWritePermission: true,
                hasFolderWritePermissions: true
              };
              return _context10.abrupt("return", newFileRef);
            case 22:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function selectFileToSave(_x13) {
        return _selectFileToSave2.apply(this, arguments);
      }
      return selectFileToSave;
    }() //#endregion UI
    //#region cleanup methods
    // jsdoc in parent class
  }, {
    key: "cleanupFileReferenceAfterRead",
    value: function cleanupFileReferenceAfterRead(fileRef) {
      log.info("cleanupFileReferenceAfterRead", fileRef);
      // noting to do for Android
      return fileRef;
    }

    // jsdoc in parent class
  }, {
    key: "cleanupFileReferenceAfterWrite",
    value: function cleanupFileReferenceAfterWrite(fileRef) {
      log.info("cleanupFileReferenceAfterWrite", fileRef);
      // noting to do for Android
      return fileRef;
    }
    //#endregion cleanup methods

    // jsdoc in parent class
  }, {
    key: "createFileReferenceFromURI",
    value: function () {
      var _createFileReferenceFromURI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(uri) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.info("createFileReferenceFromURI", uri);

              // TODO: this will probably need to get updated since there is no extension in the URI
              _context11.next = 3;
              return (0,_nativeInterface__WEBPACK_IMPORTED_MODULE_4__.getProjectName)(uri, "");
            case 3:
              _context11.t0 = _context11.sent;
              _context11.t1 = uri;
              _context11.t2 = (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.getExtensionFromURI)(uri);
              return _context11.abrupt("return", {
                name: _context11.t0,
                pathData: _context11.t1,
                fileExtension: _context11.t2,
                hasWritePermission: true,
                hasFolderWritePermissions: true
              });
            case 7:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function createFileReferenceFromURI(_x14) {
        return _createFileReferenceFromURI.apply(this, arguments);
      }
      return createFileReferenceFromURI;
    }() //#region extensions
    //#endregion extensions
  }]);
}(_FileSystemBase__WEBPACK_IMPORTED_MODULE_1__.FileSystemBase);


/***/ }),

/***/ "./src/FileSys/FileSystem/helpers.ts":
/*!*******************************************!*\
  !*** ./src/FileSys/FileSystem/helpers.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contentToDataString: () => (/* binding */ contentToDataString),
/* harmony export */   getExtensionFromName: () => (/* binding */ getExtensionFromName),
/* harmony export */   getExtensionFromURI: () => (/* binding */ getExtensionFromURI),
/* harmony export */   getNameFromURI: () => (/* binding */ getNameFromURI),
/* harmony export */   getPathFromURI: () => (/* binding */ getPathFromURI)
/* harmony export */ });
/* harmony import */ var mime_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mime-types */ "./node_modules/mime-types/index.js");


/**
 * converts a file content from a normal string to a base64 encoded data string with the correct MIME data
 * @param content 
 * @param extension 
 */
function contentToDataString(content, extension) {
  return "data:".concat(mime_types__WEBPACK_IMPORTED_MODULE_0__.lookup(extension), ";base64,").concat(btoa(content));
}
function getExtensionFromName(filename) {
  return filename.substring(filename.lastIndexOf(".") + 1);
}

/**
 * helper to extract the extension from a URI string. This just grabs everything after the last `.`
 * @param uri the URI string to parse
 * @returns the extension from the URI without the `.`
 */
function getExtensionFromURI(uri) {
  // windows has different path separators...
  var standardURI = uri.replaceAll("\\", "/");
  var fullFilename = decodeURIComponent(standardURI.substring(standardURI.lastIndexOf("/") + 1));
  return fullFilename.substring(fullFilename.lastIndexOf(".") + 1);
}

/**
 * helper to extract the file name from the file path URI
 * @param uri the URI to process
 * @param extension the extension used by the file. if null, will remove everything after the last `.`
 * @returns the file name without the extension
 */
function getNameFromURI(uri, extension) {
  // get extension if it was not provided
  var ext = extension || getExtensionFromURI(uri);

  // windows has different path separators...
  var standardURI = uri.replaceAll("\\", "/");
  return decodeURIComponent(standardURI.substring(standardURI.lastIndexOf("/") + 1).replace(".".concat(ext), ""));
}

/**
 * helper to pull the path from the provided URI. This removes the filename and the last `/`
 * @param uri the URI to parse
 * @returns the URI path without the filename
 */
function getPathFromURI(uri) {
  return uri.substring(0, uri.lastIndexOf("/"));
}

/***/ })

}]);
//# sourceMappingURL=76ff21e302aff7589923.src_FileSys_FileSystem_FileSystemAndroid_ts.bundle.js.map