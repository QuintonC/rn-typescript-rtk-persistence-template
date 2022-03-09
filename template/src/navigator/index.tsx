import React from 'react';

// Packages
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Home Screens
import { HomeRoot } from 'screens/Home';

// Stacks
const HomeStack = createStackNavigator();

const HomeStackScreens = () => {
    return (
        <HomeStack.Navigator screenOptions={{ headerShown: false }}>
            <HomeStack.Screen name="HomeRoot" component={HomeRoot} />
        </HomeStack.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <HomeStackScreens />
        </NavigationContainer>
    );
};

export default AppNavigator;
