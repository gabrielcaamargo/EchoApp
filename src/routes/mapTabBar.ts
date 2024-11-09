import {IconVariant} from '@components';

import {AppTabParamList} from '@routes';

type TabBarIconData = {
	iconName: string;
	iconVariant: IconVariant;
};

type TabBarIcon = {
	label: string;
	focused: TabBarIconData;
	unfocused: TabBarIconData;
};

export const mapTabBar: Record<keyof AppTabParamList, TabBarIcon> = {
	ChatsScreen: {
		label: 'chats',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles-outline',
		},
	},
	EchosScreen: {
		label: 'echos',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'journal',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'journal-outline',
		},
	},
	NewPostScreen: {
		label: 'new-echo',
		focused: {
			iconVariant: 'AntDesign',
			iconName: 'pluscircle',
		},
		unfocused: {
			iconVariant: 'AntDesign',
			iconName: 'pluscircleo',
		},
	},
	CallingsScreen: {
		label: 'callings',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'call',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'call-outline',
		},
	},
	ProfileScreen: {
		label: 'profile',
		focused: {
			iconVariant: 'FontAwesome',
			iconName: 'user',
		},
		unfocused: {
			iconVariant: 'FontAwesome',
			iconName: 'user-o',
		},
	},
};
