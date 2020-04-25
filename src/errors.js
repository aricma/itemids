export const ItemIds = {
	givenWasNoArray: "ItemIds expects one argument of type Array."
};

export const utils = {
	_with: {
		gotFunction: "_with does not allow given value to be a function."
	},
	_can: {
		gotNoFunction: "_can expects the given arg \"func\" to be of type function"
	}
};

export const staticMethods = {
	unify: {
		gotNoItemIdList: "unify expects one argument of type ItemIdList"
	}
};

export const methods = {
	set: {
		isNotBoundToAnArray: "set needs to be bound to an Array",
		gotNeitherItemIdListNorFunction: "set expects one argument of either type ItemIdList or function",
	}
};