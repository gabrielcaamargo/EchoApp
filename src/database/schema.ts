import {appSchema} from '@nozbe/watermelondb';
import {languageSchema} from './model/schemas/languageSchema';

export default appSchema({
	version: 1,
	tables: [languageSchema],
});
