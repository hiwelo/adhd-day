module.exports = {
  preset: 'jest-expo',
  roots: ['<rootDir>/src'],
  transform: {
    '^.+\\.ts?(x)$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|sentry-expo|native-base)',
  ],
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  coveragePathIgnorePatterns: ['components/', 'node_modules/', 'views/'],
  globals: { 'ts-jest': { tsConfig: { jsx: 'react' } } },
  moduleFileExtensions: ['js', 'ts', 'tsx'],
  testMatch: ['**/__tests__/**/*.ts?(x)', '**/?(*.)+(spec|test).ts?(x)'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.js'],
  snapshotSerializers: ['enzyme-to-json/serializer'],
};
