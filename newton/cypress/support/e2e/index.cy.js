describe("MyComponent", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("renders correctly", () => {
    cy.get("h1").should("have.text", "MyComponent");
    cy.get("p").eq(0).should("have.text", "You clicked 0 times");
    cy.get("p").eq(1).should("have.text", "Effect not triggered");
    cy.get("button").should("have.text", "Click me");
  });

  it("increments count when button is clicked", () => {
    cy.get("button").click();
    cy.get("p").eq(0).should("have.text", "You clicked 1 times");
  });

  it("triggers effect when count is changed", () => {
    cy.get("button").click();
    cy.get("p").eq(1).should("have.text", "Effect triggered");
  });
});
