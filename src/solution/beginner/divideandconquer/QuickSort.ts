export default function quick_sort(arr: number[], low: number, high: number): number[] {
    if (low < high) {
        let pivot = arr[high];
        let pivot_index = low - 1
        for (let i = low; i <= high - 1; i++) {
            if (arr[i] < pivot) {
                pivot_index++;
                [arr[pivot_index], arr[i]] = [arr[i], arr[pivot_index]];
            }
        }
        [arr[pivot_index + 1], arr[high]] = [arr[high], arr[pivot_index + 1]];
        pivot_index++;
        console.log(pivot, pivot_index)
        quick_sort(arr, low, pivot_index - 1);
        quick_sort(arr, pivot_index + 1, high)
    }

    return arr.filter(num => num !== undefined && num !== null)
}
// console.log("================================")

console.log(quick_sort([5, 1, 3, 6, 9, 18, 11, 22], 0, [5, 1, 3, 6, 9, 18, 11, 22].length - 1))