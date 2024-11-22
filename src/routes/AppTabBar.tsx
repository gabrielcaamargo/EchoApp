import React from 'react';

import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

import {Box, BoxProps, Icon, Text, TextProps, TouchableOpacityBox, TouchableOpacityBoxProps} from '@components';
import {Translations, useAppSafeArea, useTranslation} from '@hooks';
import {mapTabBar, AppTabParamList} from '@routes';

export function AppTabBar({state, descriptors, navigation}: BottomTabBarProps) {
	const {bottom} = useAppSafeArea();
	const {translate} = useTranslation();
	return (
		<Box {...$boxWrapper} style={[{paddingBottom: bottom}]}>
			{state.routes.map((route, index) => {
				const {options} = descriptors[route.key];

				const isFocused = state.index === index;
				const tabItem = mapTabBar[route.name as keyof AppTabParamList];
				const onPress = () => {
					const event = navigation.emit({
						type: 'tabPress',
						target: route.key,
						canPreventDefault: true,
					});

					if (!isFocused && !event.defaultPrevented) {
						navigation.navigate({
							name: route.name,
							params: route.params,
							merge: true,
						});
					}
				};

				const onLongPress = () => {
					navigation.emit({
						type: 'tabLongPress',
						target: route.key,
					});
				};

				return (
					<TouchableOpacityBox
						{...$itemWrapper}
						key={index}
						accessibilityState={isFocused ? {selected: true} : {}}
						accessibilityLabel={options.tabBarAccessibilityLabel}
						testID={options.tabBarTestID}
						onPress={onPress}
						onLongPress={onLongPress}>
						<Icon
							name={isFocused ? tabItem.focused.iconName : tabItem.unfocused.iconName}
							variant={isFocused ? tabItem.focused.iconVariant : tabItem.unfocused.iconVariant}
							color={isFocused ? 'greenPrimary' : 'white'}
						/>
						<Text {...$label} color={isFocused ? 'greenPrimary' : 'white'}>
							{translate('tab-bar', tabItem.label as keyof Translations['tab-bar'])}
						</Text>
					</TouchableOpacityBox>
				);
			})}
		</Box>
	);
}

const $boxWrapper: BoxProps = {
	paddingTop: 's12',
	flexDirection: 'row',
	backgroundColor: 'background',
	borderTopColor: 'grayDarker',
	borderWidth: 1,
};

const $label: TextProps = {
	marginTop: 's4',
	preset: 'paragraphCaptionSmall',
};

const $itemWrapper: TouchableOpacityBoxProps = {
	flex: 1,
	alignItems: 'center',
	accessibilityRole: 'button',
	activeOpacity: 1,
};
