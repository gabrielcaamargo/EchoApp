import React from 'react';
import {zodResolver} from '@hookform/resolvers/zod';
import {useForm} from 'react-hook-form';
import {Box, Button, FormPasswordInput, FormTextInput, Screen, Text, TouchableOpacityBox} from '@components';
import {useTranslation} from '@hooks';
import {signinSchema, SigninSchema} from './signin.schema';

export function SigninScreen() {
	const {translate} = useTranslation();
	const {control, handleSubmit} = useForm<SigninSchema>({
		resolver: zodResolver(signinSchema),
		mode: 'onChange',
		delayError: 500,
		defaultValues: {
			email: '',
			password: '',
		},
	});

	function handleFormSubmit(data: SigninSchema) {
		console.log({data});
	}

	return (
		<Screen canGoBack>
			<Text preset="headingExtraLarge" weight="Bold" color="greenMain">
				{translate('default', 'signin')}
			</Text>

			<Text preset="headingMedium" marginTop="s8">
				{translate('signin', 'signin-description')}
			</Text>

			<Box marginTop="s16" gap="s16">
				<FormTextInput
					control={control}
					label={translate('default', 'email')}
					name="email"
					placeholder={translate('signin', 'signin-email-placeholder')}
					keyboardType="email-address"
				/>
				<Box>
					<FormPasswordInput
						control={control}
						label={translate('default', 'password')}
						name="password"
						placeholder={translate('signin', 'signin-password-placeholder')}
					/>

					<TouchableOpacityBox marginTop="s4" alignSelf="flex-end">
						<Text preset="paragraphSmall" color="greenMain">
							{translate('signin', 'signin-forgot-password')}
						</Text>
					</TouchableOpacityBox>
				</Box>

				<Button title={translate('default', 'signin')} marginTop="s24" onPress={handleSubmit(handleFormSubmit)} />
			</Box>
		</Screen>
	);
}
