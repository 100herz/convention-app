process.env.TZ = 'GMT'

module.exports = {
  roots: ['<rootDir>'],
  preset: 'jest-expo',
  setupFiles: ['<rootDir>/config/jest.setup.js'],
  setupFilesAfterEnv: ['<rootDir>/config/jest.setup.after.js'],

  automock: false,
  coveragePathIgnorePatterns: ['<rootDir>/config/', '<rootDir>/src/styles/'],
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|@sentry/.*)',
  ],
}
