import * as ERRORS from './errors';


describe("ERRORS", () => {

    describe("ItemIds", () => {

        test("givenWasNoArray", () => {
            expect(typeof ERRORS.ItemIds.givenWasNoArray).toBe("string");
        });

    });

    describe("functionFactories", () => {

        describe("_with", () => {

            test("gotFunction", () => {
                expect(typeof ERRORS.functionFactories._with.gotFunction).toBe("string");
            });

        });

        describe("_can", () => {

            test("gotNoFunction", () => {
                expect(typeof ERRORS.functionFactories._can.gotNoFunction).toBe("string");
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

});