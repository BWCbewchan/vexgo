"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_AIR_AIRVexSerial_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/AIR/AIRInterface.ts":
/*!********************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/AIR/AIRInterface.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIRInterface: () => (/* binding */ AIRInterface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _DownloadPlatformInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DownloadPlatformInterface */ "./src/HardwareInterface/DownloadPlatform/DownloadPlatformInterface.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIRInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering interface-name

// interface types/enums



// TODO: cleanup imports



var AIRInterface = /*#__PURE__*/function (_DownloadPlatformInte) {
  function AIRInterface() {
    var _this;
    _classCallCheck(this, AIRInterface);
    _this = _callSuper(this, AIRInterface);

    // preload the firmware to make checks faster
    _defineProperty(_this, "cachedServerFirmwareVersion", null);
    _this.cacheServerFirmwareVersion();
    return _this;
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported
  _inherits(AIRInterface, _DownloadPlatformInte);
  return _createClass(AIRInterface, [{
    key: "supportsUSBConnection",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsBLEConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsScreenCapture",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsTeamNumber",
    get: function get() {
      return false;
    }
  }, {
    key: "deviceName",
    get: function get() {
      return "Controller";
    }
  }, {
    key: "unlockBrain",
    value: function unlockBrain(unlockCode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion connection control

    //#region connection status
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      throw new Error("Method not implemented.");
    }
    //#endregion connection status

    //#region brain info
  }, {
    key: "setTeamNumber",
    value: function setTeamNumber(team) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "captureRobotScreen",
    value: function captureRobotScreen(progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "playSoundFile",
    value: function playSoundFile(fileName) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendRemoteTouch",
    value: function sendRemoteTouch(xPosition, yPosition) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "isBootloadMode",
    get: function get() {
      return false;
    }
    //#endregion brain info

    //#region program control
  }, {
    key: "downloadProjectAndRun",
    value:
    //#endregion program control

    //#region project downloads
    /**
     * This will attempt to download the specified program to a Brain. If the
     * code is C++, the code will be compiled first.
     * After the download is complete, the project will be run on the brain.
     * @param code the code to download
     * @param slot the slot to download the program to. (0-7)
     * @param projectName the name of the project to download
     * @param language the language of the project to download
     * @param progressCallback a callback to inform about how far along the download progress is
     * @param options various options to adjust the download process
     * @throws NoBrainConnectedError
     */
    function downloadProjectAndRun(code, slot, projectName, language, progressCallback, options) {
      log.debug("downloadProjectAndRun called");
      var defaultOptions = {
        autoRun: false
      };
      return this.downloadProject(code, slot, projectName, language, progressCallback, Object.assign(defaultOptions, options));
    }

    /**
     * This will attempt to download the specified program to the connected
     * brain. If the program is python, it will also make sure the VM is loaded
     * on the brain.
     * @param slot the slot to download the program to. (0-7)
     * @param projectName the name of the project to download
     * @param language the language of the program to download
     * @param data the compiled binaries to download
     * @param progressCallback a callback to inform about how far along the download progress is
     * @throws NoBrainConnectedError
     */
  }, {
    key: "runInitialCheck",
    value: function () {
      var _runInitialCheck = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(language) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.debug("runInitialCheck", language);
              return _context.abrupt("return", null);
            case 2:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function runInitialCheck(_x) {
        return _runInitialCheck.apply(this, arguments);
      }
      return runInitialCheck;
    }()
  }, {
    key: "forcePythonVMDownload",
    value: function () {
      var _forcePythonVMDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(progressCallback) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("forcePythonVMDownload");
              return _context2.abrupt("return", false);
            case 2:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function forcePythonVMDownload(_x2) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region AI Vision Sensor
    /**
     * Returns an interface to configure the embedded AI Vision Sensor when supported by the interface.
     * 
     */
  }, {
    key: "writeSoundFile",
    value:
    //#endregion AI Vision Sensor

    //#region file operations
    function writeSoundFile(filename, data, progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "readSoundFile",
    value: function readSoundFile(filename, progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "deleteSoundFile",
    value: function deleteSoundFile(filename) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "listSoundFiles",
    value: function listSoundFiles() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "writeImageFile",
    value: function writeImageFile(filename, data, progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "readImageFile",
    value: function readImageFile(filename, progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "deleteImageFile",
    value: function deleteImageFile(filename) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "listImageFiles",
    value: function listImageFiles() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion file operations

    //#region Python VM Checks
    /**
     * Only supported on IQNativeUSB
     * @throws OperationNotSupportedError
     */
  }, {
    key: "getPythonVMValid",
    value: function getPythonVMValid() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion Python VM Checks

    //#region compilers
    //#endregion compilers

    // none of the script commands methods are supported by IQ.
    //#region script commands
  }, {
    key: "executeScriptCommand",
    value: function executeScriptCommand(command) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "executeScriptCommands",
    value: function executeScriptCommands(commands) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "stopScriptEngine",
    value: function stopScriptEngine() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setConfigPreset",
    value: function setConfigPreset(preset) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setConfigForPort",
    value: function setConfigForPort(port, deviceType, flags) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "setEyeSensorMode",
    value: function setEyeSensorMode(mode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "clearPortEvents",
    value: function clearPortEvents(port) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion script commands

    // none of the remote control methods are supported by IQ.
    //#region remote control
  }, {
    key: "sendControllerButton",
    value: function sendControllerButton(command, buttonID, whenPressed) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendControllerJoystickPreset",
    value: function sendControllerJoystickPreset(newType, driveSensi, turnSensi) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "saveControllerConfig",
    value: function saveControllerConfig() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "sendControllerValues",
    value: function sendControllerValues(leftX, leftY, rightX, rightY, buttons) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion remote control

    //#region firmware
  }, {
    key: "getServerFirmwareVersion",
    value: function () {
      var _getServerFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              catalogURL = "https://content.vexrobotics.com/vexos/public/AIR/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context3.prev = 2;
              _context3.next = 5;
              return fetch(catalogURL, {
                cache: "no-cache"
              });
            case 5:
              catalogResponse = _context3.sent;
              _context3.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context3.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_AIR_/, "");
              return _context3.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromCatalogString(versionStr));
            case 14:
              _context3.prev = 14;
              _context3.t0 = _context3["catch"](2);
              log.warn(_context3.t0);
              return _context3.abrupt("return", null);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 14]]);
      }));
      function getServerFirmwareVersion() {
        return _getServerFirmwareVersion.apply(this, arguments);
      }
      return getServerFirmwareVersion;
    }()
  }, {
    key: "canUpdateFirmware",
    value: function canUpdateFirmware() {
      return this.supportsFirmwareUpdateRobot;
    }
  }, {
    key: "fetchAndParseCurrentFirmware",
    value: function () {
      var _fetchAndParseCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var data, response;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              data = "VEXOS_AIR_1_0_0_0";
              _context4.prev = 1;
              _context4.next = 4;
              return fetch("https://content.vexrobotics.com/vexos/public/AIR/catalog.txt", {
                cache: "no-cache"
              });
            case 4:
              response = _context4.sent;
              _context4.next = 7;
              return response.text();
            case 7:
              data = _context4.sent;
              _context4.next = 13;
              break;
            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](1);
              log.warn("Pulling firmware version error:", _context4.t0);
            case 13:
              data = data.split("_").splice(2, 5).join(".");
              return _context4.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(data));
            case 15:
            case "end":
              return _context4.stop();
          }
        }, _callee4, null, [[1, 10]]);
      }));
      function fetchAndParseCurrentFirmware() {
        return _fetchAndParseCurrentFirmware.apply(this, arguments);
      }
      return fetchAndParseCurrentFirmware;
    }()
  }, {
    key: "cacheServerFirmwareVersion",
    value: function cacheServerFirmwareVersion() {
      var _this2 = this;
      if (this.cachedServerFirmwareVersion === null) {
        this.fetchAndParseCurrentFirmware().then(function (result) {
          _this2.cachedServerFirmwareVersion = result;
        });
      }
    }
  }, {
    key: "getCahcedServerFirmwareVersion",
    value: function getCahcedServerFirmwareVersion() {
      if (!this.cachedServerFirmwareVersion) {
        this.cacheServerFirmwareVersion();
      }
      return this.cachedServerFirmwareVersion;
    }
  }, {
    key: "getUpdatedNeededFromServer",
    value: function getUpdatedNeededFromServer(server, brain) {
      log.debug("server:", server, "brain:", brain);
      if (server == null || brain.toUserString() === "0.0.0") {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
      }
      return server.compare(brain) > 0 ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
    }
    //#endregion firmware

    //#region User Port comms
  }]);
}(_DownloadPlatformInterface__WEBPACK_IMPORTED_MODULE_3__.DownloadPlatformInterface);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/AIR/AIRVexSerial.ts":
/*!********************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/AIR/AIRVexSerial.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIRVexSerial: () => (/* binding */ AIRVexSerial)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _AIRInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AIRInterface */ "./src/HardwareInterface/DownloadPlatform/AIR/AIRInterface.ts");
/* harmony import */ var _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../VexSerialDevices */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../VexSerialDevices/errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../VexSerialDevices/VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _VexSerialDevices_VexSerialDeviceAIR__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../VexSerialDevices/VexSerialDeviceAIR */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIR.ts");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIRVexSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums



