"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _ProjectItem = _interopRequireDefault(require("./ProjectItem"));
var _useProjectsContext2 = _interopRequireDefault(require("../../hooks/use-projects-context"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProjectList = function ProjectList() {
  var _useProjectsContext = (0, _useProjectsContext2["default"])(),
    projects = _useProjectsContext.projects;
  var renderedProjectItems = projects.map(function (project) {
    return /*#__PURE__*/_react["default"].createElement(_ProjectItem["default"], {
      key: project.name,
      project: project
    });
  });
  return /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h2", null, "Project List"), /*#__PURE__*/_react["default"].createElement("table", null, /*#__PURE__*/_react["default"].createElement("thead", null, /*#__PURE__*/_react["default"].createElement("tr", null, /*#__PURE__*/_react["default"].createElement("th", null, "Project Name"), /*#__PURE__*/_react["default"].createElement("th", null, "Books"))), /*#__PURE__*/_react["default"].createElement("tbody", null, renderedProjectItems)));
};
var _default = ProjectList;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0TGlzdCIsInVzZVByb2plY3RzQ29udGV4dCIsInByb2plY3RzIiwicmVuZGVyZWRQcm9qZWN0SXRlbXMiLCJtYXAiLCJwcm9qZWN0IiwibmFtZSJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0L1Byb2plY3RMaXN0LmpzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmltcG9ydCBQcm9qZWN0SXRlbSBmcm9tIFwiLi9Qcm9qZWN0SXRlbVwiO1xuaW1wb3J0IHVzZVByb2plY3RzQ29udGV4dCBmcm9tIFwiLi4vLi4vaG9va3MvdXNlLXByb2plY3RzLWNvbnRleHRcIjtcblxuY29uc3QgUHJvamVjdExpc3QgPSAoKSA9PiB7XG4gIGNvbnN0IHsgcHJvamVjdHMgfSA9IHVzZVByb2plY3RzQ29udGV4dCgpO1xuXG4gIGNvbnN0IHJlbmRlcmVkUHJvamVjdEl0ZW1zID0gcHJvamVjdHMubWFwKChwcm9qZWN0KSA9PiAoXG4gICAgPFByb2plY3RJdGVtIGtleT17cHJvamVjdC5uYW1lfSBwcm9qZWN0PXtwcm9qZWN0fSAvPlxuICApKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDI+UHJvamVjdCBMaXN0PC9oMj5cbiAgICAgIDx0YWJsZT5cbiAgICAgICAgPHRoZWFkPlxuICAgICAgICAgIDx0cj5cbiAgICAgICAgICAgIDx0aD5Qcm9qZWN0IE5hbWU8L3RoPlxuICAgICAgICAgICAgPHRoPkJvb2tzPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHk+e3JlbmRlcmVkUHJvamVjdEl0ZW1zfTwvdGJvZHk+XG4gICAgICA8L3RhYmxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgUHJvamVjdExpc3Q7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUFrRTtBQUVsRSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBVyxHQUFTO0VBQ3hCLDBCQUFxQixJQUFBQywrQkFBa0IsR0FBRTtJQUFqQ0MsUUFBUSx1QkFBUkEsUUFBUTtFQUVoQixJQUFNQyxvQkFBb0IsR0FBR0QsUUFBUSxDQUFDRSxHQUFHLENBQUMsVUFBQ0MsT0FBTztJQUFBLG9CQUNoRCxnQ0FBQyx1QkFBVztNQUFDLEdBQUcsRUFBRUEsT0FBTyxDQUFDQyxJQUFLO01BQUMsT0FBTyxFQUFFRDtJQUFRLEVBQUc7RUFBQSxDQUNyRCxDQUFDO0VBRUYsb0JBQ0UsMERBQ0UsNENBQUksY0FBWSxDQUFLLGVBQ3JCLDREQUNFLDREQUNFLHlEQUNFLDRDQUFJLGNBQVksQ0FBSyxlQUNyQiw0Q0FBSSxPQUFLLENBQUssQ0FDWCxDQUNDLGVBQ1IsK0NBQVFGLG9CQUFvQixDQUFTLENBQy9CLENBQ0o7QUFFVixDQUFDO0FBQUMsZUFFYUgsV0FBVztBQUFBIn0=