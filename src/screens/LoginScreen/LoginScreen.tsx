import {Box, TouchableOpacityBox} from '@components';
import {createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';

export function LoginScreen() {
	const Text = createText<Theme>();

	return (
		<Box
			flex={1}
			backgroundColor="blueDarker"
			alignItems="center"
			justifyContent="center">
			<TouchableOpacityBox
				backgroundColor="blueMain"
				borderRadius="s8"
				paddingHorizontal="s16"
				paddingVertical="s4">
				<Text color="yellowPrimary" fontSize={24}>
					Login
				</Text>
			</TouchableOpacityBox>
		</Box>
	);
}
