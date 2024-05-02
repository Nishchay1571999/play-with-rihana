export default function binary_search(haystack: number[], needle: number): boolean {
    let head = 0, tail = haystack.length
    while (head < tail) {
        let mid = parseInt(`${(head + tail) / 2}`);
        if (haystack[mid] == needle) {
            return true
        }
        if (haystack[mid] < needle) {
            head = mid + 1
        }
        if (haystack[mid] > needle) {
            tail = mid - 1
        }
    }
    return false
}


binary_search([1, 5, 9, 21, 34, 54, 69, 101, 420, 555, 3000], 69)