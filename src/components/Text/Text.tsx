import React from 'react';
import {TextStyle, TextProps as RNTextProps} from 'react-native';
import {createText, TextProps as RestyleTextProps} from '@shopify/restyle';
import {Theme} from '@theme';

const RestyleText = createText<Theme>();

type FontFamily = 'Inter' | 'Sora';

type FontWeight = 'Regular' | 'Medium' | 'Semibold' | 'Bold';

type TextPresets =
	| 'headingLarge'
	| 'headingMedium'
	| 'headingSmall'
	| 'paragraphLarge'
	| 'paragraphMedium'
	| 'paragraphSmall'
	| 'paragraphCaption'
	| 'paragraphCaptionSmall';

export interface TextProps extends RestyleTextProps<Theme>, RNTextProps {
	preset?: TextPresets;
	fontFamily?: FontFamily;
	weight?: FontWeight;
}

export const $fontSizes: Record<TextPresets, TextStyle> = {
	headingLarge: {fontSize: 32, lineHeight: 38.4},
	headingMedium: {fontSize: 22, lineHeight: 26.4},
	headingSmall: {fontSize: 18, lineHeight: 23.4},

	paragraphLarge: {fontSize: 18, lineHeight: 25.2},
	paragraphMedium: {fontSize: 16, lineHeight: 22.4},
	paragraphSmall: {fontSize: 14, lineHeight: 19.6},

	paragraphCaption: {fontSize: 12, lineHeight: 16.8},
	paragraphCaptionSmall: {fontSize: 10, lineHeight: 14},
};

function getFontFamily(fontFamily: FontFamily, fontWeight: FontWeight) {
	return `${fontFamily}-${fontWeight}`;
}

export function Text({
	preset = 'paragraphMedium',
	color = 'white',
	fontFamily = 'Inter',
	weight = 'Regular',
	children,
	...textProps
}: TextProps) {
	return (
		<RestyleText
			{...textProps}
			fontFamily={getFontFamily(fontFamily, weight)}
			fontSize={$fontSizes[preset].fontSize}
			lineHeight={$fontSizes[preset].lineHeight}
			color={color}>
			{children}
		</RestyleText>
	);
}
