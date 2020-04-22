import { ItemIds } from './itemIds';


describe("ItemIds", () => {
	
	test("is a function", () => {
		expect(typeof ItemIds).toBe("function")
	});
	
	test("returns and empty array per default", () => {
		expect(ItemIds()).toEqual([])
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


	
});