"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_VexSerialDevices_VexSerialDevice_ts"],{

/***/ "../applications/electron/src/main/types/DeviceType.ts":
/*!*************************************************************!*\
  !*** ../applications/electron/src/main/types/DeviceType.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SerialPortType: () => (/* binding */ SerialPortType)
/* harmony export */ });
let SerialPortType = /*#__PURE__*/function (SerialPortType) {
  SerialPortType[SerialPortType["Admin"] = 0] = "Admin";
  SerialPortType[SerialPortType["User"] = 1] = "User";
  return SerialPortType;
}({});

/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts":
/*!**********************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DFUTargetDevice: () => (/* binding */ DFUTargetDevice),
/* harmony export */   VexDFU: () => (/* binding */ VexDFU)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VexDFUDevice */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFUDevice.ts");
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/errors.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexDFU");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

// log.setHistoryLogger("VEXSerial");



var DFUTargetDevice = /*#__PURE__*/function (DFUTargetDevice) {
  DFUTargetDevice[DFUTargetDevice["IQ2Controller"] = 0] = "IQ2Controller";
  DFUTargetDevice[DFUTargetDevice["EXPController"] = 1] = "EXPController";
  DFUTargetDevice[DFUTargetDevice["None"] = 2] = "None";
  return DFUTargetDevice;
}(DFUTargetDevice || {});
var VexDFU = /*#__PURE__*/function () {
  function VexDFU(target) {
    _classCallCheck(this, VexDFU);
    _defineProperty(this, "isSupported", navigator && navigator.usb ? true : false);
    _defineProperty(this, "_device", null);
    _defineProperty(this, "transferSize", 1024);
    _defineProperty(this, "manifestationTolerant", true);
    _defineProperty(this, "_filters", []);
    if (!this.isSupported) {
      log.error("Web USB is not supported!");
    } else {
      log.info("Web USB is supported");
    }

    // {vendorId: 10376, productId: 543}, // IQ controller
    // {vendorId: 10376, productId: 1567}, // EXP controller

    if (target === DFUTargetDevice.EXPController) {
      this._filters = [{
        vendorId: 10376,
        productId: 1567
      } // EXP controller
      ];
    } else if (target === DFUTargetDevice.IQ2Controller) {
      this._filters = [{
        vendorId: 10376,
        productId: 543
      } // IQ controller
      ];
    }
  }
  return _createClass(VexDFU, [{
    key: "device",
    get: function get() {
      return this._device;
    }

    /**
     * Prompts the user to select a DFU device to connect to.
     *
     * If there is an active connection already, this will close that connection
     * @throws WebUSBUnsupportedError if the connection is not supported in the browser
     */
  }, {
    key: "openConnection",
    value: (function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var selectedDevice, interfaces;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (this.isSupported) {
                _context.next = 2;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_2__.WebUSBUnsupportedError();
            case 2:
              // make sure we close any open connections
              if (this._device) {
                this.closeConnection();
              }

              // get devices
              _context.prev = 3;
              _context.next = 6;
              return navigator.usb.requestDevice({
                filters: this._filters
              });
            case 6:
              selectedDevice = _context.sent;
              log.debug("selectedDevice:", selectedDevice);
              interfaces = _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__.VexDFUDevice.findDeviceDfuInterfaces(selectedDevice);
              log.debug("interfaces:", interfaces);
              if (!(interfaces.length === 0)) {
                _context.next = 14;
                break;
              }
              log.info("selected device has no DFU interfaces");
              _context.next = 25;
              break;
            case 14:
              if (!(interfaces.length === 1)) {
                _context.next = 24;
                break;
              }
              log.info("selected device has one DFU interface");
              _context.next = 18;
              return this.fixInterfaceNames(selectedDevice, interfaces);
            case 18:
              _context.next = 20;
              return this.connectToDevice(new _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__.VexDFUDevice(selectedDevice, interfaces[0]));
            case 20:
              this._device = _context.sent;
              log.debug("device:", this._device);
              _context.next = 25;
              break;
            case 24:
              log.warn("selected device has multiple DFU interfaces???");
              // TODO: handle multpile interfaces?
            case 25:
              _context.next = 30;
              break;
            case 27:
              _context.prev = 27;
              _context.t0 = _context["catch"](3);
              log.error(_context.t0);
            case 30:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[3, 27]]);
      }));
      function openConnection() {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
    /**
     * close an open connection.
     */
    )
  }, {
    key: "closeConnection",
    value: (function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              if (this._device) {
                this._device.close();
                this._device = null;
              }
            case 1:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function closeConnection() {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }()
    /**
     * downloads the provided firmware bin to the connected device
     * @param bin the bin to load onto the connected device
     * @param progress a callback with progress updates
     * @throws WebUSBUnsupportedError if the connection is not supported in the browser
     * @throws DFUNoDeviceError if there is no device connected
     */
    )
  }, {
    key: "updateDevice",
    value: (function () {
      var _updateDevice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(bin, progress) {
        var status;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.isSupported) {
                _context3.next = 2;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_2__.WebUSBUnsupportedError();
            case 2:
              if (this._device) {
                _context3.next = 4;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_2__.DFUNoDeviceError();
            case 4:
              _context3.prev = 4;
              _context3.next = 7;
              return this._device.getState();
            case 7:
              status = _context3.sent;
              if (!(status === _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__.VexDFUDevice.dfuERROR)) {
                _context3.next = 11;
                break;
              }
              _context3.next = 11;
              return this._device.clearStatus();
            case 11:
              _context3.next = 16;
              break;
            case 13:
              _context3.prev = 13;
              _context3.t0 = _context3["catch"](4);
              log.warn("Failed to clear status");
            case 16:
              _context3.next = 18;
              return this._device.do_download(this.transferSize, bin, this.manifestationTolerant, progress);
            case 18:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[4, 13]]);
      }));
      function updateDevice(_x, _x2) {
        return _updateDevice.apply(this, arguments);
      }
      return updateDevice;
    }()
    /**
     * try to connect to the selected device
     */
    )
  }, {
    key: "connectToDevice",
    value: (function () {
      var _connectToDevice = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(device) {
        var desc;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return device.open();
            case 3:
              _context4.next = 9;
              break;
            case 5:
              _context4.prev = 5;
              _context4.t0 = _context4["catch"](0);
              log.error(_context4.t0);
              throw _context4.t0;
            case 9:
              // Attempt to parse the DFU functional descriptor
              desc = {};
              _context4.prev = 10;
              _context4.next = 13;
              return this.getDFUDescriptorProperties(device);
            case 13:
              desc = _context4.sent;
              _context4.next = 20;
              break;
            case 16:
              _context4.prev = 16;
              _context4.t1 = _context4["catch"](10);
              log.error(_context4.t1);
              throw _context4.t1;
            case 20:
              log.debug("desc:", desc);
              if (desc && Object.keys(desc).length > 0) {
                this.transferSize = desc.TransferSize;
                if (desc.CanDnload) {
                  this.manifestationTolerant = desc.ManifestationTolerant;
                }
                log.debug("this.transferSize:", this.transferSize);
                log.debug("this.manifestationTolerant:", this.manifestationTolerant);
              }
              return _context4.abrupt("return", device);
            case 23:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[0, 5], [10, 16]]);
      }));
      function connectToDevice(_x3) {
        return _connectToDevice.apply(this, arguments);
      }
      return connectToDevice;
    }())
  }, {
    key: "fixInterfaceNames",
    value: function () {
      var _fixInterfaceNames = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(device_, interfaces) {
        var tempDevice, mapping, _iterator, _step, intf, configIndex, intfNumber, alt;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!interfaces.some(function (intf) {
                return intf.name == null;
              })) {
                _context5.next = 13;
                break;
              }
              // Manually retrieve the interface name string descriptors
              tempDevice = new _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__.VexDFUDevice(device_, interfaces[0]);
              _context5.next = 4;
              return tempDevice.device_.open();
            case 4:
              _context5.next = 6;
              return tempDevice.device_.selectConfiguration(1);
            case 6:
              _context5.next = 8;
              return tempDevice.readInterfaceNames();
            case 8:
              mapping = _context5.sent;
              _context5.next = 11;
              return tempDevice.close();
            case 11:
              _iterator = _createForOfIteratorHelper(interfaces);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  intf = _step.value;
                  if (intf.name === null) {
                    configIndex = intf.configuration.configurationValue;
                    intfNumber = intf["interface"].interfaceNumber;
                    alt = intf.alternate.alternateSetting;
                    intf.name = mapping[configIndex][intfNumber][alt];
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            case 13:
            case "end":
              return _context5.stop();
          }
        }, _callee5);
      }));
      function fixInterfaceNames(_x4, _x5) {
        return _fixInterfaceNames.apply(this, arguments);
      }
      return fixInterfaceNames;
    }()
  }, {
    key: "getDFUDescriptorProperties",
    value: function getDFUDescriptorProperties(device) {
      // Attempt to read the DFU functional descriptor
      // TODO: read the selected configuration's descriptor
      return device.readConfigurationDescriptor(0).then(function (data) {
        var configDesc = _VexDFUDevice__WEBPACK_IMPORTED_MODULE_1__.VexDFUDevice.parseConfigurationDescriptor(data);
        var funcDesc = null;
        var configValue = device.settings.configuration.configurationValue;
        if (configDesc.bConfigurationValue == configValue) {
          var _iterator2 = _createForOfIteratorHelper(configDesc.descriptors),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var desc = _step2.value;
              if (desc.bDescriptorType == 0x21 && desc.hasOwnProperty("bcdDFUVersion")) {
                funcDesc = desc;
                break;
              }
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
        if (funcDesc) {
          return {
            WillDetach: (funcDesc.bmAttributes & 0x08) != 0,
            ManifestationTolerant: (funcDesc.bmAttributes & 0x04) != 0,
            CanUpload: (funcDesc.bmAttributes & 0x02) != 0,
            CanDnload: (funcDesc.bmAttributes & 0x01) != 0,
            TransferSize: funcDesc.wTransferSize,
            DetachTimeOut: funcDesc.wDetachTimeOut,
            DFUVersion: funcDesc.bcdDFUVersion
          };
        } else {
          return {};
        }
      }, function (error) {});
    }
  }]);
}();


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFUDevice.ts":
/*!****************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFUDevice.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VexDFUDevice: () => (/* binding */ VexDFUDevice)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/errors.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexDFUDevice");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VEXSerial");
var VexDFUDevice = /*#__PURE__*/function () {
  function VexDFUDevice(device, settings) {
    _classCallCheck(this, VexDFUDevice);
    _defineProperty(this, "dnload", this.download);
    _defineProperty(this, "clrStatus", this.clearStatus);
    if (device.manufacturerName !== "VEX Robotics Inc.") {
      log.error("selected device is not a VEX device");
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__.DFUNonVexDeviceError();
    }
    this.device_ = device;
    this.settings = settings;
    this.interfaceNumber = settings["interface"].interfaceNumber;
  }
  return _createClass(VexDFUDevice, [{
    key: "logProgress",
    value: function logProgress(done, total) {
      // if (typeof total === 'undefined') {
      //   log.debug(done)
      // } else {
      //   log.debug(done + '/' + total);
      // }
    }
  }, {
    key: "open",
    value: function () {
      var _open = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var confValue, intfNumber, altSetting, intf;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.device_.open();
            case 2:
              confValue = this.settings.configuration.configurationValue;
              if (!(this.device_.configuration === null || this.device_.configuration.configurationValue != confValue)) {
                _context.next = 6;
                break;
              }
              _context.next = 6;
              return this.device_.selectConfiguration(confValue);
            case 6:
              intfNumber = this.settings["interface"].interfaceNumber;
              if (this.device_.configuration.interfaces[intfNumber].claimed) {
                _context.next = 10;
                break;
              }
              _context.next = 10;
              return this.device_.claimInterface(intfNumber);
            case 10:
              altSetting = this.settings.alternate.alternateSetting;
              intf = this.device_.configuration.interfaces[intfNumber];
              if (!(intf.alternate === null || intf.alternate.alternateSetting != altSetting || intf.alternates.length > 1)) {
                _context.next = 25;
                break;
              }
              _context.prev = 13;
              _context.next = 16;
              return this.device_.selectAlternateInterface(intfNumber, altSetting);
            case 16:
              _context.next = 25;
              break;
            case 18:
              _context.prev = 18;
              _context.t0 = _context["catch"](13);
              if (!(intf.alternate.alternateSetting == altSetting && _context.t0.endsWith("Unable to set device interface."))) {
                _context.next = 24;
                break;
              }
              log.warn("Redundant SET_INTERFACE request to select altSetting ".concat(altSetting, " failed"));
              _context.next = 25;
              break;
            case 24:
              throw _context.t0;
            case 25:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[13, 18]]);
      }));
      function open() {
        return _open.apply(this, arguments);
      }
      return open;
    }()
  }, {
    key: "close",
    value: function () {
      var _close = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return this.device_.close();
            case 3:
              _context2.next = 8;
              break;
            case 5:
              _context2.prev = 5;
              _context2.t0 = _context2["catch"](0);
              log.warn(_context2.t0);
            case 8:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[0, 5]]);
      }));
      function close() {
        return _close.apply(this, arguments);
      }
      return close;
    }()
  }, {
    key: "readDeviceDescriptor",
    value: function readDeviceDescriptor() {
      var GET_DESCRIPTOR = 0x06;
      var DT_DEVICE = 0x01;
      var wValue = DT_DEVICE << 8;
      return this.device_.controlTransferIn({
        "requestType": "standard",
        "recipient": "device",
        "request": GET_DESCRIPTOR,
        "value": wValue,
        "index": 0
      }, 18).then(function (result) {
        if (result.status == "ok") {
          return Promise.resolve(result.data);
        } else {
          return Promise.reject(result.status);
        }
      });
    }
  }, {
    key: "readStringDescriptor",
    value: function () {
      var _readStringDescriptor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(index, langID) {
        var GET_DESCRIPTOR, DT_STRING, wValue, request_setup, result, bLength, len, u16_words, i;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (typeof langID === 'undefined') {
                langID = 0;
              }
              GET_DESCRIPTOR = 0x06;
              DT_STRING = 0x03;
              wValue = DT_STRING << 8 | index;
              request_setup = {
                "requestType": "standard",
                "recipient": "device",
                "request": GET_DESCRIPTOR,
                "value": wValue,
                "index": langID
              }; // Read enough for bLength
              _context3.next = 7;
              return this.device_.controlTransferIn(request_setup, 1);
            case 7:
              result = _context3.sent;
              if (!(result.status == "ok")) {
                _context3.next = 22;
                break;
              }
              // Retrieve the full descriptor
              bLength = result.data.getUint8(0);
              _context3.next = 12;
              return this.device_.controlTransferIn(request_setup, bLength);
            case 12:
              result = _context3.sent;
              if (!(result.status == "ok")) {
                _context3.next = 22;
                break;
              }
              len = (bLength - 2) / 2;
              u16_words = [];
              for (i = 0; i < len; i++) {
                u16_words.push(result.data.getUint16(2 + i * 2, true));
              }
              if (!(langID == 0)) {
                _context3.next = 21;
                break;
              }
              return _context3.abrupt("return", u16_words);
            case 21:
              return _context3.abrupt("return", String.fromCharCode.apply(String, u16_words));
            case 22:
              throw "Failed to read string descriptor ".concat(index, ": ").concat(result.status);
            case 23:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function readStringDescriptor(_x, _x2) {
        return _readStringDescriptor.apply(this, arguments);
      }
      return readStringDescriptor;
    }()
  }, {
    key: "readInterfaceNames",
    value: function () {
      var _readInterfaceNames = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var DT_INTERFACE, configs, allStringIndices, configIndex, rawConfig, configDesc, configValue, _iterator, _step, desc, idesc, strings, _iterator2, _step2, index, _configValue, intfNumber, alt, iIndex;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              DT_INTERFACE = 4;
              configs = {};
              allStringIndices = new Set();
              configIndex = 0;
            case 4:
              if (!(configIndex < this.device_.configurations.length)) {
                _context4.next = 16;
                break;
              }
              _context4.next = 7;
              return this.readConfigurationDescriptor(configIndex);
            case 7:
              rawConfig = _context4.sent;
              configDesc = VexDFUDevice.parseConfigurationDescriptor(rawConfig);
              configValue = configDesc.bConfigurationValue;
              configs[configValue] = {};

              // Retrieve string indices for interface names
              _iterator = _createForOfIteratorHelper(configDesc.descriptors);
              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  desc = _step.value;
                  if (desc.bDescriptorType == DT_INTERFACE) {
                    idesc = desc;
                    if (!(idesc.bInterfaceNumber in configs[configValue])) {
                      configs[configValue][idesc.bInterfaceNumber] = {};
                    }
                    configs[configValue][idesc.bInterfaceNumber][idesc.bAlternateSetting] = idesc.iInterface;
                    if (idesc.iInterface > 0) {
                      allStringIndices.add(idesc.iInterface);
                    }
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            case 13:
              configIndex++;
              _context4.next = 4;
              break;
            case 16:
              strings = {}; // Retrieve interface name strings
              _iterator2 = _createForOfIteratorHelper(allStringIndices);
              _context4.prev = 18;
              _iterator2.s();
            case 20:
              if ((_step2 = _iterator2.n()).done) {
                _context4.next = 34;
                break;
              }
              index = _step2.value;
              _context4.prev = 22;
              _context4.next = 25;
              return this.readStringDescriptor(index, 0x0409);
            case 25:
              strings[index] = _context4.sent;
              _context4.next = 32;
              break;
            case 28:
              _context4.prev = 28;
              _context4.t0 = _context4["catch"](22);
              console.log(_context4.t0);
              strings[index] = null;
            case 32:
              _context4.next = 20;
              break;
            case 34:
              _context4.next = 39;
              break;
            case 36:
              _context4.prev = 36;
              _context4.t1 = _context4["catch"](18);
              _iterator2.e(_context4.t1);
            case 39:
              _context4.prev = 39;
              _iterator2.f();
              return _context4.finish(39);
            case 42:
              for (_configValue in configs) {
                for (intfNumber in configs[_configValue]) {
                  for (alt in configs[_configValue][intfNumber]) {
                    iIndex = configs[_configValue][intfNumber][alt];
                    configs[_configValue][intfNumber][alt] = strings[iIndex];
                  }
                }
              }
              return _context4.abrupt("return", configs);
            case 44:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[18, 36, 39, 42], [22, 28]]);
      }));
      function readInterfaceNames() {
        return _readInterfaceNames.apply(this, arguments);
      }
      return readInterfaceNames;
    }()
  }, {
    key: "readConfigurationDescriptor",
    value: function readConfigurationDescriptor(index) {
      var _this = this;
      var GET_DESCRIPTOR = 0x06;
      var DT_CONFIGURATION = 0x02;
      var wValue = DT_CONFIGURATION << 8 | index;
      return this.device_.controlTransferIn({
        "requestType": "standard",
        "recipient": "device",
        "request": GET_DESCRIPTOR,
        "value": wValue,
        "index": 0
      }, 4).then(function (result) {
        if (result.status == "ok") {
          // Read out length of the configuration descriptor
          var wLength = result.data.getUint16(2, true);
          return _this.device_.controlTransferIn({
            "requestType": "standard",
            "recipient": "device",
            "request": GET_DESCRIPTOR,
            "value": wValue,
            "index": 0
          }, wLength);
        } else {
          return Promise.reject(result.status);
        }
      }).then(function (result) {
        if (result.status == "ok") {
          return Promise.resolve(result.data);
        } else {
          return Promise.reject(result.status);
        }
      });
    }
  }, {
    key: "requestOut",
    value: function requestOut(bRequest, data) {
      var wValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.device_.controlTransferOut({
        "requestType": "class",
        "recipient": "interface",
        "request": bRequest,
        "value": wValue,
        "index": this.interfaceNumber
      }, data).then(function (result) {
        if (result.status == "ok") {
          return Promise.resolve(result.bytesWritten);
        } else {
          return Promise.reject(result.status);
        }
      }, function (error) {
        return Promise.reject("ControlTransferOut failed: " + error);
      });
    }
  }, {
    key: "requestIn",
    value: function requestIn(bRequest, wLength) {
      var wValue = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      return this.device_.controlTransferIn({
        "requestType": "class",
        "recipient": "interface",
        "request": bRequest,
        "value": wValue,
        "index": this.interfaceNumber
      }, wLength).then(function (result) {
        if (result.status == "ok") {
          return Promise.resolve(result.data);
        } else {
          return Promise.reject(result.status);
        }
      }, function (error) {
        return Promise.reject("ControlTransferIn failed: " + error);
      });
    }
  }, {
    key: "detach",
    value: function detach() {
      return this.requestOut(VexDFUDevice.DETACH, undefined, 1000);
    }
  }, {
    key: "waitDisconnected",
    value: function () {
      var _waitDisconnected = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(timeout) {
        var device, usbDevice;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              device = this;
              usbDevice = this.device_;
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                var timeoutID;
                if (timeout > 0) {
                  var onTimeout = function onTimeout() {
                    navigator.usb.removeEventListener("disconnect", onDisconnect);
                    if (device.disconnected !== true) {
                      reject("Disconnect timeout expired");
                    }
                  };
                  timeoutID = setTimeout(reject, timeout);
                }
                function onDisconnect(event) {
                  if (event.device === usbDevice) {
                    if (timeout > 0) {
                      clearTimeout(timeoutID);
                    }
                    device.disconnected = true;
                    navigator.usb.removeEventListener("disconnect", onDisconnect);
                    event.stopPropagation();
                    resolve(device);
                  }
                }
                navigator.usb.addEventListener("disconnect", onDisconnect);
              }));
            case 3:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function waitDisconnected(_x3) {
        return _waitDisconnected.apply(this, arguments);
      }
      return waitDisconnected;
    }()
  }, {
    key: "download",
    value: function download(data, blockNum) {
      return this.requestOut(VexDFUDevice.DNLOAD, data, blockNum);
    }
  }, {
    key: "upload",
    value: function upload(length, blockNum) {
      return this.requestIn(VexDFUDevice.UPLOAD, length, blockNum);
    }
  }, {
    key: "clearStatus",
    value: function clearStatus() {
      return this.requestOut(VexDFUDevice.CLRSTATUS);
    }
  }, {
    key: "getStatus",
    value: function getStatus() {
      return this.requestIn(VexDFUDevice.GETSTATUS, 6).then(function (data) {
        return Promise.resolve({
          "status": data.getUint8(0),
          "pollTimeout": data.getUint32(1, true) & 0xFFFFFF,
          "state": data.getUint8(4)
        });
      }, function (error) {
        return Promise.reject("DFU GETSTATUS failed: " + error);
      });
    }
  }, {
    key: "getState",
    value: function getState() {
      return this.requestIn(VexDFUDevice.GETSTATE, 1).then(function (data) {
        return Promise.resolve(data.getUint8(0));
      }, function (error) {
        return Promise.reject("DFU GETSTATE failed: " + error);
      });
    }
  }, {
    key: "abort",
    value: function abort() {
      return this.requestOut(VexDFUDevice.ABORT);
    }
  }, {
    key: "abortToIdle",
    value: function () {
      var _abortToIdle = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        var state;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return this.abort();
            case 2:
              _context6.next = 4;
              return this.getState();
            case 4:
              state = _context6.sent;
              if (!(state == VexDFUDevice.dfuERROR)) {
                _context6.next = 11;
                break;
              }
              _context6.next = 8;
              return this.clearStatus();
            case 8:
              _context6.next = 10;
              return this.getState();
            case 10:
              state = _context6.sent;
            case 11:
              if (!(state != VexDFUDevice.dfuIDLE)) {
                _context6.next = 13;
                break;
              }
              throw "Failed to return to idle state after abort: state " + state;
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function abortToIdle() {
        return _abortToIdle.apply(this, arguments);
      }
      return abortToIdle;
    }()
  }, {
    key: "do_upload",
    value: function () {
      var _do_upload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(xfer_size) {
        var max_size,
          first_block,
          transaction,
          blocks,
          bytes_read,
          result,
          bytes_to_read,
          _args7 = arguments;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              max_size = _args7.length > 1 && _args7[1] !== undefined ? _args7[1] : Infinity;
              first_block = _args7.length > 2 && _args7[2] !== undefined ? _args7[2] : 0;
              transaction = first_block;
              blocks = [];
              bytes_read = 0;
              log.info("Copying data from DFU device to browser");
              // Initialize progress to 0
              this.logProgress(0);
            case 7:
              bytes_to_read = Math.min(xfer_size, max_size - bytes_read);
              _context7.next = 10;
              return this.upload(bytes_to_read, transaction++);
            case 10:
              result = _context7.sent;
              log.debug("Read " + result.byteLength + " bytes");
              if (result.byteLength > 0) {
                blocks.push(result);
                bytes_read += result.byteLength;
              }
              if (Number.isFinite(max_size)) {
                this.logProgress(bytes_read, max_size);
              } else {
                this.logProgress(bytes_read);
              }
            case 14:
              if (bytes_read < max_size && result.byteLength == bytes_to_read) {
                _context7.next = 7;
                break;
              }
            case 15:
              if (!(bytes_read == max_size)) {
                _context7.next = 18;
                break;
              }
              _context7.next = 18;
              return this.abortToIdle();
            case 18:
              log.info("Read", bytes_read, "bytes");
              return _context7.abrupt("return", new Blob(blocks, {
                type: "application/octet-stream"
              }));
            case 20:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function do_upload(_x4) {
        return _do_upload.apply(this, arguments);
      }
      return do_upload;
    }()
  }, {
    key: "poll_until",
    value: function () {
      var _poll_until = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(state_predicate) {
        var dfu_status, device, async_sleep;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              async_sleep = function _async_sleep(duration_ms) {
                return new Promise(function (resolve, reject) {
                  log.debug("Sleeping for", duration_ms, "ms");
                  setTimeout(resolve, duration_ms);
                });
              };
              _context8.next = 3;
              return this.getStatus();
            case 3:
              dfu_status = _context8.sent;
              device = this;
            case 5:
              if (!(!state_predicate(dfu_status.state) && dfu_status.state != VexDFUDevice.dfuERROR)) {
                _context8.next = 13;
                break;
              }
              _context8.next = 8;
              return async_sleep(dfu_status.pollTimeout);
            case 8:
              _context8.next = 10;
              return this.getStatus();
            case 10:
              dfu_status = _context8.sent;
              _context8.next = 5;
              break;
            case 13:
              return _context8.abrupt("return", dfu_status);
            case 14:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function poll_until(_x5) {
        return _poll_until.apply(this, arguments);
      }
      return poll_until;
    }()
  }, {
    key: "poll_until_idle",
    value: function poll_until_idle(idle_state) {
      return this.poll_until(function (state) {
        return state == idle_state;
      });
    }
  }, {
    key: "do_download",
    value: function () {
      var _do_download = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(xfer_size, data, manifestationTolerant, progress) {
        var bytes_sent, expected_size, transaction, bytes_left, chunk_size, bytes_written, dfu_status, _dfu_status, final_status;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              bytes_sent = 0;
              expected_size = data.byteLength;
              transaction = 0;
              log.info("Copying data from browser to DFU device");

              // Initialize progress to 0
              this.logProgress(bytes_sent, expected_size);
            case 5:
              if (!(bytes_sent < expected_size)) {
                _context9.next = 30;
                break;
              }
              bytes_left = expected_size - bytes_sent;
              chunk_size = Math.min(bytes_left, xfer_size);
              bytes_written = 0;
              dfu_status = void 0;
              _context9.prev = 10;
              _context9.next = 13;
              return this.download(data.slice(bytes_sent, bytes_sent + chunk_size), transaction++);
            case 13:
              bytes_written = _context9.sent;
              _context9.next = 16;
              return this.poll_until_idle(VexDFUDevice.dfuDNLOAD_IDLE);
            case 16:
              dfu_status = _context9.sent;
              _context9.next = 22;
              break;
            case 19:
              _context9.prev = 19;
              _context9.t0 = _context9["catch"](10);
              throw "Error during DFU download: " + _context9.t0;
            case 22:
              if (!(dfu_status.status != VexDFUDevice.STATUS_OK)) {
                _context9.next = 24;
                break;
              }
              throw "DFU DOWNLOAD failed state=".concat(dfu_status.state, ", status=").concat(dfu_status.status);
            case 24:
              log.debug("Wrote", bytes_written, "bytes");
              bytes_sent += bytes_written;
              if (progress) {
                progress(bytes_sent / expected_size);
              }
              this.logProgress(bytes_sent, expected_size);
              _context9.next = 5;
              break;
            case 30:
              log.debug("Sending empty block");
              _context9.prev = 31;
              _context9.next = 34;
              return this.download(new ArrayBuffer(0), transaction++);
            case 34:
              _context9.next = 39;
              break;
            case 36:
              _context9.prev = 36;
              _context9.t1 = _context9["catch"](31);
              throw "Error during final DFU download: " + _context9.t1;
            case 39:
              log.info("Wrote", bytes_sent, "bytes");
              log.info("Manifesting new firmware");
              if (!manifestationTolerant) {
                _context9.next = 60;
                break;
              }
              _context9.prev = 42;
              _context9.next = 45;
              return this.poll_until(function (state) {
                return state == VexDFUDevice.dfuIDLE || state == VexDFUDevice.dfuMANIFEST_WAIT_RESET;
              });
            case 45:
              _dfu_status = _context9.sent;
              if (_dfu_status.state == VexDFUDevice.dfuMANIFEST_WAIT_RESET) {
                log.debug("Device transitioned to MANIFEST_WAIT_RESET even though it is manifestation tolerant");
              }
              if (!(_dfu_status.status != VexDFUDevice.STATUS_OK)) {
                _context9.next = 49;
                break;
              }
              throw "DFU MANIFEST failed state=".concat(_dfu_status.state, ", status=").concat(_dfu_status.status);
            case 49:
              _context9.next = 58;
              break;
            case 51:
              _context9.prev = 51;
              _context9.t2 = _context9["catch"](42);
              if (!(_context9.t2.endsWith("ControlTransferIn failed: NotFoundError: Device unavailable.") || _context9.t2.endsWith("The device was disconnected.") || _context9.t2.endsWith("A transfer error has occurred.") || _context9.t2.toString().endsWith("Unable to reset the device."))) {
                _context9.next = 57;
                break;
              }
              log.warn("Unable to poll final manifestation status");
              _context9.next = 58;
              break;
            case 57:
              throw "Error during DFU manifest: " + _context9.t2;
            case 58:
              _context9.next = 70;
              break;
            case 60:
              _context9.prev = 60;
              _context9.next = 63;
              return this.getStatus();
            case 63:
              final_status = _context9.sent;
              log.debug("Final DFU status: state=".concat(final_status.state, ", status=").concat(final_status.status));
              _context9.next = 70;
              break;
            case 67:
              _context9.prev = 67;
              _context9.t3 = _context9["catch"](60);
              log.debug("Manifest GET_STATUS poll error: " + _context9.t3);
            case 70:
              return _context9.abrupt("return");
            case 71:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this, [[10, 19], [31, 36], [42, 51], [60, 67]]);
      }));
      function do_download(_x6, _x7, _x8, _x9) {
        return _do_download.apply(this, arguments);
      }
      return do_download;
    }()
  }], [{
    key: "findDeviceDfuInterfaces",
    value:
    //#endregion static constants

    //#region static functions
    function findDeviceDfuInterfaces(device) {
      var interfaces = [];
      var _iterator3 = _createForOfIteratorHelper(device.configurations),
        _step3;
      try {
        for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
          var conf = _step3.value;
          var _iterator4 = _createForOfIteratorHelper(conf.interfaces),
            _step4;
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              var intf = _step4.value;
              var _iterator5 = _createForOfIteratorHelper(intf.alternates),
                _step5;
              try {
                for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                  var alt = _step5.value;
                  if (alt.interfaceClass == 0xFE && alt.interfaceSubclass == 0x01 && (alt.interfaceProtocol == 0x01 || alt.interfaceProtocol == 0x02)) {
                    var settings = {
                      "configuration": conf,
                      "interface": intf,
                      "alternate": alt,
                      "name": alt.interfaceName
                    };
                    interfaces.push(settings);
                  }
                }
              } catch (err) {
                _iterator5.e(err);
              } finally {
                _iterator5.f();
              }
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        }
      } catch (err) {
        _iterator3.e(err);
      } finally {
        _iterator3.f();
      }
      return interfaces;
    }
  }, {
    key: "findAllDfuInterfaces",
    value: function () {
      var _findAllDfuInterfaces = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        var devices, matches, _iterator6, _step6, device, interfaces, _iterator7, _step7, interface_;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return navigator.usb.getDevices();
            case 2:
              devices = _context10.sent;
              matches = [];
              _iterator6 = _createForOfIteratorHelper(devices);
              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  device = _step6.value;
                  interfaces = VexDFUDevice.findDeviceDfuInterfaces(device);
                  _iterator7 = _createForOfIteratorHelper(interfaces);
                  try {
                    for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                      interface_ = _step7.value;
                      matches.push(new VexDFUDevice(device, interface_));
                    }
                  } catch (err) {
                    _iterator7.e(err);
                  } finally {
                    _iterator7.f();
                  }
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }
              return _context10.abrupt("return", matches);
            case 7:
            case "end":
              return _context10.stop();
          }
        }, _callee10);
      }));
      function findAllDfuInterfaces() {
        return _findAllDfuInterfaces.apply(this, arguments);
      }
      return findAllDfuInterfaces;
    }()
  }, {
    key: "parseConfigurationDescriptor",
    value: function parseConfigurationDescriptor(data) {
      var descriptorData = new DataView(data.buffer.slice(9));
      var descriptors = VexDFUDevice.parseSubDescriptors(descriptorData);
      return {
        bLength: data.getUint8(0),
        bDescriptorType: data.getUint8(1),
        wTotalLength: data.getUint16(2, true),
        bNumInterfaces: data.getUint8(4),
        bConfigurationValue: data.getUint8(5),
        iConfiguration: data.getUint8(6),
        bmAttributes: data.getUint8(7),
        bMaxPower: data.getUint8(8),
        descriptors: descriptors
      };
    }
  }, {
    key: "parseInterfaceDescriptor",
    value: function parseInterfaceDescriptor(data) {
      return {
        bLength: data.getUint8(0),
        bDescriptorType: data.getUint8(1),
        bInterfaceNumber: data.getUint8(2),
        bAlternateSetting: data.getUint8(3),
        bNumEndpoints: data.getUint8(4),
        bInterfaceClass: data.getUint8(5),
        bInterfaceSubClass: data.getUint8(6),
        bInterfaceProtocol: data.getUint8(7),
        iInterface: data.getUint8(8),
        descriptors: []
      };
    }
  }, {
    key: "parseFunctionalDescriptor",
    value: function parseFunctionalDescriptor(data) {
      return {
        bLength: data.getUint8(0),
        bDescriptorType: data.getUint8(1),
        bmAttributes: data.getUint8(2),
        wDetachTimeOut: data.getUint16(3, true),
        wTransferSize: data.getUint16(5, true),
        bcdDFUVersion: data.getUint16(7, true)
      };
    }
  }, {
    key: "parseSubDescriptors",
    value: function parseSubDescriptors(descriptorData) {
      var DT_INTERFACE = 4;
      var DT_ENDPOINT = 5;
      var DT_DFU_FUNCTIONAL = 0x21;
      var USB_CLASS_APP_SPECIFIC = 0xFE;
      var USB_SUBCLASS_DFU = 0x01;
      var remainingData = descriptorData;
      var descriptors = [];
      var currIntf;
      var inDfuIntf = false;
      while (remainingData.byteLength > 2) {
        var bLength = remainingData.getUint8(0);
        var bDescriptorType = remainingData.getUint8(1);
        var descData = new DataView(remainingData.buffer.slice(0, bLength));
        if (bDescriptorType == DT_INTERFACE) {
          currIntf = VexDFUDevice.parseInterfaceDescriptor(descData);
          if (currIntf.bInterfaceClass == USB_CLASS_APP_SPECIFIC && currIntf.bInterfaceSubClass == USB_SUBCLASS_DFU) {
            inDfuIntf = true;
          } else {
            inDfuIntf = false;
          }
          descriptors.push(currIntf);
        } else if (inDfuIntf && bDescriptorType == DT_DFU_FUNCTIONAL) {
          var funcDesc = VexDFUDevice.parseFunctionalDescriptor(descData);
          descriptors.push(funcDesc);
          currIntf.descriptors.push(funcDesc);
        } else {
          var desc = {
            bLength: bLength,
            bDescriptorType: bDescriptorType,
            data: descData
          };
          descriptors.push(desc);
          if (currIntf) {
            currIntf.descriptors.push(desc);
          }
        }
        remainingData = new DataView(remainingData.buffer.slice(bLength));
      }
      return descriptors;
    }
    //#endregion static functions
  }]);
}();
//#region static constants
_defineProperty(VexDFUDevice, "DETACH", 0x00);
_defineProperty(VexDFUDevice, "DNLOAD", 0x01);
_defineProperty(VexDFUDevice, "UPLOAD", 0x02);
_defineProperty(VexDFUDevice, "GETSTATUS", 0x03);
_defineProperty(VexDFUDevice, "CLRSTATUS", 0x04);
_defineProperty(VexDFUDevice, "GETSTATE", 0x05);
_defineProperty(VexDFUDevice, "ABORT", 6);
_defineProperty(VexDFUDevice, "appIDLE", 0);
_defineProperty(VexDFUDevice, "appDETACH", 1);
_defineProperty(VexDFUDevice, "dfuIDLE", 2);
_defineProperty(VexDFUDevice, "dfuDNLOAD_SYNC", 3);
_defineProperty(VexDFUDevice, "dfuDNBUSY", 4);
_defineProperty(VexDFUDevice, "dfuDNLOAD_IDLE", 5);
_defineProperty(VexDFUDevice, "dfuMANIFEST_SYNC", 6);
_defineProperty(VexDFUDevice, "dfuMANIFEST", 7);
_defineProperty(VexDFUDevice, "dfuMANIFEST_WAIT_RESET", 8);
_defineProperty(VexDFUDevice, "dfuUPLOAD_IDLE", 9);
_defineProperty(VexDFUDevice, "dfuERROR", 10);
_defineProperty(VexDFUDevice, "STATUS_OK", 0x0);
_defineProperty(VexDFUDevice, "parseDeviceDescriptor", function (data) {
  return {
    bLength: data.getUint8(0),
    bDescriptorType: data.getUint8(1),
    bcdUSB: data.getUint16(2, true),
    bDeviceClass: data.getUint8(4),
    bDeviceSubClass: data.getUint8(5),
    bDeviceProtocol: data.getUint8(6),
    bMaxPacketSize: data.getUint8(7),
    idVendor: data.getUint16(8, true),
    idProduct: data.getUint16(10, true),
    bcdDevice: data.getUint16(12, true),
    iManufacturer: data.getUint8(14),
    iProduct: data.getUint8(15),
    iSerialNumber: data.getUint8(16),
    bNumConfigurations: data.getUint8(17)
  };
});


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/errors.ts":
/*!**********************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/errors.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DFUNoDeviceError: () => (/* binding */ DFUNoDeviceError),
/* harmony export */   DFUNonVexDeviceError: () => (/* binding */ DFUNonVexDeviceError),
/* harmony export */   WebUSBUnsupportedError: () => (/* binding */ WebUSBUnsupportedError)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
var WebUSBUnsupportedError = /*#__PURE__*/function (_Error) {
  function WebUSBUnsupportedError() {
    var _this;
    _classCallCheck(this, WebUSBUnsupportedError);
    for (var _len = arguments.length, params = new Array(_len), _key = 0; _key < _len; _key++) {
      params[_key] = arguments[_key];
    }
    _this = _callSuper(this, WebUSBUnsupportedError, [].concat(params)); // (1)
    _this.name = "WebUSBUnsupportedError"; // (2)
    return _this;
  }
  _inherits(WebUSBUnsupportedError, _Error);
  return _createClass(WebUSBUnsupportedError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var DFUNonVexDeviceError = /*#__PURE__*/function (_Error2) {
  function DFUNonVexDeviceError() {
    var _this2;
    _classCallCheck(this, DFUNonVexDeviceError);
    for (var _len2 = arguments.length, params = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      params[_key2] = arguments[_key2];
    }
    _this2 = _callSuper(this, DFUNonVexDeviceError, [].concat(params)); // (1)
    _this2.name = "DFUNonVexDeviceError"; // (2)
    return _this2;
  }
  _inherits(DFUNonVexDeviceError, _Error2);
  return _createClass(DFUNonVexDeviceError);
}(/*#__PURE__*/_wrapNativeSuper(Error));
var DFUNoDeviceError = /*#__PURE__*/function (_Error3) {
  function DFUNoDeviceError() {
    var _this3;
    _classCallCheck(this, DFUNoDeviceError);
    for (var _len3 = arguments.length, params = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      params[_key3] = arguments[_key3];
    }
    _this3 = _callSuper(this, DFUNoDeviceError, [].concat(params));
    _this3.name = "DFUNoDeviceError";
    return _this3;
  }
  _inherits(DFUNoDeviceError, _Error3);
  return _createClass(DFUNoDeviceError);
}(/*#__PURE__*/_wrapNativeSuper(Error));

/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/helpers.ts":
/*!***********************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/helpers.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buf2hex: () => (/* binding */ buf2hex),
/* harmony export */   hex4: () => (/* binding */ hex4),
/* harmony export */   hexAddr8: () => (/* binding */ hexAddr8),
/* harmony export */   niceSize: () => (/* binding */ niceSize)
/* harmony export */ });
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function buf2hex(buffer) {
  // buffer is an ArrayBuffer
  return _toConsumableArray(new Uint8Array(buffer)).map(function (x) {
    return x.toString(16).padStart(2, '0');
  }).join('');
}
function hex4(n) {
  var s = n.toString(16);
  while (s.length < 4) {
    s = '0' + s;
  }
  return s;
}
function hexAddr8(n) {
  var s = n.toString(16);
  while (s.length < 8) {
    s = '0' + s;
  }
  return "0x" + s;
}
function niceSize(n) {
  var gigabyte = 1024 * 1024 * 1024;
  var megabyte = 1024 * 1024;
  var kilobyte = 1024;
  if (n >= gigabyte) {
    return n / gigabyte + "GiB";
  } else if (n >= megabyte) {
    return n / megabyte + "MiB";
  } else if (n >= kilobyte) {
    return n / kilobyte + "KiB";
  } else {
    return n + "B";
  }
}


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexINI.ts":
/*!***************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexINI.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VEXcodeIcons: () => (/* binding */ VEXcodeIcons),
/* harmony export */   VexINI: () => (/* binding */ VexINI)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("vexini");
log.setLevel(log.levels.WARN);
// dev only
// log.enableAll();
var VEXcodeIcons = /*#__PURE__*/function (VEXcodeIcons) {
  VEXcodeIcons["VEXcodeBlocks"] = "USER922x.bmp";
  VEXcodeIcons["VEXcodeCPP"] = "USER926x.bmp";
  VEXcodeIcons["VEXcodePython"] = "USER925x.bmp";
  VEXcodeIcons["VEXcodePro"] = "USER921x.bmp";
  return VEXcodeIcons;
}(VEXcodeIcons || {});
/**
 * this is used to help create the ini string for the V5
 */
