"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_VexSerialDevices_index_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIM.ts":
/*!***************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIM.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialDeviceAIM: () => (/* binding */ VexSerialDeviceAIM)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceAIM");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");







if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_7__.targetIsAIM) {
  log.warn("VexSerialDeviceAIM loaded in non-AIM build");
}
var VexSerialDeviceAIM = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceAIM() {
    var _this;
    _classCallCheck(this, VexSerialDeviceAIM);
    _this = _callSuper(this, VexSerialDeviceAIM);
    _defineProperty(_this, "classIdent", 'Vex AIM serial');
    _defineProperty(_this, "versionBoot", [0, 0]);
    _defineProperty(_this, "versionBrain", [0, 0]);
    _defineProperty(_this, "versionJoystick", [0, 0]);
    _defineProperty(_this, "versionSystemStr", '');
    _defineProperty(_this, "versionHardware", 0);
    _defineProperty(_this, "uniqueId", 0);
    _defineProperty(_this, "deviceName", '');
    _defineProperty(_this, "deviceTeamNumber", '0000');
    // not used 
    _defineProperty(_this, "catalogAddresses", []);
    _defineProperty(_this, "programInfo", []);
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    _this.deviceType = null;
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed AIM");
    return _this;
  }
  _inherits(VexSerialDeviceAIM, _VexSerialDevice);
  return _createClass(VexSerialDeviceAIM, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0700
      } // brain
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return "EXPController";
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      var isBrain = portInfo && portInfo.usbProductId === 0x0700;
      if (isBrain) {
        this.deviceType = "AIM";
      } else {
        log.warn("unknown product ID", portInfo);
        this.deviceType = null;
      }
    }
    //#endregion connection information

    //#region connection check helpers
    //#endregion connection check helpers

    //#region brain information
  }, {
    key: "brainGetSystemVersion",
    value: function () {
      var _brainGetSystemVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var reply;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("brainGetSystemVersion");
              this.checkSupported();
              this.checkRequiredConnection();
              _context.prev = 3;
              _context.next = 6;
              return this.writeDataAsync(this.cdc.systemVersion());
            case 6:
              reply = _context.sent;
              this.decodeSystemVersion(reply);
              return _context.abrupt("return", reply);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", undefined);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 11]]);
      }));
      function brainGetSystemVersion() {
        return _brainGetSystemVersion.apply(this, arguments);
      }
      return brainGetSystemVersion;
    }()
    /**
     * Sends a remote touch command to the connected AIM robot
     * @param xPosition the x position of the touch on the screen (0-239)
     * @param yPosition the y position of the touch on the screen (0-239)
     * @returns a promise that resolves once the command has been sent
     */
  }, {
    key: "sendRemoteTouch",
    value: (function () {
      var _sendRemoteTouch = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(xPosition, yPosition) {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (xPosition < 0) {
                log.warn("xPosition out of range - less than 0:", xPosition);
                xPosition = 0;
              } else if (xPosition > 239) {
                log.warn("xPosition out of range - greater than 239:", xPosition);
                xPosition = 239;
              }
              if (yPosition < 0) {
                log.warn("yPosition out of range - less than 0:", yPosition);
                yPosition = 0;
              } else if (yPosition > 239) {
                log.warn("xPosition out of range - greater than 239:", yPosition);
                yPosition = 239;
              }
              this.checkRequiredConnection();
              _context2.prev = 3;
              _context2.next = 6;
              return this.writeDataAsync(this.cdc.cdc2_AIM_RemoteTouch(xPosition, yPosition));
            case 6:
              _context2.next = 11;
              break;
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](3);
              log.warn("error sending remote touch command:", _context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 8]]);
      }));
      function sendRemoteTouch(_x, _x2) {
        return _sendRemoteTouch.apply(this, arguments);
      }
      return sendRemoteTouch;
    }()
    /**
     * Sends a remote touch command to a AIM robot using a custom sender function
     * @param sender the function to send the message
     * @param xPosition the x position of the touch on the screen (0-239)
     * @param yPosition the y position of the touch on the screen (0-239)
     * @returns a promise that resolves once the command has been sent
     */
    )
  }, {
    key: "sendRemoteTouchCustom",
    value: (function () {
      var _sendRemoteTouchCustom = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(sender, xPosition, yPosition) {
        var message;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (xPosition < 0) {
                log.warn("xPosition out of range - less than 0:", xPosition);
                xPosition = 0;
              } else if (xPosition > 239) {
                log.warn("xPosition out of range - greater than 239:", xPosition);
                xPosition = 239;
              }
              if (yPosition < 0) {
                log.warn("yPosition out of range - less than 0:", yPosition);
                yPosition = 0;
              } else if (yPosition > 239) {
                log.warn("xPosition out of range - greater than 239:", yPosition);
                yPosition = 239;
              }
              _context3.prev = 2;
              message = this.cdc.cdc2_AIM_RemoteTouch(xPosition, yPosition);
              _context3.next = 6;
              return sender(message.data);
            case 6:
              _context3.next = 11;
              break;
            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](2);
              log.warn("error sending custom remote touch command:", _context3.t0);
            case 11:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[2, 8]]);
      }));
      function sendRemoteTouchCustom(_x3, _x4, _x5) {
        return _sendRemoteTouchCustom.apply(this, arguments);
      }
      return sendRemoteTouchCustom;
    }()
    /**
     * this will tell the AIM to play the specified sound file
     * @param fileName the name of the sound file to play
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "playSound",
    value: (function () {
      var _playSound = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(fileName) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              this.checkSupported();
              this.checkRequiredConnection();
              _context4.next = 5;
              return this.writeDataAsync(this.cdc.V5_Cdc2FileLoadAndRun(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.AIM_SOUND, 0, fileName));
            case 5:
              return _context4.abrupt("return", true);
            case 8:
              _context4.prev = 8;
              _context4.t0 = _context4["catch"](0);
              log.warn("error playing sound:", _context4.t0);
              return _context4.abrupt("return", false);
            case 12:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 8]]);
      }));
      function playSound(_x6) {
        return _playSound.apply(this, arguments);
      }
      return playSound;
    }()
    /**
     * this will tell the AIM to play the specified sound file
     * @param fileName the name of the sound file to play
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "playSoundCustomSender",
    value: (function () {
      var _playSoundCustomSender = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(sender, fileName) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return sender(this.cdc.V5_Cdc2FileLoadAndRun(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.AIM_SOUND, 0, fileName).data);
            case 3:
              return _context5.abrupt("return", true);
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              log.warn("error playing sound:", _context5.t0);
              return _context5.abrupt("return", false);
            case 10:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this, [[0, 6]]);
      }));
      function playSoundCustomSender(_x7, _x8) {
        return _playSoundCustomSender.apply(this, arguments);
      }
      return playSoundCustomSender;
    }() //#endregion brain information
    //#region controller information
    //#endregion controller information
    //#region firmware
    )
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              catalogURL = "https://content.vexrobotics.com/vexos/public/AIM/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context6.prev = 2;
              _context6.next = 5;
              return fetch(catalogURL);
            case 5:
              catalogResponse = _context6.sent;
              _context6.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context6.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_AIM_/, "");
              return _context6.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 14:
              _context6.prev = 14;
              _context6.t0 = _context6["catch"](2);
              log.warn(_context6.t0);
              return _context6.abrupt("return", null);
            case 18:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[2, 14]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(progressCB, connectPrompt) {
        var brainVersionStart, lastProgress, totalSteps, sendProgress, fw, manifestFileData, manifest, isGPRunningBootloader, gpApplicationFilename, gpApplicationVersion, espApplicationFilename, espApplicationVersion, espApplicationAddress, espBootloaderFilename, espBootloaderVersion, espBootloaderAddress, espPartitionFilename, espPartitionVersion, espPartitionAddress, bootFW, bootRes, applicationData, applicationResponse, partitionData, partitionResponse, bootloaderData, bootloaderResponse;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              // TODO: block this if connected over controller

              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.done,
                prog: -1,
                msg: ""
              }; // this is manually calculated... it is the total number of steps in the update process with weight values
              totalSteps = 1 + 60 + 20 + 1 + 1;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = 0;
                var weight = 1;
                switch (state) {
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.LoadingFirmwareFile:
                    weight = 1;
                    offset = 0;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.ApplicationUpdate:
                    weight = 60;
                    offset = 1;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioApplicationUpdate:
                    weight = 20;
                    offset = 61;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioPartitionUpdate:
                    weight = 1;
                    offset = 81;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioBootloaderUpdate:
                    weight = 1;
                    offset = 82;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.done:
                    weight = 1;
                    offset = 87;
                    break;
                }
                var totalProgress = (offset + prog * weight) / totalSteps;
                log.debug("brain firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates[state], state, prog, totalProgress, msg, offset);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              }; // based on function updateFirmware_exp from device manager
              _context7.prev = 7;
              _context7.next = 10;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 10:
              fw = _context7.sent;
              // 2. get manifest data  
              log.debug("grabbing manifest");
              manifestFileData = fw.getFile("manifest.json");
              log.debug("manifestFile:", manifestFileData);
              manifest = JSON.parse(new TextDecoder().decode(manifestFileData.data));
              log.debug("manifest", manifest);

              // 3. check to see what to update and get metadata
              isGPRunningBootloader = this.primaryBootSource === true || this._ramBootloader === true;
              gpApplicationFilename = manifest["boot.bin"].file;
              gpApplicationVersion = manifest["boot.bin"].version;
              espApplicationFilename = manifest.application.file;
              espApplicationVersion = manifest.application.version;
              espApplicationAddress = manifest.application.addr;
              espBootloaderFilename = manifest.bootloader.file;
              espBootloaderVersion = manifest.bootloader.version;
              espBootloaderAddress = manifest.bootloader.addr;
              espPartitionFilename = manifest.partition_table.file;
              espPartitionVersion = manifest.partition_table.version;
              espPartitionAddress = manifest.partition_table.addr; // 4. update boot.bin (GP Processor)
              this.isUpdatingFirmware = true;
              log.info("updating firmware");
              log.debug("boot.bin version:", gpApplicationVersion);
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.ApplicationUpdate, 0, "Updating Firmware");
              bootFW = fw.getFile(gpApplicationFilename);
              _context7.next = 35;
              return this.updateBrain(bootFW.data, 1, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.ApplicationUpdate, percent, "Updating Firmware");
              });
            case 35:
              bootRes = _context7.sent;
              if (bootRes) {
                _context7.next = 38;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_6__.ErrorUpdatingBrainBoot();
            case 38:
              // if the GP was running in bootloader mode, it needs to reboot first to access the esp32
              if (isGPRunningBootloader) {
                // TODO: finish this
                log.error("GP was running in bootloader mode, need to reboot first");
              }
              this.isUpdatingFirmware = false;
              _context7.next = 42;
              return this.delay(100);
            case 42:
              // 5. update esp32 application
              log.info("updating esp32 application");
              log.debug("esp32 application - version:", espApplicationVersion, " address:", espApplicationAddress);
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioApplicationUpdate, 0, "Updating Radio");
              applicationData = fw.getFile(espApplicationFilename);
              _context7.next = 48;
              return this.updateBrain(applicationData.data, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_FLASH, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioApplicationUpdate, percent, "Updating Radio");
              }, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.ESP32, parseInt(espApplicationAddress));
            case 48:
              applicationResponse = _context7.sent;
              if (applicationResponse) {
                _context7.next = 51;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_6__.ErrorUpdatingAIMRadioApplication();
            case 51:
              log.debug("done updating esp32 application");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioApplicationUpdate, 1, "Updating Radio");
              _context7.next = 55;
              return this.delay(100);
            case 55:
              // 6. update esp32 partition table
              log.info("updating esp32 partition table");
              log.debug("esp32 partition table - version:", espPartitionVersion, " address:", espPartitionAddress);
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioPartitionUpdate, 0, "Updating Radio Partition Table");
              partitionData = fw.getFile(espPartitionFilename);
              _context7.next = 61;
              return this.updateBrain(partitionData.data, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_FLASH, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioPartitionUpdate, percent, "Updating Radio Partition Table");
              }, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.ESP32, parseInt(espPartitionAddress));
            case 61:
              partitionResponse = _context7.sent;
              if (partitionResponse) {
                _context7.next = 64;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_6__.ErrorUpdatingAIMRadioPartitionTable();
            case 64:
              log.debug("done updating esp32 partition table");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioPartitionUpdate, 1, "Updating Radio Partition Table");
              _context7.next = 68;
              return this.delay(100);
            case 68:
              // 7. update esp32 bootloader
              log.info("updating esp32 bootloader");
              log.debug("esp32 bootloader - version:", espBootloaderVersion, " address:", espBootloaderAddress);
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioBootloaderUpdate, 0, "Updating Radio Bootloader");
              bootloaderData = fw.getFile(espBootloaderFilename);
              _context7.next = 74;
              return this.updateBrain(bootloaderData.data, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_FLASH, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioBootloaderUpdate, percent, "Updating Radio Bootloader");
              }, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.ESP32, parseInt(espBootloaderAddress));
            case 74:
              bootloaderResponse = _context7.sent;
              if (bootloaderResponse) {
                _context7.next = 77;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_6__.ErrorUpdatingAIMRadioBootloader();
            case 77:
              log.debug("done updating esp32 bootloader");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.RadioBootloaderUpdate, 1, "Updating Radio Bootloader");
              _context7.next = 81;
              return this.delay(100);
            case 81:
              log.debug("restarting the AIM robot");
              _context7.next = 84;
              return this.writeDataAsync(this.cdc.V5_Cdc2FactoryReset(false));
            case 84:
              this.onDisconnect();

              // // 5. reboot and reconnect
              // log.info("rebooting... waiting for connection loss");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0, "Waiting For Poweroff");
              // while (this.isConnected) {
              //   await this.delay(500);
              // }

              // log.info("rebooting... waiting for reboot");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.3, "Waiting For Reboot");
              // await this.delay(10000);

              // log.info("rebooting... waiting for new connection");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.5, "Waiting For Connection");
              // let reconnected = false;
              // while (!reconnected) {
              //   try {
              //     await this.reconnect();
              //     reconnected = true;
              //   } catch(err) {
              //     if (err instanceof DOMException) {
              //       if (err.name === "SecurityError") {
              //         log.info("failed to open connect prompt due to security permissions");
              //         await connectPrompt();  
              //       } else if (err.name === "NotFoundError") {
              //         log.info("user hit cancel")
              //         await connectPrompt();
              //       }
              //     } else {
              //       log.warn("error name:", err.name, err);
              //       throw err;
              //     }
              //   }
              // }

              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_4__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIMUpdateStates.done, 1, "Update Complete");

              // setTimeout(async () => {
              //   await this.fetchBrainInfo();
              //   await this.checkUpdateNeededBrain();
              //   this.fireEvent("deviceInfoUpdated", this.getRobotInfo());
              // }, 200);

              // this.isUpdatingFirmware = false;
              _context7.next = 97;
              break;
            case 90:
              _context7.prev = 90;
              _context7.t0 = _context7["catch"](7);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_4__.UpdateNeededOptions.Unsure;
              log.debug("brain update error:", _context7.t0);
              log.debug("brain version before update start:", brainVersionStart);
              throw _context7.t0;
            case 97:
              return _context7.abrupt("return", true);
            case 98:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[7, 90]]);
      }));
      function updateFirmware(_x9, _x10) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }()
    /**
     * checks to see if there is a mismatch between the CPU versions
     * @returns true if there is a mismatch, false otherwise
     */
  }, {
    key: "checkCPUVersionMismatch",
    value: function checkCPUVersionMismatch() {
      var _this$brainVersionCPU, _this$brainVersionCPU2;
      log.debug("checkCPUVersionMismatch CPU0:", (_this$brainVersionCPU = this.brainVersionCPU0) === null || _this$brainVersionCPU === void 0 ? void 0 : _this$brainVersionCPU.toInternalString(), "CPU1:", (_this$brainVersionCPU2 = this.brainVersionCPU1) === null || _this$brainVersionCPU2 === void 0 ? void 0 : _this$brainVersionCPU2.toInternalString());
      return this.brainVersionCPU0 && this.brainVersionCPU1 && this.brainVersionCPU0.compare(this.brainVersionCPU1) !== 0;
    }

    //#endregion firmware

    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWAIM();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(data, info, progress) {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              return _context8.abrupt("return", _superPropGet(VexSerialDeviceAIM, "downloadProgram", this, 3)([data, info, progress]));
            case 1:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function downloadProgram(_x11, _x12, _x13) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() //#endregion downloads
    //#region brain files
  }, {
    key: "downloadSoundFile",
    value: function () {
      var _downloadSoundFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(filename, data, progress) {
        var fileData;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              fileData = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
              return _context9.abrupt("return", this.saveFileToRobot(filename, fileData, progress, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.AIM_SOUND));
            case 2:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function downloadSoundFile(_x14, _x15, _x16) {
        return _downloadSoundFile.apply(this, arguments);
      }
      return downloadSoundFile;
    }()
  }, {
    key: "downloadImageFile",
    value: function () {
      var _downloadImageFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(filename, data, progress) {
        var fileData;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              fileData = data instanceof ArrayBuffer ? new Uint8Array(data) : data;
              return _context10.abrupt("return", this.saveFileToRobot(filename, fileData, progress, _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.AIM_IMAGE));
            case 2:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function downloadImageFile(_x17, _x18, _x19) {
        return _downloadImageFile.apply(this, arguments);
      }
      return downloadImageFile;
    }() //#endregion brain files
    //#region file metadata helpers
    //#endregion file metadata helpers
    //#region brain info meta data helpers
    //#endregion brain info meta data helpers
    //#region Python vm helpers
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return {
        extType: 0x61,
        loadAddress: 0,
        linkFile: "",
        linkFileVID: 0
      };
    }
  }, {
    key: "getVmMeta",
    value: function getVmMeta() {
      return {
        crc: 0,
        version: 0
      };
    }
  }, {
    key: "getPythonVMResourcePath",
    value: function getPythonVMResourcePath() {
      return null;
    }
  }, {
    key: "getPythonVmDownloadInfo",
    value: function getPythonVmDownloadInfo() {
      return null;
    }
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {
      this.downloadTargetSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI);
      this.downloadAddressSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.USR_ADDRESS);
    }
  }, {
    key: "checkAndInstallPythonVm",
    value: function () {
      var _checkAndInstallPythonVm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(crc, version, progressCallback) {
        var force,
          _args11 = arguments;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              force = _args11.length > 3 && _args11[3] !== undefined ? _args11[3] : false;
              return _context11.abrupt("return", {
                err: 0,
                msg: "no VM  check",
                data: null
              });
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function checkAndInstallPythonVm(_x20, _x21, _x22) {
        return _checkAndInstallPythonVm.apply(this, arguments);
      }
      return checkAndInstallPythonVm;
    }() //#endregion Python vm helpers
    //#region controller firmware
  }, {
    key: "radioChipId",
    get: function get() {
      return 0;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__.DFUTargetDevice.None;
    }
    //#endregion controller firmware

    //#region controller comms
    //#endregion controller comms

    //#region low level comms
  }, {
    key: "decodeSystemVersion",
    value: function decodeSystemVersion(msg) {
      /*
        byte 0 = 0xAA
        byte 1 = 0x55
        byte 2 = 0xA4 // CDC_GET_SYS_VERSION
        byte 3 = 8 // size of the data ... at least for now
        bytes 4-11 = the version structure
          byte 0 = major
          byte 1 = minor
          byte 2 = build
          byte 3 = hardware version
          byte 4 = beta version
          byte 5 = product id // not used?
          byte 6 = product flags
            bit0 = ?
            bit1 = battery low
            bit2 = ?
            bit3 = ?
            bit4 = ?
            bit5 = ?
            bit6 = ?
            bit7 = ?
          byte 7 = reserved
      */
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        this.versionSystem[0] = dvb.getUint8(extcmd + 0);
        this.versionSystem[1] = dvb.getUint8(extcmd + 1);
        this.versionSystem[2] = dvb.getUint8(extcmd + 2);
        this.versionSystem[3] = dvb.getUint8(extcmd + 4);
        this.updateSystemVersionString();
      }
    }
    //#endregion low level comms

    //#region event handlers
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIR.ts":
/*!***************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIR.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialDeviceAIR: () => (/* binding */ VexSerialDeviceAIR)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @zip.js/zip.js */ "./node_modules/@zip.js/zip.js/index.js");
/* harmony import */ var _layout_ProjectImageManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layout/ProjectImageManager */ "./src/layout/ProjectImageManager.tsx");
/* harmony import */ var _VexCDC__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VexCDC */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexCDC.ts");
/* harmony import */ var _layout_ProjectSoundManager__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../layout/ProjectSoundManager */ "./src/layout/ProjectSoundManager.tsx");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _appVersionInfo__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../appVersionInfo */ "./src/appVersionInfo.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceAIR");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");












