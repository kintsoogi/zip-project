"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = require("react");
var _localforage = _interopRequireDefault(require("localforage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
var useLocalForage = function useLocalForage() {
  var isStoreEmpty = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
      var storeLength;
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _localforage["default"].length();
          case 3:
            storeLength = _context.sent;
            if (!storeLength) {
              _context.next = 6;
              break;
            }
            return _context.abrupt("return", false);
          case 6:
            return _context.abrupt("return", true);
          case 9:
            _context.prev = 9;
            _context.t0 = _context["catch"](0);
            console.log("Error while checking if localforage store was empty: ", _context.t0);
          case 12:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[0, 9]]);
    }));
    return function isStoreEmpty() {
      return _ref.apply(this, arguments);
    };
  }();
  var getAllFromStore = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var result, iteratorCallback;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          result = [];
          iteratorCallback = function iteratorCallback(value, key, iterationNumber) {
            result = [].concat(_toConsumableArray(result), [{
              id: iterationNumber - 1,
              key: key,
              value: value
            }]);
          };
          _context2.prev = 2;
          _context2.next = 5;
          return _localforage["default"].iterate(iteratorCallback);
        case 5:
          return _context2.abrupt("return", result);
        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          console.log("Error while iterating over localforage...", _context2.t0);
          return _context2.abrupt("return", false);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 8]]);
  })), []);
  var getFromStore = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(key) {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return _localforage["default"].getItem(key);
          case 3:
            return _context3.abrupt("return", _context3.sent);
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.log("Error while retrieving ".concat(key, " from IndexedDB..."), _context3.t0);
            return _context3.abrupt("return", false);
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 6]]);
    }));
    return function getFromStore(_x) {
      return _ref3.apply(this, arguments);
    };
  }();
  var setInStore = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(key, value) {
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.prev = 0;
            _context4.next = 3;
            return _localforage["default"].setItem(key, value);
          case 3:
            return _context4.abrupt("return", true);
          case 6:
            _context4.prev = 6;
            _context4.t0 = _context4["catch"](0);
            console.log("Error while storing ".concat(key, " in IndexedDB..."), _context4.t0);
            return _context4.abrupt("return", false);
          case 10:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[0, 6]]);
    }));
    return function setInStore(_x2, _x3) {
      return _ref4.apply(this, arguments);
    };
  }();
  var deleteFromStore = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(key) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return _localforage["default"].removeItem(key);
          case 3:
            _context5.next = 9;
            break;
          case 5:
            _context5.prev = 5;
            _context5.t0 = _context5["catch"](0);
            console.log("Error while deleting ".concat(key, " from IndexedDB..."), _context5.t0);
            return _context5.abrupt("return", false);
          case 9:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[0, 5]]);
    }));
    return function deleteFromStore(_x4) {
      return _ref5.apply(this, arguments);
    };
  }();
  return {
    isStoreEmpty: isStoreEmpty,
    getAllFromStore: getAllFromStore,
    getFromStore: getFromStore,
    setInStore: setInStore,
    deleteFromStore: deleteFromStore
  };
};
var _default = useLocalForage;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJ1c2VMb2NhbEZvcmFnZSIsImlzU3RvcmVFbXB0eSIsImxvY2FsZm9yYWdlIiwibGVuZ3RoIiwic3RvcmVMZW5ndGgiLCJjb25zb2xlIiwibG9nIiwiZ2V0QWxsRnJvbVN0b3JlIiwidXNlQ2FsbGJhY2siLCJyZXN1bHQiLCJpdGVyYXRvckNhbGxiYWNrIiwidmFsdWUiLCJrZXkiLCJpdGVyYXRpb25OdW1iZXIiLCJpZCIsIml0ZXJhdGUiLCJnZXRGcm9tU3RvcmUiLCJnZXRJdGVtIiwic2V0SW5TdG9yZSIsInNldEl0ZW0iLCJkZWxldGVGcm9tU3RvcmUiLCJyZW1vdmVJdGVtIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL2hvb2tzL3VzZS1sb2NhbC1mb3JhZ2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2sgfSBmcm9tIFwicmVhY3RcIjtcblxuaW1wb3J0IGxvY2FsZm9yYWdlIGZyb20gXCJsb2NhbGZvcmFnZVwiO1xuXG5jb25zdCB1c2VMb2NhbEZvcmFnZSA9ICgpID0+IHtcbiAgY29uc3QgaXNTdG9yZUVtcHR5ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBzdG9yZUxlbmd0aCA9IGF3YWl0IGxvY2FsZm9yYWdlLmxlbmd0aCgpO1xuICAgICAgaWYgKHN0b3JlTGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coXG4gICAgICAgIFwiRXJyb3Igd2hpbGUgY2hlY2tpbmcgaWYgbG9jYWxmb3JhZ2Ugc3RvcmUgd2FzIGVtcHR5OiBcIixcbiAgICAgICAgZXJyb3JcbiAgICAgICk7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGdldEFsbEZyb21TdG9yZSA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBjb25zdCBpdGVyYXRvckNhbGxiYWNrID0gKHZhbHVlLCBrZXksIGl0ZXJhdGlvbk51bWJlcikgPT4ge1xuICAgICAgcmVzdWx0ID0gWy4uLnJlc3VsdCwgeyBpZDogaXRlcmF0aW9uTnVtYmVyIC0gMSwga2V5LCB2YWx1ZSB9XTtcbiAgICB9O1xuXG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGxvY2FsZm9yYWdlLml0ZXJhdGUoaXRlcmF0b3JDYWxsYmFjayk7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIGl0ZXJhdGluZyBvdmVyIGxvY2FsZm9yYWdlLi4uXCIsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0sIFtdKTtcblxuICBjb25zdCBnZXRGcm9tU3RvcmUgPSBhc3luYyAoa2V5KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBhd2FpdCBsb2NhbGZvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSByZXRyaWV2aW5nICR7a2V5fSBmcm9tIEluZGV4ZWREQi4uLmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgc2V0SW5TdG9yZSA9IGFzeW5jIChrZXksIHZhbHVlKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGxvY2FsZm9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoaWxlIHN0b3JpbmcgJHtrZXl9IGluIEluZGV4ZWREQi4uLmAsIGVycm9yKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgZGVsZXRlRnJvbVN0b3JlID0gYXN5bmMgKGtleSkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBsb2NhbGZvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSBkZWxldGluZyAke2tleX0gZnJvbSBJbmRleGVkREIuLi5gLCBlcnJvcik7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB7XG4gICAgaXNTdG9yZUVtcHR5LFxuICAgIGdldEFsbEZyb21TdG9yZSxcbiAgICBnZXRGcm9tU3RvcmUsXG4gICAgc2V0SW5TdG9yZSxcbiAgICBkZWxldGVGcm9tU3RvcmUsXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCB1c2VMb2NhbEZvcmFnZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBRUE7QUFBc0M7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQ0FEdEM7QUFBQTtBQUFBO0FBR0EsSUFBTUEsY0FBYyxHQUFHLFNBQWpCQSxjQUFjLEdBQVM7RUFDM0IsSUFBTUMsWUFBWTtJQUFBLHNFQUFHO01BQUE7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUEsT0FFU0MsdUJBQVcsQ0FBQ0MsTUFBTSxFQUFFO1VBQUE7WUFBeENDLFdBQVc7WUFBQSxLQUNiQSxXQUFXO2NBQUE7Y0FBQTtZQUFBO1lBQUEsaUNBQVMsS0FBSztVQUFBO1lBQUEsaUNBQ3RCLElBQUk7VUFBQTtZQUFBO1lBQUE7WUFFWEMsT0FBTyxDQUFDQyxHQUFHLENBQ1QsdURBQXVELGNBRXhEO1VBQUM7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBLENBRUw7SUFBQSxnQkFYS0wsWUFBWTtNQUFBO0lBQUE7RUFBQSxHQVdqQjtFQUVELElBQU1NLGVBQWUsR0FBRyxJQUFBQyxrQkFBVywyRUFBQztJQUFBO0lBQUE7TUFBQTtRQUFBO1VBQzlCQyxNQUFNLEdBQUcsRUFBRTtVQUVUQyxnQkFBZ0IsR0FBRyxTQUFuQkEsZ0JBQWdCLENBQUlDLEtBQUssRUFBRUMsR0FBRyxFQUFFQyxlQUFlLEVBQUs7WUFDeERKLE1BQU0sZ0NBQU9BLE1BQU0sSUFBRTtjQUFFSyxFQUFFLEVBQUVELGVBQWUsR0FBRyxDQUFDO2NBQUVELEdBQUcsRUFBSEEsR0FBRztjQUFFRCxLQUFLLEVBQUxBO1lBQU0sQ0FBQyxFQUFDO1VBQy9ELENBQUM7VUFBQTtVQUFBO1VBQUEsT0FHT1QsdUJBQVcsQ0FBQ2EsT0FBTyxDQUFDTCxnQkFBZ0IsQ0FBQztRQUFBO1VBQUEsa0NBQ3BDRCxNQUFNO1FBQUE7VUFBQTtVQUFBO1VBRWJKLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLDJDQUEyQyxlQUFRO1VBQUMsa0NBQ3pELEtBQUs7UUFBQTtRQUFBO1VBQUE7TUFBQTtJQUFBO0VBQUEsQ0FFZixJQUFFLEVBQUUsQ0FBQztFQUVOLElBQU1VLFlBQVk7SUFBQSx1RUFBRyxrQkFBT0osR0FBRztNQUFBO1FBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQSxPQUVkVix1QkFBVyxDQUFDZSxPQUFPLENBQUNMLEdBQUcsQ0FBQztVQUFBO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFFckNQLE9BQU8sQ0FBQ0MsR0FBRyxrQ0FBMkJNLEdBQUcsc0NBQTRCO1lBQUMsa0NBQy9ELEtBQUs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUEsQ0FFZjtJQUFBLGdCQVBLSSxZQUFZO01BQUE7SUFBQTtFQUFBLEdBT2pCO0VBRUQsSUFBTUUsVUFBVTtJQUFBLHVFQUFHLGtCQUFPTixHQUFHLEVBQUVELEtBQUs7TUFBQTtRQUFBO1VBQUE7WUFBQTtZQUFBO1lBQUEsT0FFMUJULHVCQUFXLENBQUNpQixPQUFPLENBQUNQLEdBQUcsRUFBRUQsS0FBSyxDQUFDO1VBQUE7WUFBQSxrQ0FDOUIsSUFBSTtVQUFBO1lBQUE7WUFBQTtZQUVYTixPQUFPLENBQUNDLEdBQUcsK0JBQXdCTSxHQUFHLG9DQUEwQjtZQUFDLGtDQUMxRCxLQUFLO1VBQUE7VUFBQTtZQUFBO1FBQUE7TUFBQTtJQUFBLENBRWY7SUFBQSxnQkFSS00sVUFBVTtNQUFBO0lBQUE7RUFBQSxHQVFmO0VBRUQsSUFBTUUsZUFBZTtJQUFBLHVFQUFHLGtCQUFPUixHQUFHO01BQUE7UUFBQTtVQUFBO1lBQUE7WUFBQTtZQUFBLE9BRXhCVix1QkFBVyxDQUFDbUIsVUFBVSxDQUFDVCxHQUFHLENBQUM7VUFBQTtZQUFBO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFFakNQLE9BQU8sQ0FBQ0MsR0FBRyxnQ0FBeUJNLEdBQUcsc0NBQTRCO1lBQUMsa0NBQzdELEtBQUs7VUFBQTtVQUFBO1lBQUE7UUFBQTtNQUFBO0lBQUEsQ0FFZjtJQUFBLGdCQVBLUSxlQUFlO01BQUE7SUFBQTtFQUFBLEdBT3BCO0VBRUQsT0FBTztJQUNMbkIsWUFBWSxFQUFaQSxZQUFZO0lBQ1pNLGVBQWUsRUFBZkEsZUFBZTtJQUNmUyxZQUFZLEVBQVpBLFlBQVk7SUFDWkUsVUFBVSxFQUFWQSxVQUFVO0lBQ1ZFLGVBQWUsRUFBZkE7RUFDRixDQUFDO0FBQ0gsQ0FBQztBQUFDLGVBRWFwQixjQUFjO0FBQUEifQ==