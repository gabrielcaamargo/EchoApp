import React from 'react';
import {KeyboardAvoidingView, Platform, ViewStyle} from 'react-native';

import {Box} from '@components';
import {useAppSafeArea, useAppTheme} from '@hooks';

import {ScrollViewContainer, ViewContainer} from './components/ScreenContainer';
interface ScreenProps {
	children: React.ReactNode;
	scrollable?: boolean;
}

export function Screen({children, scrollable}: ScreenProps) {
	const colors = useAppTheme();
	const {bottom, top} = useAppSafeArea();
	const Container = scrollable ? ScrollViewContainer : ViewContainer;
	return (
		<KeyboardAvoidingView
			style={$keyboardAvoidingViewStyles}
			behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
			<Container backgroundColor={colors.background}>
				<Box
					flex={1}
					paddingHorizontal="s16"
					style={{paddingTop: top, paddingBottom: bottom}}>
					{children}
				</Box>
			</Container>
		</KeyboardAvoidingView>
	);
}

const $keyboardAvoidingViewStyles: ViewStyle = {
	flex: 1,
};
