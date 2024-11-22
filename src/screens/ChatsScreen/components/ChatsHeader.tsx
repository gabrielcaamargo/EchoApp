import React from 'react';
import {Box, TextInput} from '@components';

export function ChatsHeader() {
	return (
		<Box>
			<TextInput placeholder="Search whatever you want" iconName="search" iconVariant="Ionicons" />
		</Box>
	);
}
