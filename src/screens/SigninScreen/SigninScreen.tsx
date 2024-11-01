import {Box, Screen, Text, TextInput} from '@components';
import React from 'react';
import {Alert} from 'react-native';

export function SigninScreen() {
	return (
		<Screen canGoBack>
			<Text preset="headingExtraLarge" weight="Bold" color="greenMain">
				Sign in
			</Text>

			<Text preset="headingMedium" marginTop="s8">
				Enter in your account and start chatting
			</Text>

			<Box marginTop="s16">
				{/* Form */}
				<TextInput label="Username or email" />
			</Box>
		</Screen>
	);
}
