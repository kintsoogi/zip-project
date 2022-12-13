import OpenZipProject from "./OpenZipProject";

describe("<OpenZipProject>", () => {
  it("mounts", () => {
    cy.mount(<OpenZipProject />);
  });

  it("responds with an error when a user enters a file other than zip", () => {
    cy.mount(<OpenZipProject />);
    cy.get("[data-cy=zip-file-input]").selectFile(
      "cypress/fixtures/example.json"
    );
    cy.get("button").click();
    cy.get("p").should(
      "contains.text",
      "Invalid file upload: Non-zip file was uploaded!"
    );
  });

  it("responds with an error when a user enters a zip file without usfm files", () => {
    cy.mount(<OpenZipProject />);
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/lorem.zip");
    cy.get("button").click();
    cy.get("p").should(
      "contains.text",
      "Invalid file upload: Zip file with no usfm files was uploaded!"
    );
  });

  it("responds with an error when a user inputs a zip file with INVALID usfm files when validation is turned on", () => {
    cy.mount(<OpenZipProject />);
    cy.get("[data-cy=zip-file-input]").selectFile(
      "cypress/fixtures/invalid_usfm.zip"
    );
    cy.get("button").click();
    cy.get("p").should(
      "contains.text",
      "Invalid file upload: All USFM files within the zip were invalid!"
    );
  });

  it("finishes properly if the user enters a valid zip file containing usfm files", () => {
    cy.mount(<OpenZipProject />);
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/john.zip");
    cy.get("button").click();
    cy.get("p").should("contains.text", "wohoo it worked!");
  });
});