// TODO: cleanup imports














var AIRVexSerial = /*#__PURE__*/function (_AIRInterface) {
  function AIRVexSerial() {
    var _this;
    _classCallCheck(this, AIRVexSerial);
    _this = _callSuper(this, AIRVexSerial);
    //#region "internal event callbacks"
    _defineProperty(_this, "FWUpdateProgressCB", null);
    _defineProperty(_this, "resolveFWUpdatePromise", null);
    // tslint:disable-next-line: variable-name
    _defineProperty(_this, "_serial", new _VexSerialDevices_VexSerialDeviceAIR__WEBPACK_IMPORTED_MODULE_16__.VexSerialDeviceAIR());
    _defineProperty(_this, "lastSerialState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    _defineProperty(_this, "onConnectedToInvalidPort", function () {
      var message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Incorrect WebSerial Port - AIR");
      _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebSerialPrompt(message, null, _this.onControlButtonClick);
    });
    _defineProperty(_this, "lastUserPortState", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Disconnected);
    console.log("AIRVexSerial.ts constructor loaded");
    log.debug("AIRInterface:", _typeof(_AIRInterface__WEBPACK_IMPORTED_MODULE_3__.AIRInterface));
    _this.onSerialStateChange = _this.onSerialStateChange.bind(_this);
    _this._serial.on("connectionStateChange", _this.onSerialStateChange);
    _this.onSerialStateChangeUserPort = _this.onSerialStateChangeUserPort.bind(_this);
    _this._serial.on("connectionStateChangeUserPort", _this.onSerialStateChangeUserPort);
    _this.onConnectedToInvalidPort = _this.onConnectedToInvalidPort.bind(_this);
    _this._serial.on("connectedToInvalidPort", _this.onConnectedToInvalidPort);
    _this.onControlButtonClick = _this.onControlButtonClick.bind(_this);
    _this.onInterfaceDeviceInfoUpdated = _this.onInterfaceDeviceInfoUpdated.bind(_this);
    _this._serial.on("deviceInfoUpdated", _this.onInterfaceDeviceInfoUpdated);
    _this._serial.on("receivedUserData", function (data) {
      log.debug("print to terminal:", data);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.TerminalDataUpdate", data);
    });
    _this._serial.getCurrentFirmwareVersion().then(function (version) {
      _this.currentFirmwareVersion = version;
      _this.triggerRobotInfoUpdate();
    });
    return _this;
  }
  _inherits(AIRVexSerial, _AIRInterface);
  return _createClass(AIRVexSerial, [{
    key: "onSerialStateChange",
    value: function onSerialStateChange(state) {
      log.debug("onSerialStateChange - new state:", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates[state]);
      if (this.lastSerialState === state) {
        log.debug("last serial state matches state, exit");
        return;
      }
      this.lastSerialState = state;
      log.debug("setting lastSerialState to", state);
      var newState = this.connectionStateUSB;
      log.debug("newState:", newState);

      // AIR should always have object detection on...
      // TODO: Don't forget this when we implement AI Vision
      // if (newState === DeviceConnectionState.Connected) {
      //   (this._serial as any)._FlagObjectDetectionEnabled = true;
      // }

      this.triggerUSBConnectionStateChange();
    }
  }, {
    key: "onInterfaceDeviceInfoUpdated",
    value: function onInterfaceDeviceInfoUpdated(data) {
      log.debug("onInterfaceDeviceInfoUpdated");
      this.triggerRobotInfoUpdate();
    }
  }, {
    key: "onControlButtonClick",
    value: function () {
      var _onControlButtonClick = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.openConnection(_types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB);
            case 2:
              return _context.abrupt("return", _context.sent);
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function onControlButtonClick() {
        return _onControlButtonClick.apply(this, arguments);
      }
      return onControlButtonClick;
    }() //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsAutomaticUSBConnection",
    get: function get() {
      return !!_platformInfo__WEBPACK_IMPORTED_MODULE_15__.PlatformIsElectron;
    }
  }, {
    key: "supportsAutomaticUSBConnectionUserPort",
    get: function get() {
      return !!_platformInfo__WEBPACK_IMPORTED_MODULE_15__.PlatformIsElectron;
    }
  }, {
    key: "supportsFirmwareUpdateRobot",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsFirmwareUpdateController",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsEditableBrainName",
    get: function get() {
      return true;
    }
  }, {
    key: "getSDKVersion",
    value: function getSDKVersion() {
      if (!this._serial.sdkVersion) {
        return ["SDK Unavailable"];
      }
      return ["SDK " + this._serial.sdkVersion.toUserString()];
    }
    //#endregion interface information

    //#region connection control
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(connectionType) {
        var message;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context2.next = 16;
                break;
              }
              if (this._serial.isSupported) {
                _context2.next = 4;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context2.abrupt("return");
            case 4:
              _context2.prev = 4;
              log.debug("Attempting to open serial port connection");
              _context2.next = 8;
              return this._serial.openConnection();
            case 8:
              _context2.next = 14;
              break;
            case 10:
              _context2.prev = 10;
              _context2.t0 = _context2["catch"](4);
              log.debug("Error attempting to open serial port connection: ", _context2.t0);
              // Error when a robot opens a port connection to a robot that is already connected through another VEX application
              if (_context2.t0 instanceof Error && _context2.t0.name === "NetworkError" && _context2.t0.message.includes("Failed to open serial port.")) {
                message = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Already Connected WebSerial Port", {
                  platform: _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("AIR")
                });
                _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.alert(message);
              }
            case 14:
              _context2.next = 17;
              break;
            case 16:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("Connection type not supported");
            case 17:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[4, 10]]);
      }));
      function openConnection(_x) {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
  }, {
    key: "openEstablishedConnection",
    value: function () {
      var _openEstablishedConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(connectionType) {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context3.next = 7;
                break;
              }
              if (this._serial.isSupported) {
                _context3.next = 4;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context3.abrupt("return");
            case 4:
              return _context3.abrupt("return", this._serial.openEstablishedConnection());
            case 7:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("Connection type not supported");
            case 8:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function openEstablishedConnection(_x2) {
        return _openEstablishedConnection.apply(this, arguments);
      }
      return openEstablishedConnection;
    }()
  }, {
    key: "openConnectionToRobot",
    value: function openConnectionToRobot(id) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "closeConnection",
    value: function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(connectionType) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              if (!(connectionType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.USB || connectionType === undefined)) {
                _context4.next = 9;
                break;
              }
              if (this._serial.isSupported) {
                _context4.next = 4;
                break;
              }
              log.error("WebSerial is not supported on this system");
              return _context4.abrupt("return");
            case 4:
              _context4.next = 6;
              return this._serial.closeConnection();
            case 6:
              return _context4.abrupt("return", true);
            case 9:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function closeConnection(_x3) {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }() //#endregion connection control
    //#region connection status
  }, {
    key: "connectionStateUSB",
    get: function get() {
      var state = this._serial.connectionState;
      var isConnected = state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateBLE",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      throw new Error("Method not implemented.");
    }
    //#endregion connection status

    //#region brain info
    /**
     * grabs the brain info from the USB connection. This will also return information even if not connected.
     * @returns the brain information for the USB connection
     */
  }, {
    key: "getRobotInfoUSB",
    value: function getRobotInfoUSB() {
      var tmpInfo = this._serial.getRobotInfo();
      var version = tmpInfo.brainVersion ? _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(tmpInfo.brainVersion.toInternalString()) : _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString("0.0.0");
      var hasBrainVersion = version && version.toInternalString() !== "0.0.0.b0";
      var deviceType = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXAIM;
      var info = {
        serial: tmpInfo.serial,
        robotFirmwareVersion: version,
        name: tmpInfo.name,
        team: tmpInfo.team,
        deviceType: deviceType,
        connectionMethod: tmpInfo.connectionType,
        brainConnected: tmpInfo.isBrainConnected,
        robotNeedsFirmwareUpdate: hasBrainVersion ? tmpInfo.updateNeededBrain ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate : tmpInfo.isDFUMode ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
        canUpdate: this.canUpdateFirmware(),
        battery: tmpInfo.battery,
        batteryLow: false
      };
      return info;
    }
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      // the web serial still returns data if not connected that is valid, so just use this if not connected to BLE
      return this.getRobotInfoUSB();
    }
  }, {
    key: "setBrainName",
    value: function () {
      var _setBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(name) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              log.debug("setBrainName - acquiring semaphore");
              _context5.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("setBrainName - acquired semaphore");

              // Update the name of the device through both USB and BLE to avoid issues with name caching. 
              if (!this.isUSBConnected) {
                _context5.next = 8;
                break;
              }
              _context5.next = 8;
              return this._serial.setBrainName(name);
            case 8:
              _context5.next = 13;
              break;
            case 10:
              _context5.prev = 10;
              _context5.t0 = _context5["catch"](0);
              throw _context5.t0;
            case 13:
              _context5.prev = 13;
              log.debug("setBrainName - release semaphore");
              this.adminSemaphore.release();
              return _context5.finish(13);
            case 17:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 10, 13, 17]]);
      }));
      function setBrainName(_x4) {
        return _setBrainName.apply(this, arguments);
      }
      return setBrainName;
    }()
  }, {
    key: "setTeamNumber",
    value: function () {
      var _setTeamNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(team) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("setTeamNumber");
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function setTeamNumber(_x5) {
        return _setTeamNumber.apply(this, arguments);
      }
      return setTeamNumber;
    }() //#endregion brain info
    //#region program control
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(slot) {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.prev = 0;
              log.debug("play - acquiring semaphore");
              _context7.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("play - acquired semaphore");
              if (!this.isUSBConnected) {
                _context7.next = 9;
                break;
              }
              _context7.next = 8;
              return this._serial.play(slot);
            case 8:
              return _context7.abrupt("return", _context7.sent);
            case 9:
              _context7.next = 14;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](0);
              throw _context7.t0;
            case 14:
              _context7.prev = 14;
              log.debug("play - release semaphore");
              this.adminSemaphore.release();
              return _context7.finish(14);
            case 18:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[0, 11, 14, 18]]);
      }));
      function play(_x6) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
  }, {
    key: "stop",
    value: function () {
      var _stop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              _context8.prev = 0;
              log.debug("stop - acquiring semaphore");
              _context8.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              log.debug("stop - acquired semaphore");
              if (!this.isUSBConnected) {
                _context8.next = 8;
                break;
              }
              _context8.next = 8;
              return this._serial.stop();
            case 8:
              return _context8.abrupt("return", true);
            case 11:
              _context8.prev = 11;
              _context8.t0 = _context8["catch"](0);
              throw _context8.t0;
            case 14:
              _context8.prev = 14;
              log.debug("stop - release semaphore");
              this.adminSemaphore.release();
              return _context8.finish(14);
            case 18:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[0, 11, 14, 18]]);
      }));
      function stop() {
        return _stop.apply(this, arguments);
      }
      return stop;
    }() //#endregion program control
    //#region project downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(slot, projectName, language, data, progressCallback) {
        var isBlocks, icon, ide, programInfo;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.info("downloadProgram", slot, projectName, language);
              isBlocks = _AppInfo__WEBPACK_IMPORTED_MODULE_8__.appState.getAppState().mode === "Blocks";
              icon = isBlocks ? _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodeBlocks : _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VEXcodeIcons.VEXcodePython;
              ide = isBlocks ? "Blocks" : "Python";
              programInfo = {
                slot: slot,
                name: projectName,
                description: "",
                icon: icon,
                ide: ide,
                ports: [],
                triports: [],
                controller1: null,
                language: language
              };
              _context9.prev = 5;
              log.debug("downloadProgram - acquiring semaphore");
              _context9.next = 9;
              return this.adminSemaphore.acquire();
            case 9:
              log.debug("downloadProgram - acquired semaphore");
              if (!this.isUSBConnected) {
                _context9.next = 14;
                break;
              }
              _context9.next = 13;
              return this._serial.downloadProgram(data, programInfo, function (downloadData) {
                var progress = downloadData.progress,
                  state = downloadData.state;
                progressCallback({
                  progress: progress,
                  step: state
                });
              });
            case 13:
              return _context9.abrupt("return", _context9.sent);
            case 14:
              _context9.next = 19;
              break;
            case 16:
              _context9.prev = 16;
              _context9.t0 = _context9["catch"](5);
              throw _context9.t0;
            case 19:
              _context9.prev = 19;
              log.debug("downloadProgram - release semaphore");
              this.adminSemaphore.release();
              return _context9.finish(19);
            case 23:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[5, 16, 19, 23]]);
      }));
      function downloadProgram(_x7, _x8, _x9, _x10, _x11) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
  }, {
    key: "forcePythonVMDownload",
    value: function () {
      var _forcePythonVMDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(progressCallback) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("forcePythonVMDownload");
            case 1:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function forcePythonVMDownload(_x12) {
        return _forcePythonVMDownload.apply(this, arguments);
      }
      return forcePythonVMDownload;
    }() //#endregion project downloads
    //#region AI Vision
  }, {
    key: "AIVisionSensorPort",
    get: function get() {
      // TODO: implement this when we have AI Vision info
      return undefined;
    }
  }, {
    key: "setTagDetection",
    value: function () {
      var _setTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(enabled) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.debug("setTagDetection - enabled:", enabled);
              _context11.prev = 1;
              _context11.next = 4;
              return this.adminSemaphore.acquire();
            case 4:
              if (!this.isUSBConnected) {
                _context11.next = 8;
                break;
              }
              _context11.next = 7;
              return this._serial.AISetTagDetection(enabled);
            case 7:
              return _context11.abrupt("return", _context11.sent);
            case 8:
              _context11.next = 13;
              break;
            case 10:
              _context11.prev = 10;
              _context11.t0 = _context11["catch"](1);
              throw _context11.t0;
            case 13:
              _context11.prev = 13;
              this.adminSemaphore.release();
              return _context11.finish(13);
            case 16:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this, [[1, 10, 13, 16]]);
      }));
      function setTagDetection(_x13) {
        return _setTagDetection.apply(this, arguments);
      }
      return setTagDetection;
    }()
    /**
     * This will attempt to grab the detected objects from the connected
     * brain. This will return a list of the detected objects.
     * 
     * @throws NoBrainConnectedError
     * @throws OperationNotSupportedError
     * @returns a list of the detected objects
     */
  }, {
    key: "grabDetectedObjects",
    value: (function () {
      var _grabDetectedObjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.debug("grabDetectedObjects called");
              if (!this.isUSBConnected) {
                _context12.next = 24;
                break;
              }
              if (!(this._serial.romBootloaderActive || this._serial.ramBootloaderActive)) {
                _context12.next = 5;
                break;
              }
              log.warn("grabDetectedObjects not supported when in bootloader mode");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("grabDetectedObjects with robot in bootloader mode");
            case 5:
              _context12.prev = 5;
              log.debug("grabDetectedObjects - acquiring semaphore");
              _context12.next = 9;
              return this.adminSemaphore.acquire();
            case 9:
              log.debug("grabDetectedObjects - acquired semaphore");
              _context12.next = 12;
              return this._serial.AIGetDetectedObjects();
            case 12:
              return _context12.abrupt("return", _context12.sent);
            case 15:
              _context12.prev = 15;
              _context12.t0 = _context12["catch"](5);
              throw _context12.t0;
            case 18:
              _context12.prev = 18;
              log.debug("grabDetectedObjects - release semaphore");
              this.adminSemaphore.release();
              return _context12.finish(18);
            case 22:
              _context12.next = 26;
              break;
            case 24:
              log.info("grabDetectedObjects not supported when not connected via USB");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("grabDetectedObjects");
            case 26:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[5, 15, 18, 22]]);
      }));
      function grabDetectedObjects() {
        return _grabDetectedObjects.apply(this, arguments);
      }
      return grabDetectedObjects;
    }() //#endregion AI Vision
    //#region file operations
    //#endregion file operations
    )
  }, {
    key: "getLowLevelLogger",
    value: function getLowLevelLogger() {
      return null;
    }

    //#region firmware
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(progress) {
        var updateProgressEvent, requestConnectEvent, continueReconnectResolver, reconnectCallback, progressHandler, reconnectHandler, msg1Key, msg2Key, platform;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              if (this.isUSBConnected) {
                _context13.next = 3;
                break;
              }
              log.warn("updateFirmware - aborting, not connected via USB");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("updateFirmware");
            case 3:
              _context13.prev = 3;
              log.debug("starting brain firmware update...");
              updateProgressEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              requestConnectEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_10__.DispatcherEvent();
              continueReconnectResolver = null;
              reconnectCallback = function reconnectCallback(continueUpdate) {
                if (continueReconnectResolver) {
                  continueReconnectResolver(continueUpdate);
                  continueReconnectResolver = null;
                } else {
                  log.warn("should not be here if the resolver was not set");
                  requestConnectEvent.fire({
                    isFirstConnect: false,
                    isDfu: false
                  });
                }
              };
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebBrainUpdateProgress(updateProgressEvent, requestConnectEvent, reconnectCallback);
              progressHandler = function progressHandler(state, percent, msg) {
                log.debug("progressHandler:", percent, _VexSerialDevices_VexSerialDevice__WEBPACK_IMPORTED_MODULE_14__.VEXAIRUpdateStates[state], msg);
                updateProgressEvent.fire({
                  state: state,
                  percent: percent,
                  msg: msg
                });
              };
              reconnectHandler = function reconnectHandler(isFirstConnect, isDfu) {
                return new Promise(function (resolve, reject) {
                  continueReconnectResolver = resolve;
                  requestConnectEvent.fire({
                    isFirstConnect: isFirstConnect,
                    isDfu: isDfu
                  });
                });
              };
              _context13.next = 14;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(5);
            case 14:
              _context13.prev = 14;
              _context13.next = 17;
              return this._serial.updateFirmware(progressHandler, reconnectHandler);
            case 17:
              return _context13.abrupt("return", true);
            case 20:
              _context13.prev = 20;
              _context13.t0 = _context13["catch"](14);
              throw _context13.t0;
            case 23:
              _context13.prev = 23;
              log.debug("updateFirmware - release semaphore");
              this.adminSemaphore.release();
              return _context13.finish(23);
            case 27:
              _context13.next = 39;
              break;
            case 29:
              _context13.prev = 29;
              _context13.t1 = _context13["catch"](3);
              log.error(_context13.t1);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.close();
              msg1Key = "WebSerial Update Failed - unknown error";
              msg2Key = "WebSerial Update Failed - retry message";
              if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.WebSerialUnsupportedError) {
                msg1Key = "WebSerial Update Failed - webserial not supported";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.NoBrainConnectedError) {
                msg1Key = "WebSerial Update Failed - no device";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.OperationNotSupportedError) {
                msg1Key = "WebSerial Update Failed - not supported";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainGolden) {
                msg1Key = "WebSerial Update Failed - recovery update failed";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingBrainBoot) {
                msg1Key = "WebSerial Update Failed - main update failed";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioApplication) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioBootloader) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              } else if (_context13.t1 instanceof _VexSerialDevices_errors__WEBPACK_IMPORTED_MODULE_11__.ErrorUpdatingAIMRadioPartitionTable) {
                msg1Key = "WebSerial Update Failed - AIM radio update failed";
              }
              platform = _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(_targetPlatform__WEBPACK_IMPORTED_MODULE_12__.currentTargetName);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_6__.MODALCONTROL.showWebSerialUpdateError(_i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg1Key, {
                platform: platform,
                device: platform === "AIM" ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Robot") : _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t("Brain")
              }), msg2Key ? _i18n_i18n__WEBPACK_IMPORTED_MODULE_9__.i18n.t(msg2Key, {
                platform: platform
              }) : null, "https://kb.vex.com/hc/en-us/articles/40949543141908-Troubleshooting-Connecting-to-VEXcode-AIR");
              return _context13.abrupt("return", false);
            case 39:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[3, 29], [14, 20, 23, 27]]);
      }));
      function updateFirmware(_x14) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }()
  }, {
    key: "setFirmwareChannel",
    value: function () {
      var _setFirmwareChannel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(channel) {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.next = 2;
              return this._serial.setFirmwareChannel(channel);
            case 2:
              this._serial.setSDKManifestChannel(channel == _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VEXosFirmwareChannelType.BETA ? "beta" : "prod");
              this.triggerRobotInfoUpdate();
            case 4:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function setFirmwareChannel(_x15) {
        return _setFirmwareChannel.apply(this, arguments);
      }
      return setFirmwareChannel;
    }()
  }, {
    key: "checkDeviceFirmware",
    value: function () {
      var _checkDeviceFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(device) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              log.warn("checkDeviceFirmware not implemented for AIRVexSerial");
            case 1:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function checkDeviceFirmware(_x16) {
        return _checkDeviceFirmware.apply(this, arguments);
      }
      return checkDeviceFirmware;
    }() //#endregion firmware
    //#region User Port comms
  }, {
    key: "openConnectionUserPort",
    value: function () {
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(connectionType) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              return _context16.abrupt("return", this._serial.openConnectionUserPort());
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function openConnectionUserPort(_x17) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(connectionType) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              _context17.next = 2;
              return this._serial.closeConnectionUserPort();
            case 2:
              return _context17.abrupt("return", true);
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function closeConnectionUserPort(_x18) {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
  }, {
    key: "connectionStateUserPortUSB",
    get: function get() {
      var state = this._serial.connectionStateUserPort;
      var isConnected = this.isBrainConnected() && state === _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates.Connected;
      return isConnected ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateUserPortBLE",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "sendDataUserPort",
    value: function () {
      var _sendDataUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(data) {
        var isConnected;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              isConnected = this.isUSBConnectedUserPort;
              if (isConnected) {
                _context18.next = 3;
                break;
              }
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("sendDataUserPort requires connection to the user port");
            case 3:
              _context18.prev = 3;
              log.debug("sendDataUserPort - acquiring semaphore");
              _context18.next = 7;
              return this.adminSemaphore.acquire();
            case 7:
              log.debug("sendDataUserPort - acquired semaphore");
              if (!this.isUSBConnectedUserPort) {
                _context18.next = 18;
                break;
              }
              _context18.next = 11;
              return this._serial.isProjectRunning();
            case 11:
              if (_context18.sent) {
                _context18.next = 17;
                break;
              }
              // start the REPL program if no program is running
              log.debug("sendDataUserPort - starting REPL program");
              _context18.next = 15;
              return this._serial.runSystemProgram(2);
            case 15:
              _context18.next = 17;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_13__.waitms)(100);
            case 17:
              this._serial.sendDataUserPort(data);
            case 18:
              _context18.next = 23;
              break;
            case 20:
              _context18.prev = 20;
              _context18.t0 = _context18["catch"](3);
              throw _context18.t0;
            case 23:
              _context18.prev = 23;
              log.debug("sendDataUserPort - release semaphore");
              this.adminSemaphore.release();
              return _context18.finish(23);
            case 27:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[3, 20, 23, 27]]);
      }));
      function sendDataUserPort(_x19) {
        return _sendDataUserPort.apply(this, arguments);
      }
      return sendDataUserPort;
    }()
  }, {
    key: "onSerialStateChangeUserPort",
    value: function onSerialStateChangeUserPort(state) {
      log.debug("onSerialStateChange - new state:", _VexSerialDevices__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceConnectionStates[state]);
      if (this.lastUserPortState === state) {
        return;
      }
      this.lastUserPortState = state;
      var newState = this.connectionStateUserPort;
      this.fireEvent("connectionStateChange", newState);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.ConnectionStateChangeUserPort", newState);
    }

    //#endregion User Port comms

    //#region events
  }, {
    key: "onHardwareTargetChange",
    value: function onHardwareTargetChange(newTarget) {
      // this does not do anything for AIM....
    }

    /**
     * this should get called any time the cached sensor values need to be reset.
     *
     * for example:
     * * when connecting to a brain
     * * when a connection is lost
     */
  }, {
    key: "resetStatusValues",
    value: function resetStatusValues() {
      // TODO: implement this when we have sensor values
      // SensorHelpers.resetStatusValues();
    }
    //#endregion
  }]);
}(_AIRInterface__WEBPACK_IMPORTED_MODULE_3__.AIRInterface);


/***/ })

}]);
//# sourceMappingURL=3937ac18fb519a8f3f94.src_HardwareInterface_DownloadPlatform_AIR_AIRVexSerial_ts.bundle.js.map