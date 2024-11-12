import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import migrations from './migration';
import {Language} from './model/Language';
import schema from './schema';

const adapter = new SQLiteAdapter({
	dbName: 'echoapp',
	schema,
	migrations,
	jsi: true /* Platform.OS === 'ios' */,
	onSetUpError: error => {
		console.log(error);
	},
});

export const database = new Database({
	adapter,
	modelClasses: [Language],
});