if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_10__.targetIsAIR) {
  log.warn("VexSerialDeviceAIR loaded in non- build");
}
var VexSerialDeviceAIR = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceAIR() {
    var _this;
    _classCallCheck(this, VexSerialDeviceAIR);
    _this = _callSuper(this, VexSerialDeviceAIR);
    _defineProperty(_this, "classIdent", 'Vex AIR serial');
    _defineProperty(_this, "versionBoot", [0, 0]);
    _defineProperty(_this, "versionBrain", [0, 0]);
    _defineProperty(_this, "versionJoystick", [0, 0]);
    _defineProperty(_this, "versionSystemStr", '');
    _defineProperty(_this, "versionHardware", 0);
    _defineProperty(_this, "uniqueId", 0);
    _defineProperty(_this, "deviceName", '');
    _defineProperty(_this, "deviceTeamNumber", '0000');
    // not used 
    _defineProperty(_this, "catalogAddresses", []);
    _defineProperty(_this, "programInfo", []);
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    //#endregion downloads
    //#region Python vm helpers
    _defineProperty(_this, "SDKFileName", null);
    _defineProperty(_this, "sdkManifestURL", "https://content.vexrobotics.com/vexos/public/AIR/vscode/sdk/python/manifest_vexcode.json");
    _defineProperty(_this, "_sdkVersion", null);
    _this.deviceType = null;
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed AIR");

    // get the VM to grab the current SDK version. This is easier than having to have duplicate code.
    // short delay to let other thing process first.
    setTimeout(_this.getPythonVMFile.bind(_this), 50);
    return _this;
  }
  _inherits(VexSerialDeviceAIR, _VexSerialDevice);
  return _createClass(VexSerialDeviceAIR, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      log.debug("getBasePortFilters");
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0a10
      } // AIR controller
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return "EXPController";
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      log.debug("processPortInformation", portInfo);
      var isAIRController = portInfo && portInfo.usbProductId === 0x0a10;
      if (isAIRController) {
        this.deviceType = "AIRController";
      } else {
        log.warn("unknown product ID", portInfo);
        this.deviceType = null;
      }
    }
    //#endregion connection information
  }, {
    key: "fetchControllerInfo",
    value: function () {
      var _fetchControllerInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchControllerInfo() {
        return _fetchControllerInfo.apply(this, arguments);
      }
      return fetchControllerInfo;
    }() //#region connection check helpers
    //#endregion connection check helpers
    //#region brain information
  }, {
    key: "brainGetSystemVersion",
    value: function () {
      var _brainGetSystemVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var reply;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.info("brainGetSystemVersion");
              this.checkSupported();
              this.checkRequiredConnection();
              _context2.prev = 3;
              _context2.next = 6;
              return this.writeDataAsync(this.cdc.systemVersion());
            case 6:
              reply = _context2.sent;
              this.decodeSystemVersion(reply);
              return _context2.abrupt("return", reply);
            case 11:
              _context2.prev = 11;
              _context2.t0 = _context2["catch"](3);
              return _context2.abrupt("return", undefined);
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[3, 11]]);
      }));
      function brainGetSystemVersion() {
        return _brainGetSystemVersion.apply(this, arguments);
      }
      return brainGetSystemVersion;
    }() //#endregion brain information
    //#region controller information
    //#endregion controller information
    //#region firmware
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              catalogURL = "https://content.vexrobotics.com/vexos/beta/AIR/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context3.prev = 2;
              _context3.next = 5;
              return fetch(catalogURL);
            case 5:
              catalogResponse = _context3.sent;
              _context3.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context3.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_AIR_/, "");
              log.debug("versionStr:", versionStr);
              return _context3.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 15:
              _context3.prev = 15;
              _context3.t0 = _context3["catch"](2);
              log.warn(_context3.t0);
              return _context3.abrupt("return", null);
            case 19:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[2, 15]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(progressCB, connectPrompt) {
        var _this2 = this;
        var brainVersionStart, lastProgress, totalSteps, sendProgress, fw, vexOSFile, zipData, transferResult, updateResult;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // TODO: block this if connected over controller

              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.done,
                prog: -1,
                msg: ""
              }; // this is manually calculated... it is the total number of steps in the update process with weight values
              totalSteps = 1 + 30 + 6;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = 0;
                var weight = 1;
                switch (state) {
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.LoadingFirmwareFile:
                    weight = 1;
                    offset = 0;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.TransferFirmware:
                    weight = 30;
                    offset = 1;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.ApplyUpdatedFirmware:
                    weight = 6;
                    offset = 31;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.done:
                    weight = 1;
                    offset = 40;
                    break;
                }
                var totalProgress = (offset + prog * weight) / totalSteps;
                log.debug("brain firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates[state], state, prog, totalProgress, msg, offset);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              };
              _context4.prev = 7;
              _context4.next = 10;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 10:
              fw = _context4.sent;
              _context4.next = 13;
              return this.writeDataAsync(this.cdc.V5_Cdc2FactoryEnable());
            case 13:
              // 3. transfer firmware file
              log.info("transferring firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.TransferFirmware, 0, "Transferring Firmware");
              this.downloadAddressSet(0);
              this.downloadTargetSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI);
              vexOSFile = fw.getBlob();
              _context4.t0 = Uint8Array;
              _context4.next = 21;
              return vexOSFile.arrayBuffer();
            case 21:
              _context4.t1 = _context4.sent;
              zipData = new _context4.t0(_context4.t1);
              _context4.next = 25;
              return this.saveFileToRobot("VEXOS_AIR.zip", zipData, function (percent) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.TransferFirmware, percent, "Transferring Firmware");
              }, 2);
            case 25:
              transferResult = _context4.sent;
              if (transferResult) {
                _context4.next = 29;
                break;
              }
              log.warn("failed to transfer firmware file");
              return _context4.abrupt("return", false);
            case 29:
              _context4.next = 31;
              return this.delay(1000);
            case 31:
              // 4. apply update
              log.info("updating firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.ApplyUpdatedFirmware, 0, "Updating Firmware");
              _context4.next = 35;
              return new Promise(function (resolve, reject) {
                var _pollStatus = function pollStatus() {
                  _this2.writeDataAsync(_this2.cdc.V5_Cdc2FactoryStatus(), {
                    timeout: 5000
                  }).then(function (reply) {
                    // check reply
                    var rep = _this2.decodeFactoryStatusReply(reply);
                    log.debug("factory status reply:", rep);
                    if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_8__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                      _this2.decodeFileNack(rep.ack);
                      reject(false);
                      return;
                    }
                    // percent of 255 indicates error
                    if (rep.percent === 255) {
                      reject(false);
                      return;
                    }

                    // Done ?
                    if (rep.status == 0 || rep.percent === 100) {
                      resolve(true);
                    } else {
                      sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.ApplyUpdatedFirmware, rep.percent / 100, "Updating Firmware");
                      setTimeout(function () {
                        _pollStatus();
                      }, 500);
                    }
                  })["catch"](function () {
                    reject(undefined);
                  });
                };
                _pollStatus();
              });
            case 35:
              updateResult = _context4.sent;
              if (updateResult) {
                _context4.next = 39;
                break;
              }
              log.warn("failed to apply updated firmware");
              return _context4.abrupt("return", false);
            case 39:
              _context4.next = 41;
              return this.delay(1000);
            case 41:
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_4__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIRUpdateStates.done, 1, "Update Complete");
              _context4.next = 52;
              break;
            case 46:
              _context4.prev = 46;
              _context4.t2 = _context4["catch"](7);
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_4__.UpdateNeededOptions.Unsure;
              log.debug("brain update error:", _context4.t2);
              log.debug("brain version before update start:", brainVersionStart);
              throw _context4.t2;
            case 52:
              return _context4.abrupt("return", true);
            case 53:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[7, 46]]);
      }));
      function updateFirmware(_x, _x2) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }() //#endregion firmware
    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWAIR();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data, info, progressCallback) {
        var _this3 = this;
        var manifest, externalFileAttributes, pythonMainFile, zipWriter, imagesFromCache, i, image, soundsFromCache, _i, sound, zipData, buffer, path, progProgress, downloadState, vmUpdateNeeded, vmProgress, callBackAggregator, callBackProgramDownload, callBackVMDownload;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              // AIR has a new process for the project data. everything else (minus IQ1)
              // uses an ini file for the project metadata. AIR has a file for that, but
              // it is all stored inside a zip file now. there is still ap metadata file,
              // but the structure is different. As a result we don't use the shared
              // download logic and instead have to recrate it here and also build the
              // zip file we need to download
              // TIMESTAMP=2025-06-10T14:13:20.027Z
              // NAME=controllerTest1
              // DESCRIPTION=
              // LANGUAGE=1
              // MAIN_FILE=src/main.py
              // SETTINGS=0008
              // settings has the slot number in the lowest nibble, not sure about the other values
              // we will place the main.py file contents in the src directory of the zip file to keep things simple
              // create the project metadata string
              manifest = ["TIMESTAMP=".concat(new Date().toISOString()), "NAME=".concat(info.name || "VEXcode AIR Project"), "DESCRIPTION=", "LANGUAGE=1", // 1 for Python
              "MAIN_FILE=src/main.py", "SETTINGS=".concat((info.slot + 1).toString(16).padStart(4, '0')) // slot number in hex, padded to 4 digits
              ].join("\n");
              log.debug("manifest:", manifest);

              // option to set file permissions to 666 (read/write for owner, group, and others)
              externalFileAttributes = 438 << 16 | 0x00000000;
              pythonMainFile = new TextDecoder().decode(data);
              log.debug("pythonMainFile:", pythonMainFile);
              // create the zip file for the project with the manifest and project data
              log.debug("creating zip file for AIR project");
              zipWriter = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.ZipWriter(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.BlobWriter("application/zip"));
              _context6.next = 9;
              return zipWriter.add("program.manifest", new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.TextReader(manifest));
            case 9:
              _context6.next = 11;
              return zipWriter.add("src/main.py", new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.TextReader(pythonMainFile), {
                externalFileAttributes: externalFileAttributes
              });
            case 11:
              _context6.next = 13;
              return _layout_ProjectImageManager__WEBPACK_IMPORTED_MODULE_7__.projectImageSlotSystem.getLoadedImagesForExport();
            case 13:
              imagesFromCache = _context6.sent;
              log.debug("Number of images in cache:", imagesFromCache.length);
              i = 0;
            case 16:
              if (!(i < imagesFromCache.length)) {
                _context6.next = 27;
                break;
              }
              image = imagesFromCache[i];
              if (!image.data) {
                _context6.next = 23;
                break;
              }
              _context6.next = 21;
              return zipWriter.add("src/images/".concat(image.fileName), new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.BlobReader(image.data), {
                externalFileAttributes: externalFileAttributes
              });
            case 21:
              _context6.next = 24;
              break;
            case 23:
              log.warn("no image data for filename:", image.fileName);
            case 24:
              i++;
              _context6.next = 16;
              break;
            case 27:
              _context6.next = 29;
              return _layout_ProjectSoundManager__WEBPACK_IMPORTED_MODULE_9__.projectSoundSlotSystem.getLoadedSoundsForExport();
            case 29:
              soundsFromCache = _context6.sent;
              log.debug("Number of sounds in cache:", soundsFromCache.length);
              _i = 0;
            case 32:
              if (!(_i < soundsFromCache.length)) {
                _context6.next = 44;
                break;
              }
              sound = soundsFromCache[_i];
              if (!sound.data) {
                _context6.next = 40;
                break;
              }
              log.debug("adding this data: ", "src/sounds/".concat(sound.fileName));
              _context6.next = 38;
              return zipWriter.add("src/sounds/".concat(sound.fileName), new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.BlobReader(sound.data), {
                externalFileAttributes: externalFileAttributes
              });
            case 38:
              _context6.next = 41;
              break;
            case 40:
              log.warn("no sound data for filename:", sound.fileName);
            case 41:
              _i++;
              _context6.next = 32;
              break;
            case 44:
              _context6.next = 46;
              return zipWriter.close();
            case 46:
              zipData = _context6.sent;
              _context6.t0 = Uint8Array;
              _context6.next = 50;
              return zipData.arrayBuffer();
            case 50:
              _context6.t1 = _context6.sent;
              buffer = new _context6.t0(_context6.t1);
              path = "slot_".concat(info.slot + 1);
              progProgress = 0;
              downloadState = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.None;
              vmUpdateNeeded = false;
              vmProgress = 0;
              callBackAggregator = function callBackAggregator(progress) {
                var finalProgress = 0;
                //error check
                if (progress == -1) {
                  finalProgress = -1;
                } else if (vmUpdateNeeded) {
                  finalProgress = (progProgress + vmProgress) / 2;
                } else {
                  finalProgress = progProgress;
                }
                if (progressCallback) {
                  progressCallback({
                    "progress": finalProgress,
                    "state": downloadState
                  });
                }
              };
              callBackProgramDownload = function callBackProgramDownload(progress) {
                downloadState = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram;
                progProgress = progress;
                callBackAggregator(progress);
              };
              callBackVMDownload = function callBackVMDownload(data) {
                downloadState = data.state;
                if (data.state == _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM) {
                  vmUpdateNeeded = true;
                  vmProgress = data.progress;
                  callBackAggregator(data.progress);
                }
              };
              return _context6.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(resolve, reject) {
                  var meta, metaData, vmResult;
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) switch (_context5.prev = _context5.next) {
                      case 0:
                        log.debug("stopping current project on the brain");
                        _context5.next = 3;
                        return _this3.stop();
                      case 3:
                        meta = _this3.getVmMeta();
                        if (!(meta instanceof Promise)) {
                          _context5.next = 10;
                          break;
                        }
                        _context5.next = 7;
                        return meta;
                      case 7:
                        _context5.t0 = _context5.sent;
                        _context5.next = 11;
                        break;
                      case 10:
                        _context5.t0 = meta;
                      case 11:
                        metaData = _context5.t0;
                        _context5.next = 14;
                        return _this3.checkAndInstallPythonVm(metaData.crc, metaData.version, callBackVMDownload);
                      case 14:
                        vmResult = _context5.sent;
                        log.debug("python vm result:", vmResult);
                        _this3.downloadAddressSet(0);
                        _this3.downloadTargetSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI);

                        // download the user program
                        log.info("downloading user project", _this3.downloadAddress);
                        _this3.downloadProgramData(path, buffer, undefined, undefined, callBackProgramDownload, function (status) {
                          _this3.downloadAddressSet(0);
                          if (status === true) resolve(true); // SUCCESS
                          else resolve(false); // ERROR_DOWNLOAD
                        });
                      case 20:
                      case "end":
                        return _context5.stop();
                    }
                  }, _callee5);
                }));
                return function (_x6, _x7) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 61:
            case "end":
              return _context6.stop();
          }
        }, _callee6);
      }));
      function downloadProgram(_x3, _x4, _x5) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
  }, {
    key: "setSDKManifestChannel",
    value: function setSDKManifestChannel(channel) {
      if (channel === "prod") {
        this.sdkManifestURL = "https://content.vexrobotics.com/vexos/public/AIR/vscode/sdk/python/manifest_vexcode.json";
      } else if (channel === "beta") {
        this.sdkManifestURL = "https://content.vexrobotics.com/vexos/public/AIR/vscode/sdk/python/manifest-beta_vexcode.json";
      }
      this.SDKFileName = null;
      this._sdkVersion = null;
      this.fetchSDKManifest();
    }
  }, {
    key: "fetchSDKManifest",
    value: function () {
      var _fetchSDKManifest = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var response, manifest, versions, appVersion, SDKVersionInfo;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return fetch(this.sdkManifestURL, {
                cache: "no-cache"
              });
            case 2:
              response = _context7.sent;
              _context7.next = 5;
              return response.json();
            case 5:
              manifest = _context7.sent;
              log.debug("fetched AIR SDK manifest:", manifest);
              versions = manifest.versions.map(function (versionInfo) {
                return {
                  startVersion: _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromString(versionInfo.startVersion),
                  file: versionInfo.file
                };
              }); // sort the versions so the highest version is first
              versions.sort(function (a, b) {
                return b.startVersion.compare(a.startVersion);
              });
              log.debug("processed AIR SDK manifest versions:", versions);
              appVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromString((0,_appVersionInfo__WEBPACK_IMPORTED_MODULE_11__.appVersionString)());
              log.debug("app version:", appVersion.toUserString());
              if (appVersion.major > 0) {
                while (versions.length > 0 && versions[0].startVersion.compare(appVersion) > 0) {
                  log.debug("removing version from list since it is higher than app version", versions[0].startVersion.toString(), ">", appVersion.toString());
                  versions.shift();
                }
              } else {
                log.debug("app version is 0.0.0, not removing any versions");
              }
              if (!(versions.length === 0)) {
                _context7.next = 16;
                break;
              }
              log.warn("no valid AIR SDK versions found in manifest");
              return _context7.abrupt("return");
            case 16:
              SDKVersionInfo = versions[0];
              log.info("selected AIR SDK file version:", SDKVersionInfo.startVersion.toUserString(), SDKVersionInfo.file);
              this.SDKFileName = SDKVersionInfo.file;
            case 19:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function fetchSDKManifest() {
        return _fetchSDKManifest.apply(this, arguments);
      }
      return fetchSDKManifest;
    }()
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return {
        extType: 0x61,
        loadAddress: 0,
        linkFile: "",
        linkFileVID: 0
      };
    }
  }, {
    key: "getVmMeta",
    value: function () {
      var _getVmMeta = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var _this$_sdkVersion, _this$_sdkVersion2, _this$_sdkVersion3;
        var majorVersion, minorVersion, patchVersion, version;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (this._sdkVersion) {
                _context8.next = 3;
                break;
              }
              _context8.next = 3;
              return this.getPythonVMFile();
            case 3:
              // the endianness of the version was messed up for AIR so we need to fix
              // that here. instead of manually doing it, we have code to flip the value.
              // When this is updated, version.json also needs to be updated
              majorVersion = ((_this$_sdkVersion = this._sdkVersion) === null || _this$_sdkVersion === void 0 ? void 0 : _this$_sdkVersion.major) || 0;
              minorVersion = ((_this$_sdkVersion2 = this._sdkVersion) === null || _this$_sdkVersion2 === void 0 ? void 0 : _this$_sdkVersion2.minor) || 0;
              patchVersion = ((_this$_sdkVersion3 = this._sdkVersion) === null || _this$_sdkVersion3 === void 0 ? void 0 : _this$_sdkVersion3.build) || 0;
              version = majorVersion | minorVersion << 8 | patchVersion << 16;
              log.debug("AIR VM version:", majorVersion, minorVersion, patchVersion, version);
              return _context8.abrupt("return", {
                crc: 0,
                version: version
              });
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function getVmMeta() {
        return _getVmMeta.apply(this, arguments);
      }
      return getVmMeta;
    }()
  }, {
    key: "getPythonVMResourcePath",
    value: function () {
      var _getPythonVMResourcePath = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (this.SDKFileName) {
                _context9.next = 3;
                break;
              }
              _context9.next = 3;
              return this.fetchSDKManifest();
            case 3:
              return _context9.abrupt("return", "https://content.vexrobotics.com/vexos/public/AIR/vscode/sdk/python/".concat(this.SDKFileName, ".zip"));
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function getPythonVMResourcePath() {
        return _getPythonVMResourcePath.apply(this, arguments);
      }
      return getPythonVMResourcePath;
    }()
  }, {
    key: "getPythonVmDownloadInfo",
    value: function () {
      var _getPythonVmDownloadInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var meta;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return this.getVmMeta();
            case 2:
              meta = _context10.sent;
              return _context10.abrupt("return", {
                address: 0,
                target: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI,
                vid: 0x03,
                version: meta.version
              });
            case 4:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function getPythonVmDownloadInfo() {
        return _getPythonVmDownloadInfo.apply(this, arguments);
      }
      return getPythonVmDownloadInfo;
    }()
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {
      this.downloadTargetSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI);
      this.downloadAddressSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.USR_ADDRESS);
    }
  }, {
    key: "sdkVersion",
    get: function get() {
      return this._sdkVersion;
    }

    /**
     * Fetch the SDK zip file from the server, unzip it, and extract the .sdk file
     * 
     * We use the same logic as the other platforms use for the Python VM as it is
     * almost identical and this reduces the duplicate code/logic and makes it
     * easier to extend for other case in the future.
     * 
     * for AIR this also grabs the SDK version number from the SDK zip and
     * sets sdkVersion with the value found in the zip.
     * @returns 
     */
  }, {
    key: "getPythonVMFile",
    value: (function () {
      var _getPythonVMFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              return _context12.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
                  var sdkZipURL, response, responseData, zipReader, entries, folderName, manifest, sdks, index, zipEntry, manifestData, manifestText, sdkData, _result, sdkVersion, sdkFilename, sdk, _result2, result, _result3;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        _context11.prev = 0;
                        _context11.next = 3;
                        return _this4.getPythonVMResourcePath();
                      case 3:
                        sdkZipURL = _context11.sent;
                        log.debug("fetching SDK zip from:", sdkZipURL);
                        _context11.next = 7;
                        return fetch(sdkZipURL, {
                          cache: "no-cache"
                        });
                      case 7:
                        response = _context11.sent;
                        _context11.t0 = Uint8Array;
                        _context11.next = 11;
                        return response.arrayBuffer();
                      case 11:
                        _context11.t1 = _context11.sent;
                        responseData = new _context11.t0(_context11.t1);
                        log.debug("fetched SDK zip, size:", responseData.length);
                        zipReader = new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.ZipReader(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.Uint8ArrayReader(responseData));
                        _context11.next = 17;
                        return zipReader.getEntries();
                      case 17:
                        entries = _context11.sent;
                        log.debug("zip entries:", entries.map(function (e) {
                          return e.filename;
                        }));
                        folderName = sdkZipURL.slice(sdkZipURL.lastIndexOf('/') + 1, sdkZipURL.lastIndexOf('.zip'));
                        log.debug("zip root folder name:", folderName);
                        manifest = null;
                        sdks = {};
                        index = 0;
                      case 24:
                        if (!(index < entries.length)) {
                          _context11.next = 44;
                          break;
                        }
                        zipEntry = entries[index];
                        if (!(zipEntry.filename === "".concat(folderName, "/manifest.json"))) {
                          _context11.next = 35;
                          break;
                        }
                        _context11.next = 29;
                        return zipEntry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.Uint8ArrayWriter());
                      case 29:
                        manifestData = _context11.sent;
                        manifestText = new TextDecoder().decode(manifestData);
                        manifest = JSON.parse(manifestText);
                        log.debug("found manifest:", manifest);
                        _context11.next = 41;
                        break;
                      case 35:
                        if (!zipEntry.filename.endsWith(".sdk")) {
                          _context11.next = 41;
                          break;
                        }
                        _context11.next = 38;
                        return zipEntry.getData(new _zip_js_zip_js__WEBPACK_IMPORTED_MODULE_6__.Uint8ArrayWriter());
                      case 38:
                        sdkData = _context11.sent;
                        sdks[zipEntry.filename] = sdkData;
                        log.debug("found sdk file:", zipEntry.filename, "size:", sdkData.length);
                      case 41:
                        index++;
                        _context11.next = 24;
                        break;
                      case 44:
                        if (manifest) {
                          _context11.next = 49;
                          break;
                        }
                        log.warn("no manifest file found");
                        _result = {
                          err: -1,
                          msg: "could not find manifest file in the SDK zip",
                          data: ""
                        };
                        reject(_result);
                        return _context11.abrupt("return");
                      case 49:
                        sdkVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromString(manifest.platforms[0].sdk);
                        sdkFilename = "".concat(folderName, "/vexair/SDK_CTRL_").concat(sdkVersion.major, "_").concat(sdkVersion.minor, "_").concat(sdkVersion.build, ".sdk");
                        log.debug("SDK version:", sdkVersion.toUserString(), "filename:", sdkFilename);

                        // store the value for the version checks
                        _this4._sdkVersion = sdkVersion;
                        sdk = sdks[sdkFilename];
                        if (sdk) {
                          _context11.next = 59;
                          break;
                        }
                        log.warn("no sdk file found for version:", sdkFilename);
                        _result2 = {
                          err: -1,
                          msg: "could not find sdk file (".concat(sdkFilename, ") in the SDK zip"),
                          data: ""
                        };
                        reject(_result2);
                        return _context11.abrupt("return");
                      case 59:
                        result = {
                          err: 0,
                          msg: "VM file read successfully!",
                          data: sdk
                        };
                        resolve(result);
                        _context11.next = 68;
                        break;
                      case 63:
                        _context11.prev = 63;
                        _context11.t2 = _context11["catch"](0);
                        log.error("Error when reading SDK");
                        _result3 = {
                          err: -1,
                          msg: "Error when reading SDK",
                          data: ""
                        };
                        reject(_result3);
                      case 68:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11, null, [[0, 63]]);
                }));
                return function (_x8, _x9) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function getPythonVMFile() {
        return _getPythonVMFile.apply(this, arguments);
      }
      return getPythonVMFile;
    }() //#endregion Python vm helpers
    //#region controller firmware
    )
  }, {
    key: "radioChipId",
    get: function get() {
      return 0;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__.DFUTargetDevice.None;
    }
    //#endregion controller firmware

    //#region controller comms
    //#endregion controller comms

    //#region low level comms
  }, {
    key: "decodeSystemVersion",
    value: function decodeSystemVersion(msg) {
      /*
        byte 0 = 0xAA
        byte 1 = 0x55
        byte 2 = 0xA4 // CDC_GET_SYS_VERSION
        byte 3 = 8 // size of the data ... at least for now
        bytes 4-11 = the version structure
          byte 0 = major
          byte 1 = minor
          byte 2 = build
          byte 3 = hardware version
          byte 4 = beta version
          byte 5 = product id // not used?
          byte 6 = product flags
            bit0 = ?
            bit1 = battery low
            bit2 = ?
            bit3 = ?
            bit4 = ?
            bit5 = ?
            bit6 = ?
            bit7 = ?
          byte 7 = reserved
      */
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        this.versionSystem[0] = dvb.getUint8(extcmd + 0);
        this.versionSystem[1] = dvb.getUint8(extcmd + 1);
        this.versionSystem[2] = dvb.getUint8(extcmd + 2);
        this.versionSystem[3] = dvb.getUint8(extcmd + 4);
        this.updateSystemVersionString();
      }
    }
    //#endregion low level comms

    //#region event handlers
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIVision.ts":
/*!********************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIVision.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexAIObjectTypes: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_6__.VexAIObjectTypes),
/* harmony export */   VexSerialDeviceAIVision: () => (/* binding */ VexSerialDeviceAIVision)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! async-sema */ "./node_modules/async-sema/lib/index.js");
/* harmony import */ var async_sema__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(async_sema__WEBPACK_IMPORTED_MODULE_9__);
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceAIVision");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");







