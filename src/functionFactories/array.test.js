import { canAdd } from './array';


describe("Function Factories Array", () => {

    describe("canAdd", () => {

        test("is a function", () => {
            expect(typeof canAdd).toBe("function")
        });

        test("returns undefined per default", () => {
            expect(canAdd()).toBeUndefined();
        });

        test("is passing on the given object", () => {
            const object = [];
            expect(canAdd(object)).toBe(object);
        });

        test("is adding the function \"add\" to the given object", () => {
            const object = [];
            const result = canAdd(object);
            expect(typeof result.add).toBe("function")
        });

    });

});