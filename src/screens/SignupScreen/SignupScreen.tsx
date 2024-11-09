import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Box, Button, FormTextInput, Screen, Text} from '@components';
import {useTranslation} from '@hooks';
import {signupSchema, SignupSchema} from './signup.schema';
import {AuthScreenProps} from '@/routes';

export function SignupScreen({navigation}: AuthScreenProps<'SignupScreen'>) {
	const {translate} = useTranslation();
	const {control, handleSubmit} = useForm<SignupSchema>({
		resolver: zodResolver(signupSchema),
		mode: 'onChange',
		delayError: 500,
		defaultValues: {
			email: '',
			password: '',
			confirmPassword: '',
		},
	});

	function handleFormSubmit(data: SignupSchema) {
		console.log({data});

		navigation.navigate('ValidateEmailScreen');
	}

	return (
		<Screen canGoBack>
			<Text preset="headingExtraLarge" weight="Bold" color="greenMain">
				{translate('default', 'signup')}
			</Text>

			<Text preset="headingMedium" marginTop="s8">
				{translate('signup', 'signup-description')}
			</Text>

			<Box marginTop="s16" gap="s16">
				<FormTextInput
					control={control}
					label={translate('default', 'email')}
					name="email"
					keyboardType="email-address"
					autoCapitalize="none"
					placeholder={translate('signup', 'signup-email-placeholder')}
				/>

				<FormTextInput
					control={control}
					label={translate('default', 'password')}
					name="password"
					placeholder={translate('signup', 'signup-password-placeholder')}
				/>

				<FormTextInput
					control={control}
					label={translate('signup', 'signup-confirm-password-placeholder')}
					name="confirmPassword"
					placeholder={translate('signup', 'signup-confirm-password-placeholder')}
				/>
			</Box>

			<Button title={translate('default', 'signup')} marginTop="s24" onPress={handleSubmit(handleFormSubmit)} />
		</Screen>
	);
}
