import * as ERRORS from './errors';


describe("ERRORS", () => {

    describe("ItemIds", () => {

        test("givenWasNoArray", () => {
            expect(typeof ERRORS.ItemIds.givenWasNoArray).toBe("string");
        });

    });

    describe("utils", () => {

        describe("_with", () => {

            test("gotFunction", () => {
                expect(typeof ERRORS.utils._with.gotFunction).toBe("string");
            });

        });

        describe("_can", () => {

            test("gotNoFunction", () => {
                expect(typeof ERRORS.utils._can.gotNoFunction).toBe("string");
            });

        });

    });

    describe("staticMethods", () => {

        describe("unify", () => {

            test("gotNoItemIdList", () => {
                expect(typeof ERRORS.staticMethods.unify.gotNoItemIdList).toBe("string");
            });

        });

    });

    describe("methods", () => {

        describe("set", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.set.isNotBoundToAnArray).toBe("string");
            });

            test("gotNeitherItemIdListNorFunction", () => {
                expect(typeof ERRORS.methods.set.gotNeitherItemIdListNorFunction).toBe("string");
            });

        });

    });

});