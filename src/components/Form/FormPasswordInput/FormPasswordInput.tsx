import {PasswordInput, PasswordInputProps, TextInput, TextInputProps} from '@components';
import React from 'react';
import {Controller} from 'react-hook-form';
import {UseControllerProps, FieldValues} from 'react-hook-form';

export function FormPasswordInput<FormType extends FieldValues>({
	control,
	name,
	rules,
	...textInputProps
}: PasswordInputProps & UseControllerProps<FormType>) {
	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field, fieldState}) => (
				<PasswordInput
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
