import React from 'react';

import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Foundation from 'react-native-vector-icons/Foundation';
import {Icon as VectorIcon} from 'react-native-vector-icons/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Octicons from 'react-native-vector-icons/Octicons';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Zocial from 'react-native-vector-icons/Zocial';

import {ThemeColors, theme} from '@theme';

export type IconVariant =
	| 'AntDesign'
	| 'Entypo'
	| 'EvilIcons'
	| 'Feather'
	| 'FontAwesome'
	| 'Fontisto'
	| 'Foundation'
	| 'Ionicons'
	| 'MaterialCommunityIcons'
	| 'MaterialIcons'
	| 'Octicons'
	| 'SimpleLineIcons'
	| 'Zocial';

type IconPreset = Record<IconVariant, typeof VectorIcon>;

const iconPresets: IconPreset = {
	AntDesign,
	Entypo,
	EvilIcons,
	Feather,
	FontAwesome,
	Fontisto,
	Foundation,
	Ionicons,
	MaterialCommunityIcons,
	MaterialIcons,
	Octicons,
	SimpleLineIcons,
	Zocial,
};

export interface IconProps {
	variant: IconVariant;
	name: string;
	size?: number;
	color?: ThemeColors;
}

export function Icon({variant, name, size = 24, color = 'white'}: IconProps) {
	const IconComponent = iconPresets[variant];

	function iconFamilyHasIcon() {
		const iconsName = Object.keys(IconComponent.getRawGlyphMap());
		const mappedNames = iconsName.map(icon => ({icon}));
		const iconExists = mappedNames.some(item => item.icon === name);

		if (!iconExists) {
			console.warn(`Icon ${name} not found on ${variant}`);
		}
	}

	iconFamilyHasIcon();

	return <IconComponent name={name} size={size} color={theme.colors[color]} />;
}
