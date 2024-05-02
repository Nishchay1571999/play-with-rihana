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
        console.log("INDEX", pivot_index)
        console.log("VALUE", arr[pivot_index])
        quick_sort(arr, low, pivot_index - 1);
        quick_sort(arr, pivot_index + 1, high)
    }

    return arr.filter(num => num !== undefined && num !== null)
}
// console.log("================================")

// console.log(quick_sort([5, 1, 3, 6, 9, 18, 11, 22], 0, [5, 1, 3, 6, 9, 18, 11, 22].length - 1))



//  Explaination:
/**
 * 
 * I think here a little bit explaination is requirerd... 
 * I am not sure why this feels a little bit unecessarily complicatate 
 * It would be better to understand this first hand before jumping to the solution.
 * The main assumption of Quicksort is that the last indexed element of the array is the maximum. Here I have taken 
 * given the maximum at the end of the test case thats why there is no need to push INT_MAX to the array. This easse a lot of things 
 * that are somewhat worrisome. 
 * 
 * So the Somewhat of the algorithm is like this :
 * if(low < high){
 *      Divide the partition by two half 
 *          how ??
 *                the above pivot index and pivot is based out of the fact that last digit is the maximum and the low
 *                will be out of bounds
 *                now for each Element check if the its smaller than pivot 
 *                if it is increase the pivot index by one and swap that element with the pivot index 
 * WHY??
 *                Lets take an Example
 * 
 *                  [5, 1, 3, 6, 9, 18, 11, 22]
 *                  be our array 
 *                  1st Iter : 
 *  low = 0,
 *  high = 8
                            * pivot_index = -1 
                            * pivot 22
                            * for lop 
                                * 5 < 22 
                                * true 
                                * pivot_idex = 0
                                * i = 0 
                                * swap No point in having this
                                * goes back to loop now i = 1
                                * 1 < 22
                                * pivot_index = 2
                                * same swap no point... 
                                * at this point the whole array is finished untill pivot_index keeps 
                                * Why increment the pivot_index ? TO get the next Element which we have tp swap to get the 
                                * partition. This will be pour Divided arra set for the next Series
 *                if it is not then that means it cannot be the pivot for the next iteration
 *                    
 * }
 * If still this feels confusing just uncomment the console logs add in some of you own logs and check out the function with
 * This command :
 * npx ts-node ./src/solution/beginner/divideandconquer/QuickSort.ts
 * Will Show you all the required info
 * 
 */