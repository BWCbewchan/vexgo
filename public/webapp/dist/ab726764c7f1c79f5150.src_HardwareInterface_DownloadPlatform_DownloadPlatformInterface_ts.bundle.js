"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_DownloadPlatformInterface_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/DownloadPlatformInterface.ts":
/*!*****************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/DownloadPlatformInterface.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadPlatformInterface: () => (/* binding */ DownloadPlatformInterface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Compiler/compiler */ "./src/Compiler/compiler.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _HWInterfaceBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../HWInterfaceBase */ "./src/HardwareInterface/HWInterfaceBase.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../helpers */ "./src/HardwareInterface/helpers.ts");
/* harmony import */ var _layout_Paths__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../layout/Paths */ "./src/layout/Paths.tsx");
/* harmony import */ var _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../StorageInterface/VEXcodeLocalStorage */ "./src/StorageInterface/VEXcodeLocalStorage.ts");
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
function _superPropGet(t, o, e, r) { var p = _get(_getPrototypeOf(1 & r ? t.prototype : t), o, e); return 2 & r && "function" == typeof p ? function (t) { return p.apply(e, t); } : p; }
function _get() { return _get = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (e, t, r) { var p = _superPropBase(e, t); if (p) { var n = Object.getOwnPropertyDescriptor(p, t); return n.get ? n.get.call(arguments.length < 3 ? e : r) : n.value; } }, _get.apply(null, arguments); }
function _superPropBase(t, o) { for (; !{}.hasOwnProperty.call(t, o) && null !== (t = _getPrototypeOf(t));); return t; }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("DownloadPlatformInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering interface-name

// interface types/enums



// TODO: cleanup imports









/** 
 * How many ms the download dialog should be shown for at a minimum before
 * closing it.
 * 
 * If the download is faster than this, the dialog will still be shown for this
 * amount of time. If the download takes longer than this, the dialog will be
 * shown for the full download time without adding any extra time.
 */
var MIN_DOWNLOAD_DIALOG_TIME = 3000;
var pako = __webpack_require__(/*! pako */ "./node_modules/pako/index.js");
var DownloadPlatformInterface = /*#__PURE__*/function (_HWInterfaceBase) {
  function DownloadPlatformInterface() {
    var _this;
    _classCallCheck(this, DownloadPlatformInterface);
    _this = _callSuper(this, DownloadPlatformInterface);
    _defineProperty(_this, "downloadCancelled", false);
    _defineProperty(_this, "CurrentFirmwarePreviousFetch", null);
    _defineProperty(_this, "CurrentFirmwarePreviousFetchDate", null);
    _defineProperty(_this, "CurrentFirmwareIsFetching", false);
    _defineProperty(_this, "firmwareFetchHandlers", []);
    return _this;
  }

  /**
   * Cancels an ongoing download operation
   */
  _inherits(DownloadPlatformInterface, _HWInterfaceBase);
  return _createClass(DownloadPlatformInterface, [{
    key: "cancelDownload",
    value: function cancelDownload() {
      log.info("Download cancelled by user");
      this.downloadCancelled = true;
    }

    //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "supportsParallelConnections",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsUserPort",
    get: function get() {
      // Everything that supports project downloads does support the user port
      return true;
    }
  }, {
    key: "supportsProjectDownload",
    get: function get() {
      // This is a download project interface... if it does not support
      // downloading projects, there is a problem....
      return true;
    }
  }, {
    key: "supportsProjectStreaming",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsRemoteProjectControl",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsEmbeddedAIVision",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsControllerConnections",
    get: function get() {
      return true;
    }
  }, {
    key: "deviceName",
    get: function get() {
      return "Brain";
    }
  }, {
    key: "unlockBrain",
    value:
    /**
     * This will send the unlock code to the connected brain.
     * @param unlockCode the 4 digit unlock code
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
    function unlockBrain(unlockCode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    // override the HWInterfaceBase method to trigger the BLE connection state change
  }, {
    key: "triggerBLEConnectionStateChange",
    value: function triggerBLEConnectionStateChange() {
      // check for the change before calling the parent version
      var newState = this.connectionStateBLE;
      var differentState = this.lastBLEConnectionState !== newState;
      // call the parent so that it still uses that code
      _superPropGet(DownloadPlatformInterface, "triggerBLEConnectionStateChange", this, 3)([]);
      // run the event now if needed...
      if (differentState) {
        this.triggerConnectionUpdateUserPort();
      }
    }
    //#endregion connection control

    //#region connection status
  }, {
    key: "connectionState",
    get: function get() {
      var USBstate = this.connectionStateUSB;
      var BLEstate = this.connectionStateBLE;

      // We need to have some extra logic here compared to the other platforms.
      // Since we have 2 parallel connections, we need to figure out the current
      // state. Since different states have priority over others, we check the
      // states in the order of priority. so if either USB or BLE is connected,
      // we return connected. This is so that the rest of VEXcode does not need
      // to know about which connection is used or the stat of each connection
      // option, but still show the overall status.
      if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected || BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
      } else if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting || BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
      } else if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected && BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
      } else if (BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Scanning) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Scanning;
      } else if (BLEstate > USBstate) {
        return BLEstate;
      } else {
        return USBstate;
      }
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
     * Get the information for the currently connected brain.
     * @returns the connected brain information or null if no brain is connected
     * @throws NoBrainConnectedError
     */
  }, {
    key: "isBrainConnected",
    value:
    // TODO: is this actually needed with the new interface?
    function isBrainConnected() {
      return this.connectionState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }
  }, {
    key: "downloadProject",
    value: //#endregion program control
    //#region project downloads
    /**
     * This will attempt to download the specified program to a Brain. If the
     * code is C++, the code will be compiled first.
     * @param code the code to download
     * @param slot the slot to download the program to. (0-7)
     * @param projectName the name of the project to download
     * @param language the language of the project to download
     * @param progressCallback a callback to inform about how far along the download progress is
     * @param options various options to adjust the download process
     * @throws NoBrainConnectedError
     */
    function () {
      var _downloadProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(code, slot, projectName, language, progressCallback, options) {
        var _this2 = this;
        var initialCheck, programDownloadProgressEvent, cancelCallback, startTime, compileResult, compilerCode, internalProgressCallback, project, downloadResult, elapsedTime, delay, isMute, audio, downloadAudioPath;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("downloadProject", slot, projectName, language);

              // Reset the cancellation flag at the start of each download (AIM only)
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM) {
                this.downloadCancelled = false;
              }
              _context.next = 4;
              return this.runInitialCheck(language);
            case 4:
              initialCheck = _context.sent;
              if (!initialCheck) {
                _context.next = 7;
                break;
              }
              return _context.abrupt("return", initialCheck);
            case 7:
              if (!code) {
                _context.next = 68;
                break;
              }
              programDownloadProgressEvent = new _dispatcher__WEBPACK_IMPORTED_MODULE_4__.DispatcherEvent(); // Only show cancel button for AIM
              cancelCallback = _targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM ? function () {
                return _this2.cancelDownload();
              } : undefined;
              _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.showDownloadProgress(programDownloadProgressEvent, language, cancelCallback);

              // store the starting time so we can make sure the dialog is shown for a
              // minimum amount of time.
              startTime = Date.now();
              _context.next = 14;
              return this.compileProject(code, slot, projectName, language, options);
            case 14:
              compileResult = _context.sent;
              compilerCode = compileResult.code;
              if (!(compilerCode !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.success)) {
                _context.next = 33;
                break;
              }
              log.warn("unable to download due to compiler/linter error -", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode[compilerCode]);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.close();
              if (!(compilerCode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.notReachable)) {
                _context.next = 23;
                break;
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.notReachable
              });
            case 23:
              if (!(compilerCode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerTimeout)) {
                _context.next = 27;
                break;
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.compilerTimeout
              });
            case 27:
              if (!(compilerCode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.shellDisabled)) {
                _context.next = 31;
                break;
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.shellDisabled
              });
            case 31:
              if (!(compilerCode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerError)) {
                _context.next = 33;
                break;
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.compilerError,
                data: compileResult.logs
              });
            case 33:
              if (!(_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM && this.downloadCancelled)) {
                _context.next = 36;
                break;
              }
              log.info("Download cancelled by user after compilation");
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.cancelled
              });
            case 36:
              internalProgressCallback = function internalProgressCallback(data) {
                programDownloadProgressEvent.fire(data);
                if (progressCallback) {
                  progressCallback(data.progress);
                }
              };
              if (language === "python" && !_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsIQ && !_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIR) {
                log.debug("Compressing program with GZIP");
                project = pako.gzip(compileResult.bin);
              } else {
                log.debug("Skipping GZIP compression");
                project = compileResult.bin;
              }
              _context.prev = 38;
              _context.next = 41;
              return this.downloadProgram(slot, projectName, language, project, internalProgressCallback);
            case 41:
              downloadResult = _context.sent;
              log.debug("Download completed successfully");
              _context.next = 51;
              break;
            case 45:
              _context.prev = 45;
              _context.t0 = _context["catch"](38);
              log.error("Download error caught:", _context.t0);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.close();

              // Show error message to user (AIM only)
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM) {
                setTimeout(function () {
                  _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.showDownloadErrorPrompt();
                }, 100);
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.error
              });
            case 51:
              if (!(_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM && this.downloadCancelled)) {
                _context.next = 55;
                break;
              }
              log.info("Download cancelled by user during download");
              _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.close();
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.cancelled
              });
            case 55:
              // make sure the download dialog is shown for at min time
              elapsedTime = Date.now() - startTime;
              if (!(elapsedTime < MIN_DOWNLOAD_DIALOG_TIME)) {
                _context.next = 60;
                break;
              }
              delay = MIN_DOWNLOAD_DIALOG_TIME - elapsedTime;
              _context.next = 60;
              return new Promise(function (resolve) {
                return setTimeout(resolve, delay);
              });
            case 60:
              // now that we know the dialog has been shown for at least 5 seconds, we can close the dialog
              _widget_Modal__WEBPACK_IMPORTED_MODULE_5__.MODALCONTROL.close();

              // process the download result...
              if (downloadResult) {
                _context.next = 64;
                break;
              }
              log.warn("download failed");
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.error
              });
            case 64:
              log.info("download success");
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM) {
                isMute = _StorageInterface_VEXcodeLocalStorage__WEBPACK_IMPORTED_MODULE_10__.storageInterface.readKey("blockly_mute");
                if (isMute === "false") {
                  audio = new Audio(); // Change the download audio path when a download sound has been finalized
                  downloadAudioPath = "".concat(_layout_Paths__WEBPACK_IMPORTED_MODULE_9__.STATIC, "/sounds/download_sounds/downloadSuccess.wav");
                  audio.src = downloadAudioPath;
                  audio.play();
                }
              }
              if (options && options.autoRun) {
                this.play(slot);
              }
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.success,
                data: compileResult.logs
              });
            case 68:
              log.warn("no code to download...");
              return _context.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.error
              });
            case 70:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[38, 45]]);
      }));
      function downloadProject(_x, _x2, _x3, _x4, _x5, _x6) {
        return _downloadProject.apply(this, arguments);
      }
      return downloadProject;
    }()
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
  }, {
    key: "supportsPythonVM",
    get: function get() {
      return true;
    }

    // TODO: this is only used by NWJS interfaces. it should be removed with the rest of the NWJS code...
    /**
     * used to check if the python VM is good and can get updated
     * @returns null if no issues or the IDownloadResult to pass back if there is an issue
     */
  }, {
    key: "compileProject",
    value: //#endregion file operations
    //#region compilers
    /**
     * compile the provided source code and return the result.
     * @param code the code to compile.
     * @param slot the slot to compile the program for. (not used for V5)
     * @param projectName the name of the project to compile
     * @param language the language of the project to compile
     * @param options various options to adjust the compilation process
     */
    function () {
      var _compileProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code, slot, projectName, language, options) {
        var specialCharacters, output, logs, binName, compilerResult, errorLog, binData, _compilerResult, _errorLog, _binData;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              specialCharacters = "/^`{}\"'|\\><;:,!@#$%\^&)(+=._-]$/?";
              output = null;
              logs = null;
              if (!(language === "cpp")) {
                _context2.next = 59;
                break;
              }
              binName = projectName.replace(/ /g, "");
              binName.split("").forEach(function (character) {
                if (specialCharacters.includes(character)) {
                  binName = binName.replace(character, "");
                }
              });
              log.info("compiling cpp code. options:", options);
              compilerResult = null;
              if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsIQ) {
                _context2.next = 20;
                break;
              }
              if (!(options.generation === "Second")) {
                _context2.next = 15;
                break;
              }
              _context2.next = 12;
              return _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.compileIQ2Program(binName, code);
            case 12:
              compilerResult = _context2.sent;
              _context2.next = 18;
              break;
            case 15:
              _context2.next = 17;
              return _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.compileIQProgram(binName, code, slot + 1, options.hasController);
            case 17:
              compilerResult = _context2.sent;
            case 18:
              _context2.next = 29;
              break;
            case 20:
              if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsEXP) {
                _context2.next = 26;
                break;
              }
              _context2.next = 23;
              return _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.compileEXPProgram(binName, code);
            case 23:
              compilerResult = _context2.sent;
              _context2.next = 29;
              break;
            case 26:
              _context2.next = 28;
              return _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.compileV5Program(binName, code);
            case 28:
              compilerResult = _context2.sent;
            case 29:
              log.info("checking compiler result", compilerResult);
              if (!(compilerResult.err < 0)) {
                _context2.next = 52;
                break;
              }
              log.debug("compiler returned with error code?", compilerResult.err);
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasTimeout(compilerResult)) {
                _context2.next = 37;
                break;
              }
              log.warn("compiler failed - process timed out");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerTimeout
              });
            case 37:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasNotReachable(compilerResult)) {
                _context2.next = 42;
                break;
              }
              log.warn("compiler failed - could not reach cloud compiler");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.notReachable
              });
            case 42:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.shellDisabledResult(compilerResult)) {
                _context2.next = 47;
                break;
              }
              log.warn("compiler failed - shell disabled");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.shellDisabled
              });
            case 47:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasCompilationError(compilerResult)) {
                _context2.next = 52;
                break;
              }
              errorLog = [];
              if (compilerResult.data && Array.isArray(compilerResult.data) && compilerResult.data.length > 0) {
                errorLog = compilerResult.data;
              } else if (compilerResult.msg) {
                errorLog = [compilerResult.msg];
              }
              log.warn("compiler failed - compilation error:", errorLog);
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerError,
                logs: errorLog
              });
            case 52:
              log.debug("compiler returned with warnings?");
              if (compilerResult.output && Array.isArray(compilerResult.output) && compilerResult.output.length > 0) {
                logs = compilerResult.output;
              }
              log.info("compilation success");
              binData = (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.stringToArrayBuffer)(atob(compilerResult.data));
              output = {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.success,
                bin: binData,
                logs: logs
              };
              _context2.next = 95;
              break;
            case 59:
              if (!(language === "python")) {
                _context2.next = 95;
                break;
              }
              if (options.skipErrorCheck) {
                _context2.next = 92;
                break;
              }
              log.info("linting python code");
              _context2.next = 64;
              return _Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.lintPythonProgram(projectName, code);
            case 64:
              _compilerResult = _context2.sent;
              if (!(_compilerResult.err < 0)) {
                _context2.next = 89;
                break;
              }
              log.debug("linter returned with error code?", _compilerResult.err);
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasTimeout(_compilerResult)) {
                _context2.next = 72;
                break;
              }
              log.warn("linter failed - process timed out");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerTimeout
              });
            case 72:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasNotReachable(_compilerResult)) {
                _context2.next = 77;
                break;
              }
              log.warn("linter failed - could not reach cloud compiler");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.notReachable
              });
            case 77:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.shellDisabledResult(_compilerResult)) {
                _context2.next = 82;
                break;
              }
              log.warn("linter failed - shell disabled");
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.shellDisabled
              });
            case 82:
              if (!_Compiler_compiler__WEBPACK_IMPORTED_MODULE_3__.wasCompilationError(_compilerResult)) {
                _context2.next = 87;
                break;
              }
              _errorLog = [];
              if (_compilerResult.data && Array.isArray(_compilerResult.data) && _compilerResult.data.length > 0) {
                _errorLog = _compilerResult.data;
              } else if (_compilerResult.msg) {
                _errorLog = [_compilerResult.msg];
              }
              log.warn("compiler failed - compilation error:", _errorLog);
              return _context2.abrupt("return", {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.compilerError,
                logs: _errorLog
              });
            case 87:
              _context2.next = 90;
              break;
            case 89:
              log.info("linting done");
            case 90:
              _context2.next = 93;
              break;
            case 92:
              log.info("skipping python code linting");
            case 93:
              _binData = (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.stringToArrayBuffer)(code);
              output = {
                code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.CompilerResultCode.success,
                bin: _binData,
                logs: logs
              };
            case 95:
              log.info("compilation result:", output);
              return _context2.abrupt("return", output);
            case 97:
            case "end":
              return _context2.stop();
          }
        }, _callee2);
      }));
      function compileProject(_x7, _x8, _x9, _x10, _x11) {
        return _compileProject.apply(this, arguments);
      }
      return compileProject;
    }() //#endregion compilers
    //#region script commands
  }, {
    key: "doesFirmwareUpdateOnConnect",
    value:
    /**
     * Use this to check if the interface will automatically try to update
     * the firmware for a brain that connects
     */
    function doesFirmwareUpdateOnConnect() {
      return false;
    }

    /**
     * Call this to update the firmware of the connected brain.
     * @param progress a callback that can return the update progress
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "updateControllerFirmware",
    value:
    /**
     * Call this to update the firmware of the connected controller.
     * @param progress a callback that can return the update progress
     * @throws OperationNotSupportedError
     */
    function updateControllerFirmware(progress, isDFU) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    /**
     * this will find the current VEXos firmware version from the server
     * @returns
     */
  }, {
    key: "getCurrentFirmware",
    value: (function () {
      var _getCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this3 = this;
        var elapsedTime;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.CurrentFirmwarePreviousFetch) {
                _context3.next = 4;
                break;
              }
              elapsedTime = (Date.now() - this.CurrentFirmwarePreviousFetchDate) / 1000;
              if (!(elapsedTime < 60)) {
                _context3.next = 4;
                break;
              }
              return _context3.abrupt("return", this.CurrentFirmwarePreviousFetch);
            case 4:
              if (!this.CurrentFirmwareIsFetching) {
                _context3.next = 8;
                break;
              }
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                var _handler = function handler(version) {
                  _this3.removeFirmwareFetchHandler(_handler);
                  resolve(version);
                };
                _this3.addFirmwareFetchHandler(_handler);
              }));
            case 8:
              return _context3.abrupt("return", this.fetchCurrentFirmware());
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function getCurrentFirmware() {
        return _getCurrentFirmware.apply(this, arguments);
      }
      return getCurrentFirmware;
    }())
  }, {
    key: "fetchCurrentFirmware",
    value: function () {
      var _fetchCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var newFirmwareVersion;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("pulling version from server");
              this.CurrentFirmwareIsFetching = true;
              _context4.next = 4;
              return this.fetchAndParseCurrentFirmware();
            case 4:
              newFirmwareVersion = _context4.sent;
              this.CurrentFirmwarePreviousFetch = newFirmwareVersion;
              this.CurrentFirmwarePreviousFetchDate = Date.now();
              this.CurrentFirmwareIsFetching = false;
              this.callFirmwareFetchHandlers(this.CurrentFirmwarePreviousFetch);
              return _context4.abrupt("return", this.CurrentFirmwarePreviousFetch);
            case 10:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function fetchCurrentFirmware() {
        return _fetchCurrentFirmware.apply(this, arguments);
      }
      return fetchCurrentFirmware;
    }()
  }, {
    key: "addFirmwareFetchHandler",
    value: function addFirmwareFetchHandler(callback) {
      if (this.firmwareFetchHandlers.indexOf(callback) >= 0) {
        return;
      }
      this.firmwareFetchHandlers.push(callback);
    }
  }, {
    key: "removeFirmwareFetchHandler",
    value: function removeFirmwareFetchHandler(callback) {
      var i = this.firmwareFetchHandlers.indexOf(callback);
      if (i < 0) {
        throw new Error("Unknown callback.");
      }
      this.firmwareFetchHandlers.splice(i, 1);
    }
  }, {
    key: "callFirmwareFetchHandlers",
    value: function callFirmwareFetchHandlers(version) {
      if (this.firmwareFetchHandlers) {
        this.firmwareFetchHandlers.forEach(function (callback) {
          callback(version);
        });
      }
    }

    /**
     * will pull the firmware version from the server
     * This should be per target
     */
  }, {
    key: "setFirmwareChannel",
    value: function setFirmwareChannel(channel) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError("setFirmwareChannel not supported");
    }
  }, {
    key: "connectionStateUserPort",
    get: function get() {
      var USBstate = this.connectionStateUserPortUSB;
      var BLEstate = this.connectionStateUserPortBLE;

      // We need to have some extra logic here compared to the other platforms.
      // Since we have 2 parallel connections, we need to figure out the current
      // state. Since different states have priority over others, we check the
      // states in the order of priority. so if either USB or BLE is connected,
      // we return connected. This is so that the rest of VEXcode does not need
      // to know about which connection is used or the stat of each connection
      // option, but still show the overall status.
      if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected || BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
      } else if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting || BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connecting;
      } else if (USBstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected && BLEstate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
      } else {
        return USBstate;
      }
    }
  }, {
    key: "onHardwareTargetChange",
    value:
    //#endregion User Port comms

    //#region events
    function onHardwareTargetChange(newTarget) {
      // for most cases, if we change to the arm target, we should just disconnect
      // from the brain. the exceptions are for device manager connections. Those
      // interfaces will override this code.
      if (newTarget === "arm" && this.isBrainConnected()) {
        this.closeConnection();
      }
    }
    //#endregion

    //#region low-level logger
  }]);
}(_HWInterfaceBase__WEBPACK_IMPORTED_MODULE_6__.HWInterfaceBase);


/***/ })

}]);
//# sourceMappingURL=ab726764c7f1c79f5150.src_HardwareInterface_DownloadPlatform_DownloadPlatformInterface_ts.bundle.js.map