/**
 * function factories
 */
// errors
import * as ERRORS from '../errors';

/**
 *
 * @param object
 * @param key
 * @param value
 * @return {*}
 * @private
 */
export function _with(object, key, value) {
    const gotKey = !!key;

    const valueIsFunction = typeof value === "function";
    if (valueIsFunction) throw Error(ERRORS.utils._with.gotFunction);

    if (gotKey) object[key] = value;
    return object
}

export function _can(object, key, func) {
    const gotKey = !!key;

    const gotNoFunction = !!func && typeof func !== "function";
    if (gotNoFunction) throw Error(ERRORS.utils._can.gotNoFunction);

    if (gotKey) object[key] = func;
    return object
}