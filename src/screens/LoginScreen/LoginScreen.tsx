import React from 'react';
import {Box, Icon} from '@components';

export function LoginScreen() {
	return (
		<Box
			flex={1}
			backgroundColor="blueDarker"
			alignItems="center"
			justifyContent="center">
			<Icon
				name="upcircleo"
				variant="AntDesign"
				color="greenSuccess"
			/>
		</Box>
	);
}
