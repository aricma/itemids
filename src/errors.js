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
	},
	add: {
		isNotBoundToAnArray: "add needs to be bound to an Array",
		gotNeitherItemIdNorItemIdList: "add expects one argument of either type ItemId or ItemIdList"
	},
	remove: {
		isNotBoundToAnArray: "remove needs to be bound to an Array",
		gotNeitherItemIdNorItemIdList: "remove expects one argument of either type ItemId or ItemIdList"
	},
	toggle: {
		isNotBoundToAnArray: "toggle needs to be bound to an Array",
		gotNeitherItemIdNorItemIdList: "toggle expects one argument of either type ItemId or ItemIdList"
	},
	toggleAll: {
		isNotBoundToAnArray: "toggleAll needs to be bound to an Array",
		gotNoItemIdList: "toggleAll expects one argument of type ItemIdList"
	},
	has: {
		isNotBoundToAnArray: "has needs to be bound to an Array",
		gotNeitherItemIdNorItemIdList: "has expects one argument of either type ItemId or ItemIdList"
	},
	isEqualTo: {
		isNotBoundToAnArray: "isEqualTo needs to be bound to an Array",
		gotNoItemIdList: "add expects one argument of type ItemIdList"
	}
};