import React from 'react';
import {Text, TextProps, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';

interface ButtonProps extends TouchableOpacityBoxProps {
	title: string;
	preset?: ButtonPreset;
}

type ButtonPreset = 'default' | 'outline';

type ButtonPresetStyles = {
	buttonStyles: TouchableOpacityBoxProps;
	textStyles: TextProps;
};

const buttonPresets: Record<ButtonPreset, ButtonPresetStyles> = {
	default: {
		buttonStyles: {
			backgroundColor: 'greenMain',
			borderWidth: 1,
			borderColor: 'transparent',
		},
		textStyles: {
			color: 'white',
		},
	},
	outline: {
		buttonStyles: {
			backgroundColor: 'transparent',
			borderWidth: 1,
			borderColor: 'greenMain',
		},
		textStyles: {
			color: 'greenMain',
		},
	},
};

export function Button({title, preset = 'default', ...touchableOpacityBoxProps}: ButtonProps) {
	return (
		<TouchableOpacityBox
			borderRadius="s8"
			paddingHorizontal="s16"
			paddingVertical="s8"
			activeOpacity={0.5}
			{...buttonPresets[preset].buttonStyles}
			{...touchableOpacityBoxProps}>
			<Text
				weight="Medium"
				preset="paragraphLarge"
				textAlign="center"
				{...buttonPresets[preset].textStyles}>
				{title}
			</Text>
		</TouchableOpacityBox>
	);
}
