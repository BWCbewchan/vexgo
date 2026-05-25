"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_DownloadPlatform_IQ_IQInterface_ts"],{

/***/ "./src/HardwareInterface/DownloadPlatform/IQ/IQInterface.ts":
/*!******************************************************************!*\
  !*** ./src/HardwareInterface/DownloadPlatform/IQ/IQInterface.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   IQInterface: () => (/* binding */ IQInterface)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../types/HWErrors */ "./src/HardwareInterface/types/HWErrors.ts");
/* harmony import */ var _DownloadPlatformInterface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../DownloadPlatformInterface */ "./src/HardwareInterface/DownloadPlatform/DownloadPlatformInterface.ts");
/* harmony import */ var _AppInfo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../AppInfo */ "./src/AppInfo.ts");
/* harmony import */ var _VexVersion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../VexVersion */ "./src/HardwareInterface/VexVersion.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../helpers */ "./src/helpers.ts");
/* harmony import */ var _appVersionInfo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../appVersionInfo */ "./src/appVersionInfo.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("IQInterface");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering interface-name

// interface types/enums



// TODO: cleanup imports






var IQInterface = /*#__PURE__*/function (_DownloadPlatformInte) {
  function IQInterface() {
    var _this;
    _classCallCheck(this, IQInterface);
    _this = _callSuper(this, IQInterface);

    // preload the firmware to make checks faster
    _defineProperty(_this, "_targetIsIQ2", false);
    _defineProperty(_this, "cachedIQ1ServerFirmwareVersion", null);
    _defineProperty(_this, "cachedIQ2ServerFirmwareVersion", null);
    _this.cacheIQServerFirmwareVersion();
    return _this;
  }

  //#region interface information
  // These are all properties that are used by the UI to know what is supported
  _inherits(IQInterface, _DownloadPlatformInte);
  return _createClass(IQInterface, [{
    key: "supportsTeamNumber",
    get: function get() {
      return false;
    }
  }, {
    key: "getSDKVersion",
    value: function getSDKVersion() {
      return ["Gen 1 SDK " + (0,_appVersionInfo__WEBPACK_IMPORTED_MODULE_7__.sdkVersionIQ)(), "Gen 2 SDK " + (0,_appVersionInfo__WEBPACK_IMPORTED_MODULE_7__.sdkVersionIQ2)()];
    }
    //#endregion interface information

    //#region connection control
    /**
     * Opens a connection to a brain
     * It will return when the connection is opened or if the connection fails to open
     * @throws OperationNotSupportedError
     */
  }, {
    key: "unlockBrain",
    value:
    /**
     * NOT SUPPORTED BY IQ
     * @throws OperationNotSupportedError
     */
    function unlockBrain(unlockCode) {
      throw new _types_HWErrors__WEBPACK_IMPORTED_MODULE_2__.OperationNotSupportedError();
    }

    //#endregion connection control

    //#region connection status
  }, {
    key: "triggerRobotInfoUpdate",
    value: function triggerRobotInfoUpdate() {
      // update if the target is IQ2...
      if (this.isBrainConnected()) {
        var brainInfo = this.getRobotInfo();
        this._targetIsIQ2 = brainInfo.deviceType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2;
      }
      _superPropGet(IQInterface, "triggerRobotInfoUpdate", this, 3)([]);
    }

    /**
     * Sets the name of the currently connected brain
     * @param name the name to set the brain to
     * @throws OperationNotSupportedError
     * @throws NoBrainConnectedError
     */
  }, {
    key: "setTeamNumber",
    value:
    /**
     * NOT SUPPORTED BY IQ
     * @throws OperationNotSupportedError
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
    key: "targetIsIQ2",
    get: function get() {
      if (this.isBrainConnected()) {
        return this._targetIsIQ2;
      } else {
        return _AppInfo__WEBPACK_IMPORTED_MODULE_4__.appState.getAppState().targetGen === "Second";
      }
    }
  }, {
    key: "appTargetIsIQ2",
    get: function get() {
      return _AppInfo__WEBPACK_IMPORTED_MODULE_4__.appState.getAppState().targetGen === "Second";
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
      // TODO: actually implement this
      return false;
    }
    //#endregion brain info

    //#region program control
    /**
     * This will attempt to run the program loaded in the specified slot on
     * the brain.
     * @param slot the slot to run; 0 indexed from 0-3 for IQ1 and 0-7 for IQ2
     * @throws NoBrainConnectedError
     */
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
     * @param slot the slot to download the program to (0-3)
     * @param projectName the name of the project to download
     * @param language the language of the project to download
     * @param progressCallback a callback to inform about how far along the download progress is
     * @param options various options to adjust the download process
     * @throws NoBrainConnectedError
     */
    function downloadProjectAndRun(code, slot, projectName, language, progressCallback, options) {
      log.debug("downloadProjectAndRun called");
      var defaultOptions = {
        autoRun: true,
        hasController: false
      };
      return this.downloadProject(code, slot, projectName, language, progressCallback, Object.assign(defaultOptions, options));
    }

    /**
     * This will attempt to download the specified program to the connected
     * brain. If the program is python, it will also make sure the VM is loaded
     * on the brain.
     * @param slot the slot to download the program to (0-3)
     * @param projectName the name of the project to download
     * @param language the language of the program to download
     * @param data the compiled binaries to download
     * @param progressCallback a callback to inform about how far along the download progress is
     * @throws NoBrainConnectedError
     */
  }, {
    key: "runInitialCheck",
    value: // TODO: this is only used by NWJS interfaces. it should be removed with the rest of the NWJS code...
    /**
     * used to check if the python VM is good and can get updated
     * @returns null if no issues or the IDownloadResult to pass back if there is an issue
     */
    function () {
      var _runInitialCheck = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(language) {
        var _this2 = this;
        var VMCheckPromise, TimeoutPromise;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("runInitialCheck", language);
              if (!(this.targetIsIQ2 && language === "python" && this.getRobotInfo().connectionMethod === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexConnectionMethod.RC_Radio)) {
                _context3.next = 6;
                break;
              }
              log.debug("Checking for valid Python VM");

              // There have been issues where we start to request the VM information,
              // but we don't get a response back from the brain. When this happens
              // VEXcode basically gets stuck in a state where it thinks it is downloading
              // a project. This blocks all future downloads until the app is restarted.
              // to prevent that, we have added a simple timeout. We use the native
              // promise.race feature to handle returning either the VM result or the
              // timeout error to force a failed download.

              // this is the normal promise used to get the VM data from the brain
              VMCheckPromise = new Promise(/*#__PURE__*/function () {
                var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
                  var vmResult;
                  return _regeneratorRuntime().wrap(function _callee$(_context) {
                    while (1) switch (_context.prev = _context.next) {
                      case 0:
                        _context.next = 2;
                        return _this2.getPythonVMValid();
                      case 2:
                        vmResult = _context.sent;
                        if (!vmResult) {
                          log.debug("Python VM checks failed");
                          resolve({
                            code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.invalidVM
                          });
                        }
                        resolve(null);
                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }, _callee);
                }));
                return function (_x2, _x3) {
                  return _ref.apply(this, arguments);
                };
              }()); // this is the timeout promise, used to limit the check to a max of 2 seconds
              TimeoutPromise = new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(resolve, reject) {
                  return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                    while (1) switch (_context2.prev = _context2.next) {
                      case 0:
                        _context2.next = 2;
                        return (0,_helpers__WEBPACK_IMPORTED_MODULE_6__.waitms)(2000);
                      case 2:
                        resolve({
                          code: _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.DownloadResultCode.error
                        });
                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }, _callee2);
                }));
                return function (_x4, _x5) {
                  return _ref2.apply(this, arguments);
                };
              }()); // now that we have the promises. return whichever one resolves first.
              return _context3.abrupt("return", Promise.race([VMCheckPromise, TimeoutPromise]));
            case 6:
              return _context3.abrupt("return", null);
            case 7:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function runInitialCheck(_x) {
        return _runInitialCheck.apply(this, arguments);
      }
      return runInitialCheck;
    }() //#endregion project downloads
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
     * Compile the provided source code and return the result
     * @param code the code to compile
     * @param slot the slot to compile the program for
     * @param projectName the name of the project to compile
     * @param language the language of the project to compile
     * @param options various options to adjust the compilation process
     */
  }, {
    key: "compileProject",
    value: function () {
      var _compileProject = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(code, slot, projectName, language, options) {
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              // for IQ we need to provide the controller value
              if (!options) {
                options = {
                  hasController: false
                };
              }
              options.generation = this.targetIsIQ2 ? "Second" : "First";

              // everything else is the same so don't duplicate the code...
              return _context4.abrupt("return", _superPropGet(IQInterface, "compileProject", this, 3)([code, slot, projectName, language, options]));
            case 3:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function compileProject(_x6, _x7, _x8, _x9, _x10) {
        return _compileProject.apply(this, arguments);
      }
      return compileProject;
    }() //#endregion compilers
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
      var _getServerFirmwareVersion = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              return _context5.abrupt("return", this.fetchServerFirmware(this.targetIsIQ2));
            case 1:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function getServerFirmwareVersion() {
        return _getServerFirmwareVersion.apply(this, arguments);
      }
      return getServerFirmwareVersion;
    }()
  }, {
    key: "cacheIQServerFirmwareVersion",
    value: function cacheIQServerFirmwareVersion() {
      var _this3 = this;
      if (this.cachedIQ1ServerFirmwareVersion === null) {
        this.fetchServerFirmware(false).then(function (result) {
          _this3.cachedIQ1ServerFirmwareVersion = result;
        });
      }
      if (this.cachedIQ2ServerFirmwareVersion === null) {
        this.fetchServerFirmware(true).then(function (result) {
          _this3.cachedIQ2ServerFirmwareVersion = result;
        });
      }
    }
  }, {
    key: "getCachedIQ1ServerFirmwareVersion",
    value: function getCachedIQ1ServerFirmwareVersion() {
      if (!this.cachedIQ1ServerFirmwareVersion) {
        this.cacheIQServerFirmwareVersion();
      }
      return this.cachedIQ1ServerFirmwareVersion;
    }
  }, {
    key: "getCachedIQ2ServerFirmwareVersion",
    value: function getCachedIQ2ServerFirmwareVersion() {
      if (!this.cachedIQ2ServerFirmwareVersion) {
        this.cacheIQServerFirmwareVersion();
      }
      return this.cachedIQ2ServerFirmwareVersion;
    }
  }, {
    key: "fetchServerFirmware",
    value: function () {
      var _fetchServerFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(getIQ2) {
        var base, catalogURL, catalogResponse, catalog, versionStr;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              base = "https://content.vexrobotics.com/vexos/public/";
              catalogURL = base + (getIQ2 ? "IQ2/catalog.txt" : "IQ/catalog4.txt");
              log.debug("catalogURL:", catalogURL);
              _context6.prev = 3;
              _context6.next = 6;
              return fetch(catalogURL);
            case 6:
              catalogResponse = _context6.sent;
              _context6.next = 9;
              return catalogResponse.text();
            case 9:
              catalog = _context6.sent;
              log.debug("catalog content:", catalog);
              versionStr = catalog.replace(/VEXOS_IQ2?_/, "");
              return _context6.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromCatalogString(versionStr));
            case 15:
              _context6.prev = 15;
              _context6.t0 = _context6["catch"](3);
              log.warn(_context6.t0);
              return _context6.abrupt("return", null);
            case 19:
            case "end":
              return _context6.stop();
          }
        }, _callee6, null, [[3, 15]]);
      }));
      function fetchServerFirmware(_x11) {
        return _fetchServerFirmware.apply(this, arguments);
      }
      return fetchServerFirmware;
    }()
  }, {
    key: "getUpdatedNeededFromServer",
    value: function getUpdatedNeededFromServer(server, brain) {
      log.debug("server:", server, "brain:", brain);
      if (server == null || brain.toUserString() === "0.0.0") {
        return _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.Unsure;
      }
      return server.compare(brain) > 0 ? _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.NeedsUpdate : _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.UpdateNeededOptions.UpToDate;
    }

    /**
     * Use this to check if the interface supports updating the firmware
     * @returns true if the interface supports firmware updating
     */
  }, {
    key: "canUpdateFirmware",
    value: function canUpdateFirmware() {
      return false;
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
     * NOT SUPPORTED ON IQ
     * @throws OperationNotSupportedError
     */
  }, {
    key: "updateFirmware",
    value: function updateFirmware(progress) {
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
     * will pull the firmware version from the server
     */
  }, {
    key: "fetchAndParseCurrentFirmware",
    value: (function () {
      var _fetchAndParseCurrentFirmware = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7() {
        var data, catalogURL, response;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              data = this.targetIsIQ2 ? "VEXOS_IQ2_1_0_4_0" : "VEXOS_IQ_2_2_0_0";
              catalogURL = "https://content.vexrobotics.com/vexos/public/" + (this.targetIsIQ2 ? "IQ2/catalog.txt" : "IQ/catalog4.txt");
              _context7.prev = 2;
              _context7.next = 5;
              return fetch(catalogURL, {
                cache: "no-cache"
              });
            case 5:
              response = _context7.sent;
              _context7.next = 8;
              return response.text();
            case 8:
              data = _context7.sent;
              _context7.next = 14;
              break;
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](2);
              log.warn("Pulling firmware version error:", _context7.t0);
            case 14:
              data = data.split("_").splice(2, 5).join(".");
              return _context7.abrupt("return", _VexVersion__WEBPACK_IMPORTED_MODULE_5__.VexVersion.fromString(data));
            case 16:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[2, 11]]);
      }));
      function fetchAndParseCurrentFirmware() {
        return _fetchAndParseCurrentFirmware.apply(this, arguments);
      }
      return fetchAndParseCurrentFirmware;
    }())
  }, {
    key: "onDeviceConnected",
    value:
    //#endregion User Port comms

    //#region events

    function onDeviceConnected() {
      if (this.isBrainConnected()) {
        var brainInfo = this.getRobotInfo();
        this._targetIsIQ2 = brainInfo.deviceType === _types_HWEnums__WEBPACK_IMPORTED_MODULE_1__.VexDeviceType.VEXIQ2;
      }
      _superPropGet(IQInterface, "onDeviceConnected", this, 3)([]);
    }
    //#endregion

    //#region low-level logger
  }]);
}(_DownloadPlatformInterface__WEBPACK_IMPORTED_MODULE_3__.DownloadPlatformInterface);


/***/ })

}]);
//# sourceMappingURL=a7b0d329fc29d3409965.src_HardwareInterface_DownloadPlatform_IQ_IQInterface_ts.bundle.js.map