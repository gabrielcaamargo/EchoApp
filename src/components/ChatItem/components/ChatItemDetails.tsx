import React from 'react';
import {Chat} from '@domain';
import {isSameDay, format} from 'date-fns';
import {Box, Text} from '@components';

interface ChatItemDetailsProps extends Pick<Chat, 'messages'> {}

export function ChatItemDetails({messages}: ChatItemDetailsProps) {
	const userUsername = 'Gabriel Camargo';

	const lastMessageData = messages[messages.length - 1];
	const messageSender = lastMessageData.sender.name === userUsername ? 'Você' : lastMessageData.sender.name;
	const lastMessageDate = isSameDay(new Date(lastMessageData.createdAt), new Date())
		? format(lastMessageData.createdAt, 'HH:mm')
		: format(lastMessageData.createdAt, 'dd/MM');

	return (
		<Box flex={1} paddingRight="s8" gap="s4">
			<Box gap="s4" flexDirection="row" justifyContent="space-between" alignItems="center">
				<Text weight="Medium">{messageSender}</Text>
				<Text color="grayLighter" preset="paragraphCaption">
					{lastMessageDate}
				</Text>
			</Box>

			<Text preset="paragraphSmall" color="grayLighter">
				{lastMessageData.message.length > 55 ? lastMessageData.message.slice(0, 55) + '...' : lastMessageData.message}
			</Text>
			<Box />
		</Box>
	);
}
