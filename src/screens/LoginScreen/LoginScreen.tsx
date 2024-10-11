import {createBox, createText} from '@shopify/restyle';
import {Theme} from '@theme';
import React from 'react';

export function LoginScreen() {
	const Box = createBox<Theme>();
	const Text = createText<Theme>();

	return (
		<Box
			flex={1}
			backgroundColor="blueDarker"
			alignItems="center"
			justifyContent="center">
			<Text color="yellowPrimary">LoginScreen</Text>
		</Box>
	);
}
