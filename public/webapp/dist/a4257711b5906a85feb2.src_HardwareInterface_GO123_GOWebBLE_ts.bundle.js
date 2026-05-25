"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_HardwareInterface_GO123_GOWebBLE_ts"],{

/***/ "./src/HardwareInterface/GO123/GOWebBLE.ts":
/*!*************************************************!*\
  !*** ./src/HardwareInterface/GO123/GOWebBLE.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GOWebBLE: () => (/* binding */ GOWebBLE)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GO123Interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GO123Interface */ "./src/HardwareInterface/GO123/GO123Interface.ts");
/* harmony import */ var _GO123WebBLE__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GO123WebBLE */ "./src/HardwareInterface/GO123/GO123WebBLE.ts");
/* harmony import */ var _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vexcode/vex-ble-device-manager */ "./node_modules/@vexcode/vex-ble-device-manager/dist_lib/src/index.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("GOWebBLE");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();
log.setHistoryLogger("HWInterface");

// tslint:disable: member-ordering

// interface types/enums

// parent classes/types



// low-level interface

var GOWebBLE = /*#__PURE__*/function (_GO123WebBLE) {
  function GOWebBLE() {
    var _this;
    _classCallCheck(this, GOWebBLE);
    _this = _callSuper(this, GOWebBLE);
    log.debug("construct GOWebBLE");
    return _this;
  }
  _inherits(GOWebBLE, _GO123WebBLE);
  return _createClass(GOWebBLE, [{
    key: "initWebBLE",
    value: function initWebBLE() {
      _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__.init("GO");
    }

    //#region interface information
    // These are all properties that are used by the UI to know what is supported
  }, {
    key: "deviceName",
    get: function get() {
      return "Brain";
    }
    //#endregion interface information

    //#region connection control
    //#region internal calls for connection control
    //#endregion internal calls for connection control
    //#endregion connection control

    //#region brain info
    //#endregion brain info

    //#region program control
    //#endregion program control

    //#region project downloads
    //#endregion project downloads

    //#region compilers
    //#endregion compilers

    //#region script commands
    //#endregion script commands

    //#region remote control
    //#endregion remote control

    //#region firmware
  }, {
    key: "getFWUpdateMessages",
    value: function getFWUpdateMessages() {
      return _GO123Interface__WEBPACK_IMPORTED_MODULE_1__.GO123Interface.FWUpdateMessagesGO;
    }
    //#endregion firmware

    //#region internal firmware
    //#endregion internal firmware

    //#region internal firmware low level
    //#endregion internal firmware low level

    //#region events
    //#endregion

    //#region native -> webapp events
    //#region status events
    //#endregion status events
    //#endregion native -> webapp events

    //#region webBLE event wrappers
  }, {
    key: "onWebBLEPortUpdate",
    value: function onWebBLEPortUpdate(data) {
      // log.debug("onWebBLEPortUpdate");
      var out = {
        battery: data.Battery,
        ports: []
      };
      data.Ports.forEach(function (port) {
        var deviceID = port.DeviceID;
        if (deviceID === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__.VEXPortDeviceID.Motor) {
          var motorData = port;
          var motorOut = {
            portNumber: port.PortNumber,
            activeCommand: port.ActiveCommand,
            updateCounter: port.UpdateCounter,
            deviceID: deviceID,
            velocity: motorData.Velocity,
            position: motorData.Position,
            current: motorData.Current,
            flags: motorData.Flags,
            modeBits: motorData.ModeBits
          };
          out.ports.push(motorOut);
        } else if (deviceID === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__.VEXPortDeviceID.DriveTrain) {
          var driveData = port;
          var driveOut = {
            portNumber: port.PortNumber,
            activeCommand: port.ActiveCommand,
            updateCounter: port.UpdateCounter,
            deviceID: deviceID,
            velocity: driveData.Velocity,
            position: driveData.Position,
            heading: driveData.Heading,
            flags: driveData.Flags
          };
          out.ports.push(driveOut);
        } else if (deviceID === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__.VEXPortDeviceID.Magnet) {
          var magnetData = port;
          var magnetOut = {
            portNumber: port.PortNumber,
            activeCommand: port.ActiveCommand,
            updateCounter: port.UpdateCounter,
            deviceID: deviceID,
            pwm: magnetData.PWM,
            flags: magnetData.Flags
          };
          out.ports.push(magnetOut);
        } else if (deviceID === _vexcode_vex_ble_device_manager__WEBPACK_IMPORTED_MODULE_3__.VEXPortDeviceID.Bumper) {
          var bumperData = port;
          var bumperOut = {
            portNumber: port.PortNumber,
            activeCommand: port.ActiveCommand,
            updateCounter: port.UpdateCounter,
            deviceID: deviceID,
            pwm: bumperData.PWM,
            state: bumperData.State,
            flags: bumperData.Flags
          };
          out.ports.push(bumperOut);
        }
      });
      this.onGO123BLEPortsUpdate(out);
    }
    //#endregion webBLE event wrappers

    //#region webble logging
    //#endregion webble logging
  }]);
}(_GO123WebBLE__WEBPACK_IMPORTED_MODULE_2__.GO123WebBLE);


/***/ })

}]);
//# sourceMappingURL=a4257711b5906a85feb2.src_HardwareInterface_GO123_GOWebBLE_ts.bundle.js.map