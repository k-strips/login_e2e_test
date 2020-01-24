describe("My Cypress e2e test", ()=>{
  it("navigate to login page", ()=>{
    cy.visit('http://localhost:3000/');
  })

  it("login to application", () => {
    cy.get("input[name=name]").type("k-strips")
    cy.get("input[name=password]").type("$all4you")
    cy.get("#login-form").submit()
  })
})
