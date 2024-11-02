import {PasswordInputProps, TextInput, TextInputProps} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {UseControllerProps, FieldValues} from 'react-hook-form';

export function FormPasswordInput<FieldType extends FieldValues>({
	control,
	name,
	rules,
	...textInputProps
}: PasswordInputProps & UseControllerProps) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field, fieldState}) => (
				<TextInput
					onChangeText={field.onChange}
					onBlur={field.onBlur}
					value={field.value}
					errorMessage={fieldState?.error?.message}
					{...textInputProps}
				/>
			)}
		/>
	);
}
