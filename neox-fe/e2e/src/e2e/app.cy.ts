import { getByDataE2eId } from '../helper';
import { cleanTestDatabase } from '../helper/clean-test-db.func';

describe('SignUp Test', () => {
  const signUpRoute = '/auth/sign-up';

  before(() => {
    cleanTestDatabase();
  });

  it('successfully signs up a new user', () => {
    cy.visit(signUpRoute);

    getByDataE2eId('email-input').type('test@example.com');
    getByDataE2eId('password-input').type('Password123!');
    getByDataE2eId('signup-button').click();

    cy.url().should('include', '/dashboard');
  });
});
