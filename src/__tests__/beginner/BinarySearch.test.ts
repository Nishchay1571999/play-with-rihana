import binary_fn from "@beginner/BinarySearch"


export function test_list(list: ArrayLists<number>): void {
    const foo = [1, 5, 9, 21, 34, 54, 69, 101, 420, 555, 3000];
    expect(binary_fn(foo, 69)).toEqual(true);
    expect(binary_fn(foo, 22)).toEqual(false);
    expect(binary_fn(foo, 2)).toEqual(false);
    expect(binary_fn(foo, 69421)).toEqual(false);
    expect(binary_fn(foo, 420)).toEqual(true);
    expect(binary_fn(foo, 0)).toEqual(false);

}
