export default function linear_search(
    boyfriends: number[],
    dailyspends: number,
): boolean {
    for (let i = 0; i < boyfriends.length; i++) {
        if (boyfriends[i] == dailyspends) {
            return true;
        }
    }
    return false;
}
