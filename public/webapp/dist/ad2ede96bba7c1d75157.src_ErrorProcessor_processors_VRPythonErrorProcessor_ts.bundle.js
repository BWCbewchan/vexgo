"use strict";
(self["webpackChunkwebapp"] = self["webpackChunkwebapp"] || []).push([["src_ErrorProcessor_processors_VRPythonErrorProcessor_ts"],{

/***/ "./src/ErrorProcessor/processors/VRPythonErrorProcessor.ts":
/*!*****************************************************************!*\
  !*** ./src/ErrorProcessor/processors/VRPythonErrorProcessor.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VRPythonErrorProcessor: () => (/* binding */ VRPythonErrorProcessor)
/* harmony export */ });
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @rm-vca/logger */ "./node_modules/@rm-vca/logger/dist/index.js");
/* harmony import */ var _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ErrorProcessor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ErrorProcessor */ "./src/ErrorProcessor/ErrorProcessor.ts");
/* harmony import */ var _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./CommonPythonErrorFunctions */ "./src/ErrorProcessor/processors/CommonPythonErrorFunctions.ts");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
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

var log = _rm_vca_logger__WEBPACK_IMPORTED_MODULE_0__.getLogger("VRPythonErrorProcessor");
log.setLevel(log.levels.WARN);
// for dev only
// log.enableAll();



var VRPythonErrorProcessor = /*#__PURE__*/function (_ErrorProcessor) {
  function VRPythonErrorProcessor() {
    var _this;
    _classCallCheck(this, VRPythonErrorProcessor);
    _this = _callSuper(this, VRPythonErrorProcessor);
    _defineProperty(_this, "checkFunctions", []);
    log.debug("Linter Using: VRPythonErrorProcessor");

    // add more error check functions here
    _this.checkFunctions = [_CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkIndentationError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkSyntaxError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkTypeError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkValueError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkNameError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkAttributeError, _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkZeroDivisionError,
    // this is a catch all. actual error parsing should be before this
    _CommonPythonErrorFunctions__WEBPACK_IMPORTED_MODULE_2__.CommonPythonErrorFunctions.checkGenericError];
    return _this;
  }
  _inherits(VRPythonErrorProcessor, _ErrorProcessor);
  return _createClass(VRPythonErrorProcessor, [{
    key: "preprocessData",
    value: function preprocessData(errorData) {
      // TODO: extend this if needed
      return errorData;
    }
  }, {
    key: "processData",
    value: function processData(errorData) {
      var output = [];
      log.debug(errorData); //log the full error data.

      for (var lineNumber = 0; lineNumber < errorData.length; lineNumber++) {
        var currentLine = errorData[lineNumber];
        var _iterator = _createForOfIteratorHelper(this.checkFunctions),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var checkFunction = _step.value;
            var result = checkFunction(errorData, currentLine, lineNumber);
            if (result) {
              output.push(result);
              break;
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
      return output;
    }
  }]);
}(_ErrorProcessor__WEBPACK_IMPORTED_MODULE_1__.ErrorProcessor);


/***/ })

}]);
//# sourceMappingURL=ad2ede96bba7c1d75157.src_ErrorProcessor_processors_VRPythonErrorProcessor_ts.bundle.js.map