// TODO: maybe make this come from robot config?




if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_8__.targetIsIqOrV5OrEXP) {
  log.warn("VexSerialDeviceAIVision loaded in non-vision build");
}
var VexSerialDeviceAIVision = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceAIVision() {
    var _this;
    _classCallCheck(this, VexSerialDeviceAIVision);
    _this = _callSuper(this, VexSerialDeviceAIVision);

    // bind the listeners from this class
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    //#endregion controller firmware
    //#region controller comms
    //#endregion controller comms
    //#region low level comms
    _defineProperty(_this, "writeSemaphore", new async_sema__WEBPACK_IMPORTED_MODULE_9__.Sema(1, {
      capacity: 10
    }));
    _this.onAIConnectionStateChange = _this.onAIConnectionStateChange.bind(_this);
    _this.on("connectionStateChange", _this.onAIConnectionStateChange);
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed AIVision");
    return _this;
  }
  _inherits(VexSerialDeviceAIVision, _VexSerialDevice);
  return _createClass(VexSerialDeviceAIVision, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      if (_targetPlatform__WEBPACK_IMPORTED_MODULE_8__.targetIsIQ) {
        return [{
          usbVendorId: 0x2888,
          usbProductId: 0x0810
        } // IQ AI Vision
        // TODO: remove this after development
        ];
      }
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0800
      } // AI Vision
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return null;
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      log.debug("AI VIsion processPortInformation");
      var isAIVision = portInfo && (portInfo.usbProductId === 0x0800 || portInfo.usbProductId === 0x0810 || portInfo.usbProductId === 0x0700);
      if (isAIVision) {
        log.info("AI Vision is connected with portInfo:", portInfo);
        this.deviceType = "AIVision";
      } else {
        log.warn("Device other than AI Vision attempting connection with portInfo:", portInfo);
        this.closeConnection();
      }
    }
    //#endregion connection information

    //#region connection check helpers
    //#endregion connection check helpers

    //#region brain information
    //#endregion brain information

    //#region controller information
  }, {
    key: "fetchControllerInfo",
    value: function () {
      var _fetchControllerInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.OperationNotSupportedError("unable to pull data from V5 controller");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchControllerInfo() {
        return _fetchControllerInfo.apply(this, arguments);
      }
      return fetchControllerInfo;
    }() //#endregion controller information
    //#region firmware
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              catalogURL = "https://content.vexrobotics.com/vexos/public/".concat(_targetPlatform__WEBPACK_IMPORTED_MODULE_8__.targetIsIQ ? "IQAIVision" : "AIVision", "/catalog.txt");
              log.debug("catalogURL:", catalogURL);
              _context2.prev = 2;
              _context2.next = 5;
              return fetch(catalogURL);
            case 5:
              catalogResponse = _context2.sent;
              _context2.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context2.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_AIV_/, "");
              log.debug("versionStr:", versionStr);
              if (versionStr) {
                _context2.next = 15;
                break;
              }
              log.warn("No version string found in catalog");
              return _context2.abrupt("return", new _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion(0, 0, 0, 0));
            case 15:
              return _context2.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 18:
              _context2.prev = 18;
              _context2.t0 = _context2["catch"](2);
              log.warn(_context2.t0);
              return _context2.abrupt("return", null);
            case 22:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 18]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(progressCB, connectPrompt) {
        var brainVersionStart, lastProgress, totalSteps, sendProgress, fw, manifestFile, manifest, appFileName, bootFW, bootRes;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.done,
                prog: -1,
                msg: ""
              }; // this is manually calculated... it is the total number of steps in the update process with weight values
              totalSteps = 2 + 80 + 1;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = 0;
                var weight = 1;
                switch (state) {
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.LoadingFirmwareFile:
                    weight = 2;
                    offset = 0;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.FirmwareUpdate:
                    weight = 80;
                    offset = 2;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.Reboot:
                    weight = 1;
                    offset = 82;
                    break;
                  case _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.done:
                    weight = 1;
                    offset = 87;
                    break;
                }
                var totalProgress = (offset + prog * weight) / totalSteps;

                // TODO: calculate total progress
                log.debug("AI Vision firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates[state], prog, totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              };
              _context3.prev = 7;
              _context3.next = 10;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 10:
              fw = _context3.sent;
              log.warn("fw:", fw);

              // 3. update boot.bin
              log.info("updating firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.FirmwareUpdate, 0, "Updating Firmware");
              log.debug("grabbing manifest");
              manifestFile = fw.getFile("manifest.json");
              log.debug("manifestFile:", manifestFile);
              manifest = JSON.parse(new TextDecoder().decode(manifestFile.data));
              log.debug("manifest", manifest);
              log.debug("grabbing app bin file");
              appFileName = manifest.application.file;
              log.debug("app file name:", appFileName);
              bootFW = fw.getFile(appFileName);
              _context3.next = 25;
              return this.updateBrain(bootFW.data, 1, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.FirmwareUpdate, percent, "Updating Firmware");
              });
            case 25:
              bootRes = _context3.sent;
              if (bootRes) {
                _context3.next = 28;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.ErrorUpdatingBrainBoot();
            case 28:
              if (_platformInfo__WEBPACK_IMPORTED_MODULE_7__.currentBrowser !== _platformInfo__WEBPACK_IMPORTED_MODULE_7__.WebBrosers.None) {
                this.onDisconnect();
              }
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionUpdateStates.done, 0, "Update Complete");
              _context3.next = 41;
              break;
            case 34:
              _context3.prev = 34;
              _context3.t0 = _context3["catch"](7);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.debug("AI Vision update error:", _context3.t0);
              log.debug("AI Vision version before update start:", brainVersionStart);
              throw _context3.t0;
            case 41:
              return _context3.abrupt("return", true);
            case 42:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[7, 34]]);
      }));
      function updateFirmware(_x, _x2) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }()
  }, {
    key: "updateAIModel",
    value: function () {
      var _updateAIModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(URL, progressCB) {
        var lastProgress, totalSteps, sendProgress, modelData, modelBlob, modelBin, bootRes;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.done,
                prog: -1,
                msg: ""
              };
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.done - 1;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = state - 1;
                var totalProgress = (offset + prog) / totalSteps;
                log.debug("AI Vision model progress:", state, prog, totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              };
              _context4.prev = 5;
              // 1. Grab AI model
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.LoadingAIModel, 0, "Loading AI Model");
              _context4.next = 9;
              return fetch(URL);
            case 9:
              modelData = _context4.sent;
              if (modelData.ok) {
                _context4.next = 12;
                break;
              }
              throw new Error("Failed to download AI model");
            case 12:
              _context4.next = 14;
              return modelData.blob();
            case 14:
              modelBlob = _context4.sent;
              _context4.next = 17;
              return this.readBlobAsUint8Array(modelBlob, function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.LoadingAIModel, prog, "Loading AI Model");
              });
            case 17:
              modelBin = _context4.sent;
              // 2. Update AI model on the brain, TARGET should be 0
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.UpdatingAIModel, 0, "Updating AI Model");
              _context4.next = 21;
              return this.updateBrain(modelBin, 0, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.UpdatingAIModel, percent, "Updating AI Model");
              });
            case 21:
              bootRes = _context4.sent;
              if (bootRes) {
                _context4.next = 24;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.ErrorUpdatingBrainBoot();
            case 24:
              // 3. Reboot the AI Vision sensor
              // TODO: Make the sensor disconnect itself so user does not have to unplug sensor
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXAIVisionAIModelUpdateStates.done, 0, "AI Model Update Complete");
              _context4.next = 33;
              break;
            case 28:
              _context4.prev = 28;
              _context4.t0 = _context4["catch"](5);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              throw _context4.t0;
            case 33:
              return _context4.abrupt("return", true);
            case 34:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[5, 28]]);
      }));
      function updateAIModel(_x3, _x4) {
        return _updateAIModel.apply(this, arguments);
      }
      return updateAIModel;
    }()
  }, {
    key: "readBlobAsUint8Array",
    value: function readBlobAsUint8Array(blob, progressCB) {
      return new Promise(function (resolve, reject) {
        var fileReader = new FileReader();
        fileReader.readAsArrayBuffer(blob);
        fileReader.onload = function () {
          if (fileReader.readyState === FileReader.DONE) {
            var arrayBuffer = fileReader.result;
            var uint8Array = new Uint8Array(arrayBuffer);
            resolve(uint8Array);
          }
        };
        fileReader.onerror = function () {
          reject(new Error("Failed to read the AI model file as ArrayBuffer"));
        };
        fileReader.onprogress = function (event) {
          if (progressCB && event.lengthComputable) {
            progressCB(event.loaded / event.total);
          }
        };
      });
    }
    //#endregion firmware

    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWAIVision();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(data, info, progress) {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              throw new Error("operation not supported");
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function downloadProgram(_x5, _x6, _x7) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() //#endregion downloads
    //#region brain files
    //#endregion brain files
    //#region file metadata helpers
    //#endregion file metadata helpers
    //#region brain info meta data helpers
    //#endregion brain info meta data helpers
    //#region Python vm helpers
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return undefined;
    }
  }, {
    key: "getVmMeta",
    value: function getVmMeta() {
      return undefined;
    }
  }, {
    key: "getPythonVMResourcePath",
    value: function getPythonVMResourcePath() {
      return "resources/v5/vm/python_vm.bin";
    }
  }, {
    key: "getPythonVmDownloadInfo",
    value: function getPythonVmDownloadInfo() {
      return undefined;
    }
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {}
    //#endregion

    //#region controller firmware
  }, {
    key: "radioChipId",
    get: function get() {
      return 0;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__.DFUTargetDevice.None;
    }
  }, {
    key: "writeData",
    value: function () {
      var _writeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(data, options) {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.prev = 0;
              _context6.next = 3;
              return this.writeSemaphore.acquire();
            case 3:
              return _context6.abrupt("return", _superPropGet(VexSerialDeviceAIVision, "writeData", this, 3)([data, options]));
            case 4:
              _context6.prev = 4;
              this.writeSemaphore.release();
              return _context6.finish(4);
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[0,, 4, 7]]);
      }));
      function writeData(_x8, _x9) {
        return _writeData.apply(this, arguments);
      }
      return writeData;
    }() //#endregion low level comms
    //#region event handlers
  }, {
    key: "onAIConnectionStateChange",
    value: function onAIConnectionStateChange(state) {
      log.debug("onAIConnectionStateChange", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDeviceConnectionStates[state], this.isConnected);
      // make sure we are actually still connected
      if (this.isConnected) {
        // now that we are connected. we need to make sure the flags are in a known state...
        this._FlagSensorOverlayEnabled = false;
        this._FlagTagDetectionEnabled = false;
        this._FlagObjectDetectionEnabled = false;
        this.AISendFlags();
      }
    }
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceCTE.ts":
/*!***************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceCTE.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexCTEConnectionState: () => (/* binding */ VexCTEConnectionState),
/* harmony export */   VexSerialDeviceCTE: () => (/* binding */ VexSerialDeviceCTE)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _VEXSerial__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VEXSerial */ "./src/HardwareInterface/VEXSerial/index.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceCTE");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");




