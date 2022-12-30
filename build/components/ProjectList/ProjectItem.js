"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireDefault(require("react"));
var _useProjectsContext2 = _interopRequireDefault(require("../../hooks/useProjectsContext"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var ProjectItem = function ProjectItem(_ref) {
  var project = _ref.project;
  var _useProjectsContext = (0, _useProjectsContext2["default"])(),
    selectProject = _useProjectsContext.selectProject;
  return /*#__PURE__*/_react["default"].createElement("tr", {
    "data-cy": "project-item",
    onClick: function onClick() {
      return selectProject(project);
    },
    style: {
      cursor: 'pointer'
    }
  }, /*#__PURE__*/_react["default"].createElement("td", null, project.name), /*#__PURE__*/_react["default"].createElement("td", null, project.data.length));
};
var _default = ProjectItem;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcm9qZWN0SXRlbSIsInByb2plY3QiLCJ1c2VQcm9qZWN0c0NvbnRleHQiLCJzZWxlY3RQcm9qZWN0IiwiY3Vyc29yIiwibmFtZSIsImRhdGEiLCJsZW5ndGgiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0TGlzdC9Qcm9qZWN0SXRlbS5qc3giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5pbXBvcnQgdXNlUHJvamVjdHNDb250ZXh0IGZyb20gJy4uLy4uL2hvb2tzL3VzZVByb2plY3RzQ29udGV4dCdcblxuY29uc3QgUHJvamVjdEl0ZW0gPSAoeyBwcm9qZWN0IH0pID0+IHtcbiAgY29uc3QgeyBzZWxlY3RQcm9qZWN0IH0gPSB1c2VQcm9qZWN0c0NvbnRleHQoKVxuXG4gIHJldHVybiAoXG4gICAgPHRyXG4gICAgICBkYXRhLWN5PSdwcm9qZWN0LWl0ZW0nXG4gICAgICBvbkNsaWNrPXsoKSA9PiBzZWxlY3RQcm9qZWN0KHByb2plY3QpfVxuICAgICAgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX1cbiAgICA+XG4gICAgICA8dGQ+e3Byb2plY3QubmFtZX08L3RkPlxuICAgICAgPHRkPntwcm9qZWN0LmRhdGEubGVuZ3RofTwvdGQ+XG4gICAgPC90cj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcm9qZWN0SXRlbVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUVBO0FBQStEO0FBRS9ELElBQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFXLE9BQW9CO0VBQUEsSUFBZEMsT0FBTyxRQUFQQSxPQUFPO0VBQzVCLDBCQUEwQixJQUFBQywrQkFBa0IsR0FBRTtJQUF0Q0MsYUFBYSx1QkFBYkEsYUFBYTtFQUVyQixvQkFDRTtJQUNFLFdBQVEsY0FBYztJQUN0QixPQUFPLEVBQUU7TUFBQSxPQUFNQSxhQUFhLENBQUNGLE9BQU8sQ0FBQztJQUFBLENBQUM7SUFDdEMsS0FBSyxFQUFFO01BQUVHLE1BQU0sRUFBRTtJQUFVO0VBQUUsZ0JBRTdCLDRDQUFLSCxPQUFPLENBQUNJLElBQUksQ0FBTSxlQUN2Qiw0Q0FBS0osT0FBTyxDQUFDSyxJQUFJLENBQUNDLE1BQU0sQ0FBTSxDQUMzQjtBQUVULENBQUM7QUFBQSxlQUVjUCxXQUFXO0FBQUEifQ==