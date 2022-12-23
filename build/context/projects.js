"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProjectsProvider = void 0;
var _react = _interopRequireWildcard(require("react"));
var _zipUsfmHelpers = require("../utils/zipUsfmHelpers");
var _useLocalForage2 = _interopRequireDefault(require("../hooks/use-local-forage"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var ProjectsContext = /*#__PURE__*/(0, _react.createContext)();
var ProjectsProvider = function ProjectsProvider(_ref) {
  var children = _ref.children;
  var _useState = (0, _react.useState)([]),
    _useState2 = _slicedToArray(_useState, 2),
    projects = _useState2[0],
    setProjects = _useState2[1];
  var _useState3 = (0, _react.useState)(null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedProject = _useState4[0],
    setSelectedProject = _useState4[1];
  var _useLocalForage = (0, _useLocalForage2["default"])(),
    getAllFromStore = _useLocalForage.getAllFromStore,
    setInStore = _useLocalForage.setInStore,
    deleteFromStore = _useLocalForage.deleteFromStore;
  var projectExists = function projectExists(projectName) {
    return projects.some(function (project) {
      return project.name === projectName;
    });
  };
  var fetchProjects = (0, _react.useCallback)( /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
    var storeData, projectPromises, _projects;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return getAllFromStore();
        case 2:
          storeData = _context2.sent;
          projectPromises = storeData.map( /*#__PURE__*/function () {
            var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(data) {
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.t0 = data.id;
                    _context.t1 = data.key;
                    _context.next = 4;
                    return (0, _zipUsfmHelpers.arrayBufferToUsfmData)(data.value);
                  case 4:
                    _context.t2 = _context.sent;
                    return _context.abrupt("return", {
                      id: _context.t0,
                      name: _context.t1,
                      data: _context.t2
                    });
                  case 6:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x2) {
              return _ref3.apply(this, arguments);
            };
          }());
          _context2.next = 6;
          return Promise.all(projectPromises);
        case 6:
          _projects = _context2.sent;
          setProjects(_projects);
        case 8:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  })), [getAllFromStore]);
  var getProject = function getProject(projectName) {
    var foundProject = projects.find(function (project) {
      return project.name === projectName;
    });
    return _objectSpread({}, foundProject);
  };
  var addProject = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(projectName, usfmArrayBuffer) {
      var newProject;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!projectExists(projectName)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return", false);
          case 2:
            _context3.t0 = projects.length;
            _context3.t1 = projectName;
            _context3.next = 6;
            return (0, _zipUsfmHelpers.arrayBufferToUsfmData)(usfmArrayBuffer);
          case 6:
            _context3.t2 = _context3.sent;
            newProject = {
              id: _context3.t0,
              name: _context3.t1,
              data: _context3.t2
            };
            _context3.next = 10;
            return setInStore(projectName, usfmArrayBuffer);
          case 10:
            setProjects([].concat(_toConsumableArray(projects), [newProject]));
            return _context3.abrupt("return", true);
          case 12:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function addProject(_x3, _x4) {
      return _ref4.apply(this, arguments);
    };
  }();
  var updateProject = /*#__PURE__*/function () {
    var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(projectName, usfmData) {
      var updatedProjects, _usfmDataToFileData, usfmArrayBuffer;
      return _regeneratorRuntime().wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (projectExists(projectName)) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return", false);
          case 2:
            updatedProjects = projects.map(function (project) {
              if (project.name === projectName) {
                return _objectSpread(_objectSpread({}, project), {}, {
                  data: usfmData
                });
              }
              return project;
            });
            _usfmDataToFileData = (0, _zipUsfmHelpers.usfmDataToFileData)(usfmData), usfmArrayBuffer = _usfmDataToFileData.usfmArrayBuffer;
            _context4.next = 6;
            return setInStore(projectName, usfmArrayBuffer);
          case 6:
            setProjects(updatedProjects);
            return _context4.abrupt("return", true);
          case 8:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }));
    return function updateProject(_x5, _x6) {
      return _ref5.apply(this, arguments);
    };
  }();
  var deleteProject = /*#__PURE__*/function () {
    var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(projectName) {
      return _regeneratorRuntime().wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            if (projectExists(projectName)) {
              _context5.next = 2;
              break;
            }
            return _context5.abrupt("return", false);
          case 2:
            _context5.next = 4;
            return deleteFromStore(projectName);
          case 4:
            setProjects(projects.filter(function (project) {
              return project.name !== projectName;
            }));
            return _context5.abrupt("return", true);
          case 6:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }));
    return function deleteProject(_x7) {
      return _ref6.apply(this, arguments);
    };
  }();
  var selectProject = function selectProject(project) {
    console.log(project);
    setSelectedProject(_objectSpread({}, project));
  };
  var context = {
    projects: projects,
    selectedProject: selectedProject,
    fetchProjects: fetchProjects,
    getProject: getProject,
    addProject: addProject,
    updateProject: updateProject,
    deleteProject: deleteProject,
    selectProject: selectProject
  };
  return /*#__PURE__*/_react["default"].createElement(ProjectsContext.Provider, {
    value: context
  }, children);
};
exports.ProjectsProvider = ProjectsProvider;
var _default = ProjectsContext;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0c0NvbnRleHQiLCJjcmVhdGVDb250ZXh0IiwiUHJvamVjdHNQcm92aWRlciIsImNoaWxkcmVuIiwidXNlU3RhdGUiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwic2VsZWN0ZWRQcm9qZWN0Iiwic2V0U2VsZWN0ZWRQcm9qZWN0IiwidXNlTG9jYWxGb3JhZ2UiLCJnZXRBbGxGcm9tU3RvcmUiLCJzZXRJblN0b3JlIiwiZGVsZXRlRnJvbVN0b3JlIiwicHJvamVjdEV4aXN0cyIsInByb2plY3ROYW1lIiwic29tZSIsInByb2plY3QiLCJuYW1lIiwiZmV0Y2hQcm9qZWN0cyIsInVzZUNhbGxiYWNrIiwic3RvcmVEYXRhIiwicHJvamVjdFByb21pc2VzIiwibWFwIiwiZGF0YSIsImlkIiwia2V5IiwiYXJyYXlCdWZmZXJUb1VzZm1EYXRhIiwidmFsdWUiLCJQcm9taXNlIiwiYWxsIiwiX3Byb2plY3RzIiwiZ2V0UHJvamVjdCIsImZvdW5kUHJvamVjdCIsImZpbmQiLCJhZGRQcm9qZWN0IiwidXNmbUFycmF5QnVmZmVyIiwibGVuZ3RoIiwibmV3UHJvamVjdCIsInVwZGF0ZVByb2plY3QiLCJ1c2ZtRGF0YSIsInVwZGF0ZWRQcm9qZWN0cyIsInVzZm1EYXRhVG9GaWxlRGF0YSIsImRlbGV0ZVByb2plY3QiLCJmaWx0ZXIiLCJzZWxlY3RQcm9qZWN0IiwiY29uc29sZSIsImxvZyIsImNvbnRleHQiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvY29udGV4dC9wcm9qZWN0cy5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VDYWxsYmFjayB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICBhcnJheUJ1ZmZlclRvVXNmbURhdGEsXG4gIHVzZm1EYXRhVG9GaWxlRGF0YSxcbn0gZnJvbSBcIi4uL3V0aWxzL3ppcFVzZm1IZWxwZXJzXCI7XG5pbXBvcnQgdXNlTG9jYWxGb3JhZ2UgZnJvbSBcIi4uL2hvb2tzL3VzZS1sb2NhbC1mb3JhZ2VcIjtcblxuY29uc3QgUHJvamVjdHNDb250ZXh0ID0gY3JlYXRlQ29udGV4dCgpO1xuXG5jb25zdCBQcm9qZWN0c1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3NlbGVjdGVkUHJvamVjdCwgc2V0U2VsZWN0ZWRQcm9qZWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCB7IGdldEFsbEZyb21TdG9yZSwgc2V0SW5TdG9yZSwgZGVsZXRlRnJvbVN0b3JlIH0gPSB1c2VMb2NhbEZvcmFnZSgpO1xuXG4gIGNvbnN0IHByb2plY3RFeGlzdHMgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICByZXR1cm4gcHJvamVjdHMuc29tZSgocHJvamVjdCkgPT4gcHJvamVjdC5uYW1lID09PSBwcm9qZWN0TmFtZSk7XG4gIH07XG5cbiAgY29uc3QgZmV0Y2hQcm9qZWN0cyA9IHVzZUNhbGxiYWNrKGFzeW5jICgpID0+IHtcbiAgICBjb25zdCBzdG9yZURhdGEgPSBhd2FpdCBnZXRBbGxGcm9tU3RvcmUoKTtcbiAgICBjb25zdCBwcm9qZWN0UHJvbWlzZXMgPSBzdG9yZURhdGEubWFwKGFzeW5jIChkYXRhKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgbmFtZTogZGF0YS5rZXksXG4gICAgICAgIGRhdGE6IGF3YWl0IGFycmF5QnVmZmVyVG9Vc2ZtRGF0YShkYXRhLnZhbHVlKSxcbiAgICAgICAgLy8gVE9ETzogKG1heWJlKSBkZXRlY3QgbGFuZ3VhZ2UgaW4gZGF0YSBhbmQgc3RvcmVcbiAgICAgICAgLy8gbGFuZ3VhZ2U6IGRldGVjdExhbmd1YWdlKGRhdGEudmFsdWUpXG4gICAgICB9O1xuICAgIH0pO1xuICAgIGNvbnN0IF9wcm9qZWN0cyA9IGF3YWl0IFByb21pc2UuYWxsKHByb2plY3RQcm9taXNlcyk7XG4gICAgc2V0UHJvamVjdHMoX3Byb2plY3RzKTtcbiAgfSwgW2dldEFsbEZyb21TdG9yZV0pO1xuXG4gIGNvbnN0IGdldFByb2plY3QgPSAocHJvamVjdE5hbWUpID0+IHtcbiAgICBjb25zdCBmb3VuZFByb2plY3QgPSBwcm9qZWN0cy5maW5kKFxuICAgICAgKHByb2plY3QpID0+IHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWVcbiAgICApO1xuICAgIHJldHVybiB7IC4uLmZvdW5kUHJvamVjdCB9O1xuICB9O1xuXG4gIGNvbnN0IGFkZFByb2plY3QgPSBhc3luYyAocHJvamVjdE5hbWUsIHVzZm1BcnJheUJ1ZmZlcikgPT4ge1xuICAgIGlmIChwcm9qZWN0RXhpc3RzKHByb2plY3ROYW1lKSkge1xuICAgICAgLy8gY29tcGxhaW4gdG8gdGhlIHVzZXJcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdQcm9qZWN0ID0ge1xuICAgICAgaWQ6IHByb2plY3RzLmxlbmd0aCxcbiAgICAgIG5hbWU6IHByb2plY3ROYW1lLFxuICAgICAgZGF0YTogYXdhaXQgYXJyYXlCdWZmZXJUb1VzZm1EYXRhKHVzZm1BcnJheUJ1ZmZlciksXG4gICAgfTtcblxuICAgIGF3YWl0IHNldEluU3RvcmUocHJvamVjdE5hbWUsIHVzZm1BcnJheUJ1ZmZlcik7XG4gICAgc2V0UHJvamVjdHMoWy4uLnByb2plY3RzLCBuZXdQcm9qZWN0XSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3QgdXBkYXRlUHJvamVjdCA9IGFzeW5jIChwcm9qZWN0TmFtZSwgdXNmbURhdGEpID0+IHtcbiAgICBpZiAoIXByb2plY3RFeGlzdHMocHJvamVjdE5hbWUpKSB7XG4gICAgICAvLyBjb21wbGFpbiB0byB0aGUgdXNlclxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGNvbnN0IHVwZGF0ZWRQcm9qZWN0cyA9IHByb2plY3RzLm1hcCgocHJvamVjdCkgPT4ge1xuICAgICAgaWYgKHByb2plY3QubmFtZSA9PT0gcHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJvamVjdCwgZGF0YTogdXNmbURhdGEgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBwcm9qZWN0O1xuICAgIH0pO1xuICAgIGNvbnN0IHsgdXNmbUFycmF5QnVmZmVyIH0gPSB1c2ZtRGF0YVRvRmlsZURhdGEodXNmbURhdGEpO1xuXG4gICAgYXdhaXQgc2V0SW5TdG9yZShwcm9qZWN0TmFtZSwgdXNmbUFycmF5QnVmZmVyKTtcbiAgICBzZXRQcm9qZWN0cyh1cGRhdGVkUHJvamVjdHMpO1xuICAgIHJldHVybiB0cnVlO1xuICB9O1xuXG4gIGNvbnN0IGRlbGV0ZVByb2plY3QgPSBhc3luYyAocHJvamVjdE5hbWUpID0+IHtcbiAgICBpZiAoIXByb2plY3RFeGlzdHMocHJvamVjdE5hbWUpKSB7XG4gICAgICAvLyBjb21wbGFpbiB0byB0aGUgdXNlclxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIGF3YWl0IGRlbGV0ZUZyb21TdG9yZShwcm9qZWN0TmFtZSk7XG4gICAgc2V0UHJvamVjdHMocHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0Lm5hbWUgIT09IHByb2plY3ROYW1lKSk7XG4gICAgcmV0dXJuIHRydWU7XG4gIH07XG5cbiAgY29uc3Qgc2VsZWN0UHJvamVjdCA9IChwcm9qZWN0KSA9PiB7XG4gICAgY29uc29sZS5sb2cocHJvamVjdCk7XG4gICAgc2V0U2VsZWN0ZWRQcm9qZWN0KHsgLi4ucHJvamVjdCB9KTtcbiAgfTtcblxuICBjb25zdCBjb250ZXh0ID0ge1xuICAgIHByb2plY3RzLFxuICAgIHNlbGVjdGVkUHJvamVjdCxcbiAgICBmZXRjaFByb2plY3RzLFxuICAgIGdldFByb2plY3QsXG4gICAgYWRkUHJvamVjdCxcbiAgICB1cGRhdGVQcm9qZWN0LFxuICAgIGRlbGV0ZVByb2plY3QsXG4gICAgc2VsZWN0UHJvamVjdCxcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxQcm9qZWN0c0NvbnRleHQuUHJvdmlkZXIgdmFsdWU9e2NvbnRleHR9PlxuICAgICAge2NoaWxkcmVufVxuICAgIDwvUHJvamVjdHNDb250ZXh0LlByb3ZpZGVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgUHJvamVjdHNQcm92aWRlciB9O1xuZXhwb3J0IGRlZmF1bHQgUHJvamVjdHNDb250ZXh0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQTtBQUlBO0FBQXVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtDQUx2RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQSxJQUFNQSxlQUFlLGdCQUFHLElBQUFDLG9CQUFhLEdBQUU7QUFFdkMsSUFBTUMsZ0JBQWdCLEdBQUcsU0FBbkJBLGdCQUFnQixPQUFxQjtFQUFBLElBQWZDLFFBQVEsUUFBUkEsUUFBUTtFQUNsQyxnQkFBZ0MsSUFBQUMsZUFBUSxFQUFDLEVBQUUsQ0FBQztJQUFBO0lBQXJDQyxRQUFRO0lBQUVDLFdBQVc7RUFDNUIsaUJBQThDLElBQUFGLGVBQVEsRUFBQyxJQUFJLENBQUM7SUFBQTtJQUFyREcsZUFBZTtJQUFFQyxrQkFBa0I7RUFDMUMsc0JBQXlELElBQUFDLDJCQUFjLEdBQUU7SUFBakVDLGVBQWUsbUJBQWZBLGVBQWU7SUFBRUMsVUFBVSxtQkFBVkEsVUFBVTtJQUFFQyxlQUFlLG1CQUFmQSxlQUFlO0VBRXBELElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBYSxDQUFJQyxXQUFXLEVBQUs7SUFDckMsT0FBT1QsUUFBUSxDQUFDVSxJQUFJLENBQUMsVUFBQ0MsT0FBTztNQUFBLE9BQUtBLE9BQU8sQ0FBQ0MsSUFBSSxLQUFLSCxXQUFXO0lBQUEsRUFBQztFQUNqRSxDQUFDO0VBRUQsSUFBTUksYUFBYSxHQUFHLElBQUFDLGtCQUFXLDJFQUFDO0lBQUE7SUFBQTtNQUFBO1FB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