var VexINI = /*#__PURE__*/function () {
  /**
   * create new ini instance
   * @constructor
   */
  function VexINI() {
    _classCallCheck(this, VexINI);
    _defineProperty(this, "_project", {
      version: "1",
      ide: "Unknown",
      file: "none"
    });
    _defineProperty(this, "_program", {
      version: "1",
      name: "program",
      slot: "1",
      icon: "default.bmp",
      iconalt: "",
      description: "",
      date: "",
      timezone: "0"
    });
    _defineProperty(this, "_config", {
      port_22: "adi"
    });
    _defineProperty(this, "_ctrl1", undefined);
    _defineProperty(this, "_ctrl2", undefined);
    this.createIni();
  }

  /**
   * add controller configuration info to ini file
   * @param ctrl the controler number: 0 for the first controller, 1 for the second controller
   * @param item key
   * @param str value
   */
  return _createClass(VexINI, [{
    key: "addControllerConfig",
    value: function addControllerConfig(ctrl, item, str) {
      if (ctrl === 0) {
        if (!this._ctrl1) {
          this._ctrl1 = {};
        }
        this._ctrl1[item] = str;
      } else if (ctrl === 1) {
        if (!this._ctrl2) {
          this._ctrl2 = {};
        }
        this._ctrl2[item] = str;
      }
    }

    /**
     * add port configuration to ini file
     * @param port the port number for the device. 1-21
     * @param str the text to display for the device
     */
  }, {
    key: "addPortConfig",
    value: function addPortConfig(port, str) {
      if (port < 1 || port > 21) {
        return;
      }
      var prop = "port_" + this.dec2(port);
      this._config[prop] = str;
    }

    /**
     * add adi port configuration to ini file
     * @param port the port number for the ADI. 1-22
     * @param subport the port on the ADI. 0-7 for A-H
     * @param str the text to display for the device
     */
  }, {
    key: "addAdiPortConfig",
    value: function addAdiPortConfig(port, subport, str) {
      if (port < 1 || port > 22) {
        return;
      }
      var id = 0x41 + subport;
      var prop = "port_" + this.dec2(port) + String.fromCharCode(id);
      this._config[prop] = str;
      if (port === 22 && this._config["port_22"]) {
        delete this._config["port_22"];
      }
    }

    /**
     * add program slot to ini file
     * @param slot 0-7 for the project slot
     */
  }, {
    key: "programSlotSet",
    value: function programSlotSet(slot) {
      if (slot < 0) {
        slot = 0;
      }
      this._program.slot = slot.toString();
    }

    /**
     * add program name to ini file. this will automatically trim the string the the max length
     * @param name the name of the program on the brain
     */
  }, {
    key: "programNameSet",
    value: function programNameSet(name) {
      this._program.name = name.substr(0, 32);
    }

    /**
     * add program description to ini f ile. this will automatically trim the string the the max length
     * @param desc the descript to display to the user in the program info screen
     */
  }, {
    key: "programDescriptionSet",
    value: function programDescriptionSet(desc) {
      this._program.description = desc.substr(0, 256);
    }

    /**
     * add program icon to ini file
     * @param name the icon to use for the 
     */
  }, {
    key: "programIconSet",
    value: function programIconSet(name) {
      this._program.icon = name.substr(0, 16);
    }

    /**
     * add optional alternate program icon to ini file
     */
  }, {
    key: "programIconAltSet",
    value: function programIconAltSet(name) {
      this._program.iconalt = name.substr(0, 16);
    }

    /**
     * add program ide to ini file
     */
  }, {
    key: "projectIdeSet",
    value: function projectIdeSet(name) {
      this._project.ide = name.substr(0, 16);
    }

    /**
     * add program date to ini file
     */
  }, {
    key: "programDateSet",
    value: function programDateSet(date) {
      var d = date === undefined ? new Date() : date;
      this._program.date = d.toISOString();
      var tzo = Math.abs(d.getTimezoneOffset());
      var tzh = tzo / 60 >>> 0;
      var tzm = tzo - tzh * 60;
      this._program.timezone = (d.getTimezoneOffset() > 0 ? "-" : "+") + this.dec2(tzh) + ":" + this.dec2(tzm);
    }

    /**
     * turn ini class into string suitable for saving as an ini file on the V5
     */
  }, {
    key: "createIni",
    value: function createIni() {
      var str = [];
      if (!this._program.date) {
        this.programDateSet();
      }
      str.push(";" + "\n");
      str.push("; VEX program ini file" + "\n");
      str.push("; Copyright (c) 2017-2021 VEX Robotics" + "\n");
      str.push(";" + "\n");
      str.push("[project]" + "\n");
      var projectProperty;
      for (projectProperty in this._project) {
        if (this._project.hasOwnProperty(projectProperty)) {
          var _s = (projectProperty + "                ").substr(0, 12);
          var t = this._project[projectProperty];
          str.push(_s + ' = "' + t + '"\n');
        }
      }
      str.push(";" + "\n");
      str.push("[program]" + "\n");
      var programProperty;
      for (programProperty in this._program) {
        if (this._program.hasOwnProperty(programProperty)) {
          var _s2 = (programProperty + "                ").substr(0, 12);
          var _t = this._program[programProperty];

          // skip new alternate icon if it is not set
          if (_s2.match("iconalt") && _t == "") {
            continue;
          }
          str.push(_s2 + ' = "' + _t + '"\n');
        }
      }
      str.push(";" + "\n");
      str.push("[config]" + "\n");
      var configProperty;
      for (configProperty in this._config) {
        if (this._config.hasOwnProperty(configProperty)) {
          var _s3 = (configProperty + "                ").substr(0, 12);
          var _t2 = this._config[configProperty];
          str.push(_s3 + ' = "' + _t2 + '"\n');
        }
      }
      if (this._ctrl1 !== undefined) {
        str.push(";" + "\n");
        str.push("[controller_1]" + "\n");
        for (var property in this._ctrl1) {
          if (this._ctrl1.hasOwnProperty(property)) {
            var _s4 = (property + "                ").substr(0, 12);
            var _t3 = this._ctrl1[property];
            str.push(_s4 + ' = "' + _t3 + '"\n');
          }
        }
      }
      if (this._ctrl2 !== undefined) {
        str.push(";" + "\n");
        str.push("[controller_2]" + "\n");
        for (var _property in this._ctrl2) {
          if (this._ctrl2.hasOwnProperty(_property)) {
            var _s5 = (_property + "                ").substr(0, 12);
            var _t4 = this._ctrl2[_property];
            str.push(_s5 + ' = "' + _t4 + '"\n');
          }
        }
      }
      log.debug("ini lines: ", str);
      var s = str.join("");
      // console.log(s);

      return s;
    }

    /**
     * Utility function to create a decimal string from the given number
     * @param value the number to be formatted into a string with %02d format
     * @return the number as a 2 digit string padded with 0
     */
  }, {
    key: "dec2",
    value: function dec2(value) {
      var str = ("00" + value.toString(10)).substr(-2, 2);
      return str.toUpperCase();
    }
  }]);
}();


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts":
/*!************************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexSerialDevice.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DownloadState: () => (/* reexport safe */ _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState),
/* harmony export */   VEXAIMUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXAIMUpdateStates),
/* harmony export */   VEXAIRUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXAIRUpdateStates),
/* harmony export */   VEXAIVisionAIModelUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXAIVisionAIModelUpdateStates),
/* harmony export */   VEXAIVisionUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXAIVisionUpdateStates),
/* harmony export */   VEXBrainUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXBrainUpdateStates),
/* harmony export */   VEXControllerUpdateStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates),
/* harmony export */   VexSerialDevice: () => (/* binding */ VexSerialDevice),
/* harmony export */   VexSerialDeviceConnectionStates: () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./errors */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/errors.ts");
/* harmony import */ var _VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../VEXSerial/helpers */ "./src/HardwareInterface/VEXSerial/helpers.ts");
/* harmony import */ var _VexCDC__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./VexCDC */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexCDC.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _VexINI__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./VexINI */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexINI.ts");
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _radio_cc264x__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./radio/cc264x */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/radio/cc264x.ts");
/* harmony import */ var _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./VEXDFU/VexDFU */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/VexDFU.ts");
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./enums */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/enums.ts");
/* harmony import */ var _VEXSerial__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../VEXSerial */ "./src/HardwareInterface/VEXSerial/index.ts");
/* harmony import */ var _VEXSerial_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../VEXSerial/types */ "../applications/electron/src/main/types/DeviceType.ts");
/* harmony import */ var _platformInfo__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../platformInfo */ "./src/platformInfo.ts");
/* harmony import */ var _HWInterface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../HWInterface */ "./src/HardwareInterface/HWInterface.ts");
/* harmony import */ var _VEXDFU_helpers__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./VEXDFU/helpers */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VEXDFU/helpers.ts");
/* harmony import */ var _targetPlatform__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../targetPlatform */ "./src/targetPlatform.ts");
/* harmony import */ var _VexCRC__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./VexCRC */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexCRC.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VexSerialDevice");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

var historyLogger = log.setHistoryLogger("VexSerial");
historyLogger.setLevel(log.levels.DEBUG);
historyLogger.setMaxLines(5000);





// import { VexWebSerial } from "./VexWebSerial";













/**
 * This is a known old version of the Atmel firmware that has issues with
 * responding to CDC commands. If the Atmel version is reporting the same
 * as this version, then we need to handle updates a little differently.
 * 
 * undefined if the platform does not have this issue.
 */
var oldAtmelVersion = _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsIQ ? new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(1, 0, 0, 18) : new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(1, 0, 0, 2);

//#region constants
var USER_PROG_CHUNK_SIZE = 4096; // chunk size
var USER_FLASH_START = 0x03000000; // start address of memory
var USER_FLASH_SYS_CODE_START = 0x03400000; // start address of user code
var USER_FLASH_USR_CODE_START = 0x03800000; // start address of user code
var USER_FLASH_END = 0x08000000; // end address of memory
var USER_FLASH_MAX_FILE_SIZE = 0x200000; // Maximum file size for QSPI

var USER_FLASH_START_B = 0x10200000; // special app flash start
var USER_FLASH_END_B = 0x10400000; // special app flash end

var USER_FLASH_START_C = 0x30200000; // special app flash start
var USER_FLASH_END_C = 0x31000000; // special app flash end

var SUCCESS = 0;
var ERROR_BAD_OBJECT = -1;
var ERROR_NOT_CONNECTED = -2;
var ERROR_BAD_CATALOG = -3;
var ERROR_UNSUPPORTED_DEVICE = -4;
var ERROR_DOWNLOAD = -5;
var ERROR_DELETE = -6;
var ERROR_MUTEX = -98;
var ERROR_COMMUNICATION = -99;
//#endregion constants

//#region const for code
var utf8decoder = new TextDecoder();
var utf8encoder = new TextEncoder();
//#endregion const for code

//#region type definitions



//#region download progress callback types


//#endregion download progress callback types

/**
 * this is a base type def for controller config info. it should be
 * extended for each platform.
 */

/**
 * this is a base type def for controller config button names. it should be
 * extended for each platform.
 */

//#region interfaces for V5/EXP/IQ2 files

//#endregion interfaces for V5/EXP/IQ2 files

;
;
var VEXDeviceBootSource = /*#__PURE__*/function (VEXDeviceBootSource) {
  VEXDeviceBootSource[VEXDeviceBootSource["PRIMARY"] = 0] = "PRIMARY";
  VEXDeviceBootSource[VEXDeviceBootSource["GOLDEN"] = 1] = "GOLDEN";
  VEXDeviceBootSource[VEXDeviceBootSource["SDCARD"] = 2] = "SDCARD";
  VEXDeviceBootSource[VEXDeviceBootSource["UNKNOWN"] = 3] = "UNKNOWN";
  VEXDeviceBootSource[VEXDeviceBootSource["RAM_BL"] = 4] = "RAM_BL";
  VEXDeviceBootSource[VEXDeviceBootSource["ROM_BL"] = 5] = "ROM_BL";
  return VEXDeviceBootSource;
}(VEXDeviceBootSource || {});
//#endregion type definitions
/**
 * This is a class that is used to wrap the VexSerialPort so that the radio
 * update system can use a single function with a callback to update the radio
 * in the controllers. Once the radio update process is completed. The destroy
 * method must be called to prevent memory leaks and other unexpected results.
 */
