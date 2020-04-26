import * as ERRORS from "../errors";
import * as staticMethods from '../staticMethods';


/**
 * @typedef {( string | number )} ItemId
 */

/**
 * @typedef {Array.<ItemId>} ItemIdList
 */

/**
 * @callback Reducer
 * @param {ItemIdList} boundArray
 * @return {ItemIdList} - the new values for th boundArray
 */

/**
 * @param {( ItemIdList | Reducer )} action
 * @return {ItemIdList}
 */
export function set(action = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.set.isNotBoundToAnArray);

    const isItemIdList = staticMethods.isItemIdList(action);
    const isFunction = typeof action === "function";
    const gotNeitherItemIdListNorFunction = !isItemIdList && !isFunction;
    if (gotNeitherItemIdListNorFunction) throw Error(ERRORS.methods.set.gotNeitherItemIdListNorFunction);

    let values = action;
    if (isFunction) values = action(this);

    this.splice(0);
    values.forEach(itemId => this.push(itemId));

    return this
}

/**
 * @param {( ItemId | ItemIdList )} value
 * @return {ItemIdList}
 */
export function add(value = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.add.isNotBoundToAnArray);

    const isItemId = staticMethods.isItemId(value);
    const isItemIdList = staticMethods.isItemIdList(value);
    const gotNeitherItemIdNorItemIdList = !isItemId && !isItemIdList;
    if (gotNeitherItemIdNorItemIdList) throw Error(ERRORS.methods.add.gotNeitherItemIdNorItemIdList);

    let values = value;
    if (isItemId) values = [value];

    values.forEach(itemId => this.push(itemId));

    return this
}

/**
 * @param {( ItemId | ItemIdList )} value
 * @return {ItemIdList}
 */
export function remove(value = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.remove.isNotBoundToAnArray);

    const isItemId = staticMethods.isItemId(value);
    const isItemIdList = staticMethods.isItemIdList(value);
    const gotNeitherItemIdNorItemIdList = !isItemId && !isItemIdList;
    if (gotNeitherItemIdNorItemIdList) throw Error(ERRORS.methods.remove.gotNeitherItemIdNorItemIdList);

    let values = value;
    if (isItemId) values = [value];

    values.forEach(itemId => {
        const index = this.indexOf(itemId);
        const isRemovable = index > -1;
        if (isRemovable) this.splice(index, 1)
    });

    return this
}

/**
 * @param {( ItemId | ItemIdList )} value
 * @return {ItemIdList}
 */
export function toggle(value = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.toggle.isNotBoundToAnArray);

    const isItemId = staticMethods.isItemId(value);
    const isItemIdList = staticMethods.isItemIdList(value);
    const gotNeitherItemIdNorItemIdList = !isItemId && !isItemIdList;
    if (gotNeitherItemIdNorItemIdList) throw Error(ERRORS.methods.toggle.gotNeitherItemIdNorItemIdList);

    let values = value;
    if (isItemId) values = [value];

    values.forEach(itemId => {
        const isPartOfBoundArray = this.includes(itemId);
        if (isPartOfBoundArray) {
            const index = this.indexOf(itemId);
            this.splice(index, 1)
        } else {
            this.push(itemId)
        }
    });

    return this
}

/**
 * @param {ItemIdList} values
 * @return {ItemIdList}
 */
export function toggleAll(values = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.toggleAll.isNotBoundToAnArray);

    const isItemId = staticMethods.isItemId(values);
    const isItemIdList = staticMethods.isItemIdList(values);
    const gotNeitherItemIdNorItemIdList = !isItemId && !isItemIdList;
    if (gotNeitherItemIdNorItemIdList) throw Error(ERRORS.methods.toggleAll.gotNoItemIdList);

    const givenAndBoundArrayHaveNotTheSameLength = this.length !== values.length;
    const notAllGivenIdsAreInBoundArray = !values.reduce((hasIds, id) => hasIds && this.includes(id), true);
    const needsOverwrite = givenAndBoundArrayHaveNotTheSameLength || notAllGivenIdsAreInBoundArray;

    this.splice(0);
    if (needsOverwrite) values.forEach(itemId => this.push(itemId));

    return this
}

/**
 * @param {( ItemId | ItemIdList )} value
 * @return {boolean}
 */
export function has(value = []) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.has.isNotBoundToAnArray);

    const isItemId = staticMethods.isItemId(value);
    const isItemIdList = staticMethods.isItemIdList(value);
    const gotNeitherItemIdNorItemIdList = !isItemId && !isItemIdList;
    if (gotNeitherItemIdNorItemIdList) throw Error(ERRORS.methods.has.gotNeitherItemIdNorItemIdList);

    let result = false;
    let values = value;
    if (isItemId) values = [value];

    const givenWasNoEmptyArray = values.length > 0;
    if (givenWasNoEmptyArray) result = values.reduce((hasIds, itemId) => hasIds && this.includes(itemId), true);

    return result
}

/**
 * @param {ItemIdList} values
 * @return {boolean}
 */
export function isEqualTo(values) {
    const isNotBoundToAnArray = !Array.isArray(this);
    if (isNotBoundToAnArray) throw Error(ERRORS.methods.isEqualTo.isNotBoundToAnArray);

    const gotNoItemIdList = !staticMethods.isItemIdList(values);
    if (gotNoItemIdList) throw Error(ERRORS.methods.isEqualTo.gotNoItemIdList);

    let result = false;

    const boundAndGivenArrayHavenTheSameLength = this.length === values.length;
    if (boundAndGivenArrayHavenTheSameLength) {
        result = values.reduce((hasIds, itemId) => hasIds && this.includes(itemId), true);
    }

    return result
}
