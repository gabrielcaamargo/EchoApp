import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
	PresentationScreen: undefined;
	SigninScreen: undefined;
	SignupScreen: undefined;
	ValidateEmailScreen: undefined;
	SignupConfirmationScreen: undefined;
};

export type AppTabParamList = {
	ChatsScreen: undefined;
	EchosScreen: undefined;
	NewPostScreen: undefined;
	CallingsScreen: undefined;
	ProfileScreen: undefined;
};

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<
	AuthStackParamList,
	RouteName
>;
