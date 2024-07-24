describe("Pruebas de automatización E2E",()=>  {

it("Prueba e2e", () => {
    
    //login
    cy.visit("https://www.demoblaze.com")
    cy.get('#login2').click()
    cy.get("#loginusername").type("username")
    cy.get("#loginpassword").type("password.2") //cambiar password si da error de seguridad
    cy.get("#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary").click()

    //agregar 2 productos
    cy.visit("https://www.demoblaze.com/index.html")
    cy.get(':nth-child(1) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()
    cy.get(':nth-child(3) > .card > .card-block > .card-title > .hrefch').click()
    cy.get('.col-sm-12 > .btn').click()
    cy.get('.active > .nav-link').click()

    //visualizar carrito
    cy.get('#cartur').click()

    //completar formulario
    cy.get('.col-lg-1 > .btn').click()
    cy.get('#name').type("Qa Tester")
    cy.get('#country').type("Ecuador")
    cy.get('#city').type("Quito")
    cy.get('#card').type("95012700118")
    cy.get('#month').type("Julio")
    cy.get('#year').type("2024")

    //finalizar compra
    cy.get('#orderModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('.confirm').click()
})

})