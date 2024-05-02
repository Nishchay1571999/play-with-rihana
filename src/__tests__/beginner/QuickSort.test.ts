import quick_sort_solution from "../../solution/beginner/divideandconquer/QuickSort";
import quick_sort from "../../beginner/QuickSort";

const stageArg = process.argv.filter((x) => x.startsWith("-stage="))[0];
const stage = stageArg ? stageArg.split("=")[1] : "solution";

const case1 = [5, 6, 1, 3, 7, 8, 2, 10, 11, 22]
const solu1 = [1, 2, 3, 5, 6, 7, 8, 10, 11, 22]

const case2 = [5, 1, 3, 6, 9]
const solu2 = [1, 3, 5, 6, 9]

const case3 = [12, 64, 11, 25, 22, 34, 90]
const solu3 = [11, 12, 22, 25, 34, 64, 90]


export function test_list() {
    if (stage === "solution") {
        expect(quick_sort_solution(case1, 0, case1.length - 1)).toEqual(solu1);
        expect(quick_sort_solution(case2, 0, case2.length - 1)).toEqual(solu2);
        expect(quick_sort_solution(case3, 0, case3.length - 1)).toEqual(solu3);
    } else {
        expect(quick_sort(case1)).toEqual(solu1);
        expect(quick_sort(case2)).toEqual(solu2);
        expect(quick_sort(case3)).toEqual(solu3);
    }
}

test("Quick Sort Test", test_list)