if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_4__.targetIsEXP) {
  log.warn("VexSerialDeviceCTE loaded in non-EXP build");
}

/**
 * connection states for the CTE device connection
 */
var VexCTEConnectionState = /*#__PURE__*/function (VexCTEConnectionState) {
  VexCTEConnectionState[VexCTEConnectionState["Disconnected"] = 0] = "Disconnected";
  VexCTEConnectionState[VexCTEConnectionState["Connected"] = 2] = "Connected";
  VexCTEConnectionState[VexCTEConnectionState["Connecting"] = 1] = "Connecting";
  return VexCTEConnectionState;
}(VexCTEConnectionState || {});
// constants for the USB VID and PID for the filter system
var VID = 0x2888;
var PID = 0x0900;

/**
 * Class for connecting to the CTE arm using webserial. it exposes
 * methods for opening/closing connections and for sending data.
 * there is also a system to call a callback for any data received.
 */
var VexSerialDeviceCTE = /*#__PURE__*/function () {
  function VexSerialDeviceCTE() {
    _classCallCheck(this, VexSerialDeviceCTE);
    _defineProperty(this, "isConnectingUser", false);
    _defineProperty(this, "isConnectedUser", false);
    _defineProperty(this, "isConnectingAdmin", false);
    _defineProperty(this, "isConnectedAdmin", false);
    //#endregion write functions
    //#region receive data events
    /**
     * internal reference to the function that is called when data is received on the user port
     */
    _defineProperty(this, "_onRXDataUser", null);
    /**
     * internal reference to the function that is called when data is received on the admin port
     */
    _defineProperty(this, "_onRXDataAdmin", null);
    //#endregion internal connection events
    //#region events
    _defineProperty(this, "eventCallbacks", {
      "connectionStateChangeUser": [],
      "connectionStateChangeAdmin": [],
      "brainConnected": []
    });
    // set the port filters for VID/PID
    // TODO: filter should only have arm for electron
    var portFilter = _platformInfo__WEBPACK_IMPORTED_MODULE_3__.PlatformIsElectron ? [{
      usbVendorId: VID,
      usbProductId: PID
    }] : [{
      usbVendorId: VID,
      usbProductId: PID
    }, {
      usbVendorId: VID,
      usbProductId: 0x0600
    }];

    // create the user port and admin port serial instances
    this.serialConnectionUser = (0,_VEXSerial__WEBPACK_IMPORTED_MODULE_2__.createVexSerialPortInstanceNoWait)(portFilter.slice());
    this.serialConnectionAdmin = (0,_VEXSerial__WEBPACK_IMPORTED_MODULE_2__.createVexSerialPortInstanceNoWait)(portFilter.slice());

    // this.serialConnectionUser.setPortFilters(portFilter.slice());
    // this.serialConnectionAdmin.setPortFilters(portFilter.slice());

    log.debug("admin port:", this.serialConnectionAdmin.uuid);
    log.debug("user port:", this.serialConnectionUser.uuid);

    // bind the listener methods to this

    // register connect/disconnect listeners
    this.onConnectUser = this.onConnectUser.bind(this);
    this.serialConnectionUser.on("connected", this.onConnectUser);
    this.onDisconnectUser = this.onDisconnectUser.bind(this);
    this.serialConnectionUser.on("disconnected", this.onDisconnectUser);
    this.onConnectAdmin = this.onConnectAdmin.bind(this);
    this.serialConnectionAdmin.on("connected", this.onConnectAdmin);
    this.onDisconnectAdmin = this.onDisconnectAdmin.bind(this);
    this.serialConnectionAdmin.on("disconnected", this.onDisconnectAdmin);

    // register callbacks for receiving data
    this.onReceiveDataUser = this.onReceiveDataUser.bind(this);
    this.serialConnectionUser.on("dataReceived", this.onReceiveDataUser);
    this.onReceiveDataAdmin = this.onReceiveDataAdmin.bind(this);
    this.serialConnectionAdmin.on("dataReceived", this.onReceiveDataAdmin);
  }

  //#region connection information
  /**
   * this indicates if the serial connection is supported by the system
   */
  return _createClass(VexSerialDeviceCTE, [{
    key: "isSupported",
    get: function get() {
      return !!this.serialConnectionUser;
    }

    /**
     * indicates if there is an open connection to the user port.
     */
  }, {
    key: "connectionStateUser",
    get: function get() {
      return this.isConnectedUser ? VexCTEConnectionState.Connected : this.isConnectingUser ? VexCTEConnectionState.Connecting : VexCTEConnectionState.Disconnected;
    }

    /**
     * indicates if there is an open connection to the admin port.
     */
  }, {
    key: "connectionStateAdmin",
    get: function get() {
      return this.isConnectedAdmin ? VexCTEConnectionState.Connected : this.isConnectingAdmin ? VexCTEConnectionState.Connecting : VexCTEConnectionState.Disconnected;
    }

    /**
     * flag to indicate if the user port is connected
     */
  }, {
    key: "isPortConnectedUser",
    get: function get() {
      return this.isConnectedUser;
    }

    /**
     * flag to indicate if the admin port is connected
     */
  }, {
    key: "isPortConnectedAdmin",
    get: function get() {
      return this.isConnectedAdmin;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return null;
    }

    //#endregion connection information

    //#region connections
    /**
     * call this to open a serial connection. This will prompt the user to select a port
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
  }, {
    key: "openConnectionUser",
    value: function () {
      var _openConnectionUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.checkSupported();
              if (!this.isConnectedUser) {
                _context.next = 4;
                break;
              }
              log.warn("already connected to user port");
              // TODO: throw error
              return _context.abrupt("return");
            case 4:
              this.isConnectingUser = true;
              _context.next = 7;
              return this.serialConnectionUser.openPort();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function openConnectionUser() {
        return _openConnectionUser.apply(this, arguments);
      }
      return openConnectionUser;
    }()
    /**
     * This will search for ports that have already been connected and can thus
     * be connected to without more user interaction
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
  }, {
    key: "openEstablishedConnectionUser",
    value: (function () {
      var _openEstablishedConnectionUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              this.checkSupported();
              if (!this.isConnectedUser) {
                _context2.next = 4;
                break;
              }
              log.warn("already connected to user port");
              // TODO: throw error
              return _context2.abrupt("return");
            case 4:
              this.isConnectingUser = true;
              _context2.next = 7;
              return this.serialConnectionUser.openEstablishedPort();
            case 7:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function openEstablishedConnectionUser() {
        return _openEstablishedConnectionUser.apply(this, arguments);
      }
      return openEstablishedConnectionUser;
    }()
    /**
     * call this to close an open connection to the user port.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
    )
  }, {
    key: "closeConnectionUser",
    value: (function () {
      var _closeConnectionUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              this.checkSupported();
              if (this.isConnectedUser || this.isConnectingUser) {
                _context3.next = 4;
                break;
              }
              log.info("not connected...");
              return _context3.abrupt("return");
            case 4:
              _context3.next = 6;
              return this.serialConnectionUser.closePort();
            case 6:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function closeConnectionUser() {
        return _closeConnectionUser.apply(this, arguments);
      }
      return closeConnectionUser;
    }()
    /**
     * call this to open a serial connection. This will prompt the user to select a port
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
    )
  }, {
    key: "openConnectionAdmin",
    value: (function () {
      var _openConnectionAdmin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.checkSupported();
              if (!this.isConnectedAdmin) {
                _context4.next = 4;
                break;
              }
              log.warn("already connected to admin port");
              // TODO: throw error
              return _context4.abrupt("return");
            case 4:
              this.isConnectingAdmin = true;
              _context4.next = 7;
              return this.serialConnectionAdmin.openPort();
            case 7:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function openConnectionAdmin() {
        return _openConnectionAdmin.apply(this, arguments);
      }
      return openConnectionAdmin;
    }()
    /**
     * call this to close an open connection to the admin port.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
    )
  }, {
    key: "closeConnectionAdmin",
    value: (function () {
      var _closeConnectionAdmin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.checkSupported();
              if (this.isConnectedAdmin || this.isConnectingAdmin) {
                _context5.next = 4;
                break;
              }
              log.info("not connected...");
              return _context5.abrupt("return");
            case 4:
              _context5.next = 6;
              return this.serialConnectionAdmin.closePort();
            case 6:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function closeConnectionAdmin() {
        return _closeConnectionAdmin.apply(this, arguments);
      }
      return closeConnectionAdmin;
    }() //#endregion connections
    //#region write functions
    /**
     * sends the provided data out over the connected user port
     * @param data the data to send
     */
    )
  }, {
    key: "writeDataUser",
    value: function writeDataUser(data) {
      if (!this.isConnectedUser) {
        log.warn("user port is not connected");
        // TODO: throw error
        return;
      }
      this.serialConnectionUser.writeData(new Uint8Array(data));
    }

    /**
     * sends the provided data out over the connected user port
     * @param data the data to send
     */
  }, {
    key: "writeDataAdmin",
    value: function writeDataAdmin(data) {
      if (!this.isConnectedAdmin) {
        log.warn("admin port is not connected");
        // TODO: throw error
        return;
      }
      this.serialConnectionAdmin.writeData(new Uint8Array(data));
    }
  }, {
    key: "onRXDataUser",
    get:
    /**
     * points to a function that is called when data is received on the
     * user port. This should be set to a local callback function to
     * actually process the received data.
     */
    function get() {
      return this._onRXDataUser;
    },
    set: function set(newFunction) {
      log.debug("setting user data handler:", newFunction);
      this._onRXDataUser = newFunction;
    }
  }, {
    key: "onRXDataAdmin",
    get:
    /**
     * points to a function that is called when data is received on the
     * admin port. This should be set to a local callback function to
     * actually process the received data.
     */
    function get() {
      return this._onRXDataAdmin;
    },
    set: function set(newFunction) {
      log.debug("setting admin data handler:", newFunction);
      this._onRXDataAdmin = newFunction;
    }

    /**
     * listens for data from the webserial user port and passes it to the external listener.
     * @param data the data that was received on the serial port
     */
  }, {
    key: "onReceiveDataUser",
    value: function onReceiveDataUser(data) {
      if (!this._onRXDataUser) {
        log.info("receiving data on user port but nothing is actually listening");
      } else {
        this._onRXDataUser(data);
      }
    }

    /**
     * listens for data from the webserial admin port and passes it to the external listener.
     * @param data the data that was received on the serial port
     */
  }, {
    key: "onReceiveDataAdmin",
    value: function onReceiveDataAdmin(data) {
      if (!this._onRXDataAdmin) {
        log.info("receiving data on admin port but nothing is actually listening");
      } else {
        this._onRXDataAdmin(data);
      }
    }
    //#endregion receive data events

    //#region connection check helpers
    /**
     * call this to check if WebSerial is supported in the browser
     * @throws WebSerialUnsupportedError if WebSerial is not supported on your browser
     */
  }, {
    key: "checkSupported",
    value: function checkSupported() {
      if (!this.isSupported) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_1__.WebSerialUnsupportedError();
      }
    }
    //#endregion connection check helpers

    //#region internal connection events
  }, {
    key: "onConnectUser",
    value: function () {
      var _onConnectUser = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var portInfo, isBrain, isArm;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.serialConnectionUser.getOpenPortInformation();
            case 2:
              portInfo = _context6.sent;
              isBrain = portInfo && portInfo.usbProductId === 0x0600;
              isArm = portInfo && portInfo.usbProductId === 0x0900;
              log.debug("user port connected", portInfo);
              if (!isBrain) {
                _context6.next = 10;
                break;
              }
              this.fireEvent("brainConnected");
              this.closeConnectionUser();
              return _context6.abrupt("return");
            case 10:
              this.isConnectingUser = true;
              this.fireEvent("connectionStateChangeUser", VexCTEConnectionState.Connecting);

              // TODO: verify the port is correct?
              this.isConnectedUser = true;
              this.isConnectingUser = false;
              this.fireEvent("connectionStateChangeUser", VexCTEConnectionState.Connected);
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function onConnectUser() {
        return _onConnectUser.apply(this, arguments);
      }
      return onConnectUser;
    }()
  }, {
    key: "onDisconnectUser",
    value: function onDisconnectUser() {
      log.debug("user port disconnected");
      this.isConnectedUser = false;
      this.isConnectingUser = false;
      this.fireEvent("connectionStateChangeUser", VexCTEConnectionState.Disconnected);
    }
  }, {
    key: "onConnectAdmin",
    value: function onConnectAdmin() {
      this.serialConnectionAdmin.getOpenPortInformation().then(function (portInfo) {
        log.debug("admin port connected", portInfo);
      });
      this.isConnectingAdmin = true;
      this.fireEvent("connectionStateChangeAdmin", VexCTEConnectionState.Connecting);

      // TODO: verify the port is correct?
      this.isConnectedAdmin = true;
      this.isConnectingAdmin = false;
      this.fireEvent("connectionStateChangeAdmin", VexCTEConnectionState.Connected);
    }
  }, {
    key: "onDisconnectAdmin",
    value: function onDisconnectAdmin() {
      log.debug("admin port disconnected");
      this.isConnectedAdmin = false;
      this.isConnectingAdmin = false;
      this.fireEvent("connectionStateChangeAdmin", VexCTEConnectionState.Disconnected);
    }
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
        this.eventCallbacks[eventName].forEach(function (callback) {
          callback.apply(void 0, args);
        });
      }
    }
    //#endregion events
  }]);
}();


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceEXP.ts":
/*!***************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceEXP.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialDeviceEXP: () => (/* binding */ VexSerialDeviceEXP)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _radio_cc264x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio/cc264x */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/radio/cc264x.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vexcode/python-vm */ "./node_modules/@vexcode/python-vm/dist/index.js");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceEXP");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");










