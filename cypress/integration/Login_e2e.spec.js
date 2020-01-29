describe("My Cypress e2e test", ()=>{
  beforeEach(() => {
    cy.visit('/')
  });

  it("test succeeds on expected input values", () => {
    cy.get("input[name=name]").type("k-strips")
    cy.get("input[name=password]").type("$all4you")
    cy.get(".Login_button").click()
    cy.get("h2").contains("k-strips")
  })

  it("test fails on wrong input values", () => {
    cy.get("input[name=name]").type("Obosom p-Young")
    cy.get("input[name=password]").type("$atta-adwoa")
    cy.get(".Login_button").click()
    cy.get("small").contains("Username or password is invalid")
  })

})
