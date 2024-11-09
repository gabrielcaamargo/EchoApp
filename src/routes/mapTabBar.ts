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
		label: 'Conversas',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'chatbubbles-outline',
		},
	},
	CallingsScreen: {
		label: 'Chamadas',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'call',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'call-outline',
		},
	},
	NewPostScreen: {
		label: 'Novo Post',
		focused: {
			iconVariant: 'AntDesign',
			iconName: 'pluscircle',
		},
		unfocused: {
			iconVariant: 'AntDesign',
			iconName: 'pluscircleo',
		},
	},
	ContactsScreen: {
		label: 'Contatos',
		focused: {
			iconVariant: 'Ionicons',
			iconName: 'people',
		},
		unfocused: {
			iconVariant: 'Ionicons',
			iconName: 'people-outline',
		},
	},
	ProfileScreen: {
		label: 'Perfil',
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
