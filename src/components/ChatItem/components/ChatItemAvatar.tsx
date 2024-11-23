import React from 'react';
import {Chat} from '@domain';
import {ImageBox, TouchableOpacityBox} from '@components';

interface ChatItemAvatarProps extends Pick<Chat, 'chatAvatarUrl'> {}

export function ChatItemAvatar({chatAvatarUrl}: ChatItemAvatarProps) {
	return (
		<TouchableOpacityBox>
			<ImageBox source={{uri: chatAvatarUrl}} height={48} width={48} borderRadius="s24" />
		</TouchableOpacityBox>
	);
}
