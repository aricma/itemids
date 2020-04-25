import { isItemIds, isItemId, isItemIdList, unify } from './staticMethods';
import { ItemIds } from '../itemIds';
import * as ERRORS from '../errors';


describe("Static Methods", () => {

    describe("isItemIds", () => {

        test("does return false per default", () => {
            expect(isItemIds()).toBeFalsy()
        });

        test("returns false if given object is No Array", () => {
            expect(isItemIds({ name: "ItemIds" })).toBeFalsy()
        });

        test("returns true if given object has the key \"name\" with value \"ItemIds\"", () => {
            expect(isItemIds(ItemIds())).toBeTruthy()
        });

    });

    describe("isItemId", () => {

        test("returns false per default", () => {
            expect(isItemId()).toBeFalsy();
        });

        test("is true if given were string or number", () => {
            expect(isItemId("id")).toBeTruthy();
            expect(isItemId(1)).toBeTruthy()
        });

        test("is false if neither string nor number were given", () => {
            expect(isItemId(true)).toBeFalsy();
            expect(isItemId([])).toBeFalsy();
            expect(isItemId({})).toBeFalsy();
            expect(isItemId(NaN)).toBeFalsy();
        });
    });

    describe("isItemIdList", () => {

        test("returns false per default", () => {
            expect(isItemIdList()).toBeFalsy();
        });

        test("is true if given was an array of ids", () => {
            expect(isItemIdList([])).toBeTruthy();
            expect(isItemIdList([1,2,3])).toBeTruthy();
            expect(isItemIdList([1,"string",3])).toBeTruthy();
        });

        test("is false if no array of ids was given", () => {
            expect(isItemIdList({})).toBeFalsy();
            expect(isItemIdList([{}])).toBeFalsy();
            expect(isItemIdList([1,true])).toBeFalsy();
        });

    });

    describe("unify", () => {

        test("throws if no ItemIdList was given", () => {
            expect(() => unify({})).toThrow(ERRORS.staticMethods.unify.gotNoItemIdList);
        });

        test("returns an empty array per default", () => {
            expect(unify()).toEqual([]);
        });

        test("is removing all duplicates", () => {
            expect(unify([1,2,3,2])).toEqual([1,2,3]);
            expect(unify(["1","2","3","2"])).toEqual(["1","2","3"]);
        });

        test("can handle ItemIds objects", () => {
            const itemIds = ItemIds([1,2,3,1]);
            const result = unify(itemIds);
            expect([ ...result ]/*get the values*/).toEqual([1,2,3]);
        });

        test("is mutating", () => {
            const itemIds = [1,2,3,1];
            expect(unify(itemIds)).toBe(itemIds);
        });

    });

});