if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_10__.targetIsEXP) {
  log.warn("VexSerialDeviceEXP loaded in non-EXP build");
}
var VexSerialDeviceEXP = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceEXP() {
    var _this;
    _classCallCheck(this, VexSerialDeviceEXP);
    _this = _callSuper(this, VexSerialDeviceEXP);
    _defineProperty(_this, "classIdent", 'Vex EXP serial');
    _defineProperty(_this, "versionBoot", [0, 0]);
    _defineProperty(_this, "versionBrain", [0, 0]);
    _defineProperty(_this, "versionJoystick", [0, 0]);
    _defineProperty(_this, "versionSystemStr", '');
    _defineProperty(_this, "versionHardware", 0);
    _defineProperty(_this, "uniqueId", 0);
    _defineProperty(_this, "deviceName", '');
    _defineProperty(_this, "deviceTeamNumber", '0000');
    // not used 
    _defineProperty(_this, "catalogAddresses", []);
    _defineProperty(_this, "programInfo", []);
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    _this.deviceType = null;
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed EXP");
    return _this;
  }
  _inherits(VexSerialDeviceEXP, _VexSerialDevice);
  return _createClass(VexSerialDeviceEXP, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      if (_platformInfo__WEBPACK_IMPORTED_MODULE_9__.PlatformIsElectron) {
        return [{
          usbVendorId: 0x2888,
          usbProductId: 0x0600
        },
        // brain
        {
          usbVendorId: 0x2888,
          usbProductId: 0x0610
        } // controller
        ];
      }
      // for web we want to let the user connect to the CTE arm from the brain
      // project so that VEXcode can detect it and change to a CTE project.
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0600
      },
      // brain
      {
        usbVendorId: 0x2888,
        usbProductId: 0x0610
      },
      // controller
      {
        usbVendorId: 0x2888,
        usbProductId: 0x0900
      } // cte 6-axis arm
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return "EXPController";
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      var isBrain = portInfo && portInfo.usbProductId === 0x0600;
      var isController = portInfo && portInfo.usbProductId === 0x0610;
      var isArm = portInfo && portInfo.usbProductId === 0x0900;
      if (isBrain) {
        this.deviceType = "EXP";
      } else if (isController) {
        this.deviceType = "EXPController";
      } else if (isArm) {
        this.deviceType = "CTE";
      } else {
        log.warn("unknown product ID", portInfo);
        this.deviceType = null;
      }
    }
    //#endregion connection information

    //#region connection check helpers
    //#endregion connection check helpers

    //#region brain information
  }, {
    key: "brainGetSystemVersion",
    value: function () {
      var _brainGetSystemVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var reply;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              log.info("brainGetSystemVersion");
              this.checkSupported();
              this.checkRequiredConnection();
              _context.prev = 3;
              _context.next = 6;
              return this.writeDataAsync(this.cdc.systemVersion());
            case 6:
              reply = _context.sent;
              this.decodeSystemVersion(reply);
              return _context.abrupt("return", reply);
            case 11:
              _context.prev = 11;
              _context.t0 = _context["catch"](3);
              return _context.abrupt("return", undefined);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 11]]);
      }));
      function brainGetSystemVersion() {
        return _brainGetSystemVersion.apply(this, arguments);
      }
      return brainGetSystemVersion;
    }() //#endregion brain information
    //#region controller information
    //#endregion controller information
    //#region firmware
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              catalogURL = "https://content.vexrobotics.com/vexos/public/EXP/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context2.prev = 2;
              _context2.next = 5;
              return fetch(catalogURL);
            case 5:
              catalogResponse = _context2.sent;
              _context2.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context2.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_EXP_/, "");
              return _context2.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](2);
              log.warn(_context2.t0);
              return _context2.abrupt("return", null);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 14]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(progressCB, connectPrompt) {
        var brainVersionStart, lastProgress, totalSteps, goldenOffset, sendProgress, meta, fw, goldenFW, goldenRes, bootFW, bootRes, assetFW, assetRes;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // TODO: block this if connected over controller

              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done,
                prog: -1,
                msg: ""
              };
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 1;
              goldenOffset = 2;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = state > _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenReboot ? state - goldenOffset : state - 1;
                var totalProgress = (offset + prog) / totalSteps;

                // TODO: calculate total progress
                log.debug("brain firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates[state], state, prog, totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              }; // based on function updateFirmware_exp from device manager
              _context3.prev = 8;
              if (this._inDFUMode) {
                _context3.next = 23;
                break;
              }
              _context3.prev = 10;
              progressCB(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, 0, "Checking Python Version");
              meta = this.getVmMeta();
              _context3.next = 15;
              return this.checkAndInstallPythonVm(meta.crc, meta.version, function (data) {
                if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.CheckingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Checking Python Version");
                } else if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Loading Python");
                }
              });
            case 15:
              _context3.next = 21;
              break;
            case 17:
              _context3.prev = 17;
              _context3.t0 = _context3["catch"](10);
              log.warn("error loading Python VM");
              log.warn(_context3.t0);
            case 21:
              _context3.next = 24;
              break;
            case 23:
              log.warn("skipping Python VM update check due to brain in DFU mode");
            case 24:
              _context3.next = 26;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 26:
              fw = _context3.sent;
              this.isUpdatingFirmware = true;

              // 2. update golden image if needed
              if (!((this.primaryBootSource === true || this._ramBootloader === true) && this.checkGoldenImage() === false)) {
                _context3.next = 42;
                break;
              }
              log.info("updating Golden...");
              goldenFW = fw.getFile("EXP_boot_rom.bin");
              _context3.next = 33;
              return this.updateBrain(goldenFW.data, 0xB2, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenUpdate, percent, "Updating Golden");
              });
            case 33:
              goldenRes = _context3.sent;
              if (goldenRes) {
                _context3.next = 36;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainGolden();
            case 36:
              // 2b. reboot brain and reconnect?
              log.info("waiting for reboot");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenReboot, 0, "Rebooting Post Golden Update");
              _context3.next = 40;
              return this.delay(3000);
            case 40:
              _context3.next = 44;
              break;
            case 42:
              goldenOffset = 3;
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 2;
            case 44:
              this.isUpdatingFirmware = false;

              // 3. update boot.bin
              log.info("updating firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, 0, "Updating Firmware");
              bootFW = fw.getFile("boot.bin");
              _context3.next = 50;
              return this.updateBrain(bootFW.data, 1, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, percent, "Updating Firmware");
              });
            case 50:
              bootRes = _context3.sent;
              if (bootRes) {
                _context3.next = 53;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainBoot();
            case 53:
              // 4. update assets
              log.info("updating assets");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, 0, "Updating Assets");
              assetFW = fw.getFile("assets.bin");
              _context3.next = 58;
              return this.updateBrain(assetFW.data, 0, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, percent, "Updating Assets");
              });
            case 58:
              assetRes = _context3.sent;
              if (assetRes) {
                _context3.next = 61;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainAssets();
            case 61:
              this.onDisconnect();

              // // 5. reboot and reconnect
              // log.info("rebooting... waiting for connection loss");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0, "Waiting For Poweroff");
              // while (this.isConnected) {
              //   await this.delay(500);
              // }

              // log.info("rebooting... waiting for reboot");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.3, "Waiting For Reboot");
              // await this.delay(10000);

              // log.info("rebooting... waiting for new connection");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.5, "Waiting For Connection");
              // let reconnected = false;
              // while (!reconnected) {
              //   try {
              //     await this.reconnect();
              //     reconnected = true;
              //   } catch(err) {
              //     if (err instanceof DOMException) {
              //       if (err.name === "SecurityError") {
              //         log.info("failed to open connect prompt due to security permissions");
              //         await connectPrompt();  
              //       } else if (err.name === "NotFoundError") {
              //         log.info("user hit cancel")
              //         await connectPrompt();
              //       }
              //     } else {
              //       log.warn("error name:", err.name, err);
              //       throw err;
              //     }
              //   }
              // }

              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_5__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done, 1, "Update Complete");

              // setTimeout(async () => {
              //   await this.fetchBrainInfo();
              //   await this.checkUpdateNeededBrain();
              //   this.fireEvent("deviceInfoUpdated", this.getRobotInfo());
              // }, 200);

              // this.isUpdatingFirmware = false;
              _context3.next = 74;
              break;
            case 67:
              _context3.prev = 67;
              _context3.t1 = _context3["catch"](8);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_5__.UpdateNeededOptions.Unsure;
              log.debug("brain update error:", _context3.t1);
              log.debug("brain version before update start:", brainVersionStart);
              throw _context3.t1;
            case 74:
              return _context3.abrupt("return", true);
            case 75:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[8, 67], [10, 17]]);
      }));
      function updateFirmware(_x, _x2) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }() //#endregion firmware
    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWEXP();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data, info, progress) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _superPropGet(VexSerialDeviceEXP, "downloadProgram", this, 3)([data, info, progress]));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function downloadProgram(_x3, _x4, _x5) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() //#endregion downloads
    //#region brain files
    //#endregion brain files
    //#region file metadata helpers
    //#endregion file metadata helpers
    //#region brain info meta data helpers
    //#endregion brain info meta data helpers
    //#region Python vm helpers
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return {
        extType: 0x61,
        loadAddress: 0x30700000,
        linkFile: "python_vm.bin",
        linkFileVID: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.VEXVM
      };
    }
  }, {
    key: "getVmMeta",
    value: function getVmMeta() {
      return _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_8__.metaEXP;
    }
  }, {
    key: "getPythonVMResourcePath",
    value: function getPythonVMResourcePath() {
      return "resources/exp/vm/python_vm.bin";
    }
  }, {
    key: "getPythonVmDownloadInfo",
    value: function getPythonVmDownloadInfo() {
      return {
        address: 0x30700000,
        target: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_FLASH,
        vid: 0xFF
      };
    }
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {
      this.downloadTargetSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.FILE_TARGET_QSPI);
      this.downloadAddressSet(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.USR_ADDRESS);
    }
    //#endregion Python vm helpers

    //#region controller firmware
  }, {
    key: "radioChipId",
    get: function get() {
      return _radio_cc264x__WEBPACK_IMPORTED_MODULE_4__.cc264xdfu.CC2642_CHIP_ID;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_6__.DFUTargetDevice.EXPController;
    }
    //#endregion controller firmware

    //#region controller comms
    //#endregion controller comms

    //#region low level comms
  }, {
    key: "decodeSystemVersion",
    value: function decodeSystemVersion(msg) {
      /*
        byte 0 = 0xAA
        byte 1 = 0x55
        byte 2 = 0xA4 // CDC_GET_SYS_VERSION
        byte 3 = 8 // size of the data ... at least for now
        bytes 4-11 = the version structure
          byte 0 = major
          byte 1 = minor
          byte 2 = build
          byte 3 = hardware version
          byte 4 = beta version
          byte 5 = product id // not used?
          byte 6 = product flags
            bit0 = ?
            bit1 = battery low
            bit2 = ?
            bit3 = ?
            bit4 = ?
            bit5 = ?
            bit6 = ?
            bit7 = ?
          byte 7 = reserved
      */
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        this.versionSystem[0] = dvb.getUint8(extcmd + 0);
        this.versionSystem[1] = dvb.getUint8(extcmd + 1);
        this.versionSystem[2] = dvb.getUint8(extcmd + 2);
        this.versionSystem[3] = dvb.getUint8(extcmd + 4);
        this.updateSystemVersionString();
      }
    }
    //#endregion low level comms

    //#region event handlers
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceIQ.ts":
/*!**************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceIQ.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IQDeviceID: () => (/* binding */ IQDeviceID),
/* harmony export */   VexSerialDeviceIQ: () => (/* binding */ VexSerialDeviceIQ)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _radio_cc264x__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./radio/cc264x */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/radio/cc264x.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @vexcode/python-vm */ "./node_modules/@vexcode/python-vm/dist/index.js");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexIQWebSerial");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");









if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_9__.targetIsIQ) {
  log.warn("VexSerialDeviceIQ loaded in non-IQ build");
}
var USER_PROG_1 = 1;
var USER_PROG_2 = 2;
var USER_PROG_3 = 3;
var USER_PROG_4 = 4;
var USER_PROG_CHUNK_SIZE = 240; // chunk size (RC uses 240)
var USER_FLASH_START = 0x00020000; // start address of IQ flash
var USER_FLASH_END = 0x00040000; // end address of IQ flash
var USER_FLASH_BLOCK = 1024; // 1k blocks

var USER_FLASH_SLOT_1 = 0x20000;
var USER_FLASH_SLOT_2 = 0x28000;
var USER_FLASH_SLOT_3 = 0x30000;
var USER_FLASH_SLOT_4 = 0x38000;
var USER_FLASH_SLOT_SIZE = 0x08000;
var USER_FLASH_SYS_CODE_START = 0x03400000; // start address of user code
var USER_FLASH_USR_CODE_START = 0x03800000; // start address of user code
var USER_FLASH_MAX_FILE_SIZE = 0x200000; // Maximum file size for qspi

var USER_FLASH_ROBOTC = 0x00020400; // ROBOTC catalog address

