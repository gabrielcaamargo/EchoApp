import React from 'react';
import {Box, BoxProps} from '@components';

export function Separator({children, ...boxProps}: BoxProps) {
	return (
		<Box width="100%" height={1} backgroundColor="grayDark" {...boxProps}>
			{children}
		</Box>
	);
}
