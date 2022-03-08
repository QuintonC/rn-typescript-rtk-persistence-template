import React, { useEffect } from 'react';
import { AppRegistry, Platform, StatusBar, UIManager } from 'react-native';

// App Name
import { name as appName } from '../app.json';

// Packages
import { Provider } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Components
import AppNavigator from './navigator';

// Store
import store from 'store/configureStore';

if (Platform.OS === 'android') {
	if (UIManager.setLayoutAnimationEnabledExperimental) {
		UIManager.setLayoutAnimationEnabledExperimental(true);
	}
}

const App = () => {
	useEffect(() => {
		StatusBar.setBarStyle('dark-content');
	}, []);

	return (
		<SafeAreaProvider>
			<Provider store={store}>
				<AppNavigator />
			</Provider>
		</SafeAreaProvider>
	);
};

AppRegistry.registerComponent(appName, () => App);
