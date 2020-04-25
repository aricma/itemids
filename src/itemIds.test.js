import { ItemIds } from './itemIds';
// MOCKS
import * as connectors from './utils/connectors';


const MockedStore = {};


describe("ItemIds", () => {
	
	test("is a function", () => {
		expect(typeof ItemIds).toBe("function")
	});
	
	test("returns and empty array per default", () => {
		const itemIds = ItemIds();

		expect(Array.isArray(itemIds)).toBeTruthy();
		expect(itemIds.length).toBe(0)
	});
	
	test("takes given array and retruns it as an instance of ItemIds", () => {
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

	describe("identity", () => {

		test("calls the _with connector with \"name\" and \"ItemIds\" as key, value pair", () => {
			// mocks
			MockedStore["connectors"] = {};
			MockedStore["connectors"]["_with"] = connectors._with;
			connectors._with = jest.fn();

			ItemIds();
			expect(connectors._with).toBeCalledWith([], "name", "ItemIds");

			// un-mock
			connectors._with = MockedStore.connectors._with
		});

		test("has the name prop with the value: \"ItemIds\"", () => {
			const itemIds = ItemIds();

			expect(itemIds.name).toBe("ItemIds");
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
	
});