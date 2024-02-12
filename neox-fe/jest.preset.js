const nxPreset = require('@nx/jest/preset').default;

module.exports = {
  ...nxPreset,
  testEnvironment: 'jsdom',
  transformIgnorePatterns: ['node_modules/(?!.*\\.mjs$|@datorama/akita)'],
};
