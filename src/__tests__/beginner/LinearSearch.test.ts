import linear_fn from "../../../src/beginner/LinearSearch";
import linear_fn_solution from "../../../src/solution/beginner/search/LinearSearch";

const foo = [1, 5, 9, 21, 34, 54, 69, 101, 420, 555, 3000];
const stageArg = process.argv.filter((x) => x.startsWith("-stage="))[0];
const stage = stageArg ? stageArg.split("=")[1] : "solution";

export function test_list() {
    if (stage === "solution") {
        expect(linear_fn_solution(foo, 69)).toEqual(true);
        expect(linear_fn_solution(foo, 22)).toEqual(false);
        expect(linear_fn_solution(foo, 2)).toEqual(false);
        expect(linear_fn_solution(foo, 69421)).toEqual(false);
        expect(linear_fn_solution(foo, 420)).toEqual(true);
        expect(linear_fn_solution(foo, 0)).toEqual(false);
    } else {
        expect(linear_fn(foo, 69)).toEqual(true);
        expect(linear_fn(foo, 22)).toEqual(false);
        expect(linear_fn(foo, 2)).toEqual(false);
        expect(linear_fn(foo, 69421)).toEqual(false);
        expect(linear_fn(foo, 420)).toEqual(true);
        expect(linear_fn(foo, 0)).toEqual(false);
    }
}

test("Linear Search Test", test_list);
