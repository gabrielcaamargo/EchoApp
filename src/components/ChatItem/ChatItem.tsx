import React from 'react';

import {TouchableOpacityBox} from '@components';
import {mockMessages} from './chatMessagesMock';
import {ChatItemAvatar} from './components/ChatItemAvatar';
import {ChatItemDetails} from './components/ChatItemDetails';

export function ChatItem() {
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
			<ChatItemAvatar chatAvatarUrl="https://github.com/gabrielcaamargo.png" />

			<ChatItemDetails messages={mockMessages} />
		</TouchableOpacityBox>
	);
}
