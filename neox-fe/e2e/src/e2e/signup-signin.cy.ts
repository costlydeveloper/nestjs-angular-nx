import { getByDataE2eId } from '../helper';
import { cleanTestDatabase } from '../helper/clean-test-db.func';

describe('SignUp Test', () => {
  const signUpRoute = '/auth/sign-up';
  before(() => {
    cleanTestDatabase();
  });

  it('should signup and capture auth token', () => {
    cy.visit(signUpRoute);
    cy.intercept('POST', '/api/auth/signup').as('signupRequest');

    getByDataE2eId('email-input').type('test@example.com');
    getByDataE2eId('password-input').type('Password123!');
    getByDataE2eId('signup-button').click();

    cy.url().should('include', '/dashboard');

    cy.wait('@signupRequest').then((interception) => {
      expect(interception.response?.body).to.have.property('accessToken');
      expect(interception.response?.body).to.have.property('refreshToken');
    });
  });
});
