"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_AIM_AIMInterface_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/AIM/AIMInterface.ts":
/*!********************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/AIM/AIMInterface.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AIMInterface: () => (/* binding */ AIMInterface)
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("AIMInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering interface-name

// interface types/enums



// TODO: cleanup imports



var AIMInterface = /*#__PURE__*/function (_DownloadPlatformInte) {
  function AIMInterface() {
    var _this;
    _classCallCheck(this, AIMInterface);
    _this = _callSuper(this, AIMInterface);

    // preload the firmware to make checks faster
    //#endregion remote control
    //#region firmware
    _defineProperty(_this, "cachedServerFirmwareVersion", null);
    _this.cacheServerFirmwareVersion();
    return _this;
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported
  _inherits(AIMInterface, _DownloadPlatformInte);
  return _createClass(AIMInterface, [{
    key: "supportsBLEConnection",
    get: function get() {
      return true;
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
    key: "deviceName",
    get: function get() {
      return "Robot";
    }
  }, {
    key: "getSDKVersion",
    value: function getSDKVersion() {
      return null;
    }
    //#endregion interface information

    //#region connection control
  }, {
    key: "openConnectionToRobot",
    value: function openConnectionToRobot(id) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
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
  }, {
    key: "setTeamNumber",
    value: function setTeamNumber(team) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
  }, {
    key: "downloadProjectAndRun",
    value:
    //#endregion program control

    //#region project downloads
    function downloadProjectAndRun(code, slot, projectName, language, progressCallback, options) {
      log.debug("downloadProjectAndRun called");
      var defaultOptions = {
        autoRun: false
      };
      return this.downloadProject(code, slot, projectName, language, progressCallback, Object.assign(defaultOptions, options));
    }
  }, {
    key: "runInitialCheck",
    value: // TODO: this is only used by NWJS interfaces. it should be removed with the rest of the NWJS code...
    /**
     * used to check if the python VM is good and acn get updated
     * @returns null if no issues or the IDownloadResult to pass back if there is an issue
     */
    function () {
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
    }() //#endregion project downloads
    //#region file operations
    /**
     * writes a sound file to the robot.
     * @param filename the name of the file to write
     * @param data the contents of the file to write
     * @param progressCallback a callback that return the progress of the write
     * @returns true if the write was successful, false if it failed
     * @throws NoBrainConnectedError
     * @throws OperationNotSupportedError
     */
  }, {
    key: "getPythonVMValid",
    value:
    //#endregion file operations

    //#region compilers
    //#endregion compilers

    //#region Python VM Checks
    /**
     * Only supported on IQNativeUSB
     * @throws OperationNotSupportedError
     */
    function getPythonVMValid() {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }
    //#endregion Python VM Checks

    //#region script commands
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
  }, {
    key: "getServerFirmwareVersion",
    value: function () {
      var _getServerFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              catalogURL = "https://content.vexrobotics.com/vexos/public/AIM/catalog.txt";
              log.debug("catalogURL:", catalogURL);
              _context2.prev = 2;
              _context2.next = 5;
              return fetch(catalogURL, {
                cache: "no-cache"
              });
            case 5:
              catalogResponse = _context2.sent;
              _context2.next = 8;
              return catalogResponse.text();
            case 8:
              catalog = _context2.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_AIM_/, "");
              return _context2.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromCatalogString(versionStr));
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
      function getServerFirmwareVersion() {
        return _getServerFirmwareVersion.apply(this, arguments);
      }
      return getServerFirmwareVersion;
    }()
    /**
     * Use this to check if the interface supports updating the firmware
     * @returns true if the interface supports firmware updating
     */
  }, {
    key: "canUpdateFirmware",
    value: function canUpdateFirmware() {
      return this.supportsFirmwareUpdateRobot;
    }

    /**
     * Use this to check if the interface will automatically try to update
     * the firmware for a brain that connects
     */
  }, {
    key: "doesFirmwareUpdateOnConnect",
    value: function doesFirmwareUpdateOnConnect() {
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
     * will pull the firmware version from the server
     */
  }, {
    key: "fetchAndParseCurrentFirmware",
    value: (function () {
      var _fetchAndParseCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var data, response;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              data = "VEXOS_AIM_1_0_0_0";
              _context3.prev = 1;
              _context3.next = 4;
              return fetch("https://content.vexrobotics.com/vexos/public/AIM/catalog.txt", {
                cache: "no-cache"
              });
            case 4:
              response = _context3.sent;
              _context3.next = 7;
              return response.text();
            case 7:
              data = _context3.sent;
              _context3.next = 13;
              break;
            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](1);
              log.warn("Pulling firmware version error:", _context3.t0);
            case 13:
              data = data.split("_").splice(2, 5).join(".");
              return _context3.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_4__.VexVersion.fromString(data));
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, null, [[1, 10]]);
      }));
      function fetchAndParseCurrentFirmware() {
        return _fetchAndParseCurrentFirmware.apply(this, arguments);
      }
      return fetchAndParseCurrentFirmware;
    }() //#endregion firmware
    //#region User Port comms
    )
  }]);
}(_DownloadPlatformInterface__WEBPACK_IMPORTED_MODULE_3__.DownloadPlatformInterface);


/***/ })

}]);
//# sourceMappingURL=2f354def405ca69fcd5b.src_HardwareInterface_DownloadPlatform_AIM_AIMInterface_ts.bundle.js.map