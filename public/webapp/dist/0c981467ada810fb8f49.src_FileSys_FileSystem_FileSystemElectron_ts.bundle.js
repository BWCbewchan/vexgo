"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_FileSystem_FileSystemElectron_ts"],{

/***/ "./src/FileSys/FileSystem/FileSystemElectron.ts":
/*!******************************************************!*\
  !*** ./src/FileSys/FileSystem/FileSystemElectron.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemElectron: () => (/* binding */ FileSystemElectron)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileSystemBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSystemBase */ "./src/FileSys/FileSystem/FileSystemBase.ts");
/* harmony import */ var _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSystemErrors */ "./src/FileSys/FileSystem/FileSystemErrors.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ElectronFileSystemBridge */ "./src/FileSys/FileSystem/ElectronFileSystemBridge.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers */ "./src/FileSys/FileSystem/helpers.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("FileSystemElectron");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("FileSystem");

// local imports



// global imports





var fileSystemBridge = new _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.VexElectronFileSystemProxy();

/**
 * Stores the reference to the last selected file handle. This is used to have
 * the file dialogs start in the last used location. This could be extended to
 * support saving the handle between sessions in the future.
 */
var lastFile = null;

/**
 * the class for all Web file system operations
 * 
 */
var FileSystemElectron = /*#__PURE__*/function (_FileSystemBase) {
  function FileSystemElectron() {
    var _this;
    _classCallCheck(this, FileSystemElectron);
    _this = _callSuper(this, FileSystemElectron);
    _this.onExternalFileOpen = _this.onExternalFileOpen.bind(_this);
    fileSystemBridge.onOpenFile(_this.onExternalFileOpen);
    return _this;
  }

  //#region information
  // jsdoc in parent class
  _inherits(FileSystemElectron, _FileSystemBase);
  return _createClass(FileSystemElectron, [{
    key: "canLoadFromURI",
    get: function get() {
      return true;
    }

    // jsdoc in parent class
  }, {
    key: "canLoadAnyFile",
    get: function get() {
      return true;
    }

    // jsdoc in parent class
  }, {
    key: "supportsRename",
    get: function get() {
      return true;
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
        var filePath;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("readFile:", fileRef);
              filePath = fileRef.pathData;
              if (filePath) {
                _context.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context.prev = 5;
              _context.next = 8;
              return fileSystemBridge.readFile(filePath);
            case 8:
              return _context.abrupt("return", _context.sent);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](5);
              if (!(_context.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSFileNotFound)) {
                _context.next = 17;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS();
            case 17:
              if (!(_context.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context.next = 21;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 21:
              if (!(_context.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSReadError)) {
                _context.next = 25;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSReadError();
            case 25:
              throw _context.t0;
            case 26:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[5, 11]]);
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
              throw new _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSOperationNotSupported();
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
    }()
  }, {
    key: "readFileAsBuffer",
    value: function () {
      var _readFileAsBuffer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(fileRef) {
        var filePath;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.info("readFileAsBuffer:", fileRef);
              filePath = fileRef.pathData;
              if (filePath) {
                _context3.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context3.prev = 5;
              _context3.next = 8;
              return fileSystemBridge.readFileAsBuffer(filePath);
            case 8:
              return _context3.abrupt("return", _context3.sent);
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](5);
              if (!(_context3.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSFileNotFound)) {
                _context3.next = 17;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS();
            case 17:
              if (!(_context3.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context3.next = 21;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 21:
              if (!(_context3.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSReadError)) {
                _context3.next = 25;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSReadError();
            case 25:
              throw _context3.t0;
            case 26:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[5, 11]]);
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
        var filePath;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.info("writeFile:", "file reference:", fileRef, "content-length:", content === null || content === void 0 ? void 0 : content.length);
              filePath = fileRef.pathData;
              if (filePath) {
                _context4.next = 5;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context4.prev = 5;
              return _context4.abrupt("return", fileSystemBridge.writeFile(filePath, content));
            case 9:
              _context4.prev = 9;
              _context4.t0 = _context4["catch"](5);
              if (!(_context4.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context4.next = 15;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 15:
              if (!(_context4.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSWriteError)) {
                _context4.next = 19;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 19:
              throw _context4.t0;
            case 20:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[5, 9]]);
      }));
      function writeFile(_x4, _x5) {
        return _writeFile.apply(this, arguments);
      }
      return writeFile;
    }()
  }, {
    key: "writeFileWithBuffer",
    value: function () {
      var _writeFileWithBuffer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(fileRef, content) {
        var filePath;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.info("writeFileWithBuffer:", "IFileReference: ", fileRef, "content-byte-length:", content.maxByteLength);
              filePath = fileRef.pathData;
              if (filePath) {
                _context5.next = 5;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context5.prev = 5;
              return _context5.abrupt("return", fileSystemBridge.writeFile(filePath, content));
            case 9:
              _context5.prev = 9;
              _context5.t0 = _context5["catch"](5);
              if (!(_context5.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context5.next = 15;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 15:
              if (!(_context5.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSWriteError)) {
                _context5.next = 19;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 19:
              throw _context5.t0;
            case 20:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[5, 9]]);
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
        var filePath;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              log.info("checkFileExists:", fileRef);
              filePath = fileRef.pathData;
              if (filePath) {
                _context7.next = 5;
                break;
              }
              log.error("unable to check file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              _context7.prev = 5;
              return _context7.abrupt("return", fileSystemBridge.checkFileExists(filePath));
            case 9:
              _context7.prev = 9;
              _context7.t0 = _context7["catch"](5);
              log.warn(_context7.t0);
              return _context7.abrupt("return", false);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, null, [[5, 9]]);
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
              return _context8.abrupt("return", !!fileRef.pathData);
            case 1:
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
    key: "selectCustomFileToOpen",
    value: function () {
      var _selectCustomFileToOpen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(fileType, fileRef, extensions) {
        var useGivenFileRef,
          startIn,
          fileFilters,
          extList,
          skipFilePicker,
          tempFileSystemInfo,
          projectName,
          projectPath,
          folderPath,
          handle,
          _handle,
          fileInfo,
          fullName,
          filePath,
          name,
          newFileRef,
          exists,
          hasFolderPermissions,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              useGivenFileRef = _args9.length > 3 && _args9[3] !== undefined ? _args9[3] : false;
              log.info("_____ User attempting to open a file _____");
              log.info("selectCustomFileToOpen", fileType, fileRef, extensions);
              startIn = (fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData) || lastFile || "~";
              fileFilters = [];
              if (fileType === "Project") {
                extList = extensions;
                fileFilters.push({
                  name: 'VEXcode Project',
                  extensions: extList
                });
              } else if (fileType === "MazeData") {
                fileFilters.push({
                  name: 'VR maze data',
                  extensions: ["vrmaze"]
                });
              } else if (fileType === "VRImage") {
                fileFilters.push({
                  name: 'PNG image',
                  extensions: ["png", "jpg", "jpeg"]
                });
              } else if (fileType === "AIMImageUpload") {
                fileFilters.push({
                  name: 'PNG image',
                  extensions: ['png']
                });
              } else if (fileType === "AIMSoundUpload") {
                fileFilters.push({
                  name: 'MP3 Audio Files',
                  extensions: ['mp3']
                });
              } else if (fileType === "zip") {
                fileFilters.push({
                  name: 'Compressed File',
                  extensions: ['zip']
                });
              }
              _context9.prev = 6;
              skipFilePicker = useGivenFileRef;
              tempFileSystemInfo = null;
              if (!skipFilePicker) {
                _context9.next = 17;
                break;
              }
              projectName = fileRef.name + "." + fileRef.fileExtension;
              projectPath = fileRef.pathData;
              folderPath = "~";
              handle = {
                folder: folderPath,
                name: projectName,
                path: projectPath
              };
              tempFileSystemInfo = handle;
              _context9.next = 21;
              break;
            case 17:
              _context9.next = 19;
              return fileSystemBridge.selectFileToOpen(startIn, fileFilters);
            case 19:
              _handle = _context9.sent;
              tempFileSystemInfo = _handle;
            case 21:
              fileInfo = tempFileSystemInfo; // Check if the user selected a file
              if (fileInfo) {
                _context9.next = 24;
                break;
              }
              throw new _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSUserCanceledOperation();
            case 24:
              // now that we know we have a file info, we need to return it using resolve
              fullName = fileInfo.name;
              filePath = fileInfo.path;
              name = fullName.substring(0, fullName.lastIndexOf("."));
              log.debug("name of the file the user selected:", fullName);
              newFileRef = {
                name: name,
                pathData: fileInfo.path,
                fileExtension: fullName.substring(fullName.lastIndexOf(".") + 1),
                hasWritePermission: true,
                hasFolderWritePermissions: false
              };
              lastFile = fileInfo.folder;

              // Opening project from recent, we need to check if the file even exists
              if (!(useGivenFileRef && fileRef)) {
                _context9.next = 37;
                break;
              }
              _context9.next = 33;
              return this.checkFileExists(newFileRef);
            case 33:
              exists = _context9.sent;
              if (exists) {
                _context9.next = 37;
                break;
              }
              log.error("Tried to load project from recent projects, but the file doesn't exist", newFileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound();
            case 37:
              _context9.next = 39;
              return this.verifyFolderPermission(filePath);
            case 39:
              hasFolderPermissions = _context9.sent;
              newFileRef.hasFolderWritePermissions = hasFolderPermissions;
              log.info("File has been successfully opened and created a iFileReference: ", newFileRef);
              return _context9.abrupt("return", newFileRef);
            case 45:
              _context9.prev = 45;
              _context9.t0 = _context9["catch"](6);
              if (!(_context9.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSUserCanceledOperation)) {
                _context9.next = 53;
                break;
              }
              log.info("USER CANCELED: No file has been selected.");
              log.debug("Error Information: ", _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.name, _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSUserCanceledOperation();
            case 53:
              if (!(_context9.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context9.next = 61;
                break;
              }
              log.info("ERROR_OPEN_01: User does not have read/write access to desired file they are trying to open. Modal to inform user displayed.");
              log.debug("Error Information: ", _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.name, _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message);
              _context9.next = 58;
              return new Promise(function (resolve) {
                log.info("ERROR_OPEN_01 Triggering a no write access folder modal");
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showNoWriteAccessPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("No write access open"), resolve, _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Save to New Location"), "ERROR_OPEN_01");
              });
            case 58:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 61:
              if (!(_context9.t0 instanceof _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound)) {
                _context9.next = 64;
                break;
              }
              log.info("Failed to load, no file found.");
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound();
            case 64:
              log.info("ERROR_OPEN_FF: An unknown error has occurred during file selection. Modal to inform user displayed.");
              log.debug("Error Information: ", _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.name, _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showUnhandledErrorPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Unhandled open error"), "ERROR_OPEN_FF", _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.name, _context9.t0 === null || _context9.t0 === void 0 ? void 0 : _context9.t0.message);
              throw _context9.t0;
            case 68:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[6, 45]]);
      }));
      function selectCustomFileToOpen(_x12, _x13, _x14) {
        return _selectCustomFileToOpen.apply(this, arguments);
      }
      return selectCustomFileToOpen;
    }()
  }, {
    key: "selectCustomFileToSave",
    value: function () {
      var _selectCustomFileToSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(fileType, fileRef) {
        var fileExtension, fileName, suggestedName, startIn, fileFilters, fileInfo, fullName, filePath, name, hasFolderPermissions, newFileRef;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.info("_____ User attempting to save a file _____");
              log.info("selectCustomFileToSave", fileType, fileRef);
              fileExtension = fileRef.fileExtension;
              if (fileExtension) {
                _context10.next = 6;
                break;
              }
              log.error("ERROR: Unable to read file. No extension in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 6:
              fileName = fileRef.name;
              if (fileName) {
                _context10.next = 10;
                break;
              }
              log.error("ERROR: Unable to read file. No name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 10:
              // Chrome OS needs to have the file extension added...
              suggestedName = fileName;
              startIn = (fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData) || lastFile || "~";
              fileFilters = [];
              if (fileType === "Project") {
                fileFilters.push({
                  // TODO: make this change based on language/platform
                  name: 'VEXcode Project',
                  extensions: ["".concat(fileExtension)]
                });
              } else if (fileType === "MazeData") {
                fileFilters.push({
                  name: 'VR maze data',
                  extensions: ["vrmaze"]
                });
              } else if (fileType === "VRImage") {
                fileFilters.push({
                  name: 'PNG image',
                  extensions: ["png"]
                });
              }
              _context10.prev = 14;
              _context10.next = 17;
              return fileSystemBridge.selectFileToSave(startIn, suggestedName, fileFilters);
            case 17:
              fileInfo = _context10.sent;
              if (fileInfo) {
                _context10.next = 20;
                break;
              }
              throw new _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSUserCanceledOperation();
            case 20:
              // we want to make sure we use the name that the user provided for the new file reference
              fullName = fileInfo.name;
              filePath = fileInfo.path;
              name = fullName.substring(0, fullName.lastIndexOf("."));
              log.debug("name of the file that is being saved", fullName);

              // Check that we have write access to the file location
              _context10.next = 26;
              return this.verifyFolderPermission(filePath);
            case 26:
              hasFolderPermissions = _context10.sent;
              if (hasFolderPermissions) {
                _context10.next = 29;
                break;
              }
              throw new _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied();
            case 29:
              newFileRef = {
                name: name,
                pathData: fileInfo.path,
                fileExtension: fileExtension,
                hasWritePermission: true,
                hasFolderWritePermissions: hasFolderPermissions
              };
              lastFile = fileInfo.folder;
              return _context10.abrupt("return", newFileRef);
            case 34:
              _context10.prev = 34;
              _context10.t0 = _context10["catch"](14);
              if (!(_context10.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSUserCanceledOperation)) {
                _context10.next = 42;
                break;
              }
              log.info("USER CANCELED: No save location has been selected. Modal to inform user displayed.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              // MODALCONTROL.alert(i18n.t("Canceled save"));
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSUserCanceledOperation();
            case 42:
              if (!(_context10.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context10.next = 48;
                break;
              }
              log.info("ERROR_SAVE_01: User does not have read/write access to desired folder they are trying to save to. Modal to inform user displayed.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              _context10.next = 47;
              return new Promise(function (resolve) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showNoWriteAccessPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("No write access save"), resolve, _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Save to New Location"), "ERROR_SAVE_01");
              });
            case 47:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 48:
              log.info("ERROR_SAVE_FF: An unknown error has occurred while selecting save location. Modal to inform user displayed.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showUnhandledErrorPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Unhandled save error"), "ERROR_SAVE_FF", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              throw _context10.t0;
            case 52:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[14, 34]]);
      }));
      function selectCustomFileToSave(_x15, _x16) {
        return _selectCustomFileToSave.apply(this, arguments);
      }
      return selectCustomFileToSave;
    }()
  }, {
    key: "selectFileToOpen",
    value: function () {
      var _selectFileToOpen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(fileRef, extensions) {
        var useGivenFileRef,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              useGivenFileRef = _args11.length > 2 && _args11[2] !== undefined ? _args11[2] : false;
              log.info("selectFileToOpen", fileRef, extensions);
              if (!extensions) {
                extensions = this.getOpenProjectExtensions();
              }

              // unlike the other file systems, we can use the same code for custom files for saving/loading projects, so we do that to reduce duplicate code
              return _context11.abrupt("return", this.selectCustomFileToOpen("Project", fileRef, extensions, useGivenFileRef));
            case 4:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function selectFileToOpen(_x17, _x18) {
        return _selectFileToOpen.apply(this, arguments);
      }
      return selectFileToOpen;
    }() // jsdoc in parent class
  }, {
    key: "selectFileToSave",
    value: function () {
      var _selectFileToSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(fileRef) {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.info("selectFileToSave", fileRef);
              return _context12.abrupt("return", this.selectCustomFileToSave("Project", fileRef));
            case 2:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function selectFileToSave(_x19) {
        return _selectFileToSave.apply(this, arguments);
      }
      return selectFileToSave;
    }() //#endregion UI
    //#region cleanup methods
    // jsdoc in parent class
  }, {
    key: "cleanupFileReferenceAfterRead",
    value: function cleanupFileReferenceAfterRead(fileRef) {
      log.info("cleanupFileReferenceAfterRead", fileRef);
      // nothing to do for web FileSystem access
      return fileRef;
    }

    // jsdoc in parent class
  }, {
    key: "cleanupFileReferenceAfterWrite",
    value: function cleanupFileReferenceAfterWrite(fileRef) {
      log.info("cleanupFileReferenceAfterWrite", fileRef);
      // nothing to do for web FileSystem access
      return fileRef;
    }
    //#endregion cleanup methods

    // jsdoc in parent class
  }, {
    key: "createFileReferenceFromURI",
    value: function () {
      var _createFileReferenceFromURI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(uri) {
        var hasFolderPermissions;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.next = 2;
              return this.verifyFolderPermission(uri);
            case 2:
              hasFolderPermissions = _context13.sent;
              log.info("createFileReferenceFromURI", uri);
              return _context13.abrupt("return", {
                name: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getNameFromURI)(uri),
                pathData: uri,
                fileExtension: (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.getExtensionFromURI)(uri),
                hasWritePermission: true,
                hasFolderWritePermissions: hasFolderPermissions
              });
            case 5:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function createFileReferenceFromURI(_x20) {
        return _createFileReferenceFromURI.apply(this, arguments);
      }
      return createFileReferenceFromURI;
    }() //#region extensions
    //#endregion extensions
  }, {
    key: "markVEXcodeReady",
    value: function () {
      var _markVEXcodeReady = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              return _context14.abrupt("return", fileSystemBridge.markVEXcodeReady());
            case 1:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function markVEXcodeReady() {
        return _markVEXcodeReady.apply(this, arguments);
      }
      return markVEXcodeReady;
    }()
    /**
     * Checks if the given file path has read/write permissions.
     * @param {string} filePath the file to write to
     * @return {boolean} True if the file path has read/write permission.
     */
  }, {
    key: "verifyFolderPermission",
    value: (function () {
      var _verifyFolderPermission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(fileInfo) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              return _context15.abrupt("return", fileSystemBridge.fileHasWriteAccess(fileInfo));
            case 4:
              _context15.prev = 4;
              _context15.t0 = _context15["catch"](0);
              if (!(_context15.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSAccessDenied)) {
                _context15.next = 10;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied();
            case 10:
              if (!(_context15.t0 instanceof _ElectronFileSystemBridge__WEBPACK_IMPORTED_MODULE_5__.ErrorElectronFSWriteError)) {
                _context15.next = 14;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 14:
              throw _context15.t0;
            case 15:
            case "end":
              return _context15.stop();
          }
        }, _callee15, null, [[0, 4]]);
      }));
      function verifyFolderPermission(_x21) {
        return _verifyFolderPermission.apply(this, arguments);
      }
      return verifyFolderPermission;
    }() //#region events
    /**
     * converts the open event data from electron to the VEXcode data structure
     * and then fires the event with that data
     * @param fileInfo the information about the file to open.
     */
    )
  }, {
    key: "onExternalFileOpen",
    value: function onExternalFileOpen(fileInfo) {
      log.warn("onExternalFileOpen:", fileInfo);
      this.fireEvent("externalFileOpen", fileInfo.path);
    }
    //#endregion events
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
//# sourceMappingURL=0c981467ada810fb8f49.src_FileSys_FileSystem_FileSystemElectron_ts.bundle.js.map