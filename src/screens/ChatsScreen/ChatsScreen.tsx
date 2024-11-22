import React from 'react';
import {Box, ChatItem, Screen, Text} from '@components';

export function ChatsScreen() {
	return (
		<Screen>
			<Text preset="headingLarge" weight="Bold" color="greenMain" marginBottom="s16">
				Chats
			</Text>

			<Box gap="s8">
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
				<ChatItem />
			</Box>
		</Screen>
	);
}
