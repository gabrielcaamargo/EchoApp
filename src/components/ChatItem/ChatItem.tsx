import React from 'react';

import {Box, ImageBox, Text, TouchableOpacityBox} from '@components';

export function ChatItem() {
	const message =
		'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere provident perferendis libero incidunt suscipit officiis.';

	return (
		<TouchableOpacityBox
			width="100%"
			borderBottomColor="grayDarkerOpacity"
			borderBottomWidth={2}
			paddingHorizontal="s8"
			paddingVertical="s8"
			borderRadius="s8"
			flexDirection="row"
			alignItems="flex-start"
			activeOpacity={0.5}
			gap="s16">
			<ImageBox source={{uri: 'https://github.com/gabrielcaamargo.png'}} height={48} width={48} borderRadius="s24" />

			<Box flexDirection="row" justifyContent="space-between" flex={1} paddingRight="s8">
				<Box gap="s4">
					<Text weight="Medium">Gabriel Camargo</Text>
					<Text preset="paragraphSmall" color="grayLighter">
						{message.length > 55 ? message.slice(0, 55) + '...' : message}
					</Text>
				</Box>

				<Box>
					<Text color="grayLighter" preset="paragraphCaption">
						10h
					</Text>
				</Box>
			</Box>
		</TouchableOpacityBox>
	);
}
