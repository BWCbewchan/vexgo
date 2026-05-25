"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_FileSystem_FileSystemAccess_ts"],{

/***/ "./src/FileSys/FileSystem/FileSystemAccess.ts":
/*!****************************************************!*\
  !*** ./src/FileSys/FileSystem/FileSystemAccess.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemAccess: () => (/* binding */ FileSystemAccess)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileSystemBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSystemBase */ "./src/FileSys/FileSystem/FileSystemBase.ts");
/* harmony import */ var _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSystemErrors */ "./src/FileSys/FileSystem/FileSystemErrors.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../i18n/i18n */ "./src/i18n/i18n.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("FileSystemAccess");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll(); 

log.setHistoryLogger("FileSystem");

// local imports





// global imports

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
var FileSystemAccess = /*#__PURE__*/function (_FileSystemBase) {
  function FileSystemAccess() {
    _classCallCheck(this, FileSystemAccess);
    return _callSuper(this, FileSystemAccess, arguments);
  }
  _inherits(FileSystemAccess, _FileSystemBase);
  return _createClass(FileSystemAccess, [{
    key: "canLoadFromURI",
    get:
    //#region information
    // jsdoc in parent class
    function get() {
      return false;
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
        var fileHandle, file, content;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("readFile:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              fileHandle = fileRef.pathData;
              _context.next = 4;
              return fileHandle.getFile();
            case 4:
              file = _context.sent;
              if (file) {
                _context.next = 8;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 8:
              if (!file.text) {
                _context.next = 14;
                break;
              }
              _context.next = 11;
              return file.text();
            case 11:
              content = _context.sent;
              log.debug("read content:", typeof content === "string" ? content === null || content === void 0 ? void 0 : content.substring(0, 300) : content);
              return _context.abrupt("return", content);
            case 14:
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (event) {
                  var contents = event.target.result;
                  log.debug("readFile result:", contents);
                  resolve(contents);
                };
                reader.onerror = function (event) {
                  log.debug("readFile - error:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.onabort = function (event) {
                  log.debug("readFile - abort:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.readAsText(file);
              }));
            case 15:
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
        var fileHandle, file;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.info("readFile:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              fileHandle = fileRef.pathData;
              _context2.next = 4;
              return fileHandle.getFile();
            case 4:
              file = _context2.sent;
              if (file) {
                _context2.next = 8;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 8:
              if (!file.text) {
                _context2.next = 12;
                break;
              }
              _context2.next = 11;
              return file.text();
            case 11:
              return _context2.abrupt("return", _context2.sent);
            case 12:
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (event) {
                  var contents = event.target.result;
                  log.debug("readFile result:", contents);
                  resolve(contents);
                };
                reader.onerror = function (event) {
                  log.debug("readFile - error:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.onabort = function (event) {
                  log.debug("readFile - abort:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.readAsDataURL(file);
              }));
            case 13:
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
        var fileHandle, file;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.info("readFileAsBuffer:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              fileHandle = fileRef.pathData;
              _context3.next = 4;
              return fileHandle.getFile();
            case 4:
              file = _context3.sent;
              if (file) {
                _context3.next = 8;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 8:
              if (!file.arrayBuffer) {
                _context3.next = 12;
                break;
              }
              _context3.next = 11;
              return file.arrayBuffer();
            case 11:
              return _context3.abrupt("return", _context3.sent);
            case 12:
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var reader = new FileReader();
                reader.onload = function (event) {
                  var contents = event.target.result;
                  log.debug("readFile result:", contents);
                  resolve(contents);
                };
                reader.onerror = function (event) {
                  log.debug("readFile - error:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.onabort = function (event) {
                  log.debug("readFile - abort:", event);
                  reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFS());
                };
                reader.readAsArrayBuffer(file);
              }));
            case 13:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
      }));
      function readFileAsBuffer(_x3) {
        return _readFileAsBuffer.apply(this, arguments);
      }
      return readFileAsBuffer;
    }()
    /**
     * a helper for actually writing the data to the specified file. This should
     * only be called by one of the public write methods, and only after the
     * other checks are completed. This will only handle errors with the actual
     * low level write and not issues with permissions or data.
     * 
     * This method will open a single write stream and make sure it is closed on
     * completion or error. If another write stream is open, this will throw an
     * error as we only want to allow a single write at any point in time.
     * @param fileHandle the file handle to write to
     * @param data the data to replace the file contents with
     */
  }, {
    key: "writeFileData",
    value: (function () {
      var _writeFileData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(fileHandle, data) {
        var writableStream;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("writeFileData:", fileHandle);
              // define this here so that we can close this
              _context4.prev = 1;
              _context4.next = 4;
              return fileHandle.createWritable({
                mode: "exclusive"
              });
            case 4:
              writableStream = _context4.sent;
              log.debug("writeFileData writable stream created");

              // write the content to the file and resize to the size of the new content
              _context4.next = 8;
              return writableStream.write({
                type: "truncate",
                size: 0
              });
            case 8:
              _context4.next = 10;
              return writableStream.write(data);
            case 10:
              log.debug("writeFileData - write complete, closing stream");
              // close the stream so that it can be opened later...
              _context4.next = 13;
              return writableStream.close();
            case 13:
              log.debug("writeFileData stream closed");
              writableStream = null;
              _context4.next = 27;
              break;
            case 17:
              _context4.prev = 17;
              _context4.t0 = _context4["catch"](1);
              log.error("error writing file:", _context4.t0);
              if (!writableStream) {
                _context4.next = 26;
                break;
              }
              log.warn("writeFileData closing stream after error during write");
              // close the stream so that it can be opened later...
              _context4.next = 24;
              return writableStream.close();
            case 24:
              log.debug("writeFileData stream closed");
              writableStream = null;
            case 26:
              throw _context4.t0;
            case 27:
              _context4.prev = 27;
              if (!writableStream) {
                _context4.next = 32;
                break;
              }
              log.warn("writeFileData closing stream in finally block... this should not happen");
              // close the stream so that it can be opened later...
              _context4.next = 32;
              return writableStream.close();
            case 32:
              return _context4.finish(27);
            case 33:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 17, 27, 33]]);
      }));
      function writeFileData(_x4, _x5) {
        return _writeFileData.apply(this, arguments);
      }
      return writeFileData;
    }() // jsdoc in parent class
    )
  }, {
    key: "writeFile",
    value: function () {
      var _writeFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(fileRef, content) {
        var fileHandle, encoder, data;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.info("writeFile:", "file reference:", fileRef, "content-length:", content === null || content === void 0 ? void 0 : content.length);

              // unlike old web file system, we have a file reference that we save to
              fileHandle = fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData;
              if (fileHandle) {
                _context5.next = 5;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              // convert the utf-16 string to utf-8 to match everything else...
              encoder = new TextEncoder();
              data = encoder.encode(content);
              log.debug("writeFile - writing actual data to file");
              _context5.next = 10;
              return this.writeFileData(fileHandle, data);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function writeFile(_x6, _x7) {
        return _writeFile.apply(this, arguments);
      }
      return writeFile;
    }()
  }, {
    key: "writeFileWithBuffer",
    value: function () {
      var _writeFileWithBuffer = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(fileRef, content) {
        var fileHandle, data;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.info("writeFileWithBuffer:", fileRef, content);

              // unlike old web file system, we have a file reference that we save to
              fileHandle = fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData;
              if (fileHandle) {
                _context6.next = 5;
                break;
              }
              log.error("unable to write file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              data = new Uint8Array(content);
              log.debug("writeFileWithBuffer - writing actual data to file");
              _context6.next = 9;
              return this.writeFileData(fileHandle, data);
            case 9:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function writeFileWithBuffer(_x8, _x9) {
        return _writeFileWithBuffer.apply(this, arguments);
      }
      return writeFileWithBuffer;
    }() // jsdoc in parent class
  }, {
    key: "renameFile",
    value: function () {
      var _renameFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(fileRef, newName) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7);
      }));
      function renameFile(_x10, _x11) {
        return _renameFile.apply(this, arguments);
      }
      return renameFile;
    }()
  }, {
    key: "checkFileExists",
    value: function () {
      var _checkFileExists = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(fileRef) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported("File exists check operation is not supported on the current platform");
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8);
      }));
      function checkFileExists(_x12) {
        return _checkFileExists.apply(this, arguments);
      }
      return checkFileExists;
    }()
  }, {
    key: "requestWritePermission",
    value: function () {
      var _requestWritePermission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(fileRef) {
        var fileHandle, permissionOptions, hasFolderWritePermission, continueWithoutPermission;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!(fileRef.hasWritePermission && fileRef.hasFolderWritePermissions)) {
                _context9.next = 3;
                break;
              }
              log.warn("why was requestWritePermission called on a file that already has write permission?");
              return _context9.abrupt("return", true);
            case 3:
              fileHandle = fileRef.pathData;
              permissionOptions = {
                mode: "readwrite",
                writable: true
              }; // In case where write permission is false but folder permission is true
              // Reset the folder permission to false. This is to retrigger folder permission check
              // when the user gives permission to write but we assume folder permission is granted.
              if (fileRef.hasFolderWritePermissions && !fileRef.hasWritePermission) {
                log.info("Resetting folder permission to false to trigger a recheck...");
                fileRef.hasFolderWritePermissions = false;
              }

              // Check if we already have permission, if so, return true.
              _context9.next = 8;
              return fileHandle.queryPermission(permissionOptions);
            case 8:
              _context9.t0 = _context9.sent;
              if (!(_context9.t0 === 'granted')) {
                _context9.next = 12;
                break;
              }
              fileRef.hasWritePermission = true;
              return _context9.abrupt("return", true);
            case 12:
              if (false) {}
              _context9.next = 15;
              return fileHandle.requestPermission(permissionOptions);
            case 15:
              _context9.t1 = _context9.sent;
              if (!(_context9.t1 === 'granted')) {
                _context9.next = 23;
                break;
              }
              fileRef.hasWritePermission = true;
              _context9.next = 20;
              return this.verifyFolderPermission(fileHandle, true);
            case 20:
              hasFolderWritePermission = _context9.sent;
              fileRef.hasFolderWritePermissions = hasFolderWritePermission;
              return _context9.abrupt("return", hasFolderWritePermission);
            case 23:
              _context9.next = 25;
              return new Promise(function (resolve, reject) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showCustomPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("file system access api save permission denied confirmation"), _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Continue Without Autosave"), _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Try Again"), resolve, true);
              });
            case 25:
              continueWithoutPermission = _context9.sent;
              if (!continueWithoutPermission) {
                _context9.next = 28;
                break;
              }
              return _context9.abrupt("return", false);
            case 28:
              _context9.next = 12;
              break;
            case 30:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function requestWritePermission(_x13) {
        return _requestWritePermission.apply(this, arguments);
      }
      return requestWritePermission;
    }() //#endregion base operations
    //#region UI
    // jsdoc in parent class
  }, {
    key: "selectCustomFileToOpen",
    value: function () {
      var _selectCustomFileToOpen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(fileType, fileRef, extensions) {
        var useGivenFileRef,
          filePickerOptions,
          extList,
          skipFilePicker,
          fileHandleList,
          handle,
          _handle,
          fileHandle,
          hasUserPermissions,
          hasFolderPermissions,
          file,
          fullName,
          name,
          newFileRef,
          _args10 = arguments;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              useGivenFileRef = _args10.length > 3 && _args10[3] !== undefined ? _args10[3] : false;
              log.info("_____ User attempting to open a file _____");
              log.info("selectCustomFileToOpen", fileType, fileRef, extensions);
              filePickerOptions = {
                startIn: (fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData) || lastFile || "documents",
                types: []
              };
              if (fileType === "Project") {
                extList = extensions.map(function (extension) {
                  return "." + extension;
                });
                filePickerOptions.types.push({
                  description: 'VEXcode Project',
                  // new mimetype searches for custom extension
                  accept: {
                    'text/plain': extList,
                    'application/x-vexcode-project': extList
                  }
                });
              } else if (fileType === "MazeData") {
                filePickerOptions.types.push({
                  description: 'VR maze data',
                  accept: {
                    'text/json': [".vrmaze"]
                  }
                });
              } else if (fileType === "VRImage") {
                filePickerOptions.types.push({
                  description: 'PNG image',
                  accept: {
                    'image/png': ['.png'],
                    'image/jpeg': ['.jpeg', '.jpg']
                  }
                });
              } else if (fileType === "AIMImageUpload") {
                filePickerOptions.types.push({
                  description: 'PNG image',
                  accept: {
                    'image/png': ['.png']
                  }
                });
              } else if (fileType === "AIMSoundUpload") {
                filePickerOptions.types.push({
                  description: 'Audio files (WAV, MP3)',
                  accept: {
                    // 'audio/wav': ['.wav'],
                    'audio/mpeg': ['.mp3']
                  }
                });
              } else if (fileType === "zip") {
                filePickerOptions.types.push({
                  description: 'Compressed File',
                  accept: {
                    'application/zip': ['.zip']
                  }
                });
              }
              _context10.prev = 5;
              skipFilePicker = useGivenFileRef && (fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData) instanceof FileSystemFileHandle;
              fileHandleList = [];
              if (!skipFilePicker) {
                _context10.next = 13;
                break;
              }
              handle = fileRef.pathData;
              fileHandleList.push(handle);
              _context10.next = 17;
              break;
            case 13:
              _context10.next = 15;
              return window.showOpenFilePicker(filePickerOptions);
            case 15:
              _handle = _context10.sent;
              fileHandleList.push(_handle[0]);
            case 17:
              fileHandle = fileHandleList[0]; // make sure we can read/write the file
              // we only care about write permission if the file type is project since
              // everything else just reads the file and then closes it.
              hasUserPermissions = true;
              hasFolderPermissions = true;
              if (!(fileType === "Project")) {
                _context10.next = 27;
                break;
              }
              _context10.next = 23;
              return this.verifyFilePermissions(fileHandle, true);
            case 23:
              hasUserPermissions = _context10.sent;
              _context10.next = 26;
              return this.verifyFolderPermission(fileHandle, hasUserPermissions);
            case 26:
              hasFolderPermissions = _context10.sent;
            case 27:
              _context10.next = 29;
              return fileHandle.getFile();
            case 29:
              file = _context10.sent;
              fullName = file.name;
              name = fullName.substring(0, fullName.lastIndexOf(".")); // sets name to fullname if a name is not provided with no valid extension
              // This is to ensure the project has a name and to not use the name as the extension
              name = name ? name : fullName;
              log.debug("name of the file the user selected:", fullName);
              newFileRef = {
                name: name,
                pathData: fileHandle,
                fileExtension: fullName.substring(fullName.lastIndexOf(".") + 1),
                hasWritePermission: hasUserPermissions,
                hasFolderWritePermissions: hasFolderPermissions
              };
              lastFile = fileHandle;
              log.info("File has been successfully opened and created a iFileReference: ", newFileRef);
              return _context10.abrupt("return", newFileRef);
            case 40:
              _context10.prev = 40;
              _context10.t0 = _context10["catch"](5);
              if (!(_context10.t0 instanceof DOMException && _context10.t0.name === "AbortError" && _context10.t0.message.includes("The user aborted a request."))) {
                _context10.next = 48;
                break;
              }
              log.info("USER CANCELED: No file has been selected.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSUserCanceledOperation();
            case 48:
              if (!(_context10.t0 instanceof DOMException && _context10.t0.name === "AbortError" && _context10.t0.message.includes("Failed to create or truncate file."))) {
                _context10.next = 56;
                break;
              }
              log.info("ERROR_OPEN_01: User does not have read/write access to desired file they are trying to open. Modal to inform user displayed.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              _context10.next = 53;
              return new Promise(function (resolve) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showNoWriteAccessPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("No write access open"), resolve, _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Save to New Location"), "ERROR_OPEN_01");
              });
            case 53:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSUserCanceledOperation();
            case 56:
              if (!(_context10.t0 instanceof _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessBlocked || _context10.t0 instanceof DOMException && _context10.t0.name === "NotAllowedError")) {
                _context10.next = 68;
                break;
              }
              log.info("ERROR_OPEN_02: User does not have permission to edit files");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              _context10.next = 61;
              return new Promise(function (resolve) {
                var isDomError = _context10.t0 instanceof DOMException;
                var isBlockedError = isDomError && _context10.t0.message.includes("The request is not allowed by the user agent or the platform in the current context.");
                var details = isBlockedError ? "The request is not allowed by the user agent or the platform in the current context." : isDomError ? _context10.t0.message : undefined;
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showFileSystemBlockedPrompt(resolve, "ERROR_OPEN_02", details);
              });
            case 61:
              if (!(_context10.t0 instanceof _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessBlocked)) {
                _context10.next = 65;
                break;
              }
              throw _context10.t0;
            case 65:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessBlocked();
            case 66:
              _context10.next = 70;
              break;
            case 68:
              if (!(_context10.t0 instanceof _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessBlocked || _context10.t0 instanceof DOMException && _context10.t0.name === "NotFoundError")) {
                _context10.next = 70;
                break;
              }
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound();
            case 70:
              log.info("ERROR_OPEN_FF: An unknown error has occurred during file selection. Modal to inform user displayed.");
              log.debug("Error Information: ", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showUnhandledErrorPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Unhandled open error"), "ERROR_OPEN_FF", _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.name, _context10.t0 === null || _context10.t0 === void 0 ? void 0 : _context10.t0.message);
              throw _context10.t0;
            case 74:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this, [[5, 40]]);
      }));
      function selectCustomFileToOpen(_x14, _x15, _x16) {
        return _selectCustomFileToOpen.apply(this, arguments);
      }
      return selectCustomFileToOpen;
    }()
  }, {
    key: "selectCustomFileToSave",
    value: function () {
      var _selectCustomFileToSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(fileType, fileRef) {
        var fileExtension, fileName, desiredExtension, suggestedName, filePickerOptions, getFileExtension, fileHandle, file, fullName, name, currentExtension, hasUserPermissions, hasFolderPermissions, newFileRef;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.info("_____ User attempting to save a file _____");
              log.info("selectCustomFileToSave", fileType, fileRef);
              fileExtension = fileRef.fileExtension;
              if (fileExtension) {
                _context11.next = 6;
                break;
              }
              log.error("ERROR: Unable to read file. No extension in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 6:
              fileName = fileRef.name;
              if (fileName) {
                _context11.next = 10;
                break;
              }
              log.error("ERROR: Unable to read file. No name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 10:
              // we add the extension to try to force the extension to be correct
              desiredExtension = fileExtension;
              if (fileType === "MazeData") {
                desiredExtension = 'vrmaze';
              } else if (fileType === "VRImage") {
                desiredExtension = 'png';
              }
              suggestedName = "".concat(fileName, ".").concat(desiredExtension);
              filePickerOptions = {
                startIn: (fileRef === null || fileRef === void 0 ? void 0 : fileRef.pathData) || lastFile || "documents",
                types: [],
                suggestedName: suggestedName,
                excludeAcceptAllOption: true
              };
              if (fileType === "Project") {
                filePickerOptions.types.push({
                  // TODO: make this change based on language/platform
                  description: 'VEXcode Project',
                  // new mimetype allows saving for extensions without adding .txt
                  accept: {
                    'text/plain': ".".concat(desiredExtension),
                    'application/x-vexcode-project': ".".concat(desiredExtension)
                  }
                });
              } else if (fileType === "MazeData") {
                filePickerOptions.types.push({
                  description: 'VR maze data',
                  accept: {
                    'text/json': ".".concat(desiredExtension)
                  }
                });
              } else if (fileType === "VRImage") {
                filePickerOptions.types.push({
                  description: 'PNG image',
                  accept: {
                    'image/png': ".".concat(desiredExtension)
                  }
                });
              }
              _context11.prev = 15;
              // gets the file extension from the filename
              getFileExtension = function getFileExtension(filename) {
                var lastDotIndex = filename.lastIndexOf('.');
                if (lastDotIndex === -1) return ''; // No extension found
                return filename.substring(lastDotIndex + 1);
              }; // we want to make sure we use the name that the user provided for the new file reference
              _context11.next = 19;
              return window.showSaveFilePicker(filePickerOptions);
            case 19:
              fileHandle = _context11.sent;
              _context11.next = 22;
              return fileHandle.getFile();
            case 22:
              file = _context11.sent;
              fullName = file.name;
              name = fullName.substring(0, fullName.lastIndexOf(".")); // if a name does not exist, use the fullname instead for file reference
              name = name ? name : fullName;
              currentExtension = getFileExtension(fullName); // Sets extension to desired extension if a project extension is not given
              // Ensures the extension is added for file reference if none is provided from file picker
              currentExtension = currentExtension ? currentExtension : desiredExtension;
              hasUserPermissions = null;
              hasFolderPermissions = null;
              if (!(currentExtension === desiredExtension)) {
                _context11.next = 39;
                break;
              }
              _context11.next = 33;
              return this.verifyFilePermissions(fileHandle, fileType === "Project");
            case 33:
              hasUserPermissions = _context11.sent;
              _context11.next = 36;
              return this.verifyFolderPermission(fileHandle, hasUserPermissions);
            case 36:
              hasFolderPermissions = _context11.sent;
              _context11.next = 41;
              break;
            case 39:
              hasUserPermissions = true;
              hasFolderPermissions = true;
            case 41:
              log.debug("name of the file that is being saved", fullName);
              newFileRef = {
                name: name,
                pathData: fileHandle,
                fileExtension: currentExtension,
                hasWritePermission: hasUserPermissions,
                hasFolderWritePermissions: hasFolderPermissions
              };
              lastFile = fileHandle;
              return _context11.abrupt("return", newFileRef);
            case 47:
              _context11.prev = 47;
              _context11.t0 = _context11["catch"](15);
              if (!(_context11.t0 instanceof DOMException && _context11.t0.name === "AbortError" && _context11.t0.message.includes("The user aborted a request."))) {
                _context11.next = 55;
                break;
              }
              log.info("USER CANCELED: No save location has been selected. Modal to inform user displayed.");
              log.debug("Error Information: ", _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.name, _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
              // MODALCONTROL.alert(i18n.t("Canceled save"));
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSUserCanceledOperation();
            case 55:
              if (!(_context11.t0 instanceof DOMException && _context11.t0.name === "AbortError" && _context11.t0.message.includes("Failed to create or truncate file"))) {
                _context11.next = 63;
                break;
              }
              log.info("ERROR_SAVE_01: User does not have read/write access to desired folder they are trying to save to. Modal to inform user displayed.");
              log.debug("Error Information: ", _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.name, _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
              _context11.next = 60;
              return new Promise(function (resolve) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showNoWriteAccessPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("No write access save"), resolve, _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Save to New Location"), "ERROR_SAVE_01");
              });
            case 60:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSWriteError();
            case 63:
              if (!(_context11.t0 instanceof _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied || _context11.t0 instanceof DOMException && _context11.t0.name === "NotAllowedError")) {
                _context11.next = 69;
                break;
              }
              log.warn("ERROR_SAVE_02: User does not have permission to edit files");
              log.debug("Error Information: ", _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.name, _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
              _context11.next = 68;
              return new Promise(function (resolve) {
                var isDomError = _context11.t0 instanceof DOMException;
                var isBlockedError = isDomError && _context11.t0.message.includes("The request is not allowed by the user agent or the platform in the current context.");
                var details = isBlockedError ? "The request is not allowed by the user agent or the platform in the current context." : isDomError ? _context11.t0.message : undefined;
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showFileSystemBlockedPrompt(resolve, "ERROR_SAVE_02", details);
              });
            case 68:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessDenied(_context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
            case 69:
              log.info("ERROR_SAVE_FF: An unknown error has occurred while selecting save location. Modal to inform user displayed.");
              log.debug("Error Information: ", _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.name, _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showUnhandledErrorPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Unhandled save error"), "ERROR_SAVE_FF", _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.name, _context11.t0 === null || _context11.t0 === void 0 ? void 0 : _context11.t0.message);
              throw _context11.t0;
            case 73:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[15, 47]]);
      }));
      function selectCustomFileToSave(_x17, _x18) {
        return _selectCustomFileToSave.apply(this, arguments);
      }
      return selectCustomFileToSave;
    }()
  }, {
    key: "selectFileToOpen",
    value: function () {
      var _selectFileToOpen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(fileRef, extensions) {
        var useGivenFileRef,
          _args12 = arguments;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              useGivenFileRef = _args12.length > 2 && _args12[2] !== undefined ? _args12[2] : false;
              log.info("selectFileToOpen", fileRef, extensions);
              if (!extensions) {
                extensions = this.getOpenProjectExtensions();
              }

              // unlike the other file systems, we can use the same code for custom files for saving/loading projects, so we do that to reduce duplicate code
              return _context12.abrupt("return", this.selectCustomFileToOpen("Project", fileRef, extensions, useGivenFileRef));
            case 4:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function selectFileToOpen(_x19, _x20) {
        return _selectFileToOpen.apply(this, arguments);
      }
      return selectFileToOpen;
    }() // jsdoc in parent class
  }, {
    key: "selectFileToSave",
    value: function () {
      var _selectFileToSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(fileRef) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              log.info("selectFileToSave", fileRef);
              return _context13.abrupt("return", this.selectCustomFileToSave("Project", fileRef));
            case 2:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function selectFileToSave(_x21) {
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
      var _createFileReferenceFromURI = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(uri) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              log.info("createFileReferenceFromURI", uri);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 2:
            case "end":
              return _context14.stop();
          }
        }, _callee14);
      }));
      function createFileReferenceFromURI(_x22) {
        return _createFileReferenceFromURI.apply(this, arguments);
      }
      return createFileReferenceFromURI;
    }() //#region extensions
    //#endregion extensions
    /**
     * Verify the parent folder has proper permission to read or write 
     * to the file, if permission hasn't been granted, throw error.
     *
     * @param {FileSystemFileHandle} fileHandle File handle to check.
     * @param {boolean} hasUserPermissions True if user has granted write permission
     * @return {boolean} True if the user has granted read/write permission.
     */
  }, {
    key: "verifyFolderPermission",
    value: function () {
      var _verifyFolderPermission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(fileHandle, hasUserPermissions) {
        var writableStream;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              log.debug("verifyFolderPermission", hasUserPermissions);
              // TODO: verifyFolderPermission, will throw an error if the user has not granted write permission to the file.
              // this will result in the check always returning false.
              // Need to come up with a way to check the permission after the write permission is granted by the user.
              if (!hasUserPermissions) {
                _context15.next = 21;
                break;
              }
              _context15.prev = 2;
              _context15.next = 5;
              return fileHandle.createWritable({
                keepExistingData: true
              });
            case 5:
              writableStream = _context15.sent;
              log.debug("confirmed file writable via writable stream creation");
              _context15.next = 9;
              return writableStream.close();
            case 9:
              return _context15.abrupt("return", true);
            case 12:
              _context15.prev = 12;
              _context15.t0 = _context15["catch"](2);
              if (!(_context15.t0 instanceof DOMException && _context15.t0.name === "NoModificationAllowedError" && _context15.t0.message === "An attempt was made to write to a file or directory which could not be modified due to the state of the underlying filesystem.")) {
                _context15.next = 17;
                break;
              }
              log.error('unable to write to file due to folder permissions', _context15.t0, _context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.name, _context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.message);
              return _context15.abrupt("return", false);
            case 17:
              log.error("Failed to write to file while checking for file permission:", _context15.t0, _context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.name, _context15.t0 === null || _context15.t0 === void 0 ? void 0 : _context15.t0.message);
              return _context15.abrupt("return", false);
            case 19:
              _context15.next = 23;
              break;
            case 21:
              // If we do not have user permission, there is no reason to check folder permission
              // but we still want to set this to true so we do not show the modal and overwhelm the user
              log.info("The file has not been granted write access by the user");
              return _context15.abrupt("return", true);
            case 23:
            case "end":
              return _context15.stop();
          }
        }, _callee15, null, [[2, 12]]);
      }));
      function verifyFolderPermission(_x23, _x24) {
        return _verifyFolderPermission.apply(this, arguments);
      }
      return verifyFolderPermission;
    }()
    /**
     * Requests permission from the browser to access a file.
     *
     * @param fileHandle - The handle to the file for which permission is being requested.
     * @param options - The options for the permission request.
     * @returns A promise that resolves to `true` if permission is granted, otherwise `false`.
     * @throws {ErrorFSAccessDenied} If permission is not granted and the response time is less than 250 milliseconds, 
     * or if there is an error requesting permission.
     */
  }, {
    key: "requestBrowserFilePermission",
    value: (function () {
      var _requestBrowserFilePermission = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(fileHandle, options) {
        var startTime, returnedPermission, duration;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              log.info("requestBrowserFilePermission", options);
              // Check if we already have permission, if so, return true.
              startTime = Date.now();
              _context16.next = 4;
              return fileHandle.requestPermission(options);
            case 4:
              returnedPermission = _context16.sent;
              duration = Date.now() - startTime;
              if (!(returnedPermission === 'granted')) {
                _context16.next = 11;
                break;
              }
              log.debug("granted file permission");
              return _context16.abrupt("return", true);
            case 11:
              if (!(duration < 250)) {
                _context16.next = 14;
                break;
              }
              log.debug("permission is not granted and responded in", duration, "ms");
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSAccessBlocked("suspected file editing blocked");
            case 14:
              log.debug("permission is not granted");
              return _context16.abrupt("return", false);
            case 16:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function requestBrowserFilePermission(_x25, _x26) {
        return _requestBrowserFilePermission.apply(this, arguments);
      }
      return requestBrowserFilePermission;
    }()
    /**
     * Verify the user has granted permission to read or write to the file, if
     * permission hasn't been granted, request permission.
     *
     * @param {FileSystemFileHandle} fileHandle File handle to check.
     * @param {boolean} withWrite True if write permission should be checked.
     * @return {boolean} True if the user has granted read/write permission.
     */
    )
  }, {
    key: "verifyFilePermissions",
    value: (function () {
      var _verifyFilePermissions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(fileHandle, withWrite) {
        var options, continueWithoutPermission;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              log.info("verifyFilePermissions");
              options = {};
              if (withWrite) {
                options.writable = true;
                // For Chrome 86 and later...
                options.mode = 'readwrite';
              }

              // Check if we already have permission, if so, return true.
              _context17.next = 5;
              return fileHandle.queryPermission(options);
            case 5:
              _context17.t0 = _context17.sent;
              if (!(_context17.t0 === 'granted')) {
                _context17.next = 9;
                break;
              }
              log.debug("already has file permission");
              return _context17.abrupt("return", true);
            case 9:
              if (false) {}
              _context17.next = 12;
              return this.requestBrowserFilePermission(fileHandle, options);
            case 12:
              if (!_context17.sent) {
                _context17.next = 15;
                break;
              }
              log.debug("granted file permission after being requested");
              return _context17.abrupt("return", true);
            case 15:
              _context17.next = 17;
              return new Promise(function (resolve, reject) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_3__.MODALCONTROL.showCustomPrompt(_i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("file system access api autosave permission denied confirmation"), _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Continue Without Autosave"), _i18n_i18n__WEBPACK_IMPORTED_MODULE_4__.i18n.t("Try Again"), resolve, true);
              });
            case 17:
              continueWithoutPermission = _context17.sent;
              if (!continueWithoutPermission) {
                _context17.next = 20;
                break;
              }
              return _context17.abrupt("return", false);
            case 20:
              _context17.next = 9;
              break;
            case 22:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function verifyFilePermissions(_x27, _x28) {
        return _verifyFilePermissions.apply(this, arguments);
      }
      return verifyFilePermissions;
    }())
  }]);
}(_FileSystemBase__WEBPACK_IMPORTED_MODULE_1__.FileSystemBase);


/***/ })

}]);
//# sourceMappingURL=74b2d47867fe72fff884.src_FileSys_FileSystem_FileSystemAccess_ts.bundle.js.map