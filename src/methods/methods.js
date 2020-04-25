import * as ERRORS from "../errors";
import * as staticMethods from '../staticMethods';


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

// add

// remove

// toggle

// toggleAll

// has

// isEqualTo