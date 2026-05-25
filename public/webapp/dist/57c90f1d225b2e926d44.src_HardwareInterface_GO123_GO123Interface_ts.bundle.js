"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_GO123_GO123Interface_ts"],{

/***/ "./src/HardwareInterface/GO123/GO123Interface.ts":
/*!*******************************************************!*\
  !*** ./src/HardwareInterface/GO123/GO123Interface.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GO123Interface: () => (/* binding */ GO123Interface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _controllers_SensorHelpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../controllers/SensorHelpers */ "./src/HardwareInterface/controllers/SensorHelpers.ts");
/* harmony import */ var _HWInterfaceBase__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../HWInterfaceBase */ "./src/HardwareInterface/HWInterfaceBase.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../helpers */ "./src/helpers.ts");
/* harmony import */ var _widget_Modal__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../widget/Modal */ "./src/widget/Modal.tsx");
/* harmony import */ var _i18n_i18n__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../i18n/i18n */ "./src/i18n/i18n.ts");
/* harmony import */ var _widget_RobotToolbarButtons__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../widget/RobotToolbarButtons */ "./src/widget/RobotToolbarButtons.tsx");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _online__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../online */ "./src/online.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GO123Interface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums


// interface types/enums/classes



// parent classes/types



// external imports









var GO123Interface = /*#__PURE__*/function (_HWInterfaceBase) {
  function GO123Interface() {
    var _this;
    _classCallCheck(this, GO123Interface);
    _this = _callSuper(this, GO123Interface);
    //#region "state flags"
    _defineProperty(_this, "connected", false);
    _defineProperty(_this, "connecting", false);
    _defineProperty(_this, "scanning", false);
    _defineProperty(_this, "checkingDeviceFirmware", false);
    _defineProperty(_this, "updatingDevice", false);
    _defineProperty(_this, "gettingBootloader", false);
    _defineProperty(_this, "locatingDevice", false);
    //#endregion
    //#region "internal event callbacks"
    _defineProperty(_this, "FWUpdateProgressCB", null);
    _defineProperty(_this, "resolveFWUpdatePromise", null);
    _defineProperty(_this, "BLUpdateProgressCB", null);
    _defineProperty(_this, "resolveBLUpdatePromise", null);
    _defineProperty(_this, "connectionResolver", null);
    _defineProperty(_this, "disconnectionResolver", null);
    //#endregion
    _defineProperty(_this, "discoveredDevices", []);
    _defineProperty(_this, "connectionTargetDevice", null);
    _defineProperty(_this, "targetDevice", null);
    _defineProperty(_this, "onUpdateProgressEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_6__.DispatcherEvent());
    //#endregion events
    //#region update timeout system
    _defineProperty(_this, "updateTimeoutTimer", null);
    _defineProperty(_this, "updateTimeoutTimerCallback", null);
    _this.firmwareUpdateMessage = _this.getFWUpdateMessages();
    return _this;
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported
  _inherits(GO123Interface, _HWInterfaceBase);
  return _createClass(GO123Interface, [{
    key: "supportsUSBConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsBLEConnection",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsParallelConnections",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsAutomaticUSBConnection",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsAutomaticUSBConnectionUserPort",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsScreenCapture",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsUserPort",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsProjectDownload",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsProjectStreaming",
    get: function get() {
      return true;
    }
  }, {
    key: "supportsRemoteProjectControl",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsEmbeddedAIVision",
    get: function get() {
      return false;
    }
  }, {
    key: "supportsControllerConnections",
    get: function get() {
      return false;
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
    key: "supportsTeamNumber",
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
      return [];
    }
    //#endregion interface information

    //#region connection control
    /**
     * this will open a connection to the GO/123. This will return when the
     * connection is opened or if the connection fails to open.
     * @throws OperationNotSupportedError
     */
  }, {
    key: "openConnection",
    value: function openConnection(connectionType) {
      if (connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE) {
        log.warn("openConnection called with unsupported connection type:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod[connectionType]);
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      log.debug("openConnection");
      this.discoveredDevices = [];
      this.targetDevice = null;
      this.scanning = true;
      this.triggerConnectionStateChange();
      this.resetStatusValues();
      return this._openConnection();
    }
  }, {
    key: "closeConnection",
    value: function closeConnection(connectionType) {
      if (connectionType && connectionType !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE) {
        log.warn("closeConnection called with unsupported connection type:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod[connectionType]);
        throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
      }
      log.debug("closeConnection");
      this.discoveredDevices = [];
      this.connectionTargetDevice = null;
      this.targetDevice = null;
      this.connected = false;
      this.connecting = false;
      this.scanning = false;
      this.triggerConnectionStateChange();
      return this._closeConnection();
    }
  }, {
    key: "unlockBrain",
    value: function unlockBrain(unlockCode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    //#region internal calls for connection control
  }, {
    key: "connectionState",
    get:
    //#endregion internal calls for connection control
    //#endregion connection control

    //#region connection status
    function get() {
      return this.connectionStateBLE;
    }
  }, {
    key: "connectionStateUSB",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "getRobotScanList",
    value: function getRobotScanList() {
      return this.discoveredDevices;
    }

    /**
     * Get the information for the robot that is the connection target.
     * @returns the target robot information or null if not trying to connect to a robot
     * @throws OperationNotSupportedError
     */
  }, {
    key: "getTargetRobotInfo",
    value: function getTargetRobotInfo() {
      return this.connectionTargetDevice;
    }
    //#endregion connection status

    //#region brain info
    /**
     * Get the information for the currently connected brain.
     * @returns the connected brain information or null if no brain is connected
     * @throws NoBrainConnectedError
     */
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      // if (!this.connected) {
      //   throw new NoBrainConnectedError();
      // }
      return this.targetDevice;
    }

    /**
     * sets the name of the currently connected brain
     * @param name the name to set the brain to
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "setTeamNumber",
    value:
    /**
     * sets the team number of the currently connected brain
     * @param team the team number to set the brain to
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
    function setTeamNumber(team) {
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
      return this.isConnected && this.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
    }
    //#endregion brain info

    //#region program control
  }, {
    key: "play",
    value: function play(slot) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "stop",
    value: function stop() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion program control

    //#region project downloads
  }, {
    key: "downloadProject",
    value: function () {
      var _downloadProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(code, slot, projectName, language, progressCallback, options) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function downloadProject(_x, _x2, _x3, _x4, _x5, _x6) {
        return _downloadProject.apply(this, arguments);
      }
      return downloadProject;
    }()
  }, {
    key: "downloadProjectAndRun",
    value: function downloadProjectAndRun(code, slot, projectName, language, progressCallback, options) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "downloadProgram",
    value: function downloadProgram(slot, projectName, language, data, progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "forcePythonVMDownload",
    value: function forcePythonVMDownload(progressCallback) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "supportsPythonVM",
    get: function get() {
      return false;
    }
    //#endregion project downloads

    //#region AI Vision Sensor
  }, {
    key: "AIVisionSensorPort",
    get: function get() {
      return undefined;
    }
  }, {
    key: "setTagDetection",
    value: function setTagDetection(enabled) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "grabDetectedObjects",
    value: function grabDetectedObjects() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion AI Vision Sensor

    //#region file operations
  }, {
    key: "writeSoundFile",
    value: function writeSoundFile(filename, data, progressCallback) {
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

    //#region compilers
    /**
     * compile the provided source code and return the result.
     * @param code the code to compile.
     * @param slot the slot to compile the program for. (not used for V5)
     * @param projectName the name of the project to download
     * @param language the language of the project to compile
     * @param options various options to adjust the download process
     */
  }, {
    key: "compileProject",
    value: function () {
      var _compileProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(code, slot, projectName, language, options) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
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
    key: "getServerFirmwareVersion",
    value: //#endregion remote control
    //#region firmware
    function () {
      var _getServerFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context3.stop();
          }
        }, _callee3);
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
    key: "doesFirmwareUpdateOnConnect",
    value: function doesFirmwareUpdateOnConnect() {
      return true;
    }
  }, {
    key: "updateFirmware",
    value:
    /**
     * Call this to update the firmware of the connected brain.
     * @param progress a callback that can return the update progress
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
    function updateFirmware(progress) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    /**
     * Call this to update the firmware of the connected controller.
     * @param progress a callback that can return the update progress
     * @throws OperationNotSupportedError
     */
  }, {
    key: "updateControllerFirmware",
    value: function updateControllerFirmware(progress, isDFU) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    /**
     * this will find the current VEXos firmware version from the server
     * @returns
     */
  }, {
    key: "getCurrentFirmware",
    value: (function () {
      var _getCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var info;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              info = this.getRobotInfo();
              return _context4.abrupt("return", this.isBootloadMode ? info.robotBootloaderVersion : info.robotFirmwareVersion);
            case 2:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getCurrentFirmware() {
        return _getCurrentFirmware.apply(this, arguments);
      }
      return getCurrentFirmware;
    }()
    /**
     * this will return the correct messages for updating the FW on the
     * current platform.
     */
    )
  }, {
    key: "checkDeviceFirmware",
    value: function () {
      var _checkDeviceFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(device) {
        var inBootloadMode, isGO, onlineFW, fwUpToDate, onlineBL, blStr, isWrongVersion, blUpToDate;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.info("checkDeviceFirmware");
              this.checkingDeviceFirmware = true;
              this.triggerConnectionStateChange();
              inBootloadMode = device.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE;
              isGO = device.deviceType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO;
              log.debug("procesed advertised version");

              // try to get the BL version if we do not already have it
              if (!(!device.robotBootloaderVersion && isGO)) {
                _context5.next = 15;
                break;
              }
              if (!(this.targetDevice && this.targetDevice.serial === device.serial && this.isConnected)) {
                _context5.next = 14;
                break;
              }
              log.debug("requesting BL version");
              _context5.next = 11;
              return this.getConnectedBrainBootloader();
            case 11:
              device.robotBootloaderVersion = _context5.sent;
              _context5.next = 15;
              break;
            case 14:
              log.debug("skipping BL version request");
            case 15:
              log.debug("checking versions");

              // check the versions
              if (!device.robotFirmwareVersion) {
                _context5.next = 26;
                break;
              }
              _context5.next = 19;
              return this.getOnlineFWVersion(device.deviceType);
            case 19:
              onlineFW = _context5.sent;
              log.debug("FW brain:", device.robotFirmwareVersion.toInternalString(), "online:", onlineFW.toInternalString());
              fwUpToDate = device.robotFirmwareVersion.compare(onlineFW) >= 0;
              log.debug("FW up to date:", fwUpToDate);
              device.robotNeedsFirmwareUpdate = !inBootloadMode && fwUpToDate ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              _context5.next = 27;
              break;
            case 26:
              device.robotNeedsFirmwareUpdate = inBootloadMode ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
            case 27:
              if (!(isGO && device.robotBootloaderVersion)) {
                _context5.next = 40;
                break;
              }
              _context5.next = 30;
              return this.getOnlineBLVersion(device.deviceType);
            case 30:
              onlineBL = _context5.sent;
              // if we can't get the version, we use the last known version which is 1.1.3
              // This way we can still trigger an out of date alert for Android which has
              // issues with having the offline file for GO firmware and bootloader. Since
              // the firmware is more useful and updates more often, we pick that over the
              // bootloader in the app.
              if (onlineBL.major === 0) {
                onlineBL = new _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion(1, 1, 3, 0);
              }
              log.debug("BL brain:", device.robotBootloaderVersion.toInternalString(), "online:", onlineBL.toInternalString());
              blStr = device.robotBootloaderVersion.toInternalString();
              isWrongVersion = blStr === "0.0.0.b0" || blStr === "48.48.48.b48" || blStr === "48.48.48.b49";
              blUpToDate = device.robotBootloaderVersion.compare(onlineBL) >= 0 && !isWrongVersion;
              log.debug("BL up to date:", blUpToDate);
              device.robotNeedsBootloaderUpdate = blUpToDate ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              _context5.next = 41;
              break;
            case 40:
              device.robotNeedsBootloaderUpdate = isGO ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
            case 41:
              log.debug("checked device versions:", device);
              this.checkingDeviceFirmware = false;
              this.triggerConnectionStateChange();
            case 44:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function checkDeviceFirmware(_x12) {
        return _checkDeviceFirmware.apply(this, arguments);
      }
      return checkDeviceFirmware;
    }() //#endregion firmware
    //#region internal firmware
  }, {
    key: "checkAndUpdateDevice",
    value: function () {
      var _checkAndUpdateDevice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              if (!this.updatingDevice) {
                log.debug("checking device firmware");
                this.checkDeviceFirmware(this.targetDevice).then(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
                  var deviceType, deviceIsGO, product, needsFW, needsBL;
                  return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                    while (1) switch (_context6.prev = _context6.next) {
                      case 0:
                        deviceType = _this2.targetDevice.deviceType;
                        deviceIsGO = deviceType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO;
                        product = _this2._deviceTypeToProductType(deviceType);
                        _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this2.discoveredDevices);
                        _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BrainInfoUpdated", _this2.targetDevice);
                        needsFW = _this2.targetDevice.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
                        needsBL = _this2.targetDevice.robotNeedsBootloaderUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
                        if (!(needsFW || needsBL)) {
                          _context6.next = 17;
                          break;
                        }
                        _context6.prev = 8;
                        _context6.next = 11;
                        return _this2.updateConnectedDevice();
                      case 11:
                        _context6.next = 17;
                        break;
                      case 13:
                        _context6.prev = 13;
                        _context6.t0 = _context6["catch"](8);
                        if (_context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorLowDeviceBattery) {
                          log.warn("unable to update due to low battery");
                          if (deviceIsGO) {
                            _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.alert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_10__.i18n.t("GO battery low update warning"));
                          } else {
                            _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.alert(_i18n_i18n__WEBPACK_IMPORTED_MODULE_10__.i18n.t("123 battery low update warning"));
                          }
                        } else if (_context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFWUpdateNotSupported || _context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorBLUpdateNotSupported) {
                          log.warn("unable to update due to old Firmware/Bootloader version");
                          if (deviceIsGO) {
                            _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showGOOutOfDate();
                          } else {
                            log.warn("should not be possible to have unsupported 123");
                          }
                        } else if (_context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingFWUpdate || _context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorStartingBLUpdate) {
                          log.warn("unable to update due to issue starting the update process");
                          _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showUpdateFailed(product);
                        } else if (_context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW || _context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL) {
                          log.warn("unable to update");
                          _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showUpdateFailed(product);
                        } else if (_context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringFW || _context6.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringBL) {
                          log.warn("unable to update due to connection loss during update");
                          _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showUpdateFailed(product);
                        } else {
                          log.error("error updating connected device:", _context6.t0.name);
                          log.error(_context6.t0);
                          _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showUpdateFailed(product);
                        }
                        _this2.closeConnection();
                      case 17:
                      case "end":
                        return _context6.stop();
                    }
                  }, _callee6, null, [[8, 13]]);
                })));
              } else {
                log.debug("already updating device");
              }
            case 1:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function checkAndUpdateDevice() {
        return _checkAndUpdateDevice.apply(this, arguments);
      }
      return checkAndUpdateDevice;
    }()
    /**
     * This will pull the bootloader version from the connected brain
     * @returns the bootloader version on the connected brain
     * @throws NoBrainConnectedError
     */
  }, {
    key: "getConnectedBrainBootloader",
    value: (function () {
      var _getConnectedBrainBootloader2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var blVersionNum;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // The data is filled in progressively for the device info. We need to wait for it all to fill in
              // before requesting the bootloader. The firmeware version didn't need this since it is being
              // pulled from the advertising data.
              this.gettingBootloader = true;
              blVersionNum = "0.0.0.b0";
              log.debug("getting bootloader");
              _context8.prev = 3;
              if (!this.connected) {
                _context8.next = 13;
                break;
              }
              _context8.next = 7;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.waitms)(1000);
            case 7:
              _context8.next = 9;
              return this._getConnectedBrainBootloader();
            case 9:
              blVersionNum = _context8.sent;
              log.debug("got bootloader:", blVersionNum);
              _context8.next = 14;
              break;
            case 13:
              log.warn("not connected to a device");
            case 14:
              _context8.next = 19;
              break;
            case 16:
              _context8.prev = 16;
              _context8.t0 = _context8["catch"](3);
              log.error("getBrainBootloader error:", _context8.t0);
            case 19:
              this.gettingBootloader = false;
              return _context8.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString(blVersionNum));
            case 21:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[3, 16]]);
      }));
      function getConnectedBrainBootloader() {
        return _getConnectedBrainBootloader2.apply(this, arguments);
      }
      return getConnectedBrainBootloader;
    }())
  }, {
    key: "_deviceTypeToProductType",
    value: function _deviceTypeToProductType(device) {
      if (device === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEX123) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexProductTypes.VEX_123_Puck;
      } else if (device === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO) {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexProductTypes.VEX_GO;
      }
    }
  }, {
    key: "updateDeviceInternal",
    value: function () {
      var _updateDeviceInternal = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(progressCallback) {
        var _this3 = this;
        var forceUpdate,
          res,
          needsFW,
          needsBL,
          _battery,
          _product,
          skipBatteryCheck,
          _this$targetDevice$ro,
          totalProgress,
          progressOffset,
          _this$targetDevice$ro2,
          _args9 = arguments;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              forceUpdate = _args9.length > 1 && _args9[1] !== undefined ? _args9[1] : false;
              this.updatingDevice = true;
              this.triggerConnectionStateChange();
              res = false;
              _context9.prev = 4;
              _context9.next = 7;
              return this.checkDeviceFirmware(this.targetDevice);
            case 7:
              needsFW = forceUpdate || this.targetDevice.robotNeedsFirmwareUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              needsBL = forceUpdate || this.targetDevice.robotNeedsBootloaderUpdate === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate;
              log.debug("post check - needsFW", needsFW, "needsBL", needsBL);
              _context9.t0 = _targetPlatform__WEBPACK_IMPORTED_MODULE_13__.targetIsGO && needsBL && (_platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsAndroid || _platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsIOS);
              if (!_context9.t0) {
                _context9.next = 15;
                break;
              }
              _context9.next = 14;
              return (0,_online__WEBPACK_IMPORTED_MODULE_14__.isOnline)();
            case 14:
              _context9.t0 = !_context9.sent;
            case 15:
              if (!_context9.t0) {
                _context9.next = 20;
                break;
              }
              _context9.next = 18;
              return new Promise(function (resolve, reject) {
                _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.alertAndWait(_i18n_i18n__WEBPACK_IMPORTED_MODULE_10__.i18n.t("GO bootloader update needed offline error"), resolve);
              });
            case 18:
              setTimeout(function () {
                _this3.closeConnection();
              }, 10);
              return _context9.abrupt("return", false);
            case 20:
              if (!(needsFW || needsBL)) {
                _context9.next = 105;
                break;
              }
              _battery = this.targetDevice.battery;
              _product = this._deviceTypeToProductType(this.targetDevice.deviceType); // If 123 then skip checking battery since they sometimes return -1
              skipBatteryCheck = this.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE && (_battery === 0 || _battery === -1) || _product === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexProductTypes.VEX_123_Puck;
              log.debug("targetDevice.battery:", _battery);
              log.debug("skipBatteryCheck:", skipBatteryCheck);
              if (!(!skipBatteryCheck && _battery < 30)) {
                _context9.next = 31;
                break;
              }
              log.warn("target battery is too low to update.", _battery, "%");
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorLowDeviceBattery();
            case 31:
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.showGOUpdateProgress(this.onUpdateProgressEvent, this.firmwareUpdateMessage);
              _widget_RobotToolbarButtons__WEBPACK_IMPORTED_MODULE_11__.ROBOT_TOOLBAR_CONTROL.openBrainDropdown(true);
              if (!(this.targetDevice.deviceType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXGO)) {
                _context9.next = 97;
                break;
              }
              totalProgress = needsFW && needsBL ? 2.0 : 1.0;
              progressOffset = needsFW && needsBL ? 1.0 : 0.0;
              log.debug("needsFW", needsFW, "needsBL", needsBL);
              log.debug("totalProgress:", totalProgress);
              log.debug("progressOffset:", progressOffset);

              // check to see if FW is pre rebootloader
              if (!(((_this$targetDevice$ro = this.targetDevice.robotFirmwareVersion) === null || _this$targetDevice$ro === void 0 ? void 0 : _this$targetDevice$ro.compare(_VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString("1.0.1.B100"))) < 0)) {
                _context9.next = 59;
                break;
              }
              log.debug("using GO pre-rebootloader update process");
              // device has pre-rebootloader firmware so we need to update the FW then the BL

              // 1. update FW
              if (!needsFW) {
                _context9.next = 46;
                break;
              }
              _context9.next = 44;
              return this.updateFWWithRetry(function (progress) {
                var p = progress / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
              }, forceUpdate);
            case 44:
              _context9.next = 46;
              return this.checkDeviceFirmware(this.targetDevice);
            case 46:
              if (!needsBL) {
                _context9.next = 53;
                break;
              }
              if (!(((_this$targetDevice$ro2 = this.targetDevice.robotFirmwareVersion) === null || _this$targetDevice$ro2 === void 0 ? void 0 : _this$targetDevice$ro2.compare(_VexVersion__WEBPACK_IMPORTED_MODULE_3__.VexVersion.fromString("1.0.1.B100"))) < 0)) {
                _context9.next = 51;
                break;
              }
              log.warn("skip BL update due to prerebootloader firmware");
              _context9.next = 53;
              break;
            case 51:
              _context9.next = 53;
              return this.updateBLWithRetry(function (progress) {
                var p = (progressOffset + progress) / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
              }, forceUpdate);
            case 53:
              this.onUpdateProgressEvent.fire({
                msg: this.firmwareUpdateMessage,
                progress: 1,
                status: "complete"
              });
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateDone", true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.close();
              res = true;
              _context9.next = 94;
              break;
            case 59:
              if (!(this.targetDevice.mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.UPDATE)) {
                _context9.next = 79;
                break;
              }
              log.debug("using GO force update process");
              // device is in bootload mode so update the FW then reconnect and recheck the BL version

              // 1. update FW
              if (!needsFW) {
                _context9.next = 70;
                break;
              }
              _context9.next = 64;
              return this.updateFWWithRetry(function (progress) {
                var p = progress / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
              }, true);
            case 64:
              // check the versions again
              this.targetDevice.robotBootloaderVersion = null;
              _context9.next = 67;
              return this.checkDeviceFirmware(this.targetDevice);
            case 67:
              log.debug("waiting extra 500ms after FW check");
              _context9.next = 70;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.waitms)(500);
            case 70:
              if (!needsBL) {
                _context9.next = 73;
                break;
              }
              _context9.next = 73;
              return this.updateBLWithRetry(function (progress) {
                var p = (progressOffset + progress) / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
              }, forceUpdate);
            case 73:
              this.onUpdateProgressEvent.fire({
                msg: this.firmwareUpdateMessage,
                progress: 1,
                status: "complete"
              });
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateDone", true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.close();
              res = true;
              _context9.next = 94;
              break;
            case 79:
              log.debug("using GO post-rebootloader update process");
              // device has post rebootloader FW, so update BL then FW.

              // 1. update BL
              if (!needsBL) {
                _context9.next = 88;
                break;
              }
              _context9.next = 83;
              return this.updateBLWithRetry(function (progress) {
                var p = progress / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
              }, forceUpdate);
            case 83:
              _context9.next = 85;
              return this.checkDeviceFirmware(this.targetDevice);
            case 85:
              log.debug("waiting extra 500ms after FW check");
              _context9.next = 88;
              return (0,_helpers__WEBPACK_IMPORTED_MODULE_8__.waitms)(500);
            case 88:
              if (!needsFW) {
                _context9.next = 91;
                break;
              }
              _context9.next = 91;
              return this.updateFWWithRetry(function (progress) {
                var p = (progressOffset + progress) / totalProgress;
                if (progressCallback) {
                  progressCallback(p);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: p,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", p);
              }, forceUpdate);
            case 91:
              this.onUpdateProgressEvent.fire({
                msg: this.firmwareUpdateMessage,
                progress: 1,
                status: "complete"
              });
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateDone", true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.close();
            case 94:
              res = true;
              _context9.next = 105;
              break;
            case 97:
              if (!needsFW) {
                _context9.next = 105;
                break;
              }
              log.debug("using other update process");
              _context9.next = 101;
              return this.updateFWWithRetry(function (progress) {
                if (progressCallback) {
                  progressCallback(progress);
                }
                _this3.onUpdateProgressEvent.fire({
                  msg: _this3.firmwareUpdateMessage,
                  progress: progress,
                  status: "ok"
                });
                _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateProgress", progress);
              }, forceUpdate);
            case 101:
              this.onUpdateProgressEvent.fire({
                msg: this.firmwareUpdateMessage,
                progress: 1,
                status: "complete"
              });
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateDone", true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.close();
              res = true;
            case 105:
              _context9.next = 114;
              break;
            case 107:
              _context9.prev = 107;
              _context9.t1 = _context9["catch"](4);
              this.onUpdateProgressEvent.fire({
                msg: this.firmwareUpdateMessage,
                progress: 1,
                status: "complete"
              });
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEFWUpdateDone", true);
              _widget_Modal__WEBPACK_IMPORTED_MODULE_9__.MODALCONTROL.close();
              log.debug("internal update error:", _context9.t1);
              throw _context9.t1;
            case 114:
              _context9.prev = 114;
              log.debug("update done");
              this.updatingDevice = false;
              this.targetDevice.robotBootloaderVersion = null;
              this.targetDevice.robotFirmwareVersion = null;
              _context9.next = 121;
              return this.checkDeviceFirmware(this.targetDevice);
            case 121:
              this.triggerConnectionStateChange();
              return _context9.finish(114);
            case 123:
              return _context9.abrupt("return", res);
            case 124:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[4, 107, 114, 123]]);
      }));
      function updateDeviceInternal(_x13) {
        return _updateDeviceInternal.apply(this, arguments);
      }
      return updateDeviceInternal;
    }()
  }, {
    key: "updateFWWithRetry",
    value: function () {
      var _updateFWWithRetry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(progressCallback) {
        var _this4 = this;
        var forceUpdate,
          abort,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              forceUpdate = _args11.length > 1 && _args11[1] !== undefined ? _args11[1] : false;
              abort = false;
              return _context11.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(resolve, reject) {
                  var _suspendDuringUpdate, retryCount, res;
                  return _regeneratorRuntime().wrap(function _callee10$(_context10) {
                    while (1) switch (_context10.prev = _context10.next) {
                      case 0:
                        _suspendDuringUpdate = function suspendDuringUpdate() {
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorSuspendDuringUpdate());
                          _this4.unregisterSuspendCallback(_suspendDuringUpdate);
                          abort = true;
                        };
                        _this4.registerSuspendCallback(_suspendDuringUpdate);
                        retryCount = 0;
                        res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
                      case 4:
                        if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE && retryCount < 2)) {
                          _context10.next = 21;
                          break;
                        }
                        if (!(abort === true)) {
                          _context10.next = 7;
                          break;
                        }
                        return _context10.abrupt("return");
                      case 7:
                        _context10.prev = 7;
                        _context10.next = 10;
                        return _this4.lowLevelUpdateFW(progressCallback, forceUpdate);
                      case 10:
                        res = _context10.sent;
                        if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE) {
                          retryCount++;
                          log.debug("failed to update Firmware attempt", retryCount);
                        }
                        _context10.next = 19;
                        break;
                      case 14:
                        _context10.prev = 14;
                        _context10.t0 = _context10["catch"](7);
                        retryCount++;
                        log.warn("failed to update Firmware attempt", retryCount, _context10.t0);
                        if (_context10.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringFW) {
                          // Because the error is being thrown and not a return value
                          // we need to set the result based on the error thrown when one is thrown
                          res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT;
                        } else {
                          res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
                        }
                      case 19:
                        _context10.next = 4;
                        break;
                      case 21:
                        _this4.unregisterSuspendCallback(_suspendDuringUpdate);
                        if (res !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS) {
                          log.debug("retries:", retryCount);
                          if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE) {
                            log.warn("failed to update Firmware due to retries");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingFW());
                          } else if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.UNSUPPORTED) {
                            log.warn("failed to update Firmware due to unsupported bootloader");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorFWUpdateNotSupported());
                          } else {
                            log.warn("failed to update Firmware due to connection");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringFW());
                          }
                        }
                        resolve();
                      case 24:
                      case "end":
                        return _context10.stop();
                    }
                  }, _callee10, null, [[7, 14]]);
                }));
                return function (_x15, _x16) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 3:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function updateFWWithRetry(_x14) {
        return _updateFWWithRetry.apply(this, arguments);
      }
      return updateFWWithRetry;
    }()
  }, {
    key: "updateBLWithRetry",
    value: function () {
      var _updateBLWithRetry = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(progressCallback) {
        var _this5 = this;
        var forceUpdate,
          abort,
          _args13 = arguments;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              forceUpdate = _args13.length > 1 && _args13[1] !== undefined ? _args13[1] : false;
              abort = false;
              return _context13.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(resolve, reject) {
                  var _suspendDuringUpdate2, retryCount, res;
                  return _regeneratorRuntime().wrap(function _callee12$(_context12) {
                    while (1) switch (_context12.prev = _context12.next) {
                      case 0:
                        _suspendDuringUpdate2 = function suspendDuringUpdate() {
                          reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorSuspendDuringUpdate());
                          _this5.unregisterSuspendCallback(_suspendDuringUpdate2);
                          abort = true;
                        };
                        _this5.registerSuspendCallback(_suspendDuringUpdate2);
                        retryCount = 0;
                        res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
                      case 4:
                        if (!(res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE && retryCount < 2)) {
                          _context12.next = 21;
                          break;
                        }
                        if (!(abort === true)) {
                          _context12.next = 7;
                          break;
                        }
                        return _context12.abrupt("return");
                      case 7:
                        _context12.prev = 7;
                        _context12.next = 10;
                        return _this5.lowLevelUpdateBL(progressCallback, forceUpdate);
                      case 10:
                        res = _context12.sent;
                        if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE) {
                          retryCount++;
                          log.debug("failed to update Bootloader attempt", retryCount);
                        }
                        _context12.next = 19;
                        break;
                      case 14:
                        _context12.prev = 14;
                        _context12.t0 = _context12["catch"](7);
                        retryCount++;
                        log.warn("failed to update Bootloader attempt", retryCount, _context12.t0);
                        if (_context12.t0 instanceof _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringBL) {
                          // Because the error is being thrown and not a return value
                          // we need to set the result based on the error thrown when one is thrown
                          res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.DISCONNECT;
                        } else {
                          res = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE;
                        }
                      case 19:
                        _context12.next = 4;
                        break;
                      case 21:
                        _this5.unregisterSuspendCallback(_suspendDuringUpdate2);
                        if (res !== _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.SUCCESS) {
                          log.debug("retries:", retryCount);
                          if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.FAILURE) {
                            log.warn("failed to update Bootloader due to retries");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorUpdatingBL());
                          } else if (res === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateResultCodes.UNSUPPORTED) {
                            log.warn("failed to update Bootloader due unsupported firmware");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorBLUpdateNotSupported());
                          } else {
                            log.warn("failed to update Bootloader due to connection");
                            reject(new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.ErrorConnectionDuringBL());
                          }
                        }
                        resolve();
                      case 24:
                      case "end":
                        return _context12.stop();
                    }
                  }, _callee12, null, [[7, 14]]);
                }));
                return function (_x18, _x19) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 3:
            case "end":
              return _context13.stop();
          }
        }, _callee13);
      }));
      function updateBLWithRetry(_x17) {
        return _updateBLWithRetry.apply(this, arguments);
      }
      return updateBLWithRetry;
    }()
  }, {
    key: "updateConnectedDevice",
    value: function () {
      var _updateConnectedDevice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(progressCallback) {
        var forceUpdate,
          res,
          _args14 = arguments;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              forceUpdate = _args14.length > 1 && _args14[1] !== undefined ? _args14[1] : false;
              if (this.canDoWork()) {
                _context14.next = 3;
                break;
              }
              return _context14.abrupt("return", false);
            case 3:
              _context14.next = 5;
              return this.disableSleep();
            case 5:
              res = false;
              _context14.prev = 6;
              _context14.next = 9;
              return this.updateDeviceInternal(progressCallback, forceUpdate);
            case 9:
              res = _context14.sent;
              if (res) {
                _context14.next = 13;
                break;
              }
              log.error("failed updating single device");
              // disconnectFromBrain();
              throw new Error();
            case 13:
              _context14.next = 20;
              break;
            case 15:
              _context14.prev = 15;
              _context14.t0 = _context14["catch"](6);
              log.error("error updating single device. error name:", _context14.t0.name);
              log.error(_context14.t0);
              // disconnectFromBrain();
              throw _context14.t0;
            case 20:
              _context14.prev = 20;
              _context14.next = 23;
              return this.enableSleep();
            case 23:
              return _context14.finish(20);
            case 24:
              return _context14.abrupt("return", res);
            case 25:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[6, 15, 20, 24]]);
      }));
      function updateConnectedDevice(_x20) {
        return _updateConnectedDevice.apply(this, arguments);
      }
      return updateConnectedDevice;
    }()
  }, {
    key: "canDoWork",
    value: function canDoWork() {
      var requireConnected = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
      if (requireConnected && !this.connected) {
        log.warn("not connected to device");
        return false;
      }
      if (this.checkingDeviceFirmware) {
        log.warn("already checking a device");
        return false;
      }
      if (this.updatingDevice) {
        log.warn("already updating a device");
        return false;
      }
      if (this.locatingDevice) {
        log.warn("already locating a device");
        return false;
      }
      return true;
    }
    //#endregion internal firmware

    //#region internal firmware low level
    /**
     * This will pull the bootloader version from the connected brain. This
     * actually pulls the value from the brain for the public version
     * @returns the bootloader version on the connected brain
     * @throws NoBrainConnectedError
     */
  }, {
    key: "openConnectionUserPort",
    value: //#endregion internal firmware low level
    //#region User Port comms
    function () {
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15(connectionType) {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context15.stop();
          }
        }, _callee15);
      }));
      function openConnectionUserPort(_x21) {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }()
  }, {
    key: "closeConnectionUserPort",
    value: function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(connectionType) {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
            case 1:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function closeConnectionUserPort(_x22) {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
  }, {
    key: "connectionStateUserPort",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateUserPortUSB",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "connectionStateUserPortBLE",
    get: function get() {
      return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected;
    }
  }, {
    key: "sendDataUserPort",
    value: function sendDataUserPort(data) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion User Port comms

    //#region events
  }, {
    key: "onHardwareTargetChange",
    value: function onHardwareTargetChange(newTarget) {
      // We don't need to do anything her for 123/GO builds
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
      _controllers_SensorHelpers__WEBPACK_IMPORTED_MODULE_4__.resetStatusValues();
    }
  }, {
    key: "waitForReconnect",
    value: function () {
      var _waitForReconnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18() {
        var _this6 = this;
        var timeoutms,
          _args18 = arguments;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              timeoutms = _args18.length > 0 && _args18[0] !== undefined ? _args18[0] : 0;
              log.debug("waiting for reconnect");
              return _context18.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(_resolve, _reject) {
                  var waitTimeout;
                  return _regeneratorRuntime().wrap(function _callee17$(_context17) {
                    while (1) switch (_context17.prev = _context17.next) {
                      case 0:
                        waitTimeout = null;
                        if (timeoutms) {
                          waitTimeout = setTimeout(function () {
                            if (_this6.connectionResolver) {
                              _this6.connectionResolver = null;
                              _reject();
                            }
                          }, timeoutms);
                        }
                        if (_this6.connectionResolver) {
                          _this6.connectionResolver.reject(null);
                        }
                        _this6.connectionResolver = {
                          resolve: function resolve(data) {
                            _this6.connectionResolver = null;
                            if (waitTimeout) {
                              clearTimeout(waitTimeout);
                            }
                            _resolve(data);
                          },
                          reject: function reject(err) {
                            _this6.connectionResolver = null;
                            if (waitTimeout) {
                              clearTimeout(waitTimeout);
                            }
                            _reject(err);
                          }
                        };
                      case 4:
                      case "end":
                        return _context17.stop();
                    }
                  }, _callee17);
                }));
                return function (_x23, _x24) {
                  return _ref4.apply(this, arguments);
                };
              }()));
            case 3:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function waitForReconnect() {
        return _waitForReconnect.apply(this, arguments);
      }
      return waitForReconnect;
    }()
    /**
     * this will register a callback that will be called when the tablet
     * is suspending the application. This will not do anything in the browser.
     * @param callback the callback to add
     */
  }, {
    key: "setUpdateTimeoutTimerCallback",
    value: function setUpdateTimeoutTimerCallback(callback) {
      log.debug("setUpdateTimeoutTimerCallback");
      this.updateTimeoutTimerCallback = callback;
    }
  }, {
    key: "clearUpdateTimeoutTimerCallback",
    value: function clearUpdateTimeoutTimerCallback() {
      log.debug("clearUpdateTimeoutTimerCallback");
      this.setUpdateTimeoutTimerCallback(null);
    }
  }, {
    key: "startUpdateTimeoutTimer",
    value: function startUpdateTimeoutTimer() {
      var _this7 = this;
      var timeoutms = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 15000;
      log.debug("startUpdateTimeoutTimer");
      this.updateTimeoutTimer = setTimeout(function () {
        if (_this7.updateTimeoutTimerCallback) {
          _this7.updateTimeoutTimerCallback();
        }
        _this7.updateTimeoutTimer = null;
      }, timeoutms);
    }
  }, {
    key: "restartUpdateTimeoutTimer",
    value: function restartUpdateTimeoutTimer() {
      log.debug("restartUpdateTimeoutTimer");
      this.stopUpdateTimeoutTimer();
      this.startUpdateTimeoutTimer();
    }
  }, {
    key: "stopUpdateTimeoutTimer",
    value: function stopUpdateTimeoutTimer() {
      log.debug("stopUpdateTimeoutTimer");
      if (this.updateTimeoutTimer) {
        clearTimeout(this.updateTimeoutTimer);
      }
      this.updateTimeoutTimer = null;
    }
    //#endregion update timeout system

    //#region native -> webapp events
  }, {
    key: "processDiscoveredDevice",
    value: function processDiscoveredDevice(name, serial, product, mode, version, rssi, battery, canUpdate) {
      var _this8 = this;
      var isBootloadMode = mode === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceMode.DFU;
      var robotFirmware = isBootloadMode ? undefined : version;
      var robotBootloader = isBootloadMode ? version : undefined;
      var alreadyFound = false;
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.discoveredDevices.length; i++) {
        if (this.discoveredDevices[i].serial === serial) {
          alreadyFound = true;
          this.discoveredDevices[i].name = name;
          this.discoveredDevices[i].rssi = rssi;
          this.discoveredDevices[i].battery = battery;
          this.discoveredDevices[i].deviceType = product;
          var recheckVersions = false;
          if (robotFirmware && this.discoveredDevices[i].robotFirmwareVersion.compare(robotFirmware) !== 0 || !!this.discoveredDevices[i].robotFirmwareVersion && !robotFirmware || !this.discoveredDevices[i].robotFirmwareVersion && !!robotFirmware) {
            this.discoveredDevices[i].robotFirmwareVersion = robotFirmware;
            recheckVersions = true;
          }
          if (robotBootloader && this.discoveredDevices[i].robotBootloaderVersion.compare(robotBootloader) !== 0 || !!this.discoveredDevices[i].robotBootloaderVersion && !robotBootloader || !this.discoveredDevices[i].robotBootloaderVersion && !!robotBootloader) {
            this.discoveredDevices[i].robotBootloaderVersion = robotBootloader;
            recheckVersions = true;
          }
          if (this.discoveredDevices[i].mode !== mode) {
            this.discoveredDevices[i].mode = mode;
            recheckVersions = true;
          }
          log.debug("updated device", this.discoveredDevices[i]);
          if (this.targetDevice && this.targetDevice.serial === serial) {
            log.debug("skip recheck");
            break;
          }
          if (recheckVersions) {
            log.debug("setup for FW/BL recheck");
            this.discoveredDevices[i].robotNeedsFirmwareUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
            this.discoveredDevices[i].robotNeedsBootloaderUpdate = _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
            this.checkDeviceFirmware(this.discoveredDevices[i]).then(function () {
              _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this8.discoveredDevices);
            });
          }
          break;
        }
      }
      if (!alreadyFound) {
        // create new device object with discovered device info
        var tmpDev = {
          serial: serial,
          robotFirmwareVersion: version,
          robotBootloaderVersion: null,
          name: name,
          deviceType: product,
          mode: mode,
          connectionMethod: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.BLE,
          brainConnected: true,
          canUpdate: true,
          robotNeedsFirmwareUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
          robotNeedsBootloaderUpdate: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure,
          battery: battery,
          rssi: rssi
        };
        log.debug("adding new device", tmpDev);
        this.checkDeviceFirmware(tmpDev).then(function () {
          _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", _this8.discoveredDevices);
        });
        this.discoveredDevices.push(tmpDev);
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", this.discoveredDevices);
    }
  }, {
    key: "onGO123BLEDeviceLost",
    value: function onGO123BLEDeviceLost(serial) {
      log.info("onGO123BLEDeviceLost", serial);
      // tslint:disable-next-line: prefer-for-of
      for (var i = 0; i < this.discoveredDevices.length; i++) {
        if (this.discoveredDevices[i].serial === serial) {
          this.discoveredDevices.splice(i, 1);
          break;
        }
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.DeviceListUpdate", this.discoveredDevices);
    }
  }, {
    key: "onGO123BLEDeviceFWUpdateProgress",
    value: function onGO123BLEDeviceFWUpdateProgress(progress) {
      log.debug("FW update progress", progress, "%");
      this.restartUpdateTimeoutTimer();
      if (this.FWUpdateProgressCB) {
        this.FWUpdateProgressCB(progress / 100);
      }
    }
  }, {
    key: "onGO123BLEDeviceFWUpdateComplete",
    value: function onGO123BLEDeviceFWUpdateComplete(success) {
      log.info("FW update complete. success?", success);
      this.stopUpdateTimeoutTimer();
      if (this.resolveFWUpdatePromise) {
        this.resolveFWUpdatePromise(success);
      }
    }
  }, {
    key: "onGO123BLEDeviceBLUpdateProgress",
    value: function onGO123BLEDeviceBLUpdateProgress(progress) {
      log.debug("BL update progress", progress, "%");
      this.restartUpdateTimeoutTimer();
      if (this.BLUpdateProgressCB) {
        this.BLUpdateProgressCB(progress / 100);
      }
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_7__.fireEvent("HWInterface.BLEBLUpdateProgress", progress / 100);
    }
  }, {
    key: "onGO123BLEDeviceBLUpdateComplete",
    value: function onGO123BLEDeviceBLUpdateComplete(success) {
      log.info("BL update complete. success?", success);
      this.stopUpdateTimeoutTimer();
      if (this.resolveBLUpdatePromise) {
        this.resolveBLUpdatePromise(success);
      }
    }

    //#region status events
  }, {
    key: "onGO123BLESensorUpdate",
    value: function onGO123BLESensorUpdate(data) {
      _controllers_SensorHelpers__WEBPACK_IMPORTED_MODULE_4__.on123GOBLESensorUpdate(data);
    }
  }, {
    key: "onGO123BLEPortsUpdate",
    value: function onGO123BLEPortsUpdate(data) {
      if (this.targetDevice && data && data.battery !== 0) {
        this.targetDevice.battery = data.battery;
      }
      _controllers_SensorHelpers__WEBPACK_IMPORTED_MODULE_4__.on123GOBLEPortsUpdate(data);
    }
    //#endregion status events
    //#endregion native -> webapp events

    //#region low-level logger
  }]);
}(_HWInterfaceBase__WEBPACK_IMPORTED_MODULE_5__.HWInterfaceBase);
_defineProperty(GO123Interface, "FWUpdateMessagesGO", ["GO FW Update In-Progress-1", "GO Update In-Progress-2"]);
_defineProperty(GO123Interface, "FWUpdateMessages123", ["GO FW Update In-Progress-1", "123 Update In-Progress-2"]);


