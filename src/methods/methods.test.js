import { set, add, remove, toggle, toggleAll, has, isEqualTo } from './methods';
import * as ERRORS from '../errors';


describe("Methods", () => {

    describe("set", () => {

        test("throws if no Array was bound", () => {
            expect(() => set()).toThrow(ERRORS.methods.set.isNotBoundToAnArray);
            expect(() => set.bind({})()).toThrow(ERRORS.methods.set.isNotBoundToAnArray);
        });

        test("throws if neither ItemIdList nor function was given", () => {
            expect(() => set.bind([])({})).toThrow(ERRORS.methods.set.gotNeitherItemIdListNorFunction);
        });

        test("returns the bound array", () => {
            const array = [1,2,3];
            expect(set.bind(array)()).toBe(array);
        });

        test("resets the bound ItemIds to []", () => {
            const array = [1,2,3];

            set.bind(array)();
            expect(array).toEqual([]);
        });

        test("is setting the given ids for bound array", () => {
            const array = [1,2,3];

            const boundSet = set.bind(array);

            boundSet([1]);
            expect(array).toEqual([1]);

            boundSet([1,2,3]);
            expect(array).toEqual([1,2,3]);
        });

        test("if a function was given, " +
            "it will be called as a reducer with the bound array as single argument " +
            "and the returned values as the arrays new values", () => {
            const array = [1,2,3];
            const reducer = jest.fn(prevIds => [prevIds[0],4,5]);

            const boundSet = set.bind(array);

            expect(boundSet(reducer)).toEqual([1,4,5]);
            expect(reducer).toBeCalledWith(array)
        });

    });

    describe("add", () => {

        test("throws if no Array was bound", () => {
            expect(() => add()).toThrow(ERRORS.methods.add.isNotBoundToAnArray);
            expect(() => add.bind({})()).toThrow(ERRORS.methods.add.isNotBoundToAnArray);
        });

        test("throws if neither ItemId nor ItemIdList was given", () => {
            expect(() => add.bind([])({})).toThrow(ERRORS.methods.add.gotNeitherItemIdNorItemIdList);
        });

        test("returns the bound array", () => {
            const array = [1,2,3];
            expect(add.bind(array)()).toBe(array);
        });

        test("is adding new id", () => {
            const array = [];

            const boundAdd = add.bind(array);
            expect(boundAdd(1)).toEqual([1]);
        });

        test("is adding new ids", () => {
            const array = [1,2,3];

            const boundAdd = add.bind(array);
            expect(boundAdd([4,5,6])).toEqual([1,2,3,4,5,6])
        });

    });

    describe("remove", () => {

        test("throws if no Array was bound", () => {
            expect(() => remove()).toThrow(ERRORS.methods.remove.isNotBoundToAnArray);
            expect(() => remove.bind({})()).toThrow(ERRORS.methods.remove.isNotBoundToAnArray);
        });

        test("throws if neither ItemId nor ItemIdList was given", () => {
            expect(() => remove.bind([])({})).toThrow(ERRORS.methods.remove.gotNeitherItemIdNorItemIdList);
        });

        test("returns the bound array", () => {
            const array = [1,2,3];
            expect(remove.bind(array)()).toBe(array);
        });

        test("is removing id", () => {
            const array = [1,2,3];

            const boundRemove = remove.bind(array);
            expect(boundRemove(2)).toEqual([1,3]);
        });

        test("is removing new ids", () => {
            const array = [1,2,3];

            const boundRemove = remove.bind(array);
            expect(boundRemove([1,3])).toEqual([2]);
        });

        test("is skipping any itemIds that can not be found in bound array", () => {
            const array = [1,2,3];

            const boundRemove = remove.bind(array);
            expect(boundRemove([1,4,3])).toEqual([2]);
        });

    });

    describe("toggle", () => {

        test("throws if no Array was bound", () => {
            expect(() => toggle()).toThrow(ERRORS.methods.toggle.isNotBoundToAnArray);
            expect(() => toggle.bind({})()).toThrow(ERRORS.methods.toggle.isNotBoundToAnArray);
        });

        test("throws if neither ItemId nor ItemIdList was given", () => {
            expect(() => toggle.bind([])({})).toThrow(ERRORS.methods.toggle.gotNeitherItemIdNorItemIdList);
        });

        test("returns the bound array", () => {
            const array = [1,2,3];
            expect(toggle.bind(array)()).toBe(array);
        });

        test("is removing existing id", () => {
            const array = [1,2,3];

            const boundToggle = toggle.bind(array);
            expect(boundToggle(2)).toEqual([1,3]);
        });

        test("is adding missing id", () => {
            const array = [1,2,3];

            const boundToggle = toggle.bind(array);
            expect(boundToggle(4)).toEqual([1,2,3,4]);
        });

        test("is accepting arrays", () => {
            const array = [1,2,3];

            const boundToggle = toggle.bind(array);
            expect(boundToggle([2,4])).toEqual([1,3,4]);
        });

    });

    describe("toggleAll", () => {

        test("throws if no Array was bound", () => {
            expect(() => toggleAll()).toThrow(ERRORS.methods.toggleAll.isNotBoundToAnArray);
            expect(() => toggleAll.bind({})()).toThrow(ERRORS.methods.toggleAll.isNotBoundToAnArray);
        });

        test("throws if No ItemIdList was given", () => {
            expect(() => toggleAll.bind([])({})).toThrow(ERRORS.methods.toggleAll.gotNoItemIdList);
        });

        test("returns the bound array", () => {
            const array = [1,2,3];
            expect(toggleAll.bind(array)()).toBe(array);
        });

        test("is adding all missing itemIds from given possible itemIds to the bound array", () => {
            const array = [1,2,3];

            const boundToggleAll = toggleAll.bind(array);
            expect(boundToggleAll([1,2,3,4,5,6])).toEqual([1,2,3,4,5,6]);
            expect(boundToggleAll([4,5,6])).toEqual([4,5,6])
        });

        test("is removing all ids if bound array has all itemIds from given array", () => {
            const array = [1,2,3];

            const boundToggleAll = toggleAll.bind(array);
            expect(boundToggleAll([1,2,3])).toEqual([])
        });

    });

    describe("has", () => {

        test("throws if no Array was bound", () => {
            expect(() => has()).toThrow(ERRORS.methods.has.isNotBoundToAnArray);
            expect(() => has.bind({})()).toThrow(ERRORS.methods.has.isNotBoundToAnArray);
        });

        test("throws if neither ItemId nor ItemIdList was given", () => {
            expect(() => has.bind([])({})).toThrow(ERRORS.methods.has.gotNeitherItemIdNorItemIdList);
        });

        test("returns false per default", () => {
            const array = [1,2,3];
            expect(has.bind(array)()).toBeFalsy();
        });

        test("is true if id is in bound array", () => {
            const array = [1,2,3];

            const boundHas = has.bind(array);
            expect(boundHas(1)).toBeTruthy();
        });

        test("is false if id is not in bound array", () => {
            const array = [1,2,3];

            const boundHas = has.bind(array);
            expect(boundHas(4)).toBeFalsy();
        });

        test("is handling arrays", () => {
            const array = [1,2,3];

            const boundHas = has.bind(array);
            expect(boundHas([2,3])).toBeTruthy();
        });

        test("is false if only one id in the given array is not part of the bound array", () => {
            const array = [1,2,3];

            const boundHas = has.bind(array);
            expect(boundHas([2,4])).toBeFalsy();
        });

    });

    describe("isEqualTo", () => {

        test("throws if no Array was bound", () => {
            expect(() => isEqualTo()).toThrow(ERRORS.methods.isEqualTo.isNotBoundToAnArray);
            expect(() => isEqualTo.bind({})()).toThrow(ERRORS.methods.isEqualTo.isNotBoundToAnArray);
        });

        test("throws if No ItemIdList was given", () => {
            expect(() => isEqualTo.bind([])({})).toThrow(ERRORS.methods.isEqualTo.gotNoItemIdList);
        });

        test("is true if the lists have both no length", () => {
            const array = [];

            const boundIsEqualTo = isEqualTo.bind(array);
            expect(boundIsEqualTo([])).toBeTruthy();
        });

        test("is true if the lists have both the same length and the same itemIds", () => {
            const array = [1,2,3];

            const boundIsEqualTo = isEqualTo.bind(array);
            expect(boundIsEqualTo([1,2,3])).toBeTruthy();
        });

        test("is false if the lists have NOT the same length", () => {
            const array = [1,2,3];

            const boundIsEqualTo = isEqualTo.bind(array);
            expect(boundIsEqualTo([1,2])).toBeFalsy();
        });

        test("is false if the lists have the same length but NOT the same ids", () => {
            const array = [1,2,3];

            const boundIsEqualTo = isEqualTo.bind(array);
            expect(boundIsEqualTo([1,4,3])).toBeFalsy();
        });

    });

});