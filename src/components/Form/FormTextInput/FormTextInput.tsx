import React from 'react';
import {Controller} from 'react-hook-form';
import {UseControllerProps, FieldValues} from 'react-hook-form';
import {TextInput, TextInputProps} from '@components';
import {useTranslation} from '@hooks';

export function FormTextInput<FormType extends FieldValues>({
	control,
	name,
	rules,
	...textInputProps
}: TextInputProps & UseControllerProps<FormType>) {
	const {splitPath, translate} = useTranslation();

	return (
		<Controller
			control={control}
			name={name}
			rules={rules}
			render={({field, fieldState}) => {
				const [path, key] = splitPath(fieldState?.error?.message);
				return (
					<TextInput
						onChangeText={field.onChange}
						onBlur={field.onBlur}
						value={field.value}
						errorMessage={fieldState.error?.message && translate(path, key)}
						autoCorrect={false}
						{...textInputProps}
					/>
				);
			}}
		/>
	);
}
