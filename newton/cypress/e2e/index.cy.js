describe('testing', () => {
    beforeEach(() => {
        cy.visit('localhost:3000');
    })
    it('on click count should increase', () => {
        cy.get('#button').click();
        cy.get('#count').invoke('text').then(text => {
            cy.expect(Number(text)).to.eq(1);
        })
    })
})