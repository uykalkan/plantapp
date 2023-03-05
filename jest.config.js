module.exports = {
  preset: 'react-native',
  silent: true,
  setupFiles: ['./jest/setup.ts'],
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|react-clone-referenced-element|@react-native-community|rollbar-react-native|@fortawesome|@react-native|@react-navigation)',
  ],
  transform: {
    '^.+\\.svg$': 'jest-transformer-svg',
  },
};
