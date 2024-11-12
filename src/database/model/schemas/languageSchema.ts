import {tableSchema} from '@nozbe/watermelondb';

export const languageSchema = tableSchema({
	name: 'language',
	columns: [
		{
			name: 'language',
			type: 'string',
		},
	],
});
