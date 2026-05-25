"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_Blockly_Extensions_Vex123Blocks_ts"],{

/***/ "./src/Blockly/Extensions/Vex123Blocks.ts":
/*!************************************************!*\
  !*** ./src/Blockly/Extensions/Vex123Blocks.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Vex123Blocks: () => (/* binding */ Vex123Blocks),
/* harmony export */   setVMControls: () => (/* binding */ setVMControls)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Extension */ "./src/Blockly/Extensions/Extension.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils */ "./src/Blockly/Extensions/utils/index.ts");
/* harmony import */ var _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../VexcodeTimer */ "./src/VexcodeTimer.ts");
/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/helpers */ "./src/Blockly/Extensions/utils/helpers.ts");
/* harmony import */ var _SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../SimWindow/messageEnums */ "./src/SimWindow/messageEnums.ts");
/* harmony import */ var _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../layout/PrintConsole */ "./src/layout/PrintConsole.tsx");
/* harmony import */ var _BlocklyController__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../BlocklyController */ "./src/Blockly/BlocklyController.ts");
/* harmony import */ var _dispatcher__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../dispatcher */ "./src/dispatcher.ts");
/* harmony import */ var _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HardwareInterface/controllers/VEX123Controller */ "./src/HardwareInterface/controllers/VEX123Controller.ts");
/* harmony import */ var _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../HardwareInterface/types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("123BlocksExtension");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();

// tslint:disable: member-ordering












var VMControls = null;

/**
 * lets you tell the CTE extension how to control the VM. This is important
 * since we have a block for stopping the project. This should be used before
 * tying to run any projects.
 * 
 * @param newControls the VMControls object from the vm module
 */
