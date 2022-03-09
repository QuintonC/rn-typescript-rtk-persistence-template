import type { Config } from '@jest/types';

// Sync object
const config: Config.InitialOptions = {
    verbose: true,
    preset: 'react-native',
    setupFiles: [
        './jest-setup.js',
        './node_modules/react-native-gesture-handler/jestSetup.js',
    ],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
    transformIgnorePatterns: [
        '/node_modules/(?!(@react-native|react-native|react-native-reanimated)/).*/',
    ],
};
export default config;
