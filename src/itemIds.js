/**
 * the ItemIds object
 */
import { _with } from './utils';
import * as staticMethods from './staticMethods';
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

ItemIds.isItemIds = staticMethods.isItemIds;
ItemIds.isItemId = staticMethods.isItemId;
ItemIds.isItemIdList = staticMethods.isItemIdList;
ItemIds.unify = staticMethods.unify;
