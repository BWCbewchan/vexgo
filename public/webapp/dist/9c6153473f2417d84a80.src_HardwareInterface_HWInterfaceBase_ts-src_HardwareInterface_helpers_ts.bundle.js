"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_HWInterfaceBase_ts-src_HardwareInterface_helpers_ts"],{

/***/ "./src/HardwareInterface/HWInterfaceBase.ts":
/*!**************************************************!*\
  !*** ./src/HardwareInterface/HWInterfaceBase.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HWInterfaceBase: () => (/* binding */ HWInterfaceBase)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! async-sema */ "./node_modules/async-sema/lib/index.js");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(async_sema__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("HWInterfaceBase");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering object-literal-key-quotes unified-signatures




// Global imports

//TODO: add method for getting AI Vision sensor interface for the utility 
/**
 * This is the base class for all of the actual hardware interfaces. This base
 * is created to provide a standard interface for the whole vexcode application
 * to use. There should be no need for any code outside of the hardware
 * interface folder to know what instance is being used. Any platform specific
 * methods should be exposed in the base class with a property to indicate that
 * it is supported. This is to avoid special logic in the UI sections of VEXcode
 * to figure out what to show.
 * 
 * When creating a subclass, it should have all of the same regions as this
 * abstract class. This is to help keep the code organized between the different
 * implementations. If a subclass has extra regions, they should be placed at
 * the end of the class.
 */
var HWInterfaceBase = /*#__PURE__*/function () {
  function HWInterfaceBase() {
    _classCallCheck(this, HWInterfaceBase);
    /**
     * This semaphore is used to control access to the admin serial port. This is
     * used to prevent trying to send commands when other multipart commands like
     * downloads or uploads are running. This is important as sending other
     * commands in the middle of multipart commands can cause issues. For example,
     * if you send any other command during a download, the whole download is
     * considered a failure and needs to be restarted.
     * 
     * Before any commands are sent over the admin port, we need to acquire the
     * semaphore lock. Once the command has been completed, we need to release the
     * lock. Failure to release the lock will prevent all future commands from
     * being sent, which will cause the app to become useless.
     */
    _defineProperty(this, "adminSemaphore", new async_sema__WEBPACK_IMPORTED_MODULE_3__.Sema(1, {
      capacity: 10
    }));
    _defineProperty(this, "lastConnectionState", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected);
    _defineProperty(this, "lastUSBConnectionState", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected);
    _defineProperty(this, "lastBLEConnectionState", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected);
    /**
     * This is the internal flag for isScreenCaptureInProgress. This is used so
     * that the flag is read only outside of the hardware interface.
     */
    _defineProperty(this, "screenCaptureInProgress", false);
    /** used to kep track of the previous hardware target */
    _defineProperty(this, "previousHardwareTarget", _AppInfo__WEBPACK_IMPORTED_MODULE_2__.appState.getAppState().hardwareTarget);
    _defineProperty(this, "eventCallbacks", {
      "connectionStateChange": [],
      "connectionStateChangeUserPort": [],
      "robotInfoUpdate": [],
      "deviceConnected": [],
      "deviceDisconnected": [],
      "discoveredDevicesUpdate": []
    });
    //#endregion
    //#region low-level logger
    // TODO: support multiple loggers for multiple connections
    // TODO: create a wrapper to make native logger look like the vex logger?
    _defineProperty(this, "lowLevelLogLines", []);
    _defineProperty(this, "lowLevelLogMaxLineLimit", 1000);
    _defineProperty(this, "lowLevelLogLevel", log.levels.WARN);
    _defineProperty(this, "isLowLevelLoggerBound", false);
    this.bindLowLevelLogger();
    this.onAppStateChangeChange = this.onAppStateChangeChange.bind(this);
    _AppInfo__WEBPACK_IMPORTED_MODULE_2__.appState.registerEventListener(this.onAppStateChangeChange);
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported

  /**
   * This indicates if the interface supports connecting to the robot via a USB connection.
   * 
   * Note: some interfaces support both USB and BLE connections.
   */
  return _createClass(HWInterfaceBase, [{
    key: "triggerConnectionStateChange",
    value:
    /**
     * This will send out the required events when there is any change to either
     * connection states for the admin port. If this is change indicates that a
     * robot has just been connected, onRobotConnected gets called. If this is
     * change indicates that a robot has just been disconnected,
     * onRobotDisconnected gets called.
     */
    function triggerConnectionStateChange() {
      var newState = this.connectionState;
      log.debug("new overall connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
      this.fireEvent("connectionStateChange", newState);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_4__.fireEvent("HWInterface.ConnectionStateChange", newState);

      // now that the state event triggered, we want to see if we need to trigger
      // the connection or disconnection events.
      if (this.lastConnectionState !== newState) {
        this.lastConnectionState = newState;
        if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
          this.onDeviceConnected();
        } else if (newState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Disconnected) {
          this.onDeviceDisconnected();
        }
      }
    }
  }, {
    key: "triggerUSBConnectionStateChange",
    value:
    /**
     * This should be called any time there is a connection state change for the
     * USB connection. This will handle sending out the event if needed.
     */
    function triggerUSBConnectionStateChange() {
      var newState = this.connectionStateUSB;
      if (this.lastUSBConnectionState !== newState) {
        log.debug("new USB connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
        this.lastUSBConnectionState = newState;
        this.triggerConnectionStateChange();
        this.triggerRobotInfoUpdate();
      }
    }
  }, {
    key: "triggerBLEConnectionStateChange",
    value:
    /**
     * This should be called any time there is a connection state change for the
     * BLE connection. This will handle sending out the event if needed.
     */
    function triggerBLEConnectionStateChange() {
      var newState = this.connectionStateBLE;
      if (this.lastBLEConnectionState !== newState) {
        log.debug("new BLE connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
        this.lastBLEConnectionState = newState;
        this.triggerConnectionStateChange();
      }
    }
    //#endregion connection control

    //#region connection status
    /**
     * Get the current overall connection state. This is just indicating a
     * connection state for any device, and not to a robot is particular.
     */
  }, {
    key: "isConnected",
    get:
    /**
     * Simple indication of if there is an active connection to a device.
     * 
     * Note: this can be true and not connected to a robot.
     */
    function get() {
      return this.connectionState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    /**
     * Simple indication of if there is an active connection to a device via USB.
     * 
     * Note: this can be true and not connected to a robot.
     */
  }, {
    key: "isUSBConnected",
    get: function get() {
      return this.connectionStateUSB === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    /**
     * Simple indication of if there is an active connection to a device via BLE.
     * 
     * Note: this can be true and not connected to a robot.
     */
  }, {
    key: "isBLEConnected",
    get: function get() {
      return this.connectionStateBLE === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    // TODO: change this to have a generic type for the data.
    // TODO: extend this to support getting the list of devices from electron
    // the goal is that this will support the BLE list that is used for native 
    // (tablets), BLE for electron, and also USB devices with electron. right now
    // it is only native BLE. To do this, we need a simple data type with just
    // the name, signal strength when available, and some ID that can be used to
    // link back to the original data. This simple list will be built from
    // whatever data the low level system provides. This will also simplify the UI
    // as it can just display the simple data instead of trying to process it all.
    /**
     * Returns a list of devices that have been detected and can be connected to.
     * This is used by VEXcode to display the list of devices to the user to
     * select what to connect to.
     * @returns the list of detected devices
     * @throws OperationNotSupportedError
     */
  }, {
    key: "triggerRobotInfoUpdate",
    value:
    /**
     * Fires the event that the robot info has been updated and passes along the
     * current information.
     */
    function triggerRobotInfoUpdate() {
      try {
        var _robotInfo = this.getRobotInfo();
        if (_robotInfo) {
          log.debug("triggerRobotInfoUpdate", _robotInfo);
          _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_4__.fireEvent("HWInterface.BrainInfoUpdated", _robotInfo);
        } else {
          log.debug("triggerRobotInfoUpdate - no robot info");
        }
      } catch (e) {}
    }

    /**
     * sets the name of the currently connected brain
     * @param name the name to set the brain to
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "isScreenCaptureInProgress",
    get:
    /**
     * A flag used to check if a screen capture is in progress. 
     * 
     * This is important as the screen capture can take a relatively long time
     * but it happens in the background. project downloads and firmware updates
     * take time as well, but the UI is blocked during that so nothing else will
     * be happening.
     */
    function get() {
      return this.screenCaptureInProgress;
    }

    /**
     * captures the screen of the connected brain/robot and returns the image as a
     * base64 encoded string of a PNG image
     * @param progressCallback a callback to inform about how far along the transfer is
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "didTryFirmwareUpdate",
    get:
    /**
     * indicates if a firmware update has been attempted for the currently connected brain
     */
    function get() {
      return false;
    }
  }, {
    key: "didTryControllerFirmwareUpdate",
    get:
    /**
     * indicates if a firmware update has been attempted for the currently connected controller
     */
    function get() {
      return false;
    }

    /**
     * Call this to update the firmware of the connected controller.
     * @param progress a callback that can return the update progress
     * @param isDFU true if the device is in DFU mode (forces a update of at least the atmel firmware)
     * @throws OperationNotSupportedError
     * @throws NoControllerConnectedError
     */
  }, {
    key: "triggerConnectionUpdateUserPort",
    value:
    /**
     * This should only ever be called from the USB or BLE connection update
     * trigger methods. This actually sends out the combined status change event.
     * Note that while this will get sent out if either connection status actually
     * changes, the event might get called with the same "new" status. This can
     * happen when a parallel connection is being made. for example, if the USB
     * connection state is "connected", but the BLE state change to scanning,
     * we are still connected to the robot so the overall state is still connected.
     */
    function triggerConnectionUpdateUserPort() {
      var newState = this.connectionStateUserPort;
      log.debug("new overall connection state:", _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState[newState]);
      this.fireEvent("connectionStateChangeUserPort", newState);
      _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_4__.fireEvent("HWInterface.ConnectionStateChangeUserPort", newState);
    }

    /**
     * Get the current overall user port connection state. This is just indicating
     * a connection state for any device, and not to a robot is particular.
     */
  }, {
    key: "isConnectedUserPort",
    get:
    /**
     * Simple indication of if there is an active connection to a device.
     * 
     * Note: this can be true and not connected to a robot.
     */
    function get() {
      return this.connectionStateUserPort === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    /**
     * Simple indication of if there is an active connection to a device via USB.
     * 
     * Note: this can be true and not connected to a robot.
     */
  }, {
    key: "isUSBConnectedUserPort",
    get: function get() {
      return this.connectionStateUserPortUSB === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    /**
     * Simple indication of if there is an active connection to a device via BLE.
     * 
     * Note: this can be true and not connected to a robot.
     */
  }, {
    key: "isBLEConnectedUserPort",
    get: function get() {
      return this.connectionStateUserPortBLE === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected;
    }

    /**
     * Get the current connection state for the user port
     * @deprecated use connectionStateUserPort instead
     */
  }, {
    key: "getConnectionStateUserPort",
    value: function getConnectionStateUserPort() {
      return this.connectionStateUserPort;
    }

    /**
     * For brains that have a user port.
     * This will send and the provided data to the brain over the connected user port.
     * @param data the data to send over the user port
     * @throws OperationNotSupportedError
     * @throws NoUserPortConnectedError
     */
  }, {
    key: "isBrainTarget",
    value:
    //#endregion User Port comms

    //#region events
    /**
     * simple helper to know if VEXcode is currently configured to target a brain project
     * @returns true if the target is currently set to brain
     */
    function isBrainTarget() {
      return _AppInfo__WEBPACK_IMPORTED_MODULE_2__.appState.getAppState().hardwareTarget === "brain";
    }
  }, {
    key: "onAppStateChangeChange",
    value:
    /**
     * a common system for dealing with app state changes. This si mostly for
     * dealing with arm/brain project types
     * @param newState the new app state
     */
    function onAppStateChangeChange(newState) {
      if (newState.hardwareTarget !== this.previousHardwareTarget) {
        this.previousHardwareTarget = newState.hardwareTarget;
        this.onHardwareTargetChange(this.previousHardwareTarget);
      }
    }

    /**
     * handles changing the hardware target. This is intended to let the interface
     * show as not connected when targeting arm connections
     * @param newTarget the new target after the state change
     */
  }, {
    key: "on",
    value: function on(eventName, callback) {
      if (this.eventCallbacks[eventName].indexOf(callback) >= 0) {
        return;
      }
      this.eventCallbacks[eventName].push(callback);
    }
  }, {
    key: "off",
    value: function off(eventName, callback) {
      var i = this.eventCallbacks[eventName].indexOf(callback);
      if (i < 0) {
        log.warn("Unknown callback.");
        return;
      }
      this.eventCallbacks[eventName].splice(i, 1);
    }
  }, {
    key: "fireEvent",
    value: function fireEvent(eventName) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      log.debug.apply(log, ["fire event", eventName].concat(args));
      if (this.eventCallbacks[eventName]) {
        this.eventCallbacks[eventName].slice(0).forEach(function (callback) {
          callback.apply(void 0, args);
        });
      }
    }

    /**
     * This is called when any device is first connected to the interface. At
     * this point it could be a controller or an actual robot, but it is not
     * known yet.
     */
  }, {
    key: "onDeviceConnected",
    value: function onDeviceConnected() {
      log.debug("onDeviceConnected");
      this.fireEvent("deviceConnected", this.getRobotInfo());
    }

    /**
     * This is called when any device is fully disconnected to the interface.
     * This gets called for both the controller and the robot.
     */
  }, {
    key: "onDeviceDisconnected",
    value: function onDeviceDisconnected() {
      log.debug("onDeviceDisconnected");
      if (this.connectionState === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DeviceConnectionState.Connected) {
        this.fireEvent("deviceDisconnected");
      }
    }

    /**
     * This is called when a robot is first connected to the interface. It could
     * be right after the device connection if connected directly to a robot. It
     * could also be a while after when connecting via a controller or something.
     */
  }, {
    key: "onRobotConnected",
    value: function onRobotConnected() {
      log.debug("onRobotConnected");
    }

    /**
     * This is called when a robot is fully disconnected from the interface. This
     * can be called without the device disconnection event when connected via a
     * controller. This could be caused by the robot losing power while the
     * controller is still connected to VEXcode or some other case where the
     * controller is still actively connected, but not talking to the robot.
     */
  }, {
    key: "onRobotDisconnected",
    value: function onRobotDisconnected() {
      log.debug("onRobotDisconnected");
    }
  }, {
    key: "getLowLevelLog",
    value:
    /**
     * grab all the cached low level interface logs as an array of lines
     * @returns
     */
    function getLowLevelLog() {
      return this.lowLevelLogLines;
    }

    /**
     * grab all the cached low level interface logs as a single string with
     * new lines inserted
     * @returns
     */
  }, {
    key: "getLowLevelLogAsString",
    value: function getLowLevelLogAsString() {
      return this.lowLevelLogLines.join("\n");
    }
  }, {
    key: "clearLowLevelLog",
    value: function clearLowLevelLog() {
      this.lowLevelLogLines = [];
    }
  }, {
    key: "getLowLevelLogLevel",
    value:
    /**
     * Get the current low level log print level. This is what level will be sent
     * to the dev tools console.
     * @returns
     */
    function getLowLevelLogLevel() {
      return this.lowLevelLogLevel;
    }

    /**
     * Get the current low level log print level. This is what level will be sent
     * to the dev tools console.
     * @returns
     */
  }, {
    key: "setLowLevelLogLevel",
    value: function setLowLevelLogLevel(level) {
      if (typeof level === "string" && log.levels[level] !== undefined) {
        level = log.levels[level];
      }
      if (typeof level === "number" && level >= 0 && level <= log.levels.SILENT) {
        this.lowLevelLogLevel = level;
      } else {
        throw new RangeError("setLowLevelLogLevel() called with invalid level: " + level);
      }
    }

    // adding the log to a local array
  }, {
    key: "addToLowLevelLog",
    value: function addToLowLevelLog(methodName, loggerName, logLevel, logEntry) {
      if (!logEntry) {
        return;
      }
      try {
        // compose the log output from args
        var output = logEntry.map(function (x) {
          if (x === undefined) {
            return "undefined";
          } else if (x === null) {
            return "null";
          }
          return x.toString();
        }).join(" ");
        var finalConsoleOut = "[".concat(new Date().toISOString(), "] ").concat(methodName, " (").concat(loggerName, "): ") + output;

        // add to log
        if (this.lowLevelLogLines.length === this.lowLevelLogMaxLineLimit) {
          this.lowLevelLogLines.shift();
        }
        this.lowLevelLogLines.push(finalConsoleOut);
      } catch (ex) {
        log.error("error collecting logs", ex);
      }
    }
  }, {
    key: "bindLowLevelLogger",
    value: function bindLowLevelLogger() {
      var _this = this;
      if (this.isLowLevelLoggerBound) {
        log.warn("the low-level logger has already been bound");
        return;
      }
      var lowLevelLogger = this.getLowLevelLogger();
      if (!lowLevelLogger) {
        log.warn("no logger to bind");
        return;
      }
      var originalFactory = lowLevelLogger.methodFactory;
      lowLevelLogger.methodFactory = function (methodName, logLevel, loggerName) {
        var rawMethod = originalFactory(methodName, logLevel, loggerName);
        return function () {
          for (var _len2 = arguments.length, message = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            message[_key2] = arguments[_key2];
          }
          // log levels set in the module
          _this.addToLowLevelLog(methodName, loggerName, logLevel, message);
          // print only warnings and errors in dev console
          // note: logLevel always comes as info(2) as it the set level in the module. use methodName
          try {
            if (log.levels[methodName.toUpperCase()] >= _this.lowLevelLogLevel) {
              rawMethod.apply(void 0, message);
            }
          } catch (_unused) {
            // nothing to do here...
          }
        };
      };
      // force the logger to print all debug and higher messages to the local
      // history. we filter the console logs in the above logic to the
      // this.lowLevelLogLevel value.
      lowLevelLogger.setLevel(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.levels.DEBUG);
      this.isLowLevelLoggerBound = true;
    }

    /**
     * This will grab the logger instance for the low-level interface. This can
     * return null if there is no logger like for iOS/Android native BLE.
     */
  }, {
    key: "getHardwareInfo",
    value: //#endregion low-level logger
    function () {
      var _getHardwareInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", null);
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function getHardwareInfo() {
        return _getHardwareInfo.apply(this, arguments);
      }
      return getHardwareInfo;
    }()
  }]);
}();


/***/ }),

/***/ "./src/HardwareInterface/helpers.ts":
/*!******************************************!*\
  !*** ./src/HardwareInterface/helpers.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   arrayBufferToString: () => (/* binding */ arrayBufferToString),
/* harmony export */   blUpdateMessages: () => (/* binding */ blUpdateMessages),
/* harmony export */   firmwareChannel: () => (/* binding */ firmwareChannel),
/* harmony export */   forceBuffer: () => (/* binding */ forceBuffer),
/* harmony export */   fwUpdateMessages: () => (/* binding */ fwUpdateMessages),
/* harmony export */   isFirmwareUpToDate: () => (/* binding */ isFirmwareUpToDate),
/* harmony export */   minUpdateBattery: () => (/* binding */ minUpdateBattery),
/* harmony export */   stringToArrayBuffer: () => (/* binding */ stringToArrayBuffer),
/* harmony export */   vex123FWUpdateMessages: () => (/* binding */ vex123FWUpdateMessages),
/* harmony export */   vexFirmwareChannels: () => (/* binding */ vexFirmwareChannels)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../targetPlatform */ "./src/targetPlatform.ts");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("Helper");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();


function splitVersionStr(str) {
  return str.toLowerCase().replace("b", ".").replace("..", ".").split(".").map(function (v) {
    return parseInt(v, 10);
  });
}
function isFirmwareUpToDate(currentFirmwareStr, brainFirmwareStr) {
  var currentFirmware = splitVersionStr(currentFirmwareStr);
  var brainFirmware = splitVersionStr(brainFirmwareStr);
  var needsUpdate = false;
  if (brainFirmware[0] < currentFirmware[0]) {
    needsUpdate = true;
  } else if (brainFirmware[0] === currentFirmware[0]) {
    if (brainFirmware[1] < currentFirmware[1]) {
      needsUpdate = true;
    } else if (brainFirmware[1] === currentFirmware[1]) {
      if (brainFirmware[2] < currentFirmware[2]) {
        needsUpdate = true;
      } else if (brainFirmware[2] === currentFirmware[2]) {
        if (brainFirmware[3] < currentFirmware[3] || currentFirmware[3] === 0 && brainFirmware[3] !== 0) {
          needsUpdate = true;
        }
      }
    }
  }
  return !needsUpdate;
}
var vexFirmwareChannels = /*#__PURE__*/function (vexFirmwareChannels) {
  vexFirmwareChannels[vexFirmwareChannels["Release"] = 1] = "Release";
  vexFirmwareChannels[vexFirmwareChannels["Beta"] = 2] = "Beta";
  vexFirmwareChannels[vexFirmwareChannels["Developer"] = 3] = "Developer";
  vexFirmwareChannels[vexFirmwareChannels["Bootloader"] = 4] = "Bootloader";
  return vexFirmwareChannels;
}(vexFirmwareChannels || {});
var fwUpdateMessages = ["GO FW Update In-Progress-1", "GO Update In-Progress-2"];
var blUpdateMessages = ["GO BL Update In-Progress-1", "GO Update In-Progress-2"];
var vex123FWUpdateMessages = ["GO FW Update In-Progress-1", "123 Update In-Progress-2"];
var firmwareChannelGO = vexFirmwareChannels.Release;
var firmwareChannel123 = vexFirmwareChannels.Release;
var minUpdateBattery = 60;
var firmwareChannel = _targetPlatform__WEBPACK_IMPORTED_MODULE_1__.targetIsGO ? firmwareChannelGO : firmwareChannel123;
function stringToArrayBuffer(str) {
  var abLen = str.length;
  var ab = new Uint8Array(abLen);
  for (var i = 0; i < abLen; i++) {
    ab[i] = str.charCodeAt(i);
  }
  return ab.buffer;
}
function arrayBufferToString(ab) {
  var output = "";
  var bytes = new Uint8Array(ab);
  var len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    output += String.fromCharCode(bytes[i]);
  }
  return output;
}
function forceBuffer(data) {
  if (data && data instanceof Buffer) {
    return data;
  }
  return new Buffer(data);
}


/***/ })

}]);
//# sourceMappingURL=9c6153473f2417d84a80.src_HardwareInterface_HWInterfaceBase_ts-src_HardwareInterface_helpers_ts.bundle.js.map