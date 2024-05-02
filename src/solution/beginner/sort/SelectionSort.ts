export default function selection_sort(arr: number[]): number[] {
    let n = arr.length

    for (let i = 0; i < n - 1; i++) {
        for (let j = i + 1; j < n; j++) {
            let min_index = arr[j] > arr[i] ? i : j
            let temp = arr[min_index]
            arr[min_index] = arr[i]
            arr[i] = temp
        }
    }
    return arr
}