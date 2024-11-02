import React from 'react';
import {Box, Button, Screen, Separator, Text} from '@components';
import {useTranslation} from '@hooks';
import {AuthScreenProps} from '@routes';

export function PresentationScreen({navigation}: AuthScreenProps<'PresentationScreen'>) {
	const {translate} = useTranslation();

	function handleNavigateToSignup() {
		// TODO: Implement navigation to signup
	}

	function handleNavigateToSignin() {
		navigation.navigate('SigninScreen');
	}

	return (
		<Screen>
			<Box flex={1}>
				<Text preset="headingSuperLarge" fontFamily="Sora" weight="Bold">
					{translate('presentation', 'greetings-connect')}{' '}
					<Text preset="headingSuperLarge" fontFamily="Sora" weight="Bold" color="greenMain">
						{translate('presentation', 'greetings-instantly')}
					</Text>
					{translate('presentation', 'greetings-chat')}{' '}
					<Text preset="headingSuperLarge" fontFamily="Sora" weight="Bold" color="greenMain">
						{translate('presentation', 'greetings-effortlessly')}
					</Text>
					.
				</Text>

				<Text marginTop="s12" preset="headingMedium" fontFamily="Sora">
					{translate('presentation', 'greetings-presentation')}{' '}
					<Text preset="headingMedium" fontFamily="Sora" color="greenMain" weight="SemiBold">
						{translate('presentation', 'greetings-join')}
					</Text>
				</Text>

				<Box flex={1} />

				<Box>
					<Text color="grayMain" textAlign="center" marginBottom="s4">
						{translate('default', 'enter-now')}
					</Text>

					<Separator />

					<Box
						paddingTop="s12"
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						gap="s8"
						marginTop="s8">
						<Button title={translate('default', 'signup')} flex={1} onPress={handleNavigateToSignup} />
						<Button title={translate('default', 'signin')} preset="outline" flex={1} onPress={handleNavigateToSignin} />
					</Box>
				</Box>
			</Box>
		</Screen>
	);
}
