describe("My Cypress e2e test", ()=>{
  beforeEach(() => {
    cy.visit('/')
  });

  it("test succeeds on expected input", () => {
    cy.get("input[name=name]").type("k-strips")
    cy.get("input[name=password]").type("$all4you")
    cy.get("#login-form").submit()
  })

  it("test fails on wrong input", () => {
    cy.get("input[name=name]").type("Boafo")
    cy.get("input[name=password]").type("killa")
    cy.get("#login-form").submit()
  })
})
