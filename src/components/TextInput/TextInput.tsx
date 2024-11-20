import React, {useRef} from 'react';
import {
	Pressable,
	TextInput as RNTextInput,
	TextInputProps as RNTextInputProps,
	StyleProp,
	TextStyle,
} from 'react-native';
import {Box, BoxProps, Icon, IconVariant, Text, TouchableOpacityBox} from '@components';
import {useAppTheme} from '@hooks';

export type TextInputIcon =
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

export type TextInputProps = {
	label?: string;
	boxProps?: BoxProps;
	errorMessage?: string;
} & RNTextInputProps &
	TextInputIcon;

export function TextInput({
	label,
	iconName,
	iconVariant,
	onPressIcon,
	boxProps,
	errorMessage,
	...textInputProps
}: TextInputProps) {
	const {white, grayPrimary} = useAppTheme();
	const inputRef = useRef<RNTextInput>(null);

	const $textInputStyles: StyleProp<TextStyle> = {
		flex: 1,
		fontSize: 16,
		color: white,
	};

	function onInputFocus() {
		inputRef.current?.focus();
	}

	const borderColor = errorMessage ? 'redError' : inputRef.current?.isFocused() ? 'greenMain' : 'grayPrimary';

	return (
		<Box>
			<Pressable onPress={onInputFocus}>
				{label && <Text>{label}</Text>}

				<Box
					borderWidth={1}
					borderColor={borderColor}
					marginTop="s4"
					height={48}
					paddingHorizontal="s16"
					borderRadius="s8"
					flexDirection="row"
					alignItems="center"
					justifyContent="space-between"
					{...boxProps}>
					<RNTextInput
						cursorColor={errorMessage ? 'redError' : 'greenMain'}
						style={$textInputStyles}
						placeholderTextColor={grayPrimary}
						ref={inputRef}
						{...textInputProps}
					/>

					{iconName && iconVariant && (
						<TouchableOpacityBox onPress={onPressIcon}>
							<Icon name={iconName} variant={iconVariant} size={16} />
						</TouchableOpacityBox>
					)}
				</Box>

				{errorMessage && (
					<Text color="redError" preset="paragraphSmall">
						{errorMessage}
					</Text>
				)}
			</Pressable>
		</Box>
	);
}
