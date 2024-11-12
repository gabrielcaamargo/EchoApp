import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export class Language extends Model {
	static table = 'language';

	@field('language') language!: string;
}
