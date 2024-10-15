import React from 'react';
import {Box, Screen, Text} from '@components';
import {useTranslation} from '@hooks';

export function LoginScreen() {
	const {translate} = useTranslation();

	return (
		<Screen>
			<Box
				flex={1}
				alignItems="center"
				justifyContent="center">
				<Text color="yellowPrimary">{translate('signin', 'welcome')}</Text>
			</Box>
		</Screen>
	);
}