var VexSerialDeviceRawSerialPort = /*#__PURE__*/function () {
  function VexSerialDeviceRawSerialPort(serialPort) {
    _classCallCheck(this, VexSerialDeviceRawSerialPort);
    _defineProperty(this, "onReceiveData", null);
    this.serialPort = serialPort;
    this.onDataReceivedInternal = this.onDataReceivedInternal.bind(this);
    this.serialPort.on("dataReceived", this.onDataReceivedInternal);

    // TODO: change the VexSerialPort class to have a way to lock out other listeners and writes?
  }
  return _createClass(VexSerialDeviceRawSerialPort, [{
    key: "onDataReceivedInternal",
    value: function onDataReceivedInternal(data) {
      if (this.onReceiveData) {
        this.onReceiveData(data);
      }
    }
  }, {
    key: "createWriteDataFunction",
    value: function createWriteDataFunction() {
      function writeData(data, onReceiveData) {
        this.onReceiveData = onReceiveData;
        var sendData = data;
        this.serialPort.writeData(sendData);
      }
      return writeData.bind(this);
    }
  }, {
    key: "destroy",
    value: function destroy() {
      this.serialPort.off("dataReceived", this.onDataReceivedInternal);
    }
  }]);
}();
var VexSerialDevice = /*#__PURE__*/function () {
  function VexSerialDevice() {
    _classCallCheck(this, VexSerialDevice);
    _defineProperty(this, "logger", _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
    //#endregion AI Vision constants
    _defineProperty(this, "downloadAddress", USER_FLASH_USR_CODE_START);
    _defineProperty(this, "downloadTarget", VexSerialDevice.FILE_TARGET_QSPI);
    _defineProperty(this, "downloadAutoRun", VexSerialDevice.OPTIONS.EXIT_RUN);
    _defineProperty(this, "lastStatus", VexSerialDevice.STATUS_GOOD);
    _defineProperty(this, "linkFile", undefined);
    _defineProperty(this, "linkFileVID", undefined);
    _defineProperty(this, "connected", true);
    _defineProperty(this, "deviceName", '');
    _defineProperty(this, "deviceTeamNumber", '');
    // system info
    _defineProperty(this, "uniqueId", 0);
    _defineProperty(this, "versionSystem", [0, 0, 0, 0]);
    _defineProperty(this, "versionUser", [0, 0, 0, 0]);
    _defineProperty(this, "sysFlags", [0, 0, 0, 0, 0, 0, 0, 0]);
    _defineProperty(this, "versionGolden", 0);
    _defineProperty(this, "versionNxp", 0);
    _defineProperty(this, "versionSystemStr", '');
    _defineProperty(this, "_inDFUMode", false);
    _defineProperty(this, "romBootloaderActive", false);
    _defineProperty(this, "ramBootloaderActive", false);
    _defineProperty(this, "cdc", new _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC());
    _defineProperty(this, "isConnecting", false);
    _defineProperty(this, "isConnected", false);
    _defineProperty(this, "isUpdatingFirmware", false);
    _defineProperty(this, "isConnectingUserPort", false);
    _defineProperty(this, "isConnectedUserPort_", false);
    _defineProperty(this, "brainVersionSystem", null);
    _defineProperty(this, "brainVersionCPU0", null);
    _defineProperty(this, "brainVersionCPU1", null);
    _defineProperty(this, "controllerVersionAtmel", null);
    _defineProperty(this, "controllerVersionRadio", null);
    _defineProperty(this, "_needsUpdateStateBrain", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure);
    _defineProperty(this, "_needsUpdateStateController", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure);
    //#endregion firmware
    //#region firmware file data
    _defineProperty(this, "_fw", null);
    _defineProperty(this, "_fwChannel", _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.VEXosFirmwareChannelType.PUBLIC);
    //#region controller polling
    _defineProperty(this, "_enableControllerPolling", false);
    /** a flag to indicate if actively pulling information from the controller */
    _defineProperty(this, "_isCurrentlyPollingController", false);
    _defineProperty(this, "_pollingInterval", null);
    /**
     * bitmap flags for the controller connection status. This is based on the
     * system flags command. flags might not be perfectly correct
     * 
     * * 0 - controller tethered
     * * 1 - radio connected
     * * 2 - radio linked
     * * 3 - radio on download channel
     * * 4 - radio on competition channel
     */
    _defineProperty(this, "controllerConnectionStatus", 0);
    //#region controller user data polling
    _defineProperty(this, "_controllerUserDataPollingInterval", null);
    /** a flag to indicate if actively pulling user data from the controller */
    _defineProperty(this, "_isCurrentlyPollingUserData", false);
    //#endregion
    //#region event handlers
    //#region event system
    _defineProperty(this, "eventCallbacks", {
      "connectionStateChange": [],
      "connectionStateChangeUserPort": [],
      "receivedUserData": [],
      "connectedToInvalidPort": [],
      "connectedToArm": [],
      "deviceInfoUpdated": [],
      "connectedToFieldController": []
    });
    //#region sensor setting flags
    _defineProperty(this, "_FlagSensorOverlayEnabled", false);
    _defineProperty(this, "_FlagTagDetectionEnabled", false);
    _defineProperty(this, "_FlagObjectDetectionEnabled", false);
    _defineProperty(this, "flagsSentSinceConnection", false);
    _defineProperty(this, "lastObjectFetchTime", null);
    _defineProperty(this, "lastObjectFetchData", null);
    // We will assume that we have already loaded the class for the
    // VexSerialPort implementation before this gets called. Otherwise
    // we need to deal with lots of async waiting throughout VEXcode.

    // setup admin port connection details
    this.serialConnection = (0,_VEXSerial__WEBPACK_IMPORTED_MODULE_10__.createVexSerialPortInstanceNoWait)(this.getAdminPortFilters());
    log.info("created admin port instance", this.serialConnection.uuid);
    this.onConnect = this.onConnect.bind(this);
    this.onDisconnect = this.onDisconnect.bind(this);
    this.serialConnection.on("connected", this.onConnect);
    this.serialConnection.on("disconnected", this.onDisconnect);

    // setup user port connection details
    this.serialConnectionUserPort = (0,_VEXSerial__WEBPACK_IMPORTED_MODULE_10__.createVexSerialPortInstanceNoWait)(this.getUserPortFilters());
    log.info("created user port instance", this.serialConnectionUserPort.uuid);
    this.onConnectUserPort = this.onConnectUserPort.bind(this);
    this.onDisconnectUserPort = this.onDisconnectUserPort.bind(this);
    this.serialConnectionUserPort.on("connected", this.onConnectUserPort);
    this.serialConnectionUserPort.on("disconnected", this.onDisconnectUserPort);
    this.onUserPortReceivedData = this.onUserPortReceivedData.bind(this);
    this.serialConnectionUserPort.on("dataReceived", this.onUserPortReceivedData);

    // setup polling controller
    this.pollController = this.pollController.bind(this);
    this.pollControllerUserData = this.pollControllerUserData.bind(this);
    this.sendDataUserPort = this.sendDataUserPort.bind(this);
  }

  /**
   * provides the port filter for the interface
   */
  return _createClass(VexSerialDevice, [{
    key: "getAdminPortFilters",
    value: function getAdminPortFilters() {
      return this.getBasePortFilters().map(this.convertPortFilterToAdmin);
    }
  }, {
    key: "getUserPortFilters",
    value: function getUserPortFilters() {
      return this.getBasePortFilters().map(this.convertPortFilterToUser);
    }
  }, {
    key: "convertPortFilterToAdmin",
    value: function convertPortFilterToAdmin(port) {
      return Object.assign(Object.assign({}, port), {
        portType: _VEXSerial_types__WEBPACK_IMPORTED_MODULE_11__.SerialPortType.Admin
      });
    }
  }, {
    key: "convertPortFilterToUser",
    value: function convertPortFilterToUser(port) {
      return Object.assign(Object.assign({}, port), {
        portType: _VEXSerial_types__WEBPACK_IMPORTED_MODULE_11__.SerialPortType.User,
        autoConnect: false
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      if (this.connected && this.lastStatus !== VexSerialDevice.STATUS_DISCONNECT) {
        // reset system status
        this.lastStatus = VexSerialDevice.STATUS_GOOD;
      }
    }

    //#region connection information
    /**
     * this indicates if the serial connection is supported by the system
     */
  }, {
    key: "isSupported",
    get: function get() {
      // we used to have the web serial package check this and store the result
      // in a property, but now with the interface selection system, we just need
      // to see if the instance exists. if not, then either
      //  1. the interface has not been loaded yet. while possible this only
      //     happens at load and is unlikely to get checked before the instance 
      //     would be ready
      //  2. there is no interface for the current system. in which case, it is
      //     not supported...
      return !!this.serialConnection;
    }

    /**
     * the device type that this interface is for
     */
  }, {
    key: "controllerID",
    get: function get() {
      var controllerType = this.controllerType;
      if (controllerType === "IQ2Controller") {
        return _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.PRODUCT.IQ2_CONTROLLER;
      } else if (controllerType === "EXPController") {
        return _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.PRODUCT.EXP_CONTROLLER;
      } else if (controllerType === "V5Controller") {
        return _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.PRODUCT.V5_CONTROLLER;
      } else {
        return 0;
      }
    }

    /**
     * the connect device is a VEX Brain
     */
  }, {
    key: "isDeviceBrain",
    get: function get() {
      var dev = this.deviceType;
      // log.debug("deviceType: " + dev);
      return dev === "IQ" || dev === "IQ2" || dev === "EXP" || dev === "V5" || dev === "AIM" || dev === "AIRController";
    }

    /**
     * the connected device is an AI Vision Sensor
     */
  }, {
    key: "isDeviceAIVision",
    get: function get() {
      var dev = this.deviceType;
      return dev === "AIVision";
    }

    /**
     * the connect device is a VEx Brain
     */
  }, {
    key: "isDeviceArm",
    get: function get() {
      var dev = this.deviceType;
      // log.debug("deviceType: " + dev);
      return dev === "CTE";
    }

    /**
     * the connected device is a VEX Controller
     */
  }, {
    key: "isDeviceController",
    get: function get() {
      var dev = this.deviceType;
      return dev === "IQ2Controller" || dev === "EXPController" || dev === "V5Controller";
    }

    /**
     * the connected device is a VEX Controller that has firmware that you update over USB
     */
  }, {
    key: "isDeviceControllerWithFirmware",
    get: function get() {
      var dev = this.deviceType;
      return dev === "IQ2Controller" || dev === "EXPController";
    }

    /**
     * a brain is connected directly or connected through a controller
     */
  }, {
    key: "isBrainConnected",
    get: function get() {
      // we need special logic for if device is a controller
      if (this.isDeviceController) {
        // We could use > 0 for this, but there was code in the old device manager
        // that said that it is not connected if the status is 4. so to be safe,
        // we are doing the same here.
        return this.controllerConnectedToBrain;
      }
      // device is a brain or other direct connection device, so just need to say
      // if it is connected...
      return this.isDeviceBrain;
    }
  }, {
    key: "connectionMethod",
    get: function get() {
      if (this.isDeviceBrain || this.isDeviceArm || this.isDeviceAIVision) {
        return _HWInterface__WEBPACK_IMPORTED_MODULE_13__.VexConnectionMethod.USB;
      }
      // we know that this is a controller which has 2 connection options, radio or tethered
      if (this.controllerTethered) {
        // status 1 means that we are connected via tether
        return _HWInterface__WEBPACK_IMPORTED_MODULE_13__.VexConnectionMethod.RC_Tethered;
      }
      // assume that the method will be radio
      return _HWInterface__WEBPACK_IMPORTED_MODULE_13__.VexConnectionMethod.RC_Radio;
    }

    /**
     * this should be called after a connection is established to make sure the device information is updated
     * @param portInfo the port info for the new connection
     */
  }, {
    key: "isVexAdminPort",
    value: function () {
      var _isVexAdminPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(isBrain, isArm, isDeviceAIVision) {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              return _context.abrupt("return", isBrain ? this.isVexBrainAdminPort() : isArm ? this.isVexArmAdminPort() : isDeviceAIVision ? this.isAIVisionPort() : this.isVexControllerAdminPort());
            case 1:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function isVexAdminPort(_x, _x2, _x3) {
        return _isVexAdminPort.apply(this, arguments);
      }
      return isVexAdminPort;
    }()
  }, {
    key: "isVexBrainAdminPort",
    value: function () {
      var _isVexBrainAdminPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("isVexBrainAdminPort called");
              this.checkSupported();
              this.checkRequiredConnection(true);
              this.lastStatus = VexSerialDevice.STATUS_GOOD;
              return _context2.abrupt("return", new Promise(function (resolve, reject) {
                _this.writeDataAsync(_this.cdc.systemVersion()).then(function (reply) {
                  resolve(reply !== undefined);
                })["catch"](function () {
                  resolve(false);
                });
              }));
            case 5:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function isVexBrainAdminPort() {
        return _isVexBrainAdminPort.apply(this, arguments);
      }
      return isVexBrainAdminPort;
    }()
  }, {
    key: "isAIVisionPort",
    value: function () {
      var _isAIVisionPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("isAIVisionPort called");
              this.checkSupported();
              this.checkRequiredConnection(true);
              this.lastStatus = VexSerialDevice.STATUS_GOOD;
              return _context3.abrupt("return", new Promise(function (resolve, reject) {
                _this2.writeDataAsync(_this2.cdc.systemVersion()).then(function (reply) {
                  if (reply === undefined) {
                    // not a valid VEX port...
                    log.error("isAIVisionPort: no reply received. this should never happen");
                    resolve(false);
                    return;
                  }
                  var dvb = new DataView(reply);
                  var isIQSensor = dvb.getUint8(10) === 0x83;
                  if (isIQSensor !== _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsIQ) {
                    resolve(false);
                  } else {
                    resolve(true);
                  }
                })["catch"](function () {
                  resolve(false);
                });
              }));
            case 5:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function isAIVisionPort() {
        return _isAIVisionPort.apply(this, arguments);
      }
      return isAIVisionPort;
    }()
  }, {
    key: "isVexArmAdminPort",
    value: function () {
      var _isVexArmAdminPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("isVexArmAdminPort called");
              this.checkSupported();
              this.checkRequiredConnection(true);
              this.lastStatus = VexSerialDevice.STATUS_GOOD;
              return _context4.abrupt("return", new Promise(function (resolve, reject) {
                resolve(true);
              }));
            case 5:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function isVexArmAdminPort() {
        return _isVexArmAdminPort.apply(this, arguments);
      }
      return isVexArmAdminPort;
    }()
  }, {
    key: "isVexControllerAdminPort",
    value: function () {
      var _isVexControllerAdminPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        var _this3 = this;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.debug("isVexControllerAdminPort called");
              this.checkSupported();
              this.checkRequiredConnection(true);
              this.lastStatus = VexSerialDevice.STATUS_GOOD;
              if (!this.isDeviceControllerWithFirmware) {
                _context5.next = 8;
                break;
              }
              return _context5.abrupt("return", new Promise(function (resolve, reject) {
                _this3.controllerAtmelStatus(true, true).then(function (res) {
                  log.debug("controllerAtmelStatus:", res);
                  resolve(!!res);
                })["catch"](function (err) {
                  log.error(err);
                  resolve(false);
                });
              }));
            case 8:
              return _context5.abrupt("return", true);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function isVexControllerAdminPort() {
        return _isVexControllerAdminPort.apply(this, arguments);
      }
      return isVexControllerAdminPort;
    }()
    /**
     * True if the user port connection can be requested
     */
  }, {
    key: "canConnectUserPort",
    get: function get() {
      return this.connectionState === _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected;
    }

    /**
     * True if the user port is currently connected. 
     */
  }, {
    key: "isConnectedUserPort",
    get: function get() {
      return this.isConnectedUserPort_;
    }
    //#endregion connection information

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

    /**
     * checks if connected
     * @param canBeConnecting true if this operation can be done while connecting
     */
  }, {
    key: "checkRequiredConnection",
    value: function checkRequiredConnection() {
      var canBeConnecting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.isConnected || canBeConnecting && this.isConnecting) {
        return;
      }
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoBrainConnectedError();
    }

    /**
     * checks if brain connected
     * @throws NoBrainConnectedError if there is no VEX Brain or AI Vision connected
     */
  }, {
    key: "checkRequiredBrainConnection",
    value: function checkRequiredBrainConnection() {
      if (this.isConnected && this.isDeviceBrain || this.isConnected && this.isDeviceAIVision) {
        return;
      }
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoBrainConnectedError();
    }

    /**
     * checks if connected
     * @param canBeConnecting true if this operation can be done while connecting
     * @throws NoAdminPortConnectedError if no admin port is connected
     * @throws NoUserPortConnectedError if no admin port is connected
     */
  }, {
    key: "checkRequiredConnectionUserPort",
    value: function checkRequiredConnectionUserPort() {
      var canBeConnecting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (this.connectionState !== _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoAdminPortConnectedError();
      }
      if (this.isConnectedUserPort_ || canBeConnecting && this.isConnectingUserPort) {
        return;
      }
      throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoUserPortConnectedError();
    }
    //#endregion connection check helpers

    //#region connection control
    /**
     * call this to open a serial connection. This will prompt the user to select a port
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
  }, {
    key: "openConnection",
    value: function () {
      var _openConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.checkSupported();
              if (!this.isConnected) {
                _context6.next = 4;
                break;
              }
              log.warn("already connected...");
              return _context6.abrupt("return");
            case 4:
              this.isUpdatingFirmware = false;
              _context6.next = 7;
              return this.serialConnection.openPort();
            case 7:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function openConnection() {
        return _openConnection.apply(this, arguments);
      }
      return openConnection;
    }()
  }, {
    key: "reconnect",
    value: function () {
      var _reconnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return this.serialConnection.openPort(true);
            case 2:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function reconnect() {
        return _reconnect.apply(this, arguments);
      }
      return reconnect;
    }()
    /**
     * call this to open a serial connection. This will connect to the first device
     * that has already been connected to before. if there are no device that have
     * been connected before, this will not connect to any serial port.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
  }, {
    key: "openEstablishedConnection",
    value: (function () {
      var _openEstablishedConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              this.checkSupported();
              if (!this.isConnected) {
                _context8.next = 4;
                break;
              }
              log.warn("already connected...");
              return _context8.abrupt("return");
            case 4:
              this.isUpdatingFirmware = false;
              _context8.next = 7;
              return this.serialConnection.openEstablishedPort();
            case 7:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function openEstablishedConnection() {
        return _openEstablishedConnection.apply(this, arguments);
      }
      return openEstablishedConnection;
    }()
    /**
     * call this to close an open connection.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
    )
  }, {
    key: "closeConnection",
    value: (function () {
      var _closeConnection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9() {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              this.checkSupported();
              if (this.isConnected || this.isConnecting) {
                _context9.next = 4;
                break;
              }
              log.info("not connected...");
              return _context9.abrupt("return");
            case 4:
              _context9.next = 6;
              return this.serialConnection.closePort();
            case 6:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function closeConnection() {
        return _closeConnection.apply(this, arguments);
      }
      return closeConnection;
    }()
    /**
     * indicates if there is an open connection to a brain.
     */
    )
  }, {
    key: "connectionState",
    get: function get() {
      return this.isUpdatingFirmware || this.isConnected ? _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected : this.isConnecting ? _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting : _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Disconnected;
    }

    /**
     * call this to open a serial connection. This will prompt the user to select a port
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoAdminPortConnectedError if admin port is not connected
     */
  }, {
    key: "openConnectionUserPort",
    value: (function () {
      var _openConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10() {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.checkSupported();
              if (!(this.connectionState !== _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected)) {
                _context10.next = 3;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoAdminPortConnectedError();
            case 3:
              if (!this.isConnectedUserPort_) {
                _context10.next = 6;
                break;
              }
              log.warn("already connected to user port...");
              return _context10.abrupt("return");
            case 6:
              this.isConnectingUserPort = true;
              this.fireEvent("connectionStateChangeUserPort", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting);
              _context10.next = 10;
              return this.serialConnectionUserPort.openPort();
            case 10:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function openConnectionUserPort() {
        return _openConnectionUserPort.apply(this, arguments);
      }
      return openConnectionUserPort;
    }())
  }, {
    key: "reconnectUserPort",
    value: function () {
      var _reconnectUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11() {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              _context11.next = 2;
              return this.serialConnectionUserPort.openPort(true);
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function reconnectUserPort() {
        return _reconnectUserPort.apply(this, arguments);
      }
      return reconnectUserPort;
    }()
    /**
     * call this to open a serial connection. This will connect to the first device
     * that has already been connected to before. if there are no device that have
     * been connected before, this will not connect to any serial port.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoAdminPortConnectedError if admin port is not connected
     */
  }, {
    key: "openEstablishedConnectionUserPort",
    value: (function () {
      var _openEstablishedConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              this.checkSupported();
              if (!(this.connectionState !== _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected)) {
                _context12.next = 3;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoAdminPortConnectedError();
            case 3:
              if (!this.isConnectedUserPort_) {
                _context12.next = 6;
                break;
              }
              log.warn("already connected to user port...");
              return _context12.abrupt("return");
            case 6:
              this.isConnectingUserPort = true;
              this.fireEvent("connectionStateChangeUserPort", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting);
              _context12.next = 10;
              return this.serialConnection.openEstablishedPort();
            case 10:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function openEstablishedConnectionUserPort() {
        return _openEstablishedConnectionUserPort.apply(this, arguments);
      }
      return openEstablishedConnectionUserPort;
    }()
    /**
     * call this to close an open connection.
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     */
    )
  }, {
    key: "closeConnectionUserPort",
    value: (function () {
      var _closeConnectionUserPort = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              this.checkSupported();
              if (this.isConnectedUserPort_ || this.isConnectingUserPort) {
                _context13.next = 4;
                break;
              }
              log.info("not connected to user port...");
              return _context13.abrupt("return");
            case 4:
              _context13.next = 6;
              return this.serialConnectionUserPort.closePort();
            case 6:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function closeConnectionUserPort() {
        return _closeConnectionUserPort.apply(this, arguments);
      }
      return closeConnectionUserPort;
    }()
    /**
     * indicates if there is an open connection to a brain.
     */
    )
  }, {
    key: "connectionStateUserPort",
    get: function get() {
      return this.isConnectedUserPort_ ? _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected : this.isConnectingUserPort ? _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting : _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Disconnected;
    }
    //#endregion connection control

    //#region brain information
  }, {
    key: "getRobotInfo",
    value: function getRobotInfo() {
      return {
        serial: this.uniqueId,
        deviceType: this.deviceType,
        isConnected: this.isConnected,
        isBrainConnected: this.isBrainConnected,
        connectionType: this.connectionMethod,
        // TODO: actually check this each time?
        updateNeededBrain: this._needsUpdateStateBrain === _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate,
        updateNeededController: this._needsUpdateStateController === _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate,
        brainVersion: this.brainVersionSystem,
        cpu0Version: this.brainVersionCPU0,
        cpu1Version: this.brainVersionCPU1,
        atmelVersion: this.controllerVersionAtmel,
        radioVersion: this.controllerVersionRadio,
        // TODO: actually check this each time?
        isDFUMode: this._inDFUMode,
        name: this.deviceName,
        team: this.deviceTeamNumber,
        battery: this.battery,
        // TODO: add this info?
        hardwareRevision: "0"
      };
    }
  }, {
    key: "fetchBrainInfo",
    value: function () {
      var _fetchBrainInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        var res;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              log.debug("fetching brain information");
              _context14.next = 3;
              return this.brainGetSystemFlags(true);
            case 3:
              res = _context14.sent;
              if (!res) {
                _context14.next = 14;
                break;
              }
              _context14.next = 7;
              return this.getBrainName(true);
            case 7:
              _context14.next = 9;
              return this.getBrainTeamNumber(true);
            case 9:
              _context14.next = 11;
              return this.brainGetSystemStatus(true);
            case 11:
              return _context14.abrupt("return", this.getRobotInfo());
            case 14:
              return _context14.abrupt("return", null);
            case 15:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function fetchBrainInfo() {
        return _fetchBrainInfo.apply(this, arguments);
      }
      return fetchBrainInfo;
    }()
  }, {
    key: "primaryBootSource",
    get: function get() {
      return this.isBrainConnected && this.checkBootSource() === VEXDeviceBootSource.PRIMARY;
    }
  }, {
    key: "_ramBootloader",
    get: function get() {
      return this.isBrainConnected && this.checkBootSource() === VEXDeviceBootSource.RAM_BL;
    }
    //#region brain name
    /**
     * This will get the current brain name from the connected brain.
     * @returns the current name of the brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
  }, {
    key: "getBrainName",
    value: function () {
      var _getBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var _this4 = this;
        var canBeConnecting,
          _args15 = arguments;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              canBeConnecting = _args15.length > 0 && _args15[0] !== undefined ? _args15[0] : false;
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              _context15.next = 5;
              return this.disablePollingController();
            case 5:
              return _context15.abrupt("return", new Promise(function (resolve, reject) {
                _this4.writeDataAsync(_this4.cdc.V5_Cdc2SysKVRead("robotname")).then(function (reply) {
                  // log.debug("about to decode reply");
                  _this4.deviceName = _this4.decodeSysKVRead(reply);
                  log.debug("this.deviceName:", _this4.deviceName);
                  if (!_this4.deviceName) {
                    _this4.deviceName = "";
                  }
                  resolve(_this4.deviceName);
                })["catch"](function () {
                  // perhaps we don't support this yet
                  resolve(undefined);
                })["finally"](function () {
                  _this4.enablePollingController();
                });
              }));
            case 6:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function getBrainName() {
        return _getBrainName.apply(this, arguments);
      }
      return getBrainName;
    }()
    /**
     * This will set the brain name then return the current name from the brain.
     * @param name the new name for the brain
     * @returns the current name of the brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
  }, {
    key: "setBrainName",
    value: (function () {
      var _setBrainName = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(name) {
        var _this5 = this;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              _context16.next = 4;
              return this.disablePollingController();
            case 4:
              return _context16.abrupt("return", this.writeDataAsync(this.cdc.V5_Cdc2SysKVSave("robotname", name), {
                timeout: 1000
              }).then(function () {
                return _this5.getBrainName();
              })["catch"](function () {
                return '';
              }));
            case 5:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this);
      }));
      function setBrainName(_x4) {
        return _setBrainName.apply(this, arguments);
      }
      return setBrainName;
    }() //#endregion brain name
    //#region brain team
    /**
     * This will get the current brain team number from the connected brain.
     * @returns the current team number of the brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "getBrainTeamNumber",
    value: function () {
      var _getBrainTeamNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        var _this6 = this;
        var canBeConnecting,
          _args17 = arguments;
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              canBeConnecting = _args17.length > 0 && _args17[0] !== undefined ? _args17[0] : false;
              this.checkSupported();
              this.checkRequiredConnection(canBeConnecting);
              _context17.next = 5;
              return this.disablePollingController();
            case 5:
              return _context17.abrupt("return", new Promise(function (resolve, reject) {
                _this6.writeDataAsync(_this6.cdc.V5_Cdc2SysKVRead("teamnumber")).then(function (reply) {
                  // log.debug("about to decode reply");
                  _this6.deviceTeamNumber = _this6.decodeSysKVRead(reply);
                  log.debug("this.deviceTeamNumber:", _this6.deviceTeamNumber);
                  if (!_this6.deviceTeamNumber) {
                    _this6.deviceTeamNumber = "";
                  }
                  resolve(_this6.deviceTeamNumber);
                })["catch"](function () {
                  // perhaps we don't support this yet
                  resolve(undefined);
                })["finally"](function () {
                  _this6.enablePollingController();
                });
              }));
            case 6:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this);
      }));
      function getBrainTeamNumber() {
        return _getBrainTeamNumber.apply(this, arguments);
      }
      return getBrainTeamNumber;
    }()
    /**
     * This will set the team number then return the current team number from the brain.
     * @param team the new team number for the brain
     * @returns the current team number of the brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
  }, {
    key: "setBrainTeamNumber",
    value: (function () {
      var _setBrainTeamNumber = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(team) {
        var _this7 = this;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              _context18.next = 4;
              return this.disablePollingController();
            case 4:
              return _context18.abrupt("return", this.writeDataAsync(this.cdc.V5_Cdc2SysKVSave("teamnumber", team), {
                timeout: 1000
              }).then(function () {
                return _this7.getBrainTeamNumber();
              })["catch"](function () {
                return '';
              }));
            case 5:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this);
      }));
      function setBrainTeamNumber(_x5) {
        return _setBrainTeamNumber.apply(this, arguments);
      }
      return setBrainTeamNumber;
    }() //#endregion brain team
    /**
     * This will get the current firmware version from the connected brain
     * @returns the VEXos version on the connected brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "getBrainFirmwareVersion",
    value: function getBrainFirmwareVersion() {
      this.checkSupported();
      this.checkRequiredConnection();
      throw new Error("Method not implemented.");
    }

    /**
     * fetches the system version data from the device
     * @returns the raw data from the response
     */
  }, {
    key: "getSystemVersionData",
    value: function getSystemVersionData() {
      return this.writeDataAsync(this.cdc.systemVersion());
    }

    /**
     * Transfers the screen data from the connected robot.
     * @param imageSize the size of the image data in bytes
     * @param progressCallback a callback to inform about how far along the transfer is
     * @returns the raw image data
     */
  }, {
    key: "captureScreenData",
    value: function captureScreenData(imageSize, progressCallback) {
      var _this8 = this;
      this.checkRequiredConnection();

      // start the image capture
      return new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(resolve, reject) {
          return _regeneratorRuntime().wrap(function _callee19$(_context19) {
            while (1) switch (_context19.prev = _context19.next) {
              case 0:
                _context19.next = 2;
                return _this8.writeDataAsync(_this8.cdc.V5_Cdc2ScreenCaptureLayer());
              case 2:
                _this8.uploadScreenLayer(-2, function (success, data) {
                  log.debug("uploadScreenLayer callback:", success);
                  if (success) {
                    resolve(data);
                  } else {
                    reject();
                  }
                }, progressCallback, imageSize);
              case 3:
              case "end":
                return _context19.stop();
            }
          }, _callee19);
        }));
        return function (_x6, _x7) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    //#endregion brain information

    //#region controller information
  }, {
    key: "getControllerFirmwareVersions",
    value: function () {
      var _getControllerFirmwareVersions = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20() {
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              if (!(!this.controllerVersionAtmel || !this.controllerVersionRadio)) {
                _context20.next = 3;
                break;
              }
              _context20.next = 3;
              return this.fetchControllerInfo();
            case 3:
              return _context20.abrupt("return", {
                atmel: this.controllerVersionAtmel,
                radio: this.controllerVersionRadio
              });
            case 4:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function getControllerFirmwareVersions() {
        return _getControllerFirmwareVersions.apply(this, arguments);
      }
      return getControllerFirmwareVersions;
    }()
    /**
     * will fetch the version info from the controller.
     * 
     * Note this may get extended in the future to support pulling more data...
     */
  }, {
    key: "fetchControllerInfo",
    value: (function () {
      var _fetchControllerInfo = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21() {
        var controllerVersions, status, atmelStr, radioStr;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              if (this.isDeviceControllerWithFirmware) {
                _context21.next = 2;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoControllerConnectedError();
            case 2:
              _context21.next = 4;
              return this.controllerVersionsGet();
            case 4:
              controllerVersions = _context21.sent;
              log.warn("controllerVersions:", controllerVersions);
              if (!(!controllerVersions || controllerVersions.length === 0)) {
                _context21.next = 17;
                break;
              }
              log.warn("unable to get both versions from the controller. trying atmel only");
              _context21.next = 10;
              return this.controllerAtmelStatus(undefined, true);
            case 10:
              status = _context21.sent;
              if (!status) {
                log.error("unable to get any version info from the controller");
              }
              if (status.status === 0x20) {
                log.info("controller radio stuck in bootload");
              }
              this.controllerVersionAtmel = status.version;
              this.controllerVersionRadio = null;
              _context21.next = 19;
              break;
            case 17:
              this.controllerVersionAtmel = controllerVersions[0];
              this.controllerVersionRadio = controllerVersions[1];
            case 19:
              atmelStr = this.controllerVersionAtmel ? this.controllerVersionAtmel.toInternalString() : "null";
              radioStr = this.controllerVersionRadio ? this.controllerVersionRadio.toInternalString() : "null";
              log.debug("controller versions - atmel:", atmelStr, "  radio:", radioStr);
            case 22:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function fetchControllerInfo() {
        return _fetchControllerInfo.apply(this, arguments);
      }
      return fetchControllerInfo;
    }() //#endregion controller information
    //#region User Port Data
    /**
     * sends the provided string directly to the brain over the user port if connected
     * 
     * Note: if this is being used for sending commands/data to micropython, it
     * expects the carriage return (\r) for the end of the line, not the new line
     * (\n) character. If you don't use the carriage return character, it will
     * never "see" the end of the line and just sit there.
     */
    )
  }, {
    key: "sendDataUserPort",
    value: function sendDataUserPort(data) {
      this.checkSupported();
      this.checkRequiredConnectionUserPort();
      this.serialConnectionUserPort.writeData(utf8encoder.encode(data));
    }
    //#endregion User Port Data

    //#region firmware
    /**
     * This will get the current firmware version on the servers
     * @returns the VEXos version hosted on the server
     */
  }, {
    key: "updateFirmware",
    value:
    /**
     * This will attempt to update the firmware on the brain
     * 
     * **Note**: For security reasons, we can only trigger a connect prompt after a set time from the user
     * triggering the update. As a result we need the connect prompt callback param. If too much time has
     * passed and we are unable to call the prompt, we call this to get the user to trigger another action
     * so that we can actually continue the update.
     * @param progress a callback to provide updates on the current progress
     * @param connectPrompt called to get the user to trigger another event so we can show the connect prompt
     * @returns True if the update was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     * @throws OperationNotSupportedError if the target does not support updating the firmware
     * @throws ErrorUpdatingBrainGolden if there was an error while updating the golden firmware
     * @throws ErrorUpdatingBrainBoot if there was an error while updating the main firmware
     * @throws ErrorUpdatingBrainAssets if there was an error while updating the assets
     */
    function updateFirmware(progress, connectPrompt) {
      this.checkSupported();
      this.checkRequiredConnection();
      this.checkRequiredBrainConnection();
      throw new Error("Method not implemented.");
    }
  }, {
    key: "updateNeededBrain",
    get: function get() {
      return this._needsUpdateStateBrain === _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate;
    }
  }, {
    key: "updateNeededController",
    get: function get() {
      return this._needsUpdateStateController === _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate;
    }
  }, {
    key: "checkUpdateNeeded",
    value: function () {
      var _checkUpdateNeeded = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(skipChecks) {
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              _context22.next = 2;
              return this.checkUpdateNeededBrain(skipChecks);
            case 2:
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIM) {
                _context22.next = 5;
                break;
              }
              _context22.next = 5;
              return this.checkUpdateNeededController();
            case 5:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this);
      }));
      function checkUpdateNeeded(_x8) {
        return _checkUpdateNeeded.apply(this, arguments);
      }
      return checkUpdateNeeded;
    }()
  }, {
    key: "checkUpdateNeededBrain",
    value: function () {
      var _checkUpdateNeededBrain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(skipChecks) {
        var fw, manifest, serverVersion, needsUpdate;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              if (!(this.isDeviceBrain || this.isBrainConnected || skipChecks)) {
                _context23.next = 41;
                break;
              }
              log.debug("checkUpdateNeededBrain: Checking if brain needs update");
              if (!skipChecks) {
                _context23.next = 5;
                break;
              }
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate;
              return _context23.abrupt("return");
            case 5:
              log.debug("checkUpdateNeededBrain called");
              if (!(this._needsUpdateStateBrain !== _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure)) {
                _context23.next = 8;
                break;
              }
              return _context23.abrupt("return");
            case 8:
              log.debug("checking if in DFU mode");
              if (!this._inDFUMode) {
                _context23.next = 13;
                break;
              }
              log.debug("brain in DFU - needs update");
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate;
              return _context23.abrupt("return");
            case 13:
              log.debug("checking asset validity");
              if (!this.assetInvalid) {
                _context23.next = 18;
                break;
              }
              log.info("corrupt asset data - needs update");
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate;
              return _context23.abrupt("return");
            case 18:
              log.debug("loading firmware to check version");
              _context23.next = 21;
              return this.loadFirmware();
            case 21:
              fw = _context23.sent;
              log.debug("firmware loaded");
              manifest = JSON.parse(new TextDecoder().decode(fw.getFile("manifest.json").data));
              log.debug("manifest:", manifest);
              if (this.brainVersionSystem) {
                _context23.next = 28;
                break;
              }
              _context23.next = 28;
              return this.fetchBrainInfo();
            case 28:
              if (this.brainVersionSystem) {
                _context23.next = 30;
                break;
              }
              throw new Error("unable to get brain version");
            case 30:
              log.debug("brain version:", this.brainVersionSystem.toInternalString());
              _context23.next = 33;
              return this.getServerVersion();
            case 33:
              serverVersion = _context23.sent;
              log.debug("server version:", serverVersion.toInternalString());
              needsUpdate = serverVersion.compare(this.brainVersionSystem) > 0 || this.checkCPUVersionMismatch();
              log.trace("needsUpdate:", needsUpdate);
              this._needsUpdateStateBrain = needsUpdate ? _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate : _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.UpToDate;
              log.debug("brain update needed state:", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions[this._needsUpdateStateBrain]);
              _context23.next = 42;
              break;
            case 41:
              log.debug("checkUpdateNeededBrain: Not a brain device and no brain connected, skipping check");
            case 42:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function checkUpdateNeededBrain(_x9) {
        return _checkUpdateNeededBrain.apply(this, arguments);
      }
      return checkUpdateNeededBrain;
    }()
    /**
     * checks to see if there is a mismatch between the CPU versions
     * @returns true if there is a mismatch, false otherwise
     */
  }, {
    key: "checkCPUVersionMismatch",
    value: function checkCPUVersionMismatch() {
      return false;
    }

    /**
     * checks to see if the controller needs an update and sets the class flag based on the info
     * @returns promise that resolves when the check is complete
     */
  }, {
    key: "checkUpdateNeededController",
    value: (function () {
      var _checkUpdateNeededController = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24() {
        var fwData, atmelLatestVersion, radioLatestVersion, needsUpdateAtmel, needsUpdateRadio, needsUpdate;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              if (!this.isDeviceControllerWithFirmware) {
                _context24.next = 19;
                break;
              }
              if (!(this._needsUpdateStateController !== _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure)) {
                _context24.next = 3;
                break;
              }
              return _context24.abrupt("return");
            case 3:
              _context24.next = 5;
              return this.getControllerFirmwareData();
            case 5:
              fwData = _context24.sent;
              atmelLatestVersion = fwData.atmel.version;
              radioLatestVersion = fwData.radio.version;
              if (!(!this.controllerVersionAtmel || !this.controllerVersionRadio)) {
                _context24.next = 11;
                break;
              }
              _context24.next = 11;
              return this.fetchControllerInfo();
            case 11:
              if (this.controllerVersionAtmel) {
                _context24.next = 13;
                break;
              }
              throw new Error("unable to get controller version");
            case 13:
              needsUpdateAtmel = atmelLatestVersion.compare(this.controllerVersionAtmel) > 0;
              needsUpdateRadio = !this.controllerVersionRadio || radioLatestVersion.compare(this.controllerVersionRadio) > 0;
              needsUpdate = needsUpdateAtmel || needsUpdateRadio;
              log.debug("needsUpdate:", needsUpdate, "needsUpdateAtmel:", needsUpdateAtmel, "needsUpdateRadio:", needsUpdateRadio);
              this._needsUpdateStateController = needsUpdate ? _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.NeedsUpdate : _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.UpToDate;
              log.debug("controller update needed state:", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions[this._needsUpdateStateController]);
            case 19:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function checkUpdateNeededController() {
        return _checkUpdateNeededController.apply(this, arguments);
      }
      return checkUpdateNeededController;
    }()
    /**
     * Checks what boot source is used. This should only be used with IQ2/EXP/V5
     * @returns where the brain was booted from
     */
    )
  }, {
    key: "checkBootSource",
    value: function checkBootSource() {
      if (!this.isSupported || !this.isConnected || this.isDeviceBrain) {
        return undefined;
      }
      if (this.romBootloaderActive) {
        return VEXDeviceBootSource.ROM_BL;
      } else if (this.ramBootloaderActive) {
        return VEXDeviceBootSource.RAM_BL;
      }
      if (this.sysFlags[0] == 0) {
        return VEXDeviceBootSource.PRIMARY;
      } else if (this.sysFlags[0] == 0x80) {
        return VEXDeviceBootSource.GOLDEN;
      } else if (this.sysFlags[0] == 0xFF) {
        return VEXDeviceBootSource.SDCARD;
      }
      return VEXDeviceBootSource.UNKNOWN;
    }

    /**
     * Checks if the golden image needs to be updated. This should only be
     * used with IQ2/EXP/V5
     * @returns false if the golden image needs to be updated
     */
  }, {
    key: "checkGoldenImage",
    value: function checkGoldenImage() {
      if (!this.isSupported || !this.isConnected || this.isDeviceBrain) {
        return undefined;
      }

      // sysFlags[1] has qspi boot status
      return this.sysFlags[1] & 0x02 ? true : false;
    }

    /**
     * this is used to update part of a VEX Brain. This should only be used with
     * a IQ2/EXP/V5 Brain and AI Vision AI Model
     * @param bin the binary data to load
     * @param updateTarget the target of the update
     * @param progressCB progress update callback
     * @returns true if the update was a success
     * @throws NoBrainConnectedError if there is no VEX Brain connected
     */
  }, {
    key: "updateBrain",
    value: (function () {
      var _updateBrain = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(bin, updateTarget, progressCB, vid, address) {
        var _this9 = this;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              this.checkRequiredBrainConnection();
              return _context25.abrupt("return", new Promise(function (resolve, reject) {
                if (updateTarget === 0) {
                  _this9.downloadTargetSet(VexSerialDevice.FILE_TARGET_A1);
                } else if (updateTarget === 1) {
                  _this9.downloadTargetSet(VexSerialDevice.FILE_TARGET_B1);
                } else if (updateTarget === 0xB2) {
                  _this9.downloadTargetSet(VexSerialDevice.FILE_TARGET_B2);
                } else if (updateTarget === 99 || updateTarget === 6) {
                  _this9.downloadTargetSet(VexSerialDevice.FILE_TARGET_FLASH);
                } else {
                  log.debug("unexpected update target:", updateTarget);
                }
                if (address !== undefined) {
                  log.warn("optional set download address to", address);
                  _this9.downloadAddressSet(address);
                }
                _this9.downloadProgramData("null", bin, undefined, undefined, progressCB, function (result) {
                  resolve(result);
                  _this9.downloadTargetSet(VexSerialDevice.FILE_TARGET_QSPI);
                  _this9.downloadAddressSet(VexSerialDevice.USR_ADDRESS);
                }, undefined, vid);
              }));
            case 2:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function updateBrain(_x10, _x11, _x12, _x13, _x14) {
        return _updateBrain.apply(this, arguments);
      }
      return updateBrain;
    }()
    /**
     * force update a device connected to the specified port
     * @param deviceId 
     * @param deviceUpdateDelay 
     */
    )
  }, {
    key: "forceDeviceUpdate",
    value: function forceDeviceUpdate(deviceId, deviceUpdateDelay) {
      // TODO: finish this?
    }
  }, {
    key: "clearLoadedFirmware",
    value: function clearLoadedFirmware() {
      this._fw = null;
    }

    /**
     * configure which firmware channel should be used when checking the version online
     * @param channel the channel to use
     */
  }, {
    key: "setFirmwareChannel",
    value: (function () {
      var _setFirmwareChannel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(channel, skipChecks) {
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              if (!(this._fwChannel !== channel || skipChecks)) {
                _context26.next = 9;
                break;
              }
              log.debug("firmware channel changed - needs update");
              this.clearLoadedFirmware();
              this._fwChannel = channel;
              // We need to ensure we check if the controller or brain need updated
              this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure;
              this._needsUpdateStateController = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure;
              if (!(this.connected || skipChecks)) {
                _context26.next = 9;
                break;
              }
              _context26.next = 9;
              return this.checkUpdateNeeded(skipChecks);
            case 9:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function setFirmwareChannel(_x15, _x16) {
        return _setFirmwareChannel.apply(this, arguments);
      }
      return setFirmwareChannel;
    }()
    /**
     * Get instance of VexFW for the configured channel and platform
     * @param progressCB callback that reports download progress of the vexos file
     * @returns instance of VexFW to use to get firmware data
     */
    )
  }, {
    key: "loadFirmware",
    value: (function () {
      var _loadFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(progressCB) {
        var sendProgress, latest;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              sendProgress = function sendProgress(progress) {
                log.debug("loadFirmwareFile progress:", progress);
                if (progressCB) {
                  progressCB(progress);
                }
              };
              if (!(this._fw && this._fw.isLoaded())) {
                _context27.next = 4;
                break;
              }
              log.debug("found existing firmware data loaded");
              return _context27.abrupt("return", this._fw);
            case 4:
              // TODO: make sure the FW class is correct
              if (!this._fw) {
                log.debug("creating new FW object");
                this._fw = this.createVexFWInstance();
              }

              // TODO: preload/cache the firmware?
              log.debug("fetching version info from server - channel", _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.VEXosFirmwareChannelType[this._fwChannel]);
              _context27.next = 8;
              return this._fw.getVexosVersions();
            case 8:
              latest = this._fw.getLatest(this._fwChannel);
              log.debug("loading the vexos file");
              _context27.next = 12;
              return this._fw.downloadFirmware(latest.name, this._fwChannel, sendProgress);
            case 12:
              return _context27.abrupt("return", this._fw);
            case 13:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function loadFirmware(_x17) {
        return _loadFirmware.apply(this, arguments);
      }
      return loadFirmware;
    }())
  }, {
    key: "getServerVersion",
    value: function () {
      var _getServerVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28(skipChecks) {
        var fw, latest;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              _context28.next = 2;
              return this.loadFirmware();
            case 2:
              fw = _context28.sent;
              if (skipChecks) {
                this._fwChannel = _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.VEXosFirmwareChannelType.BETA;
              }
              latest = fw.getLatest(this._fwChannel);
              return _context28.abrupt("return", new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(latest.major, latest.minor, latest.build, latest.beta));
            case 6:
            case "end":
              return _context28.stop();
          }
        }, _callee28, this);
      }));
      function getServerVersion(_x18) {
        return _getServerVersion.apply(this, arguments);
      }
      return getServerVersion;
    }()
    /**
     * creates a clean new instance of the VexFW class for the current platform
     */
  }, {
    key: "sendUserData",
    value:
    //#endregion firmware file data

    //#region user data
    /**
     * This will send the provided data to the user data channel on the brain
     * @param data the string to send to the connected brain
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    function sendUserData(data) {
      this.checkSupported();
      this.checkRequiredConnection();
      throw new Error("Method not implemented.");
    }
    //#endregion user data

    //#region project controls
    /**
     * this will tell the brain to play the program loaded in the specified slot.
     * @param slot the slot to play. 0 indexed
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
  }, {
    key: "play",
    value: function () {
      var _play = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29(slot) {
        var programName;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              programName = '___s_' + ('00' + slot.toString(10)).substr(-2, 2);
              return _context29.abrupt("return", this.runProgram(programName, VexSerialDevice.VID.USER));
            case 2:
            case "end":
              return _context29.stop();
          }
        }, _callee29, this);
      }));
      function play(_x19) {
        return _play.apply(this, arguments);
      }
      return play;
    }()
    /**
     * this will tell the brain to run the specified system program slot.
     * @param slot the slot to play. 0 indexed
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
  }, {
    key: "runSystemProgram",
    value: (function () {
      var _runSystemProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30(slot) {
        var programName;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              programName = '___v_' + ('00' + slot.toString(10)).substr(-2, 2);
              return _context30.abrupt("return", this.runProgram(programName, VexSerialDevice.VID.SYS));
            case 2:
            case "end":
              return _context30.stop();
          }
        }, _callee30, this);
      }));
      function runSystemProgram(_x20) {
        return _runSystemProgram.apply(this, arguments);
      }
      return runSystemProgram;
    }()
    /**
     * this will tell the brain to run the specified program.
     * @param program the project name to run. This does not include the .bin extension
     * @param vid the VID to use. This is either VexSerialDevice.VID.SYS or VexSerialDevice.VID.USER
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "runProgram",
    value: (function () {
      var _runProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31(program, vid) {
        var _this10 = this;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              _context31.next = 4;
              return this.disablePollingController();
            case 4:
              return _context31.abrupt("return", new Promise(function (resolve, reject) {
                var name = program + '.bin';
                _this10.writeDataAsync(_this10.cdc.V5_Cdc2FileLoadAndRun(vid, 0, name)).then(function () {
                  resolve(true);
                })["catch"](function () {
                  reject();
                })["finally"](function () {
                  _this10.enablePollingController();
                });
              }));
            case 5:
            case "end":
              return _context31.stop();
          }
        }, _callee31, this);
      }));
      function runProgram(_x21, _x22) {
        return _runProgram.apply(this, arguments);
      }
      return runProgram;
    }()
    /**
     * this will tell the brain to stop a running program
     * @returns true if the process was a success
     * @throws WebSerialUnsupportedError if Web Serial is not supported on your browser
     * @throws NoBrainConnectedError if there is not open connection
     */
    )
  }, {
    key: "stop",
    value: function stop() {
      var _this11 = this;
      this.checkSupported();
      this.checkRequiredConnection();
      return new Promise(function (resolve, reject) {
        _this11.writeDataAsync(_this11.cdc.V5_Cdc2FileLoadAndRun(VexSerialDevice.VID.USER, VexSerialDevice.OPTIONS.LOAD_STOP, 'null')).then(function () {
          resolve(true);
        })["catch"](function () {
          reject();
        });
      });
    }
  }, {
    key: "isProjectRunning",
    value: function isProjectRunning() {
      var _this12 = this;
      this.checkSupported();
      this.checkRequiredConnection();
      return new Promise(function (resolve, reject) {
        _this12.brainGetSystemFlags().then(function (flags) {
          log.debug("current program:", _this12.currentProgram.toString(16));
          // 0 - is no project running
          // 1-8 is user projects
          // 9 - drive program
          // 10 - button coding
          // 11 - REPL Mode program
          resolve(_this12.currentProgram !== 0);
        })["catch"](function () {
          reject();
        });
      });
    }
    //#endregion project controls

    //#region downloads
    /**
     * writes the file to the connected robot
     * @param filename the name of the file to write to the robot
     * @param data the file contents
     * @param progressCallback progress callback for how the write is going
     * @param vid optional vid for where to write the file
     */
  }, {
    key: "saveFileToRobot",
    value: function () {
      var _saveFileToRobot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(filename, data, progressCallback, vid) {
        return _regeneratorRuntime().wrap(function _callee32$(_context32) {
          while (1) switch (_context32.prev = _context32.next) {
            case 0:
              return _context32.abrupt("return", this.downloadDataAsync(filename, data, function (progressValue, current, total) {
                if (progressCallback) {
                  progressCallback(progressValue);
                }
              }, vid));
            case 1:
            case "end":
              return _context32.stop();
          }
        }, _callee32, this);
      }));
      function saveFileToRobot(_x23, _x24, _x25, _x26) {
        return _saveFileToRobot.apply(this, arguments);
      }
      return saveFileToRobot;
    }()
    /**
     * Generic function for reading file from the robot. This is so we don't
     * need to have a separate function for each file type/location.
     * @param filename the name of the file to read from the robot
     * @param progressCallback progress callback for how the read is going
     * @param vid optional vid for where to find the file
     * @returns a promise that resolves to the file data as an Uint8Array or null if the file does not exist
     */
  }, {
    key: "readFileFromRobot",
    value: (function () {
      var _readFileFromRobot = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33(filename, progressCallback, vid) {
        var _this13 = this;
        var robotFiles, targetFile;
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              log.info("readFileFromRobot called for:", filename, vid);
              _context33.next = 3;
              return this.getDirectory(vid);
            case 3:
              robotFiles = _context33.sent;
              log.debug("readFileFromRobot - file on robot:", robotFiles);
              targetFile = robotFiles.find(function (file) {
                return file.name === filename;
              });
              log.debug("readFileFromRobot - target file:", targetFile);
              if (targetFile) {
                _context33.next = 9;
                break;
              }
              return _context33.abrupt("return", null);
            case 9:
              return _context33.abrupt("return", new Promise(function (resolve, reject) {
                _this13.uploadData(filename, targetFile.size, progressCallback, function (success, data) {
                  if (success) {
                    resolve(data);
                  } else {
                    reject(new Error("error reading file"));
                  }
                }, vid);
              }));
            case 10:
            case "end":
              return _context33.stop();
          }
        }, _callee33, this);
      }));
      function readFileFromRobot(_x27, _x28, _x29) {
        return _readFileFromRobot.apply(this, arguments);
      }
      return readFileFromRobot;
    }())
  }, {
    key: "downloadProgram",
    value: function () {
      var _downloadProgram = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35(data, info, progressCallback) {
        var _this14 = this;
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              this.checkSupported();
              this.checkRequiredConnection();
              if (!(info.slot < 0 || info.slot > 7)) {
                _context35.next = 5;
                break;
              }
              log.warn("slot is out of range");
              return _context35.abrupt("return", false);
            case 5:
              return _context35.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34(resolve, reject) {
                  var buffer, path, ini, _iterator, _step, port, _iterator2, _step2, _port, controllerKey, vmUpdateNeeded, downloadState, vmProgress, progProgress, callBackAggregator, callBackProgramDownload, callBackVMDownload, extType, iniFile, meta, metaData, vmResult, linkInfo, autorun;
                  return _regeneratorRuntime().wrap(function _callee34$(_context34) {
                    while (1) switch (_context34.prev = _context34.next) {
                      case 0:
                        buffer = new Uint8Array(data);
                        path = "slot_".concat(info.slot + 1); // create iniFile
                        ini = new _VexINI__WEBPACK_IMPORTED_MODULE_5__.VexINI();
                        ini.programSlotSet(info.slot);
                        ini.programNameSet(info.name);
                        ini.programDescriptionSet(info.description);
                        ini.programIconSet(info.icon);
                        ini.projectIdeSet(info.ide);
                        _iterator = _createForOfIteratorHelper(info.ports);
                        try {
                          for (_iterator.s(); !(_step = _iterator.n()).done;) {
                            port = _step.value;
                            if (port && port.port >= 1 && port.port <= 21 && port.label) {
                              ini.addPortConfig(port.port, port.label);
                            }
                          }
                        } catch (err) {
                          _iterator.e(err);
                        } finally {
                          _iterator.f();
                        }
                        _iterator2 = _createForOfIteratorHelper(info.triports);
                        try {
                          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                            _port = _step2.value;
                            if (_port && _port.port >= 1 && _port.port <= 21 && _port.subport >= 0 && _port.subport <= 7 && _port.label) {
                              ini.addAdiPortConfig(_port.port, _port.subport, _port.label);
                            }
                          }
                        } catch (err) {
                          _iterator2.e(err);
                        } finally {
                          _iterator2.f();
                        }
                        if (info.controller1) {
                          for (controllerKey in info.controller1) {
                            ini.addControllerConfig(0, controllerKey, info.controller1[controllerKey]);
                          }
                        }
                        if (info.controller2) {
                          for (controllerKey in info.controller2) {
                            ini.addControllerConfig(1, controllerKey, info.controller2[controllerKey]);
                          }
                        }
                        vmUpdateNeeded = false;
                        downloadState = _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.None;
                        vmProgress = 0;
                        progProgress = 0;
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
                          downloadState = _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.DownloadingProgram;
                          progProgress = progress;
                          callBackAggregator(progress);
                        };
                        callBackVMDownload = function callBackVMDownload(data) {
                          downloadState = data.state;
                          if (data.state == _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.DownloadingVM) {
                            vmUpdateNeeded = true;
                            vmProgress = data.progress;
                            callBackAggregator(data.progress);
                          }
                        };
                        extType = 0;
                        iniFile = new TextEncoder().encode(ini.createIni());
                        log.debug("stopping current project on the brain");
                        _context34.next = 26;
                        return _this14.stop();
                      case 26:
                        _context34.next = 28;
                        return _this14.disablePollingController();
                      case 28:
                        log.debug("checking radio mode");
                        _context34.next = 31;
                        return _this14.controllerSetDownloadChannel();
                      case 31:
                        log.debug("program options/ini parameters : ", info);
                        if (!(info.language === "python")) {
                          _context34.next = 56;
                          break;
                        }
                        log.debug("checking python");
                        // check and install/update the Python VM if needed
                        meta = _this14.getVmMeta();
                        if (!(meta instanceof Promise)) {
                          _context34.next = 41;
                          break;
                        }
                        _context34.next = 38;
                        return meta;
                      case 38:
                        _context34.t0 = _context34.sent;
                        _context34.next = 42;
                        break;
                      case 41:
                        _context34.t0 = meta;
                      case 42:
                        metaData = _context34.t0;
                        _context34.next = 45;
                        return _this14.checkAndInstallPythonVm(metaData.crc, metaData.version, callBackVMDownload);
                      case 45:
                        vmResult = _context34.sent;
                        log.debug("python vm result:", vmResult);
                        if (vmResult.err !== 0) {
                          resolve(false); // ERROR_DOWNLOAD
                        }
                        _context34.next = 50;
                        return _this14.delay(1000);
                      case 50:
                        // configure the download for the 
                        linkInfo = _this14.getVMLinkInfo();
                        _this14.downloadAddressSet(linkInfo.loadAddress);
                        _this14.linkFileSet(linkInfo.linkFileVID, linkInfo.linkFile);
                        extType = linkInfo.extType;
                        _context34.next = 57;
                        break;
                      case 56:
                        // this should not be needed, but it should not hurt
                        _this14.downloadAddressSet(VexSerialDevice.USR_ADDRESS);
                      case 57:
                        // download the user program
                        log.info("downloading user project", _this14.downloadAddress);
                        autorun = info && info.autorun ? info.autorun : false;
                        _this14.downloadAutoRunSet(autorun);
                        _this14.downloadProgramData(path, buffer, iniFile, undefined, callBackProgramDownload, function (status) {
                          // put internal autorun back to default
                          _this14.downloadAutoRunSet(true);
                          _this14.downloadAddressSet(VexSerialDevice.USR_ADDRESS);

                          // we don't want to poll the controller during the download process
                          // but that is complete now, so restore the polling
                          _this14.enablePollingController();
                          if (status === true) resolve(true); // SUCCESS
                          else resolve(false); // ERROR_DOWNLOAD
                        }, extType);
                      case 61:
                      case "end":
                        return _context34.stop();
                    }
                  }, _callee34);
                }));
                return function (_x33, _x34) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 6:
            case "end":
              return _context35.stop();
          }
        }, _callee35, this);
      }));
      function downloadProgram(_x30, _x31, _x32) {
        return _downloadProgram.apply(this, arguments);
      }
      return downloadProgram;
    }() //#endregion downloads
    //#region brain files
    /**
     * get catalog (ie. user programs) from V5
     * This version a little different from the old rmserial
     * as it returns raw files as well as programs
     */
  }, {
    key: "list",
    value: function list() {
      var _this15 = this;
      return new Promise(function (resolve, reject) {
        _this15.getDirectory().then(function (entries) {
          var programInfo = [];
          var filterIni = function filterIni(entry) {
            var re = /.ini$/;
            return entry.name.search(re) > 0;
          };

          // Find all the ini files
          var iniFiles = entries.filter(filterIni);
          var date = new Date();

          // Noe make sure we have a corresponding bin file
          var _loop = function _loop() {
            // get the base name
            var re = /(.+?)(\.[^.]*$|$)/;
            var name = re.exec(iniFiles[i].name)[1];
            var binfile = entries.filter(function (entry) {
              return entry.name === name + '.bin';
            });

            // did we find it ?
            if (binfile && binfile.length === 1) {
              // Date needs milliseconds, we have seconds
              date.setTime(binfile[0].timestamp * 1000);
              var _p = {
                name: name,
                binfile: binfile[0].name,
                size: iniFiles[i].size + binfile[0].size,
                slot: -1,
                time: date.toLocaleString(),
                requestedSlot: -1
              };
              programInfo.push(_p);
            }
          };
          for (var i = 0; i < iniFiles.length; i++) {
            _loop();
          }
          _this15.getUserProgramStatus(programInfo).then(function (programs) {
            resolve({
              files: entries,
              programs: programs
            });
          });
        });
      });
    }

    /**
     * Delete specified file from the robot. 
     * @param filename the name of the file to remove
     * @param vid the VID of the file to remove
     * @returns true if the file was deleted
     */
  }, {
    key: "deleteFile",
    value: function deleteFile(filename, vid) {
      var _this16 = this;
      return new Promise(function (resolve, reject) {
        _this16.writeDataAsync(_this16.cdc.query1()).then(function (reply) {
          return _this16.writeDataAsync(_this16.cdc.V5_Cdc2FileErase(vid, 0, filename));
        }).then(function (reply) {
          return _this16.writeDataAsync(_this16.cdc.V5_Cdc2FileExit(0), {
            timeout: 1000
          });
        }).then(function (reply) {
          resolve(true);
        })["catch"](function (reply) {
          resolve(false);
        });
      });
    }

    /**
     * Delete all files with matching basename
     * @param basename 
     */
  }, {
    key: "delete",
    value: function _delete(basename) {
      var _this17 = this;
      return new Promise(function (resolve, reject) {
        _this17.writeDataAsync(_this17.cdc.query1()).then(function (reply) {
          return _this17.writeDataAsync(_this17.cdc.V5_Cdc2FileErase(VexSerialDevice.VID.USER, VexSerialDevice.OPTIONS.ERASE_AL_BNAME, basename));
        }).then(function (reply) {
          return _this17.writeDataAsync(_this17.cdc.V5_Cdc2FileExit(0), {
            timeout: 1000
          });
        }).then(function (reply) {
          resolve(SUCCESS);
        })["catch"](function (reply) {
          resolve(ERROR_DELETE);
        });
      });
    }

    /**
     * Send new screen/dashboard on the V5
     * @param id 
     */
  }, {
    key: "brainActivateScreen",
    value: function brainActivateScreen(id, port) {
      var _this18 = this;
      return new Promise(function (resolve, reject) {
        _this18.writeDataAsync(_this18.cdc.V5_Cdc2DashSelect(id, port)).then(function (reply) {
          resolve(id);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }

    /**
     * Get directory from user folder on V5
     */
  }, {
    key: "getDirectory",
    value: function getDirectory(vid) {
      var _this19 = this;
      return new Promise(function (resolve, reject) {
        var entries = [];
        vid = vid === undefined ? VexSerialDevice.VID.USER : vid;
        _this19.lastStatus = VexSerialDevice.STATUS_GOOD;

        // get whole directory
        _this19.writeDataAsync(_this19.cdc.query1()).then(function (reply) {
          return _this19.writeDataAsync(_this19.cdc.V5_Cdc2FileDir(vid, 0));
        }).then(function (reply) {
          var rep = _this19.decodeFileGetDirectoryReply(reply);
          if (rep.ack === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            var dirCount = rep.count;
            var dirEntryIndex = 0;

            // Now iterate to get all entries
            return new Promise(function (resolve, reject) {
              // Get one dir entry
              var _getDirEntry = function getDirEntry() {
                // send command
                _this19.writeDataAsync(_this19.cdc.V5_Cdc2FileDirEntry(dirEntryIndex)).then(function (reply) {
                  var rep = _this19.decodeFileGetDirectoryEntryReply(reply);
                  if (rep.ack === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                    dirEntryIndex++;

                    //this.log( rep.name );

                    entries.push(rep);
                    if (dirEntryIndex >= dirCount) {
                      resolve(reply);
                    } else {
                      _getDirEntry();
                    }
                  } else {
                    reject(reply);
                  }
                })["catch"](function (reply) {
                  reject(reply);
                });
              };

              // Get first entry
              if (dirCount > 0) {
                _getDirEntry();
              } else {
                resolve(undefined);
              }
            });
          } else {
            _this19.decodeFileNack(rep.ack);
          }
        }).then(function (reply) {
          resolve(entries);
        })["catch"](function (reply) {
          resolve([]);
        });
      });
    }

    /*----------------------------------------------------------------------------*/

    /**
     * Get user program slots
     */
  }, {
    key: "getUserProgramStatus",
    value: function getUserProgramStatus(programs) {
      var _this20 = this;
      return new Promise(function (resolve, reject) {
        if (programs === undefined || programs.length === 0) {
          resolve(undefined);
          return;
        }
        _this20.lastStatus = VexSerialDevice.STATUS_GOOD;

        // get whole directory
        _this20.writeDataAsync(_this20.cdc.query1()).then(function (reply) {
          // Now iterate to get all entries
          return new Promise(function (resolve, reject) {
            var programEntryIndex = 0;

            // Get one dir entry
            var _getUserProgramEntry = function getUserProgramEntry() {
              // send command
              _this20.writeDataAsync(_this20.cdc.V5_Cdc2FileUserStatus(VexSerialDevice.VID.USER, 0, programs[programEntryIndex].binfile)).then(function (reply) {
                var rep = _this20.decodeFileGetUserStatusReply(reply);
                if (rep.ack === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                  programs[programEntryIndex].slot = rep.slot;
                  programs[programEntryIndex].requestedSlot = rep.requestedSlot;
                  programEntryIndex++;
                  if (programEntryIndex >= programs.length) {
                    resolve(undefined);
                  } else {
                    _getUserProgramEntry();
                  }
                } else {
                  reject(undefined);
                }
              })["catch"](function (reply) {
                reject(undefined);
              });
            };

            // Get first entry
            if (programs.length > 0) {
              _getUserProgramEntry();
            }
          });
        }).then(function () {
          resolve(programs);
        })["catch"](function () {
          resolve([]);
        });
      });
    }
    //#endregion brain files

    //#region file metadata helpers
    /**
     * Decode a get metadata reply, same format as dir entry
     * @param msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileGetMetadataReply",
    value: function decodeFileGetMetadataReply(msg) {
      var rep = undefined;
      var tmp = this.decodeFileGetDirectoryEntryReply(msg);
      if (tmp !== undefined) {
        rep = {
          ack: tmp.ack,
          linkvid: tmp.index,
          size: tmp.size,
          loadAddr: tmp.loadAddr,
          crc32: tmp.crc32,
          type: tmp.type,
          timestamp: tmp.timestamp,
          version: tmp.version,
          linkname: tmp.name
        };
      }
      return rep;
    }

    /**
     * Get metadata for named file
     * @param name the name of the file
     * @param vid the vid for the file
     * @returns the metadata for the specified file
     * @throws ErrorWriteResponseTimeout
     */
  }, {
    key: "getFileMetadata",
    value: function getFileMetadata(name, vid) {
      var _this21 = this;
      // was there any folder at all ?
      if (name.match('^....\/') !== null) {
        name = name.slice(5);
      }
      return new Promise(function (resolve, reject) {
        _this21.lastStatus = VexSerialDevice.STATUS_GOOD;
        log.debug("checking system response before checking the metadata");
        _this21.writeDataAsync(_this21.cdc.query1()).then(function (value) {
          log.debug("checking metadata for file:", name);
          _this21.writeDataAsync(_this21.cdc.V5_Cdc2FileMetadataGet(vid, 0, name), {
            // for some reason the response takes noticeably longer when connected
            // via the controller
            timeout: _this21.isDeviceBrain ? 1000 : 10000,
            // try again if we don't get a response
            retryOnTimeout: true,
            // make sure we know if the error was a timeout
            throwTimeout: true
          }).then(function (metadataResp) {
            log.debug("metadataResp:", metadataResp);
            var rep = _this21.decodeFileGetMetadataReply(metadataResp);
            if (rep.ack === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
              resolve(rep);
            } else {
              resolve(undefined);
            }
          })["catch"](function (err) {
            log.debug("getFileMetadata error:", err);
            if (err instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout) {
              reject(err);
            }
            resolve(undefined);
          });
        })["catch"](function (err) {
          log.debug("error while checking alive:", err);
          if (err instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout) {
            reject(err);
          }
          resolve(undefined);
        });
      });
    }
    //#endregion file metadata helpers

    //#region brain info meta data helpers
    /**
     * Get the robot system flag status
     */
  }, {
    key: "brainGetSystemFlags",
    value: function brainGetSystemFlags() {
      var _this22 = this;
      var canBeConnecting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.checkSupported();
      this.checkRequiredConnection(canBeConnecting);
      log.debug("brainGetSystemFlags");
      this.lastStatus = VexSerialDevice.STATUS_GOOD;
      return new Promise(function (resolve, reject) {
        _this22.writeDataAsync(_this22.cdc.V5_Cdc2FlagsStatus()).then(function (reply) {
          if (reply !== undefined) resolve(_this22.decodeSysFlagsRead(reply));else resolve(undefined);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }

    /**
     * Get the robot system status
     */
  }, {
    key: "brainGetSystemStatus",
    value: function brainGetSystemStatus() {
      var _this23 = this;
      var canBeConnecting = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      this.checkSupported();
      this.checkRequiredConnection(canBeConnecting);
      log.debug("brainGetSystemStatus");
      this.uniqueId = 0;
      return new Promise(function (resolve, reject) {
        _this23.writeDataAsync(_this23.cdc.V5_Cdc2SystemStatus()).then(function (reply) {
          _this23.decodeSysStatusRead(reply);
          resolve(reply);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }
    //#endregion brain info meta data helpers

    //#region Python vm helpers
    /**
     * get information about how to link to the Python VM
     * @returns 
     */
  }, {
    key: "checkPythonVm",
    value: function checkPythonVm(name, crc, version) {
      var _this24 = this;
      return new Promise(function (resolve, reject) {
        _this24.getFileMetadata(name, VexSerialDevice.VID.VEXVM).then(function (metadata) {
          log.debug("metadata:", metadata);
          if (metadata === undefined) {
            // no VM
            // serial.reset();
            log.debug("found no VM");
            resolve({
              exists: false,
              valid: false
            });
          } else {
            log.debug("Python VM metadata: ", JSON.stringify(metadata, null, 2));
            if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR) {
              if (metadata && metadata.version) {
                var robotVersion = Number(metadata.version);
                if (!isNaN(robotVersion) && Number.isFinite(robotVersion)) {
                  var unpackedMajor = robotVersion & 0xFF; // lowest 8 bits: Example 13828097 => 13828097 & 0xFF = 1
                  var unpackedMinor = robotVersion >> 8 & 0xFF; // next 8 bits: Example 13828097 => 13828097 >> 8 = 0
                  var unpackedPatch = robotVersion >> 16; // upper 16 bits: Example 13828097 => 13828097 >> 16 = 211
                  log.debug("VM Version on robot: ".concat(unpackedMajor, ".").concat(unpackedMinor, ".").concat(unpackedPatch));
                }
              }
            } else {
              // TODO: We need to log what VM version we found on the robot
              // But for some reason the way version is packed and unpacked is different on AIR than any other platform.
              // Thus we are only adding it to the AIR for now.
            }
            if (metadata.crc32 === crc && metadata.version === version) {
              // Valid VM
              log.debug("found valid VM");
              resolve({
                exists: true,
                valid: true
              });
            } else {
              // invalid VM
              log.debug("found invalid VM");
              resolve({
                exists: true,
                valid: false
              });
            }
          }
        })["catch"](function (err) {
          log.debug("error on checking VM:", err);
          if (err instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout) {
            log.debug("checkPythonVm timed out. assuming that the VM is valid");
            resolve({
              exists: true,
              valid: true
            });
          }
          log.error("error on checking VM ", err);
          reject({
            err: -1,
            data: err,
            msg: "Error on checking VM"
          });
        });
      });
    }
  }, {
    key: "getPythonVMFile",
    value: function () {
      var _getPythonVMFile = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37() {
        var _this25 = this;
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              return _context37.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(resolve, reject) {
                  var vm_bin_path, vm_bin_path_resolved, response, vm_binary, fileReader, result, _result;
                  return _regeneratorRuntime().wrap(function _callee36$(_context36) {
                    while (1) switch (_context36.prev = _context36.next) {
                      case 0:
                        _context36.prev = 0;
                        vm_bin_path = _this25.getPythonVMResourcePath();
                        if (!(vm_bin_path instanceof Promise)) {
                          _context36.next = 8;
                          break;
                        }
                        _context36.next = 5;
                        return vm_bin_path;
                      case 5:
                        _context36.t0 = _context36.sent;
                        _context36.next = 9;
                        break;
                      case 8:
                        _context36.t0 = vm_bin_path;
                      case 9:
                        vm_bin_path_resolved = _context36.t0;
                        _context36.next = 12;
                        return fetch(vm_bin_path_resolved, {
                          cache: "no-cache"
                        });
                      case 12:
                        response = _context36.sent;
                        _context36.next = 15;
                        return response.blob();
                      case 15:
                        vm_binary = _context36.sent;
                        if (vm_binary !== undefined) {
                          fileReader = new FileReader();
                          fileReader.readAsArrayBuffer(vm_binary);
                          // Load the file data
                          fileReader.onload = function (event) {
                            if (fileReader.readyState === fileReader.DONE) {
                              var binfile = new Uint8Array(fileReader.result);
                              var result = {
                                err: 0,
                                msg: "VM file read successfully!",
                                data: binfile
                              };
                              resolve(result);
                            }
                          };
                          fileReader.onerror = function () {
                            var result = {
                              err: -1,
                              msg: "could not read Python VM from Application's /resources",
                              data: ""
                            };
                            reject(result);
                          };
                        } else {
                          log.error("could not find Python VM in Application's /resources");
                          result = {
                            err: -1,
                            msg: "could not find Python VM from Application's /resources",
                            data: ""
                          };
                          reject(result);
                        }
                        _context36.next = 24;
                        break;
                      case 19:
                        _context36.prev = 19;
                        _context36.t1 = _context36["catch"](0);
                        log.error("Error when reading Python VM from  Application's /resources");
                        _result = {
                          err: -1,
                          msg: "Error when reading Python VM from  Application's /resources",
                          data: ""
                        };
                        reject(_result);
                      case 24:
                      case "end":
                        return _context36.stop();
                    }
                  }, _callee36, null, [[0, 19]]);
                }));
                return function (_x35, _x36) {
                  return _ref3.apply(this, arguments);
                };
              }()));
            case 1:
            case "end":
              return _context37.stop();
          }
        }, _callee37);
      }));
      function getPythonVMFile() {
        return _getPythonVMFile.apply(this, arguments);
      }
      return getPythonVMFile;
    }()
  }, {
    key: "forceInstallPythonVM",
    value: function () {
      var _forceInstallPythonVM = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38(progressCallback) {
        var meta, metaData;
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              meta = this.getVmMeta();
              if (!(meta instanceof Promise)) {
                _context38.next = 7;
                break;
              }
              _context38.next = 4;
              return meta;
            case 4:
              _context38.t0 = _context38.sent;
              _context38.next = 8;
              break;
            case 7:
              _context38.t0 = meta;
            case 8:
              metaData = _context38.t0;
              _context38.next = 11;
              return this.checkAndInstallPythonVm(metaData.crc, metaData.version, progressCallback, true);
            case 11:
            case "end":
              return _context38.stop();
          }
        }, _callee38, this);
      }));
      function forceInstallPythonVM(_x37) {
        return _forceInstallPythonVM.apply(this, arguments);
      }
      return forceInstallPythonVM;
    }()
  }, {
    key: "checkAndInstallPythonVm",
    value: function () {
      var _checkAndInstallPythonVm = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(crc, version, progressCallback) {
        var force,
          wasPollingEnabled,
          VMCheckPromise,
          timeoutPromise,
          postDownloadDelay,
          downloadScale,
          vmCheckResult,
          onProgress,
          vm_content,
          current_ar_setting,
          vid,
          exttype,
          downloadInfoRaw,
          downloadInfo,
          downloadStatus,
          start,
          elapsedPercent,
          postUpdateInfo,
          result,
          _result2,
          _result3,
          _args39 = arguments;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              force = _args39.length > 3 && _args39[3] !== undefined ? _args39[3] : false;
              if (progressCallback) {
                progressCallback({
                  "progress": 0,
                  "state": _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.CheckingVM
                });
              }

              // There have been issues where we start to request the VM information,
              // but we don't get a response back from the brain. When this happens
              // VEXcode basically gets stuck in a state where it thinks it is downloading
              // a project. This blocks all future downloads until the app is restarted.
              // to prevent that, we have added a simple timeout. We use the native
              // promise.race feature to handle returning either the VM result or the
              // timeout error to force a failed download.
              wasPollingEnabled = this._enableControllerPolling;
              _context39.next = 5;
              return this.disablePollingController();
            case 5:
              // this is the normal promise used to get the VM data from the brain
              VMCheckPromise = this.checkPythonVm("python_vm.bin", crc, version); // this is the timeout promise, used to limit the check to a max of 2 seconds
              timeoutPromise = new Promise(function (resolve, reject) {
                setTimeout(function () {
                  resolve(null);
                }, 12000);
              });
              /** how many seconds to wait after the VM download to consider the download complete */
              postDownloadDelay = _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR ? 30 : 0;
              /** scales the download progress to allow for delay after the actual download is completed */
              downloadScale = _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR ? 0.8 : 1.0; // now that we have the promises. use whichever one resolves first.
              _context39.next = 11;
              return Promise.race([VMCheckPromise, timeoutPromise]);
            case 11:
              vmCheckResult = _context39.sent;
              log.info("VM available check : ", vmCheckResult, "force:", force);
              if (!vmCheckResult) {
                _context39.next = 85;
                break;
              }
              if (!(!vmCheckResult.exists || vmCheckResult.exists && !vmCheckResult.valid || force)) {
                _context39.next = 79;
                break;
              }
              log.info("downloading Python VM to brain...");
              // download progress
              onProgress = function onProgress(value, total) {
                if (progressCallback) {
                  progressCallback({
                    "progress": value * downloadScale,
                    "state": _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.DownloadingVM
                  });
                }
              };
              _context39.next = 19;
              return this.getPythonVMFile();
            case 19:
              vm_content = _context39.sent;
              if (!(vm_content && vm_content.err == 0 && vm_content.data)) {
                _context39.next = 77;
                break;
              }
              // save autorun setting
              current_ar_setting = this.downloadAutoRun;
              this.downloadAutoRun = 0;
              // V5 configuration as default
              vid = VexSerialDevice.VID.VEXVM;
              exttype = 0x61;
              downloadInfoRaw = this.getPythonVmDownloadInfo();
              if (!(downloadInfoRaw instanceof Promise)) {
                _context39.next = 32;
                break;
              }
              _context39.next = 29;
              return downloadInfoRaw;
            case 29:
              _context39.t0 = _context39.sent;
              _context39.next = 33;
              break;
            case 32:
              _context39.t0 = downloadInfoRaw;
            case 33:
              downloadInfo = _context39.t0;
              log.debug("downloadInfo:", downloadInfo);
              if (downloadInfo.address !== undefined) {
                this.downloadAddressSet(downloadInfo.address);
              }
              if (downloadInfo.target) {
                this.downloadTargetSet(downloadInfo.target);
              }
              if (downloadInfo.vid) {
                vid = downloadInfo.vid;
              }
              if (downloadInfo.version) {
                // we set this here, it will be reset back to 1 after download
                this.cdc.V5_Cdc2SetFileVersion(downloadInfo.version);
              } else {
                this.cdc.V5_Cdc2SetFileVersion(1);
              }
              log.debug("vid:", vid);

              // TODO: do not try to download the VM over the controller

              // send data to brain
              _context39.prev = 40;
              _context39.next = 43;
              return this.downloadDataAsync('python_vm.bin', vm_content.data, onProgress, vid, exttype);
            case 43:
              downloadStatus = _context39.sent;
              log.debug("VM downloadStatus:", downloadStatus);
              if (downloadStatus) {
                _context39.next = 48;
                break;
              }
              if (wasPollingEnabled) {
                this.enablePollingController();
              }
              throw false;
            case 48:
              if (!(postDownloadDelay > 0)) {
                _context39.next = 61;
                break;
              }
              // need to wait a bit for the brain to process the VM
              start = Date.now();
            case 50:
              if (!(Date.now() - start < postDownloadDelay)) {
                _context39.next = 57;
                break;
              }
              elapsedPercent = (Date.now() - start) / postDownloadDelay;
              if (progressCallback) {
                progressCallback({
                  "progress": 0.8 + elapsedPercent * 0.2,
                  "state": _types_HWEnums__WEBPACK_IMPORTED_MODULE_6__.DownloadState.DownloadingVM
                });
              }
              _context39.next = 55;
              return this.delay(250);
            case 55:
              _context39.next = 50;
              break;
            case 57:
              _context39.next = 59;
              return this.getFileMetadata("python_vm.bin", vid);
            case 59:
              postUpdateInfo = _context39.sent;
              log.debug("post VM update check:", postUpdateInfo);
            case 61:
              // restore autorun setting
              this.downloadAutoRun = current_ar_setting;
              result = {
                err: 0,
                msg: "VM download successful",
                data: downloadStatus
              };
              log.info("VM download successful");
              this.postVMDownloadCleanup();
              if (wasPollingEnabled) {
                this.enablePollingController();
              }
              return _context39.abrupt("return", result);
            case 69:
              _context39.prev = 69;
              _context39.t1 = _context39["catch"](40);
              // restore autorun setting
              this.downloadAutoRun = current_ar_setting;
              _result2 = {
                err: -1,
                msg: "VM download error",
                data: _context39.t1
              };
              log.error("VM download error");
              this.postVMDownloadCleanup();
              if (wasPollingEnabled) {
                this.enablePollingController();
              }
              return _context39.abrupt("return", _result2);
            case 77:
              _context39.next = 83;
              break;
            case 79:
              _result3 = {
                err: 0,
                msg: "valid VM already exists on the brain",
                data: ""
              };
              log.info("valid VM already exists on the brain");
              if (wasPollingEnabled) {
                this.enablePollingController();
              }
              return _context39.abrupt("return", _result3);
            case 83:
              _context39.next = 88;
              break;
            case 85:
              log.error("VM available check failed");
              if (wasPollingEnabled) {
                this.enablePollingController();
              }
              return _context39.abrupt("return", {
                err: -2,
                msg: "VM check failed",
                data: null
              });
            case 88:
            case "end":
              return _context39.stop();
          }
        }, _callee39, this, [[40, 69]]);
      }));
      function checkAndInstallPythonVm(_x38, _x39, _x40) {
        return _checkAndInstallPythonVm.apply(this, arguments);
      }
      return checkAndInstallPythonVm;
    }() //#endregion Python vm helpers
    //#region controller firmware
    // TODO: add options to provide local vexos file
    /**
     * updates a connected IQ2/EXP controller
     * 
     * **Note**: For security reasons, we can only trigger a connect prompt after a set time from the user
     * triggering the update. As a result we need the connect prompt callback param. If too much time has
     * passed and we are unable to call the prompt, we call this to get the user to trigger another action
     * so that we can actually continue the update.
     * @param progressCB callback with update progress information
     * @param connectPrompt called to get the user to trigger another event so we can show the connect prompt
     * @param inDFU true if you want to connect to a controller that is already in DFU mode and needs to be recovered
     * @param force if the firmware should be updated even if it does not need an update
     * @returns a promies that will resolve when the update is complete
     */
  }, {
    key: "controllerUpdate",
    value: function () {
      var _controllerUpdate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(progressCB, connectPrompt) {
        var _this26 = this;
        var inDFU,
          force,
          needsAtmelUpdate,
          needsRadioUpdate,
          needsUpdate,
          radioInUpdateMode,
          updateRadioFirst,
          lastProgress,
          sendProgress,
          fwData,
          atmelLatestVersion,
          radioLatestVersion,
          checkControllerUpdates,
          atmelFWBin,
          radioFWBin,
          _args42 = arguments;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              inDFU = _args42.length > 2 && _args42[2] !== undefined ? _args42[2] : false;
              force = _args42.length > 3 && _args42[3] !== undefined ? _args42[3] : false;
              if (!inDFU) {
                this.checkForConnectedController();
              } else {
                log.debug("skip connection check since we are updating a DFU controller");
              }
              log.info("controllerUpdate called. inDFU:", inDFU, "force:", force);

              // set to true for now for the correct progress reports
              needsAtmelUpdate = true;
              needsRadioUpdate = true;
              needsUpdate = true;
              radioInUpdateMode = false;
              updateRadioFirst = false;
              lastProgress = {
                state: _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.done,
                prog: -1,
                msg: ""
              };
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
                var totalProgress = state === _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.done ? 1 : 0;
                if (needsAtmelUpdate && needsRadioUpdate) {
                  var totalStages = 6;
                  if (updateRadioFirst) {
                    switch (state) {
                      case _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingRadio:
                        totalProgress = (1 + prog) / totalStages;
                        break;
                      case _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForRadio:
                        totalProgress = (2 + prog) / totalStages;
                        break;
                      case _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.EnteringDFU:
                        totalProgress = (3 + prog) / totalStages;
                        break;
                      case _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingAtmel:
                        totalProgress = (4 + prog) / totalStages;
                        break;
                      case _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForReboot:
                        totalProgress = (5 + prog) / totalStages;
                        break;
                      default:
                        totalProgress = (state - 1 + prog) / totalStages;
                        break;
                    }
                  } else {
                    totalProgress = (state - 1 + prog) / totalStages;
                  }
                } else if (needsAtmelUpdate) {
                  var _totalStages = 4;
                  totalProgress = (state - 1 + prog) / _totalStages;
                } else if (needsRadioUpdate) {
                  var _totalStages2 = 3;
                  var offset = (state > 1 ? state - 3 : state) - 1;
                  totalProgress = (offset + prog) / _totalStages2;
                }
                log.debug("sendProgress", _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates[state], totalProgress, msg);
                if (progressCB) {
                  progressCB(state, totalProgress, msg);
                }
              };
              _context42.next = 13;
              return this.getControllerFirmwareData(sendProgress);
            case 13:
              fwData = _context42.sent;
              // log.debug("fwData:", fwData);
              atmelLatestVersion = fwData.atmel.version;
              radioLatestVersion = fwData.radio.version;
              checkControllerUpdates = /*#__PURE__*/function () {
                var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40() {
                  var atmelDeviceVersion, radioDeviceVersion, hasAtmelVersion, hasAtmelOldVersion, hasRadioVersion;
                  return _regeneratorRuntime().wrap(function _callee40$(_context40) {
                    while (1) switch (_context40.prev = _context40.next) {
                      case 0:
                        _context40.next = 2;
                        return _this26.fetchControllerInfo();
                      case 2:
                        // const controllerDeviceVersionRequestPromise = this.controllerVersionsGet();
                        atmelDeviceVersion = _this26.controllerVersionAtmel;
                        radioDeviceVersion = _this26.controllerVersionRadio;
                        try {
                          log.debug("atmel latest:", atmelLatestVersion === null || atmelLatestVersion === void 0 ? void 0 : atmelLatestVersion.toInternalString(), "device:", atmelDeviceVersion === null || atmelDeviceVersion === void 0 ? void 0 : atmelDeviceVersion.toInternalString());
                        } catch (err) {}
                        try {
                          log.debug("radio latest:", radioLatestVersion === null || radioLatestVersion === void 0 ? void 0 : radioLatestVersion.toInternalString(), "device:", radioDeviceVersion === null || radioDeviceVersion === void 0 ? void 0 : radioDeviceVersion.toInternalString());
                        } catch (err) {}
                        hasAtmelVersion = atmelDeviceVersion !== undefined && atmelDeviceVersion !== null; // There is some kind of issue with atmel version 1.0.0.18 where most/all
                        // of the CDC commands don't seem to respond. This causes problems with
                        // the command that gets all the firmware versions. It makes it look like
                        // the radio is in update mode when it might not be. To work around that,
                        // in this case we update the Atmel firmware first. Since we check the
                        // firmware versions after each stage, we can just say that the radio
                        // does not need an update...
                        hasAtmelOldVersion = oldAtmelVersion && hasAtmelVersion && atmelDeviceVersion.compare(oldAtmelVersion) <= 0;
                        hasRadioVersion = radioDeviceVersion !== undefined && radioDeviceVersion !== null; // when we have the old Atmel version, we don't know if the radio is in
                        // update mode, so just assume it is not. It will take 2 update cycles
                        // to actually update if the radio is in fact also in update mode, but
                        // it does end up working. This is such a small edge case since the
                        // 1.0.0.18 version was replaced in September 2022, it does not seem
                        // likely that a controller would have damaged radio firmware and the
                        // old atmel firmware...
                        radioInUpdateMode = !inDFU && !hasRadioVersion && !hasAtmelOldVersion;
                        needsAtmelUpdate = force || !hasAtmelVersion || atmelLatestVersion.compare(atmelDeviceVersion) > 0;
                        needsRadioUpdate = force || !hasRadioVersion || radioLatestVersion.compare(radioDeviceVersion) > 0;
                        needsUpdate = needsAtmelUpdate || needsRadioUpdate;
                        log.debug("needsUpdate:", needsUpdate, "needsAtmelUpdate:", needsAtmelUpdate, "needsRadioUpdate:", needsRadioUpdate, "radioInUpdateMode:", radioInUpdateMode, "hasAtmelOldVersion:", hasAtmelOldVersion);
                      case 14:
                      case "end":
                        return _context40.stop();
                    }
                  }, _callee40);
                }));
                return function checkControllerUpdates() {
                  return _ref4.apply(this, arguments);
                };
              }(); // if we are not in DFU, we should check the versions now
              if (inDFU) {
                _context42.next = 22;
                break;
              }
              _context42.next = 20;
              return checkControllerUpdates();
            case 20:
              _context42.next = 23;
              break;
            case 22:
              log.debug("skipping version checks since we are in DFU mode");
            case 23:
              atmelFWBin = fwData.atmel.bin;
              radioFWBin = fwData.radio.bin;
              if (needsUpdate) {
                _context42.next = 29;
                break;
              }
              log.info("there is nothing to update...");
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.done, 0, "Update Complete");
              return _context42.abrupt("return");
            case 29:
              _context42.prev = 29;
              if (!(!inDFU && radioInUpdateMode)) {
                _context42.next = 39;
                break;
              }
              updateRadioFirst = true;
              log.info("radio stuck in update mode. update radio first");
              this.isUpdatingFirmware = true;
              _context42.next = 36;
              return this.controllerUpdateRadio(sendProgress, radioFWBin);
            case 36:
              _context42.next = 38;
              return checkControllerUpdates();
            case 38:
              this.isUpdatingFirmware = false;
            case 39:
              if (!needsAtmelUpdate) {
                _context42.next = 46;
                break;
              }
              this.isUpdatingFirmware = true;
              if (inDFU) {
                this.deviceType = "EXPController";
                this.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting);
              }
              _context42.next = 44;
              return this.controllerUpdateAtmel(sendProgress, connectPrompt, atmelFWBin, inDFU);
            case 44:
              if (inDFU) {
                this.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected);
              }
              this.isUpdatingFirmware = false;
            case 46:
              if (!inDFU) {
                _context42.next = 50;
                break;
              }
              log.warn("check controller versions after DFU");
              // now that we are out of DFU mode (?) we should check to see if the radio needs to be updated
              _context42.next = 50;
              return checkControllerUpdates();
            case 50:
              if (!needsRadioUpdate) {
                _context42.next = 55;
                break;
              }
              this.isUpdatingFirmware = true;
              _context42.next = 54;
              return this.controllerUpdateRadio(sendProgress, radioFWBin);
            case 54:
              this.isUpdatingFirmware = false;
            case 55:
              this._needsUpdateStateController = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure;
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.done, 0, "Update Complete");
              this.isUpdatingFirmware = false;
              setTimeout(/*#__PURE__*/_asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41() {
                return _regeneratorRuntime().wrap(function _callee41$(_context41) {
                  while (1) switch (_context41.prev = _context41.next) {
                    case 0:
                      _context41.next = 2;
                      return _this26.fetchControllerInfo();
                    case 2:
                      _context41.next = 4;
                      return _this26.checkUpdateNeeded();
                    case 4:
                      _this26.fireEvent("deviceInfoUpdated", _this26.getRobotInfo());
                    case 5:
                    case "end":
                      return _context41.stop();
                  }
                }, _callee41);
              })), 200);
              _context42.next = 67;
              break;
            case 61:
              _context42.prev = 61;
              _context42.t0 = _context42["catch"](29);
              log.error(_context42.t0);
              this.isUpdatingFirmware = false;
              if (inDFU) {
                this.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Disconnected);
              }
              throw _context42.t0;
            case 67:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this, [[29, 61]]);
      }));
      function controllerUpdate(_x41, _x42) {
        return _controllerUpdate.apply(this, arguments);
      }
      return controllerUpdate;
    }()
  }, {
    key: "getControllerFirmwareData",
    value: function () {
      var _getControllerFirmwareData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee43(progressCB) {
        var sendProgress, fw, manifest, atmelLatestVersion, radioLatestVersion, atmelFWBin, radioFWBin;
        return _regeneratorRuntime().wrap(function _callee43$(_context43) {
          while (1) switch (_context43.prev = _context43.next) {
            case 0:
              sendProgress = function sendProgress(state, prog, msg) {
                log.debug("firmware data fetch progress:", _enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates[state], state, prog, msg);
                if (progressCB) {
                  progressCB(state, prog, msg);
                }
              };
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.LoadingFirmwareFile, 0, "Loading Firmware File");
              _context43.next = 4;
              return this.loadFirmware(function (prog) {
                sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.LoadingFirmwareFile, prog, "Loading Firmware File");
              });
            case 4:
              fw = _context43.sent;
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.LoadingFirmwareFile, 1, "Parsing Firmware File");

              // TODO: preload/cache the firmware?
              manifest = JSON.parse(new TextDecoder().decode(fw.getFile("manifest.json").data));
              log.debug("manifest:", manifest);
              atmelLatestVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(manifest.ctrl.cdc.version);
              radioLatestVersion = _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(manifest.ctrl.radio.version);
              atmelFWBin = fw.getFile(manifest.ctrl.cdc.file).data;
              radioFWBin = fw.getFile(manifest.ctrl.radio.file).data;
              return _context43.abrupt("return", {
                atmel: {
                  version: atmelLatestVersion,
                  bin: atmelFWBin
                },
                radio: {
                  version: radioLatestVersion,
                  bin: radioFWBin
                }
              });
            case 13:
            case "end":
              return _context43.stop();
          }
        }, _callee43, this);
      }));
      function getControllerFirmwareData(_x43) {
        return _getControllerFirmwareData.apply(this, arguments);
      }
      return getControllerFirmwareData;
    }()
    /**
     * This will update the atmel chip on a IQ2 or EXP controller.
     * 
     * **Note**: For security reasons, we can only trigger a connect prompt after a set time from the user
     * triggering the update. As a result we need the connect prompt callback param. If too much time has
     * passed and we are unable to call the prompt, we call this to get the user to trigger another action
     * so that we can actually continue the update.
     * @param progressCB callback for when there is an progress update
     * @param connectPrompt called to get the user to trigger another event so we can show the connect prompt
     * @param atmelFWBin the bin to load on the atmel chip
     * @param inDFU is the controller already in DFU mode
     * @param requireReconnect do we need to reconnect at the end?
     */
  }, {
    key: "controllerUpdateAtmel",
    value: (function () {
      var _controllerUpdateAtmel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee44(progressCB, connectPrompt, atmelFWBin) {
        var inDFU,
          requireReconnect,
          lastProgress,
          sendProgress,
          vexDFU,
          reconnected,
          isFirstConnect,
          _args44 = arguments;
        return _regeneratorRuntime().wrap(function _callee44$(_context44) {
          while (1) switch (_context44.prev = _context44.next) {
            case 0:
              inDFU = _args44.length > 3 && _args44[3] !== undefined ? _args44[3] : false;
              requireReconnect = _args44.length > 4 && _args44[4] !== undefined ? _args44[4] : true;
              lastProgress = 0;
              sendProgress = function sendProgress(state, prog, msg) {
                lastProgress = prog;
                // log.debug("atmle update progress:", VEXControllerUpdateStates[state], prog, msg);
                if (progressCB) {
                  progressCB(state, prog, msg);
                }
              };
              if (inDFU) {
                _context44.next = 12;
                break;
              }
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.EnteringDFU, 0, "Entering DFU");
              _context44.next = 8;
              return this.controllerEnterDFU();
            case 8:
              this.delay(250);
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.EnteringDFU, 0.5, "Waiting For Reconnect");
              _context44.next = 13;
              break;
            case 12:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.EnteringDFU, 0, "Waiting For Connection");
            case 13:
              vexDFU = new _VEXDFU_VexDFU__WEBPACK_IMPORTED_MODULE_8__.VexDFU(this.dfuTarget); // TODO: make sure we actually connected. controller will be stuck in DFU mode if we don't complete the update
              _context44.next = 16;
              return connectPrompt(true, true);
            case 16:
              _context44.next = 18;
              return vexDFU.openConnection();
            case 18:
              if (vexDFU.device) {
                _context44.next = 31;
                break;
              }
              _context44.next = 21;
              return this.delay(250);
            case 21:
              _context44.next = 23;
              return connectPrompt(false, true);
            case 23:
              if (!_context44.sent) {
                _context44.next = 28;
                break;
              }
              _context44.next = 26;
              return vexDFU.openConnection();
            case 26:
              _context44.next = 29;
              break;
            case 28:
              throw new _errors__WEBPACK_IMPORTED_MODULE_1__.UpdateCanceled();
            case 29:
              _context44.next = 18;
              break;
            case 31:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingAtmel, 0, "Updating Firmware");
              _context44.prev = 32;
              _context44.next = 35;
              return vexDFU.updateDevice(atmelFWBin, function (prog) {
                sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingAtmel, prog, "Updating Firmware");
              });
            case 35:
              _context44.next = 44;
              break;
            case 37:
              _context44.prev = 37;
              _context44.t0 = _context44["catch"](32);
              if (!(typeof _context44.t0 === "string" && _context44.t0.includes("DFU GETSTATUS failed: stall") && lastProgress === 1)) {
                _context44.next = 43;
                break;
              }
              log.warn("DFU GETSTATUS stalled at the end of the update. ignoring the error");
              _context44.next = 44;
              break;
            case 43:
              throw _context44.t0;
            case 44:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForReboot, 0, "Rebooting");
              _context44.next = 47;
              return this.delay(_platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsElectron ? 1500 : 100);
            case 47:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForReboot, 0.5, "Waiting serial For Reconnect");
              reconnected = false;
              isFirstConnect = true;
            case 50:
              if (reconnected) {
                _context44.next = 72;
                break;
              }
              _context44.prev = 51;
              _context44.next = 54;
              return connectPrompt(isFirstConnect, false);
            case 54:
              if (_context44.sent) {
                _context44.next = 56;
                break;
              }
              throw new _errors__WEBPACK_IMPORTED_MODULE_1__.UpdateCanceled();
            case 56:
              isFirstConnect = false;
              _context44.next = 59;
              return this.reconnect();
            case 59:
              reconnected = true;
              _context44.next = 70;
              break;
            case 62:
              _context44.prev = 62;
              _context44.t1 = _context44["catch"](51);
              if (!(_context44.t1 instanceof DOMException)) {
                _context44.next = 68;
                break;
              }
              if (_context44.t1.name === "SecurityError") {
                log.warn("failed to open connect prompt due to security permissions");
                // await connectPrompt();
              } else if (_context44.t1.name === "NotFoundError") {
                log.warn("user hit cancel");
                if (requireReconnect) {
                  // await connectPrompt();
                } else {
                  reconnected = true;
                }
              }
              _context44.next = 70;
              break;
            case 68:
              log.error("error name:", _context44.t1.name, _context44.t1);
              throw _context44.t1;
            case 70:
              _context44.next = 50;
              break;
            case 72:
              _context44.next = 74;
              return this.delay(500);
            case 74:
            case "end":
              return _context44.stop();
          }
        }, _callee44, this, [[32, 37], [51, 62]]);
      }));
      function controllerUpdateAtmel(_x44, _x45, _x46) {
        return _controllerUpdateAtmel.apply(this, arguments);
      }
      return controllerUpdateAtmel;
    }())
  }, {
    key: "controllerUpdateRadio",
    value: function () {
      var _controllerUpdateRadio = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee45(progressCB, radioFWBin) {
        var sendProgress, rawSerial, radioDFU;
        return _regeneratorRuntime().wrap(function _callee45$(_context45) {
          while (1) switch (_context45.prev = _context45.next) {
            case 0:
              sendProgress = function sendProgress(state, prog, msg) {
                // log.debug("radio update progress:", VEXControllerUpdateStates[state], prog, msg);
                if (progressCB) {
                  progressCB(state, prog, msg);
                }
              };
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingRadio, 0, "Entering Radio Update Mode");
              _context45.next = 4;
              return this.controllerRadioBootloaderEntry(true);
            case 4:
              _context45.next = 6;
              return this.delay(1300);
            case 6:
              log.debug("create radio updater");

              // TODO: should the non-raw comms be blocked here?
              rawSerial = new VexSerialDeviceRawSerialPort(this.serialConnection);
              radioDFU = new _radio_cc264x__WEBPACK_IMPORTED_MODULE_7__.cc264xdfu(rawSerial.createWriteDataFunction(), undefined, this.radioChipId);
              log.debug("starting radio update");
              _context45.prev = 10;
              _context45.next = 13;
              return radioDFU.radioUpdate(radioFWBin, function (prog) {
                sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.UpdatingRadio, prog, "Updating Radio");
              });
            case 13:
              _context45.next = 18;
              break;
            case 15:
              _context45.prev = 15;
              _context45.t0 = _context45["catch"](10);
              throw new Error("Radio update failed. error code: " + _context45.t0);
            case 18:
              _context45.prev = 18;
              // make sure we cleanup
              rawSerial.destroy();
              return _context45.finish(18);
            case 21:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForRadio, 0, "Waiting For Radio Reboot");
              _context45.next = 24;
              return this.delay(2000);
            case 24:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForRadio, 0.3, "Waiting For Radio Reboot");
              _context45.next = 27;
              return this.controllerRadioBootloaderExit(true);
            case 27:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForRadio, 0.6, "Waiting For Radio Reboot");
              _context45.next = 30;
              return this.delay(1000);
            case 30:
              sendProgress(_enums__WEBPACK_IMPORTED_MODULE_9__.VEXControllerUpdateStates.WaitingForRadio, 1, "Waiting For Radio Reboot");
            case 31:
            case "end":
              return _context45.stop();
          }
        }, _callee45, this, [[10, 15, 18, 21]]);
      }));
      function controllerUpdateRadio(_x47, _x48) {
        return _controllerUpdateRadio.apply(this, arguments);
      }
      return controllerUpdateRadio;
    }() // private async controllerCheckFwUpdateNeeded() {
    //   this.checkForConnectedController();
    //   const output: {
    //     atmel?: VexFirmwareVersion,
    //     radio?: VexFirmwareVersion,
    //   } = {};
    //   //  we should pull this on connection and only use this if the connect data is not there
    //   const atmelStatus = await this.controllerAtmelStatus();
    //   if (atmelStatus) {
    //     if (atmelStatus.version) {
    //       output.atmel = atmelStatus.version;
    //     }
    //     if(atmelStatus.status == 0x20){
    //       log.info("radio stuck in bootload");
    //       output.radio = VexFirmwareVersion.allZero();
    //     } else {
    //       const versions = await this.controllerVersionsGet();
    //       output.radio = versions[1];
    //     }
    //   }
    // }
  }, {
    key: "checkForConnectedController",
    value:
    //#endregion controller firmware

    //#region controller comms
    function checkForConnectedController(force) {
      var canBeConnecting = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      if (!canBeConnecting && !this.isConnected) {
        throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoControllerConnectedError();
      }
      if (force !== undefined) {
        if (!force && !this.isDeviceControllerWithFirmware) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoControllerConnectedError();
        }
      } else {
        if (!this.isDeviceControllerWithFirmware) {
          throw new _errors__WEBPACK_IMPORTED_MODULE_1__.NoControllerConnectedError();
        }
      }
    }
  }, {
    key: "controllerVersionsGet",
    value: function controllerVersionsGet() {
      var _this27 = this;
      return new Promise(function (resolve, reject) {
        try {
          _this27.checkForConnectedController(undefined, true);
        } catch (err) {
          reject(err);
        }
        _this27.writeDataAsync(_this27.cdc.IQ2_Cdc2ControllerVersions()).then(function (reply) {
          var versions = _this27.decodeControllerVersionsReply(reply);
          resolve(versions);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }
  }, {
    key: "controllerRadioBootloaderEntry",
    value: function controllerRadioBootloaderEntry() {
      var _this28 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return new Promise(function (resolve, reject) {
        try {
          _this28.checkForConnectedController(force);
        } catch (err) {
          reject(err);
        }
        var payload = new Uint8Array([0xAA, 0xCC, 0xC9, 0x17, 0x01]);
        var cmd = new _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDCMessage(payload, 5);
        _this28.writeDataAsync(cmd, {
          timeout: 200
        }).then(function (reply) {
          _this28.lastStatus = VexSerialDevice.STATUS_GOOD;
          if (reply) {
            var msgReply = new Uint8Array(reply);
            resolve(msgReply[4] === 0x76);
          }
          resolve(reply);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }
  }, {
    key: "controllerRadioBootloaderExit",
    value: function controllerRadioBootloaderExit() {
      var _this29 = this;
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      return new Promise(function (resolve, reject) {
        try {
          _this29.checkForConnectedController(force);
        } catch (err) {
          reject(err);
        }
        var payload = new Uint8Array([0xAA, 0xCC, 0xC9, 0x17, 0x02]);
        var cmd = new _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDCMessage(payload, 5);
        _this29.writeDataAsync(cmd, {
          timeout: 200
        }).then(function (reply) {
          if (reply) {
            _this29.lastStatus = VexSerialDevice.STATUS_GOOD;
            var msgReply = new Uint8Array(reply);
            resolve(msgReply[4] === 0x76);
          }
          resolve(reply);
        })["catch"](function () {
          // perhaps we don't support this yet
          resolve(undefined);
        });
      });
    }

    /**
     * put the connected controller into DFU mode
     * @param force 
     * @returns 
     */
  }, {
    key: "controllerEnterDFU",
    value: (function () {
      var _controllerEnterDFU = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee46() {
        var force,
          payload,
          cmd,
          _args46 = arguments;
        return _regeneratorRuntime().wrap(function _callee46$(_context46) {
          while (1) switch (_context46.prev = _context46.next) {
            case 0:
              force = _args46.length > 0 && _args46[0] !== undefined ? _args46[0] : false;
              this.checkForConnectedController(force);
              payload = new Uint8Array([0xAA, 0xCC, 0xC9, 0x17, 0x03]);
              cmd = new _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDCMessage(payload, 0); // no reply expected
              _context46.prev = 4;
              _context46.next = 7;
              return this.writeDataAsync(cmd, {
                timeout: 0
              });
            case 7:
              return _context46.abrupt("return", true);
            case 10:
              _context46.prev = 10;
              _context46.t0 = _context46["catch"](4);
              return _context46.abrupt("return", undefined);
            case 13:
            case "end":
              return _context46.stop();
          }
        }, _callee46, this, [[4, 10]]);
      }));
      function controllerEnterDFU() {
        return _controllerEnterDFU.apply(this, arguments);
      }
      return controllerEnterDFU;
    }())
  }, {
    key: "controllerAtmelStatus",
    value: function () {
      var _controllerAtmelStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee47() {
        var force,
          canBeConnecting,
          payload,
          cmd,
          reply,
          msgReply,
          v1,
          ver,
          _args47 = arguments;
        return _regeneratorRuntime().wrap(function _callee47$(_context47) {
          while (1) switch (_context47.prev = _context47.next) {
            case 0:
              force = _args47.length > 0 && _args47[0] !== undefined ? _args47[0] : false;
              canBeConnecting = _args47.length > 1 && _args47[1] !== undefined ? _args47[1] : false;
              this.checkForConnectedController(force, canBeConnecting);
              payload = new Uint8Array([0xAA, 0xCC, 0xC9, 0x17, 0x04]);
              cmd = new _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDCMessage(payload, 10);
              _context47.prev = 5;
              _context47.next = 8;
              return this.writeDataAsync(cmd, {
                timeout: 200
              });
            case 8:
              reply = _context47.sent;
              if (!reply) {
                _context47.next = 24;
                break;
              }
              this.lastStatus = VexSerialDevice.STATUS_GOOD;
              msgReply = new Uint8Array(reply);
              if (!(msgReply[9] === 0x76)) {
                _context47.next = 22;
                break;
              }
              v1 = [0, 0, 0, 0];
              v1[0] = msgReply[4];
              v1[1] = msgReply[5];
              v1[2] = msgReply[6];
              v1[3] = msgReply[7];
              ver = new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(v1[0], v1[1], v1[2], v1[3]);
              return _context47.abrupt("return", {
                version: ver,
                status: msgReply[8]
              });
            case 22:
              log.debug("did not get expected response back for atmel status");
              return _context47.abrupt("return", undefined);
            case 24:
              return _context47.abrupt("return", undefined);
            case 27:
              _context47.prev = 27;
              _context47.t0 = _context47["catch"](5);
              return _context47.abrupt("return", undefined);
            case 30:
            case "end":
              return _context47.stop();
          }
        }, _callee47, this, [[5, 27]]);
      }));
      function controllerAtmelStatus() {
        return _controllerAtmelStatus.apply(this, arguments);
      }
      return controllerAtmelStatus;
    }()
    /**
     * If the connected device is a controller and the brain is connected via
     * radio, this will switch to use a download channel.
     */
  }, {
    key: "controllerSetDownloadChannel",
    value: (function () {
      var _controllerSetDownloadChannel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee48() {
        return _regeneratorRuntime().wrap(function _callee48$(_context48) {
          while (1) switch (_context48.prev = _context48.next) {
            case 0:
              if (!this.isDeviceBrain) {
                _context48.next = 3;
                break;
              }
              log.debug("unable to set download channel when connected to brain directly");
              return _context48.abrupt("return");
            case 3:
              if (!(this.deviceType === "IQ2Controller" || this.deviceType === "EXPController")) {
                _context48.next = 6;
                break;
              }
              log.debug("unable to set download channel for IQ2 and EXP controllers");
              return _context48.abrupt("return");
            case 6:
              _context48.next = 8;
              return this.fetchControllerLinkStatus();
            case 8:
              if (!this.controllerTethered) {
                _context48.next = 11;
                break;
              }
              log.debug("controller is tethered. no need to set radio channel");
              return _context48.abrupt("return");
            case 11:
              if (!this.controllerRadioDownloadChannel) {
                _context48.next = 14;
                break;
              }
              log.debug("controller is already on download channel");
              return _context48.abrupt("return");
            case 14:
              if (this.controllerRadioDownloadChannel) {
                _context48.next = 21;
                break;
              }
              log.info("changing controller radio channel to download channel");
              _context48.next = 18;
              return this.selectRadioChannel(1);
            case 18:
              _context48.next = 20;
              return this.delay(200);
            case 20:
              log.info("done changing controller to download channel");
            case 21:
            case "end":
              return _context48.stop();
          }
        }, _callee48, this);
      }));
      function controllerSetDownloadChannel() {
        return _controllerSetDownloadChannel.apply(this, arguments);
      }
      return controllerSetDownloadChannel;
    }()
    /**
     * change to download or pit channel
     * @param type 1 is download channel. not sure about other values...
     */
    )
  }, {
    key: "selectRadioChannel",
    value: function selectRadioChannel(type) {
      var _this30 = this;
      /**
       * Helper function to wit for the controller to reconnect to the brain.
       * This will only check 10 times. if after the 10th check it is still not
       * connected, it will consider the change to be a failure.
       * @param ms delay in milliseconds between each check.
       * @returns boolean indicating if the reconnect was a success. true if reconnected.
       */
      var checkRadioLinkStatus = function checkRadioLinkStatus(ms) {
        return new Promise(/*#__PURE__*/function () {
          var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee50(resolve, reject) {
            var loops, _getStatus;
            return _regeneratorRuntime().wrap(function _callee50$(_context50) {
              while (1) switch (_context50.prev = _context50.next) {
                case 0:
                  loops = 10;
                  _getStatus = /*#__PURE__*/function () {
                    var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee49() {
                      var response;
                      return _regeneratorRuntime().wrap(function _callee49$(_context49) {
                        while (1) switch (_context49.prev = _context49.next) {
                          case 0:
                            _context49.next = 2;
                            return _this30.delay(ms);
                          case 2:
                            _context49.t0 = Uint8Array;
                            _context49.next = 5;
                            return _this30.getSystemVersionData();
                          case 5:
                            _context49.t1 = _context49.sent;
                            response = new _context49.t0(_context49.t1);
                            if (!(response[2] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.TYPES.SYSTEM_VERSION.cmd && (response[10] & _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CTRL_SYS_STATUS.LINKED) == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CTRL_SYS_STATUS.LINKED)) {
                              _context49.next = 14;
                              break;
                            }
                            _context49.next = 10;
                            return _this30.delay(1000);
                          case 10:
                            log.debug("changed radio channel ok");
                            resolve(true);
                            _context49.next = 15;
                            break;
                          case 14:
                            if (--loops > 0) {
                              // try again since we still have attempts left
                              _getStatus();
                            } else {
                              // all attempts to check for a reconnection have failed. assume that we can't reconnect...
                              resolve(false);
                            }
                          case 15:
                          case "end":
                            return _context49.stop();
                        }
                      }, _callee49);
                    }));
                    return function getStatus() {
                      return _ref7.apply(this, arguments);
                    };
                  }();
                  _getStatus();
                case 3:
                case "end":
                  return _context50.stop();
              }
            }, _callee50);
          }));
          return function (_x49, _x50) {
            return _ref6.apply(this, arguments);
          };
        }());
      };
      return new Promise(/*#__PURE__*/function () {
        var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee51(resolve, reject) {
          var systemVersionResponse, reconnected;
          return _regeneratorRuntime().wrap(function _callee51$(_context51) {
            while (1) switch (_context51.prev = _context51.next) {
              case 0:
                _context51.prev = 0;
                _context51.next = 3;
                return _this30.writeDataAsync(_this30.cdc.query1());
              case 3:
                _context51.t0 = Uint8Array;
                _context51.next = 6;
                return _this30.getSystemVersionData();
              case 6:
                _context51.t1 = _context51.sent;
                systemVersionResponse = new _context51.t0(_context51.t1);
                if (systemVersionResponse[2] != _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.TYPES.SYSTEM_VERSION.cmd || systemVersionResponse[9] != _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.PRODUCT.V5_CONTROLLER) {
                  // not connected to controller, then we don't change
                  resolve(true);
                }

                // change the channel
                _context51.next = 11;
                return _this30.writeDataAsync(_this30.cdc.V5_Cdc2FileControl(_VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS_FILE_CTRL_GROUP.FILE_CTRL_RADIO, type), {
                  timeout: 1000
                });
              case 11:
                _context51.next = 13;
                return checkRadioLinkStatus(500);
              case 13:
                reconnected = _context51.sent;
                resolve(reconnected);
                _context51.next = 20;
                break;
              case 17:
                _context51.prev = 17;
                _context51.t2 = _context51["catch"](0);
                // TODO: should throw actual error here
                reject(false);
              case 20:
              case "end":
                return _context51.stop();
            }
          }, _callee51, null, [[0, 17]]);
        }));
        return function (_x51, _x52) {
          return _ref8.apply(this, arguments);
        };
      }());
    }

    /**
     * Decode an IQ2/EXP controller versions reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeControllerVersionsReply",
    value: function decodeControllerVersionsReply(msg) {
      // Decode file init
      var reply = [];
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessageCtrl(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS_CTRL.CNTR_GET_VERSIONS.cmd) {
          var v1 = [0, 0, 0, 0];
          var v2 = [0, 0, 0, 0];
          v1[0] = dvb.getUint8(5);
          v1[1] = dvb.getUint8(6);
          v1[2] = dvb.getUint8(7);
          v1[3] = dvb.getUint8(8);
          v2[0] = dvb.getUint8(9);
          v2[1] = dvb.getUint8(10);
          v2[2] = dvb.getUint8(11);
          v2[3] = dvb.getUint8(12);
          reply.push(new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(v1[0], v1[1], v1[2], v1[3]));
          reply.push(new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(v2[0], v2[1], v2[2], v2[3]));
        }
      }
      return reply;
    }
  }, {
    key: "controllerPollingEnabled",
    get: function get() {
      return this.isDeviceController && this._enableControllerPolling && !this.isUpdatingFirmware && !this._inDFUMode;
    }
  }, {
    key: "startPollingController",
    value: function startPollingController() {
      log.info("startPollingController called");
      if (this._pollingInterval) {
        clearInterval(this._pollingInterval);
        this._pollingInterval = null;
      }
      // TODO: figure out correct polling interval
      this._pollingInterval = setInterval(this.pollController, 2000);
    }
  }, {
    key: "stopPollingController",
    value: function stopPollingController() {
      log.info("stopPollingController called");
      if (this._pollingInterval) {
        clearInterval(this._pollingInterval);
        this._pollingInterval = null;
        this._isCurrentlyPollingController = false;
      }
    }

    /**
     * This pauses polling if it is not already paused. This does not stop the
     * polling interval. It just sets a flag to skip polling cycles while set.
     * This is important since it lets us disable the polling during operations
     * like project downloads.
     * 
     * @see enablePollingController
     */
  }, {
    key: "disablePollingController",
    value: (function () {
      var _disablePollingController = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee52() {
        return _regeneratorRuntime().wrap(function _callee52$(_context52) {
          while (1) switch (_context52.prev = _context52.next) {
            case 0:
              if (!this.isDeviceController) {
                _context52.next = 12;
                break;
              }
              log.info("disable controller polling");
              if (!this._enableControllerPolling) {
                _context52.next = 11;
                break;
              }
              this._enableControllerPolling = false;
              // short delay to make sure that if this is called during a polling
              // cycle, it can finish without impacting what ever happens next.
              // TODO: make this smart so we only delay if this is during a polling request
            case 4:
              if (!(this._isCurrentlyPollingUserData || this._isCurrentlyPollingController)) {
                _context52.next = 9;
                break;
              }
              _context52.next = 7;
              return this.delay(25);
            case 7:
              _context52.next = 4;
              break;
            case 9:
              _context52.next = 12;
              break;
            case 11:
              log.debug("controller polling is already disabled?");
            case 12:
            case "end":
              return _context52.stop();
          }
        }, _callee52, this);
      }));
      function disablePollingController() {
        return _disablePollingController.apply(this, arguments);
      }
      return disablePollingController;
    }()
    /**
     * This resumes the controller polling. This only works if the polling interval
     * is running.
     * 
     * @see disablePollingController
     */
    )
  }, {
    key: "enablePollingController",
    value: function enablePollingController() {
      if (this.isDeviceController) {
        log.info("reenable controller polling");
        if (this._enableControllerPolling) {
          log.debug("controller polling is already enabled?");
        } else {
          this._enableControllerPolling = true;
        }
      }
    }

    /**
     * This is called periodically to get information from the controller. This
     * is mainly to get information about the state of the controller like if it
     * is connected to a brain.
     */
  }, {
    key: "pollController",
    value: (function () {
      var _pollController = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee53() {
        var wasBrainConnected, valuesChanged;
        return _regeneratorRuntime().wrap(function _callee53$(_context53) {
          while (1) switch (_context53.prev = _context53.next) {
            case 0:
              if (!this.isDeviceBrain) {
                _context53.next = 4;
                break;
              }
              log.info("stop polling as we are directly connected to a brain");
              this.stopPollingController();
              return _context53.abrupt("return");
            case 4:
              if (this.controllerPollingEnabled) {
                _context53.next = 6;
                break;
              }
              return _context53.abrupt("return");
            case 6:
              // log.debug("pollController");

              this._isCurrentlyPollingController = true;

              // delay if user data is being polled
            case 7:
              if (!this._isCurrentlyPollingUserData) {
                _context53.next = 12;
                break;
              }
              _context53.next = 10;
              return this.delay(5);
            case 10:
              _context53.next = 7;
              break;
            case 12:
              wasBrainConnected = this.isBrainConnected; // now we can actually poll the controller
              _context53.next = 15;
              return this.fetchControllerLinkStatus();
            case 15:
              valuesChanged = _context53.sent;
              this._isCurrentlyPollingController = false;
              if (!valuesChanged) {
                _context53.next = 26;
                break;
              }
              log.debug("new controller status:", this.controllerConnectionStatus.toString(16));

              // TODO: if this is a new connection. we should pull the brain information
              if (!this.isBrainConnected) {
                _context53.next = 24;
                break;
              }
              _context53.next = 22;
              return this.fetchBrainInfo();
            case 22:
              _context53.next = 24;
              return this.checkUpdateNeededBrain();
            case 24:
              // V5 needs to pull console data from the controller
              // so on connection state change for V5 start/stop the user data polling
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsV5 && wasBrainConnected !== this.isBrainConnected) {
                if (this.isBrainConnected) {
                  this.startControllerUserDataPolling();
                } else {
                  this.stopControllerUserDataPolling();
                }
              }

              // the info has changed, so we need to let the rest of the app/interface know
              // we don't want to always sent this, that is why it is behind the condition
              // for changed values
              this.fireEvent("deviceInfoUpdated", this.getRobotInfo());
            case 26:
            case "end":
              return _context53.stop();
          }
        }, _callee53, this);
      }));
      function pollController() {
        return _pollController.apply(this, arguments);
      }
      return pollController;
    }())
  }, {
    key: "controllerConnectedToBrain",
    get:
    /**
     * true if the connected controller is connected to a brain
     * 
     * should match the old device manager's brainAlive flag
     */
    function get() {
      return (this.controllerConnectionStatus & 0x03) > 0;
    }

    /** 
     * flag that indicates if the controller is connected to the brain via tether.
     * 
     * * True - if connected via tether
     * * False - if not connected or connected via radio
     */
  }, {
    key: "controllerTethered",
    get: function get() {
      return (this.controllerConnectionStatus & 0x01) > 0;
    }

    /**
     * flag that indicates if the controller's radio connection is currently
     * using a download channel.
     */
  }, {
    key: "controllerRadioDownloadChannel",
    get: function get() {
      return (this.controllerConnectionStatus & 0x08) > 0;
    }

    /**
     * Look for controller making connection with brain.
     * @returns boolean that indicates if the values have changed
     */
  }, {
    key: "fetchControllerLinkStatus",
    value: (function () {
      var _fetchControllerLinkStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee54() {
        var response, isRightDevice, differentStatus, valuesChanged, _valuesChanged;
        return _regeneratorRuntime().wrap(function _callee54$(_context54) {
          while (1) switch (_context54.prev = _context54.next) {
            case 0:
              _context54.prev = 0;
              _context54.t0 = Uint8Array;
              _context54.next = 4;
              return this.getSystemVersionData();
            case 4:
              _context54.t1 = _context54.sent;
              response = new _context54.t0(_context54.t1);
              if (!(response !== undefined)) {
                _context54.next = 12;
                break;
              }
              // make sure this is a reply from the controller
              isRightDevice = response[9] === this.controllerID; // log.debug("response:", buf2hex(response), response[9], this.controllerID);
              if (!isRightDevice) {
                _context54.next = 12;
                break;
              }
              differentStatus = this.controllerConnectionStatus !== response[10];
              this.controllerConnectionStatus = response[10];
              return _context54.abrupt("return", differentStatus);
            case 12:
              valuesChanged = this.controllerConnectionStatus !== 0;
              this.controllerConnectionStatus = 0;
              return _context54.abrupt("return", valuesChanged);
            case 17:
              _context54.prev = 17;
              _context54.t2 = _context54["catch"](0);
              _valuesChanged = this.controllerConnectionStatus !== 0;
              this.controllerConnectionStatus = 0;
              return _context54.abrupt("return", _valuesChanged);
            case 22:
            case "end":
              return _context54.stop();
          }
        }, _callee54, this, [[0, 17]]);
      }));
      function fetchControllerLinkStatus() {
        return _fetchControllerLinkStatus.apply(this, arguments);
      }
      return fetchControllerLinkStatus;
    }())
  }, {
    key: "startControllerUserDataPolling",
    value: function startControllerUserDataPolling() {
      log.info("startControllerUserDataPolling called");
      if (this._controllerUserDataPollingInterval) {
        clearInterval(this._controllerUserDataPollingInterval);
        this._controllerUserDataPollingInterval = null;
      }
      // TODO: figure out correct polling interval
      this._controllerUserDataPollingInterval = setInterval(this.pollControllerUserData, 100);
    }
  }, {
    key: "stopControllerUserDataPolling",
    value: function stopControllerUserDataPolling() {
      log.info("stopControllerUserDataPolling called");
      if (this._controllerUserDataPollingInterval) {
        clearInterval(this._controllerUserDataPollingInterval);
        this._controllerUserDataPollingInterval = null;
        this._isCurrentlyPollingUserData = false;
      }
    }
  }, {
    key: "pollControllerUserData",
    value: function () {
      var _pollControllerUserData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee55() {
        var userData;
        return _regeneratorRuntime().wrap(function _callee55$(_context55) {
          while (1) switch (_context55.prev = _context55.next) {
            case 0:
              if (!(this.deviceType !== "V5Controller")) {
                _context55.next = 4;
                break;
              }
              log.info("stop user data polling - not connected to a V5 controller");
              this.stopControllerUserDataPolling();
              return _context55.abrupt("return");
            case 4:
              if (this.controllerPollingEnabled) {
                _context55.next = 6;
                break;
              }
              return _context55.abrupt("return");
            case 6:
              if (!this._isCurrentlyPollingUserData) {
                _context55.next = 8;
                break;
              }
              return _context55.abrupt("return");
            case 8:
              // log.debug("pollControllerUserData");
              this._isCurrentlyPollingUserData = true;

              // delay if controller is being polled
            case 9:
              if (!this._isCurrentlyPollingController) {
                _context55.next = 14;
                break;
              }
              _context55.next = 12;
              return this.delay(5);
            case 12:
              _context55.next = 9;
              break;
            case 14:
              _context55.next = 16;
              return this.readUserData();
            case 16:
              userData = _context55.sent;
              this._isCurrentlyPollingUserData = false;
              if (userData) {
                this.onUserPortReceivedData(userData);
              }
            case 19:
            case "end":
              return _context55.stop();
          }
        }, _callee55, this);
      }));
      function pollControllerUserData() {
        return _pollControllerUserData.apply(this, arguments);
      }
      return pollControllerUserData;
    }()
    /**
     * Pulls the user data from the controllers serial port. This is only for V5
     * @returns a raw array of the user data from the brain or null if there is no data
     */
  }, {
    key: "readUserData",
    value: (function () {
      var _readUserData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee56() {
        var reply, userDataReply, userData;
        return _regeneratorRuntime().wrap(function _callee56$(_context56) {
          while (1) switch (_context56.prev = _context56.next) {
            case 0:
              if (!(this.deviceType !== "V5Controller")) {
                _context56.next = 3;
                break;
              }
              log.warn("readUserData should not be called for device other than V5 Controller");
              return _context56.abrupt("return", null);
            case 3:
              if (!(this.versionSystem[0] === 1 && this.versionSystem[1] === 0 && this.versionSystem[2] < 6)) {
                _context56.next = 5;
                break;
              }
              return _context56.abrupt("return", null);
            case 5:
              _context56.next = 7;
              return this.writeDataAsync(this.cdc.V5_Cdc2UserRead(), {
                timeout: 1000
              });
            case 7:
              reply = _context56.sent;
              userDataReply = this.decodeUserDataReply(reply);
              userData = userDataReply.data; // This is cast to 'any' to avoid the type error - it is being stupid
              return _context56.abrupt("return", userData);
            case 11:
            case "end":
              return _context56.stop();
          }
        }, _callee56, this);
      }));
      function readUserData() {
        return _readUserData.apply(this, arguments);
      }
      return readUserData;
    }() //#endregion controller user data polling
    //#endregion controller polling
    //#endregion controller comms
    //#region low level comms
    /**
     * Set the download address
     */
    )
  }, {
    key: "downloadAddressSet",
    value: function downloadAddressSet(addr) {
      log.debug("downloadAddressSet", addr.toString(16));
      if (addr >= USER_FLASH_START && addr <= USER_FLASH_END) {
        this.downloadAddress = addr;
      }

      // temporary for IQ2
      if (addr >= USER_FLASH_START_B && addr <= USER_FLASH_END_B) {
        this.downloadAddress = addr;
      }

      // temporary for EXP
      if (addr >= USER_FLASH_START_C && addr <= USER_FLASH_END_C) {
        this.downloadAddress = addr;
      }

      // temporary for AIM
      if (this.downloadTarget === VexSerialDevice.FILE_TARGET_FLASH && _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIM) {
        this.downloadAddress = addr;
      }
      if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR) {
        this.downloadAddress = addr;
      }
    }
  }, {
    key: "linkFileSet",
    value: function linkFileSet(vid, name) {
      this.linkFileVID = vid;
      this.linkFile = name;
    }

    /**
     * Set the download target
     */
  }, {
    key: "downloadTargetSet",
    value: function downloadTargetSet(target) {
      if (target === VexSerialDevice.FILE_TARGET_DDR || target === VexSerialDevice.FILE_TARGET_QSPI) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_A1 || target === VexSerialDevice.FILE_TARGET_B1 || target === VexSerialDevice.FILE_TARGET_B2) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_CBUF) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_VBUF) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_DDRC) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_DDRE) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_FLASH) {
        this.downloadTarget = target;
      } else if (target === VexSerialDevice.FILE_TARGET_RADIO) {
        this.downloadTarget = target;
      }
      log.debug("downloadTargetSet:", target, this.downloadTarget);
    }

    /**
     * set options to send with program exit command after download
     * Not really working on the V5 yet (Mar 5 2018)
     */
  }, {
    key: "downloadAutoRunSet",
    value: function downloadAutoRunSet(state) {
      if (state !== undefined && state === false) {
        this.downloadAutoRun = _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIM ? 0 : VexSerialDevice.OPTIONS.EXIT_HALT;
      } else {
        this.downloadAutoRun = VexSerialDevice.OPTIONS.EXIT_RUN;
      }
    }

    /**
     * Download binary file to vexv5
     */
  }, {
    key: "downloadFile",
    value: function downloadFile(file, doneCallback, progressCallback) {
      var _this31 = this;
      var r = new FileReader();
      r.readAsArrayBuffer(file);

      // Load the file data
      r.onload = function (event) {
        log.info('file read complete');

        // check file read successful
        if (r.readyState === r.DONE) {
          var buffer = new Uint8Array(r.result);
          if (_this31.connected) {
            var binfile = buffer;
            _this31.downloadData(file.name, binfile, progressCallback, function (status) {
              if (doneCallback != undefined) {
                doneCallback(status);
              }
            });
          }
        }
      };
    }
  }, {
    key: "writeData",
    value: function () {
      var _writeData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee57(data, options) {
        var _this32 = this;
        var expectedBytes, timeout, timeoutRetry, throwTimeout, isCDCMessage, sendData, rxExpectedBytes, serialRxTimeout, writeLowLevel;
        return _regeneratorRuntime().wrap(function _callee57$(_context57) {
          while (1) switch (_context57.prev = _context57.next) {
            case 0:
              timeout = 1000;
              if (options !== null && options !== undefined) {
                if (options.timeout !== undefined) {
                  timeout = options.timeout;
                }
                if (options.replyBytes !== undefined) {
                  expectedBytes = options.replyBytes;
                }
              }
              timeoutRetry = (options === null || options === void 0 ? void 0 : options.retryOnTimeout) || false;
              throwTimeout = (options === null || options === void 0 ? void 0 : options.throwTimeout) || false;
              isCDCMessage = data instanceof _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDCMessage;
              sendData = isCDCMessage ? data.data : data;
              rxExpectedBytes = isCDCMessage ? data.replyLength : 0xFFFF;
              serialRxTimeout = null;
              writeLowLevel = function writeLowLevel() {
                return new Promise(function (resolve, reject) {
                  var rxBuffer = new ArrayBuffer(0);
                  var _onReceiveData = function onReceiveData(data) {
                    rxBuffer = (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.appendArrayBuffer)(rxBuffer, data);

                    // if expected bytes is 0xFFFF then this is now CDC2 with unknown
                    // reply length and we should set from the receive packet
                    if (rxExpectedBytes == 0xFFFF) {
                      if (rxBuffer && rxBuffer.byteLength > 4) {
                        // validate header
                        var buf = new Uint8Array(rxBuffer);
                        if (_this32.cdc.validateHeaderAndLength(buf)) {
                          rxExpectedBytes = _this32.cdc.cdc2MessageGetReplyPacketLength(buf);
                          log.debug("got reply with unknown length, setting expected bytes from reply packet to:", rxExpectedBytes);
                        }
                      }
                    }
                    if (rxBuffer.byteLength >= rxExpectedBytes) {
                      // TODO: print the value

                      clearTimeout(serialRxTimeout);
                      // TODO: handle extra data in rxBuffer for next message?
                      // that should not happen since we should only be sending new
                      // messages after processing the previous one, but might be
                      // something to look at.
                      resolve(rxBuffer);
                      _this32.serialConnection.off("dataReceived", _onReceiveData);
                    } else {
                      // log.debug("waiting for more response data", rxBuffer.byteLength, rxExpectedBytes);
                    }
                  };
                  _this32.serialConnection.on("dataReceived", _onReceiveData);
                  // log.debug("writeData TX:", buf2hex(sendData));
                  _this32.serialConnection.writeData(sendData);
                  serialRxTimeout = setTimeout(function () {
                    _this32.serialConnection.off("dataReceived", _onReceiveData);
                    log.info("write response timeout after", timeout, "ms for msg:", (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertUint8ArrayToHexString)(sendData));
                    reject(new _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout());
                  }, timeout);
                });
              };
              if (!timeoutRetry) {
                _context57.next = 23;
                break;
              }
              _context57.prev = 10;
              _context57.next = 13;
              return writeLowLevel();
            case 13:
              return _context57.abrupt("return", _context57.sent);
            case 16:
              _context57.prev = 16;
              _context57.t0 = _context57["catch"](10);
              if (!(_context57.t0 instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout)) {
                _context57.next = 22;
                break;
              }
              log.warn("will retry write after response timeout...");
              _context57.next = 23;
              break;
            case 22:
              throw _context57.t0;
            case 23:
              _context57.prev = 23;
              _context57.next = 26;
              return writeLowLevel();
            case 26:
              return _context57.abrupt("return", _context57.sent);
            case 29:
              _context57.prev = 29;
              _context57.t1 = _context57["catch"](23);
              if (!(_context57.t1 instanceof _errors__WEBPACK_IMPORTED_MODULE_1__.ErrorWriteResponseTimeout)) {
                _context57.next = 37;
                break;
              }
              if (!throwTimeout) {
                _context57.next = 34;
                break;
              }
              throw _context57.t1;
            case 34:
              return _context57.abrupt("return", undefined);
            case 37:
              throw _context57.t1;
            case 38:
            case "end":
              return _context57.stop();
          }
        }, _callee57, null, [[10, 16], [23, 29]]);
      }));
      function writeData(_x53, _x54) {
        return _writeData.apply(this, arguments);
      }
      return writeData;
    }()
    /**
     * Write data to a serial port using Promise
     * @param {ArrayBuffer} data the bytes to send
     * @param {vexcdc_writeOptions} opt_param2 the write data options
     * @return {Promise}
     * @throws {ErrorWriteResponseTimeout} if the write times out before getting an expected response
     */
  }, {
    key: "writeDataAsync",
    value: function writeDataAsync(data, options) {
      var _this33 = this;
      return new Promise(function (resolve, reject) {
        _this33.writeData(data, options).then(function (reply) {
          // log.debug("writeData RX:", buf2hex(reply));
          // decode simple messages
          if (reply !== undefined && reply !== null) {
            var str = _this33.cdc.decode(reply);
          }

          // check for timeouts and disconnect
          if (_this33.lastStatus !== VexSerialDevice.STATUS_GOOD) {
            reject(reply);
          } else {
            resolve(reply);
          }
        })["catch"](function (err) {
          log.error("writeDataAsync error:", err);
          reject(err);
        });
      });
    }

    /**
     * Download program data to v5
     */
  }, {
    key: "downloadProgramData",
    value: function downloadProgramData(basename, binFile, iniFile, prjFile, progressCallback, doneCallback, extType, vid) {
      var _this34 = this;
      // binfile is mandatory
      if (!binFile) {
        doneCallback(false);
      }

      // Create file names.
      // Find basename of file
      var re = /(.+?)(\.[^.]*$|$)/;
      var name = re.exec(basename)[1];

      // create names for the program files, all have same basename
      var binFileName = name + '.bin';
      var iniFileName = name + '.ini';
      var prjFileName = name + '.prj';

      // get total download size
      var totalBytes = binFile.byteLength;
      totalBytes += iniFile !== undefined ? iniFile.byteLength : 0;
      totalBytes += prjFile !== undefined ? prjFile.byteLength : 0;
      var totalDone = 0;

      // intermediate progress function, we need to account for multiple files now
      var onProgress = function onProgress(progress, current, total) {
        if (progressCallback) {
          progressCallback((totalDone + current) / totalBytes, totalBytes);
        }
        if (progress === 1.0) {
          totalDone += total;
          current = 0;
          log.info("download complete", totalDone, totalBytes);
        }
      };
      log.info("download ini file", iniFileName);
      this.downloadDataAsync(iniFileName, iniFile, onProgress).then(function (status) {
        if (iniFile === undefined || status === true) {
          log.info("download src file", prjFileName);
          return _this34.downloadDataAsync(prjFileName, prjFile, onProgress);
        } else {
          throw false;
        }
      }).then(function (status) {
        if (prjFile === undefined || status === true) {
          log.info("download bin file", binFileName);
          return _this34.downloadDataAsync(binFileName, binFile, onProgress, vid, extType);
        } else {
          throw false;
        }
      }).then(function (status) {
        _this34.linkFileSet(undefined, undefined);
        if (doneCallback) {
          doneCallback(status);
        }
      })["catch"](function (err) {
        _this34.linkFileSet(undefined, undefined);
        if (doneCallback) {
          doneCallback(false);
        }
      });
    }

    /**
     * Download ArrayBuffer (Uint8Array) to the vexv5
     * serial link should be open before calling this function.
     * async using promise
     */
  }, {
    key: "downloadDataAsync",
    value: function downloadDataAsync(name, buf, callback, vid, extType) {
      var _this35 = this;
      return new Promise(function (resolve, reject) {
        _this35.downloadData(name, buf, callback, function (status) {
          // leave resolving status to caller
          resolve(status);
        }, vid, extType);
      });
    }

    /**
     * Download ArrayBuffer (Uint8Array) to the vexv5
     * serial link should be open before calling this function.
     */
  }, {
    key: "downloadData",
    value: function downloadData(name, buf, progressCallback, doneCallback, vid, extType) {
      var _this36 = this;
      // We need some data
      // and must be connected
      if (buf === undefined || !this.connected) {
        // error !
        if (doneCallback != undefined) {
          doneCallback(false);
        }
        return;
      }

      // no download to special capture or vision buffers
      if (this.downloadTarget === VexSerialDevice.FILE_TARGET_CBUF || this.downloadTarget === VexSerialDevice.FILE_TARGET_VBUF) {
        // error !
        if (doneCallback != undefined) {
          doneCallback(false);
        }
        return;
      }

      /** flag to indicate that this will need to write to QSPI and adjust the progress */
      var hasQSPI = this.downloadTarget === VexSerialDevice.FILE_TARGET_A1 || this.downloadTarget === VexSerialDevice.FILE_TARGET_B1 || this.downloadTarget === VexSerialDevice.FILE_TARGET_B2 ||
      // AIM ESP writes needs to wait for flash to be programmed
      _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIM && this.downloadTarget === VexSerialDevice.FILE_TARGET_FLASH && vid === VexSerialDevice.VID.ESP32;
      var mainWriteScale = hasQSPI ? 0.5 : 1;

      // vid can now be passed in
      vid = vid === undefined ? VexSerialDevice.VID.USER : vid;

      // an extended type for files can now be passed in
      extType = extType === undefined ? 0 : extType;

      // address to download to
      var nextAddress = this.downloadAddress;

      // clear status
      this.lastStatus = VexSerialDevice.STATUS_GOOD;

      // and do the download......
      this.writeDataAsync(this.cdc.query1()).then(function (reply) {
        if (_this36.downloadTarget === VexSerialDevice.FILE_TARGET_A1 || _this36.downloadTarget === VexSerialDevice.FILE_TARGET_B1 || _this36.downloadTarget === VexSerialDevice.FILE_TARGET_B2 || _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR && vid === VexSerialDevice.VID.VEXVM) {
          return _this36.writeDataAsync(_this36.cdc.V5_Cdc2FactoryEnable());
        }
      }).then(function (reply) {
        var target = _this36.downloadTarget;
        log.debug('download to', _this36.cdc.hex8(nextAddress), 'with', buf.length, 'bytes');

        // large buffers always go to DDR
        if (!_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR && buf.length > USER_FLASH_MAX_FILE_SIZE && _this36.downloadTarget == VexSerialDevice.FILE_TARGET_QSPI) {
          target = VexSerialDevice.FILE_TARGET_DDR;
        }
        log.debug('download target is ' + (target === VexSerialDevice.FILE_TARGET_DDR ? 'DDR' : target === VexSerialDevice.FILE_TARGET_DDRC ? 'DDRC' : target === VexSerialDevice.FILE_TARGET_DDRE ? 'DDRE' : target === VexSerialDevice.FILE_TARGET_FLASH ? 'FLASH' : target === VexSerialDevice.FILE_TARGET_RADIO ? 'RADIO' : target === VexSerialDevice.FILE_TARGET_QSPI ? 'QSPI' : 'SYS'));

        // normal timeout on V5
        var timeout = 1000;

        // Is this an IQ2 or EXP, if so we need long timeout for flash erase
        if (_this36.deviceType === "IQ2" || _this36.deviceType === "IQ2Controller" || _this36.deviceType === "EXP" || _this36.deviceType === "EXPController") {
          // special app flash timeout, erase can be long
          if (target === VexSerialDevice.FILE_TARGET_FLASH || target === VexSerialDevice.FILE_TARGET_RADIO) timeout = 15000;
          // vexos update needs long timeout
          if (target === VexSerialDevice.FILE_TARGET_A1 || target === VexSerialDevice.FILE_TARGET_B1 || target === VexSerialDevice.FILE_TARGET_B2) {
            timeout = 30000;
          }
        }
        if (_this36.deviceType === "AIM" && target === VexSerialDevice.FILE_TARGET_FLASH) {
          timeout = 5000;
        }
        return _this36.writeDataAsync(_this36.cdc.V5_Cdc2FileInitialize(VexSerialDevice.FILE_FUNC_SAVE, target, vid, VexSerialDevice.OPTIONS.FILE_OVERWRITE, buf, nextAddress, name, extType), {
          timeout: timeout
        });
      }).then(function (reply) {
        var rep = _this36.decodeFileInitReply(reply);
        log.debug("file write resp:", JSON.stringify(rep));
        if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
          _this36.decodeFileNack(rep.ack);
          throw reply;
        }
        var bufferChunkSize = rep.packetSize > 0 && rep.packetSize <= USER_PROG_CHUNK_SIZE ? rep.packetSize : USER_PROG_CHUNK_SIZE;
        var bufferOffset = 0;
        log.debug('download chunk size is', bufferChunkSize);
        return new Promise(function (resolve, reject) {
          var lastBlock = false;

          // TODO: change to a loop...
          var _sendBlock = function sendBlock() {
            var tempBuffer;
            if (buf.byteLength - bufferOffset > bufferChunkSize) {
              tempBuffer = buf.subarray(bufferOffset, bufferOffset + bufferChunkSize);
            } else {
              // last chunk
              // word align length
              var length = (buf.byteLength - bufferOffset + 3) / 4 >>> 0;
              tempBuffer = new Uint8Array(length * 4);
              tempBuffer.set(buf.subarray(bufferOffset, buf.byteLength));
              //tempBuffer = buf.subarray( bufferOffset, buf.byteLength );
              lastBlock = true;
            }
            log.debug("Write addr", _this36.cdc.hex8(nextAddress), 'Size', tempBuffer.length);

            // Write the chunk
            _this36.writeDataAsync(_this36.cdc.V5_Cdc2FileDataWrite(nextAddress, tempBuffer), {
              retryOnTimeout: true
            }).then(function (reply) {
              // check reply
              var rep = _this36.decodeFileWriteReply(reply);
              if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                _this36.decodeFileNack(rep.ack);
                reject(reply);
                return;
              }

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
            if (progressCallback) {
              progressCallback(bufferOffset / buf.byteLength * mainWriteScale, bufferOffset * mainWriteScale, buf.byteLength);
            }

            // next chunk
            bufferOffset += bufferChunkSize;
            nextAddress += bufferChunkSize;
          };

          // Send first block
          _sendBlock();
        });
      }).then(function (reply) {
        // see if we need to set link file and vid before sending exit
        // only do this for .bin files
        if (_this36.linkFile !== undefined && name.match(/.bin/)) {
          var savedExitReply = reply;
          log.debug("download send link file for", name, "as", _this36.linkFileVID, ":", _this36.linkFile);
          return _this36.writeDataAsync(_this36.cdc.V5_Cdc2FileLinkFile(_this36.linkFileVID, 0, _this36.linkFile)).then(function () {
            return savedExitReply;
          });
        } else return reply;
      }).then(function (reply) {
        log.debug('download exit');
        var autoRunAfterDownload = _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR ? VexSerialDevice.OPTIONS.EXIT_HALT : _this36.downloadAutoRun;
        return _this36.writeDataAsync(_this36.cdc.V5_Cdc2FileExit(autoRunAfterDownload), {
          timeout: 10000
        });
      }).then(function (reply) {
        // when sending firmware we have to wait for QSPI to be programmed
        if (hasQSPI) {
          var savedExitReply = reply;
          log.debug('download - programming flash');
          return new Promise(function (resolve, reject) {
            var _pollStatus = function pollStatus() {
              _this36.writeDataAsync(_this36.cdc.V5_Cdc2FactoryStatus(), {
                timeout: 5000
              }).then(function (reply) {
                // check reply
                var rep = _this36.decodeFactoryStatusReply(reply);
                if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                  _this36.decodeFileNack(rep.ack);
                  reject(reply);
                }
                // percent of 255 indicates error
                if (rep.percent === 255) {
                  reject(reply);
                }

                // Done ?
                if (rep.status == 0) {
                  resolve(savedExitReply);
                } else {
                  progressCallback(0.0, buf.byteLength / 200 * (100 + rep.percent), buf.byteLength);
                  setTimeout(function () {
                    _pollStatus();
                  }, 500);
                }
              })["catch"](function () {
                reject(undefined);
              });
            };
            _pollStatus();

            // clear any firmware download target
            _this36.downloadTargetSet(VexSerialDevice.FILE_TARGET_QSPI);
          });
        } else return reply;
      }).then(function (reply) {
        log.debug('download done', (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertBufferToHexString)(reply));

        // check final reply from exit command 
        var status = true;
        var rep = _this36.decodeFileExitReply(reply);
        if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
          _this36.decodeFileNack(rep.ack);
          status = false;
        }
        // update progress
        if (progressCallback) {
          progressCallback(1.0, buf.byteLength, buf.byteLength);
        }
        if (doneCallback) {
          doneCallback(status);
        }
      })["catch"](function (reply) {
        var _convertBufferToHexSt;
        log.warn('download error', (_convertBufferToHexSt = (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertBufferToHexString)(reply)) !== null && _convertBufferToHexSt !== void 0 ? _convertBufferToHexSt : "NO REPLY");
        // update progress
        if (progressCallback) {
          progressCallback(1.0, buf.byteLength, buf.byteLength);
        }
        if (doneCallback) {
          doneCallback(false);
        }
      });
    }

    /**
     * Grab screen layer - debug and test
     * @param layer 
     * @param doneCallback 
     * @param progressCallback callback that is passed the current transfer progress with a range of 0-1
     * @param imagesize optional image size for for the screen data 
     */
  }, {
    key: "uploadScreenLayer",
    value: function uploadScreenLayer(layer, doneCallback, progressCallback, imagesize) {
      var _this37 = this;
      if (this.connected) {
        if (layer > 4) {
          log.warn("invalid layer");
          if (doneCallback != undefined) {
            doneCallback(false, undefined);
            return;
          }
        }

        // Save current target and address
        var currentTarget = this.downloadTarget;
        var currentAddress = this.downloadAddress;
        if (layer === -2) {
          // new, beta 23 and on
          this.downloadTargetSet(VexSerialDevice.FILE_TARGET_CBUF);
          this.downloadAddress = 0; // no need for address
        } else {
          this.downloadTargetSet(VexSerialDevice.FILE_TARGET_DDR);
          if (layer >= 0) this.downloadAddress = 0x100000 + layer * 0x200000;else this.downloadAddress = 0xE00000; // use known address screen cap buffer
        }

        // add adjustable image size for IQ2
        imagesize = imagesize === undefined ? 512 * 4 * 272 : imagesize;
        this.uploadData("null", imagesize, progressCallback, function (status, data) {
          _this37.downloadTargetSet(currentTarget);
          _this37.downloadAddressSet(currentAddress);
          if (doneCallback != undefined) {
            doneCallback(status, data);
          }
        });
      } else {
        if (doneCallback != undefined) {
          doneCallback(false, undefined);
        }
      }
    }

    /**
     * Upload ArrayBuffer (Uint8Array) from the robot
     * serial link should be open before calling this function.
     * @param name name of the file to upload from the robot
     * @param length length of the file to upload
     * @param progressCallback callback that is passed the current transfer progress with a range of 0-1
     * @param doneCallback callback that is passed the status of the upload
     * @param vid optional vid for the file
     */
  }, {
    key: "uploadData",
    value: function uploadData(name, length, progressCallback, doneCallback, vid) {
      var _this38 = this;
      // we must be connected
      if (!this.connected) {
        // error !
        if (doneCallback != undefined) doneCallback(false, undefined);
        return;
      }
      var st = 0;

      // vid can now be passed in
      vid = vid === undefined ? VexSerialDevice.VID.USER : vid;

      // address to upload from, not important when uploading from QSPI
      var nextAddress = 0;
      if (this.downloadTarget === VexSerialDevice.FILE_TARGET_DDR || this.downloadTarget === VexSerialDevice.FILE_TARGET_CBUF || this.downloadTarget === VexSerialDevice.FILE_TARGET_VBUF) nextAddress = this.downloadAddress;

      // receive buffer, yet to be assigned
      var buf = undefined;
      var crchead = undefined;

      // clear status
      this.lastStatus = VexSerialDevice.STATUS_GOOD;

      // and do the download......
      this.writeDataAsync(this.cdc.query1()).then(function (reply) {
        var target = _this38.downloadTarget;
        log.info("upload start - address", _this38.cdc.hex8(nextAddress), "vid", _this38.cdc.hex8(vid));
        st = Date.now();
        return _this38.writeDataAsync(_this38.cdc.V5_Cdc2FileInitialize(VexSerialDevice.FILE_FUNC_READ, target, vid, 0, undefined, nextAddress, name), {
          timeout: 1000
        });
      }).then(function (reply) {
        var rep = _this38.decodeFileInitReply(reply);
        var bufferChunkSize = rep.packetSize > 0 && rep.packetSize <= USER_PROG_CHUNK_SIZE ? rep.packetSize : USER_PROG_CHUNK_SIZE;
        var bufferOffset = 0;
        var dataLength = rep.fileSize;
        var requestChunkSize = 0;
        // uploading from DDR, use requested length
        if (dataLength === 0 && (_this38.downloadTarget === VexSerialDevice.FILE_TARGET_DDR || _this38.downloadTarget === VexSerialDevice.FILE_TARGET_CBUF || _this38.downloadTarget === VexSerialDevice.FILE_TARGET_VBUF)) dataLength = length;

        // some really weird issues with screen capture when all 0xFF
        if (bufferChunkSize === 512) bufferChunkSize = 496;
        log.debug("upload data len is", dataLength);
        log.debug("upload chunk size is", bufferChunkSize);

        // resize buffer, sanity check on size
        if (dataLength > 0 && dataLength < USER_FLASH_MAX_FILE_SIZE) {
          buf = new Uint8Array(dataLength);
        }

        // save crc
        crchead = rep.crc32;
        return new Promise(function (resolve, reject) {
          var lastBlock = false;
          var _readBlock = function readBlock() {
            if (buf.byteLength - bufferOffset > bufferChunkSize) {
              requestChunkSize = bufferChunkSize;
            } else {
              requestChunkSize = buf.byteLength - bufferOffset;
              lastBlock = true;
            }

            //log.debug("Read addr", this.cdc.hex8(nextAddress), "Size", requestChunkSize);

            // Read the chunk
            _this38.writeDataAsync(_this38.cdc.V5_Cdc2FileDataRead(nextAddress, requestChunkSize + 3 & 0xFFFFFFFC)).then(function (reply) {
              // check reply
              var rep = _this38.decodeFileReadReply(reply);
              if (rep.ack !== _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
                _this38.decodeFileNack(rep.ack);
                reject(reply);
              }

              // copy received data
              buf.set(rep.data.subarray(0, requestChunkSize), bufferOffset);
              bufferOffset += requestChunkSize;

              // last block sent ?
              if (lastBlock) {
                // check crc
                var crc = (0,_VexCRC__WEBPACK_IMPORTED_MODULE_16__.crc32)(buf, 0);
                // memory upload doesn't have crc
                if (_this38.downloadTarget === VexSerialDevice.FILE_TARGET_DDR || _this38.downloadTarget === VexSerialDevice.FILE_TARGET_CBUF || _this38.downloadTarget === VexSerialDevice.FILE_TARGET_VBUF || crchead === 0xFFFFFFFF) {
                  crc = crchead;
                }
                if (crchead === crc) {
                  log.debug("upload: good crc", _this38.cdc.hex8(crc));
                  resolve(reply);
                } else {
                  reject(reply);
                }
              } else {
                _readBlock();
              }
            })["catch"](function (reply) {
              reject(reply);
            });

            // update progress
            if (progressCallback != undefined) progressCallback(bufferOffset / buf.byteLength);

            // next chunk
            nextAddress += requestChunkSize;
          };

          // Send first block
          _readBlock();
        });
      }).then(function (reply) {
        log.info("upload exit");
        // remove run option, has no meaning
        // V5 will just ACK this
        return _this38.writeDataAsync(_this38.cdc.V5_Cdc2FileExit(0), {
          timeout: 100
        });
      }).then(function (reply) {
        log.info("upload done");
        var delta = (Date.now() - st) / 1000.0;

        // update progress
        if (progressCallback != undefined) {
          progressCallback(1.0);
        }
        if (doneCallback != undefined) {
          doneCallback(true, buf);
        }
      })["catch"](function (reply) {
        if (reply instanceof ArrayBuffer) {
          log.warn("upload error", (0,_VEXDFU_helpers__WEBPACK_IMPORTED_MODULE_14__.buf2hex)(reply));
        } else {
          log.warn("upload error", reply);
        }
        // update progress
        if (progressCallback != undefined) {
          progressCallback(0);
        }
        if (doneCallback != undefined) {
          doneCallback(false, undefined);
        }
      });
    }

    /**
     * Decode a received File initialization reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileInitReply",
    value: function decodeFileInitReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF,
        packetSize: 0,
        fileSize: 0,
        crc32: 0
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_INIT.cmd) {
          reply.ack = buf[5];
          reply.packetSize = dvb.getUint16(6, true);
          reply.fileSize = dvb.getUint32(8, true);
          reply.crc32 = dvb.getUint32(12, true);
        }
      }
      return reply;
    }

    /**
     * Decode a received File write reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileWriteReply",
    value: function decodeFileWriteReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_WRITE.cmd) {
          reply.ack = buf[5];
        }
      }
      return reply;
    }

    /**
     * Decode a received File read reply
     * @param msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileReadReply",
    value: function decodeFileReadReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF,
        length: 0,
        addr: 0,
        data: undefined
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_READ.cmd) {
          if (length === 7) {
            reply.ack = buf[5];
          } else {
            reply.ack = _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK;
            reply.addr = dvb.getUint32(extcmd + 1, true);
            reply.length = length - 7;
            reply.data = new Uint8Array(buf.buffer, buf.byteOffset + extcmd + 5, reply.length);
          }
        }
      }
      return reply;
    }

    /**
     * Decode a received File Exit reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileExitReply",
    value: function decodeFileExitReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_EXIT.cmd) {
          reply.ack = buf[5];
        }
      }
      return reply;
    }

    /**
     * Decode a get directory reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileGetDirectoryReply",
    value: function decodeFileGetDirectoryReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF,
        count: 0
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_DIR.cmd) {
          reply.ack = buf[5];
          reply.count = dvb.getUint16(6, true);
        }
      }
      return reply;
    }

    /**
     * Decode a get directory entry reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFileGetDirectoryEntryReply",
    value: function decodeFileGetDirectoryEntryReply(msg) {
      // Decode file init
      var reply = {
        ack: 0xFF,
        index: 0,
        size: 0,
        loadAddr: 0,
        crc32: 0,
        type: 0,
        timestamp: 0,
        version: 0,
        name: ''
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);

        // get dir entry and get file metadata have same format
        if (buf[4] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_DIR_ENTRY.cmd || buf[4] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_GET_INFO.cmd) {
          reply.ack = buf[5];
          reply.index = buf[6];
          // new, check for ACK, could be no file error
          if (this.cdc.cdc2MessageGetLength(buf) > 4 && reply.ack === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply.size = dvb.getUint32(7, true);
            reply.loadAddr = dvb.getUint32(11, true);
            reply.crc32 = dvb.getUint32(15, true);
            reply.type = dvb.getUint32(19, true);
            reply.timestamp = dvb.getUint32(23, true) + _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.J2000_EPOCH;
            reply.version = dvb.getUint32(27, true);

            // for development we allow full 32 byte filename to be returned now
            var nameLen = dvb.byteLength - buf.byteOffset - 31 - 2;
            if (nameLen > 32) {
              nameLen = 32;
            }
            reply.name = '';
            for (var offset = 31; offset < 31 + nameLen; offset++) {
              var _c = dvb.getUint8(offset);
              if (_c === 0) {
                break;
              }
              reply.name += String.fromCharCode(_c);
            }
          }
        }
      }
      return reply;
    }

    /**
     * Decode a request for user file system status for a file
     * @param msg 
     */
  }, {
    key: "decodeFileGetUserStatusReply",
    value: function decodeFileGetUserStatusReply(msg) {
      var reply = {
        ack: 0xFF,
        slot: -1,
        requestedSlot: -1
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        //let dvb = new DataView( buf.buffer, buf.byteOffset );

        if (buf[4] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.FILE_USER_STAT.cmd) {
          reply.ack = buf[5];
          reply.slot = buf[6];
          if (buf[7] !== undefined) {
            reply.requestedSlot = buf[7];
          }
        }
      }
      return reply;
    }

    /**
     * Decode a factory firmware upgrade status reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeFactoryStatusReply",
    value: function decodeFactoryStatusReply(msg) {
      var reply = {
        ack: 0xFF,
        status: -1,
        percent: 0
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      reply.ack = buf[5];
      reply.status = buf[6];
      reply.percent = buf[7];
      return reply;
    }

    /**
     * Decode a received ack/mack
     * @param  (number} ack the CDC2 ack to decode
     */
  }, {
    key: "decodeFileNack",
    value: function decodeFileNack(ack) {
      this.lastStatus = ack;
      switch (ack) {
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK:
          log.debug('ack received');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK:
          log.debug('nak received');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_PACKET_CRC:
          log.debug('bad packet crc');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_CMD_LENGTH:
          log.debug('payload length error');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_SIZE:
          log.debug('requested transfer size too large');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_CRC:
          log.debug('program crc error');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_FILE:
          log.debug('program file not found error');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_INIT:
          log.debug('file transfer is not initialized');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_FUNC:
          log.debug('initialization invalid for this function');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_ALIGN:
          log.debug('data alignment error (not multiple of 4 bytes)');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_ADDR:
          log.debug('invalid packet address');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_INCOMPLETE:
          log.debug('download incomplete');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_DIR_INDEX:
          log.debug('directory entry at index does not exist');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_MAX_USER_FILES:
          log.debug('max user files on file system');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_FILE_EXISTS:
          log.debug('program exists and overwrite flag not set');
          break;
        case _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_NACK_FILE_SYS_FULL:
          log.debug('file could not be writtem, file system may be full');
          break;
        default:
          log.debug('unknown nak received');
          break;
      }
    }

    /**
     * Decode a log status reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeLogStatusReply",
    value: function decodeLogStatusReply(msg) {
      var reply = {
        ack: 0xFF,
        count: 0
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.LOG_STATUS.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply.ack = buf[extcmd + 1];
            reply.count = dvb.getUint32(extcmd + 3, true);
          }
        }
      }
      return reply;
    }

    /**
     * Decode a log read reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeLogReadReply",
    value: function decodeLogReadReply(msg) {
      var reply = {
        ack: 0xFF,
        offset: 0,
        count: 0,
        entries: []
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.LOG_READ.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply.ack = buf[extcmd + 1];
            // sizeof each entry, should be 8
            var size = buf[extcmd + 2];
            // number of entries
            reply.offset = dvb.getUint32(extcmd + 3, true);
            reply.count = dvb.getUint16(extcmd + 7, true);
            extcmd += 9;
            for (var i = 0; i < reply.count; i++) {
              var entry = {
                code: dvb.getUint8(extcmd),
                type: dvb.getUint8(extcmd + 1),
                desc: dvb.getUint8(extcmd + 2),
                spare: dvb.getUint8(extcmd + 3),
                time: dvb.getUint32(extcmd + 4, true)
              };
              extcmd += size;

              // add to array
              reply.entries.push(entry);
            }
          }
        }
      }
      return reply;
    }

    /**
     * Decode a user data reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeUserDataReply",
    value: function decodeUserDataReply(msg) {
      var reply = {
        ack: 0xFF,
        channel: 0,
        data: undefined
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) extcmd = 5;
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.USER_READ.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply.ack = buf[extcmd + 1];
            // sizeof each entry, should be 8
            reply.channel = buf[extcmd + 2];

            // 3 byte overhead and 2 bytes for ack and channel
            var dataLength = length - 3 - 2;
            if (dataLength > 0) {
              reply.data = new Uint8Array(dataLength);
              reply.data.set(buf.subarray(extcmd + 3, extcmd + 3 + dataLength));
            }
          }
        }
      }
      return reply;
    }

    /**
     * Decode a radio status reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeRadioStatusReply",
    value: function decodeRadioStatusReply(msg) {
      var reply = {
        ack: 0xFF,
        device: 0,
        quality: 0,
        strength: 0,
        channel: 0,
        timeslot: 0
      };
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.RADIO_STATUS.cmd) {
          if (buf[extcmd + 1] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply.ack = buf[extcmd + 1];
            reply.device = buf[extcmd + 2];
            reply.quality = dvb.getUint16(extcmd + 3, true);
            reply.strength = dvb.getInt16(extcmd + 5, true);
            reply.channel = buf[extcmd + 7];
            reply.timeslot = buf[extcmd + 8];

            // if (this[_debugMsg]) {
            //   for (let i = 0; i < length - 3; i++)
            //     this.msg5626[i] = dvb.getUint8(extcmd + 1 + i);
            // }
          }
        }
      }
      return reply;
    }

    /**
     * Decode a user program ctrl reply
     * @param  (Uint8Array | ArrayBuffer} msg the CDC2 reply to decode
     */
  }, {
    key: "decodeUserProgCtrlReply",
    value: function decodeUserProgCtrlReply(msg) {
      var reply;
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.SYS_USER_PROG.cmd) {
          if (buf[extcmd + 1] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            reply = new Uint8Array(length - 3);
            reply.set(buf.subarray(extcmd + 1, extcmd + 1 + reply.length));
          }
        }
      }
      return reply;
    }

    /**
     * Decode a cdc2 KV read command
     * @param msg 
     */
  }, {
    key: "decodeSysKVRead",
    value: function decodeSysKVRead(msg) {
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.SYS_KV_LOAD.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            var value = new TextDecoder("UTF-8").decode(buf.slice(extcmd + 2, extcmd + length - 2));
            // remove trailing null if present
            var c = value.indexOf('\0');
            if (c > -1) {
              value = value.substr(0, c);
            }
            return value;
          }
        }
      }
      return undefined;
    }

    /**
     * Decode a cdc2 system flags command
     * @param msg 
    */
  }, {
    key: "decodeSysFlagsRead",
    value: function decodeSysFlagsRead(msg) {
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      var flags = undefined;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.SYS_FLAGS.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            flags = dvb.getUint32(extcmd + 2, true);
            if (length === 11) {
              // new extended reply from beta 23
              this.battery = (dvb.getUint8(extcmd + 6) & 0x0F) * 8;
              if ((flags & 0x0100) != 0 || (flags & 0x0600) === 0x0600) {
                this.batteryController = (dvb.getUint8(extcmd + 6) >> 4 & 0x0F) * 8;
              } else {
                this.batteryController = undefined;
              }

              // this.controllerTethered

              if ((flags & 0x0600) === 0x0600) {
                this.radioQuality = (dvb.getUint8(extcmd + 7) & 0x0F) * 8;
                this.radioSearching = false;
              } else {
                this.radioQuality = undefined;
              }
              if ((flags & 0x0600) === 0x0200) {
                this.radioSearching = true;
              } else {
                this.radioSearching = false;
              }
              if ((flags & 0x2000) != 0) {
                this.batteryPartner = (dvb.getUint8(extcmd + 7) >> 4 & 0x0F) * 8;
              } else {
                this.batteryPartner = undefined;
              }

              // final byte is now running program, 0 for none. vexos 1.0.1 and on.
              this.currentProgram = dvb.getUint8(extcmd + 8);
              if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIM) {
                this.currentProgram = this.currentProgram & 0x0F;
              }
              if (this.battery && this.battery > 100) {
                this.battery = 100;
              }
              if (this.batteryController && this.batteryController > 100) {
                this.batteryController = 100;
              }
              if (this.radioQuality && this.radioQuality > 100) {
                this.radioQuality = 100;
              }
              if (this.batteryPartner && this.batteryPartner > 100) {
                this.batteryPartner = 100;
              }
            }
          }
        }
      }
      return flags;
    }
  }, {
    key: "updateSystemVersionString",
    value: function updateSystemVersionString() {
      this.versionSystemStr = this.versionSystem[0] + '.' + this.versionSystem[1] + '.' + this.versionSystem[2];
      if (this.versionSystem[3] !== 0) this.versionSystemStr += '.b' + this.versionSystem[3];
    }

    /**
     * Decode a cdc2 system status command
     * @param msg 
     */
  }, {
    key: "decodeSysStatusRead",
    value: function decodeSysStatusRead(msg) {
      var buf = msg instanceof ArrayBuffer ? new Uint8Array(msg) : msg;
      if (this.cdc.cdc2ValidateMessage(buf)) {
        var dvb = new DataView(buf.buffer, buf.byteOffset);
        var extcmd = 4;
        var length = this.cdc.cdc2MessageGetLength(buf);
        if (length > 128) {
          extcmd = 5;
        }
        if (buf[extcmd] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.ECMDS.SYS_STATUS.cmd) {
          if (buf[extcmd + 1] == _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK) {
            this.versionUser[0] = dvb.getUint32(extcmd + 3 + 0, false);
            this.versionUser[1] = dvb.getUint32(extcmd + 3 + 4, false);
            this.versionUser[2] = dvb.getUint32(extcmd + 3 + 8, false);
            this.versionUser[3] = dvb.getUint32(extcmd + 3 + 12, true);

            // controller does not report system version in the
            // A4 message so update here
            var sysOk = false;
            for (var i = 0; i < this.versionSystem.length; i++) {
              if (this.versionSystem[i] !== 0) {
                sysOk = true;
              }
            }
            if (sysOk === false) {
              this.versionSystem[0] = dvb.getUint8(extcmd + 3 + 0);
              this.versionSystem[1] = dvb.getUint8(extcmd + 3 + 1);
              this.versionSystem[2] = dvb.getUint8(extcmd + 3 + 2);
              this.versionSystem[3] = dvb.getUint8(extcmd + 3 + 3);
              this.brainVersionSystem = new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(this.versionSystem[0], this.versionSystem[1], this.versionSystem[2], this.versionSystem[3]);
              log.debug("syst version:", this.brainVersionSystem.toInternalString());
              this.updateSystemVersionString();
              var cpu0Major = dvb.getUint8(extcmd + 3 + 4);
              var cpu0Minor = dvb.getUint8(extcmd + 3 + 5);
              var cpu0Build = dvb.getUint8(extcmd + 3 + 6);
              var cpu0Beta = dvb.getUint8(extcmd + 3 + 7);
              this.brainVersionCPU0 = new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(cpu0Major, cpu0Minor, cpu0Build, cpu0Beta);
              log.debug("cpu0 version:", this.brainVersionCPU0.toInternalString());
              var cpu1Major = dvb.getUint8(extcmd + 3 + 8);
              var cpu1Minor = dvb.getUint8(extcmd + 3 + 9);
              var cpu1Build = dvb.getUint8(extcmd + 3 + 10);
              var cpu1Beta = dvb.getUint8(extcmd + 3 + 11);
              this.brainVersionCPU1 = new _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion(cpu1Major, cpu1Minor, cpu1Build, cpu1Beta);
              log.debug("cpu1 version:", this.brainVersionCPU1.toInternalString());
            }
            if (length > 25) {
              this.uniqueId = dvb.getUint32(extcmd + 3 + 16, true);
              this.sysFlags[0] = dvb.getUint8(extcmd + 3 + 20);
              this.sysFlags[1] = dvb.getUint8(extcmd + 3 + 21);
              this.sysFlags[2] = dvb.getUint8(extcmd + 3 + 22);
              this.sysFlags[3] = dvb.getUint8(extcmd + 3 + 23);
              this.sysFlags[4] = dvb.getUint8(extcmd + 3 + 24);
              this.sysFlags[6] = dvb.getUint8(extcmd + 3 + 26);
              this.eventBrain = false;
              this.assetInvalid = false;
              if (this.sysFlags[6] & 0x01) {
                this.eventBrain = true;
              }
              this.romBootloaderActive = false;
              if (this.sysFlags[6] & 0x02) {
                this.romBootloaderActive = true;
              }
              this.ramBootloaderActive = false;
              if (this.sysFlags[6] & 0x04) {
                this.ramBootloaderActive = true;
              }
              if (this.sysFlags[2] & 0x01) {
                this.assetInvalid = true;
              }

              // final 4 bytes are now golden image version as read from QSPI
              // so in slightly different format
              // major.minor.beta.(build:6 cpu:2) (big endian)
              // build is top 6 bits of LSB, cpu is lower 2 bits
              this.versionGolden = dvb.getUint32(extcmd + 3 + 28, false);
              var dbgLen = 34;
              if (length > 37) {
                this.versionNxp = dvb.getUint32(extcmd + 3 + 32, false);
                dbgLen += 4;
              } else {
                this.versionNxp = 0;
              }
            } else {
              // dummy data
              this.uniqueId = 1234;
              this.sysFlags[0] = 0;
              this.sysFlags[1] = 0;
              this.sysFlags[2] = 0;
              this.sysFlags[3] = 0;
              this.sysFlags[4] = 0;
              this.sysFlags[6] = 0;
              this.versionGolden = 0;
              this.versionNxp = 0;
              this.eventBrain = false;
              this.romBootloaderActive = false;
              this.ramBootloaderActive = false;
              this.assetInvalid = false;
            }
          }
        }
      }
      return undefined;
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
      // log.debug("fire event", eventName, ...args);
      if (this.eventCallbacks[eventName]) {
        this.eventCallbacks[eventName].forEach(function (callback) {
          callback.apply(void 0, args);
        });
      }
    }
    //#endregion event system
  }, {
    key: "onConnect",
    value: function () {
      var _onConnect = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee58() {
        var _this39 = this;
        var portInfo;
        return _regeneratorRuntime().wrap(function _callee58$(_context58) {
          while (1) switch (_context58.prev = _context58.next) {
            case 0:
              log.debug("serial port connected");
              this.isConnecting = true;
              if (!this.isUpdatingFirmware) {
                this.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connecting);
              }
              this.flagsSentSinceConnection = false;
              _context58.next = 6;
              return this.serialConnection.getOpenPortInformation();
            case 6:
              portInfo = _context58.sent;
              log.debug("portInfo:", portInfo);
              this.processPortInformation(portInfo);
              this.isVexAdminPort(this.isDeviceBrain, this.isDeviceArm, this.isDeviceAIVision).then(function (isAdmin) {
                log.debug("found admin port", isAdmin);
                if (_this39.isDeviceArm) {
                  _this39.fireEvent("connectedToArm");
                  return;
                }
                if (!isAdmin) {
                  _this39.fireEvent("connectedToInvalidPort");
                  _this39.closeConnection();
                  _this39.isConnecting = false;
                  return;
                }
                if (_this39.isDeviceBrain) {
                  _this39.fetchBrainInfo().then(function (res) {
                    log.debug("brain info:", res);

                    // if we don't get the data assume dfu
                    _this39._inDFUMode = !res;
                    // TODO: there may be times when we don't actually get the info...
                    _this39.isConnected = true;
                    if (_this39.isUpdatingFirmware) {
                      return;
                    }
                    if (_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsV5 && _this39.eventBrain) {
                      // "Smart Field Controller Brain" is connected and that is not a regular V5 Brain
                      // Tell the user that kind of brain is not supported and close the connection
                      log.warn("Connected to a field controller... Not supported");
                      _this39.closeConnection();
                      _this39.fireEvent("connectedToFieldController");
                      return;
                    }
                    _this39.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected);
                    if (_platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsElectron) {
                      _this39.delay(300).then(function () {
                        // we need to "auto" connect to the user port
                        var adminConnectedPort = _this39.serialConnection.connectedFilter;
                        var userConnectedPort = _this39.convertPortFilterToUser(adminConnectedPort);
                        _this39.serialConnectionUserPort.connectedFilter = userConnectedPort;
                        _this39.serialConnectionUserPort.openPort(true);
                      });
                    }

                    // check if update is needed
                    // only need to check the brain as we can't get the controller info if connected directly to a brain...
                    if (_this39.deviceType !== "IQ" && _this39.deviceType !== "AIVision") {
                      _this39.checkUpdateNeededBrain().then(function () {
                        log.debug("brain update needed state:", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions[_this39._needsUpdateStateBrain]);
                        _this39.fireEvent("deviceInfoUpdated", _this39.getRobotInfo());
                      });
                    }
                  });
                } else if (_this39.isDeviceAIVision) {
                  _this39.fetchBrainInfo().then(function (res) {
                    log.debug("brain info:", res);

                    // if we don't get the data assume dfu
                    _this39._inDFUMode = !res;
                    // TODO: there may be times when we don't actually get the info...
                    _this39.isConnected = true;
                    if (_this39.isUpdatingFirmware) {
                      return;
                    }
                    _this39.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected);
                    if (_platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsElectron) {
                      _this39.delay(300).then(function () {
                        // we need to "auto" connect to the user port
                        var adminConnectedPort = _this39.serialConnection.connectedFilter;
                        var userConnectedPort = _this39.convertPortFilterToUser(adminConnectedPort);
                        _this39.serialConnectionUserPort.connectedFilter = userConnectedPort;
                        _this39.serialConnectionUserPort.openPort(true);
                      });
                    }
                  });
                } else {
                  _this39.fetchControllerInfo().then(function () {
                    // TODO: fetch controller information here
                    _this39.isConnected = true;
                    if (_this39.isUpdatingFirmware) {
                      return;
                    }
                    _this39._enableControllerPolling = true;
                    _this39.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected);
                    if (_platformInfo__WEBPACK_IMPORTED_MODULE_12__.PlatformIsElectron && !_targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsV5) {
                      _this39.delay(300).then(function () {
                        // we need to "auto" connect to the user port
                        var adminConnectedPort = _this39.serialConnection.connectedFilter;
                        var userConnectedPort = _this39.convertPortFilterToUser(adminConnectedPort);
                        _this39.serialConnectionUserPort.connectedFilter = userConnectedPort;
                        _this39.serialConnectionUserPort.openPort(true);
                      });
                    }

                    // check if update is needed
                    // use full check as we may get the brain info later...
                    _this39.checkUpdateNeeded().then(function () {
                      log.debug("initial brain update needed state:", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions[_this39._needsUpdateStateBrain]);
                      log.debug("initial controller update needed state:", _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions[_this39._needsUpdateStateController]);

                      // start polling the controller
                      _this39.startPollingController();
                      _this39.fireEvent("deviceInfoUpdated", _this39.getRobotInfo());
                    });
                  });
                }
              });
            case 10:
            case "end":
              return _context58.stop();
          }
        }, _callee58, this);
      }));
      function onConnect() {
        return _onConnect.apply(this, arguments);
      }
      return onConnect;
    }()
  }, {
    key: "onDisconnect",
    value: function onDisconnect() {
      log.debug("serial port disconnected");
      if (this.isConnected) {
        this.closeConnectionUserPort();
      }
      this.isConnecting = false;
      this.isConnected = false;
      this._inDFUMode = false;
      this.versionSystem = [0, 0, 0, 0];
      this.brainVersionSystem = null;
      this.brainVersionCPU0 = null;
      this.brainVersionCPU1 = null;
      this.controllerVersionAtmel = null;
      this.controllerVersionRadio = null;
      this._needsUpdateStateBrain = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure;
      this._needsUpdateStateController = _enums__WEBPACK_IMPORTED_MODULE_9__.UpdateNeededOptions.Unsure;
      this._enableControllerPolling = false;

      // reset controller status/flag on disconnect to prevent thinking a brain
      // is connected on new controller connection
      this.controllerConnectionStatus = 0;
      this.flagsSentSinceConnection = false;
      if (!this.isUpdatingFirmware) {
        if (this.isDeviceController) {
          this.stopControllerUserDataPolling();
          this.stopPollingController();
        }
        this.fireEvent("connectionStateChange", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Disconnected);
      }
    }

    /**
     * called when the user port connection is completed
     */
  }, {
    key: "onConnectUserPort",
    value: function onConnectUserPort() {
      log.debug("serial user port connected");
      this.serialConnection.getOpenPortInformation().then(function (portInfo) {
        log.debug("user port portInfo:", portInfo);
      });
      this.isConnectingUserPort = false;
      this.isConnectedUserPort_ = true;
      this.fireEvent("connectionStateChangeUserPort", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Connected);
    }

    /**
     * called when the user port is disconnected
     */
  }, {
    key: "onDisconnectUserPort",
    value: function onDisconnectUserPort() {
      log.debug("serial user port disconnected");
      this.isConnectingUserPort = false;
      this.isConnectedUserPort_ = false;
      this.fireEvent("connectionStateChangeUserPort", _enums__WEBPACK_IMPORTED_MODULE_9__.VexSerialDeviceConnectionStates.Disconnected);
    }
  }, {
    key: "onUserPortReceivedData",
    value: function onUserPortReceivedData(data) {
      var dataStr = utf8decoder.decode(data);
      log.debug("user received:", (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertBufferToHexString)(data));
      this.fireEvent("receivedUserData", dataStr);
    }
    //#endregion event handlers

    //#region AI Vision commands
    /**
     * This tells the AI Vision sensor to auto white balance the image
     * @returns a promise that resolves when the command has been sent
     */
  }, {
    key: "AITriggerAutoWhiteBalance",
    value: function () {
      var _AITriggerAutoWhiteBalance = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee59() {
        var packet;
        return _regeneratorRuntime().wrap(function _callee59$(_context59) {
          while (1) switch (_context59.prev = _context59.next) {
            case 0:
              if (this.isConnected) {
                _context59.next = 2;
                break;
              }
              return _context59.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              packet[0] = VexSerialDevice.AI2CAM_SETTINGS_CMD;
              packet[1] = VexSerialDevice.AI2CAM_CMD_FLAG_SENSOR;
              packet[3] = 0;
              packet[4] = 0;
              packet[5] = 0x04;
              _context59.prev = 8;
              _context59.next = 11;
              return this.writeDataAsync(this.cdc.AI2_Cdc2Settings(packet));
            case 11:
              _context59.next = 17;
              break;
            case 13:
              _context59.prev = 13;
              _context59.t0 = _context59["catch"](8);
              log.warn("error trying to trigger auto white balance");
              log.warn(_context59.t0);
            case 17:
            case "end":
              return _context59.stop();
          }
        }, _callee59, this, [[8, 13]]);
      }));
      function AITriggerAutoWhiteBalance() {
        return _AITriggerAutoWhiteBalance.apply(this, arguments);
      }
      return AITriggerAutoWhiteBalance;
    }()
    /**
     * Tells the connected AI Vision sensor to set the specified color description.
     * 
     * This is only really useful for the utility as it would allow the logic to run
     * on the sensor instead of in the utility code
     * @param color the color description that is to be set
     * @returns a promise that resolves when the command has been sent
     */
  }, {
    key: "AISetColorDescription",
    value: (function () {
      var _AISetColorDescription = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee60(color) {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee60$(_context60) {
          while (1) switch (_context60.prev = _context60.next) {
            case 0:
              if (this.isConnected) {
                _context60.next = 2;
                break;
              }
              return _context60.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = color.id;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_COLOR;
              dvb.setUint8(4, color.id);
              dvb.setUint8(5, color.red);
              dvb.setUint8(6, color.green);
              dvb.setUint8(7, color.blue);
              dvb.setFloat32(8, color.hueRange, true);
              dvb.setFloat32(12, color.saturationRange, true);
              _context60.prev = 14;
              log.debug("AISetCodeDescription - setting color:", color);
              _context60.next = 18;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 18:
              log.debug("set color completed");
              _context60.next = 23;
              break;
            case 21:
              _context60.prev = 21;
              _context60.t0 = _context60["catch"](14);
            case 23:
            case "end":
              return _context60.stop();
          }
        }, _callee60, this, [[14, 21]]);
      }));
      function AISetColorDescription(_x55) {
        return _AISetColorDescription.apply(this, arguments);
      }
      return AISetColorDescription;
    }()
    /**
     * Tells the connected AI Vision sensor to clear specified color.
     * 
     * @returns a promise that resolves when the command has been sent
     */
    )
  }, {
    key: "AIClearColor",
    value: (function () {
      var _AIClearColor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee61(index) {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee61$(_context61) {
          while (1) switch (_context61.prev = _context61.next) {
            case 0:
              if (this.isConnected) {
                _context61.next = 2;
                break;
              }
              return _context61.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = index;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_COLOR;
              dvb.setUint8(4, index);
              dvb.setUint8(5, 0);
              dvb.setUint8(6, 0);
              dvb.setUint8(7, 0);
              dvb.setFloat32(8, 0, true);
              dvb.setFloat32(12, 0, true);
              _context61.prev = 14;
              log.debug("AIClearColor - color index:", index);
              _context61.next = 18;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 18:
              log.debug("AIClearColor - completed");
              _context61.next = 23;
              break;
            case 21:
              _context61.prev = 21;
              _context61.t0 = _context61["catch"](14);
            case 23:
            case "end":
              return _context61.stop();
          }
        }, _callee61, this, [[14, 21]]);
      }));
      function AIClearColor(_x56) {
        return _AIClearColor.apply(this, arguments);
      }
      return AIClearColor;
    }()
    /**
     * Tells the connected AI Vision sensor to set the specified code description.
     * 
     * This is only really useful for the utility as it would allow the logic to run
     * on the sensor instead of in the utility code
     * @param code the code description that is to be set
     * @returns a promise that resolves when the command has been sent
     */
    )
  }, {
    key: "AISetCodeDescription",
    value: (function () {
      var _AISetCodeDescription = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee62(code) {
        var packet, dvb, colorIDs, result;
        return _regeneratorRuntime().wrap(function _callee62$(_context62) {
          while (1) switch (_context62.prev = _context62.next) {
            case 0:
              if (this.isConnected) {
                _context62.next = 2;
                break;
              }
              return _context62.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = code.id;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE;

              // make a list of the color ids 
              colorIDs = [code.color1, code.color2, code.color3, code.color4, code.color5] // make list from raw values
              .filter(function (colorID) {
                return (colorID !== null || colorID !== undefined) && colorID > 0;
              }); //remove undefined or invalid ids
              dvb.setUint8(4, code.id);
              dvb.setUint8(5, code.length);
              dvb.setInt16(6, colorIDs[0] || 0, true);
              dvb.setInt16(8, colorIDs[1] || 0, true);
              dvb.setInt16(10, colorIDs[2] || 0, true);
              dvb.setInt16(12, colorIDs[3] || 0, true);
              dvb.setInt16(14, colorIDs[4] || 0, true);
              dvb.setInt16(16, colorIDs[5] || 0, true);
              dvb.setInt16(18, colorIDs[6] || 0, true);
              _context62.prev = 18;
              log.debug("AISetCodeDescription - setting code:", code);
              _context62.next = 22;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 22:
              result = _context62.sent;
              log.debug("set code completed");
              _context62.next = 28;
              break;
            case 26:
              _context62.prev = 26;
              _context62.t0 = _context62["catch"](18);
            case 28:
            case "end":
              return _context62.stop();
          }
        }, _callee62, this, [[18, 26]]);
      }));
      function AISetCodeDescription(_x57) {
        return _AISetCodeDescription.apply(this, arguments);
      }
      return AISetCodeDescription;
    }()
    /**
     * Tells the connected AI Vision sensor to return the definition of the code for the specified ID.
     * 
     * This is for testing only. it will log to the console
     * 
     * @param index the code index to check
     */
    )
  }, {
    key: "AIGetCodeDescription",
    value: (function () {
      var _AIGetCodeDescription = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee63(index) {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee63$(_context63) {
          while (1) switch (_context63.prev = _context63.next) {
            case 0:
              if (this.isConnected) {
                _context63.next = 2;
                break;
              }
              return _context63.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = index;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE;
              dvb.setUint8(4, index);
              _context63.prev = 9;
              _context63.next = 12;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionGetSettings(packet));
            case 12:
              _context63.next = 16;
              break;
            case 14:
              _context63.prev = 14;
              _context63.t0 = _context63["catch"](9);
            case 16:
            case "end":
              return _context63.stop();
          }
        }, _callee63, this, [[9, 14]]);
      }));
      function AIGetCodeDescription(_x58) {
        return _AIGetCodeDescription.apply(this, arguments);
      }
      return AIGetCodeDescription;
    }()
    /**
     * Tells the connected AI Vision sensor to clear specified code.
     * 
     * @returns a promise that resolves when the command has been sent
     */
    )
  }, {
    key: "AIClearCode",
    value: (function () {
      var _AIClearCode = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee64(index) {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee64$(_context64) {
          while (1) switch (_context64.prev = _context64.next) {
            case 0:
              if (this.isConnected) {
                _context64.next = 2;
                break;
              }
              return _context64.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = index;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE;
              dvb.setUint8(4, index);
              dvb.setUint8(5, 1);
              dvb.setInt16(6, -1);
              _context64.prev = 11;
              log.debug("AIClearCode - code index:", index);
              _context64.next = 15;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 15:
              log.debug("AIClearCode - completed");
              _context64.next = 20;
              break;
            case 18:
              _context64.prev = 18;
              _context64.t0 = _context64["catch"](11);
            case 20:
            case "end":
              return _context64.stop();
          }
        }, _callee64, this, [[11, 18]]);
      }));
      function AIClearCode(_x59) {
        return _AIClearCode.apply(this, arguments);
      }
      return AIClearCode;
    }()
    /**
     * Tells the connected AI Vision sensor to clear all configured colors.
     * 
     * This is only really useful for the utility as it would allow the logic to run
     * on the sensor instead of in the utility code
     * @returns a promise that resolves when the command has been sent
     */
    )
  }, {
    key: "AIClearAllSetColors",
    value: (function () {
      var _AIClearAllSetColors = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee65() {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee65$(_context65) {
          while (1) switch (_context65.prev = _context65.next) {
            case 0:
              if (this.isConnected) {
                _context65.next = 2;
                break;
              }
              return _context65.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = 0xFF;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_COLOR;

              // index at 0xFF to clear all
              dvb.setUint8(4, 0xFF);
              _context65.prev = 9;
              log.debug("AIClearAllSetColors - clearing all colors");
              _context65.next = 13;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 13:
              log.debug("AIClearAllSetColors - completed");
              _context65.next = 18;
              break;
            case 16:
              _context65.prev = 16;
              _context65.t0 = _context65["catch"](9);
            case 18:
            case "end":
              return _context65.stop();
          }
        }, _callee65, this, [[9, 16]]);
      }));
      function AIClearAllSetColors() {
        return _AIClearAllSetColors.apply(this, arguments);
      }
      return AIClearAllSetColors;
    }()
    /**
     * Tells the connected AI Vision sensor to clear all configured codes.
     * 
     * This is only really useful for the utility as it would allow the logic to run
     * on the sensor instead of in the utility code
     * @returns a promise that resolves when the command has been sent
     */
    )
  }, {
    key: "AIClearAllSetCodes",
    value: (function () {
      var _AIClearAllSetCodes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee66() {
        var packet, dvb;
        return _regeneratorRuntime().wrap(function _callee66$(_context66) {
          while (1) switch (_context66.prev = _context66.next) {
            case 0:
              if (this.isConnected) {
                _context66.next = 2;
                break;
              }
              return _context66.abrupt("return");
            case 2:
              packet = new Uint8Array(64);
              dvb = new DataView(packet.buffer);
              packet[0] = VexSerialDevice.AI2CAM_DETECT_SETTINGS_CMD;
              packet[1] = 0;
              packet[2] = 0xFF;
              packet[3] = _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE;

              // index at 0xFF to clear all
              dvb.setUint8(4, 0xFF);
              _context66.prev = 9;
              log.debug("AIClearAllSetCodes - clearing all codes");
              _context66.next = 13;
              return this.writeDataAsync(this.cdc.AI2_Cdc2DetectionSettings(packet));
            case 13:
              log.debug("AIClearAllSetCodes - completed");
              _context66.next = 18;
              break;
            case 16:
              _context66.prev = 16;
              _context66.t0 = _context66["catch"](9);
            case 18:
            case "end":
              return _context66.stop();
          }
        }, _callee66, this, [[9, 16]]);
      }));
      function AIClearAllSetCodes() {
        return _AIClearAllSetCodes.apply(this, arguments);
      }
      return AIClearAllSetCodes;
    }())
  }, {
    key: "AISetSensorOverlay",
    value: (
    /**
     * controls if the sensor adds the overlay information to the video feed
     * @param enable if true the overlay is added to the video feed
     */
    function () {
      var _AISetSensorOverlay = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee67(enable) {
        var sendFlags;
        return _regeneratorRuntime().wrap(function _callee67$(_context67) {
          while (1) switch (_context67.prev = _context67.next) {
            case 0:
              sendFlags = !this.flagsSentSinceConnection || this._FlagSensorOverlayEnabled !== enable;
              this._FlagSensorOverlayEnabled = enable;
              if (!sendFlags) {
                _context67.next = 7;
                break;
              }
              _context67.next = 5;
              return this.AISendFlags();
            case 5:
              _context67.next = 8;
              break;
            case 7:
              log.debug("AISetSensorOverlay - no change");
            case 8:
            case "end":
              return _context67.stop();
          }
        }, _callee67, this);
      }));
      function AISetSensorOverlay(_x60) {
        return _AISetSensorOverlay.apply(this, arguments);
      }
      return AISetSensorOverlay;
    }()
    /**
     * controls if the sensor adds the tag detection is active
     * @param enable if true the sensor will look for the tags
     */
    )
  }, {
    key: "AISetTagDetection",
    value: (function () {
      var _AISetTagDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee68(enable) {
        var sendFlags;
        return _regeneratorRuntime().wrap(function _callee68$(_context68) {
          while (1) switch (_context68.prev = _context68.next) {
            case 0:
              sendFlags = !this.flagsSentSinceConnection || this._FlagTagDetectionEnabled !== enable;
              this._FlagTagDetectionEnabled = enable;
              if (!sendFlags) {
                _context68.next = 7;
                break;
              }
              _context68.next = 5;
              return this.AISendFlags();
            case 5:
              _context68.next = 8;
              break;
            case 7:
              log.debug("AISetTagDetection - no change");
            case 8:
            case "end":
              return _context68.stop();
          }
        }, _callee68, this);
      }));
      function AISetTagDetection(_x61) {
        return _AISetTagDetection.apply(this, arguments);
      }
      return AISetTagDetection;
    }()
    /**
     * controls if the sensor adds the AI Object detection is active
     * @param enable if true the sensor will look for the AI Objects
     */
    )
  }, {
    key: "AISetObjectDetection",
    value: (function () {
      var _AISetObjectDetection = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee69(enable) {
        var sendFlags;
        return _regeneratorRuntime().wrap(function _callee69$(_context69) {
          while (1) switch (_context69.prev = _context69.next) {
            case 0:
              sendFlags = !this.flagsSentSinceConnection || this._FlagObjectDetectionEnabled !== enable;
              this._FlagObjectDetectionEnabled = enable;
              if (!sendFlags) {
                _context69.next = 7;
                break;
              }
              _context69.next = 5;
              return this.AISendFlags();
            case 5:
              _context69.next = 8;
              break;
            case 7:
              log.debug("AISetObjectDetection - no change");
            case 8:
            case "end":
              return _context69.stop();
          }
        }, _callee69, this);
      }));
      function AISetObjectDetection(_x62) {
        return _AISetObjectDetection.apply(this, arguments);
      }
      return AISetObjectDetection;
    }())
  }, {
    key: "AISendFlags",
    value: function () {
      var _AISendFlags = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee70() {
        var packet, enable_flags;
        return _regeneratorRuntime().wrap(function _callee70$(_context70) {
          while (1) switch (_context70.prev = _context70.next) {
            case 0:
              log.debug("AISendFlags - tags:", this._FlagTagDetectionEnabled, "objects:", this._FlagObjectDetectionEnabled, "overlay:", this._FlagSensorOverlayEnabled);
              if (this.isConnected) {
                _context70.next = 3;
                break;
              }
              return _context70.abrupt("return");
            case 3:
              packet = new Uint8Array(64);
              packet[0] = VexSerialDevice.AI2CAM_SETTINGS_CMD;
              packet[1] = VexSerialDevice.AI2CAM_CMD_FLAG_ENABLE;
              enable_flags = 0;
              enable_flags |= this._FlagTagDetectionEnabled ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_TAGS;
              // enable_flags |= (_colorEbl ? 0 : VexAIVisionWebSerial.AI2CAM_DISABLE_BIT_COLDET);
              enable_flags |= this._FlagObjectDetectionEnabled ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_OBJDET;
              enable_flags |= this._FlagSensorOverlayEnabled ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_USBOVL;
              log.debug("enable_flags:", enable_flags);
              packet[3] = enable_flags;
              _context70.prev = 12;
              log.debug("AISendFlags - sending flags");
              _context70.next = 16;
              return this.writeDataAsync(this.cdc.AI2_Cdc2Settings(packet));
            case 16:
              log.debug("AISendFlags - completed");
              this.flagsSentSinceConnection = true;
              _context70.next = 22;
              break;
            case 20:
              _context70.prev = 20;
              _context70.t0 = _context70["catch"](12);
            case 22:
            case "end":
              return _context70.stop();
          }
        }, _callee70, this, [[12, 20]]);
      }));
      function AISendFlags() {
        return _AISendFlags.apply(this, arguments);
      }
      return AISendFlags;
    }()
    /**
     * This is based on AISendFlags, but allows for sending the message over a
     * different interface. This does not check to see if conencted, as the other
     * interface shoudl handle that.
     * 
     * This was mostly created to work around not having a way to send this command
     * over the webble interface.
     * @param sender the function to send the message
     * @param tags True if tag detection should be enabled
     * @param objects True if object detection should be enabled
     * @param overlay Ture if the sensor should add the dection overlay to the video feed
     */
  }, {
    key: "AISendFlagsCustom",
    value: (function () {
      var _AISendFlagsCustom = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee71(sender, tags, objects, overlay) {
        var packet, enable_flags, _message, response;
        return _regeneratorRuntime().wrap(function _callee71$(_context71) {
          while (1) switch (_context71.prev = _context71.next) {
            case 0:
              packet = new Uint8Array(64);
              packet[0] = VexSerialDevice.AI2CAM_SETTINGS_CMD;
              packet[1] = VexSerialDevice.AI2CAM_CMD_FLAG_ENABLE;
              enable_flags = 0;
              enable_flags |= tags ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_TAGS;
              enable_flags |= objects ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_OBJDET;
              enable_flags |= overlay ? 0 : VexSerialDevice.AI2CAM_DISABLE_BIT_USBOVL;
              log.debug("enable_flags:", enable_flags);
              packet[3] = enable_flags;
              _context71.prev = 9;
              _message = this.cdc.AI2_Cdc2Settings(packet);
              _context71.next = 13;
              return sender(_message.data);
            case 13:
              response = _context71.sent;
              _context71.next = 18;
              break;
            case 16:
              _context71.prev = 16;
              _context71.t0 = _context71["catch"](9);
            case 18:
            case "end":
              return _context71.stop();
          }
        }, _callee71, this, [[9, 16]]);
      }));
      function AISendFlagsCustom(_x63, _x64, _x65, _x66) {
        return _AISendFlagsCustom.apply(this, arguments);
      }
      return AISendFlagsCustom;
    }())
  }, {
    key: "AIGetDetectedObjects",
    value: (
    /**
     * This will pull the current list of detected objects from the sensor.
     * 
     * This does not care what type of object is detected. If the sensor is
     * configured to look for the object, it will be in this list.
     * 
     * This command should usually complete in under 2ms.
     * @returns a list of objects or null if we did not get anything back
     */
    function () {
      var _AIGetDetectedObjects = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee72() {
        var reply, objectList, buf, payloadIndex, length_lsb, nObjects, objIndex, i, dvb, id, type, w1, w2, w3, xPos, yPos, width, height, angle, newObject, _w, _w2, _w3, w4, w5, w6, rawx0, rawy0, rawx1, rawy1, rawx2, rawy2, rawx3, rawy3, x0, y0, x1, y1, x2, y2, x3, y3, _newObject, _w4, _w5, _w6, _xPos, _yPos, _width, _height, score, _newObject2;
        return _regeneratorRuntime().wrap(function _callee72$(_context72) {
          while (1) switch (_context72.prev = _context72.next) {
            case 0:
              log.debug("AIGetDetectedObjects");
              if (this.isConnected) {
                _context72.next = 3;
                break;
              }
              return _context72.abrupt("return", null);
            case 3:
              if (!(this.lastObjectFetchTime && Date.now() - this.lastObjectFetchTime < 50 && this.lastObjectFetchData)) {
                _context72.next = 5;
                break;
              }
              return _context72.abrupt("return", this.lastObjectFetchData);
            case 5:
              _context72.prev = 5;
              log.debug("fetching AI objects");
              _context72.next = 9;
              return this.writeDataAsync(this.cdc.AI2_Cdc2ObjectRequest());
            case 9:
              reply = _context72.sent;
              log.debug("AI objects reply:", (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertUint8ArrayToHexString)(new Uint8Array(reply)));
              if (!(reply === undefined)) {
                _context72.next = 13;
                break;
              }
              throw 'bad objects reply';
            case 13:
              objectList = [];
              buf = reply instanceof ArrayBuffer ? new Uint8Array(reply) : reply;
              payloadIndex = 5;
              length_lsb = buf[3]; // see if first byte has msb set, increase payload_index for large packet
              if (length_lsb & 0x80) {
                payloadIndex += 1;
              }

              // check we had an ACK
              if (!(buf[payloadIndex] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK)) {
                _context72.next = 82;
                break;
              }
              // next byte is number of objects
              nObjects = buf[payloadIndex + 1]; // James - probably should verify packet size here, but I'm lazy in demo code
              // start of first object structure
              objIndex = payloadIndex + 2; // and decode all objects, if there are any !
              i = 0;
            case 22:
              if (!(i < nObjects)) {
                _context72.next = 79;
                break;
              }
              if (!(buf.length < objIndex + 15)) {
                _context72.next = 26;
                break;
              }
              log.debug("Buffer too short for object at index ".concat(objIndex, ": expected at least ").concat(objIndex + 15, ", got ").concat(buf.length));
              return _context72.abrupt("break", 79);
            case 26:
              dvb = new DataView(buf.buffer, objIndex, 15);
              id = buf[objIndex];
              type = buf[objIndex + 1];
              if (!(type === _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_COLOR || type == _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_CODE)) {
                _context72.next = 43;
                break;
              }
              // get location, 6 bytes, 3 words
              w1 = dvb.getUint16(2, true);
              w2 = dvb.getUint16(4, true);
              w3 = dvb.getUint16(6, true); // three 16bit words to 4 12 bit values
              xPos = w1 & 0xFFF;
              yPos = w1 >> 12 & 0x00F | w2 << 4 & 0xFF0;
              width = w2 >> 8 & 0x0FF | w3 << 8 & 0xF00;
              height = w3 >> 4 & 0xFFF;
              angle = dvb.getUint16(8, true) / 100;
              newObject = {
                id: id,
                type: type,
                location: {
                  xPos: xPos,
                  yPos: yPos,
                  width: width,
                  height: height
                },
                angle: angle
              };
              log.trace("found color/code:", newObject);
              objectList.push(newObject);
              _context72.next = 75;
              break;
            case 43:
              if (!(type === _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_TAG)) {
                _context72.next = 74;
                break;
              }
              // get location, 12 bytes, 6 words
              _w = dvb.getUint16(2, true);
              _w2 = dvb.getUint16(4, true);
              _w3 = dvb.getUint16(6, true);
              w4 = dvb.getUint16(8, true);
              w5 = dvb.getUint16(10, true);
              w6 = dvb.getUint16(12, true); // Grab the raw unsigned 12-bit bit values for the x/y positions
              rawx0 = _w & 0xFFF;
              rawy0 = _w >> 12 & 0x00F | _w2 << 4 & 0xFF0;
              rawx1 = _w2 >> 8 & 0x0FF | _w3 << 8 & 0xF00;
              rawy1 = _w3 >> 4 & 0xFFF;
              rawx2 = w4 & 0xFFF;
              rawy2 = w4 >> 12 & 0x00F | w5 << 4 & 0xFF0;
              rawx3 = w5 >> 8 & 0x0FF | w6 << 8 & 0xF00;
              rawy3 = w6 >> 4 & 0xFFF; // The actual values are signed 12 bit values, so we need to
              // convert them to signed value range from the unsigned raw values.
              x0 = rawx0 & 0x800 ? rawx0 - 0x1000 : rawx0;
              y0 = rawy0 & 0x800 ? rawy0 - 0x1000 : rawy0;
              x1 = rawx1 & 0x800 ? rawx1 - 0x1000 : rawx1;
              y1 = rawy1 & 0x800 ? rawy1 - 0x1000 : rawy1;
              x2 = rawx2 & 0x800 ? rawx2 - 0x1000 : rawx2;
              y2 = rawy2 & 0x800 ? rawy2 - 0x1000 : rawy2;
              x3 = rawx3 & 0x800 ? rawx3 - 0x1000 : rawx3;
              y3 = rawy3 & 0x800 ? rawy3 - 0x1000 : rawy3; // ignore tags with invalid date
              if (!(x0 < -10 || x0 > 340 || y0 < -10 || y0 > 260 || x1 < -10 || x1 > 340 || y1 < -10 || y1 > 260 || x2 < -10 || x2 > 340 || y2 < -10 || y2 > 260 || x3 < -10 || x3 > 340 || y3 < -10 || y3 > 260)) {
                _context72.next = 69;
                break;
              }
              log.warn("found invalid tag - location out of range:", x0, y0, x1, y1, x2, y2, x3, y3);
              return _context72.abrupt("continue", 76);
            case 69:
              _newObject = {
                id: id,
                type: type,
                location: {
                  x0: x0,
                  y0: y0,
                  x1: x1,
                  y1: y1,
                  x2: x2,
                  y2: y2,
                  x3: x3,
                  y3: y3
                }
              };
              log.trace("found tag:", _newObject);
              objectList.push(_newObject);
              _context72.next = 75;
              break;
            case 74:
              if (type === _enums__WEBPACK_IMPORTED_MODULE_9__.VexAIObjectTypes.AI2CAM_DETECT_TYPE_OBJECT) {
                // get location, 6 bytes, 3 words
                _w4 = dvb.getUint16(2, true);
                _w5 = dvb.getUint16(4, true);
                _w6 = dvb.getUint16(6, true); // three 16bit words to 4 12 bit values
                _xPos = _w4 & 0xFFF;
                _yPos = _w4 >> 12 & 0x00F | _w5 << 4 & 0xFF0;
                _width = _w5 >> 8 & 0x0FF | _w6 << 8 & 0xF00;
                _height = _w6 >> 4 & 0xFFF;
                score = dvb.getUint16(8, true);
                _newObject2 = {
                  id: id,
                  type: type,
                  location: {
                    xPos: _xPos,
                    yPos: _yPos,
                    width: _width,
                    height: _height
                  },
                  score: score
                };
                log.trace("found ai object:", _newObject2);
                objectList.push(_newObject2);
              }
            case 75:
              // next object
              objIndex += 15;
            case 76:
              i++;
              _context72.next = 22;
              break;
            case 79:
              // We got the data, so update the last fetch time and data
              this.lastObjectFetchData = objectList;
              this.lastObjectFetchTime = Date.now();
              return _context72.abrupt("return", objectList);
            case 82:
              _context72.next = 87;
              break;
            case 84:
              _context72.prev = 84;
              _context72.t0 = _context72["catch"](5);
              log.debug(_context72.t0);
            case 87:
              return _context72.abrupt("return", null);
            case 88:
            case "end":
              return _context72.stop();
          }
        }, _callee72, this, [[5, 84]]);
      }));
      function AIGetDetectedObjects() {
        return _AIGetDetectedObjects.apply(this, arguments);
      }
      return AIGetDetectedObjects;
    }()
    /**
     * This will pull the current AI Model metadata from the sensor.
     * 
     * This command should usually complete in under 2ms.
     * @returns a list of model metadata or null if we did not get anything back
     */
    )
  }, {
    key: "AIGetModel",
    value: (function () {
      var _AIGetModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee73() {
        var reply, buf, dvb, model_id, model_version, model_name, nullTerminatorIndex, modelMetadata;
        return _regeneratorRuntime().wrap(function _callee73$(_context73) {
          while (1) switch (_context73.prev = _context73.next) {
            case 0:
              log.debug("AIGetModel");
              if (this.isConnected) {
                _context73.next = 3;
                break;
              }
              return _context73.abrupt("return", null);
            case 3:
              _context73.prev = 3;
              log.debug("requesting AI model metadata");
              _context73.next = 7;
              return this.writeDataAsync(this.cdc.AI2_Cdc2ModelNameRequestl());
            case 7:
              reply = _context73.sent;
              log.debug("AI model metadata reply:", (0,_VEXSerial_helpers__WEBPACK_IMPORTED_MODULE_2__.convertBufferToHexString)(reply));
              if (!(reply === undefined)) {
                _context73.next = 11;
                break;
              }
              return _context73.abrupt("return", null);
            case 11:
              buf = reply instanceof ArrayBuffer ? new Uint8Array(reply) : reply; // check we had an ACK
              if (!(buf[5] === _VexCDC__WEBPACK_IMPORTED_MODULE_3__.VexCDC.CDC2_ACK_TYPES.CDC2_ACK)) {
                _context73.next = 22;
                break;
              }
              dvb = new DataView(buf.buffer);
              model_id = dvb.getUint32(7, true);
              model_version = dvb.getUint32(11, true);
              model_name = new TextDecoder("UTF-8").decode(buf.slice(15)); // remove trailing null if present
              nullTerminatorIndex = model_name.indexOf('\0');
              if (nullTerminatorIndex > -1) {
                model_name = model_name.substr(0, nullTerminatorIndex);
              }
              modelMetadata = {
                id: model_id,
                version: model_version,
                name: model_name
              };
              log.debug("AI model:", modelMetadata);
              return _context73.abrupt("return", modelMetadata);
            case 22:
              _context73.next = 27;
              break;
            case 24:
              _context73.prev = 24;
              _context73.t0 = _context73["catch"](3);
              log.debug(_context73.t0);
            case 27:
              return _context73.abrupt("return", null);
            case 28:
            case "end":
              return _context73.stop();
          }
        }, _callee73, this, [[3, 24]]);
      }));
      function AIGetModel() {
        return _AIGetModel.apply(this, arguments);
      }
      return AIGetModel;
    }()
    /**
     * This will clear the current AI Model metadata from the sensor.
     * The default model after clearing will be Classroom Objects Model
     */
    )
  }, {
    key: "AIClearModel",
    value: (function () {
      var _AIClearModel = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee74() {
        return _regeneratorRuntime().wrap(function _callee74$(_context74) {
          while (1) switch (_context74.prev = _context74.next) {
            case 0:
              log.debug("AIClearModel");
              if (this.isConnected) {
                _context74.next = 3;
                break;
              }
              return _context74.abrupt("return", null);
            case 3:
              _context74.prev = 3;
              _context74.next = 6;
              return this.writeDataAsync(this.cdc.AI2_Cdc2ClearModel());
            case 6:
              _context74.next = 11;
              break;
            case 8:
              _context74.prev = 8;
              _context74.t0 = _context74["catch"](3);
              log.debug(_context74.t0);
            case 11:
            case "end":
              return _context74.stop();
          }
        }, _callee74, this, [[3, 8]]);
      }));
      function AIClearModel() {
        return _AIClearModel.apply(this, arguments);
      }
      return AIClearModel;
    }() //#endregion sensor setting flags
    //#endregion AI Vision Commands
    )
  }, {
    key: "delay",
    value: function delay(ms, payload) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(payload);
        }, ms);
      });
    }
  }]);
}();
//#region static defs
_defineProperty(VexSerialDevice, "STATUS_GOOD", 0x76);
_defineProperty(VexSerialDevice, "STATUS_WACK", 0xFE);
_defineProperty(VexSerialDevice, "STATUS_FAIL", 0xFF);
_defineProperty(VexSerialDevice, "STATUS_TIMEOUT", 0x1FF);
_defineProperty(VexSerialDevice, "STATUS_DISCONNECT", 0x2FF);
_defineProperty(VexSerialDevice, "STATUS_CONNECT_ERR", 0x3FF);
_defineProperty(VexSerialDevice, "FILE_FUNC_SAVE", 1);
_defineProperty(VexSerialDevice, "FILE_FUNC_READ", 2);
_defineProperty(VexSerialDevice, "FILE_TARGET_DDR", 0);
_defineProperty(VexSerialDevice, "FILE_TARGET_QSPI", 1);
_defineProperty(VexSerialDevice, "FILE_TARGET_CBUF", 2);
_defineProperty(VexSerialDevice, "FILE_TARGET_VBUF", 3);
_defineProperty(VexSerialDevice, "FILE_TARGET_DDRC", 4);
_defineProperty(VexSerialDevice, "FILE_TARGET_DDRE", 5);
_defineProperty(VexSerialDevice, "FILE_TARGET_FLASH", 6);
// for IQ2
_defineProperty(VexSerialDevice, "FILE_TARGET_RADIO", 7);
// for IQ2
_defineProperty(VexSerialDevice, "FILE_TARGET_A1", 13);
_defineProperty(VexSerialDevice, "FILE_TARGET_B1", 14);
_defineProperty(VexSerialDevice, "FILE_TARGET_B2", 15);
_defineProperty(VexSerialDevice, "SYS_ADDRESS", USER_FLASH_SYS_CODE_START);
_defineProperty(VexSerialDevice, "USR_ADDRESS", USER_FLASH_USR_CODE_START);
_defineProperty(VexSerialDevice, "VID", {
  USER: 1,
  AIR_FIRMWARE: 2,
  // VID 2?
  SYS: 0x0F,
  // Decimal Value: 15
  DEV1: 0x10,
  // Decimal Value: 16
  DEV2: 0x18,
  // Decimal Value: 24
  DEV3: 0x20,
  // Decimal Value: 32
  DEV4: 0x28,
  // Decimal Value: 40
  DEV5: 0x30,
  // Decimal Value: 48
  DEV6: 0x38,
  // Decimal Value: 56
  VEXVM: _targetPlatform__WEBPACK_IMPORTED_MODULE_15__.targetIsAIR ? 0x03 : 0x40,
  // Decimal Value: 64
  AIM_IMAGE: 0x80,
  // Decimal Value: 128
  AIM_SOUND: 0x88,
  // Decimal Value: 136
  VEX: 0xF0,
  // Decimal Value: 240
  ESP32: 0xFC,
  // Decimal Value: 252
  UNDEFINED: 0xF1 // Decimal Value: 241
});
_defineProperty(VexSerialDevice, "OPTIONS", {
  EXIT_RUN: 1,
  EXIT_HALT: 3,
  FILE_OVERWRITE: 1,
  LOAD_STOP: 0x80,
  ERASE_AL_BNAME: 0x80 // erase all files matching basename
});
//#endregion static defs
//#region AI Vision constants
_defineProperty(VexSerialDevice, "AI2CAM_SETTINGS_CMD", 0x50);
_defineProperty(VexSerialDevice, "AI2CAM_DETECT_SETTINGS_CMD", 0x51);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_MODE", 1 << 0);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_ENABLE", 1 << 1);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_TEST", 1 << 2);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_SENSOR", 1 << 3);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_MODEL", 1 << 4);
_defineProperty(VexSerialDevice, "AI2CAM_CMD_FLAG_RESET", 1 << 7);
_defineProperty(VexSerialDevice, "AI2CAM_DISABLE_BIT_TAGS", 1 << 0);
_defineProperty(VexSerialDevice, "AI2CAM_DISABLE_BIT_COLDET", 1 << 1);
_defineProperty(VexSerialDevice, "AI2CAM_DISABLE_BIT_OBJDET", 1 << 2);
_defineProperty(VexSerialDevice, "AI2CAM_DISABLE_BIT_USBOVL", 1 << 7);


