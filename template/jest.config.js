module.exports = {
    preset: 'react-native',
    setupFiles: [
        './jest-setup.js',
        './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!(@react-native|react-native|rn-progressive-image|react-native-reanimated|@react-native-community)/).*/',
    ],
};
