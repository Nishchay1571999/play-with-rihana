import binary_fn from "../../beginner/BinarySearch"
import binary_fn_solution from "../../solution/beginner/divideandconquer/BinarySearch"


const foo = [1, 5, 9, 21, 34, 54, 69, 101, 420, 555, 3000];
const stageArg = process.argv.filter((x) => x.startsWith('-stage='))[0]
const stage = stageArg ? stageArg.split('=')[1] : 'solution'
export function test_list() {
    if (stage === 'solution') {
        expect(binary_fn_solution(foo, 69)).toEqual(true);
        expect(binary_fn_solution(foo, 22)).toEqual(false);
        expect(binary_fn_solution(foo, 2)).toEqual(false);
        expect(binary_fn_solution(foo, 69421)).toEqual(false);
        expect(binary_fn_solution(foo, 420)).toEqual(true);
        expect(binary_fn_solution(foo, 0)).toEqual(false);
    } else {
        expect(binary_fn(foo, 69)).toEqual(true);
        expect(binary_fn(foo, 22)).toEqual(false);
        expect(binary_fn(foo, 2)).toEqual(false);
        expect(binary_fn(foo, 69421)).toEqual(false);
        expect(binary_fn(foo, 420)).toEqual(true);
        expect(binary_fn(foo, 0)).toEqual(false);
    }

}



test('Binary Search Test', test_list)