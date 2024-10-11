import React from 'react';
import {
	createNativeStackNavigator,
	NativeStackNavigationOptions,
} from '@react-navigation/native-stack';
import {AuthStackParamList} from './navigationTypes';
import {LoginScreen, SignupScreen} from '@screens';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
	headerShown: false,
	fullScreenGestureEnabled: false,
};

export function AuthStackNavigation() {
	return (
		<Stack.Navigator screenOptions={screenOptions}>
			<Stack.Screen name="LoginScreen" component={LoginScreen} />
			<Stack.Screen name="SignupScreen" component={SignupScreen} />
		</Stack.Navigator>
	);
}
