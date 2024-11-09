import React from 'react';
import {Box, Button, Icon, Screen, Text} from '@components';
import {useTranslation} from '@hooks';
import {AuthScreenProps} from '@routes';

export function SignupConfirmationScreen({navigation}: AuthScreenProps<'SignupConfirmationScreen'>) {
	const {translate} = useTranslation();

	function navigateToSignin() {
		navigation.reset({
			index: 0,
			routes: [{name: 'PresentationScreen'}],
		});
	}

	return (
		<Screen>
			<Box>
				<Icon name="checkmark-circle" variant="Ionicons" size={76} color="greenMain" />

				<Text marginTop="s8" preset="headingExtraLarge" weight="Bold">
					{translate('success', 'register')}{' '}
					<Text marginTop="s8" preset="headingExtraLarge" color="greenMain" weight="Bold">
						{translate('success', 'completed')}
					</Text>
				</Text>
			</Box>

			<Box flex={1}>
				<Text preset="paragraphLarge">{translate('success', 'success-signup-message')}</Text>
			</Box>

			<Button title={translate('default', 'signin')} onPress={navigateToSignin} />
		</Screen>
	);
}
