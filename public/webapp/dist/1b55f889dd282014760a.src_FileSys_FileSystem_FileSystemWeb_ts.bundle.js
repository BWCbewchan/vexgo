"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_FileSys_FileSystem_FileSystemWeb_ts"],{

/***/ "./src/FileSys/FileSystem/FileSystemWeb.ts":
/*!*************************************************!*\
  !*** ./src/FileSys/FileSystem/FileSystemWeb.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FileSystemWeb: () => (/* binding */ FileSystemWeb)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _FileSystemBase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FileSystemBase */ "./src/FileSys/FileSystem/FileSystemBase.ts");
/* harmony import */ var _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FileSystemErrors */ "./src/FileSys/FileSystem/FileSystemErrors.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../platformInfo */ "./src/platformInfo.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("FileSystemWeb");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("FileSystem");

// local imports



// global imports

/**
 * helper function to convert a uint8array to a base64 encoded string. This is
 * important as any encoding errors will result in a file that is not valid. We
 * can't just use a string since some binary values can be encoded correctly.
 * @param uint8Array the array to convert
 * @returns the base64 encoded string
 */
function uint8ArrayToBase64(uint8Array) {
  var binaryString = '';
  for (var i = 0; i < uint8Array.length; i++) {
    binaryString += String.fromCharCode(uint8Array[i]);
  }
  return btoa(binaryString);
}

/**
 * the class for all Web file system operations
 * 
 */
