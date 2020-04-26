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

        describe("add", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.add.isNotBoundToAnArray).toBe("string");
            });

            test("gotNeitherItemIdNorItemIdList", () => {
                expect(typeof ERRORS.methods.add.gotNeitherItemIdNorItemIdList).toBe("string");
            });

        });

        describe("remove", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.remove.isNotBoundToAnArray).toBe("string");
            });

            test("gotNeitherItemIdNorItemIdList", () => {
                expect(typeof ERRORS.methods.remove.gotNeitherItemIdNorItemIdList).toBe("string");
            });

        });

        describe("toggle", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.toggle.isNotBoundToAnArray).toBe("string");
            });

            test("gotNeitherItemIdNorItemIdList", () => {
                expect(typeof ERRORS.methods.toggle.gotNeitherItemIdNorItemIdList).toBe("string");
            });

        });

        describe("toggleAll", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.toggleAll.isNotBoundToAnArray).toBe("string");
            });

            test("gotNoItemIdList", () => {
                expect(typeof ERRORS.methods.toggleAll.gotNoItemIdList).toBe("string");
            });

        });

        describe("has", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.has.isNotBoundToAnArray).toBe("string");
            });

            test("gotNeitherItemIdNorItemIdList", () => {
                expect(typeof ERRORS.methods.has.gotNeitherItemIdNorItemIdList).toBe("string");
            });

        });

        describe("isEqualTo", () => {

            test("isNotBoundToAnArray", () => {
                expect(typeof ERRORS.methods.isEqualTo.isNotBoundToAnArray).toBe("string");
            });

            test("gotNoItemIdList", () => {
                expect(typeof ERRORS.methods.isEqualTo.gotNoItemIdList).toBe("string");
            });

        });

    });

});