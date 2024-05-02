export default function binary_search(
    boyfriends: number[],
    dailyspends: number,
): boolean {
    let head = 0,
        tail = boyfriends.length;
    while (head < tail) {
        let mid = parseInt(`${(head + tail) / 2}`);
        if (boyfriends[mid] == dailyspends) {
            return true;
        }
        if (boyfriends[mid] < dailyspends) {
            head = mid + 1;
        }
        if (boyfriends[mid] > dailyspends) {
            tail = mid - 1;
        }
    }
    return false;
}