function setVMControls(newControls) {
  log.debug("setting VMControls");
  VMControls = newControls;
}
var Vex123Blocks = /*#__PURE__*/function (_ExtensionBase) {
  function Vex123Blocks(runtime) {
    var _this;
    _classCallCheck(this, Vex123Blocks);
    _this = _callSuper(this, Vex123Blocks, [runtime]);
    // Looks Variables
    _defineProperty(_this, "primitives", {});
    /** Drivetrain variables */
    _defineProperty(_this, "driveVelocity", 75);
    _defineProperty(_this, "readyEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_8__.DispatcherEvent());
    _defineProperty(_this, "linesCalled", 0);
    _defineProperty(_this, "lastSent", Date.now());
    _this.setExtensionDefaults();
    _this.buildPrimitives();
    _this.onConnectionStatusChange = _this.onConnectionStatusChange.bind(_this);
    _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_11__.on("HWInterface.ConnectionStateChange", _this.onConnectionStatusChange);
    return _this;
  }
  _inherits(Vex123Blocks, _ExtensionBase);
  return _createClass(Vex123Blocks, [{
    key: "onConnectionStatusChange",
    value: function onConnectionStatusChange(newState) {
      log.debug("123 connection status changed");
      if (newState === _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.DeviceConnectionState.Disconnected) {
        VMControls.stopVM();
      }
    }
  }, {
    key: "setExtensionDefaults",
    value: function setExtensionDefaults() {
      // Reset Looks Variables
      this.printPrecision = "0";

      // Reset Timer
      Vex123Blocks.timer.reset();
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'vex123Blocks',
        blocks: [
        //#region events
        {
          opcode: '123_events_when_started',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.HAT,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'whenstarted',
          arguments: {},
          func: 'whenStarted',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        },
        //#endregion events
        //#region looks
        {
          opcode: '123_looks_glow',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'glow (COLOR)',
          arguments: {
            COLOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'green'
            }
          },
          func: 'looksGlow'
        }, {
          opcode: '123_looks_print',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'print (DATA)',
          arguments: {
            DATA: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'Hello'
            },
            andsetcursortonextrow_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'looksPrint'
        }, {
          opcode: '123_looks_set_print_precision',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set print precision to [PRECISION]',
          arguments: {
            PRECISION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": '0',
              menu: 'PRECISIONS'
            }
          },
          func: 'looksSetPrintPrecision'
        }, {
          opcode: '123_looks_next_row',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set cursor to next row',
          arguments: {},
          func: 'looksNextRow'
        }, {
          opcode: '123_looks_clear_all_rows',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'clear all rows',
          arguments: {},
          func: 'looksClearAllRows'
        }, {
          opcode: '123_looks_set_print_color',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set print color [COLORS]',
          arguments: {
            COLORS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'black',
              menu: 'PENCOLORS'
            }
          },
          func: 'looksSetPrintColor'
        },
        //#endregion looks
        //#region sound
        {
          opcode: '123_sounds_play_sound',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'play (SOUND)',
          arguments: {
            SOUND: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'honk'
            }
          },
          func: 'soundPlaySound'
        },
        //#endregion sound
        //#region actions
        {
          opcode: '123_act_act',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'act (ACT)',
          arguments: {
            ACT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'sad'
            }
          },
          func: 'actionsAct'
        },
        //#endregion actions
        //#region control
        {
          opcode: 'cte_control_break',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'break',
          arguments: {},
          func: 'controlBreak'
        }, {
          opcode: 'cte_control_stop_project',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: true,
          blockAllThreads: false,
          text: 'stop project',
          arguments: {},
          func: 'controlStopProject'
        },
        //#endregion control
        //#region sensing
        //#region sensing - brain timer
        {
          opcode: '123_sensing_reset_timer',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'reset timer',
          arguments: {},
          func: 'sensingResetTimer'
        }, {
          opcode: '123_sensing_timer_value',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'timer in seconds',
          arguments: {},
          func: 'sensingTimerInSeconds'
        },
        //#endregion sensing - brain timer
        //#region sensing - drivetrain
        //#endregion sensing - drivetrain
        //#region sensing - button sensing
        {
          opcode: '123_sensing_brain_button_pressed',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: '(BUTTONS) pressed',
          arguments: {
            ACT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'leftPressed'
            }
          },
          func: 'sensingButtonPressed'
        },
        //#endregion sensing - button sensing
        //#region sensing - gyro sensing
        {
          opcode: '123_sensing_crash',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'detected crash?',
          arguments: {},
          func: 'sensingGyroCrashed'
        }, {
          opcode: '123_sensing_acceleration',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'acceleration of (DIRECTIONS) axis in g',
          arguments: {
            DIRECTIONS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'x'
            }
          },
          func: 'sensingGyroAcceleration'
        },
        //#endregion sensing - gyro sensing
        //#region sensing - eye sensing
        {
          opcode: '123_sensing_eye_set_light_on',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set eye light (MODE)',
          arguments: {
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'on'
            }
          },
          func: 'sensingEyeSetLight'
        }, {
          opcode: '123_sensing_eye_set_light_power',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set eye light power to (POWER) %',
          arguments: {
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 50
            }
          },
          func: 'sensingEyeSetLightPower'
        }, {
          opcode: '123_sensing_near_object',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye found an object?',
          arguments: {},
          func: 'sensingEyeFoundObject'
        }, {
          opcode: '123_sensing_eye_detect',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye detects (COLORS)?',
          arguments: {
            COLORS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'red'
            }
          },
          func: 'sensingEyeDetectsColor'
        }, {
          opcode: '123_sensing_bright_object',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye bight object?',
          arguments: {},
          func: 'sensingEyeBightObject'
        }, {
          opcode: '123_sensing_eye_brightness',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye brightness in %',
          arguments: {},
          func: 'sensingEyeBrightness'
        }, {
          opcode: '123_sensing_hue',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye hue in degrees',
          arguments: {},
          func: 'sensingEyeHue'
        },
        //#endregion sensing - eye sensing
        //#endregion sensing
        //#region variables
        {
          opcode: 'cte_variables_set_array_to',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [LIST] to',
          arguments: {},
          func: 'setListTo'
        },
        //#endregion variables
        //#region Operators
        {
          opcode: 'cte_operator_function_atan2',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'atan2 of X:(X) Y:(Y)',
          arguments: {
            X: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            },
            Y: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'operatorFunctionAtan2'
        },
        //#endregion Operators
        //#region Drivetrain
        {
          opcode: '123_drivetrain_drive',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION]',
          arguments: {
            direction: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'forward',
              menu: 'DIRECTION'
            }
          },
          func: 'drivetrainDrive'
        }, {
          opcode: '123_drivetrain_drive_until',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION]',
          arguments: {
            direction: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'forward',
              menu: 'DIRECTION'
            },
            obstacles: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'object',
              menu: 'OBSTACLES'
            }
          },
          func: 'drivetrainDriveUntil'
        }, {
          opcode: '123_drivetrain_drive_for',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION] for [AMOUNT] [UNITS]',
          arguments: {
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'fwd',
              menu: 'DIRECTION'
            },
            AMOUNT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            },
            UNITS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'step',
              menu: 'UNITS'
            }
          },
          func: 'drivetrainDriveFor'
        }, {
          opcode: '123_drivetrain_turn',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'turn [TURNDIRECTION]',
          arguments: {
            direction: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'right',
              menu: 'TURNDIRECTION'
            }
          },
          func: 'drivetrainTurn'
        }, {
          opcode: '123_drivetrain_turn_for',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'turn [TURNDIRECTION] for [AMOUNT] degrees',
          arguments: {
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'right',
              menu: 'TURNDIRECTION'
            },
            AMOUNT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'drivetrainTurnFor'
        }, {
          opcode: '123_drivetrain_turn_to_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'turn to [HEADING]',
          arguments: {
            HEADING: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'drivetrainTurnToHeading'
        }, {
          opcode: '123_drivetrain_set_drive_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [HEADING]',
          arguments: {
            HEADING: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'drivetrainSetHeading'
        }, {
          opcode: '123_drivetrain_set_drive_timeout',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set drive timeout to [TIMEOUT] seconds',
          arguments: {
            TIMEOUT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'drivetrainSetTimeout'
        }, {
          opcode: '123_drivetrain_stop_driving',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'stop driving',
          arguments: {},
          func: 'drivetrainStop'
        }, {
          opcode: '123_sensing_drive_is_done',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive is done?',
          arguments: {},
          func: 'sensingDrivetrainIsDone'
        }, {
          opcode: '123_sensing_drive_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive heading in degrees',
          arguments: {},
          func: 'sensingDrivetrainHeading'
        }
        //#endregion Drivetrain
        ],
        menus: {
          TURNDIRECTION: [{
            value: 'right',
            text: 'right'
          }, {
            value: 'left',
            text: 'left'
          }],
          DIRECTION: [{
            value: 'fwd',
            text: 'forward'
          }, {
            value: 'rev',
            text: 'reverse'
          }],
          OBSTACLES: [{
            value: 'object',
            text: 'object'
          }, {
            value: 'crash',
            text: 'crash'
          }, {
            value: 'line',
            text: 'line'
          }],
          UNITS: [{
            value: 'step',
            text: 'steps'
          }, {
            value: 'mm',
            text: 'millimeters'
          }],
          PRECISIONS: [{
            value: '0',
            text: '1'
          }, {
            value: '1',
            text: '0.1'
          }, {
            value: '2',
            text: '0.01'
          }, {
            value: '3',
            text: '0.001'
          }, {
            value: '-1',
            text: 'All Digits'
          }],
          PENCOLORS: [{
            value: "black",
            text: 'black'
          }, {
            value: "red",
            text: 'red'
          }, {
            value: "green",
            text: 'green'
          }, {
            value: "blue",
            text: 'blue'
          }],
          ORIENTATIONMENU: [{
            value: 'pitch',
            text: 'pitch'
          }, {
            value: 'roll',
            text: 'roll'
          }, {
            value: 'yaw',
            text: 'yaw'
          }]
        }
      };
    }
  }, {
    key: "buildPrimitives",
    value: function buildPrimitives() {
      var _this2 = this;
      var info = this.getInfo();
      var out = {};
      info.blocks.forEach(function (block) {
        var func = block.func;
        if (!func) {
          log.debug("no function for", block.opcode);
          return;
        }
        if (typeof func === "function") {
          out[block.opcode] = _this2[func];
        } else if (typeof func === "string") {
          out[block.opcode] = _this2[block.func];
        } else {
          log.warn("unexpected type for function", block);
        }
      });
      this.primitives = out;
    }

    /**
     * Retrieve the block primitives implemented by this package.
     * @return {object.<string, Function>} Mapping of opcode to Function.
     */
  }, {
    key: "getPrimitives",
    value: function getPrimitives() {
      return this.primitives;
    }

    //#region events
  }, {
    key: "whenStarted",
    value: function whenStarted(args, util) {
      var _this3 = this;
      log.debug("whenStarted");
      // this is a special case. hat blocks need to return a boolean true
      // to make sure the block stack actually runs.
      // see handleReport in vm src/engine/execute.js
      return new Promise(/*#__PURE__*/function () {
        var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(resolve, reject) {
          var start, delay;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                Vex123Blocks.timer.reset();
                if (!util.target.firstRun) {
                  _context.next = 28;
                  break;
                }
                util.target.firstRun = false;
                Vex123Blocks.isReady = false;
                log.debug("running init code...");
                // we need to wait 600ms, but we want to make sure that other changes don't cause too much delay
                start = Date.now(); // reset print console color
                _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__.PRINTCONSOLECONTROLLER.setConsoleTextColor(_SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum[_SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum.black]);

                // set up robot values to have a known starting state
                _context.next = 9;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.imu.clearCrashFlag();
              case 9:
                _context.next = 11;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setSensorLed(100);
              case 11:
                _context.next = 13;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setTimeout(0);
              case 13:
                _context.next = 15;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setHeading(0);
              case 15:
                _context.next = 17;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setVelocity(75);
              case 17:
                _context.next = 19;
                return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setTurnRate(75);
              case 19:
                // let any other when started stacks know that they are good to run.
                Vex123Blocks.isReady = true;
                _this3.readyEvent.fire();

                // we want to wait at least 600 ms before we actually start the code...
                delay = 600 - (Date.now() - start);
                if (!(delay > 0)) {
                  _context.next = 25;
                  break;
                }
                _context.next = 25;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(delay);
              case 25:
                Vex123Blocks.timer.reset();
                _context.next = 38;
                break;
              case 28:
                log.debug("skipping init code...");

                // we want to wait 600 ms before we actually start the code...
                _context.next = 31;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(600);
              case 31:
                if (Vex123Blocks.isReady) {
                  _context.next = 38;
                  break;
                }
                log.debug("init has not been completed. waiting for that to finish...");
                // wait for the init to complete
                _context.next = 35;
                return new Promise(function (resolve, reject) {
                  _this3.readyEvent.registerCallback(resolve);
                });
              case 35:
                log.debug("init completed");

                // just to make sure it does not impact the order of stack execution,
                // we are adding a 1ms delay to let the first when started run
                // without waiting for this to complete
                _context.next = 38;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(1);
              case 38:
                resolve(true);
              case 39:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }
    //#endregion events

    //#region Drivetrain Opcode Executors
  }, {
    key: "drivetrainDrive",
    value: function () {
      var _drivetrainDrive = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args) {
        var velocity;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("drivetrainDrive: ".concat(JSON.stringify(args)));
              velocity = args.DIRECTION === 'fwd' ? this.driveVelocity : -this.driveVelocity;
              _context2.prev = 2;
              _context2.next = 5;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.drive(velocity);
            case 5:
              return _context2.abrupt("return");
            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](2);
              log.warn(_context2.t0);
            case 11:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[2, 8]]);
      }));
      function drivetrainDrive(_x3) {
        return _drivetrainDrive.apply(this, arguments);
      }
      return drivetrainDrive;
    }()
  }, {
    key: "intCheck",
    value: function intCheck(amount) {
      if (amount > 32767) {
        amount = 32767;
      }
      if (amount < -32768) {
        amount = -32768;
      }
      return amount;
    }
  }, {
    key: "drivetrainDriveFor",
    value: function () {
      var _drivetrainDriveFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args) {
        var isForward, distance, amount;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("drivetrainDriveFor called with direction: ".concat(args.DIRECTION, ", units: ").concat(args.UNITS, ", amount: ").concat(args.AMOUNT));
              isForward = args.DIRECTION === 'fwd';
              distance = args.AMOUNT; // If the units are "steps", multiply by 78. If it's "mm", do nothing.
              if (args.UNITS === 'step') {
                distance = distance * 78;
              }

              // Apply negative distance for reverse
              if (!isForward) {
                distance = -distance; // Negative distance for reverse
              }
              amount = this.intCheck(distance);
              _context3.prev = 6;
              _context3.next = 9;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.driveFor(amount, this.driveVelocity);
            case 9:
              return _context3.abrupt("return");
            case 12:
              _context3.prev = 12;
              _context3.t0 = _context3["catch"](6);
              log.warn(_context3.t0);
            case 15:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[6, 12]]);
      }));
      function drivetrainDriveFor(_x4) {
        return _drivetrainDriveFor.apply(this, arguments);
      }
      return drivetrainDriveFor;
    }()
  }, {
    key: "drivetrainDriveUntil",
    value: function () {
      var _drivetrainDriveUntil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(args) {
        var velocity, obstacle, obstacleName;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("drivetrainDriveUntil: ".concat(JSON.stringify(args)));

              // Determine the velocity based on direction, negative velocity for reverse
              velocity = args.DIRECTION === 'fwd' ? this.driveVelocity : -this.driveVelocity;
              obstacle = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexObstacles.CRASH;
              obstacleName = args.OBSTACLES;
              if (obstacleName === "crash") {
                obstacle = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexObstacles.CRASH;
              } else if (obstacleName === "line") {
                obstacle = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexObstacles.LINE;
              } else if (obstacleName === "object") {
                obstacle = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexObstacles.EYE_DETECT;
              } else {
                log.warn("unknown obstacle", obstacleName);
              }
              _context4.prev = 5;
              _context4.next = 8;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.driveUntil(obstacle, velocity);
            case 8:
              return _context4.abrupt("return");
            case 11:
              _context4.prev = 11;
              _context4.t0 = _context4["catch"](5);
              log.warn(_context4.t0);
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this, [[5, 11]]);
      }));
      function drivetrainDriveUntil(_x5) {
        return _drivetrainDriveUntil.apply(this, arguments);
      }
      return drivetrainDriveUntil;
    }()
  }, {
    key: "drivetrainStop",
    value: function () {
      var _drivetrainStop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.driveStop();
            case 3:
              return _context5.abrupt("return");
            case 6:
              _context5.prev = 6;
              _context5.t0 = _context5["catch"](0);
              log.warn(_context5.t0);
            case 9:
            case "end":
              return _context5.stop();
          }
        }, _callee5, null, [[0, 6]]);
      }));
      function drivetrainStop() {
        return _drivetrainStop.apply(this, arguments);
      }
      return drivetrainStop;
    }()
  }, {
    key: "drivetrainTurn",
    value: function () {
      var _drivetrainTurn = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(args) {
        var velocity;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.debug("drivetrainTurn: ".concat(JSON.stringify(args)));
              // Determine the velocity based on direction, negative velocity for reverse
              velocity = args.TURNDIRECTION === 'left' ? -this.driveVelocity : this.driveVelocity;
              _context6.prev = 2;
              _context6.next = 5;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.turn(velocity);
            case 5:
              return _context6.abrupt("return");
            case 8:
              _context6.prev = 8;
              _context6.t0 = _context6["catch"](2);
              log.warn(_context6.t0);
            case 11:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[2, 8]]);
      }));
      function drivetrainTurn(_x6) {
        return _drivetrainTurn.apply(this, arguments);
      }
      return drivetrainTurn;
    }()
  }, {
    key: "drivetrainTurnFor",
    value: function () {
      var _drivetrainTurnFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(args) {
        var isLeft, distance, amount;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              log.debug("drivetrainTurnFor called with direction: ".concat(args.TURNDIRECTION, ", amount: ").concat(args.AMOUNT));
              isLeft = args.TURNDIRECTION === 'left';
              distance = args.AMOUNT;
              if (isLeft) {
                distance = -distance; // Apply negative distance for turning left
              }
              amount = this.intCheck(distance);
              _context7.prev = 5;
              _context7.next = 8;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.turnFor(amount, this.driveVelocity);
            case 8:
              return _context7.abrupt("return");
            case 11:
              _context7.prev = 11;
              _context7.t0 = _context7["catch"](5);
              log.warn(_context7.t0);
            case 14:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 11]]);
      }));
      function drivetrainTurnFor(_x7) {
        return _drivetrainTurnFor.apply(this, arguments);
      }
      return drivetrainTurnFor;
    }()
  }, {
    key: "drivetrainTurnToHeading",
    value: function () {
      var _drivetrainTurnToHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(args) {
        var newHeading, delta;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              log.debug("drivetrainTurnToHeading called with heading: ".concat(args.HEADING));
              newHeading = (args.HEADING % 360 + 360) % 360;
              delta = newHeading - _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.drivetrain.heading;
              if (delta > 180) {
                delta -= 360;
              }
              if (delta < -180) {
                delta += 360;
              }
              delta = _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.drivetrain.absHeading + delta;
              _context8.next = 8;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.turnTo(delta, this.driveVelocity);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function drivetrainTurnToHeading(_x8) {
        return _drivetrainTurnToHeading.apply(this, arguments);
      }
      return drivetrainTurnToHeading;
    }()
  }, {
    key: "drivetrainSetHeading",
    value: function () {
      var _drivetrainSetHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(args) {
        var newHeading;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.debug("drivetrainSetHeading called with heading: ".concat(args.HEADING));
              newHeading = (args.HEADING % 360 + 360) % 360;
              _context9.next = 4;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setHeading(newHeading);
            case 4:
            case "end":
              return _context9.stop();
          }
        }, _callee9);
      }));
      function drivetrainSetHeading(_x9) {
        return _drivetrainSetHeading.apply(this, arguments);
      }
      return drivetrainSetHeading;
    }()
  }, {
    key: "drivetrainSetTimeout",
    value: function () {
      var _drivetrainSetTimeout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(args) {
        var timeoutInMilliseconds;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.debug("drivetrainSetTimeout called with timeout: ".concat(args.TIMEOUT));
              timeoutInMilliseconds = args.TIMEOUT * 1000;
              _context10.prev = 2;
              _context10.next = 5;
              return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setTimeout(timeoutInMilliseconds);
            case 5:
              return _context10.abrupt("return");
            case 8:
              _context10.prev = 8;
              _context10.t0 = _context10["catch"](2);
              log.warn(_context10.t0);
            case 11:
            case "end":
              return _context10.stop();
          }
        }, _callee10, null, [[2, 8]]);
      }));
      function drivetrainSetTimeout(_x10) {
        return _drivetrainSetTimeout.apply(this, arguments);
      }
      return drivetrainSetTimeout;
    }()
  }, {
    key: "sensingDrivetrainIsDone",
    value: function () {
      var _sensingDrivetrainIsDone = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(args, util) {
        var _vex123Controller$sen;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.debug("sensingDrivetrainIsDone");
              return _context11.abrupt("return", ((_vex123Controller$sen = _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.drivetrain) === null || _vex123Controller$sen === void 0 ? void 0 : _vex123Controller$sen.isDone) || false);
            case 2:
            case "end":
              return _context11.stop();
          }
        }, _callee11);
      }));
      function sensingDrivetrainIsDone(_x11, _x12) {
        return _sensingDrivetrainIsDone.apply(this, arguments);
      }
      return sensingDrivetrainIsDone;
    }()
  }, {
    key: "sensingDrivetrainHeading",
    value: function () {
      var _sensingDrivetrainHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(args, util) {
        var _vex123Controller$sen2;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.debug("sensingDrivetrainHeading");
              return _context12.abrupt("return", ((_vex123Controller$sen2 = _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.drivetrain) === null || _vex123Controller$sen2 === void 0 ? void 0 : _vex123Controller$sen2.heading) || 0);
            case 2:
            case "end":
              return _context12.stop();
          }
        }, _callee12);
      }));
      function sensingDrivetrainHeading(_x13, _x14) {
        return _sensingDrivetrainHeading.apply(this, arguments);
      }
      return sensingDrivetrainHeading;
    }() //#endregion Drivetrain Opcode Executors
    //#region Looks Opcode Executors
  }, {
    key: "looksGlow",
    value: function looksGlow(args, util) {
      var color = 0;
      var colorName = args.COLOR.toUpperCase();
      if (colorName === "GREEN") {
        color = 2;
      } else if (colorName === "BLUE") {
        color = 3;
      } else if (colorName === "PURPLE") {
        color = 6;
      }
      log.debug("glow", colorName, color);
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.glow(color);
    }

    /**
     * Rounds a given number to given precision. We should probably move this out
     * to a helper file and use it across VEXcode. 
     * 
     * Why do this and not just stick to .toFixed()?
     * 
     * Because of you might occasionally encounter -0 when formatting numbers, which can be a bit confusing. 
     * @param num 
     * @param precision 
     * @returns 
     */
  }, {
    key: "roundNumber",
    value: function roundNumber(num, precision) {
      var factor = Math.pow(10, precision);
      return Math.round(num * factor) / factor;
    }
  }, {
    key: "looksPrint",
    value: function looksPrint(args, util) {
      var DATA = args.DATA;
      var printData = "";
      if (DATA === null || DATA === undefined) {
        printData = "undefined";
      } else if (typeof DATA === "number") {
        var precision = parseInt(this.printPrecision) >= 0 ? parseInt(this.printPrecision) : 6;
        printData = this.roundNumber(DATA, precision).toFixed(precision);
      } else if (typeof DATA === "boolean") {
        printData = DATA ? "TRUE" : "FALSE";
      } else if (typeof DATA === "string") {
        printData = DATA;
      } else {
        printData = "".concat(DATA);
      }
      _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__.PRINTCONSOLECONTROLLER.addText(printData);
      if (args.andsetcursortonextrow_mutator) {
        this.looksNextRow({}, {});
      }
    }
  }, {
    key: "looksNextRow",
    value: function looksNextRow(args, util) {
      _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__.PRINTCONSOLECONTROLLER.addNewLine();
      this.linesCalled++;
      if (Date.now() - this.lastSent > 10) {
        this.linesCalled = 0;
      }
      this.lastSent = Date.now();
      if (this.linesCalled > 10) {
        this.linesCalled = 0;
        return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(5);
      }
    }
  }, {
    key: "looksSetPrintPrecision",
    value: function looksSetPrintPrecision(args, util) {
      this.printPrecision = args.PRECISION;
    }
  }, {
    key: "looksClearAllRows",
    value: function looksClearAllRows(args, util) {
      _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__.PRINTCONSOLECONTROLLER.clearConsole();
    }
  }, {
    key: "getPrintConsoleColorEnum",
    value: function getPrintConsoleColorEnum(colorString) {
      if (colorString === "red") {
        return _SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum.red;
      } else if (colorString === "green") {
        return _SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum.green;
      } else if (colorString === "blue") {
        return _SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum.blue;
      } else {
        // make black the default
        return _SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum.black;
      }
    }
  }, {
    key: "looksSetPrintColor",
    value: function looksSetPrintColor(args, util) {
      var color = this.getPrintConsoleColorEnum(args.COLORS);
      _layout_PrintConsole__WEBPACK_IMPORTED_MODULE_6__.PRINTCONSOLECONTROLLER.setConsoleTextColor(_SimWindow_messageEnums__WEBPACK_IMPORTED_MODULE_5__.SimPrintColorEnum[color]);
    }
    //#endregion Looks Opcode Executors

    //#region Sound Opcode Executors
  }, {
    key: "soundPlaySound",
    value: function soundPlaySound(args, util) {
      var soundNumber = 0;
      var soundName = args.SOUND.toUpperCase();
      if (soundName === "HONK") {
        soundNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.HONK;
      } else if (soundName === "DOORBELL") {
        soundNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.DOORBELL;
      } else if (soundName === "CRASH") {
        soundNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.CRASH;
      }
      if (soundNumber === 0) {
        var soundList = [_HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.HONK, _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.DOORBELL, _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexSounds.CRASH];
        soundNumber = soundList[Math.floor(Math.random() * 3)];
      }
      log.debug("play sound", soundName, soundNumber);
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.playSound(soundNumber);
    }
    //#endregion Sound Opcode Executors

    //#region Actions Opcode Executors 
  }, {
    key: "actionsAct",
    value: function actionsAct(args, util) {
      var emotionNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAct.NA;
      var emotionName = args.ACT.toUpperCase();
      if (emotionName === "SAD") {
        emotionNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAct.SAD;
      } else if (emotionName === "CRAZY") {
        emotionNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAct.CRAZY;
      } else if (emotionName === "HAPPY") {
        emotionNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAct.HAPPY;
      }
      log.debug("act", emotionName, emotionNumber);
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.act(emotionNumber);
    }
    //#endregion Actions Opcode Executors

    //#region Control Opcode Executors
  }, {
    key: "controlBreak",
    value: function controlBreak(args, util) {
      var stack = util.thread.stack;
      var stackLen = stack.length;
      var popCount = 0;
      var isAtLoop = false;
      while (!isAtLoop) {
        popCount++;
        var index = stackLen - popCount - 1;
        if (index === -1) {
          return;
        }
        var id = stack[index];
        var topBlock = util.target.blocks.getBlock(id);
        var topOp = topBlock.opcode;
        isAtLoop = topOp === "control_repeat" || topOp === "control_repeat_until" || topOp === "control_while" || topOp === "control_for_each" || topOp === "control_forever";
      }
      for (var i = 0; i < popCount; i++) {
        util.thread.popStack();
      }
      util.thread.goToNextBlock();
    }
  }, {
    key: "controlStopProject",
    value: function controlStopProject(args, util) {
      util.stopAll();
      if (VMControls) {
        VMControls.stopVM();
      } else {
        log.error("unable to tell the VM to stop");
      }
    }
    //#endregion Control Opcode Executors

    //#region Sensing Opcode Executors

    //#region Sensing - brain timer Opcode Executors 
  }, {
    key: "sensingResetTimer",
    value: function sensingResetTimer(args, util) {
      Vex123Blocks.timer.reset();
    }
  }, {
    key: "sensingTimerInSeconds",
    value: function sensingTimerInSeconds(args, util) {
      return Vex123Blocks.timer.getTime() / 1000;
    }
    //#endregion Sensing - brain timer Opcode Executors 

    //#region Sensing - drivetrain Opcode Executors 
    //#endregion Sensing - drivetrain Opcode Executors 

    //#region Sensing - button Opcode Executors 
  }, {
    key: "sensingButtonPressed",
    value: function sensingButtonPressed(args, util) {
      var buttonNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vex123Buttons.LEFT;
      var buttonName = args.BUTTONS;
      if (buttonName === "leftPressed") {
        buttonNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vex123Buttons.LEFT;
      } else if (buttonName === "rightPressed") {
        buttonNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vex123Buttons.RIGHT;
      } else if (buttonName === "movePressed") {
        buttonNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vex123Buttons.UP;
      } else if (buttonName === "soundPressed") {
        buttonNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vex123Buttons.SOUND;
      } else {
        log.warn("unknown button", buttonName);
      }
      log.debug("checking button pressed", buttonName, buttonNumber);
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.button === buttonNumber;
    }
    //#endregion Sensing - button Opcode Executors 

    //#region Sensing - gyro Opcode Executors 
  }, {
    key: "sensingGyroCrashed",
    value: function sensingGyroCrashed(args, util) {
      return new Promise(/*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(resolve, reject) {
          var crashed;
          return _regeneratorRuntime().wrap(function _callee13$(_context13) {
            while (1) switch (_context13.prev = _context13.next) {
              case 0:
                crashed = _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.imu.crash;
                resolve(crashed);
                if (crashed) {
                  log.debug("api needs to clear crash flag");
                  _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.imu.clearCrashFlag();
                }
              case 3:
              case "end":
                return _context13.stop();
            }
          }, _callee13);
        }));
        return function (_x15, _x16) {
          return _ref2.apply(this, arguments);
        };
      }());
    }
  }, {
    key: "sensingGyroAcceleration",
    value: function sensingGyroAcceleration(args, util) {
      var axisNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAxis.X;
      var directionName = args.DIRECTIONS;
      if (directionName === "x") {
        axisNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAxis.X;
      } else if (directionName === "y") {
        axisNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAxis.Y;
      } else if (directionName === "z") {
        axisNumber = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexAxis.Z;
      } else {
        log.warn("unknown direction", directionName);
      }
      log.debug("checking acceleration", directionName, axisNumber);
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.gyroSensor.getAcceleration(axisNumber);
    }
    //#endregion Sensing - gyro Opcode Executors 

    //#region Sensing - eye Opcode Executors 
  }, {
    key: "sensingEyeSetLight",
    value: function sensingEyeSetLight(args, util) {
      var lightMode = args.MODE === "on" ? 1 : 0;
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setSensorLed(lightMode * 100);
    }
  }, {
    key: "sensingEyeSetLightPower",
    value: function sensingEyeSetLightPower(args, util) {
      var power = args.POWER || 0;
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.setSensorLed(power);
    }
  }, {
    key: "sensingEyeFoundObject",
    value: function sensingEyeFoundObject(args, util) {
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.eye.isNear;
    }
  }, {
    key: "sensingEyeDetectsColor",
    value: function sensingEyeDetectsColor(args, util) {
      var color = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexColorType.Off;
      var colorName = args.COLORS;
      if (colorName === "red") {
        color = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexColorType.Red;
      } else if (colorName === "green") {
        color = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexColorType.Green;
      } else if (colorName === "blue") {
        color = _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_10__.vexColorType.Blue;
      } else {
        log.warn("unexpected color", colorName);
      }
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.eye.detectsColor(color);
    }
  }, {
    key: "sensingEyeBightObject",
    value: function sensingEyeBightObject(args, util) {
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.eye.brightObject;
    }
  }, {
    key: "sensingEyeBrightness",
    value: function sensingEyeBrightness(args, util) {
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.eye.brightness;
    }
  }, {
    key: "sensingEyeHue",
    value: function sensingEyeHue(args, util) {
      return _HardwareInterface_controllers_VEX123Controller__WEBPACK_IMPORTED_MODULE_9__.vex123Controller.sensorValues.eye.hue;
    }
    //#endregion Sensing - eye Opcode Executors 
    //#endregion Sensing Opcode Executors

    //#region Variable Opcode Executors
  }, {
    key: "setListTo",
    value: function setListTo(args, util) {
      var list = util.target.lookupOrCreateList(args.LIST.id, args.LIST.name);
      for (var property in args) {
        if (args.hasOwnProperty(property) && property.startsWith("VALUE")) {
          var index = parseInt(property.match(/\d+$/gm)[0]);
          if (index < list.value.length) {
            list.value[index] = parseInt(args[property]);
          }
        }
      }
    }
    //#endregion Variable Opcode Executors

    //#region Operator Opcode Executors
  }, {
    key: "operatorFunctionAtan2",
    value: function operatorFunctionAtan2(args, util) {
      var angleTheta = Math.atan2(args.Y, args.X) / Math.PI * 180;
      log.debug("X: ", args.X);
      log.debug("Y: ", args.Y);
      log.debug("angleTheta: ", angleTheta);
      return angleTheta;
    }
    //#endregion Operator Opcode Executors

    //#region Helpers
    //#endregion
  }]);
}(_Extension__WEBPACK_IMPORTED_MODULE_1__.ExtensionBase);
/**
* This function picks a random integer from a given range of [min,max) where min is 
* greater than or equal to zero
* @param min lowest number that can be returned
* @param max highest number that can be returned
* @return Random integer chosen between a range of two given integers
*/
/** this is the brain timer */
_defineProperty(Vex123Blocks, "timer", new _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__.VexcodeTimer(0, true));
/** 
 * The CTE arm requires a lot of actions are completed in the when started
 * block before the code can run. however, we only want to run these steps
 * once, so we only call them if the when started block is the first run. All
 * other when started blocks wait for the command to finish. This is used for
 * those other runs to know if the init has been completed. If this is false,
 * the init is still running and we need to wait for it to complete.
 * 
 * * true - the init has been completed
 * * false - the init is still running
 */
_defineProperty(Vex123Blocks, "isReady", false);
function randomIntFromInterval(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * This function will 
 * @param util BlockUtility to access threads
 * @param stopProject Should the project stop for this error
 * @param message The message that will get displayed on the block
 */
function reportErrorToBlock(util, stopProject, message) {
  var blockID = util.thread.peekStack(); // Get the last highlighted block from the utils
  var currentWorkSpace = (0,_BlocklyController__WEBPACK_IMPORTED_MODULE_7__.getCurrentMainController)().blocklyWorkspace;
  var block = blockID ? currentWorkSpace.getBlockById(blockID) : null;
  var nextBlock = block ? block.getNextBlock() : null;
  if (nextBlock && nextBlock.type === block.type) {
    // Usually the block we get from highlighting is one before the block that caused the error
    // But that is not always true. So we need to find a better way to detect which block caused the issue
    nextBlock.setWarningText(message);
    currentWorkSpace.setScale(currentWorkSpace.scaleStart);
    currentWorkSpace.centerOnBlock(nextBlock.id);
    var blockAnyType = block;
    if (blockAnyType.addErrorHighlight && typeof blockAnyType.addErrorHighlight === "function") {
      blockAnyType.addErrorHighlight();
    }
    // TODO: Update blockly react component and get rid of that any bs
  } else if (block) {
    block.setWarningText(message);
    currentWorkSpace.setScale(currentWorkSpace.scaleStart);
    currentWorkSpace.centerOnBlock(block.id);
    var _blockAnyType = block;
    if (_blockAnyType.addErrorHighlight && typeof _blockAnyType.addErrorHighlight === "function") {
      _blockAnyType.addErrorHighlight();
    }
  } else {
    _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.debug("Trying to report an error for a block, but failed to get the block");
  }
  if (stopProject && VMControls) {
    VMControls.stopVM();
  } else {
    _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.debug("Trying to stop the project but VMControls for Vex123Blocks isn't defined");
  }
}


/***/ })

}]);
//# sourceMappingURL=3023729b692e758662d6.src_Blockly_Extensions_Vex123Blocks_ts.bundle.js.map