/***/ }),

/***/ "./src/HardwareInterface/controllers/SensorHelpers.ts":
/*!************************************************************!*\
  !*** ./src/HardwareInterface/controllers/SensorHelpers.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   botStatus: () => (/* binding */ botStatus),
/* harmony export */   on123GOBLEPortsUpdate: () => (/* binding */ on123GOBLEPortsUpdate),
/* harmony export */   on123GOBLESensorUpdate: () => (/* binding */ on123GOBLESensorUpdate),
/* harmony export */   resetStatusValues: () => (/* binding */ resetStatusValues),
/* harmony export */   sensorValues: () => (/* binding */ sensorValues)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GO SensorHelpers");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();



var sensorValues = null;
var botStatus = {
  battery: 0,
  ports: new Array(6).fill(null)
};
function resetStatusValues() {
  sensorValues = {
    hue: 0,
    brightness: 0,
    proximity: 0,
    accX: 0,
    accY: 0,
    accZ: 0,
    gyroX: 0,
    gyroY: 0,
    gyroZ: 0,
    pitch: 0,
    roll: 0,
    yaw: 0,
    floor: 0
  };
  botStatus.ports.fill({
    portNumber: 0,
    deviceID: _types_HWEnums__WEBPACK_IMPORTED_MODULE_2__.vexPortDeviceID.Unknown,
    activeCommand: 0xFF
  });
  botStatus.ports.forEach(function (port, index) {
    port.portNumber = index;
  });
  sendStatusUpdateEvent();
}
function on123GOBLESensorUpdate(data) {
  sensorValues = data;
  sendStatusUpdateEvent();
}
function on123GOBLEPortsUpdate(data) {
  botStatus = data;
  sendStatusUpdateEvent();
}
function sendStatusUpdateEvent() {
  _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_1__.fireEvent("HWInterface.GOStatusUpdate", sensorValues, botStatus);
}


/***/ })

}]);
//# sourceMappingURL=57c90f1d225b2e926d44.src_HardwareInterface_GO123_GO123Interface_ts.bundle.js.map