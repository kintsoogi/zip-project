import localforage from "localforage";

import App from "./App";
import CreateZipProject from "./components/CreateZipProject";

describe("<ProjectList>", () => {
  beforeEach(() => {
    localforage.clear();
  });

  it("mounts", () => {
    cy.mount(<App />);
  });

  it("displays a list of projects that have been stored in indexedDB", () => {
    // Add two projects
    cy.mount(<CreateZipProject />);
    cy.get("[data-cy=zip-text-input]").type("proj1");
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/john.zip");
    cy.get("button").click();

    cy.mount(<CreateZipProject />);
    cy.get("[data-cy=zip-text-input]").type("proj2");
    cy.get("[data-cy=zip-file-input]").selectFile("cypress/fixtures/john.zip");
    cy.get("button").click();

    cy.wait(500);
    cy.mount(<App />);
    cy.get("[data-cy=project-item]").should("have.length", 2);
  });
});
