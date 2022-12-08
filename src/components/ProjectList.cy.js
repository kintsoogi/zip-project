import ProjectList from "./ProjectList";

describe("<ProjectList>", () => {
  it("mounts", () => {
    cy.mount(<ProjectList />);
  });
});
