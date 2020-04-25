import { set } from './methods';
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

});