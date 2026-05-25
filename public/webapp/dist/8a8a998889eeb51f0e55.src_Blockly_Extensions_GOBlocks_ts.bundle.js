"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_Blockly_Extensions_GOBlocks_ts"],{

/***/ "./src/Blockly/Extensions/GOBlocks.ts":
/*!********************************************!*\
  !*** ./src/Blockly/Extensions/GOBlocks.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GOBlocks: () => (/* binding */ GOBlocks),
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
/* harmony import */ var _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../HardwareInterface/controllers/VEXGOController */ "./src/HardwareInterface/controllers/VEXGOController.ts");
/* harmony import */ var _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vexcode/robot-config */ "./node_modules/@vexcode/robot-config/dist/index.js");
/* harmony import */ var _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../GlobalEventSystem */ "./src/GlobalEventSystem.ts");
/* harmony import */ var _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../HardwareInterface/types/HWEnums */ "./src/HardwareInterface/types/HWEnums.ts");
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GOBlocksExtension");
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
var GOBlocks = /*#__PURE__*/function (_ExtensionBase) {
  function GOBlocks(runtime) {
    var _this;
    _classCallCheck(this, GOBlocks);
    _this = _callSuper(this, GOBlocks, [runtime]);
    // Looks Variables
    _defineProperty(_this, "primitives", {});
    _defineProperty(_this, "readyEvent", new _dispatcher__WEBPACK_IMPORTED_MODULE_8__.DispatcherEvent());
    // Drivetrain variables
    _defineProperty(_this, "leftPort", 0);
    _defineProperty(_this, "rightPort", 1);
    _defineProperty(_this, "driveVelocity", 25);
    _defineProperty(_this, "turnVelocity", 25);
    _defineProperty(_this, "driveVelocityScale", 0.5);
    _defineProperty(_this, "driveStopMode", 0);
    // 0 for coast, 1 for brake, 2 for hold
    _defineProperty(_this, "ratio", 1);
    // Gear ratio
    _defineProperty(_this, "wheelTravel", 160);
    // Wheel travel distance in mm (per revolution)
    _defineProperty(_this, "wheelScale", _this.wheelTravel / 360);
    // Scale factor for degrees to mm
    // Motor Variables
    //private port: number;
    _defineProperty(_this, "motorVelocityScale", 1 / 3);
    _defineProperty(_this, "motorStopModes", [0, 0, 0, 0]);
    // For motors 1 to 4
    _defineProperty(_this, "motorVelocities", [17, 17, 17, 17]);
    _defineProperty(_this, "torqueLimit", [50, 50, 50, 50]);
    // For motors 1 to 4
    // Bumper storing color states
    _defineProperty(_this, "bumperStates", {});
    _defineProperty(_this, "linesCalled", 0);
    _defineProperty(_this, "lastSent", Date.now());
    _this.setExtensionDefaults();
    _this.buildPrimitives();
    _this.onConnectionStatusChange = _this.onConnectionStatusChange.bind(_this);
    _GlobalEventSystem__WEBPACK_IMPORTED_MODULE_11__.on("HWInterface.ConnectionStateChange", _this.onConnectionStatusChange);
    return _this;
  }
  _inherits(GOBlocks, _ExtensionBase);
  return _createClass(GOBlocks, [{
    key: "onConnectionStatusChange",
    value: function onConnectionStatusChange(newState) {
      log.debug("GO connection status changed");
      if (newState === _HardwareInterface_types_HWEnums__WEBPACK_IMPORTED_MODULE_12__.DeviceConnectionState.Disconnected) {
        VMControls.stopVM();
      }
    }
  }, {
    key: "setExtensionDefaults",
    value: function setExtensionDefaults() {
      // Reset Looks Variables
      this.printPrecision = "0";

      // Reset Timer
      GOBlocks.timer.reset();
    }
  }, {
    key: "getInfo",
    value: function getInfo() {
      return {
        id: 'goBlocks',
        blocks: [
        //#region events
        {
          opcode: 'go_events_when_started',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.HAT,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'whenstarted',
          arguments: {},
          func: 'whenStarted',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        }, {
          opcode: 'go_events_when_timer',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.HAT,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'whentimer',
          arguments: {
            NUM: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'whenTimer',
          isEdgeActivated: false,
          shouldRestartExistingThreads: true
        },
        //#endregion events
        //#region drivetrain
        {
          opcode: 'go_drivetrain_drive',
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
          opcode: 'go_drivetrain_drive_until',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive [DIRECTION]',
          arguments: {
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'fwd',
              menu: 'DIRECTION'
            },
            OBSTACLES: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'object',
              menu: 'OBSTACLES'
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'drivetrainDriveUntil'
        }, {
          opcode: 'go_drivetrain_drive_for',
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
              "default": 'mm',
              menu: 'UNITS'
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'drivetrainDriveFor'
        }, {
          opcode: 'go_drivetrain_turn',
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
          opcode: 'go_drivetrain_turn_for',
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
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'drivetrainTurnFor'
        }, {
          opcode: 'go_drivetrain_turn_to_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'turn to [HEADING]',
          arguments: {
            HEADING: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'drivetrainTurnToHeading'
        }, {
          opcode: 'go_drivetrain_turn_to_rotation',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'turn to [ROTATION]',
          arguments: {
            ROTATION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'drivetrainTurnToRotation'
        }, {
          opcode: 'go_drivetrain_set_drive_stopping',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set drive stopping to [MODE]',
          arguments: {
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'coast',
              menu: 'STOPMODE'
            }
          },
          func: 'drivetrainSetStopping'
        }, {
          opcode: 'go_drivetrain_set_drive_heading',
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
          opcode: 'go_drivetrain_set_drive_rotation',
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
          func: 'drivetrainSetRotation'
        }, {
          opcode: 'go_drivetrain_set_drive_timeout',
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
          opcode: 'go_drivetrain_stop_driving',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'stop driving',
          arguments: {},
          func: 'drivetrainStop'
        }, {
          opcode: 'go_drivetrain_set_drive_velocity',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set drive velocity to [VELOCITY] degrees',
          arguments: {},
          func: 'drivetrainSetDriveVelocity'
        }, {
          opcode: 'go_drivetrain_set_turn_velocity',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set turn velocity to [VELOCITY] degrees',
          arguments: {},
          func: 'drivetrainSetTurnVelocity'
        },
        //#endregion Drivetrain
        //#region Motion
        {
          opcode: 'go_motion_spin',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'spin motor [MOTOR] [DIRECTION]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'forward',
              menu: 'DIRECTION'
            }
          },
          func: 'motionSpin'
        }, {
          opcode: 'go_motion_spin_for',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'spin motor [MOTOR] [DIRECTION] for [AMOUNT] [UNITS]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            DIRECTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'forward',
              menu: 'DIRECTION'
            },
            AMOUNT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 90
            },
            UNITS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'deg',
              menu: 'SPINUNITS'
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'motionSpinFor'
        }, {
          opcode: 'go_motion_spin_to_position',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'spin motor [MOTOR] to position [POSITION] [UNITS]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            POSITION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 90
            },
            UNITS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'degrees',
              menu: 'ROTATIONUNITS'
            },
            anddontwait_mutator: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.BOOLEAN,
              "default": false
            }
          },
          func: 'motionSpinToPosition'
        }, {
          opcode: 'go_motion_stop_motor',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'stop motor [MOTOR]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            }
          },
          func: 'motionStopMotor'
        }, {
          opcode: 'go_motion_set_motor_position',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set motor [MOTOR] position to [POSITION] [UNITS]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            POSITION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 0
            },
            UNITS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'degrees',
              menu: 'ROTATIONUNITS'
            }
          },
          func: 'motionSetMotorPosition'
        }, {
          opcode: 'go_motion_set_motor_velocity',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set motor [MOTOR] velocity to [VELOCITY]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            VELOCITY: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 50
            }
          },
          func: 'motionSetMotorVelocity'
        }, {
          opcode: 'go_motion_set_motor_stopping',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set motor [MOTOR] stopping to [MODE]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'coast',
              menu: 'STOPMODE'
            }
          },
          func: 'motionSetMotorStopping'
        }, {
          opcode: 'go_motion_set_motor_torque',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set motor [MOTOR] torque limit to [TORQUE]',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            TORQUE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 100
            }
          },
          func: 'motionSetMotorTorque'
        }, {
          opcode: 'go_motion_set_motor_timeout',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set motor [MOTOR] timeout to [TIMEOUT] seconds',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            TIMEOUT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 5
            }
          },
          func: 'motionSetMotorTimeout'
        },
        //#endregion Motion
        //#region Magnet
        {
          opcode: 'go_magnet_energize',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'energize magnet to [BOOST]',
          arguments: {
            MAGNET: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'magnet'
            },
            ACTION: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'boost',
              menu: 'MAGNET_ACTIONS'
            }
          },
          func: 'magnetEnergize'
        },
        //#endregion Magnet
        //#region looks
        {
          opcode: 'go_looks_print',
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
          opcode: 'go_looks_set_print_precision',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set print precision (PRECISION)',
          arguments: {},
          func: 'looksSetPrintPrecision'
        }, {
          opcode: 'go_looks_next_row',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set cursor to next row',
          arguments: {},
          func: 'looksNextRow'
        }, {
          opcode: 'go_looks_clear_all_rows',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'clear all rows',
          arguments: {},
          func: 'looksClearAllRows'
        }, {
          opcode: 'go_looks_set_print_color',
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
        }, {
          opcode: 'go_looks_set_bumper_color',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [BUMPER] to [COLOR]',
          arguments: {
            BUMPER: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'bumper1'
            },
            COLORS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'red',
              menu: 'BUMPERCOLORS'
            }
          },
          func: 'looksSetBumperColor'
        }, {
          opcode: 'go_looks_set_bumper_brightness',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [BUMPER] brightness to [BRIGHTNESS] percent',
          arguments: {
            BUMPER: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'bumper1'
            },
            AMOUNT: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'looksSetBumperBrightness'
        },
        //#endregion looks
        //#region control
        {
          opcode: 'go_control_break',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'break',
          arguments: {},
          func: 'controlBreak'
        }, {
          opcode: 'go_control_stop_project',
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
        //#region sensing - gyro
        {
          opcode: 'go_sensing_gyro_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'gyro heading in degrees',
          arguments: {},
          func: 'sensingGyroHeading'
        }, {
          opcode: 'go_sensing_gyro_rotation',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'gyro rotation in degrees',
          arguments: {},
          func: 'sensingGyroRotation'
        }, {
          opcode: 'go_sensing_set_gyro_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [HEADING]',
          arguments: {
            VALUE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'sensingGyroSetHeading'
        }, {
          opcode: 'go_sensing_set_gyro_rotation',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set [ROTATION]',
          arguments: {
            VALUE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 1
            }
          },
          func: 'sensingGyroSetRotation'
        }, {
          opcode: 'go_sensing_calibrate_gyro',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'Calibrate Gyro',
          arguments: {},
          func: 'sensingGyroCalibrate'
        },
        //#region sensing - brain timer
        {
          opcode: 'go_sensing_reset_timer',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'reset timer',
          arguments: {},
          func: 'sensingResetTimer'
        }, {
          opcode: 'go_sensing_timer_value',
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
        {
          opcode: 'go_sensing_drive_is_done',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive is done?',
          arguments: {},
          func: 'sensingDrivetrainIsDone'
        }, {
          opcode: 'go_sensing_drive_heading',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive heading in degrees',
          arguments: {},
          func: 'sensingDrivetrainHeading'
        }, {
          opcode: 'go_sensing_drive_rotation',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive rotation in degrees',
          arguments: {},
          func: 'sensingDrivetrainRotation'
        }, {
          opcode: 'go_sensing_drive_velocity',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'drive velocity in percent',
          arguments: {},
          func: 'sensingDrivetrainVelocity'
        }, {
          opcode: 'go_sensing_crash',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'detected crash?',
          arguments: {},
          func: 'sensingGyroCrashed'
        }, {
          opcode: 'go_sensing_acceleration',
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
        //#endregion sensing - drivetrain
        //#region sensing - eye
        {
          opcode: 'go_sensing_eye_found_object',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye found object?',
          arguments: {},
          func: 'sensingEyeFoundObject'
        }, {
          opcode: 'go_sensing_eye_set_light_on',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set eye light [ON]',
          arguments: {
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'on',
              menu: 'MODE'
            }
          },
          func: 'sensingSetEyeLight'
        }, {
          opcode: 'go_sensing_eye_set_range',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set eye to [NEAR] range',
          arguments: {
            MODE: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'near',
              menu: 'RANGE'
            }
          },
          func: 'sensingSetEyeRange'
        }, {
          opcode: 'go_sensing_eye_set_light_power',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.COMMAND,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'set eye power [POWER]',
          arguments: {
            POWER: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.NUMBER,
              "default": 50
            }
          },
          func: 'sensingSetEyePower'
        }, {
          opcode: 'go_sensing_eye_found_object',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye found object?',
          arguments: {},
          func: 'sensingEyeFoundObject'
        }, {
          opcode: 'go_sensing_eye_detect',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye detects [COLOR]',
          arguments: {
            COLORS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.COLOR,
              "default": 'red',
              menu: 'COLORS'
            }
          },
          func: 'sensingEyeDetect'
        }, {
          opcode: 'go_sensing_eye_brightness',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye brightness in %',
          arguments: {},
          func: 'sensingEyeBrightness'
        }, {
          opcode: 'go_sensing_eye_hue',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.REPORTER,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'eye hue in %',
          arguments: {},
          func: 'sensingEyeHue'
        },
        //#endregion sensing - eye
        //#region sensing - motion
        {
          opcode: 'go_sensing_motor_is_done',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'motor is done?',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            }
          },
          func: 'sensingMotorIsDone'
        }, {
          opcode: 'go_sensing_motor_is_spinning',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'motor is spinning?',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            }
          },
          func: 'sensingMotorIsSpinning'
        }, {
          opcode: 'go_sensing_motor_position',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'motor position in degrees',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            },
            UNITS: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'degrees',
              menu: 'ROTATIONUNITS'
            }
          },
          func: 'sensingMotorPosition'
        }, {
          opcode: 'go_sensing_motor_velocity',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'motor velocity in percent',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            }
          },
          func: 'sensingMotorVelocity'
        }, {
          opcode: 'go_sensing_motor_current',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: 'motor current in percent',
          arguments: {
            MOTOR: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'motor1'
            }
          },
          func: 'sensingMotorCurrent'
        }, {
          opcode: 'go_sensing_bumper',
          blockType: _utils__WEBPACK_IMPORTED_MODULE_2__.BlockTypes.BOOLEAN,
          branchCount: 0,
          terminal: false,
          blockAllThreads: false,
          text: '[BUMPER] pressed?',
          arguments: {
            BUMPER: {
              type: _utils__WEBPACK_IMPORTED_MODULE_2__.ArgumentTypes.STRING,
              "default": 'bumper1'
            }
          },
          func: 'sensingBumperPressed'
        },
        //#endregion sensing - motion
        //#endregion sensing
        //#region variables
        {
          opcode: 'go_variables_set_array_to',
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
          opcode: 'go_operator_function_atan2',
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
        }
        //#endregion Operators
        ],
        menus: {
          TURNDIRECTION: [{
            value: 'right',
            text: 'right'
          }, {
            value: 'left',
            text: 'left'
          }],
          OBSTACLES: [{
            value: 'object',
            text: 'object'
          }, {
            value: 'crash',
            text: 'crash'
          }],
          DIRECTION: [{
            value: 'fwd',
            text: 'forward'
          }, {
            value: 'rev',
            text: 'reverse'
          }],
          ROTATIONUNITS: [{
            value: 'degrees',
            text: 'degrees'
          }, {
            value: 'turns',
            text: 'turns'
          }],
          SPINUNITS: [{
            value: 'deg',
            text: 'degrees'
          }, {
            value: 'rev',
            text: 'revolutions'
          }],
          STOPMODE: [{
            value: 'coast',
            text: 'coast'
          }, {
            value: 'brake',
            text: 'brake'
          }, {
            value: 'hold',
            text: 'hold'
          }],
          UNITS: [{
            value: 'inches',
            text: 'inches'
          }, {
            value: 'mm',
            text: 'mm'
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
          BUMPERCOLORS: [{
            value: "red",
            text: 'red'
          }, {
            value: "green",
            text: 'green'
          }, {
            value: "off",
            text: 'off'
          }],
          COLORS: [{
            value: "red",
            text: 'red'
          }, {
            value: "green",
            text: 'green'
          }, {
            value: "blue",
            text: 'blue'
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
          MOVEMENT: [{
            value: 'linear'
          }, {
            value: 'joint'
          }],
          POSNEG: [{
            value: 'POSITIVE',
            text: 'positive'
          }, {
            value: 'NEGATIVE',
            text: 'negative'
          }],
          AXISMENU: [{
            value: 'xaxis',
            text: 'X-Axis'
          }, {
            value: 'yaxis',
            text: 'Y-Axis'
          }, {
            value: 'zaxis',
            text: 'Z-Axis'
          }],
          POSITIONMENU: [{
            value: 'xaxis',
            text: 'x'
          }, {
            value: 'yaxis',
            text: 'y'
          }, {
            value: 'zaxis',
            text: 'z'
          }],
          MAGNET_ACTIONS: [{
            value: 'boost',
            text: 'boost'
          }, {
            value: 'drop',
            text: 'drop'
          }],
          MODE: [{
            value: 'on',
            text: 'on'
          }, {
            value: 'off',
            text: 'off'
          }],
          RANGE: [{
            value: 'near',
            text: 'near'
          }, {
            value: 'far',
            text: 'far'
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
          var start, isPrepared, delay;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                GOBlocks.timer.reset();
                if (!util.target.firstRun) {
                  _context.next = 27;
                  break;
                }
                util.target.firstRun = false;
                GOBlocks.isReady = false;
                log.debug("running init code...");
                // we need to wait 600ms, but we want to make sure that other changes don't cause too much delay
                start = Date.now(); // make sure the robot is in a known starting configuration
                _this3.driveVelocity = 25;
                _this3.turnVelocity = 25;

                // Set drivetrain and motor stop mode back to default (coast)
                // Since there are multiple when started threads now in GO, we need to store the motor stop modes individually
                _this3.motorStopModes = [2, 2, 2, 2];
                _this3.torqueLimit = [50, 50, 50, 50];
                _this3.driveStopMode = 2;
                _this3.motorVelocities = [17, 17, 17, 17];

                // Prepare GO for project - restart everything
                _context.next = 14;
                return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.prepareGOForProject();
              case 14:
                isPrepared = _context.sent;
                if (isPrepared) {
                  _context.next = 18;
                  break;
                }
                // Handle preparation failure if needed
                if (VMControls) {
                  VMControls.stopVM();
                }
                return _context.abrupt("return", false);
              case 18:
                // let any other when started stacks know that they are good to run.
                GOBlocks.isReady = true;
                _this3.readyEvent.fire();

                // we want to wait at least 600 ms before we actually start the code...
                delay = 600 - (Date.now() - start);
                if (!(delay > 0)) {
                  _context.next = 24;
                  break;
                }
                _context.next = 24;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(delay);
              case 24:
                GOBlocks.timer.reset();
                _context.next = 37;
                break;
              case 27:
                log.debug("skipping init code...");

                // we want to wait 600 ms before we actually start the code...
                _context.next = 30;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(600);
              case 30:
                if (GOBlocks.isReady) {
                  _context.next = 37;
                  break;
                }
                log.debug("init has not been completed. waiting for that to finish...");
                // wait for the init to complete
                _context.next = 34;
                return new Promise(function (resolve, reject) {
                  _this3.readyEvent.registerCallback(resolve);
                });
              case 34:
                log.debug("init completed");

                // just to make sure it does not impact the order of stack execution,
                // we are adding a 1ms delay to let the first when started run
                // without waiting for this to complete
                _context.next = 37;
                return (0,_utils_helpers__WEBPACK_IMPORTED_MODULE_4__.waitms)(1);
              case 37:
                resolve(true);
              case 38:
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
  }, {
    key: "whenTimer",
    value: function whenTimer(args, util) {
      log.debug("whenTimer block!", args);
      return true;
    }
    //#endregion events

    //#region Looks Opcode Executors

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
      log.debug("looksPrint:", args.DATA);
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
      log.debug("looksSetPrintPrecision:", args.PRECISION);
      this.printPrecision = args.PRECISION;
    }
  }, {
    key: "looksClearAllRows",
    value: function looksClearAllRows() {
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
  }, {
    key: "looksSetBumperColor",
    value: function () {
      var _looksSetBumperColor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(args) {
        var bumperName, colorName, port, colorValue, power;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              log.debug("looksSetBumperColor:", args.COLORS, args.BUMPER);
              bumperName = args.BUMPER;
              colorName = args.COLORS; // Get the port number for the bumper
              // Get the port number for the bumper
              port = this.getPortData(bumperName); // Map color names to 'colorValue'
              colorValue = 0;
              _context2.t0 = colorName.toLowerCase();
              _context2.next = _context2.t0 === 'off' ? 8 : _context2.t0 === 'red' ? 10 : _context2.t0 === 'green' ? 12 : 14;
              break;
            case 8:
              colorValue = 0;
              return _context2.abrupt("break", 16);
            case 10:
              colorValue = -1;
              return _context2.abrupt("break", 16);
            case 12:
              colorValue = 1;
              return _context2.abrupt("break", 16);
            case 14:
              log.warn("Invalid color '".concat(colorName, "'"));
              return _context2.abrupt("return");
            case 16:
              if (!this.bumperStates[port]) {
                // Default brightness to 100%
                this.bumperStates[port] = {
                  color: colorValue,
                  brightness: 100
                };
              } else {
                this.bumperStates[port].color = colorValue;
              }
              power = this.bumperStates[port].color * this.bumperStates[port].brightness;
              _context2.next = 20;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setSwitchLED(port, power);
            case 20:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function looksSetBumperColor(_x3) {
        return _looksSetBumperColor.apply(this, arguments);
      }
      return looksSetBumperColor;
    }()
  }, {
    key: "looksSetBumperBrightness",
    value: function () {
      var _looksSetBumperBrightness = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(args) {
        var bumperName, brightness, port, power;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              log.debug("looksSetBumperBrightness: ".concat(args.AMOUNT));
              bumperName = args.BUMPER;
              brightness = args.AMOUNT; // Validate brightness
              brightness = Math.max(0, Math.min(brightness, 100));

              // Get the port number for the bumper
              port = this.getPortData(bumperName); // Initialize or update the bumper state
              if (!this.bumperStates[port]) {
                // Default color to off
                this.bumperStates[port] = {
                  color: 0,
                  brightness: brightness
                };
              } else {
                this.bumperStates[port].brightness = brightness;
              }
              power = this.bumperStates[port].color * this.bumperStates[port].brightness;
              _context3.next = 9;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setSwitchLED(port, power);
            case 9:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function looksSetBumperBrightness(_x4) {
        return _looksSetBumperBrightness.apply(this, arguments);
      }
      return looksSetBumperBrightness;
    }() //#endregion Looks Opcode Executors
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

    //#region Magnet Opcode
  }, {
    key: "magnetEnergize",
    value: function () {
      var _magnetEnergize = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(args, util) {
        var port;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              log.debug("magnetEnergize: ".concat(JSON.stringify(args)));
              log.debug('ports:', _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.ports);
              port = this.getPortData(args.MAGNET);
              if (!(args.ACTION === "boost")) {
                _context4.next = 8;
                break;
              }
              _context4.next = 6;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.magBoost(port, 1100);
            case 6:
              _context4.next = 11;
              break;
            case 8:
              if (!(args.ACTION === "drop")) {
                _context4.next = 11;
                break;
              }
              _context4.next = 11;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.magDrop(port, 1100);
            case 11:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function magnetEnergize(_x5, _x6) {
        return _magnetEnergize.apply(this, arguments);
      }
      return magnetEnergize;
    }() //#endregion Magnet Opcode
    //#region Drivetrain Opcode Executors
  }, {
    key: "drivetrainDrive",
    value: function () {
      var _drivetrainDrive = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(args) {
        var directionMultiplier, velocity;
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              log.debug("drivetrainDrive: ".concat(JSON.stringify(args)));
              directionMultiplier = args.DIRECTION === 'fwd' ? 1 : -1;
              velocity = directionMultiplier * this.driveVelocity;
              _context5.next = 5;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.drive(velocity);
            case 5:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function drivetrainDrive(_x7) {
        return _drivetrainDrive.apply(this, arguments);
      }
      return drivetrainDrive;
    }()
  }, {
    key: "drivetrainSetDriveVelocity",
    value: function () {
      var _drivetrainSetDriveVelocity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(args) {
        var velocity;
        return _regeneratorRuntime().wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              log.debug("drivetrainSetDriveVelocity: ".concat(JSON.stringify(args)));
              velocity = args.VELOCITY; // Clamp the velocity between -100 and 100
              velocity = Math.max(-100, Math.min(velocity, 100));
              // Apply the driveVelocityScale
              this.driveVelocity = velocity * this.driveVelocityScale;
              // Clamp driveVelocity between -100 and 100
              this.driveVelocity = Math.max(-100, Math.min(this.driveVelocity, 100));
              _context6.prev = 5;
              _context6.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setVelocity(this.driveVelocity);
            case 8:
              _context6.next = 13;
              break;
            case 10:
              _context6.prev = 10;
              _context6.t0 = _context6["catch"](5);
              log.warn(_context6.t0);
            case 13:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this, [[5, 10]]);
      }));
      function drivetrainSetDriveVelocity(_x8) {
        return _drivetrainSetDriveVelocity.apply(this, arguments);
      }
      return drivetrainSetDriveVelocity;
    }()
  }, {
    key: "drivetrainSetTurnVelocity",
    value: function () {
      var _drivetrainSetTurnVelocity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(args) {
        var velocity;
        return _regeneratorRuntime().wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              log.debug("drivetrainSetTurnVelocity: ".concat(JSON.stringify(args)));
              velocity = args.VELOCITY; // Clamp the velocity between -100 and 100
              velocity = Math.max(-100, Math.min(velocity, 100));
              this.turnVelocity = velocity * this.driveVelocityScale;
              // Clamp turnVelocity between -100 and 100
              this.turnVelocity = Math.max(-100, Math.min(this.turnVelocity, 100));
              _context7.prev = 5;
              _context7.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setTurnRate(this.turnVelocity);
            case 8:
              _context7.next = 13;
              break;
            case 10:
              _context7.prev = 10;
              _context7.t0 = _context7["catch"](5);
              log.warn(_context7.t0);
            case 13:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this, [[5, 10]]);
      }));
      function drivetrainSetTurnVelocity(_x9) {
        return _drivetrainSetTurnVelocity.apply(this, arguments);
      }
      return drivetrainSetTurnVelocity;
    }()
  }, {
    key: "drivetrainDriveFor",
    value: function () {
      var _drivetrainDriveFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(args) {
        var isForward, distance, directionMultiplier, amount;
        return _regeneratorRuntime().wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              log.debug("drivetrainDriveFor called with direction: ".concat(args.DIRECTION, ", units: ").concat(args.UNITS, ", anddontwait_mutator: ").concat(args.anddontwait_mutator));
              isForward = args.DIRECTION === 'fwd';
              distance = args.AMOUNT; // Units conversion
              if (args.UNITS === 'in') {
                distance = distance * 25.4; // Convert mm to inches
              }

              // Calculate amount using ratio and wheelScale
              directionMultiplier = isForward ? 1 : -1;
              amount = directionMultiplier * this.ratio * distance / this.wheelScale;
              _context8.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.driveFor(amount, Math.abs(this.driveVelocity), !args.anddontwait_mutator);
            case 8:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function drivetrainDriveFor(_x10) {
        return _drivetrainDriveFor.apply(this, arguments);
      }
      return drivetrainDriveFor;
    }()
  }, {
    key: "drivetrainDriveUntil",
    value: function () {
      var _drivetrainDriveUntil = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(args) {
        var directionMultiplier, velocity, obstacle, obstacleName;
        return _regeneratorRuntime().wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              log.debug("drivetrainDriveUntil: ".concat(JSON.stringify(args)));
              directionMultiplier = args.DIRECTION === 'fwd' ? 1 : -1;
              velocity = directionMultiplier * this.driveVelocity;
              obstacleName = args.OBSTACLES;
              if (obstacleName === "crash") {
                obstacle = 1;
              } else if (obstacleName === "object") {
                obstacle = 2;
              } else {
                log.warn("unknown obstacle", obstacleName);
              }
              _context9.next = 7;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.driveUntil(obstacle, velocity, !args.anddontwait_mutator);
            case 7:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function drivetrainDriveUntil(_x11) {
        return _drivetrainDriveUntil.apply(this, arguments);
      }
      return drivetrainDriveUntil;
    }()
  }, {
    key: "drivetrainTurn",
    value: function () {
      var _drivetrainTurn = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(args) {
        var directionMultiplier, velocity;
        return _regeneratorRuntime().wrap(function _callee10$(_context10) {
          while (1) switch (_context10.prev = _context10.next) {
            case 0:
              log.debug("drivetrainTurn: ".concat(JSON.stringify(args)));
              directionMultiplier = args.TURNDIRECTION === 'left' ? -1 : 1;
              velocity = directionMultiplier * this.turnVelocity;
              _context10.next = 5;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.turn(velocity);
            case 5:
            case "end":
              return _context10.stop();
          }
        }, _callee10, this);
      }));
      function drivetrainTurn(_x12) {
        return _drivetrainTurn.apply(this, arguments);
      }
      return drivetrainTurn;
    }()
  }, {
    key: "drivetrainTurnFor",
    value: function () {
      var _drivetrainTurnFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee11(args) {
        var isLeft, amount;
        return _regeneratorRuntime().wrap(function _callee11$(_context11) {
          while (1) switch (_context11.prev = _context11.next) {
            case 0:
              log.debug("drivetrainTurnFor called with direction: ".concat(args.TURNDIRECTION, ", anddontwait_mutator: ").concat(args.anddontwait_mutator));
              isLeft = args.TURNDIRECTION === 'left';
              amount = args.AMOUNT;
              if (isLeft) {
                amount = -amount; // Apply negative amount for turning left
              }
              _context11.next = 6;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.turnFor(amount, Math.abs(this.turnVelocity), !args.anddontwait_mutator);
            case 6:
            case "end":
              return _context11.stop();
          }
        }, _callee11, this);
      }));
      function drivetrainTurnFor(_x13) {
        return _drivetrainTurnFor.apply(this, arguments);
      }
      return drivetrainTurnFor;
    }()
  }, {
    key: "drivetrainTurnToHeading",
    value: function () {
      var _drivetrainTurnToHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee12(args) {
        var newHeading, currentRotation, scaledRotation, delta, targetRotation;
        return _regeneratorRuntime().wrap(function _callee12$(_context12) {
          while (1) switch (_context12.prev = _context12.next) {
            case 0:
              log.debug("drivetrainTurnToHeading called with heading: ".concat(args.HEADING));
              newHeading = (args.HEADING % 360 + 360) % 360;
              currentRotation = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.drivetrain.rotation; // Scaled rotation
              scaledRotation = (currentRotation % 360 + 360) % 360;
              delta = newHeading - scaledRotation; // Adjust delta to take the shortest path
              if (delta > 180) {
                delta -= 360;
              } else if (delta < -180) {
                delta += 360;
              }
              targetRotation = currentRotation + delta;
              _context12.next = 9;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.turnTo(targetRotation, Math.abs(this.turnVelocity), !args.anddontwait_mutator);
            case 9:
            case "end":
              return _context12.stop();
          }
        }, _callee12, this);
      }));
      function drivetrainTurnToHeading(_x14) {
        return _drivetrainTurnToHeading.apply(this, arguments);
      }
      return drivetrainTurnToHeading;
    }()
  }, {
    key: "drivetrainTurnToRotation",
    value: function () {
      var _drivetrainTurnToRotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee13(args) {
        return _regeneratorRuntime().wrap(function _callee13$(_context13) {
          while (1) switch (_context13.prev = _context13.next) {
            case 0:
              log.debug("drivetrainTurnToRotation called with heading: ".concat(args.ROTATION));
              _context13.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.turnTo(args.ROTATION, this.turnVelocity, !args.anddontwait_mutator);
            case 3:
            case "end":
              return _context13.stop();
          }
        }, _callee13, this);
      }));
      function drivetrainTurnToRotation(_x15) {
        return _drivetrainTurnToRotation.apply(this, arguments);
      }
      return drivetrainTurnToRotation;
    }()
  }, {
    key: "drivetrainSetStopping",
    value: function () {
      var _drivetrainSetStopping = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee14(args) {
        var modeMap, mode;
        return _regeneratorRuntime().wrap(function _callee14$(_context14) {
          while (1) switch (_context14.prev = _context14.next) {
            case 0:
              log.debug("drivetrainSetStopping called with heading: ".concat(args.MODE));
              modeMap = {
                'brake': 1,
                'coast': 2,
                'hold': 3
              };
              mode = modeMap[args.MODE.toLowerCase()];
              this.driveStopMode = mode;
              _context14.next = 6;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorBrake(this.leftPort, this.driveStopMode);
            case 6:
              _context14.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorBrake(this.rightPort, this.driveStopMode);
            case 8:
            case "end":
              return _context14.stop();
          }
        }, _callee14, this);
      }));
      function drivetrainSetStopping(_x16) {
        return _drivetrainSetStopping.apply(this, arguments);
      }
      return drivetrainSetStopping;
    }()
  }, {
    key: "drivetrainStop",
    value: function () {
      var _drivetrainStop = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee15() {
        return _regeneratorRuntime().wrap(function _callee15$(_context15) {
          while (1) switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.driveStop(this.driveStopMode);
            case 2:
            case "end":
              return _context15.stop();
          }
        }, _callee15, this);
      }));
      function drivetrainStop() {
        return _drivetrainStop.apply(this, arguments);
      }
      return drivetrainStop;
    }()
  }, {
    key: "drivetrainSetHeading",
    value: function () {
      var _drivetrainSetHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee16(args) {
        var newHeading;
        return _regeneratorRuntime().wrap(function _callee16$(_context16) {
          while (1) switch (_context16.prev = _context16.next) {
            case 0:
              log.debug("drivetrainSetHeading called with heading: ".concat(args.HEADING));
              newHeading = (args.HEADING % 360 + 360) % 360;
              _context16.next = 4;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setHeading(newHeading);
            case 4:
            case "end":
              return _context16.stop();
          }
        }, _callee16);
      }));
      function drivetrainSetHeading(_x17) {
        return _drivetrainSetHeading.apply(this, arguments);
      }
      return drivetrainSetHeading;
    }()
  }, {
    key: "drivetrainSetRotation",
    value: function () {
      var _drivetrainSetRotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee17(args) {
        return _regeneratorRuntime().wrap(function _callee17$(_context17) {
          while (1) switch (_context17.prev = _context17.next) {
            case 0:
              log.debug("drivetrainSetRotation called with rotation: ".concat(args.ROTATION));
              _context17.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setHeading(args.ROTATION);
            case 3:
            case "end":
              return _context17.stop();
          }
        }, _callee17);
      }));
      function drivetrainSetRotation(_x18) {
        return _drivetrainSetRotation.apply(this, arguments);
      }
      return drivetrainSetRotation;
    }()
  }, {
    key: "drivetrainSetTimeout",
    value: function () {
      var _drivetrainSetTimeout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee18(args) {
        return _regeneratorRuntime().wrap(function _callee18$(_context18) {
          while (1) switch (_context18.prev = _context18.next) {
            case 0:
              log.debug("drivetrainSetTimeout called with timeout: ".concat(args.TIMEOUT));
              _context18.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setTimeout(args.TIMEOUT * 1000);
            case 3:
            case "end":
              return _context18.stop();
          }
        }, _callee18);
      }));
      function drivetrainSetTimeout(_x19) {
        return _drivetrainSetTimeout.apply(this, arguments);
      }
      return drivetrainSetTimeout;
    }() //#endregion Drivetrain Opcode Executors
    //#region Motor Opcode Executors
  }, {
    key: "motionSpin",
    value: function () {
      var _motionSpin = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee19(args) {
        var motorName, port, directionMultiplier, velocity;
        return _regeneratorRuntime().wrap(function _callee19$(_context19) {
          while (1) switch (_context19.prev = _context19.next) {
            case 0:
              log.debug("motionSpin called with MOTOR: ".concat(args.MOTOR, " and ").concat(args.DIRECTION));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              log.debug("port:", port);
              directionMultiplier = args.DIRECTION === 'fwd' ? 1 : -1;
              velocity = directionMultiplier * this.motorVelocities[port];
              _context19.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.spin(port, velocity);
            case 8:
            case "end":
              return _context19.stop();
          }
        }, _callee19, this);
      }));
      function motionSpin(_x20) {
        return _motionSpin.apply(this, arguments);
      }
      return motionSpin;
    }()
  }, {
    key: "motionSpinFor",
    value: function () {
      var _motionSpinFor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee20(args) {
        var motorName, port, directionMultiplier, amount, wait, degrees;
        return _regeneratorRuntime().wrap(function _callee20$(_context20) {
          while (1) switch (_context20.prev = _context20.next) {
            case 0:
              log.debug("motionSpinFor called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              log.debug("port:", port);
              directionMultiplier = args.DIRECTION === 'fwd' ? 1 : -1;
              amount = args.AMOUNT;
              wait = !args.anddontwait_mutator;
              if (args.UNITS === "rev") {
                amount = amount * 360;
              }
              degrees = directionMultiplier * amount;
              _context20.next = 11;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.spinFor(port, degrees, wait);
            case 11:
            case "end":
              return _context20.stop();
          }
        }, _callee20, this);
      }));
      function motionSpinFor(_x21) {
        return _motionSpinFor.apply(this, arguments);
      }
      return motionSpinFor;
    }()
  }, {
    key: "motionSpinToPosition",
    value: function () {
      var _motionSpinToPosition = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee21(args) {
        var motorName, port, position, wait;
        return _regeneratorRuntime().wrap(function _callee21$(_context21) {
          while (1) switch (_context21.prev = _context21.next) {
            case 0:
              log.debug("motionSpinToPosition called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              position = args.AMOUNT;
              wait = !args.anddontwait_mutator;
              if (args.UNITS === "rev") {
                position = position * 360;
              }
              _context21.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.spinTo(port, position, wait);
            case 8:
            case "end":
              return _context21.stop();
          }
        }, _callee21, this);
      }));
      function motionSpinToPosition(_x22) {
        return _motionSpinToPosition.apply(this, arguments);
      }
      return motionSpinToPosition;
    }()
  }, {
    key: "motionStopMotor",
    value: function () {
      var _motionStopMotor = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee22(args) {
        var motorName, port, brakeMode;
        return _regeneratorRuntime().wrap(function _callee22$(_context22) {
          while (1) switch (_context22.prev = _context22.next) {
            case 0:
              log.debug("motionStopMotor called with MOTOR: ".concat(args.MOTOR));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              brakeMode = this.motorStopModes[port] !== undefined ? this.motorStopModes[port] : 2; // Default to brake mode 2 (coast) if undefined
              log.debug("Stopping motor on port ".concat(port, " with brake mode ").concat(brakeMode));
              _context22.prev = 5;
              _context22.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.stopMotor(port, brakeMode);
            case 8:
              _context22.next = 13;
              break;
            case 10:
              _context22.prev = 10;
              _context22.t0 = _context22["catch"](5);
              log.error("Failed to stop motor on port ".concat(port, ": ").concat(_context22.t0.message));
            case 13:
            case "end":
              return _context22.stop();
          }
        }, _callee22, this, [[5, 10]]);
      }));
      function motionStopMotor(_x23) {
        return _motionStopMotor.apply(this, arguments);
      }
      return motionStopMotor;
    }()
  }, {
    key: "motionSetMotorPosition",
    value: function () {
      var _motionSetMotorPosition = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee23(args) {
        var motorName, port, position, units;
        return _regeneratorRuntime().wrap(function _callee23$(_context23) {
          while (1) switch (_context23.prev = _context23.next) {
            case 0:
              log.debug("motionSetMotorPosition called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              position = args.DEGS;
              units = args.UNITS === 'rev' ? 1 : 0;
              if (units === 1) {
                position *= 360;
              }
              _context23.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorPos(port, position);
            case 8:
            case "end":
              return _context23.stop();
          }
        }, _callee23, this);
      }));
      function motionSetMotorPosition(_x24) {
        return _motionSetMotorPosition.apply(this, arguments);
      }
      return motionSetMotorPosition;
    }()
  }, {
    key: "motionSetMotorVelocity",
    value: function () {
      var _motionSetMotorVelocity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee24(args) {
        var motorName, port, velocity;
        return _regeneratorRuntime().wrap(function _callee24$(_context24) {
          while (1) switch (_context24.prev = _context24.next) {
            case 0:
              log.debug("motionSetMotorVelocity called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              velocity = args.VELOCITY;
              if (velocity < -100) {
                velocity = -100;
              } else if (velocity > 100) {
                velocity = 100;
              }
              this.motorVelocities[port] = velocity * this.motorVelocityScale;
              if (this.motorVelocities[port] < -100) {
                this.motorVelocities[port] = -100;
              } else if (this.motorVelocities[port] > 100) {
                this.motorVelocities[port] = 100;
              }
              _context24.next = 9;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorVel(port, this.motorVelocities[port]);
            case 9:
            case "end":
              return _context24.stop();
          }
        }, _callee24, this);
      }));
      function motionSetMotorVelocity(_x25) {
        return _motionSetMotorVelocity.apply(this, arguments);
      }
      return motionSetMotorVelocity;
    }()
  }, {
    key: "motionSetMotorStopping",
    value: function () {
      var _motionSetMotorStopping = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee25(args) {
        var motorName, port, modeMap, mode;
        return _regeneratorRuntime().wrap(function _callee25$(_context25) {
          while (1) switch (_context25.prev = _context25.next) {
            case 0:
              log.debug("motionSetMotorStopping called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              modeMap = {
                'brake': 1,
                'coast': 2,
                'hold': 3
              };
              mode = modeMap[args.MODE.toLowerCase()];
              this.motorStopModes[port] = mode; // assign the stop mode for the individual motor
              _context25.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorBrake(port, mode);
            case 8:
            case "end":
              return _context25.stop();
          }
        }, _callee25, this);
      }));
      function motionSetMotorStopping(_x26) {
        return _motionSetMotorStopping.apply(this, arguments);
      }
      return motionSetMotorStopping;
    }()
  }, {
    key: "motionSetMotorTorque",
    value: function () {
      var _motionSetMotorTorque = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee26(args) {
        var motorName, port, torque;
        return _regeneratorRuntime().wrap(function _callee26$(_context26) {
          while (1) switch (_context26.prev = _context26.next) {
            case 0:
              log.debug("motionSetMotorTorque called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              torque = args.TORQUE;
              if (torque < 0) {
                torque = 0;
              } else if (torque > 100) {
                torque = 100;
              }
              this.torqueLimit[port] = torque;
              _context26.next = 8;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setILimit(port, this.torqueLimit[port]);
            case 8:
            case "end":
              return _context26.stop();
          }
        }, _callee26, this);
      }));
      function motionSetMotorTorque(_x27) {
        return _motionSetMotorTorque.apply(this, arguments);
      }
      return motionSetMotorTorque;
    }()
  }, {
    key: "motionSetMotorTimeout",
    value: function () {
      var _motionSetMotorTimeout = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee27(args) {
        var motorName, port, timeout;
        return _regeneratorRuntime().wrap(function _callee27$(_context27) {
          while (1) switch (_context27.prev = _context27.next) {
            case 0:
              log.debug("motionSetMotorTimeout called with: ".concat(JSON.stringify(args)));
              motorName = args.MOTOR;
              port = this.getPortData(motorName);
              timeout = args.TIMEOUT;
              timeout = Math.max(0, timeout);
              _context27.next = 7;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setMotorTimeout(port, timeout * 1000);
            case 7:
            case "end":
              return _context27.stop();
          }
        }, _callee27, this);
      }));
      function motionSetMotorTimeout(_x28) {
        return _motionSetMotorTimeout.apply(this, arguments);
      }
      return motionSetMotorTimeout;
    }() //#endregion Motor Opcode Executors
    //#region Sensing Opcode Executors
  }, {
    key: "sensingResetTimer",
    value: function sensingResetTimer(args, util) {
      GOBlocks.timer.reset();
    }
  }, {
    key: "sensingTimerInSeconds",
    value: function sensingTimerInSeconds(args, util) {
      return GOBlocks.timer.getTime() / 1000;
    }
  }, {
    key: "sensingDrivetrainIsDone",
    value: function () {
      var _sensingDrivetrainIsDone = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee28() {
        var _goController$sensorV;
        return _regeneratorRuntime().wrap(function _callee28$(_context28) {
          while (1) switch (_context28.prev = _context28.next) {
            case 0:
              log.debug("sensingDrivetrainIsDone");
              return _context28.abrupt("return", ((_goController$sensorV = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.drivetrain) === null || _goController$sensorV === void 0 ? void 0 : _goController$sensorV.isDone) || false);
            case 2:
            case "end":
              return _context28.stop();
          }
        }, _callee28);
      }));
      function sensingDrivetrainIsDone() {
        return _sensingDrivetrainIsDone.apply(this, arguments);
      }
      return sensingDrivetrainIsDone;
    }()
  }, {
    key: "sensingDrivetrainHeading",
    value: function () {
      var _sensingDrivetrainHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee29() {
        var _goController$sensorV2;
        return _regeneratorRuntime().wrap(function _callee29$(_context29) {
          while (1) switch (_context29.prev = _context29.next) {
            case 0:
              log.debug("sensingDrivetrainHeading");
              return _context29.abrupt("return", ((_goController$sensorV2 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.drivetrain) === null || _goController$sensorV2 === void 0 ? void 0 : _goController$sensorV2.heading) || 0);
            case 2:
            case "end":
              return _context29.stop();
          }
        }, _callee29);
      }));
      function sensingDrivetrainHeading() {
        return _sensingDrivetrainHeading.apply(this, arguments);
      }
      return sensingDrivetrainHeading;
    }()
  }, {
    key: "sensingDrivetrainRotation",
    value: function () {
      var _sensingDrivetrainRotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee30() {
        var _goController$sensorV3;
        return _regeneratorRuntime().wrap(function _callee30$(_context30) {
          while (1) switch (_context30.prev = _context30.next) {
            case 0:
              log.debug("sensingDrivetrainRotation");
              return _context30.abrupt("return", ((_goController$sensorV3 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.drivetrain) === null || _goController$sensorV3 === void 0 ? void 0 : _goController$sensorV3.rotation) || 0);
            case 2:
            case "end":
              return _context30.stop();
          }
        }, _callee30);
      }));
      function sensingDrivetrainRotation() {
        return _sensingDrivetrainRotation.apply(this, arguments);
      }
      return sensingDrivetrainRotation;
    }()
  }, {
    key: "sensingDrivetrainVelocity",
    value: function () {
      var _sensingDrivetrainVelocity = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee31() {
        var _goController$sensorV4;
        return _regeneratorRuntime().wrap(function _callee31$(_context31) {
          while (1) switch (_context31.prev = _context31.next) {
            case 0:
              log.debug("sensingDrivetrainVelocity");
              return _context31.abrupt("return", ((_goController$sensorV4 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.drivetrain) === null || _goController$sensorV4 === void 0 ? void 0 : _goController$sensorV4.velocityPercent) || 0);
            case 2:
            case "end":
              return _context31.stop();
          }
        }, _callee31);
      }));
      function sensingDrivetrainVelocity() {
        return _sensingDrivetrainVelocity.apply(this, arguments);
      }
      return sensingDrivetrainVelocity;
    }()
  }, {
    key: "sensingGyroCrashed",
    value: function () {
      var _sensingGyroCrashed = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee33() {
        return _regeneratorRuntime().wrap(function _callee33$(_context33) {
          while (1) switch (_context33.prev = _context33.next) {
            case 0:
              log.debug("sensingGyroCrashed");
              return _context33.abrupt("return", new Promise(/*#__PURE__*/function () {
                var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee32(resolve, reject) {
                  var crashed;
                  return _regeneratorRuntime().wrap(function _callee32$(_context32) {
                    while (1) switch (_context32.prev = _context32.next) {
                      case 0:
                        crashed = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.imu.crash;
                        resolve(crashed);
                        if (crashed) {
                          log.debug("api needs to clear crash flag");
                          _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.imu.clearCrashFlag();
                        }
                      case 3:
                      case "end":
                        return _context32.stop();
                    }
                  }, _callee32);
                }));
                return function (_x29, _x30) {
                  return _ref2.apply(this, arguments);
                };
              }()));
            case 2:
            case "end":
              return _context33.stop();
          }
        }, _callee33);
      }));
      function sensingGyroCrashed() {
        return _sensingGyroCrashed.apply(this, arguments);
      }
      return sensingGyroCrashed;
    }()
  }, {
    key: "sensingMotorIsDone",
    value: function sensingMotorIsDone(args) {
      var _goController$sensorV5;
      var motorName = args.MOTOR;
      var port = this.getPortData(motorName);
      var isDone = ((_goController$sensorV5 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.portSensors[port]) === null || _goController$sensorV5 === void 0 ? void 0 : _goController$sensorV5.isDone) || false;
      return isDone;
    }
  }, {
    key: "sensingMotorIsSpinning",
    value: function sensingMotorIsSpinning(args) {
      var _goController$sensorV6;
      var motorName = args.MOTOR;
      var port = this.getPortData(motorName);
      var isSpinning = ((_goController$sensorV6 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.portSensors[port]) === null || _goController$sensorV6 === void 0 ? void 0 : _goController$sensorV6.isSpinning) || false;
      return isSpinning;
    }
  }, {
    key: "sensingMotorPosition",
    value: function sensingMotorPosition(args) {
      var _goController$sensorV7;
      var motorName = args.MOTOR;
      var units = args.UNITS;
      var port = this.getPortData(motorName);
      log.debug("sensingMotorPosition called with MOTOR: ".concat(motorName, ", UNITS: ").concat(units, ", port: ").concat(port));
      var position = ((_goController$sensorV7 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.portSensors[port]) === null || _goController$sensorV7 === void 0 ? void 0 : _goController$sensorV7.position) || 0;

      // Convert units if necessary
      if (units === 'rev') {
        position /= 360;
      }
      return position;
    }
  }, {
    key: "sensingMotorVelocity",
    value: function sensingMotorVelocity(args) {
      var _goController$sensorV8;
      var motorName = args.MOTOR;
      var units = args.UNITS;
      var port = this.getPortData(motorName);
      log.debug("sensingMotorVelocity called with MOTOR: ".concat(motorName, ", UNITS: ").concat(units, ", port: ").concat(port));
      var velocity = ((_goController$sensorV8 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.portSensors[port]) === null || _goController$sensorV8 === void 0 ? void 0 : _goController$sensorV8.velocity) || 0;
      return velocity;
    }
  }, {
    key: "sensingMotorCurrent",
    value: function sensingMotorCurrent(args) {
      var _goController$sensorV9;
      var motorName = args.MOTOR;
      var port = this.getPortData(motorName);
      log.debug("sensingMotorCurrent called with MOTOR: ".concat(motorName, ", port: ").concat(port));
      var current = ((_goController$sensorV9 = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.portSensors[port]) === null || _goController$sensorV9 === void 0 ? void 0 : _goController$sensorV9.current) || 0;
      return current;
    }
  }, {
    key: "sensingGyroAcceleration",
    value: function sensingGyroAcceleration(args, util) {
      log.debug("sensingGyroAcceleration: ".concat(args));
      var axisNumber;
      var directionName = args.DIRECTIONS;
      if (directionName === "x") {
        axisNumber = 0;
      } else if (directionName === "y") {
        axisNumber = 1;
      } else if (directionName === "z") {
        axisNumber = 2;
      } else {
        log.warn("unknown direction", directionName);
      }
      log.debug("checking acceleration", directionName, axisNumber);
      return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.gyroSensor.getAcceleration(axisNumber);
    }
  }, {
    key: "sensingGyroHeading",
    value: function () {
      var _sensingGyroHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee34() {
        return _regeneratorRuntime().wrap(function _callee34$(_context34) {
          while (1) switch (_context34.prev = _context34.next) {
            case 0:
              log.debug("sensingGyroHeading");
              return _context34.abrupt("return", _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.gyroSensor.heading);
            case 2:
            case "end":
              return _context34.stop();
          }
        }, _callee34);
      }));
      function sensingGyroHeading() {
        return _sensingGyroHeading.apply(this, arguments);
      }
      return sensingGyroHeading;
    }()
  }, {
    key: "sensingGyroRotation",
    value: function () {
      var _sensingGyroRotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee35() {
        return _regeneratorRuntime().wrap(function _callee35$(_context35) {
          while (1) switch (_context35.prev = _context35.next) {
            case 0:
              log.debug("sensingGyroRotation");
              return _context35.abrupt("return", _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.gyroSensor.rotation);
            case 2:
            case "end":
              return _context35.stop();
          }
        }, _callee35);
      }));
      function sensingGyroRotation() {
        return _sensingGyroRotation.apply(this, arguments);
      }
      return sensingGyroRotation;
    }()
  }, {
    key: "sensingGyroSetHeading",
    value: function () {
      var _sensingGyroSetHeading = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee36(args) {
        return _regeneratorRuntime().wrap(function _callee36$(_context36) {
          while (1) switch (_context36.prev = _context36.next) {
            case 0:
              log.debug("sensingGyroSetHeading: ".concat(args.VALUE));
              _context36.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setHeading(args.VALUE);
            case 3:
            case "end":
              return _context36.stop();
          }
        }, _callee36);
      }));
      function sensingGyroSetHeading(_x31) {
        return _sensingGyroSetHeading.apply(this, arguments);
      }
      return sensingGyroSetHeading;
    }()
  }, {
    key: "sensingGyroSetRotation",
    value: function () {
      var _sensingGyroSetRotation = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee37(args) {
        return _regeneratorRuntime().wrap(function _callee37$(_context37) {
          while (1) switch (_context37.prev = _context37.next) {
            case 0:
              log.debug("sensingGyroSetRotation: ".concat(args.VALUE));
              _context37.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setHeading(args.VALUE);
            case 3:
            case "end":
              return _context37.stop();
          }
        }, _callee37);
      }));
      function sensingGyroSetRotation(_x32) {
        return _sensingGyroSetRotation.apply(this, arguments);
      }
      return sensingGyroSetRotation;
    }()
  }, {
    key: "sensingGyroCalibrate",
    value: function () {
      var _sensingGyroCalibrate = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee38() {
        return _regeneratorRuntime().wrap(function _callee38$(_context38) {
          while (1) switch (_context38.prev = _context38.next) {
            case 0:
              log.debug("sensingGyroCalibrate");
              _context38.next = 3;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.calGyro();
            case 3:
            case "end":
              return _context38.stop();
          }
        }, _callee38);
      }));
      function sensingGyroCalibrate() {
        return _sensingGyroCalibrate.apply(this, arguments);
      }
      return sensingGyroCalibrate;
    }()
  }, {
    key: "sensingSetEyeLight",
    value: function () {
      var _sensingSetEyeLight = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee39(args) {
        var state;
        return _regeneratorRuntime().wrap(function _callee39$(_context39) {
          while (1) switch (_context39.prev = _context39.next) {
            case 0:
              log.debug("sensingSetEyeLight: ".concat(args.MODE));
              state = args.MODE === 'on' ? 1 : 0;
              _context39.next = 4;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setSensorLed(state * 100);
            case 4:
            case "end":
              return _context39.stop();
          }
        }, _callee39);
      }));
      function sensingSetEyeLight(_x33) {
        return _sensingSetEyeLight.apply(this, arguments);
      }
      return sensingSetEyeLight;
    }()
  }, {
    key: "sensingSetEyeRange",
    value: function () {
      var _sensingSetEyeRange = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee40(args) {
        var range;
        return _regeneratorRuntime().wrap(function _callee40$(_context40) {
          while (1) switch (_context40.prev = _context40.next) {
            case 0:
              log.debug("sensingSetEyeRange: ".concat(JSON.stringify(args)));
              range = args.MODE === 'near' ? 0 : 2;
              _context40.next = 4;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setSensorProx(range);
            case 4:
            case "end":
              return _context40.stop();
          }
        }, _callee40);
      }));
      function sensingSetEyeRange(_x34) {
        return _sensingSetEyeRange.apply(this, arguments);
      }
      return sensingSetEyeRange;
    }()
  }, {
    key: "sensingSetEyePower",
    value: function () {
      var _sensingSetEyePower = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee41(args) {
        var power;
        return _regeneratorRuntime().wrap(function _callee41$(_context41) {
          while (1) switch (_context41.prev = _context41.next) {
            case 0:
              log.debug("sensingSetEyePower: ".concat(args.POWER));
              if (args.POWER > 100) {
                power = 100;
              } else if (args.POWER < 0) {
                power = 0;
              } else {
                power = args.POWER;
              }
              _context41.next = 4;
              return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.setSensorLed(power);
            case 4:
            case "end":
              return _context41.stop();
          }
        }, _callee41);
      }));
      function sensingSetEyePower(_x35) {
        return _sensingSetEyePower.apply(this, arguments);
      }
      return sensingSetEyePower;
    }()
  }, {
    key: "sensingEyeFoundObject",
    value: function sensingEyeFoundObject() {
      log.debug("sensingEyeFoundObject");
      return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.eye.foundObject;
    }
  }, {
    key: "sensingEyeDetect",
    value: function sensingEyeDetect(args) {
      log.debug("sensingEyeDetect: ".concat(JSON.stringify(args)));
      var colorStr = args.COLORS.toLowerCase();
      var colorMap = {
        'none': 0,
        'red': 1,
        'green': 2,
        'blue': 3
      };
      var colorNum = colorMap[colorStr];
      return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.eye.detectsColor(colorNum);
    }
  }, {
    key: "sensingEyeBrightness",
    value: function sensingEyeBrightness() {
      log.debug("sensingEyeBrightness");
      return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.eye.brightness;
    }
  }, {
    key: "sensingEyeHue",
    value: function sensingEyeHue() {
      log.debug("sensingEyeHue");
      return _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.eye.hue;
    }
  }, {
    key: "sensingBumperPressed",
    value: function () {
      var _sensingBumperPressed = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee42(args) {
        var port, isPressed;
        return _regeneratorRuntime().wrap(function _callee42$(_context42) {
          while (1) switch (_context42.prev = _context42.next) {
            case 0:
              log.debug("sensingBumperPressed");
              port = this.getPortData(args.BUMPER);
              isPressed = _HardwareInterface_controllers_VEXGOController__WEBPACK_IMPORTED_MODULE_9__.goController.sensorValues.getPort(port).bumperPressed;
              return _context42.abrupt("return", isPressed);
            case 4:
            case "end":
              return _context42.stop();
          }
        }, _callee42, this);
      }));
      function sensingBumperPressed(_x36) {
        return _sensingBumperPressed.apply(this, arguments);
      }
      return sensingBumperPressed;
    }() //#endregion Sensing Opcode Executors
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
  }, {
    key: "getPortData",
    value: function getPortData(portName) {
      var config = _vexcode_robot_config__WEBPACK_IMPORTED_MODULE_10__.RobotConfigManager.currentConfiguration;
      log.debug("config:", config);
      var port = -1;
      var _iterator = _createForOfIteratorHelper(config),
        _step;
      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var device = _step.value;
          var deviceClass = device.deviceType["class"];
          log.debug("device name:", device.name, "with class:", deviceClass);
          if (portName === device.name) {
            log.debug("found matching port/device");
            if (Array.isArray(device.port)) {
              port = device.port[0];
            } else {
              port = device.port;
            }
            port = port - 1;
            break;
          } else if (device.name === "Robot Arm") {
            log.debug("Robot Arm Device Added, Mapping ports");
            switch (portName) {
              case "arm":
                port = 0;
                break;
              case "base":
                port = 3;
                break;
              case "magnet":
                port = 2;
                break;
              default:
                break;
            }
          } else if (device.name === "Code Base") {
            log.debug("Code Base Device Added, Mapping ports");
            switch (portName) {
              case "bumper":
                port = 1;
                break;
              case "magnet":
                port = 2;
                break;
              default:
                break;
            }
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      log.debug("port inside getPortData:", port);
      return port;
    }
    //#endregion Helpers
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
_defineProperty(GOBlocks, "timer", new _VexcodeTimer__WEBPACK_IMPORTED_MODULE_3__.VexcodeTimer(0, true));
/** 
 * * true - the init has been completed
 * * false - the init is still running
 */
_defineProperty(GOBlocks, "isReady", false);
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
    _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.debug("Trying to stop the project but VMControls for GOBlocks isn't defined");
  }
}


/***/ })

}]);
//# sourceMappingURL=8a8a998889eeb51f0e55.src_Blockly_Extensions_GOBlocks_ts.bundle.js.map