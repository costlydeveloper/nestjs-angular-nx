/* eslint-disable */
export default {
  displayName: 'endpoints-int',
  preset: '../../jest.preset.js',
  testEnvironment: 'node',
  transform: {
    '^.+\\.[tj]s$': ['ts-jest', { tsconfig: '<rootDir>/tsconfig.spec.json' }],
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/libs/endpoints-int',
  testMatch: ['**/*.int.spec.ts'],
};
