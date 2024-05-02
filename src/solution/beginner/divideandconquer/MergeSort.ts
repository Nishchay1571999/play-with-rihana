export default function merge_sort(arr: number[], head: number, tail: number): number[] {
    if (head >= tail) {
        return arr
    }
    let middle = head + parseInt(`${(tail - head) / 2}`)
    merge_sort(arr, head, middle)
    merge_sort(arr, middle + 1, tail)

    let left_array = []
    let right_array = []
    var left_length = middle - head + 1;
    var right_length = tail - middle;
    for (let i = 0; i < left_length; i++) {
        left_array.push(arr[head + i])
    }
    for (let i = 0; i < right_length; i++) {
        right_array.push(arr[middle + 1 + i])
    }
    let i = 0, j = 0, k = head;

    while (i < left_length && j < right_length) {
        if (left_array[i] < right_array[j]) {
            arr[k] = left_array[i]
            i++;
        } else {
            arr[k] = right_array[j]
            j++;
        }
        k++;
    }
    while (i < left_length) {
        arr[k] = left_array[i]
        i++;
        k++;
    }
    while (j < right_length) {
        arr[k] = right_array[j]
        j++;
        k++
    }
    return arr
}