var FileSystemWeb = /*#__PURE__*/function (_FileSystemBase) {
  function FileSystemWeb() {
    _classCallCheck(this, FileSystemWeb);
    return _callSuper(this, FileSystemWeb, arguments);
  }
  _inherits(FileSystemWeb, _FileSystemBase);
  return _createClass(FileSystemWeb, [{
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
      return true;
    }

    // jsdoc in parent class
  }, {
    key: "saveAfterRename",
    get: function get() {
      return false;
    }

    // jsdoc in parent class
  }, {
    key: "savesToFileReference",
    get: function get() {
      return false;
    }
    //#endregion information

    //#region base operations
    // jsdoc in parent class
  }, {
    key: "readFile",
    value: function () {
      var _readFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(fileRef) {
        var file;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("readFile:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              file = fileRef.pathData;
              if (file) {
                _context.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
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
            case 6:
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
        var file;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.info("readFile:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              file = fileRef.pathData;
              if (file) {
                _context2.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
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
            case 6:
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
        var file;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.info("readFileAsBuffer:", fileRef);

              // This is different from most file systems since we have the actual file from the browser
              file = fileRef.pathData;
              if (file) {
                _context3.next = 5;
                break;
              }
              log.error("unable to read file. no path data in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
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
            case 6:
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
        var name, ext, filename, element, mimeType;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.info("writeFile:", "file reference:", fileRef, "content-length:", content === null || content === void 0 ? void 0 : content.length);
              name = fileRef === null || fileRef === void 0 ? void 0 : fileRef.name;
              if (name) {
                _context4.next = 5;
                break;
              }
              log.error("unable to write file. no name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              ext = fileRef === null || fileRef === void 0 ? void 0 : fileRef.fileExtension;
              if (ext) {
                _context4.next = 9;
                break;
              }
              log.error("unable to write file. no file extension the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 9:
              filename = "".concat(name, ".").concat(ext); // to "save" in the web we just download the file. to do this we create a link with the encoded
              // data then trigger a click to start the download.
              element = document.createElement("a"); // mimetype allows saving for extension without adding .txt extension
              mimeType = "application/x-vexcode-project"; // or any custom non-text type
              element.setAttribute("href", "".concat("data:" + mimeType, ";charset=utf-8,") + encodeURIComponent(content));
              element.setAttribute("download", filename);
              log.debug("Download filename:", filename);
              log.debug("Download content:", content);
              element.style.display = "none";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            case 20:
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
        var name, ext, filename, element, u8Content, b64Content;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.info("writeFileWithBuffer:", fileRef, content);
              name = fileRef === null || fileRef === void 0 ? void 0 : fileRef.name;
              if (name) {
                _context5.next = 5;
                break;
              }
              log.error("unable to write file. no name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              ext = fileRef === null || fileRef === void 0 ? void 0 : fileRef.fileExtension;
              if (ext) {
                _context5.next = 9;
                break;
              }
              log.error("unable to write file. no file extension the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 9:
              filename = "".concat(name, ".").concat(ext); // to "save" in the web we just download the file. to do this we create a link with the encoded
              // data then trigger a click to start the download.
              element = document.createElement("a");
              u8Content = new Uint8Array(content);
              b64Content = uint8ArrayToBase64(u8Content);
              element.setAttribute("href", "data:application/octet-stream;base64," + b64Content);
              element.setAttribute("download", filename);
              log.debug("Download filename:", filename);
              log.debug("Download content:", content);
              element.style.display = "none";
              document.body.appendChild(element);
              element.click();
              document.body.removeChild(element);
            case 21:
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
        var name, ext, newFileRef;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.info("renameFile:", fileRef, newName);
              name = fileRef.name;
              if (name) {
                _context6.next = 5;
                break;
              }
              log.error("unable to write file. no name in the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 5:
              ext = fileRef.fileExtension;
              if (ext) {
                _context6.next = 9;
                break;
              }
              log.error("unable to write file. no file extension the file ref", fileRef);
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileRefInvalidData();
            case 9:
              newFileRef = {
                name: newName,
                pathData: null,
                fileExtension: ext,
                hasWritePermission: true,
                hasFolderWritePermissions: true
              };
              return _context6.abrupt("return", newFileRef);
            case 11:
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
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported("File exists check operation is not supported on the current platform");
            case 1:
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
              log.warn("requestWritePermission should not get called for web");
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
      var _selectFileToOpen = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(fileRef, extensions) {
        var element, _extensions, output;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.info("selectFileToOpen", fileRef, extensions);

              // to get a file we need to use an HTML input for files
              element = document.createElement("input");
              element.setAttribute("type", "file");
              element.setAttribute("id", "browser-file-open");

              // some browsers support file filters...
              if (!_platformInfo__WEBPACK_IMPORTED_MODULE_3__.OSisiOS) {
                _extensions = this.getOpenProjectExtensions().map(function (ext) {
                  return ".".concat(ext);
                });
                element.setAttribute("accept", _extensions.join(", "));
              }

              // provided extensions/types should override
              if (extensions) {
                element.setAttribute("accept", extensions.map(function (ext) {
                  if (ext.includes("/") || ext.startsWith(".")) {
                    return ext;
                  }
                  return ".".concat(ext);
                }).join(", "));
              }

              // add the input to the dom so that it is not visible
              element.style.display = "none";
              document.body.appendChild(element);
              _context9.prev = 8;
              _context9.next = 11;
              return new Promise(function (resolve, reject) {
                element.addEventListener("change", function (event) {
                  // make sure we have a file.
                  var file = event.target.files[0];
                  if (!file) {
                    reject(new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSFileNotFound());
                    return;
                  }

                  // now that we know we have a file, we need to return it using resolve
                  var fullName = file.name;
                  var name = fullName.substring(0, fullName.lastIndexOf("."));
                  var newFileRef = {
                    name: name,
                    pathData: file,
                    fileExtension: fullName.substring(fullName.lastIndexOf(".") + 1),
                    hasWritePermission: true,
                    hasFolderWritePermissions: true
                  };
                  resolve(newFileRef);
                }, false);

                // trigger interaction with added input to show the dialog
                element.click();
              });
            case 11:
              output = _context9.sent;
              // now that the promise has resolved we can remove the input element that we added
              document.body.removeChild(element);
              return _context9.abrupt("return", output);
            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](8);
              // we don't want to keep the input around...
              document.body.removeChild(element);
              throw _context9.t0;
            case 20:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[8, 16]]);
      }));
      function selectFileToOpen(_x12, _x13) {
        return _selectFileToOpen.apply(this, arguments);
      }
      return selectFileToOpen;
    }() // jsdoc in parent class
  }, {
    key: "selectFileToSave",
    value: function () {
      var _selectFileToSave = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(fileRef) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.info("selectFileToSave", fileRef);

              // we can't select or change anything...
              return _context10.abrupt("return", fileRef);
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function selectFileToSave(_x14) {
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
      // we don't want to keep the path data for web since it is the actual file...
      fileRef.pathData = null;
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
              throw new _FileSystemErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFSOperationNotSupported();
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function createFileReferenceFromURI(_x15) {
        return _createFileReferenceFromURI.apply(this, arguments);
      }
      return createFileReferenceFromURI;
    }() //#region extensions
    //#endregion extensions
  }]);
}(_FileSystemBase__WEBPACK_IMPORTED_MODULE_1__.FileSystemBase);


/***/ })

}]);
//# sourceMappingURL=1b55f889dd282014760a.src_FileSys_FileSystem_FileSystemWeb_ts.bundle.js.map