import { ItemIds } from './itemIds';


describe("ItemIds", () => {
	
	test("is a function", () => {
		expect(typeof ItemIds).toBe("function")
	});
	
	test("returns and empty array per default", () => {
		const itemIds = ItemIds();
		expect(itemIds).toEqual([]);
	});
	
	test("takes given array and returns it as an instance of ItemIds", () => {
		const array = [1,2,3];
		const itemIds = ItemIds(array);
		
		expect(itemIds).toEqual(array);
		expect(itemIds).toBeInstanceOf(Array)
	});
	
	test("throws if given array was not of type Array", () => {
		expect(() => ItemIds(1)).toThrow();
		expect(() => ItemIds("string")).toThrow();
		expect(() => ItemIds({})).toThrow();
	});

	test("does not allow duplicates", () => {
		const array = [1,2,2,3];
		const itemIds = ItemIds(array);

		expect(itemIds).toEqual([1,2,3]);
	});

	describe("identity", () => {

		test("has the name prop with the value: \"ItemIds\"", () => {
			expect(ItemIds().name).toBe("ItemIds");
		});

	});

	describe("static methods", () => {

		test("isItemIds", () => {
			expect(typeof ItemIds.isItemIds).toBe("function")
		});

		test("isItemId", () => {
			expect(typeof ItemIds.isItemId).toBe("function")
		});

		test("isItemIdList", () => {
			expect(typeof ItemIds.isItemIdList).toBe("function")
		});

		test("unify", () => {
			expect(typeof ItemIds.unify).toBe("function")
		});

	});

	describe("methods", () => {

		test("set", () => {
			expect(typeof ItemIds().set).toBe("function")
		});

		test("add", () => {
			expect(typeof ItemIds().add).toBe("function")
		});

		test("remove", () => {
			expect(typeof ItemIds().remove).toBe("function")
		});

		test("toggle", () => {
			expect(typeof ItemIds().toggle).toBe("function")
		});

		test("toggleAll", () => {
			expect(typeof ItemIds().toggleAll).toBe("function")
		});

		test("has", () => {
			expect(typeof ItemIds().has).toBe("function")
		});

		test("isEqualTo", () => {
			expect(typeof ItemIds().isEqualTo).toBe("function")
		});

	});
	
});