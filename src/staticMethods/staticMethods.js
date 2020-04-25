/**
 * the itemIds static methods
 */
import * as ERRORS from '../errors';


/**
 * @param {*} [object]
 * @return {boolean}
 */
export function isItemIds(object) {
    let isItemIds = false;

    const gotArray = Array.isArray(object);
    const hasItemIdsName = !!gotArray && object.name === "ItemIds";
    if (hasItemIdsName) isItemIds = true;

    return isItemIds
}

/**
 * @param {*} [value]
 * @return {boolean}
 */
export function isItemId(value) {
	const isString = typeof value === "string";
	const isNumber = typeof value === "number" && !Number.isNaN(value);
	return isString || isNumber;
}

/**
 * @param {*} [value]
 * @return {boolean}
 */
export function isItemIdList(value) {
	const isNoArray = !Array.isArray(value);
	if (isNoArray) return false;
	return value.reduce((state, value) => state && isItemId(value), true)
}

/**
 * remove all duplicates
 * is not mutating
 * @param {*} object
 * @return {Array} - the given object
 */
export function unify(object = []) {
    const gotNoItemIdList = !isItemIdList(object);
	if (gotNoItemIdList) throw Error(ERRORS.staticMethods.unify.gotNoItemIdList);

    const values = object.splice(0);

    values.reduce((object, itemId) => {
		const isNoDuplicate = !object.includes(itemId);
		if (isNoDuplicate) object.push(itemId);
		return object
	}, object);

	return object
}