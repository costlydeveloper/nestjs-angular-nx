//todo create proxy for relative url

// eslint-disable-next-line @nx/enforce-module-boundaries
import { environment } from '../../../libs/config/src/environment/environment-test';

export const cleanTestDatabase = () => {
  cy.request({
    method: 'DELETE',
    url: `${environment.apiServer}/test/clean-database`,
  });
};
