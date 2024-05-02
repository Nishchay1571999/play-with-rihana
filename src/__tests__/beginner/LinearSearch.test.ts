import linear_fn from "@beginner/LinearSearch"


export function test_list(list: ArrayLists<number>): void {
    const foo = [1, 5, 9, 21, 34, 54, 69, 101, 420, 555, 3000];
    expect(linear_fn(foo, 69)).toEqual(true);
    expect(linear_fn(foo, 22)).toEqual(false);
    expect(linear_fn(foo, 2)).toEqual(false);
    expect(linear_fn(foo, 69421)).toEqual(false);
    expect(linear_fn(foo, 420)).toEqual(true);
    expect(linear_fn(foo, 0)).toEqual(false);

}
