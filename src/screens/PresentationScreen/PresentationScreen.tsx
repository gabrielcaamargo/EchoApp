import React from 'react';
import {Box, Button, Screen, Separator, Text} from '@components';

export function PresentationScreen() {
	return (
		<Screen>
			<Box flex={1} padding="s16">
				<Text preset="headingSuperLarge" fontFamily="Sora" weight="Bold">
					Connect{' '}
					<Text
						preset="headingSuperLarge"
						fontFamily="Sora"
						weight="Bold"
						color="greenMain">
						instantly
					</Text>
					, chat{' '}
					<Text
						preset="headingSuperLarge"
						fontFamily="Sora"
						weight="Bold"
						color="greenMain">
						effortlessly
					</Text>
					.
				</Text>

				<Text marginTop="s12" preset="headingMedium" fontFamily="Sora">
					Echo is where every conversation feels personal.{' '}
					<Text
						preset="headingMedium"
						fontFamily="Sora"
						color="greenMain"
						weight="SemiBold">
						Join now.
					</Text>
				</Text>

				<Box flex={1} />

				<Box>
					<Text color='grayMain' textAlign='center' marginBottom='s4'>Enter now</Text>

					<Separator />

					<Box
						paddingTop="s12"
						flexDirection="row"
						justifyContent="space-between"
						alignItems="center"
						gap="s8">
						<Button title="Signup" flex={1} />
						<Button title="Sign in" preset="outline" flex={1} />
					</Box>
				</Box>
			</Box>
		</Screen>
	);
}
