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
    collectCoverageFrom: [
        './src/components/**/index.{js,jsx,ts,tsx}',
        '!./src/components/index.{js,jsx,ts,tsx}',
        './src/screens/*/*/index.{js,jsx,ts,tsx}',
        './src/slices/**.{js,jsx,ts,tsx}',
        '!./src/slices/index.{js,jsx,ts,tsx}',
        '!**/*.d.ts',
        '!**/node_modules/**',
        '!./coverage/**',
        '!./index.js',
        '!./jest.config.js',
        '!./metro.config.js',
        '!./babel.config.js',
        '!./react-native.config.js',
        '!./.eslintrc.js',
        '!./.prettierrc.js',
        '!./src/assets/**',
        '!./src/types/**',
        '!./src/constants/**',
    ],
    // The below lines are for calculating your coverage threshold. Set the coverage threshold to your desired target coverage and then uncomment.
    // coverageThreshold: {
    //     global: {
    //         branches: 90,
    //         functions: 90,
    //         lines: 90,
    //         statements: 90,
    //     },
    // },
};
