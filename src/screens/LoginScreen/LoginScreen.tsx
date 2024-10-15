import React from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Screen, Text} from '@components';

export function LoginScreen() {
	const {t} = useTranslation();

	return (
		<Screen>
			<Box
				flex={1}
				alignItems="center"
				justifyContent="center">
				<Text color="yellowPrimary">{t('hello')}</Text>
			</Box>
		</Screen>
	);
}
