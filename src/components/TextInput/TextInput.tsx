import React from 'react';
import {
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	StyleProp,
	TextStyle,
	ViewStyle,
} from 'react-native';
import {Box, BoxProps, Icon, IconVariant, Text, TouchableOpacityBox} from '@components';
import {useAppTheme} from '@/hooks';

type TextInputIcon =
	| {
			iconVariant: IconVariant;
			iconName: string;
			onPressIcon?: () => void;
	  }
	| {
			iconVariant?: never;
			iconName?: never;
			onPressIcon?: never;
	  };

type TextInputProps = {
	label?: string;
	boxProps?: BoxProps;
} & RNTextInputProps &
	TextInputIcon;

export function TextInput({label, iconName, iconVariant, onPressIcon, boxProps, ...textInputProps}: TextInputProps) {
	const {greenMain, white} = useAppTheme();

	const $textInputStyles: StyleProp<TextStyle> = {
		flex: 1,
		fontSize: 16,
		color: white,
	};

	return (
		<Box>
			{label && <Text>{label}</Text>}

			<Box
				borderWidth={1}
				borderColor="greenMain"
				marginTop="s4"
				height={48}
				paddingHorizontal="s16"
				borderRadius="s8"
				flexDirection="row"
				alignItems="center"
				justifyContent="space-between"
				{...boxProps}>
				<RNTextInput cursorColor={greenMain} style={$textInputStyles} {...textInputProps} />

				{iconName && iconVariant && (
					<TouchableOpacityBox onPress={onPressIcon}>
						<Icon name={iconName} variant={iconVariant} size={16} />
					</TouchableOpacityBox>
				)}
			</Box>
		</Box>
	);
}