var SUCCESS = 0;
var ERROR_BAD_OBJECT = -1;
var ERROR_NOT_CONNECTED = -2;
var ERROR_BAD_CATALOG = -3;
var ERROR_UNSUPPORTED_DEVICE = -4;
var ERROR_DOWNLOAD = -5;
var ERROR_DELETE = -6;
var ERROR_AUTOPLAY = -7;
var IQDeviceID = /*#__PURE__*/function (IQDeviceID) {
  IQDeviceID[IQDeviceID["IQ_EMPTY"] = 0] = "IQ_EMPTY";
  IQDeviceID[IQDeviceID["IQ_OLD_MOT"] = 1] = "IQ_OLD_MOT";
  IQDeviceID[IQDeviceID["IQ_MOTOR"] = 2] = "IQ_MOTOR";
  IQDeviceID[IQDeviceID["IQ_LED"] = 3] = "IQ_LED";
  IQDeviceID[IQDeviceID["IQ_RGB"] = 4] = "IQ_RGB";
  IQDeviceID[IQDeviceID["IQ_BUMPER"] = 5] = "IQ_BUMPER";
  IQDeviceID[IQDeviceID["IQ_GYRO"] = 6] = "IQ_GYRO";
  IQDeviceID[IQDeviceID["IQ_SONAR"] = 7] = "IQ_SONAR";
  IQDeviceID[IQDeviceID["IQ_SMARTRADIO"] = 8] = "IQ_SMARTRADIO";
  IQDeviceID[IQDeviceID["IQ_CONTROLLER"] = 9] = "IQ_CONTROLLER";
  // These were added during V5 development
  IQDeviceID[IQDeviceID["IQ_BRAIN"] = 10] = "IQ_BRAIN";
  IQDeviceID[IQDeviceID["IQ_VISION"] = 11] = "IQ_VISION";
  IQDeviceID[IQDeviceID["RADIO_2_4"] = 13] = "RADIO_2_4";
  IQDeviceID[IQDeviceID["RADIO_900"] = 18] = "RADIO_900";
  IQDeviceID[IQDeviceID["BL_MOTOR_ROM"] = 161] = "BL_MOTOR_ROM";
  IQDeviceID[IQDeviceID["BL_MOTOR_RAM"] = 162] = "BL_MOTOR_RAM";
  IQDeviceID[IQDeviceID["BL_SONAR_ROM"] = 163] = "BL_SONAR_ROM";
  IQDeviceID[IQDeviceID["BL_SONAR_RAM"] = 164] = "BL_SONAR_RAM";
  IQDeviceID[IQDeviceID["BL_GYRO_ROM"] = 165] = "BL_GYRO_ROM";
  IQDeviceID[IQDeviceID["BL_GYRO_RAM"] = 166] = "BL_GYRO_RAM";
  IQDeviceID[IQDeviceID["BL_LED_ROM"] = 167] = "BL_LED_ROM";
  IQDeviceID[IQDeviceID["BL_LED_RAM"] = 168] = "BL_LED_RAM";
  IQDeviceID[IQDeviceID["BL_RGB_ROM"] = 169] = "BL_RGB_ROM";
  IQDeviceID[IQDeviceID["BL_RGB_RAM"] = 170] = "BL_RGB_RAM";
  IQDeviceID[IQDeviceID["IQ_DONTCARE"] = 255] = "IQ_DONTCARE";
  return IQDeviceID;
}(IQDeviceID || {});
;
var VexSerialDeviceIQ = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceIQ() {
    var _this;
    _classCallCheck(this, VexSerialDeviceIQ);
    _this = _callSuper(this, VexSerialDeviceIQ);
    _defineProperty(_this, "classIdent", 'Vex IQ serial');
    _defineProperty(_this, "versionBoot", [0, 0]);
    _defineProperty(_this, "versionBrain", [0, 0]);
    _defineProperty(_this, "versionJoystick", [0, 0]);
    _defineProperty(_this, "versionSystemStr", '');
    _defineProperty(_this, "versionHardware", 0);
    _defineProperty(_this, "uniqueId", 0);
    _defineProperty(_this, "deviceName", '');
    _defineProperty(_this, "deviceTeamNumber", '0000');
    // not used 
    _defineProperty(_this, "catalogAddresses", []);
    _defineProperty(_this, "programInfo", []);
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    _this.deviceType = null;
    _this.catalogHeader = new BinFileHeaderIQ();
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed IQ");
    return _this;
  }
  _inherits(VexSerialDeviceIQ, _VexSerialDevice);
  return _createClass(VexSerialDeviceIQ, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0003
      },
      // IQ1 brain - 3
      {
        usbVendorId: 0x2888,
        usbProductId: 0x0200
      },
      // IQ2 brain - 512
      {
        usbVendorId: 0x2888,
        usbProductId: 0x0210
      } // controller - 528
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return "IQ2Controller";
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      var isGen1 = portInfo && portInfo.usbProductId === 0x0003;
      var isGen2 = portInfo && portInfo.usbProductId === 0x0200;
      var isGen2Controller = portInfo && portInfo.usbProductId === 0x0210;
      if (isGen1) {
        this.deviceType = "IQ";
      } else if (isGen2) {
        this.deviceType = "IQ2";
      } else if (isGen2Controller) {
        this.deviceType = "IQ2Controller";
      } else {
        log.warn("unknown product ID", portInfo);
        this.deviceType = null;
      }
    }
    //#endregion connection information

    //#region connection check helpers
    //#endregion connection check helpers

    //#region connection control
    //#endregion connection control

    //#region brain information
  }, {
    key: "isGen1",
    get: function get() {
      return this.deviceType === "IQ";
    }
  }, {
    key: "fetchBrainInfo",
    value: function () {
      var _fetchBrainInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", this.isGen1 ? this.fetchBrainInfoIQ1() : _superPropGet(VexSerialDeviceIQ, "fetchBrainInfo", this, 3)([]));
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function fetchBrainInfo() {
        return _fetchBrainInfo.apply(this, arguments);
      }
      return fetchBrainInfo;
    }()
  }, {
    key: "fetchBrainInfoIQ1",
    value: function () {
      var _fetchBrainInfoIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return this.getBrainNameIQ1(true);
            case 2:
              _context2.next = 4;
              return this.brainGetSystemStatusIQ1(true);
            case 4:
              _context2.next = 6;
              return this.brainGetSystemVersion(true);
            case 6:
              if (!(this.uniqueId || this.versionSystem[0])) {
                _context2.next = 10;
                break;
              }
              return _context2.abrupt("return", this.getRobotInfo());
            case 10:
              return _context2.abrupt("return", null);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function fetchBrainInfoIQ1() {
        return _fetchBrainInfoIQ.apply(this, arguments);
      }
      return fetchBrainInfoIQ1;
    }() //#region brain name
  }, {
    key: "getBrainName",
    value: function getBrainName() {
      var canBeConnecting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return this.isGen1 ? this.getBrainNameIQ1(canBeConnecting) : _superPropGet(VexSerialDeviceIQ, "getBrainName", this, 3)([canBeConnecting]);
    }
  }, {
    key: "getBrainNameIQ1",
    value: function () {
      var _getBrainNameIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var canBeConnecting,
          reply,
          _args3 = arguments;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              canBeConnecting = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : false;
              log.info("getBrainName");
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              _context3.prev = 4;
              _context3.next = 7;
              return this.writeDataAsync(this.cdc.brinName());
            case 7:
              reply = _context3.sent;
              this.decodeBrainName(reply);
              _context3.next = 13;
              break;
            case 11:
              _context3.prev = 11;
              _context3.t0 = _context3["catch"](4);
            case 13:
              return _context3.abrupt("return", this.deviceName);
            case 14:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 11]]);
      }));
      function getBrainNameIQ1() {
        return _getBrainNameIQ.apply(this, arguments);
      }
      return getBrainNameIQ1;
    }()
  }, {
    key: "setBrainName",
    value: function setBrainName(name) {
      this.checkSupported();
      this.checkRequiredConnection();
      if (this.isGen1) {
        throw new Error("Method not implemented.");
      }
      return _superPropGet(VexSerialDeviceIQ, "setBrainName", this, 3)([name]);
    }
    //#endregion brain name

    //#region brain team
  }, {
    key: "getBrainTeamNumber",
    value: function () {
      var _getBrainTeamNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var canBeConnecting,
          _args4 = arguments;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              canBeConnecting = _args4.length > 0 && _args4[0] !== undefined ? _args4[0] : false;
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              if (!this.isGen1) {
                _context4.next = 5;
                break;
              }
              throw new Error("Method not implemented.");
            case 5:
              return _context4.abrupt("return", _superPropGet(VexSerialDeviceIQ, "getBrainTeamNumber", this, 3)([canBeConnecting]));
            case 6:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function getBrainTeamNumber() {
        return _getBrainTeamNumber.apply(this, arguments);
      }
      return getBrainTeamNumber;
    }()
  }, {
    key: "setBrainTeamNumber",
    value: function setBrainTeamNumber(team) {
      this.checkSupported();
      this.checkRequiredConnection();
      if (this.isGen1) {
        throw new Error("Method not implemented.");
      }
      return _superPropGet(VexSerialDeviceIQ, "setBrainTeamNumber", this, 3)([team]);
    }
    //#endregion brain team

    /**
     * Get the robot system status
     */
  }, {
    key: "brainGetSystemStatus",
    value: function () {
      var _brainGetSystemStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var canBeConnecting,
          _args5 = arguments;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              canBeConnecting = _args5.length > 0 && _args5[0] !== undefined ? _args5[0] : false;
              return _context5.abrupt("return", this.isGen1 ? this.brainGetSystemStatusIQ1(canBeConnecting) : _superPropGet(VexSerialDeviceIQ, "brainGetSystemStatus", this, 3)([canBeConnecting]));
            case 2:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function brainGetSystemStatus() {
        return _brainGetSystemStatus.apply(this, arguments);
      }
      return brainGetSystemStatus;
    }()
  }, {
    key: "brainGetSystemStatusIQ1",
    value: function () {
      var _brainGetSystemStatusIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var canBeConnecting,
          reply,
          _args6 = arguments;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              canBeConnecting = _args6.length > 0 && _args6[0] !== undefined ? _args6[0] : false;
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              this.uniqueId = 0;
              _context6.prev = 4;
              _context6.next = 7;
              return this.writeDataAsync(this.cdc.query1());
            case 7:
              reply = _context6.sent;
              this.decodeQuery1(reply);
              return _context6.abrupt("return", reply);
            case 12:
              _context6.prev = 12;
              _context6.t0 = _context6["catch"](4);
              return _context6.abrupt("return", undefined);
            case 15:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[4, 12]]);
      }));
      function brainGetSystemStatusIQ1() {
        return _brainGetSystemStatusIQ.apply(this, arguments);
      }
      return brainGetSystemStatusIQ1;
    }()
  }, {
    key: "brainGetSystemVersion",
    value: function () {
      var _brainGetSystemVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var canBeConnecting,
          reply,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              canBeConnecting = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : false;
              log.info("brainGetSystemVersion");
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              _context7.prev = 4;
              _context7.next = 7;
              return this.writeDataAsync(this.cdc.systemVersion());
            case 7:
              reply = _context7.sent;
              this.decodeSystemVersion(reply);
              return _context7.abrupt("return", reply);
            case 12:
              _context7.prev = 12;
              _context7.t0 = _context7["catch"](4);
              return _context7.abrupt("return", undefined);
            case 15:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[4, 12]]);
      }));
      function brainGetSystemVersion() {
        return _brainGetSystemVersion.apply(this, arguments);
      }
      return brainGetSystemVersion;
    }()
  }, {
    key: "getBrainFirmwareVersion",
    value: function getBrainFirmwareVersion() {
      this.checkSupported();
      this.checkRequiredConnection();
      throw new Error("Method not implemented.");
    }
    //#endregion brain information

    //#region controller information
    //#endregion controller information

    //#region firmware
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        var base, catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              base = "https://content.vexrobotics.com/vexos/public/";
              catalogURL = base + (!this.isGen1 ? "IQ2/catalog.txt" : "IQ/catalog4.txt");
              log.debug("catalogURL:", catalogURL);
              _context8.prev = 3;
              _context8.next = 6;
              return fetch(catalogURL);
            case 6:
              catalogResponse = _context8.sent;
              _context8.next = 9;
              return catalogResponse.text();
            case 9:
              catalog = _context8.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_IQ2?_/, "");
              return _context8.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 15:
              _context8.prev = 15;
              _context8.t0 = _context8["catch"](3);
              log.warn(_context8.t0);
              return _context8.abrupt("return", null);
            case 19:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this, [[3, 15]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(progressCB, connectPrompt) {
        var brainVersionStart, lastProgress, totalSteps, goldenOffset, sendProgress, meta, fw, goldenFW, goldenRes, bootFW, bootRes, assetFW, assetRes;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              if (!this.isGen1) {
                _context9.next = 2;
                break;
              }
              throw new Error("Method not implemented.");
            case 2:
              // TODO: block this if connected over controller

              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done,
                prog: -1,
                msg: ""
              };
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 1;
              goldenOffset = 2;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = state > _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenReboot ? state - goldenOffset : state - 1;
                var totalProgress = (offset + prog) / totalSteps;
                log.debug("brain firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates[state], prog, totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              }; // based on function updateFirmware_iq2 from device manager
              _context9.prev = 10;
              if (this._inDFUMode) {
                _context9.next = 25;
                break;
              }
              _context9.prev = 12;
              progressCB(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, 0, "Checking Python Version");
              meta = this.getVmMeta();
              _context9.next = 17;
              return this.checkAndInstallPythonVm(meta.crc, meta.version, function (data) {
                if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.CheckingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Checking Python Version");
                } else if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Loading Python");
                }
              });
            case 17:
              _context9.next = 23;
              break;
            case 19:
              _context9.prev = 19;
              _context9.t0 = _context9["catch"](12);
              log.warn("error loading Python VM");
              log.warn(_context9.t0);
            case 23:
              _context9.next = 26;
              break;
            case 25:
              log.warn("skipping Python VM update check due to brain in DFU mode");
            case 26:
              _context9.next = 28;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 28:
              fw = _context9.sent;
              if (!((this.primaryBootSource === true || this._ramBootloader === true) && this.checkGoldenImage() === false)) {
                _context9.next = 43;
                break;
              }
              log.info("updating Golden...");
              goldenFW = fw.getFile("EXP_boot_rom.bin");
              _context9.next = 34;
              return this.updateBrain(goldenFW.data, 0xB2, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenUpdate, percent, "Updating Golden");
              });
            case 34:
              goldenRes = _context9.sent;
              if (goldenRes) {
                _context9.next = 37;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainGolden();
            case 37:
              // 2b. reboot brain and reconnect?
              log.info("waiting for reboot");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenReboot, 0, "Rebooting Post Golden Update");
              _context9.next = 41;
              return this.delay(3000);
            case 41:
              _context9.next = 45;
              break;
            case 43:
              goldenOffset = 3;
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 2;
            case 45:
              // 3. update boot.bin
              log.info("updating firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, 0, "Updating Firmware");
              bootFW = fw.getFile("boot.bin");
              _context9.next = 50;
              return this.updateBrain(bootFW.data, 1, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, percent, "Updating Firmware");
              });
            case 50:
              bootRes = _context9.sent;
              if (bootRes) {
                _context9.next = 53;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainBoot();
            case 53:
              // 4. update assets
              log.info("updating assets");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, 0, "Updating Assets");
              assetFW = fw.getFile("assets.bin");
              _context9.next = 58;
              return this.updateBrain(assetFW.data, 0, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, percent, "Updating Assets");
              });
            case 58:
              assetRes = _context9.sent;
              if (assetRes) {
                _context9.next = 61;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_7__.ErrorUpdatingBrainAssets();
            case 61:
              // // 5. reboot and reconnect
              // log.info("rebooting... waiting for connection loss");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0, "Waiting For Poweroff");
              // while (this.isConnected) {
              //   await this.delay(500);
              // }

              // log.info("rebooting... waiting for reboot");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.3, "Waiting For Reboot");
              // await this.delay(10000);

              // log.info("rebooting... waiting for new connection");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.5, "Waiting For Connection");
              // let reconnected = false;
              // while (!reconnected) {
              //   try {
              //     await this.reconnect();
              //     reconnected = true;
              //   } catch(err) {
              //     if (err instanceof DOMException) {
              //       if (err.name === "SecurityError") {
              //         log.warn("failed to open connect prompt due to security permissions");
              //         await connectPrompt();  
              //       } else if (err.name === "NotFoundError") {
              //         log.warn("user hit cancel")
              //         await connectPrompt();
              //       }
              //     } else {
              //       log.error("error name:", err.name, err);
              //       throw err;
              //     }
              //   }
              // }

              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done, 1, "Update Complete");

              // setTimeout(async () => {
              //   await this.fetchBrainInfo();
              //   await this.checkUpdateNeededBrain();
              //   this.fireEvent("deviceInfoUpdated", this.getRobotInfo());
              // }, 200);

              // this.isUpdatingFirmware = false;
              _context9.next = 73;
              break;
            case 66:
              _context9.prev = 66;
              _context9.t1 = _context9["catch"](10);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.debug("brain update error:", _context9.t1);
              log.debug("brain version before update start:", brainVersionStart);
              throw _context9.t1;
            case 73:
              return _context9.abrupt("return", true);
            case 74:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[10, 66], [12, 19]]);
      }));
      function updateFirmware(_x, _x2) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }() //#endregion firmware
    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return this.isGen1 ? new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWIQ() : new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWIQ2();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
  }, {
    key: "play",
    value: function play(slot) {
      return this.isGen1 ? this.playIQ1(slot) : _superPropGet(VexSerialDeviceIQ, "play", this, 3)([slot]);
    }
  }, {
    key: "playIQ1",
    value: function playIQ1(slot) {
      var _this2 = this;
      this.checkSupported();
      this.checkRequiredConnection();
      return new Promise(function (resolve, reject) {
        _this2.writeDataAsync(_this2.cdc.playSlot(slot + 1)).then(function () {
          resolve(true);
        })["catch"](function () {
          reject();
        });
      });
    }
  }, {
    key: "stop",
    value: function stop() {
      return this.isGen1 ? this.stopIQ1() : _superPropGet(VexSerialDeviceIQ, "stop", this, 3)([]);
    }
  }, {
    key: "stopIQ1",
    value: function stopIQ1() {
      var _this3 = this;
      this.checkSupported();
      this.checkRequiredConnection();
      return new Promise(function (resolve, reject) {
        _this3.writeDataAsync(_this3.cdc.stopProgram()).then(function () {
          resolve(true);
        })["catch"](function () {
          reject();
        });
      });
    }
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(data, info, progress) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              if (!this.isGen1) {
                _context10.next = 2;
                break;
              }
              return _context10.abrupt("return", this.downloadProgramIQ1(data, info, progress));
            case 2:
              return _context10.abrupt("return", this.downloadProgramIQ2(data, info, progress));
            case 3:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function downloadProgram(_x3, _x4, _x5) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }()
  }, {
    key: "downloadProgramIQ1",
    value: function () {
      var _downloadProgramIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(data, info, progress) {
        var _this4 = this;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              return _context12.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(resolve, reject) {
                  var buffer;
                  return _regeneratorRuntime().wrap(function _callee11$(_context11) {
                    while (1) switch (_context11.prev = _context11.next) {
                      case 0:
                        buffer = new Uint8Array(data); // get the header info
                        _this4.catalogHeader.readHeader(buffer);
                        log.debug(_this4.catalogHeader.debugString());
                        if (!_this4.catalogHeader.validate()) {
                          _context11.next = 11;
                          break;
                        }
                        _context11.t0 = resolve;
                        _context11.next = 7;
                        return _this4.downloadDataIQ1(buffer, progress);
                      case 7:
                        _context11.t1 = _context11.sent;
                        (0, _context11.t0)(_context11.t1);
                        _context11.next = 13;
                        break;
                      case 11:
                        log.warn("Download error: bad catalog");
                        resolve(false);
                      case 13:
                      case "end":
                        return _context11.stop();
                    }
                  }, _callee11);
                }));
                return function (_x9, _x10) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 3:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function downloadProgramIQ1(_x6, _x7, _x8) {
        return _downloadProgramIQ.apply(this, arguments);
      }
      return downloadProgramIQ1;
    }()
  }, {
    key: "downloadProgramIQ2",
    value: function () {
      var _downloadProgramIQ2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(data, info, progress) {
        var v5info;
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              v5info = _objectSpread(_objectSpread({}, info), {}, {
                ports: [],
                triports: [],
                controller1: null,
                controller2: null
              });
              return _context13.abrupt("return", _superPropGet(VexSerialDeviceIQ, "downloadProgram", this, 3)([data, v5info, progress]));
            case 2:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function downloadProgramIQ2(_x11, _x12, _x13) {
        return _downloadProgramIQ2.apply(this, arguments);
      }
      return downloadProgramIQ2;
    }() //#endregion downloads
    //#region brain files
    //#endregion brain files
    //#region file metadata helpers
    //#endregion file metadata helpers
    //#region brain info meta data helpers
    //#endregion brain info meta data helpers
    //#region Python vm helpers
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return {
        extType: 0x61,
        loadAddress: 0x10300000,
        linkFile: "python_vm.bin",
        linkFileVID: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice.VID.VEXVM
      };
    }
  }, {
    key: "getVmMeta",
    value: function getVmMeta() {
      return _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_8__.metaIQ2;
    }
  }, {
    key: "getPythonVMResourcePath",
    value: function getPythonVMResourcePath() {
      return "resources/iq2/vm/python_vm.bin";
    }
  }, {
    key: "getPythonVmDownloadInfo",
    value: function getPythonVmDownloadInfo() {
      return {
        address: 0x10300000,
        target: VexSerialDeviceIQ.FILE_TARGET_FLASH,
        vid: 0xFF
      };
    }
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {
      this.downloadTargetSet(VexSerialDeviceIQ.FILE_TARGET_QSPI);
      this.downloadAddressSet(VexSerialDeviceIQ.USR_ADDRESS);
    }
    //#endregion Python vm helpers

    //#region controller firmware
  }, {
    key: "radioChipId",
    get: function get() {
      return _radio_cc264x__WEBPACK_IMPORTED_MODULE_4__.cc264xdfu.CC2640_CHIP_ID;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__.DFUTargetDevice.IQ2Controller;
    }
    //#endregion controller firmware

    //#region controller comms
    //#endregion controller comms

    //#region low level comms
    /**
     * Download ArrayBuffer (Uint8Array) to the VEXIQ
     * serial link should be open and the catalog header should have been verified
     * before calling this function.
     */
  }, {
    key: "downloadDataIQ1",
    value: function () {
      var _downloadDataIQ = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(buf, progressCallback) {
        var _this5 = this;
        var nextAddress, bigProgram;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              if (!(buf === undefined || !this.connected)) {
                _context14.next = 2;
                break;
              }
              return _context14.abrupt("return", false);
            case 2:
              nextAddress = this.catalogHeader.nUserAddress;
              bigProgram = false; // clear status
              this.lastStatus = VexSerialDeviceIQ.STATUS_GOOD;
              return _context14.abrupt("return", new Promise(function (resolve, reject) {
                // and do the download......
                _this5.writeDataAsync(_this5.cdc.query1()).then(function (reply) {
                  // update progress
                  if (progressCallback) progressCallback({
                    progress: 0,
                    state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram
                  });
                  log.debug('Get user catalog');
                  return _this5.writeDataAsync(_this5.cdc.userProgramSlotsGet());
                }).then(function (reply) {
                  _this5.decodeGetUserSlot(reply);
                  log.debug('stop program');
                  return _this5.writeDataAsync(_this5.cdc.stopProgram());
                }).then(function (reply) {
                  // does the existing catalog address match the program ?
                  if (!_this5.validateCatalogAddress()) {
                    // No, we must erase everything
                    log.debug('flash erase everything');
                    return _this5.writeDataAsync(_this5.cdc.flashErase(USER_FLASH_START, (USER_FLASH_END - USER_FLASH_START) / USER_FLASH_BLOCK), {
                      timeout: 1000
                    }).then(function (reply) {
                      // does the existing catalog address match the program ?
                      log.debug('download exit');
                      return _this5.writeDataAsync(_this5.cdc.downloadExit());
                    }).then(function (reply) {
                      log.debug('erase catalog');
                      return _this5.writeDataAsync(_this5.cdc.eraseCatalog());
                    });
                  }
                }).then(function (reply) {
                  var blocks = (buf.length + 1023) / 1024 >> 0;
                  if (blocks > 32) bigProgram = true;
                  log.debug("flash erase addrsss ".concat(_this5.cdc.hex8(nextAddress), " with ").concat(blocks, " blocks"));
                  return _this5.writeDataAsync(_this5.cdc.flashErase(nextAddress, blocks), {
                    timeout: 1000
                  });
                }).then(function (reply) {
                  log.debug('set catalog slot');
                  return _this5.writeDataAsync(_this5.cdc.userProgramSlotsSet(_this5.catalogHeader.nSLOT, nextAddress));
                }).then(function (reply) {
                  var bufferOffset = 0;
                  var bufferChunkSize = USER_PROG_CHUNK_SIZE;
                  return new Promise(function (resolve, reject) {
                    var lastBlock = false;
                    var _sendBlock = function sendBlock() {
                      var tmpbuf;
                      if (buf.byteLength - bufferOffset > bufferChunkSize) tmpbuf = buf.subarray(bufferOffset, bufferOffset + bufferChunkSize);else {
                        // last chunk
                        tmpbuf = buf.subarray(bufferOffset, buf.byteLength);
                        lastBlock = true;
                      }
                      log.debug("Write addr ".concat(_this5.cdc.hex8(nextAddress), " Size ").concat(tmpbuf.length));

                      // Write the chunk
                      _this5.writeDataAsync(_this5.cdc.flashWrite(nextAddress, tmpbuf)).then(function (reply) {
                        // last block sent ?
                        if (lastBlock) {
                          resolve(reply);
                        } else {
                          _sendBlock();
                        }
                      })["catch"](function (reply) {
                        reject(reply);
                      });

                      // update progress
                      if (progressCallback != undefined) progressCallback({
                        progress: bufferOffset / buf.byteLength,
                        state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram
                      });

                      // next chunk
                      bufferOffset += bufferChunkSize;
                      nextAddress += bufferChunkSize;
                    };

                    // Send first block
                    _sendBlock();
                  });
                }).then(function (reply) {
                  log.debug('download exit');
                  return _this5.writeDataAsync(_this5.cdc.downloadExit());
                }).then(function (reply) {
                  if (bigProgram && _this5.catalogHeader.nSLOT < 4) {
                    log.info('big program detected');
                    var blocks = (buf.length + 1023) / 1024 >> 0;
                    nextAddress = _this5.catalogHeader.nUserAddress + blocks * 1024;
                    log.debug("  flash erase addrsss ".concat(_this5.cdc.hex8(nextAddress), " with 1 blocks"));
                    return _this5.writeDataAsync(_this5.cdc.flashErase(nextAddress, 1), {
                      timeout: 1000
                    }).then(function (reply) {
                      var slot = _this5.catalogHeader.nSLOT + 1;
                      log.debug('  set next catalog slot to ' + _this5.cdc.hex8(nextAddress));
                      return _this5.writeDataAsync(_this5.cdc.userProgramSlotsSet(slot, nextAddress));
                    }).then(function (reply) {
                      var tmpbuf = new Uint8Array(USER_PROG_CHUNK_SIZE);
                      tmpbuf.fill(0xFF);
                      var slot = _this5.catalogHeader.nSLOT + 1;
                      var dum = new BinFileHeaderIQ();
                      dum.createDummy(slot, nextAddress);
                      dum.writeHeader(tmpbuf);
                      log.debug("  Write addr ".concat(_this5.cdc.hex8(nextAddress), " Size ").concat(tmpbuf.length));
                      // Write the chunk
                      return _this5.writeDataAsync(_this5.cdc.flashWrite(nextAddress, tmpbuf));
                    }).then(function (reply) {
                      log.debug('  download exit');
                      return _this5.writeDataAsync(_this5.cdc.downloadExit());
                    }).then(function (reply) {
                      log.debug("  flash erase addrsss ".concat(_this5.cdc.hex8(nextAddress), " with 1 blocks"));
                      return _this5.writeDataAsync(_this5.cdc.flashErase(nextAddress, 1), {
                        timeout: 1000
                      });
                    }).then(function (reply) {
                      log.debug('  download exit');
                      return _this5.writeDataAsync(_this5.cdc.downloadExit());
                    });
                  }
                }).then(function (reply) {
                  log.info('download done');
                  // update progress
                  if (progressCallback != undefined) progressCallback({
                    progress: 1,
                    state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram
                  });
                  resolve(true);
                })["catch"](function (reply) {
                  log.warn('download error');
                  // update progress
                  if (progressCallback != undefined) progressCallback({
                    progress: 0,
                    state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingProgram
                  });
                  resolve(false);
                });
              }));
            case 6:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function downloadDataIQ1(_x14, _x15) {
        return _downloadDataIQ.apply(this, arguments);
      }
      return downloadDataIQ1;
    }()
    /**
     * validate catalog start addresses
     * A change of slot start address will cause a complete erase
     * RobotC being installed will cause a complete erase
     * @return {boolean} true for valid catalog (no erase)
     */
  }, {
    key: "validateCatalogAddress",
    value: function validateCatalogAddress() {
      var currentCatalogAddress = this.catalogAddresses[this.catalogHeader.nSLOT];

      // check if ROBOTC is installed
      if (this.catalogAddresses[USER_PROG_2] === USER_FLASH_ROBOTC) return false;

      // does the new user program match the existing catalog address ?
      if (this.catalogHeader.nUserAddress === currentCatalogAddress) return true;else return false;
    }
  }, {
    key: "decodeQuery1",
    value: function decodeQuery1(msg) {
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        this.versionJoystick[0] = dvb.getUint8(extcmd + 0);
        this.versionJoystick[1] = dvb.getUint8(extcmd + 1);
        this.versionBrain[0] = dvb.getUint8(extcmd + 2);
        this.versionBrain[1] = dvb.getUint8(extcmd + 2);
        this.versionBoot[0] = dvb.getUint8(extcmd + 6);
        this.versionBoot[1] = dvb.getUint8(extcmd + 7);

        // TODO: decode status bitmap
        /*
          byte 12 = extcmd + 8 = Brain Status bits
           Bit 0     //1= Radio is detected
          Bit 1     //1= Radio is linked
          Bit 2     //1= Joystick is connected
          Bit 3     //1= a user program is running
          Bit 4     //1= a user download is in progress
          Bit 5     //1= user code has been initialized
          Bit 6     //1= Button Control is active
          Bit 7     //1= Fatal Error on Motor Port
         */

        // TODO: decode sensors need update
        /*
          byte 8 = extcmd + 4 = Total # of Sensors needing a firmware upgrade
          byte 9 = extcmd + 5 =  Sensor Type (2-7)
           Where: 2=Motor, 3=LED, 4=RGB, 5=N/A, 6=GYRO, 7=SONAR
           When byte 8 and 9 are = 0 then there are no sensors requiring a firmware update
        */
      }
    }
  }, {
    key: "decodeSystemVersion",
    value: function decodeSystemVersion(msg) {
      /*
        byte 0 = 0xAA
        byte 1 = 0x55
        byte 2 = 0xA4 // CDC_GET_SYS_VERSION
        byte 3 = 8 // size of the data ... at least for now
        bytes 4-11 = the version structure
          byte 0 = major
          byte 1 = minor
          byte 2 = build
          byte 3 = hardware version
          byte 4 = beta version
          byte 5 = product id // not used?
          byte 6 = product flags
            bit0 = ?
            bit1 = battery low
            bit2 = ?
            bit3 = ?
            bit4 = ?
            bit5 = ?
            bit6 = ?
            bit7 = ?
          byte 7 = reserved
      */
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        this.versionSystem[0] = dvb.getUint8(extcmd + 0);
        this.versionSystem[1] = dvb.getUint8(extcmd + 1);
        this.versionSystem[2] = dvb.getUint8(extcmd + 2);
        this.versionSystem[3] = dvb.getUint8(extcmd + 4);
        this.brainVersionSystem = new _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion(this.versionSystem[0], this.versionSystem[1], this.versionSystem[2], this.versionSystem[3]);
        this.updateSystemVersionString();
      }
    }

    /**
     * Decode a received catalog slot address reply
     * @param  (Uint8Array} meg the CDC reply to decode
     */
  }, {
    key: "decodeGetUserSlot",
    value: function decodeGetUserSlot(msg) {
      var rawbuf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      var buf = new DataView(rawbuf.buffer);
      this.catalogAddresses[0] = buf.getUint32(4, false); // not used
      this.catalogAddresses[1] = buf.getUint32(8, false);
      this.catalogAddresses[2] = buf.getUint32(12, false);
      this.catalogAddresses[3] = buf.getUint32(16, false);
      this.catalogAddresses[4] = buf.getUint32(20, false);
    }
  }, {
    key: "decodeBrainName",
    value: function decodeBrainName(msg) {
      log.info("decodeBrainName", msg);
      /*
        byte 0 = 0xAA
        byte 1 = 0x55
        byte 2 = 0x44 // CDC_GET_ROBOT_NAME
        byte 3 = length
        bytes 4-n = name // n = length + 4
      */

      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdcValidateIQMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        var brainName = "";
        for (var i = 0; i < length; i++) {
          var code = dvb.getUint8(extcmd + i);
          if (code === 0) {
            break;
          }
          var _char = String.fromCharCode(code);
          brainName += _char;
        }
        this.deviceName = brainName;
      }
    }

    //#endregion

    //#region event handlers
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);
var BinFileHeaderIQ = /*#__PURE__*/function () {
  function BinFileHeaderIQ() {
    _classCallCheck(this, BinFileHeaderIQ);
    _defineProperty(this, "nStackTop", 0);
    _defineProperty(this, "_c_vexinit", 0);
    _defineProperty(this, "nUserAddress", 0);
    _defineProperty(this, "__TI_CINIT_Limit", 0);
    _defineProperty(this, "ProgramNameOffset", 0);
    _defineProperty(this, "ProgramName", "");
    // endianess of header, true is littleEndian
    _defineProperty(this, "endianess", true);
  }
  return _createClass(BinFileHeaderIQ, [{
    key: "updateDevicePort",
    value: function updateDevicePort(data, port, id) {
      var header = new DataView(data.buffer);
      var offset = port - 1;
      var devid = id;
      if (offset < 0 || offset > 11) return;
      console.log("set port" + port + " to " + id);
      header.setUint8(52 + offset, id);
    }
  }, {
    key: "readHeader",
    value: function readHeader(data) {
      var header = new DataView(data.buffer);
      this.nStackTop = header.getUint32(0, this.endianess);
      this._c_vexinit = header.getUint32(4, this.endianess);
      this.nUserAddress = header.getUint32(8, this.endianess);
      this.__TI_CINIT_Limit = header.getUint32(12, this.endianess);
      this.ProgramNameOffset = header.getUint32(16, this.endianess); // offset to program names
      this.nUserVersion = header.getUint8(20);
      this.nTYPE = header.getUint8(21);
      this.nSLOT = header.getUint8(22);
      this.nMODE = header.getUint8(23);
      this.userInitialize = header.getUint32(24, this.endianess);
      this.userTask = header.getUint32(28, this.endianess);
      this.main = header.getUint32(32, this.endianess);
      this.userIdle = header.getUint32(36, this.endianess);
      this.nDIGITAL_MASK = header.getUint32(40, this.endianess);
      this.nAPIVersion = header.getUint32(44, this.endianess);
      this.pDEviceArrayPointer = header.getUint32(48, this.endianess);

      // Get the sensor type array
      this.nSensorTypes = [];
      for (var offset = 0; offset < 12; offset++) {
        this.nSensorTypes.push(header.getUint8(52 + offset));
      }

      // get the program name offset relative to file start
      var poffset = this.ProgramNameOffset - this.nUserAddress;

      // crude move CString into javascript string
      this.ProgramName = '';
      for (var _offset = poffset; _offset < poffset + 16; _offset++) {
        var c = header.getUint8(_offset);
        if (c == 0) break;
        this.ProgramName += String.fromCharCode(c);
      }
    }

    // move header contects into a Uint8Array ready to download
    // the uInt8Array needs to be big enough (132 bytes minimum)
  }, {
    key: "writeHeader",
    value: function writeHeader(data) {
      var header = new DataView(data.buffer);
      header.setUint32(0, this.nStackTop, this.endianess);
      header.setUint32(4, this._c_vexinit, this.endianess);
      header.setUint32(8, this.nUserAddress, this.endianess);
      header.setUint32(12, this.__TI_CINIT_Limit, this.endianess);
      header.setUint32(16, this.ProgramNameOffset, this.endianess); // offset to program names
      header.setUint8(20, this.nUserVersion);
      header.setUint8(21, this.nTYPE);
      header.setUint8(22, this.nSLOT);
      header.setUint8(23, this.nMODE);
      header.setUint32(24, this.userInitialize, this.endianess);
      header.setUint32(28, this.userTask, this.endianess);
      header.setUint32(32, this.main, this.endianess);
      header.setUint32(36, this.userIdle, this.endianess);
      header.setUint32(40, this.nDIGITAL_MASK, this.endianess);
      header.setUint32(44, this.nAPIVersion, this.endianess);
      header.setUint32(48, this.pDEviceArrayPointer, this.endianess);
      for (var offset = 0; offset < 12; offset++) {
        header.setUint8(52 + offset, this.nSensorTypes[offset]);
      }

      // dummy program name
      header.setUint32(128, 0x00434241, this.endianess);
    }

    // Create a dummy program header
  }, {
    key: "createDummy",
    value: function createDummy(slot, address) {
      this.nStackTop = 0x20008000;
      this._c_vexinit = address;
      this.nUserAddress = address;
      this.__TI_CINIT_Limit = address + 1024;
      this.ProgramNameOffset = address + 128; // offset to program names
      this.nUserVersion = 1;
      this.nTYPE = 0;
      this.nSLOT = slot;
      this.nMODE = 0x07;
      this.userInitialize = address + 256;
      this.userTask = address + 256;
      this.main = address + 256;
      this.userIdle = address + 256;
      this.nDIGITAL_MASK = 0;
      this.nAPIVersion = 1;
      this.pDEviceArrayPointer = address;
      this.nSensorTypes = [];
      for (var offset = 0; offset < 12; offset++) {
        this.nSensorTypes.push(0xFF);
      }
      this.ProgramName = 'Dummy';
    }
  }, {
    key: "validate",
    value: function validate() {
      // check some of the properties are within expected bounds for this file

      // Check slot
      if (this.nSLOT < USER_PROG_1 || this.nSLOT > USER_PROG_4) return false;

      // Check start address
      if (this.nUserAddress < USER_FLASH_START) return false;

      // Check end address
      if (this.__TI_CINIT_Limit >= USER_FLASH_END) return false;

      // Good enough !
      return true;
    }
  }, {
    key: "debugString",
    value: function debugString() {
      var str = "";
      str += 'Program:                   ' + this.ProgramName + '\n';
      str += 'Stack top:                 ' + '0x' + this.hex8(this.nStackTop) + '\n';
      str += 'C Init function address:   ' + '0x' + this.hex8(this._c_vexinit) + '\n';
      str += 'User program base address: ' + '0x' + this.hex8(this.nUserAddress) + '\n';
      str += 'User program end address   ' + '0x' + this.hex8(this.__TI_CINIT_Limit) + '\n';
      str += 'User program name offset   ' + '0x' + this.hex8(this.ProgramNameOffset) + '\n';
      str += 'User version:              ' + '0x' + this.hex2(this.nUserVersion) + '\n';
      str += 'Program type:              ' + '0x' + this.hex2(this.nTYPE) + '\n';
      str += 'Program Slot:              ' + '0x' + this.hex2(this.nSLOT) + '\n';
      str += 'Program mode:              ' + '0x' + this.hex2(this.nMODE) + '\n';
      str += 'Program Init address:      ' + '0x' + this.hex8(this.userInitialize) + '\n';
      str += 'Program Task address:      ' + '0x' + this.hex8(this.userTask) + '\n';
      str += 'Program Main address:      ' + '0x' + this.hex8(this.main) + '\n';
      str += 'Program Idle address:      ' + '0x' + this.hex8(this.userIdle) + '\n';
      str += 'Digital mask:              ' + '0x' + this.hex8(this.nDIGITAL_MASK) + '\n';
      str += 'API version:               ' + '0x' + this.hex8(this.nAPIVersion) + '\n';
      str += 'Device array ptr:          ' + '0x' + this.hex8(this.pDEviceArrayPointer) + '\n';
      str += 'Device Array:              ' + '[ ';
      for (var i = 0; i < this.nSensorTypes.length; i++) str += this.hex2(this.nSensorTypes[i]) + ' ';
      str += ']\n';
      return str;
    }

    /**
     * Utility function to create a hex string from the given number
     * @param  (number} value the number to be formatted into a string with %02X format
     * @return {string}
     */
  }, {
    key: "hex2",
    value: function hex2(value) {
      var str = ('00' + value.toString(16)).substr(-2, 2);
      return str.toUpperCase();
    }

    /**
     * Utility function to create a hex string from the given number
     * @param  (number} value the number to be formatted into a string with %08X format
     * @return {string}
     */
  }, {
    key: "hex8",
    value: function hex8(value) {
      var str = ('00000000' + value.toString(16)).substr(-8, 8);
      return str.toUpperCase();
    }
  }]);
}();
;


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceV5.ts":
/*!**************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceV5.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexSerialDeviceV5: () => (/* binding */ VexSerialDeviceV5)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vexcode/python-vm */ "./node_modules/@vexcode/python-vm/dist/index.js");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDeviceV5");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");









