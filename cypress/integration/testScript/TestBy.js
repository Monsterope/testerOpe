describe("My Fir", function(){
    it('Does not', function(){
        cy.visit("https://bo.krakencard.com/login")
        cy.viewport(1920,1080)
        // // cy.contains('Login').click()
        cy.get('.btn-primary[type=submit]').click()
        cy.wait(5000)
        // cy.contains("OK").click()
        cy.contains("Point").click()
        cy.wait(5000)
        cy.get('button.btn.btn-outline-primary').click()
        // cy.get("a[dropdowntoggle]:eq(0)").click()

        // cy.visit("http://mrp-test.testz.net")
        // cy.get('input[name=ชื่อผู้ใช้งาน]').type("yo")
        // cy.get('input[name=รหัสผ่าน]').type("1")
        // cy.get('.btn-primary.btn-block').click()
        // cy.wait(2000)
        // // cy.get('header[_ngcontent-c8]').contains('im').click({ force: true })
        // // cy.get(".department-menu.hidden-print").eq(0).trigger("mousemove","right").click("right")
        // // .get('.sidebar-menu.width-auto')
        // cy.get(".department-menu.hidden-print:eq(1)").get('header[_ngcontent-c8]:eq(1)')
        //     .get('li[routerlinkactive=active]:eq(0)').click({ force: true })
    })
})