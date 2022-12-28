"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _zipUsfmHelpers = require("../utils/zipUsfmHelpers");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
// Constants
var CANCEL_FILE_OPEN_ERROR = "Cannot read properties of undefined (reading 'type')";
var USFM_NO_BOOKID_ERROR = 'USFM Text Invalid! ~ Did not contain Book ID';
var FILE_LOADED = 'FILE_LOADED';
var INIT = 'INIT';
var INVALID_FILE = 'INVALID_FILE';
var UPLOAD_ERROR = 'UPLOAD_ERROR';
var UPLOAD_SUCCESS = 'UPLOAD_SUCCESS';
var initialState = {
  status: 'idle',
  file: null,
  isLoading: false,
  usfmData: null,
  invalidFileType: '',
  uploadError: null
};
var reducer = function reducer(state, action) {
  switch (action.type) {
    case 'upload':
      return _objectSpread(_objectSpread({}, state), {}, {
        file: action.file,
        status: FILE_LOADED
      });
    case 'submit':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: true,
        status: INIT
      });
    case 'file-uploaded':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        usfmData: action.usfmData,
        status: UPLOAD_SUCCESS
      });
    case 'invalid-file':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        invalidFileType: action.fileType,
        status: INVALID_FILE
      });
    case 'upload-error':
      return _objectSpread(_objectSpread({}, state), {}, {
        isLoading: false,
        uploadError: action.error,
        status: UPLOAD_ERROR
      });
    case 'reload':
      return _objectSpread({}, initialState);
    default:
      return state;
  }
};
var useZipUsfmFileInput = function useZipUsfmFileInput() {
  var handleZipLoad = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (usfmData, file) {
    console.log(file);
    console.log(usfmData);
  };
  var shouldValidate = arguments.length > 1 ? arguments[1] : undefined;
  var _useReducer = (0, _react.useReducer)(reducer, initialState),
    _useReducer2 = _slicedToArray(_useReducer, 2),
    state = _useReducer2[0],
    dispatch = _useReducer2[1];
  var onSubmit = function onSubmit() {
    if (state.file) {
      dispatch({
        type: 'submit'
      });
    } else {
      window.alert('No zip file has been input!');
    }
  };
  var onChange = function onChange(e) {
    if (e.target.files[0]) {
      dispatch({
        type: 'upload',
        file: e.target.files[0]
      });
    }
  };
  var triggerReload = function triggerReload() {
    dispatch({
      type: 'reload'
    });
  };

  // When user has submitted the file, proccess it, validate it, and call parameter function
  // to store it.
  (0, _react.useEffect)(function () {
    var processFile = /*#__PURE__*/function () {
      var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var arrayBuffer, usfmData, usfmValidatedData;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              if (!(state.file && state.isLoading)) {
                _context.next = 32;
                break;
              }
              _context.prev = 1;
              if (!state.file.type.includes('zip')) {
                _context.next = 23;
                break;
              }
              _context.next = 5;
              return state.file.arrayBuffer();
            case 5:
              arrayBuffer = _context.sent;
              _context.next = 8;
              return (0, _zipUsfmHelpers.arrayBufferToUsfmData)(arrayBuffer);
            case 8:
              usfmData = _context.sent;
              if (usfmData.length) {
                _context.next = 12;
                break;
              }
              dispatch({
                type: 'invalid-file',
                fileType: 'Zip file with no usfm files was uploaded!'
              });
              return _context.abrupt("return");
            case 12:
              if (!shouldValidate) {
                _context.next = 20;
                break;
              }
              usfmValidatedData = (0, _zipUsfmHelpers.validateUsfmData)(usfmData);
              if (usfmValidatedData.length) {
                _context.next = 17;
                break;
              }
              dispatch({
                type: 'invalid-file',
                fileType: 'All USFM files within the zip were invalid!'
              });
              return _context.abrupt("return");
            case 17:
              dispatch({
                type: 'file-uploaded',
                usfmData: usfmValidatedData
              });
              _context.next = 21;
              break;
            case 20:
              dispatch({
                type: 'file-uploaded',
                usfmData: usfmData
              });
            case 21:
              _context.next = 24;
              break;
            case 23:
              dispatch({
                type: 'invalid-file',
                fileType: 'Non-zip file was uploaded!'
              });
            case 24:
              _context.next = 32;
              break;
            case 26:
              _context.prev = 26;
              _context.t0 = _context["catch"](1);
              if (!(_context.t0.message === USFM_NO_BOOKID_ERROR)) {
                _context.next = 31;
                break;
              }
              dispatch({
                type: 'invalid-file',
                fileType: 'Zip contained Invalid USFM files that did not contain Book IDs!'
              });
              return _context.abrupt("return");
            case 31:
              if (_context.t0.message !== CANCEL_FILE_OPEN_ERROR) {
                console.error(_context.t0);
                dispatch({
                  type: 'upload-error',
                  error: _context.t0
                });
              }
            case 32:
            case "end":
              return _context.stop();
          }
        }, _callee, null, [[1, 26]]);
      }));
      return function processFile() {
        return _ref.apply(this, arguments);
      };
    }();
    processFile();
  }, [state.file, state.isLoading, shouldValidate]);

  // Run callback function when usfm data is successfully uploaded
  (0, _react.useEffect)(function () {
    if (state.usfmData) handleZipLoad(state.usfmData, state.file);
  }, [state.usfmData]);
  return _objectSpread(_objectSpread({}, state), {}, {
    onChange: onChange,
    onSubmit: onSubmit,
    triggerReload: triggerReload
  });
};
var _default = useZipUsfmFileInput;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDQU5DRUxfRklMRV9PUEVOX0VSUk9SIiwiVVNGTV9OT19CT09LSURfRVJST1IiLCJGSUxFX0xPQURFRCIsIklOSVQiLCJJTlZBTElEX0ZJTEUiLCJVUExPQURfRVJST1IiLCJVUExPQURfU1VDQ0VTUyIsImluaXRpYWxTdGF0ZSIsInN0YXR1cyIsImZpbGUiLCJpc0xvYWRpbmciLCJ1c2ZtRGF0YSIsImludmFsaWRGaWxlVHlwZSIsInVwbG9hZEVycm9yIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImZpbGVUeXBlIiwiZXJyb3IiLCJ1c2VaaXBVc2ZtRmlsZUlucHV0IiwiaGFuZGxlWmlwTG9hZCIsImNvbnNvbGUiLCJsb2ciLCJzaG91bGRWYWxpZGF0ZSIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsIm9uU3VibWl0Iiwid2luZG93IiwiYWxlcnQiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJmaWxlcyIsInRyaWdnZXJSZWxvYWQiLCJ1c2VFZmZlY3QiLCJwcm9jZXNzRmlsZSIsImluY2x1ZGVzIiwiYXJyYXlCdWZmZXIiLCJhcnJheUJ1ZmZlclRvVXNmbURhdGEiLCJsZW5ndGgiLCJ1c2ZtVmFsaWRhdGVkRGF0YSIsInZhbGlkYXRlVXNmbURhdGEiLCJtZXNzYWdlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZS16aXAtdXNmbS1maWxlLWlucHV0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IHtcbiAgYXJyYXlCdWZmZXJUb1VzZm1EYXRhLFxuICB2YWxpZGF0ZVVzZm1EYXRhLFxufSBmcm9tICcuLi91dGlscy96aXBVc2ZtSGVscGVycydcblxuLy8gQ29uc3RhbnRzXG5jb25zdCBDQU5DRUxfRklMRV9PUEVOX0VSUk9SID1cbiAgXCJDYW5ub3QgcmVhZCBwcm9wZXJ0aWVzIG9mIHVuZGVmaW5lZCAocmVhZGluZyAndHlwZScpXCJcbmNvbnN0IFVTRk1fTk9fQk9PS0lEX0VSUk9SID0gJ1VTRk0gVGV4dCBJbnZhbGlkISB+IERpZCBub3QgY29udGFpbiBCb29rIElEJ1xuY29uc3QgRklMRV9MT0FERUQgPSAnRklMRV9MT0FERUQnXG5jb25zdCBJTklUID0gJ0lOSVQnXG5jb25zdCBJTlZBTElEX0ZJTEUgPSAnSU5WQUxJRF9GSUxFJ1xuY29uc3QgVVBMT0FEX0VSUk9SID0gJ1VQTE9BRF9FUlJPUidcbmNvbnN0IFVQTE9BRF9TVUNDRVNTID0gJ1VQTE9BRF9TVUNDRVNTJ1xuXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XG4gIHN0YXR1czogJ2lkbGUnLFxuICBmaWxlOiBudWxsLFxuICBpc0xvYWRpbmc6IGZhbHNlLFxuICB1c2ZtRGF0YTogbnVsbCxcbiAgaW52YWxpZEZpbGVUeXBlOiAnJyxcbiAgdXBsb2FkRXJyb3I6IG51bGwsXG59XG5cbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XG4gICAgY2FzZSAndXBsb2FkJzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBmaWxlOiBhY3Rpb24uZmlsZSwgc3RhdHVzOiBGSUxFX0xPQURFRCB9XG4gICAgY2FzZSAnc3VibWl0JzpcbiAgICAgIHJldHVybiB7IC4uLnN0YXRlLCBpc0xvYWRpbmc6IHRydWUsIHN0YXR1czogSU5JVCB9XG4gICAgY2FzZSAnZmlsZS11cGxvYWRlZCc6XG4gICAgICByZXR1cm4ge1xuICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgaXNMb2FkaW5nOiBmYWxzZSxcbiAgICAgICAgdXNmbURhdGE6IGFjdGlvbi51c2ZtRGF0YSxcbiAgICAgICAgc3RhdHVzOiBVUExPQURfU1VDQ0VTUyxcbiAgICAgIH1cbiAgICBjYXNlICdpbnZhbGlkLWZpbGUnOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIGludmFsaWRGaWxlVHlwZTogYWN0aW9uLmZpbGVUeXBlLFxuICAgICAgICBzdGF0dXM6IElOVkFMSURfRklMRSxcbiAgICAgIH1cbiAgICBjYXNlICd1cGxvYWQtZXJyb3InOlxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgLi4uc3RhdGUsXG4gICAgICAgIGlzTG9hZGluZzogZmFsc2UsXG4gICAgICAgIHVwbG9hZEVycm9yOiBhY3Rpb24uZXJyb3IsXG4gICAgICAgIHN0YXR1czogVVBMT0FEX0VSUk9SLFxuICAgICAgfVxuICAgIGNhc2UgJ3JlbG9hZCc6XG4gICAgICByZXR1cm4geyAuLi5pbml0aWFsU3RhdGUgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gc3RhdGVcbiAgfVxufVxuXG5jb25zdCB1c2VaaXBVc2ZtRmlsZUlucHV0ID0gKFxuICBoYW5kbGVaaXBMb2FkID0gKHVzZm1EYXRhLCBmaWxlKSA9PiB7XG4gICAgY29uc29sZS5sb2coZmlsZSlcbiAgICBjb25zb2xlLmxvZyh1c2ZtRGF0YSlcbiAgfSxcbiAgc2hvdWxkVmFsaWRhdGVcbikgPT4ge1xuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxuXG4gIGNvbnN0IG9uU3VibWl0ID0gKCkgPT4ge1xuICAgIGlmIChzdGF0ZS5maWxlKSB7XG4gICAgICBkaXNwYXRjaCh7IHR5cGU6ICdzdWJtaXQnIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5hbGVydCgnTm8gemlwIGZpbGUgaGFzIGJlZW4gaW5wdXQhJylcbiAgICB9XG4gIH1cblxuICBjb25zdCBvbkNoYW5nZSA9IGUgPT4ge1xuICAgIGlmIChlLnRhcmdldC5maWxlc1swXSkge1xuICAgICAgZGlzcGF0Y2goeyB0eXBlOiAndXBsb2FkJywgZmlsZTogZS50YXJnZXQuZmlsZXNbMF0gfSlcbiAgICB9XG4gIH1cblxuICBjb25zdCB0cmlnZ2VyUmVsb2FkID0gKCkgPT4ge1xuICAgIGRpc3BhdGNoKHsgdHlwZTogJ3JlbG9hZCcgfSlcbiAgfVxuXG4gIC8vIFdoZW4gdXNlciBoYXMgc3VibWl0dGVkIHRoZSBmaWxlLCBwcm9jY2VzcyBpdCwgdmFsaWRhdGUgaXQsIGFuZCBjYWxsIHBhcmFtZXRlciBmdW5jdGlvblxuICAvLyB0byBzdG9yZSBpdC5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBwcm9jZXNzRmlsZSA9IGFzeW5jICgpID0+IHtcbiAgICAgIGlmIChzdGF0ZS5maWxlICYmIHN0YXRlLmlzTG9hZGluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIGlmIChzdGF0ZS5maWxlLnR5cGUuaW5jbHVkZXMoJ3ppcCcpKSB7XG4gICAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlciA9IGF3YWl0IHN0YXRlLmZpbGUuYXJyYXlCdWZmZXIoKVxuICAgICAgICAgICAgY29uc3QgdXNmbURhdGEgPSBhd2FpdCBhcnJheUJ1ZmZlclRvVXNmbURhdGEoYXJyYXlCdWZmZXIpXG5cbiAgICAgICAgICAgIGlmICghdXNmbURhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnaW52YWxpZC1maWxlJyxcbiAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ1ppcCBmaWxlIHdpdGggbm8gdXNmbSBmaWxlcyB3YXMgdXBsb2FkZWQhJyxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzaG91bGRWYWxpZGF0ZSkge1xuICAgICAgICAgICAgICBjb25zdCB1c2ZtVmFsaWRhdGVkRGF0YSA9IHZhbGlkYXRlVXNmbURhdGEodXNmbURhdGEpXG4gICAgICAgICAgICAgIGlmICghdXNmbVZhbGlkYXRlZERhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgICAgdHlwZTogJ2ludmFsaWQtZmlsZScsXG4gICAgICAgICAgICAgICAgICBmaWxlVHlwZTogJ0FsbCBVU0ZNIGZpbGVzIHdpdGhpbiB0aGUgemlwIHdlcmUgaW52YWxpZCEnLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICAgIHR5cGU6ICdmaWxlLXVwbG9hZGVkJyxcbiAgICAgICAgICAgICAgICB1c2ZtRGF0YTogdXNmbVZhbGlkYXRlZERhdGEsXG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBkaXNwYXRjaCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ZpbGUtdXBsb2FkZWQnLFxuICAgICAgICAgICAgICAgIHVzZm1EYXRhOiB1c2ZtRGF0YSxcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGlzcGF0Y2goe1xuICAgICAgICAgICAgICB0eXBlOiAnaW52YWxpZC1maWxlJyxcbiAgICAgICAgICAgICAgZmlsZVR5cGU6ICdOb24temlwIGZpbGUgd2FzIHVwbG9hZGVkIScsXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSA9PT0gVVNGTV9OT19CT09LSURfRVJST1IpIHtcbiAgICAgICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdHlwZTogJ2ludmFsaWQtZmlsZScsXG4gICAgICAgICAgICAgIGZpbGVUeXBlOlxuICAgICAgICAgICAgICAgICdaaXAgY29udGFpbmVkIEludmFsaWQgVVNGTSBmaWxlcyB0aGF0IGRpZCBub3QgY29udGFpbiBCb29rIElEcyEnLFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZXJyb3IubWVzc2FnZSAhPT0gQ0FOQ0VMX0ZJTEVfT1BFTl9FUlJPUikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgIGRpc3BhdGNoKHsgdHlwZTogJ3VwbG9hZC1lcnJvcicsIGVycm9yIH0pXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHByb2Nlc3NGaWxlKClcbiAgfSwgW3N0YXRlLmZpbGUsIHN0YXRlLmlzTG9hZGluZywgc2hvdWxkVmFsaWRhdGVdKVxuXG4gIC8vIFJ1biBjYWxsYmFjayBmdW5jdGlvbiB3aGVuIHVzZm0gZGF0YSBpcyBzdWNjZXNzZnVsbHkgdXBsb2FkZWRcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3RhdGUudXNmbURhdGEpIGhhbmRsZVppcExvYWQoc3RhdGUudXNmbURhdGEsIHN0YXRlLmZpbGUpXG4gIH0sIFtzdGF0ZS51c2ZtRGF0YV0pXG5cbiAgcmV0dXJuIHtcbiAgICAuLi5zdGF0ZSxcbiAgICBvbkNoYW5nZSxcbiAgICBvblN1Ym1pdCxcbiAgICB0cmlnZ2VyUmVsb2FkLFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVppcFVzZm1GaWxlSW5wdXRcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUE7QUFFQTtBQUdnQztBQUFBLCtDQUpoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQSxJQUFNQSxzQkFBc0IsR0FDMUIsc0RBQXNEO0FBQ3hELElBQU1DLG9CQUFvQixHQUFHLDhDQUE4QztBQUMzRSxJQUFNQyxXQUFXLEdBQUcsYUFBYTtBQUNqQyxJQUFNQyxJQUFJLEdBQUcsTUFBTTtBQUNuQixJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQyxZQUFZLEdBQUcsY0FBYztBQUNuQyxJQUFNQyxjQUFjLEdBQUcsZ0JBQWdCO0FBRXZDLElBQU1DLFlBQVksR0FBRztFQUNu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