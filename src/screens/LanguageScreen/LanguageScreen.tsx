import React from 'react';
import {Box, Screen, Text} from '@components';
// import {useTranslation} from '@hooks';
export function LanguageScreen() {
	// const {translate} = useTranslation();

	return (
		<Screen>
			<Box
				flex={1}
				backgroundColor="grayDarkest"
				paddingHorizontal="s16"
				paddingVertical="s24">
				<Box>
					<Text
						preset="headingLarge"
						fontFamily="Sora"
						weight="Bold"
						color="yellowPrimary">
						Let's setup your language
					</Text>
				</Box>
				<Box
					marginVertical="s16"
					width="100%"
					height={1}
					backgroundColor="grayDark"
				/>
				<Box>
					<Text>
						The language you choose will be used for the app's interface. You
						can change this later in the settings if you want to.
					</Text>
				</Box>
			</Box>
		</Screen>
	);
}
