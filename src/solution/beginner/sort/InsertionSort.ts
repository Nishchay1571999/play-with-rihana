export default function insertion_sort(arr: number[]): number[] {
    for (let i = 1; i < arr.length; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1
        }
        arr[j + 1] = key
    }
    return arr
}


const case1 = [5, 6, 1, 3, 7, 8, 2, 10, 11, 22]
const solu1 = [1, 2, 3, 5, 6, 7, 8, 10, 11, 22]


console.log(insertion_sort(case1))