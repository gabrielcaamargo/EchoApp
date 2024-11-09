import React from 'react';

import {BottomTabBarProps, BottomTabNavigationOptions, createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AppTabBar, AppTabParamList} from '@routes';
import {ChatsScreen} from '@screens';

const Tab = createBottomTabNavigator<AppTabParamList>();

const screenOptions: BottomTabNavigationOptions = {
	headerShown: false,
};

function renderTabBar(props: BottomTabBarProps) {
	return <AppTabBar {...props} />;
}

export function AppTabNavigation() {
	return (
		<Tab.Navigator screenOptions={screenOptions} tabBar={renderTabBar}>
			<Tab.Screen name="ChatsScreen" component={ChatsScreen} />
			<Tab.Screen name="EchosScreen" component={ChatsScreen} />
			<Tab.Screen name="NewPostScreen" component={ChatsScreen} />
			<Tab.Screen name="CallingsScreen" component={ChatsScreen} />
			<Tab.Screen name="ProfileScreen" component={ChatsScreen} />
		</Tab.Navigator>
	);
}
