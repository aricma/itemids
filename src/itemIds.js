/**
 * the ItemIds object
 */
import * as ERRORS from './errors';


export function ItemIds(ids = []) {
	const givenWasNoArray = !Array.isArray(ids);
	if (givenWasNoArray) throw ERRORS.ItemIds.givenWasNoArray;
	
	return Object.assign(ids);
}
