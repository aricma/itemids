/**
 * the ItemIds object
 */
import * as staticMethods from './staticMethods';
import * as methods from './methods';
import { _with, _can } from './utils';
import * as ERRORS from './errors';


/**
 * @typedef {( number | string )} ItemId
 */

/**
 * @typedef {Array.<ItemId>} ItemIdList
 */

/**
 * @param {ItemIdList} ids
 * @return {Array}
 */
export function ItemIds(ids = []) {
	const givenWasNoArray = !Array.isArray(ids);
	if (givenWasNoArray) throw ERRORS.ItemIds.givenWasNoArray;

	ids = staticMethods.unify(ids);

	return Object.assign(
		ids,
		// properties
		_with(ids, "name", "ItemIds"),
		// methods
		_can(ids, "set", methods.set),
		_can(ids, "add", methods.add),
		_can(ids, "remove", methods.remove),
		_can(ids, "toggle", methods.toggle),
		_can(ids, "toggleAll", methods.toggleAll),
		_can(ids, "has", methods.has),
		_can(ids, "isEqualTo", methods.isEqualTo)
	);
}

ItemIds.isItemIds = staticMethods.isItemIds;
ItemIds.isItemId = staticMethods.isItemId;
ItemIds.isItemIdList = staticMethods.isItemIdList;
ItemIds.unify = staticMethods.unify;
