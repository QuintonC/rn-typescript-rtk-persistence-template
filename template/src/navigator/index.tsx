import React from 'react';

// Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// Home Screens
import { HomeRoot } from 'screens/Home';

// Stacks
const AppStack = createStackNavigator(),
	HomeStack = createStackNavigator(),
	Tab = createBottomTabNavigator();

const HomeStackScreens = () => {
	return (
		<HomeStack.Navigator screenOptions={{ headerShown: false }}>
			<HomeStack.Screen name="HomeRoot" component={HomeRoot} />
		</HomeStack.Navigator>
	);
};

const Tabs = () => {
	return (
		<Tab.Navigator>
			<Tab.Screen name="Home" component={HomeStackScreens} />
			<Tab.Screen name="Settings" component={HomeStackScreens} />
		</Tab.Navigator>
	);
};

const AppNavigator = () => {
	return (
		<NavigationContainer>
			<Tabs />
		</NavigationContainer>
	);
};

export default AppNavigator;