if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_9__.targetIsV5) {
  log.warn("VexSerialDeviceV5 loaded in non-V5 build");
}
var VexSerialDeviceV5 = /*#__PURE__*/function (_VexSerialDevice) {
  function VexSerialDeviceV5() {
    var _this;
    _classCallCheck(this, VexSerialDeviceV5);
    _this = _callSuper(this, VexSerialDeviceV5);
    //#region connection information
    _defineProperty(_this, "_deviceType", null);
    log.debug("admin port:", _this.serialConnection.uuid);
    log.debug("user port:", _this.serialConnectionUserPort.uuid);
    log.info("constructed V5");
    return _this;
  }
  _inherits(VexSerialDeviceV5, _VexSerialDevice);
  return _createClass(VexSerialDeviceV5, [{
    key: "getBasePortFilters",
    value: function getBasePortFilters() {
      if (_platformInfo__WEBPACK_IMPORTED_MODULE_8__.PlatformIsElectron) {
        return [{
          usbVendorId: 0x2888,
          usbProductId: 0x0501
        },
        // brain
        {
          usbVendorId: 0x2888,
          usbProductId: 0x0503
        } // controller
        ];
      }
      return [{
        usbVendorId: 0x2888,
        usbProductId: 0x0501
      },
      // brain
      {
        usbVendorId: 0x2888,
        usbProductId: 0x0503
      } // controller
      ];
    }
  }, {
    key: "deviceType",
    get: function get() {
      return this._deviceType;
    },
    set: function set(newType) {
      this._deviceType = newType;
    }
  }, {
    key: "controllerType",
    get: function get() {
      return "V5Controller";
    }
  }, {
    key: "processPortInformation",
    value: function processPortInformation(portInfo) {
      var isBrain = portInfo && portInfo.usbProductId === 0x0501;
      var isController = portInfo && portInfo.usbProductId === 0x0503;
      if (isBrain) {
        this.deviceType = "V5";
      } else if (isController) {
        this.deviceType = "V5Controller";
      } else {
        log.warn("unknown product ID", portInfo);
        this.deviceType = null;
      }
    }
    //#endregion connection information

    //#region connection check helpers
    //#endregion connection check helpers

    //#region brain information
    //#endregion brain information

    //#region controller information
  }, {
    key: "fetchControllerInfo",
    value: function () {
      var _fetchControllerInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return");
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee);
      }));
      function fetchControllerInfo() {
        return _fetchControllerInfo.apply(this, arguments);
      }
      return fetchControllerInfo;
    }() //#endregion controller information
    //#region firmware
  }, {
    key: "getCurrentFirmwareVersion",
    value: function () {
      var _getCurrentFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // TODO: we should use the firmware channel to know where to pull this from...
              catalogURL = "https://content.vexrobotics.com/vexos/public/V5/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context2.prev = 2;
              _context2.next = 5;
              return fetch(catalogURL);
            case 5:
              catalogResponse = _context2.sent;
              _context2.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context2.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_V5_/, "");
              return _context2.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_2__.VexVersion.fromCatalogString(versionStr));
            case 14:
              _context2.prev = 14;
              _context2.t0 = _context2["catch"](2);
              log.warn(_context2.t0);
              return _context2.abrupt("return", null);
            case 18:
            case "end":
              return _context2.stop();
          }
        }, _callee2, null, [[2, 14]]);
      }));
      function getCurrentFirmwareVersion() {
        return _getCurrentFirmwareVersion.apply(this, arguments);
      }
      return getCurrentFirmwareVersion;
    }()
  }, {
    key: "updateFirmware",
    value: function () {
      var _updateFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(progressCB, connectPrompt) {
        var brainVersionStart, lastProgress, totalSteps, goldenOffset, sendProgress, meta, fw, goldenFW, goldenRes, bootFW, bootRes, assetFW, assetRes;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              // TODO: block this if connected over controller

              this.checkSupported();
              this.checkRequiredConnection();
              this.checkRequiredBrainConnection();
              brainVersionStart = this.brainVersionSystem ? this.brainVersionSystem.toInternalString() : "unknown";
              lastProgress = {
                state: _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done,
                prog: -1,
                msg: ""
              };
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 1;
              goldenOffset = 2;
              sendProgress = function sendProgress(state, prog, msg) {
                var roundedProgress = Math.round(prog * 100);
                if (lastProgress.state === state && lastProgress.msg === msg && lastProgress.prog === roundedProgress) {
                  // no point sending this update as it is the same as the previous update
                  return;
                }
                lastProgress = {
                  state: state,
                  prog: roundedProgress,
                  msg: msg
                };
                var offset = state > _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenReboot ? state - goldenOffset : state - 1;
                var totalProgress = (offset + prog) / totalSteps;

                // TODO: calculate total progress
                log.debug("brain firmware progress:", _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates[state], prog, totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              }; // based on function updateFirmware_v5 from device manager
              _context3.prev = 8;
              _context3.prev = 9;
              progressCB(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, 0, "Checking Python Version");
              meta = this.getVmMeta();
              _context3.next = 14;
              return this.checkAndInstallPythonVm(meta.crc, meta.version, function (data) {
                if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.CheckingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Checking Python Version");
                } else if (data.state === _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.DownloadState.DownloadingVM) {
                  sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingPythonVM, data.progress, "Loading Python");
                }
              });
            case 14:
              _context3.next = 20;
              break;
            case 16:
              _context3.prev = 16;
              _context3.t0 = _context3["catch"](9);
              log.warn("error loading Python VM");
              log.warn(_context3.t0);
            case 20:
              _context3.next = 22;
              return this.loadFirmware(function (prog) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 22:
              fw = _context3.sent;
              if (!(this.primaryBootSource === true && this.checkGoldenImage() === false)) {
                _context3.next = 33;
                break;
              }
              log.info("updating Golden...");
              goldenFW = fw.getFile("boot.bin");
              _context3.next = 28;
              return this.updateBrain(goldenFW.data, 0xB2, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.GoldenUpdate, percent, "Updating Golden");
              });
            case 28:
              goldenRes = _context3.sent;
              if (goldenRes) {
                _context3.next = 31;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.ErrorUpdatingBrainGolden();
            case 31:
              _context3.next = 35;
              break;
            case 33:
              goldenOffset = 3;
              totalSteps = _VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate - 2;
            case 35:
              // 3. update boot.bin
              log.info("updating firmware");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, 0, "Updating Firmware");
              bootFW = fw.getFile("boot.bin");
              _context3.next = 40;
              return this.updateBrain(bootFW.data, 1, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.FirmwareUpdate, percent, "Updating Firmware");
              });
            case 40:
              bootRes = _context3.sent;
              if (bootRes) {
                _context3.next = 43;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.ErrorUpdatingBrainBoot();
            case 43:
              // 4. update assets
              log.info("updating assets");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, 0, "Updating Assets");
              assetFW = fw.getFile("assets.bin");
              _context3.next = 48;
              return this.updateBrain(assetFW.data, 0, function (percent, total) {
                sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.AssetUpdate, percent, "Updating Assets");
              });
            case 48:
              assetRes = _context3.sent;
              if (assetRes) {
                _context3.next = 51;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_4__.ErrorUpdatingBrainAssets();
            case 51:
              this.onDisconnect();

              // // 5. reboot and reconnect
              // log.info("rebooting... waiting for connection loss");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0, "Waiting For Poweroff");
              // while (this.isConnected) {
              //   await this.delay(500);
              // }

              // log.info("rebooting... waiting for reboot");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.3, "Waiting For Reboot");
              // await this.delay(3000);

              // log.info("rebooting... waiting for new connection");
              // sendProgress(VEXBrainUpdateStates.Reboot, 0.5, "Waiting For Connection");
              // let reconnected = false;
              // while (!reconnected) {
              //   try {
              //     await this.reconnect();
              //     reconnected = true;
              //   } catch(err) {
              //     if (err instanceof DOMException) {
              //       if (err.name === "SecurityError") {
              //         log.warn("failed to open connect prompt due to security permissions");
              //         await connectPrompt();  
              //       } else if (err.name === "NotFoundError") {
              //         log.warn("user hit cancel")
              //         await connectPrompt();
              //       }
              //     } else {
              //       log.error("error name:", err.name, err);
              //       throw err;
              //     }
              //   }
              // }

              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.info("update complete");
              sendProgress(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VEXBrainUpdateStates.done, 1, "Update Complete");

              // setTimeout(async () => {
              //   await this.fetchBrainInfo();
              //   await this.checkUpdateNeededBrain();
              //   this.fireEvent("deviceInfoUpdated", this.getRobotInfo());
              // }, 200);

              // this.isUpdatingFirmware = false;
              _context3.next = 64;
              break;
            case 57:
              _context3.prev = 57;
              _context3.t1 = _context3["catch"](8);
              this.isUpdatingFirmware = false;
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_6__.UpdateNeededOptions.Unsure;
              log.debug("brain update error:", _context3.t1);
              log.debug("brain version before update start:", brainVersionStart);
              throw _context3.t1;
            case 64:
              return _context3.abrupt("return", true);
            case 65:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[8, 57], [9, 16]]);
      }));
      function updateFirmware(_x, _x2) {
        return _updateFirmware.apply(this, arguments);
      }
      return updateFirmware;
    }() //#endregion firmware
    //#region firmware file data
  }, {
    key: "createVexFWInstance",
    value: function createVexFWInstance() {
      return new _VexFW__WEBPACK_IMPORTED_MODULE_3__.VexFWV5();
    }
    //#endregion firmware file data

    //#region user data
    //#endregion user data

    //#region project controls
    //#endregion project controls

    //#region downloads
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(data, info, progress) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              return _context4.abrupt("return", _superPropGet(VexSerialDeviceV5, "downloadProgram", this, 3)([data, info, progress]));
            case 1:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function downloadProgram(_x3, _x4, _x5) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() //#endregion downloads
    //#region brain files
    //#endregion brain files
    //#region file metadata helpers
    //#endregion file metadata helpers
    //#region brain info meta data helpers
    //#endregion brain info meta data helpers
    //#region Python vm helpers
  }, {
    key: "getVMLinkInfo",
    value: function getVMLinkInfo() {
      return {
        extType: 0x61,
        loadAddress: 0x07000000,
        linkFile: "python_vm.bin",
        linkFileVID: VexSerialDeviceV5.VID.VEXVM
      };
    }
  }, {
    key: "getVmMeta",
    value: function getVmMeta() {
      return _vexcode_python_vm__WEBPACK_IMPORTED_MODULE_7__.metaV5;
      ;
    }
  }, {
    key: "getPythonVMResourcePath",
    value: function getPythonVMResourcePath() {
      return "resources/v5/vm/python_vm.bin";
    }
  }, {
    key: "getPythonVmDownloadInfo",
    value: function getPythonVmDownloadInfo() {
      var meta = this.getVmMeta();
      return {
        target: 0,
        vid: VexSerialDeviceV5.VID.VEXVM,
        version: meta.version
      };
    }
  }, {
    key: "postVMDownloadCleanup",
    value: function postVMDownloadCleanup() {}
    //#endregion

    //#region controller firmware
  }, {
    key: "radioChipId",
    get: function get() {
      return 0;
    }
  }, {
    key: "dfuTarget",
    get: function get() {
      return _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_5__.DFUTargetDevice.None;
    }
    //#endregion controller firmware

    //#region controller comms
    //#endregion controller comms

    //#region low level comms
    //#endregion low level comms

    //#region event handlers
    //#endregion event handlers
  }]);
}(_VexSerialDevice__WEBPACK_IMPORTED_MODULE_1__.VexSerialDevice);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts":
/*!**************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/index.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEXAIVisionUpdateStates: () => (/* reexport safe */ _VexSerialDevice__WEBPACK_IMPORTED_MODULE_0__.VEXAIVisionUpdateStates),
/* harmony export */   VEXBrainUpdateStates: () => (/* reexport safe */ _VexSerialDevice__WEBPACK_IMPORTED_MODULE_0__.VEXBrainUpdateStates),
/* harmony export */   VEXControllerUpdateStates: () => (/* reexport safe */ _VexSerialDevice__WEBPACK_IMPORTED_MODULE_0__.VEXControllerUpdateStates),
/* harmony export */   VEXcodeIcons: () => (/* reexport safe */ _VexINI__WEBPACK_IMPORTED_MODULE_10__.VEXcodeIcons),
/* harmony export */   VEXosFirmwareChannelType: () => (/* reexport safe */ _VexFW__WEBPACK_IMPORTED_MODULE_8__.VEXosFirmwareChannelType),
/* harmony export */   VexAIObjectTypes: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_12__.VexAIObjectTypes),
/* harmony export */   VexCTEConnectionState: () => (/* reexport safe */ _VexSerialDeviceCTE__WEBPACK_IMPORTED_MODULE_6__.VexCTEConnectionState),
/* harmony export */   VexINI: () => (/* reexport safe */ _VexINI__WEBPACK_IMPORTED_MODULE_10__.VexINI),
/* harmony export */   VexSerialDeviceAIM: () => (/* reexport safe */ _VexSerialDeviceAIM__WEBPACK_IMPORTED_MODULE_4__.VexSerialDeviceAIM),
/* harmony export */   VexSerialDeviceAIR: () => (/* reexport safe */ _VexSerialDeviceAIR__WEBPACK_IMPORTED_MODULE_5__.VexSerialDeviceAIR),
/* harmony export */   VexSerialDeviceAIVision: () => (/* reexport safe */ _VexSerialDeviceAIVision__WEBPACK_IMPORTED_MODULE_7__.VexSerialDeviceAIVision),
/* harmony export */   VexSerialDeviceCTE: () => (/* reexport safe */ _VexSerialDeviceCTE__WEBPACK_IMPORTED_MODULE_6__.VexSerialDeviceCTE),
/* harmony export */   VexSerialDeviceConnectionStates: () => (/* reexport safe */ _VexSerialDevice__WEBPACK_IMPORTED_MODULE_0__.VexSerialDeviceConnectionStates),
/* harmony export */   VexSerialDeviceEXP: () => (/* reexport safe */ _VexSerialDeviceEXP__WEBPACK_IMPORTED_MODULE_2__.VexSerialDeviceEXP),
/* harmony export */   VexSerialDeviceIQ: () => (/* reexport safe */ _VexSerialDeviceIQ__WEBPACK_IMPORTED_MODULE_1__.VexSerialDeviceIQ),
/* harmony export */   VexSerialDeviceV5: () => (/* reexport safe */ _VexSerialDeviceV5__WEBPACK_IMPORTED_MODULE_3__.VexSerialDeviceV5),
/* harmony export */   VexSerialErrors: () => (/* reexport module object */ _errors__WEBPACK_IMPORTED_MODULE_11__)
/* harmony export */ });
/* harmony import */ var _VexSerialDevice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VexSerialDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts");
/* harmony import */ var _VexSerialDeviceIQ__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexSerialDeviceIQ */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceIQ.ts");
/* harmony import */ var _VexSerialDeviceEXP__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VexSerialDeviceEXP */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceEXP.ts");
/* harmony import */ var _VexSerialDeviceV5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexSerialDeviceV5 */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceV5.ts");
/* harmony import */ var _VexSerialDeviceAIM__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./VexSerialDeviceAIM */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIM.ts");
/* harmony import */ var _VexSerialDeviceAIR__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VexSerialDeviceAIR */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIR.ts");
/* harmony import */ var _VexSerialDeviceCTE__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./VexSerialDeviceCTE */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceCTE.ts");
/* harmony import */ var _VexSerialDeviceAIVision__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./VexSerialDeviceAIVision */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDeviceAIVision.ts");
/* harmony import */ var _VexFW__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VexFW */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexFW.ts");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _VexINI__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./VexINI */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexINI.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");









// import {
//   VexFirmwareVersion
// } from "./VexFirmwareVersion";



var historyLogger = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_9__.getHistoryLoggerByName("VEXSerial");
historyLogger.setMaxLines(10000);
historyLogger.setLevel("DEBUG");





/***/ })

}]);
//# sourceMappingURL=a445c2ff3f62ab15cf4b.src_HardwareInterface_DownloadPlatform_VexSerialDevices_index_ts.bundle.js.map