/* eslint-disable */
export default {
  displayName: 'neox-api-int-test',
  preset: '../../jest.preset.js',
  //globalSetup: '<rootDir>/src/support/global-setup.ts',
  //globalTeardown: '<rootDir>/src/support/global-teardown.ts',
  //setupFiles: ['<rootDir>/src/support/test-setup.ts'],
  detectOpenHandles: true,
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/neox-api-int-test',
};
