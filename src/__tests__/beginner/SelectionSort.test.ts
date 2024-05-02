import selection_sort_solution from "../../solution/beginner/sort/SelectionSort";
import selection_sort from "../../beginner/SelectionSort";

const stageArg = process.argv.filter((x) => x.startsWith("-stage="))[0];
const stage = stageArg ? stageArg.split("=")[1] : "solution";

const case1 = [5, 6, 1, 3, 7, 8, 22, 10, 11, 2]
const solu1 = [1, 2, 3, 5, 6, 7, 8, 10, 11, 22]

const case2 = [6, 0, 3, 5]
const solu2 = [0, 3, 5, 6]

const case3 = [90, 64, 11, 25, 22, 34, 12]
const solu3 = [11, 12, 22, 25, 34, 64, 90]


export function test_list() {
    if (stage === "solution") {
        expect(selection_sort_solution(case1)).toEqual(solu1);
        expect(selection_sort_solution(case2)).toEqual(solu2);
        expect(selection_sort_solution(case3)).toEqual(solu3);
    } else {
        expect(selection_sort(case1)).toEqual(solu1);
        expect(selection_sort(case2)).toEqual(solu2);
        expect(selection_sort(case3)).toEqual(solu3);
    }
}

test("Selection Sort Test", test_list)