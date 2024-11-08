import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
	PresentationScreen: undefined;
	SigninScreen: undefined;
	SignupScreen: undefined;
	SignupConfirmationScreen: undefined;
};

export type AppTabParamList = {
	ChatsScreen: undefined;
	CallingsScreen: undefined;
	NewPostScreen: undefined;
	ContactsScreen: undefined;
	ProfileScreen: undefined;
};

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<
	AuthStackParamList,
	RouteName
>;
