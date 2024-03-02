//todo create proxy for relative url
export const cleanTestDatabase = () => {
  cy.request({
    method: 'DELETE',
    url: 'http://127.0.0.1:3001/api/test/clean-database',
  });
};
