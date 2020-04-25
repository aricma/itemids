/**
 * the ItemIds object
 */
import { _with } from './utils';
import * as ERRORS from './errors';


export function ItemIds(ids = []) {
	const givenWasNoArray = !Array.isArray(ids);
	if (givenWasNoArray) throw ERRORS.ItemIds.givenWasNoArray;
	
	return Object.assign(
		ids,
		// properties
		_with(ids, "name", "ItemIds")
		// methods
	);
}
