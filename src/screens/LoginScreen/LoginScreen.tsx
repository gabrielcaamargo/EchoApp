import React from 'react';
import {Box, Text, TouchableOpacityBox} from '@components';

export function LoginScreen() {
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
				<Text
					color="yellowMain"
					fontFamily="Sora">
					Login
				</Text>
			</TouchableOpacityBox>
		</Box>
	);
}
