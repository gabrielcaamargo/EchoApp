import {Box, Button, FormPasswordInput, FormTextInput, Screen, Text, TouchableOpacityBox} from '@components';
import React from 'react';
import {useForm} from 'react-hook-form';
import {signinSchema, SigninSchema} from './signin.schema';
import {zodResolver} from '@hookform/resolvers/zod';

export function SigninScreen() {
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
				Sign in
			</Text>

			<Text preset="headingMedium" marginTop="s8">
				Enter in your account and start chatting
			</Text>

			<Box marginTop="s16" gap="s16">
				<FormTextInput
					control={control}
					label="Email"
					name="email"
					placeholder="Enter your email"
					keyboardType="email-address"
				/>
				<Box>
					<FormPasswordInput control={control} label="Password" name="password" placeholder="Enter your password" />

					<TouchableOpacityBox marginTop="s4" alignSelf="flex-end">
						<Text preset="paragraphSmall" color="greenMain">
							Forgot my password
						</Text>
					</TouchableOpacityBox>
				</Box>

				<Button title="Sign in" marginTop="s24" onPress={handleSubmit(handleFormSubmit)} />
			</Box>
		</Screen>
	);
}
