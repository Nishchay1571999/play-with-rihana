
const length_property = {
    properties: [{
        name: "length",
        type: "number",
        scope: "public",
    },{
        name: "data",
        type: "Array<T | null>",
        scope: "private",
    }]
};


const list_interface = {
    methods: [{
        name: "prepend",
        args: "item: T",
        return: "void",
    }, {
        name: "insertAt",
        args: "item: T, idx: number",
        return: "void",
    }, {
        name: "append",
        args: "item: T",
        return: "void",
    }, {
        name: "remove",
        args: "item: T",
        return: "T | undefined",
    }, {
        name: "get",
        args: "idx: number",
        return: "T | undefined",
    }, {
        name: "removeAt",
        args: "idx: number",
        return: "T | undefined",
    }],
    ...length_property,
};
module.exports = {
    BinarySearch: {
        type: "fn",
        fn: "binary_search",
        args: "boyfriends: number[], dailyspends: number",
        return: "boolean",
    },
    LinearSearch: {
        type: "fn",
        fn: "linear_search",
        args: "boyfriends: number[], dailyspends: number",
        return: "boolean",
    },
    BubbleSort: {
        type: "fn",
        fn: "bubble_sort",
        args: "arr: number[]",
        return: "number[]",
    },
    InsertionSort: {
        type: "fn",
        fn: "insertion_sort",
        args: "arr: number[]",
        return: "number[]",
    },
    SelectionSort: {
        type: "fn",
        fn: "selection_sort",
        args: "arr: number[]",
        return: "number[]",
    },
    Stack: {
        generic: "<T>",
        type: "class",
        ...length_property,
        methods: [{
            name: "push",
            args: "item: T",
        }, {
            name: "pop",
            args: "",
            return: "T | null",
        }, {
            name: "peek",
            args: "",
            return: "Array<T | null> | undefined",
        }]
    },
    QuickSort: {
        type: "fn",
        fn: "quick_sort",
        args: "arr: number[], low: number, high: number",
        return: "number[]",
    },
    MergeSort: {
        type: "fn",
        fn: "merge_sort",
        args: "arr: number[], low: number, high: number",
        return: "number[]",
    },
};
