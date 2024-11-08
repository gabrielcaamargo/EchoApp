import React from 'react';
import {createNativeStackNavigator, NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {PresentationScreen, SigninScreen, SignupConfirmationScreen, SignupScreen} from '@screens';
import {AuthStackParamList} from './navigationTypes';

const Stack = createNativeStackNavigator<AuthStackParamList>();

const screenOptions: NativeStackNavigationOptions = {
	headerShown: false,
	fullScreenGestureEnabled: false,
};

export function AuthStackNavigation() {
	return (
		<Stack.Navigator screenOptions={screenOptions} initialRouteName="SignupConfirmationScreen">
			<Stack.Screen name="PresentationScreen" component={PresentationScreen} />
			<Stack.Screen name="SigninScreen" component={SigninScreen} />
			<Stack.Screen name="SignupScreen" component={SignupScreen} />
			<Stack.Screen name="SignupConfirmationScreen" component={SignupConfirmationScreen} />
		</Stack.Navigator>
	);
}
