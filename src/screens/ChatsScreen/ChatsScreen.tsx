import React, {useEffect} from 'react';
import {database} from '@database';
import {getLocales} from 'react-native-localize';
import {Box, Screen} from '@components';
export function ChatsScreen() {
	useEffect(() => {
		(async function () {
			console.log('Db:::', database.get('language'));
		})();
	}, []);

	return (
		<Screen>
			<Box />
		</Screen>
	);
}
