import {NativeStackScreenProps} from '@react-navigation/native-stack';

export type AuthStackParamList = {
	PresentationScreen: undefined;
	SignupScreen: undefined;
};

export type AuthScreenProps<RouteName extends keyof AuthStackParamList> = NativeStackScreenProps<AuthStackParamList, RouteName>;
