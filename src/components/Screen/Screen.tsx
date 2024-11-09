import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {useNavigation} from '@react-navigation/native';
import {Box, Icon, TouchableOpacityBox} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
interface ScreenProps {
	children: React.ReactNode;
	scrollable?: boolean;
	style?: ViewStyle;
	canGoBack?: boolean;
}

export function Screen({children, scrollable, style, canGoBack}: ScreenProps) {
	const navigation = useNavigation();

	const colors = useAppTheme();
	const {bottom, top} = useAppSafeArea();
	const Container = scrollable ? ScrollViewContainer : ViewContainer;

	const paddingBottom = bottom + (Platform.OS === 'android' ? 24 : 0);
	const paddingTop = top + (Platform.OS === 'android' ? 24 : 0);

	const $keyboardAvoidingViewStyles: ViewStyle = {
		flex: 1,
		backgroundColor: colors.background,
		paddingBottom: 24,
	};

	return (
		<KeyboardAvoidingView
			style={[$keyboardAvoidingViewStyles, style]}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Container backgroundColor={colors.background}>
				<Box
					flex={1}
					padding="s16"
					style={{
						paddingTop,
						paddingBottom,
					}}>
					{canGoBack && (
						<TouchableOpacityBox marginBottom="s24" onPress={navigation.goBack}>
							<Icon name="arrow-left" variant="Feather" color="greenMain" />
						</TouchableOpacityBox>
					)}

					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}
