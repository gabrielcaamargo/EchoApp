import React, {useState} from 'react';
import {TextStyle, ViewStyle} from 'react-native';
import {OtpInput, Theme} from 'react-native-otp-entry';
import {Box, Button, Screen, Text} from '@components';
import {useAppRadius, useAppTheme, useTranslation} from '@hooks';

export function ValidateEmailScreen() {
	const {grayMain, greenPrimary} = useAppTheme();
	const {s8} = useAppRadius();
	const [validationCode, setValidationCode] = useState<string>();
	const {translate} = useTranslation();

	const $otpField: ViewStyle = {
		borderWidth: 2,
		width: 56,
		height: 56,
		borderColor: grayMain,
		borderRadius: s8,
	};

	const $otpText: TextStyle = {
		color: grayMain,
		fontSize: 32,
	};

	const otpTheme: Theme = {
		pinCodeContainerStyle: $otpField,
		pinCodeTextStyle: $otpText,
	};

	function handleResendCode() {
		// TODO: Implement resend validation code
	}

	function handleValidateCode(validationCode: string) {
		// TODO: Implement code validation
	}

	return (
		<Screen canGoBack>
			<Box flex={1}>
				<Text preset="headingLarge" weight="Bold" color="greenPrimary">
					{translate('email-validation', 'email-validation-title')}
				</Text>

				<Text preset="paragraphLarge">{translate('email-validation', 'email-validation-text')}</Text>

				<Box marginTop="s24">
					<OtpInput
						numberOfDigits={5}
						focusColor={greenPrimary}
						onTextChange={setValidationCode}
						theme={otpTheme}
						onFilled={handleValidateCode}
					/>

					<Button
						title={translate('email-validation', 'email-validation-resend')}
						marginTop="s16"
						width={156}
						onPress={handleResendCode}
					/>
				</Box>
			</Box>
		</Screen>
	);
}
