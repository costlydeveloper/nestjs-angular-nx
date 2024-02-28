describe('SignUp Test', () => {
  it('successfully signs up a new user', () => {
    // Posjeti stranicu za registraciju
    cy.visit('/signup');

    // Unesi podatke u formu
    cy.get('input[name="email"]').type('test@example.com');
    cy.get('input[name="password"]').type('yourpassword');

    // Klikni na gumb za registraciju
    cy.get('button').contains('Sign Up').click();

    // Provjeri je li registracija uspješna, na primjer provjerom URL-a ili poruke o uspjehu
    cy.url().should('include', '/dashboard'); // Pretpostavka da korisnik bude preusmjeren na dashboard
    // Ili provjera poruke o uspjehu
    // cy.get('.success-message').should('contain', 'You have successfully signed up');
  });
});
