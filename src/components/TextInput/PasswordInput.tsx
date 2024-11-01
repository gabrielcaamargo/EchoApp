import React, {useState} from 'react';
import {TextInput, TextInputProps} from './TextInput';

export type PasswordInputProps = Omit<TextInputProps, 'iconVariant' | 'iconName' | 'onPressIcon'>;

export function PasswordInput({label, boxProps, ...passwordInputProps}: PasswordInputProps) {
	const [secureTextEntry, setSecureTextEntry] = useState(true);

	function handleToggleSecureTextEntry() {
		setSecureTextEntry(prev => !prev);
	}

	return (
		<TextInput
			label={label}
			boxProps={boxProps}
			secureTextEntry={secureTextEntry}
			iconName={secureTextEntry ? 'eye' : 'eye-off'}
			iconVariant="Feather"
			onPressIcon={handleToggleSecureTextEntry}
			{...boxProps}
			{...passwordInputProps}
		/>
	);
}
