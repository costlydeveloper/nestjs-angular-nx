export const getByDataE2eId = (e2eId: string) => {
  return cy.get(`[data-e2e-id="${e2eId}"]`);
};
