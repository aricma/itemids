export function canAdd(object) {
    const isDefined = !!object;
    if (isDefined) object.add = function() {};
    return object
}