import {
    _with,
    _can
} from './connectors';
// errors
import * as ERRORS from '../errors';


describe("Function Factories Array", () => {

    describe("_with", () => {

        test("is a function", () => {
            expect(typeof _with).toBe("function")
        });

        test("returns undefined per default", () => {
            expect(_with()).toBeUndefined();
        });

        test("is passing on the given object", () => {
            const object = [];
            expect(_with(object)).toBe(object);
        });

        test("is adding the key, value pair to the given object", () => {
            const object = [];
            const key = "key";
            const value = "value";
            const result = _with(object, key, value);
            expect(result.key).toBe(value)
        });

        test("throws if given value is a function", () => {
            expect(() => _with([], "add", function() {})).toThrow(ERRORS.utils._with.gotFunction);
        });

    });

    describe("_can", () => {

        test("is a function", () => {
            expect(typeof _can).toBe("function")
        });

        test("returns undefined per default", () => {
            expect(_can()).toBeUndefined();
        });

        test("is passing on the given object", () => {
            const object = [];
            expect(_can(object)).toBe(object);
        });

        test("is adding the given key, function pair to the given object", () => {
            const object = [];
            const key = "func";
            const func = function() {};
            const result = _can(object, key, func);
            expect(result.func).toBe(func)
        });

        test("throws if given function is No function", () => {
            expect(() => _can([], "key", "value")).toThrow(ERRORS.utils._can.gotNoFunction);
        });

    });

});