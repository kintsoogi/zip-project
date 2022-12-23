"use strict";

var _CreateZipProject = _interopRequireDefault(require("./CreateZipProject"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
describe("<CreateZipProject>", function () {
  it("mounts", function () {
    cy.mount( /*#__PURE__*/React.createElement(_CreateZipProject["default"], null));
  });
  it("responds with an error when a user enters a file other than zip", function () {
    cy.mount( /*#__PURE__*/React.createElement(_CreateZipProject["default"], null));
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/example.json");
    cy.get("button").click();
    cy.get("p").should("contains.text", "Invalid file upload: Non-zip file was uploaded!");
  });
  it("responds with an error when a user enters a zip file without usfm files", function () {
    cy.mount( /*#__PURE__*/React.createElement(_CreateZipProject["default"], null));
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/lorem.zip");
    cy.get("button").click();
    cy.get("p").should("contains.text", "Invalid file upload: Zip file with no usfm files was uploaded!");
  });
  it("responds with an error when a user inputs a zip file with INVALID usfm files when validation is turned on", function () {
    cy.mount( /*#__PURE__*/React.createElement(_CreateZipProject["default"], null));
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/invalid_usfm.zip");
    cy.get("button").click();
    cy.get("p").should("contains.text", "Invalid file upload: All USFM files within the zip were invalid!");
  });
  it("finishes properly if the user enters a valid zip file containing usfm files", function () {
    cy.mount( /*#__PURE__*/React.createElement(_CreateZipProject["default"], null));
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/john.zip");
    cy.get("button").click();
    cy.get("p").should("contains.text", "wohoo it worked!");
  });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJkZXNjcmliZSIsIml0IiwiY3kiLCJtb3VudCIsImdldCIsInNlbGVjdEZpbGUiLCJjbGljayIsInNob3VsZCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL0NyZWF0ZVppcFByb2plY3QvQ3JlYXRlWmlwUHJvamVjdC5jeS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ3JlYXRlWmlwUHJvamVjdCBmcm9tIFwiLi9DcmVhdGVaaXBQcm9qZWN0XCI7XG5cbmRlc2NyaWJlKFwiPENyZWF0ZVppcFByb2plY3Q+XCIsICgpID0+IHtcbiAgaXQoXCJtb3VudHNcIiwgKCkgPT4ge1xuICAgIGN5Lm1vdW50KDxDcmVhdGVaaXBQcm9qZWN0IC8+KTtcbiAgfSk7XG5cbiAgaXQoXCJyZXNwb25kcyB3aXRoIGFuIGVycm9yIHdoZW4gYSB1c2VyIGVudGVycyBhIGZpbGUgb3RoZXIgdGhhbiB6aXBcIiwgKCkgPT4ge1xuICAgIGN5Lm1vdW50KDxDcmVhdGVaaXBQcm9qZWN0IC8+KTtcbiAgICBjeS5nZXQoXCJbZGF0YS1jeT16aXAtZmlsZS1pbnB1dF1cIikuc2VsZWN0RmlsZShcbiAgICAgIFwiY3lwcmVzcy9maXh0dXJlcy9leGFtcGxlLmpzb25cIlxuICAgICk7XG4gICAgY3kuZ2V0KFwiYnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KFwicFwiKS5zaG91bGQoXG4gICAgICBcImNvbnRhaW5zLnRleHRcIixcbiAgICAgIFwiSW52YWxpZCBmaWxlIHVwbG9hZDogTm9uLXppcCBmaWxlIHdhcyB1cGxvYWRlZCFcIlxuICAgICk7XG4gIH0pO1xuXG4gIGl0KFwicmVzcG9uZHMgd2l0aCBhbiBlcnJvciB3aGVuIGEgdXNlciBlbnRlcnMgYSB6aXAgZmlsZSB3aXRob3V0IHVzZm0gZmlsZXNcIiwgKCkgPT4ge1xuICAgIGN5Lm1vdW50KDxDcmVhdGVaaXBQcm9qZWN0IC8+KTtcbiAgICBjeS5nZXQoXCJbZGF0YS1jeT16aXAtZmlsZS1pbnB1dF1cIikuc2VsZWN0RmlsZShcImN5cHJlc3MvZml4dHVyZXMvbG9yZW0uemlwXCIpO1xuICAgIGN5LmdldChcImJ1dHRvblwiKS5jbGljaygpO1xuICAgIGN5LmdldChcInBcIikuc2hvdWxkKFxuICAgICAgXCJjb250YWlucy50ZXh0XCIsXG4gICAgICBcIkludmFsaWQgZmlsZSB1cGxvYWQ6IFppcCBmaWxlIHdpdGggbm8gdXNmbSBmaWxlcyB3YXMgdXBsb2FkZWQhXCJcbiAgICApO1xuICB9KTtcblxuICBpdChcInJlc3BvbmRzIHdpdGggYW4gZXJyb3Igd2hlbiBhIHVzZXIgaW5wdXRzIGEgemlwIGZpbGUgd2l0aCBJTlZBTElEIHVzZm0gZmlsZXMgd2hlbiB2YWxpZGF0aW9uIGlzIHR1cm5lZCBvblwiLCAoKSA9PiB7XG4gICAgY3kubW91bnQoPENyZWF0ZVppcFByb2plY3QgLz4pO1xuICAgIGN5LmdldChcIltkYXRhLWN5PXppcC1maWxlLWlucHV0XVwiKS5zZWxlY3RGaWxlKFxuICAgICAgXCJjeXByZXNzL2ZpeHR1cmVzL2ludmFsaWRfdXNmbS56aXBcIlxuICAgICk7XG4gICAgY3kuZ2V0KFwiYnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KFwicFwiKS5zaG91bGQoXG4gICAgICBcImNvbnRhaW5zLnRleHRcIixcbiAgICAgIFwiSW52YWxpZCBmaWxlIHVwbG9hZDogQWxsIFVTRk0gZmlsZXMgd2l0aGluIHRoZSB6aXAgd2VyZSBpbnZhbGlkIVwiXG4gICAgKTtcbiAgfSk7XG5cbiAgaXQoXCJmaW5pc2hlcyBwcm9wZXJseSBpZiB0aGUgdXNlciBlbnRlcnMgYSB2YWxpZCB6aXAgZmlsZSBjb250YWluaW5nIHVzZm0gZmlsZXNcIiwgKCkgPT4ge1xuICAgIGN5Lm1vdW50KDxDcmVhdGVaaXBQcm9qZWN0IC8+KTtcbiAgICBjeS5nZXQoXCJbZGF0YS1jeT16aXAtZmlsZS1pbnB1dF1cIikuc2VsZWN0RmlsZShcImN5cHJlc3MvZml4dHVyZXMvam9obi56aXBcIik7XG4gICAgY3kuZ2V0KFwiYnV0dG9uXCIpLmNsaWNrKCk7XG4gICAgY3kuZ2V0KFwicFwiKS5zaG91bGQoXCJjb250YWlucy50ZXh0XCIsIFwid29ob28gaXQgd29ya2VkIVwiKTtcbiAgfSk7XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7QUFBQTtBQUFrRDtBQUVsREEsUUFBUSxDQUFDLG9CQUFvQixFQUFFLFlBQU07RUFDbkNDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsWUFBTTtJQUNqQkMsRUFBRSxDQUFDQyxLQUFLLGVBQUMsb0JBQUMsNEJBQWdCLE9BQUcsQ0FBQztFQUNoQyxDQUFDLENBQUM7RUFFRkYsRUFBRSxDQUFDLGlFQUFpRSxFQUFFLFlBQU07SUFDMUVDLEVBQUUsQ0FBQ0MsS0FBSyxlQUFDLG9CQUFDLDRCQUFnQixPQUFHLENBQUM7SUFDOUJELEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUNDLFVBQVUsQ0FDM0MsK0JBQStCLENBQ2hDO0lBQ0RILEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDRSxLQUFLLEVBQUU7SUFDeEJKLEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDRyxNQUFNLENBQ2hCLGVBQWUsRUFDZixpREFBaUQsQ0FDbEQ7RUFDSCxDQUFDLENBQUM7RUFFRk4sRUFBRSxDQUFDLHlFQUF5RSxFQUFFLFlBQU07SUFDbEZDLEVBQUUsQ0FBQ0MsS0FBSyxlQUFDLG9CQUFDLDRCQUFnQixPQUFHLENBQUM7SUFDOUJELEVBQUUsQ0FBQ0UsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUNDLFVBQVUsQ0FBQyw0QkFBNEIsQ0FBQztJQUMzRUgsRUFBRSxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUNFLEtBQUssRUFBRTtJQUN4QkosRUFBRSxDQUFDRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUNHLE1BQU0sQ0FDaEIsZUFBZSxFQUNmLGdFQUFnRSxDQUNqRTtFQUNILENBQUMsQ0FBQztFQUVGTixFQUFFLENBQUMsMkdBQTJHLEVBQUUsWUFBTTtJQUNwSEMsRUFBRSxDQUFDQyxLQUFLLGVBQUMsb0JBQUMsNEJBQWdCLE9BQUcsQ0FBQztJQUM5QkQsRUFBRSxDQUFDRSxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsVUFBVSxDQUMzQyxtQ0FBbUMsQ0FDcEM7SUFDREgsRUFBRSxDQUFDRSxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUNFLEtBQUssRUFBRTtJQUN4QkosRUFBRSxDQUFDRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUNHLE1BQU0sQ0FDaEIsZUFBZSxFQUNmLGtFQUFrRSxDQUNuRTtFQUNILENBQUMsQ0FBQztFQUVGTixFQUFFLENBQUMsNkVBQTZFLEVBQUUsWUFBTTtJQUN0RkMsRUFBRSxDQUFDQyxLQUFLLGVBQUMsb0JBQUMsNEJBQWdCLE9BQUcsQ0FBQztJQUM5QkQsRUFBRSxDQUFDRSxHQUFHLENBQUMsMEJBQTBCLENBQUMsQ0FBQ0MsVUFBVSxDQUFDLDJCQUEyQixDQUFDO0lBQzFFSCxFQUFFLENBQUNFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQ0UsS0FBSyxFQUFFO0lBQ3hCSixFQUFFLENBQUNFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQ0csTUFBTSxDQUFDLGVBQWUsRUFBRSxrQkFBa0IsQ0FBQztFQUN6RCxDQUFDLENBQUM7QUFDSixDQUFDLENBQUMifQ==