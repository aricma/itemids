/**
 * the integration test with immer
 */


/**
 * the usage
 */
import { produce, original } from 'immer';
import { ItemIds } from "../src";


export function withImmer(state, action) {
    return produce((draft, action) => {
        if (action.type === "RUN"){
            draft["items"] = [ ...ItemIds(original(draft.items)).add(3) ]
        }
    })(state, action)
}

/**
 * the integration test
 */
test('works with immer', () => {
    const state = { items: [1,2] };
    const action = { type: "RUN" };
    const expected = { items: [1,2,3] };

    expect(withImmer(state, action)).toEqual(expected)
});