/***/ }),

/***/ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/radio/cc264x.ts":
/*!*********************************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/VexSerialDevices/radio/cc264x.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cc264xdfu: () => (/* binding */ cc264xdfu)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VexCRC__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../VexCRC */ "./src/HardwareInterface/DownloadPlatform/VexSerialDevices/VexCRC.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("cc264x");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

log.setHistoryLogger("VexSerial");

// yep, more weird looking javascript as it's ported from C code.
// support for 264x radio bootload
//
var cc264xdfu = /*#__PURE__*/function () {
  function cc264xdfu(handler, fimwware, chip_id) {
    _classCallCheck(this, cc264xdfu);
    // callback to send data over the web serial port
    _defineProperty(this, "writeData", undefined);
    _defineProperty(this, "commsState", 0);
    _defineProperty(this, "currentAddress", 0);
    _defineProperty(this, "downloadAddress", 0);
    _defineProperty(this, "bFullRadioProgram", false);
    _defineProperty(this, "downloadFirmwareData", undefined);
    // response data
    _defineProperty(this, "replyData", new Uint8Array(130));
    _defineProperty(this, "replyBytes", 0);
    this.downloadAddress = 0;
    this.downloadSize = cc264xdfu.CC2640_FLASH_SECTOR * cc264xdfu.CC2640_PROG_SECTORS;

    // These may get changed when we know the chip id
    this.flashPageSize = cc264xdfu.CC2640_FLASH_SECTOR;
    this.flashProgramPageCount = cc264xdfu.CC2640_PROG_SECTORS;

    // program all radio, inc config data
    if (this.bFullRadioProgram && chip_id) {
      if (chip_id == cc264xdfu.CC2640_CHIP_ID) {
        // change program size to complete radio flash
        this.flashProgramPageCount = cc264xdfu.CC2640_PROG_SECTORS_F;
        this.downloadSize = cc264xdfu.CC2640_FLASH_SECTOR * cc264xdfu.CC2640_PROG_SECTORS_F;
      }
      if (chip_id == cc264xdfu.CC2642_CHIP_ID) {
        // change program size to complete radio flash
        this.flashProgramPageCount = cc264xdfu.CC2642_PROG_SECTORS_F;
        this.downloadSize = cc264xdfu.CC2642_FLASH_SECTOR * cc264xdfu.CC2642_PROG_SECTORS_F;
      }
    }
    if (fimwware) this.downloadFirmwareData = fimwware;

    // transmit handler
    this.writeData = handler;
  }
  return _createClass(cc264xdfu, [{
    key: "setFirmware",
    value: function setFirmware(fw) {
      this.downloadFirmwareData = fw;
    }

    // TODO: move to a helper as this is use in several places
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

    // TODO: move to a helper as this is use in several places
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
  }, {
    key: "delay",
    value: function delay(ms, payload) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(payload);
        }, ms);
      });
    }

    /*----------------------------------------------------------------------------*/
    // comms interface code
    // 
  }, {
    key: "stopTimeout",
    value: function stopTimeout() {
      if (this.replyTimeout) {
        clearTimeout(this.replyTimeout);
        this.replyTimeout = undefined;
      }
    }
  }, {
    key: "sendCommand",
    value: function () {
      var _sendCommand = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(data, timeout) {
        var _this = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              timeout = timeout === undefined ? true : timeout;
              this.writeData(data, function (data) {
                _this.receiveData(data);
              });
              return _context.abrupt("return", new Promise(function (resolve, reject) {
                var polltimer = setInterval(function () {
                  if (_this.bResponse) {
                    if (_this.bResponseReceived) {
                      clearInterval(polltimer);
                      _this.stopTimeout();
                      resolve(undefined);
                    }
                  } else {
                    if (_this.bAckReceived || _this.bNakReceived) {
                      clearInterval(polltimer);
                      _this.stopTimeout();
                      resolve(undefined);
                    }
                  }
                }, 2);
                if (timeout && timeout === true) {
                  _this.replyTimeout = setTimeout(function () {
                    _this.replyTimeout = undefined;
                    log.debug("timeout");
                    clearInterval(polltimer);
                    reject();
                  }, 1000);
                }
              }));
            case 3:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function sendCommand(_x, _x2) {
        return _sendCommand.apply(this, arguments);
      }
      return sendCommand;
    }()
  }, {
    key: "receiveData",
    value: function receiveData(data) {
      var udata = new Uint8Array(data);
      for (var i = 0; i < udata.byteLength; i++) {
        this.radioBootloaderCommsReply(udata[i]);
      }
    }

    /*----------------------------------------------------------------------------*/
  }, {
    key: "radioSendBootloadCommand",
    value: (function () {
      var _radioSendBootloadCommand = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var cmd, index, i, cs, _i;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              cmd = new Uint8Array(256);
              index = 2;
              if (this.cmd != 0) {
                cmd[index++] = this.cmd;
              }
              if (this.address != 0xFFFFFFFF) {
                cmd[index++] = this.address >> 24 & 0xFF;
                cmd[index++] = this.address >> 16 & 0xFF;
                cmd[index++] = this.address >> 8 & 0xFF;
                cmd[index++] = this.address & 0xFF;
              }
              if (this.size != 0xFFFFFFFF) {
                cmd[index++] = this.size >> 24 & 0xFF;
                cmd[index++] = this.size >> 16 & 0xFF;
                cmd[index++] = this.size >> 8 & 0xFF;
                cmd[index++] = this.size & 0xFF;
              }
              if (this.pData != undefined && this.dataLen > 0) {
                for (i = 0; i < this.dataLen && index < 256; i++) {
                  cmd[index++] = this.pData[i];
                }
              }
              cs = 0;
              for (_i = 2; _i < index; _i++) {
                cs += cmd[_i];
              }
              cmd[1] = cs & 0xFF;
              cmd[0] = index;
              this.commsState = 0;
              this.bAckReceived = false;
              this.bNakReceived = false;
              _context2.next = 15;
              return this.sendCommand(new Uint8Array(cmd.subarray(0, index)));
            case 15:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function radioSendBootloadCommand() {
        return _radioSendBootloadCommand.apply(this, arguments);
      }
      return radioSendBootloadCommand;
    }())
  }, {
    key: "radioBootloadSendAck",
    value: function radioBootloadSendAck() {
      var cmd = new Uint8Array([0x00, 0xCC]);
      // No reply to ACK, just send
      this.writeData(cmd, undefined);
    }
  }, {
    key: "radioBootloadSendNak",
    value: function radioBootloadSendNak() {
      var cmd = new Uint8Array([0x00, 0x33]);
      // No reply to NAK, just send
      this.writeData(cmd, undefined);
    }
  }, {
    key: "radioBootloadValidateChecksum",
    value: function radioBootloadValidateChecksum() {
      var cs = 0;
      for (var i = 2; i < this.replyData[0]; i++) {
        cs += this.replyData[i];
      }
      if (cs == this.replyData[1]) return true;else return false;
    }
  }, {
    key: "radioBootloadClearCommand",
    value: function radioBootloadClearCommand() {
      this.cmd = 0;
      this.address = 0xFFFFFFFF;
      this.size = 0xFFFFFFFF;
      this.pData = undefined;
      this.dataLen = 0;
      this.bResponse = false;
      this.bResponseReceived = false;
    }

    /*----------------------------------------------------------------------------*/
  }, {
    key: "radioBootloadSendHello",
    value: (function () {
      var _radioBootloadSendHello = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var cmd;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              cmd = new Uint8Array([0x55, 0x55]);
              _context3.next = 3;
              return this.sendCommand(cmd);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function radioBootloadSendHello() {
        return _radioBootloadSendHello.apply(this, arguments);
      }
      return radioBootloadSendHello;
    }())
  }, {
    key: "radioSendBootloaderPing",
    value: function () {
      var _radioSendBootloaderPing = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdPing;
              _context4.next = 4;
              return this.radioSendBootloadCommand();
            case 4:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function radioSendBootloaderPing() {
        return _radioSendBootloaderPing.apply(this, arguments);
      }
      return radioSendBootloaderPing;
    }()
  }, {
    key: "radioSendBootloaderGetStatus",
    value: function () {
      var _radioSendBootloaderGetStatus = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdStatus;
              this.bResponse = true;
              _context5.next = 5;
              return this.radioSendBootloadCommand();
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function radioSendBootloaderGetStatus() {
        return _radioSendBootloaderGetStatus.apply(this, arguments);
      }
      return radioSendBootloaderGetStatus;
    }()
  }, {
    key: "radioSendBootloaderGetChipId",
    value: function () {
      var _radioSendBootloaderGetChipId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdGetChipId;
              this.bResponse = true;
              _context6.next = 5;
              return this.radioSendBootloadCommand();
            case 5:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function radioSendBootloaderGetChipId() {
        return _radioSendBootloaderGetChipId.apply(this, arguments);
      }
      return radioSendBootloaderGetChipId;
    }()
  }, {
    key: "radioSendBootloaderGetChecksum",
    value: function () {
      var _radioSendBootloaderGetChecksum = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(address, length) {
        var data;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              data = new Uint8Array([0, 0, 0, 0]);
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdCrc32;
              this.address = address;
              this.size = length;
              this.pData = data;
              this.dataLen = data.byteLength;
              this.bResponse = true;
              _context7.next = 10;
              return this.radioSendBootloadCommand();
            case 10:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function radioSendBootloaderGetChecksum(_x3, _x4) {
        return _radioSendBootloaderGetChecksum.apply(this, arguments);
      }
      return radioSendBootloaderGetChecksum;
    }()
  }, {
    key: "radioSendBootloaderReadMemory32",
    value: function () {
      var _radioSendBootloaderReadMemory = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(address, words) {
        var data;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              data = new Uint8Array([cc264xdfu.cc2640_access.kBootReadAccess32b, words]);
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdMemoryRead;
              this.address = address;
              this.pData = data;
              this.dataLen = data.byteLength;
              this.bResponse = true;
              _context8.next = 9;
              return this.radioSendBootloadCommand();
            case 9:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function radioSendBootloaderReadMemory32(_x5, _x6) {
        return _radioSendBootloaderReadMemory.apply(this, arguments);
      }
      return radioSendBootloaderReadMemory32;
    }()
  }, {
    key: "radioSendBootloaderEraseBlock",
    value: function () {
      var _radioSendBootloaderEraseBlock = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(address) {
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdSectorErase;
              this.address = address;
              _context9.next = 5;
              return this.radioSendBootloadCommand();
            case 5:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function radioSendBootloaderEraseBlock(_x7) {
        return _radioSendBootloaderEraseBlock.apply(this, arguments);
      }
      return radioSendBootloaderEraseBlock;
    }()
  }, {
    key: "radioSendBootloaderDownload",
    value: function () {
      var _radioSendBootloaderDownload = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(address, length) {
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              this.radioBootloadClearCommand();

              // length must be mulitple of 4
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdDownload;
              this.address = address;
              this.size = length;
              _context10.next = 6;
              return this.radioSendBootloadCommand();
            case 6:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function radioSendBootloaderDownload(_x8, _x9) {
        return _radioSendBootloaderDownload.apply(this, arguments);
      }
      return radioSendBootloaderDownload;
    }()
  }, {
    key: "radioSendBootloaderWriteData",
    value: function () {
      var _radioSendBootloaderWriteData = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(pData, dataLen) {
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              this.radioBootloadClearCommand();
              this.cmd = cc264xdfu.cc2640_cmds.kBootCmdSendData;
              this.pData = pData;
              this.dataLen = dataLen;
              _context11.next = 6;
              return this.radioSendBootloadCommand();
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function radioSendBootloaderWriteData(_x10, _x11) {
        return _radioSendBootloaderWriteData.apply(this, arguments);
      }
      return radioSendBootloaderWriteData;
    }() /*----------------------------------------------------------------------------*/
  }, {
    key: "radioCrc32Gen",
    value: function radioCrc32Gen(pData, length) {
      // No hardware CRC available
      // we needed reversed input
      // reversed and complemented output
      var crc = _VexCRC__WEBPACK_IMPORTED_MODULE_1__.crc32reflectedInput(pData.subarray(0, length), 0xFFFFFFFF);
      crc = (_VexCRC__WEBPACK_IMPORTED_MODULE_1__.crc32Reflect32(crc) ^ 0xFFFFFFFF) >>> 0;
      return crc;
    }
  }, {
    key: "radioBootloaderCommsReply",
    value: function radioBootloaderCommsReply(data) {
      switch (this.commsState) {
        case 0:
          // first byte of reply should be 0x00
          if (data == 0x00) this.commsState = 1;
          break;
        case 1:
          // second byte of reply should be 0xCC (ACK) or 0x33(NAK)
          if (data == 0xCC) {
            this.bAckReceived = true;
            if (this.bResponse) this.commsState = 2;else this.commsState = 0;
          }
          if (data == 0x33) {
            this.bNakReceived = true;
            this.commsState = 0;
          }
          break;
        case 2:
          // first byte of response/status data
          // skip any 0x00
          if (data != 0) {
            this.replyData[0] = data;
            this.replyBytes = 1;
            // enough space ?
            if (data < this.replyData.byteLength) this.commsState++;else this.commsState = 0;
          }
          break;
        case 3:
          // more bytes of response/status data
          if (this.replyBytes < this.replyData[0]) {
            this.replyData[this.replyBytes++] = data;

            // final byte ?
            if (this.replyBytes == this.replyData[0]) {
              // all response received
              if (this.radioBootloadValidateChecksum()) {
                this.radioBootloadSendAck();
              } else {
                this.radioBootloadSendNak();
              }
              this.bResponseReceived = true;
              this.commsState = 0;
            }
          } else {
            this.commsState = 0;
          }
          break;
        default:
          this.commsState = 0;
          break;
      }
    }
  }, {
    key: "radioResponseToWordBE",
    value: function radioResponseToWordBE(pData, offset) {
      var dvb = new DataView(pData.buffer, pData.byteOffset + offset);
      return dvb.getUint32(0, false);
    }
  }, {
    key: "radioResponseToWordLE",
    value: function radioResponseToWordLE(pData, offset) {
      var dvb = new DataView(pData.buffer, pData.byteOffset + offset);
      return dvb.getUint32(0, true);
    }

    /*----------------------------------------------------------------------------*/
    // High level interface
    //
  }, {
    key: "radioBootloaderSendhello",
    value: (function () {
      var _radioBootloaderSendhello = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12() {
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              _context12.prev = 0;
              _context12.next = 3;
              return this.radioBootloadSendHello();
            case 3:
              _context12.next = 9;
              break;
            case 5:
              _context12.prev = 5;
              _context12.t0 = _context12["catch"](0);
              log.error(_context12.t0);
              throw cc264xdfu.cc2640_errors.COMMS_ERROR;
            case 9:
              return _context12.abrupt("return", 0);
            case 10:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this, [[0, 5]]);
      }));
      function radioBootloaderSendhello() {
        return _radioBootloaderSendhello.apply(this, arguments);
      }
      return radioBootloaderSendhello;
    }())
  }, {
    key: "radioBootloaderGetChipId",
    value: function () {
      var _radioBootloaderGetChipId = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13() {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              _context13.prev = 0;
              _context13.next = 3;
              return this.radioSendBootloaderGetChipId();
            case 3:
              if (!this.bResponseReceived) {
                _context13.next = 9;
                break;
              }
              this.chipId = this.radioResponseToWordBE(this.replyData, 2) >>> 28;
              log.debug('Chip ID', this.hex8(this.radioResponseToWordBE(this.replyData, 2)), this.chipId);
              if (this.chipId == cc264xdfu.CC2642_CHIP_ID) {
                this.flashPageSize = cc264xdfu.CC2642_FLASH_SECTOR;
                this.flashProgramPageCount = cc264xdfu.CC2642_PROG_SECTORS;
                this.downloadSize = cc264xdfu.CC2642_FLASH_SECTOR * cc264xdfu.CC2642_PROG_SECTORS;
                log.debug('found exp controller');
              }
              _context13.next = 10;
              break;
            case 9:
              throw cc264xdfu.cc2640_errors.RESPONSE_ERROR;
            case 10:
              _context13.next = 16;
              break;
            case 12:
              _context13.prev = 12;
              _context13.t0 = _context13["catch"](0);
              log.error(_context13.t0);
              throw cc264xdfu.cc2640_errors.COMMS_ERROR;
            case 16:
              return _context13.abrupt("return", this.chipId);
            case 17:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this, [[0, 12]]);
      }));
      function radioBootloaderGetChipId() {
        return _radioBootloaderGetChipId.apply(this, arguments);
      }
      return radioBootloaderGetChipId;
    }()
  }, {
    key: "radioBootloaderGetChecksum",
    value: function () {
      var _radioBootloaderGetChecksum = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14() {
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              _context14.prev = 0;
              _context14.next = 3;
              return this.radioSendBootloaderGetChecksum(this.downloadAddress, this.downloadSize);
            case 3:
              if (!this.bResponseReceived) {
                _context14.next = 11;
                break;
              }
              this.radioCrc = this.radioResponseToWordBE(this.replyData, 2);
              this.calculatedCrc = this.radioCrc32Gen(this.downloadFirmwareData, this.downloadSize);
              log.debug("Radio CRC", this.hex8(this.radioCrc));
              log.debug("Cal   CRC", this.hex8(this.calculatedCrc));
              return _context14.abrupt("return", this.radioCrc == this.calculatedCrc);
            case 11:
              throw cc264xdfu.cc2640_errors.RESPONSE_ERROR;
            case 12:
              _context14.next = 18;
              break;
            case 14:
              _context14.prev = 14;
              _context14.t0 = _context14["catch"](0);
              log.error(_context14.t0);
              throw cc264xdfu.cc2640_errors.COMMS_ERROR;
            case 18:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this, [[0, 14]]);
      }));
      function radioBootloaderGetChecksum() {
        return _radioBootloaderGetChecksum.apply(this, arguments);
      }
      return radioBootloaderGetChecksum;
    }()
  }, {
    key: "radioBootloaderGetChipMemorySizes",
    value: function () {
      var _radioBootloaderGetChipMemorySizes = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        var ramid, sig;
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.prev = 0;
              this.flashSize = 0;

              // get flash size
              _context15.next = 4;
              return this.radioSendBootloaderReadMemory32(cc264xdfu.CC2640_FLASH_SIZE_CFG, 1);
            case 4:
              if (this.bResponseReceived) {
                this.flashSize = (this.radioResponseToWordLE(this.replyData, 2) & 0xff) * this.flashPageSize;
                log.debug("Flash Size", this.hex8(this.flashSize));
              }

              // get ram size
              _context15.next = 7;
              return this.radioSendBootloaderReadMemory32(cc264xdfu.CC2640_RAM_SIZE_CFG, 1);
            case 7:
              if (!this.bResponseReceived) {
                _context15.next = 21;
                break;
              }
              ramid = this.radioResponseToWordLE(this.replyData, 2) & 0x03;
              _context15.t0 = ramid;
              _context15.next = _context15.t0 === 1 ? 14 : _context15.t0 === 2 ? 16 : _context15.t0 === 3 ? 18 : 12;
              break;
            case 12:
              this.ramSize = 0x1000;
              return _context15.abrupt("break", 20);
            case 14:
              this.ramSize = 0x2800;
              return _context15.abrupt("break", 20);
            case 16:
              this.ramSize = 0x4000;
              return _context15.abrupt("break", 20);
            case 18:
              this.ramSize = 0x5000;
              return _context15.abrupt("break", 20);
            case 20:
              log.debug("Ram Size", this.hex8(this.ramSize));
            case 21:
              _context15.next = 23;
              return this.radioSendBootloaderReadMemory32(this.flashSize - 0x58, 1);
            case 23:
              if (this.bResponseReceived) {
                sig = this.radioResponseToWordLE(this.replyData, 2);
                log.debug("Flash Sig", this.hex8(sig));
                if (sig == 0xFFFFFFFF) {
                  log.debug("needs full update");
                }
              }
              return _context15.abrupt("return", this.flashSize);
            case 27:
              _context15.prev = 27;
              _context15.t1 = _context15["catch"](0);
              log.error(_context15.t1);
              throw cc264xdfu.cc2640_errors.COMMS_ERROR;
            case 31:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this, [[0, 27]]);
      }));
      function radioBootloaderGetChipMemorySizes() {
        return _radioBootloaderGetChipMemorySizes.apply(this, arguments);
      }
      return radioBootloaderGetChipMemorySizes;
    }() // Erase block (one sector)
  }, {
    key: "radioBootloaderEraseBlock",
    value: function () {
      var _radioBootloaderEraseBlock = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16() {
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              if (!(this.currentAddress > this.flashPageSize * this.flashProgramPageCount)) {
                _context16.next = 2;
                break;
              }
              throw cc264xdfu.cc2640_errors.FLASH_ADDRESS_ERROR;
            case 2:
              log.debug("flash erase", this.hex8(this.currentAddress));
              _context16.prev = 3;
              _context16.next = 6;
              return this.radioSendBootloaderEraseBlock(this.currentAddress);
            case 6:
              if (!this.bAckReceived) {
                _context16.next = 11;
                break;
              }
              _context16.next = 9;
              return this.radioSendBootloaderGetStatus();
            case 9:
              _context16.next = 12;
              break;
            case 11:
              throw cc264xdfu.cc2640_errors.ACK_ERROR;
            case 12:
              if (!this.bResponseReceived) {
                _context16.next = 17;
                break;
              }
              if (!(this.replyData[2] == cc264xdfu.cc2640_status.kBootStatusSuccess)) {
                _context16.next = 15;
                break;
              }
              return _context16.abrupt("return", this.currentAddress);
            case 15:
              _context16.next = 18;
              break;
            case 17:
              throw cc264xdfu.cc2640_errors.RESPONSE_ERROR;
            case 18:
              _context16.next = 23;
              break;
            case 20:
              _context16.prev = 20;
              _context16.t0 = _context16["catch"](3);
              throw cc264xdfu.cc2640_errors.COMMS_ERROR;
            case 23:
            case "end":
              return _context16.stop();
          }
        }, _callee16, this, [[3, 20]]);
      }));
      function radioBootloaderEraseBlock() {
        return _radioBootloaderEraseBlock.apply(this, arguments);
      }
      return radioBootloaderEraseBlock;
    }()
  }, {
    key: "radioBootloaderEraseFlash",
    value: function () {
      var _radioBootloaderEraseFlash = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17() {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              log.debug("flash erase");
              this.currentAddress = 0;
            case 2:
              if (!(this.currentAddress < this.flashPageSize * this.flashProgramPageCount)) {
                _context17.next = 15;
                break;
              }
              _context17.prev = 3;
              _context17.next = 6;
              return this.radioBootloaderEraseBlock();
            case 6:
              this.currentAddress += this.flashPageSize;
              _context17.next = 13;
              break;
            case 9:
              _context17.prev = 9;
              _context17.t0 = _context17["catch"](3);
              log.debug('flash erase error');
              throw cc264xdfu.cc2640_errors.FLASH_ERASE_ERROR;
            case 13:
              _context17.next = 2;
              break;
            case 15:
            case "end":
              return _context17.stop();
          }
        }, _callee17, this, [[3, 9]]);
      }));
      function radioBootloaderEraseFlash() {
        return _radioBootloaderEraseFlash.apply(this, arguments);
      }
      return radioBootloaderEraseFlash;
    }()
  }, {
    key: "radioBootloaderWriteFlash",
    value: function () {
      var _radioBootloaderWriteFlash = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(progress) {
        var firmwareOffset, chunk, last_address;
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              log.debug("flash write", this.hex8(this.downloadAddress), this.hex8(this.downloadSize));
              this.currentAddress = this.downloadAddress;
              _context18.prev = 2;
              _context18.next = 5;
              return this.radioSendBootloaderDownload(this.downloadAddress, this.downloadSize);
            case 5:
              if (!this.bAckReceived) {
                _context18.next = 10;
                break;
              }
              _context18.next = 8;
              return this.radioSendBootloaderGetStatus();
            case 8:
              _context18.next = 11;
              break;
            case 10:
              throw cc264xdfu.cc2640_errors.ACK_ERROR;
            case 11:
              firmwareOffset = 0;
            case 12:
              if (!(this.currentAddress < this.flashPageSize * this.flashProgramPageCount)) {
                _context18.next = 30;
                break;
              }
              chunk = this.downloadFirmwareData.subarray(firmwareOffset, firmwareOffset + cc264xdfu.CC2640_CHUNK_SIZE);
              log.debug('addr:', this.hex8(this.currentAddress), this.hex2(chunk[0]), this.hex2(chunk[1]));
              _context18.next = 17;
              return this.radioSendBootloaderWriteData(chunk, cc264xdfu.CC2640_CHUNK_SIZE);
            case 17:
              if (!this.bAckReceived) {
                _context18.next = 22;
                break;
              }
              _context18.next = 20;
              return this.radioSendBootloaderGetStatus();
            case 20:
              _context18.next = 23;
              break;
            case 22:
              throw cc264xdfu.cc2640_errors.ACK_ERROR;
            case 23:
              if (!(!this.bResponseReceived || this.replyData[2] != cc264xdfu.cc2640_status.kBootStatusSuccess)) {
                _context18.next = 25;
                break;
              }
              throw cc264xdfu.cc2640_errors.RESPONSE_ERROR;
            case 25:
              this.currentAddress += cc264xdfu.CC2640_CHUNK_SIZE;
              firmwareOffset += cc264xdfu.CC2640_CHUNK_SIZE;
              if (progress) {
                last_address = this.flashPageSize * this.flashProgramPageCount;
                progress(this.currentAddress / last_address);
              }
              _context18.next = 12;
              break;
            case 30:
              log.debug('flash write done');
              return _context18.abrupt("return", 0);
            case 34:
              _context18.prev = 34;
              _context18.t0 = _context18["catch"](2);
              log.debug('flash write error');
              throw cc264xdfu.cc2640_errors.FLASH_WRITE_ERROR;
            case 38:
            case "end":
              return _context18.stop();
          }
        }, _callee18, this, [[2, 34]]);
      }));
      function radioBootloaderWriteFlash(_x12) {
        return _radioBootloaderWriteFlash.apply(this, arguments);
      }
      return radioBootloaderWriteFlash;
    }()
  }, {
    key: "radioUpdate",
    value: function () {
      var _radioUpdate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(firmware, progress) {
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              _context19.prev = 0;
              this.setFirmware(firmware);
              _context19.next = 4;
              return this.radioBootloaderSendhello();
            case 4:
              _context19.next = 6;
              return this.delay(100);
            case 6:
              _context19.next = 8;
              return this.radioBootloaderGetChipId();
            case 8:
              _context19.next = 10;
              return this.radioBootloaderGetChipMemorySizes();
            case 10:
              _context19.next = 12;
              return this.radioBootloaderEraseFlash();
            case 12:
              _context19.next = 14;
              return this.radioBootloaderWriteFlash(progress);
            case 14:
              _context19.next = 16;
              return this.radioBootloaderGetChecksum();
            case 16:
              _context19.t0 = _context19.sent;
              if (!(_context19.t0 != true)) {
                _context19.next = 19;
                break;
              }
              throw cc264xdfu.cc2640_errors.FLASH_CHECKSUM_ERROR;
            case 19:
              _context19.next = 24;
              break;
            case 21:
              _context19.prev = 21;
              _context19.t1 = _context19["catch"](0);
              throw _context19.t1;
            case 24:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this, [[0, 21]]);
      }));
      function radioUpdate(_x13, _x14) {
        return _radioUpdate.apply(this, arguments);
      }
      return radioUpdate;
    }()
  }]);
}();
_defineProperty(cc264xdfu, "cc2640_cmds", {
  kBootCmdPing: 0x20,
  kBootCmdDownload: 0x21,
  kBootCmdStatus: 0x23,
  kBootCmdSendData: 0x24,
  kBootCmdReset: 0x25,
  kBootCmdSectorErase: 0x26,
  kBootCmdCrc32: 0x27,
  kBootCmdGetChipId: 0x28,
  kBootCmdMemoryRead: 0x2A,
  kBootCmdMemoryWrite: 0x2B,
  kBootCmdBankErase: 0x2C,
  kBootCmdSetCCFG: 0x2D
});
_defineProperty(cc264xdfu, "cc2640_status", {
  kBootStatusSuccess: 0x40,
  kBootStatusUnknownCmd: 0x41,
  kBootStatusInvalidCmd: 0x42,
  kBootStatusInvalidAddr: 0x43,
  kBootStatusFlashFail: 0x44
});
_defineProperty(cc264xdfu, "cc2640_access", {
  kBootReadAccess8b: 0,
  kBootReadAccess32b: 1
});
_defineProperty(cc264xdfu, "cc2640_errors", {
  COMMS_ERROR: -1,
  ACK_ERROR: -2,
  RESPONSE_ERROR: -3,
  FLASH_ERASE_ERROR: -4,
  FLASH_WRITE_ERROR: -5,
  FLASH_ADDRESS_ERROR: -6,
  FLASH_FIRMWARE_ERROR: -7,
  FLASH_CHECKSUM_ERROR: -8
});
_defineProperty(cc264xdfu, "CC2640_FLASH_SECTOR", 4096);
_defineProperty(cc264xdfu, "CC2640_FLASH_SIZE_CFG", 0x4003002C);
_defineProperty(cc264xdfu, "CC2640_RAM_SIZE_CFG", 0x40082250);
_defineProperty(cc264xdfu, "CC2640_CHUNK_SIZE", 128);
_defineProperty(cc264xdfu, "CC2640_PROG_SECTORS", 29);
_defineProperty(cc264xdfu, "CC2640_PROG_SECTORS_F", 32);
_defineProperty(cc264xdfu, "CC2640_DEBUG_ID", 'cc2640:');
_defineProperty(cc264xdfu, "CC2640_CHIP_ID", 11);
_defineProperty(cc264xdfu, "CC2642_FLASH_SECTOR", 8192);
_defineProperty(cc264xdfu, "CC2642_PROG_SECTORS", 32);
_defineProperty(cc264xdfu, "CC2642_CODE_IDENT", 0x20013c00);
_defineProperty(cc264xdfu, "CC2642_PROG_SECTORS_F", 44);
_defineProperty(cc264xdfu, "CC2642_DEBUG_ID", 'cc2640:');
_defineProperty(cc264xdfu, "CC2642_CHIP_ID", 3);

/***/ })

}]);
//# sourceMappingURL=74d0c6db8b6342186b4d.src_HardwareInterface_DownloadPlatform_VexSerialDevices_VexSerialDevice_ts.bundle.js.map