export default class Stack<T> {
    public length: number;
    private data: Array<T | null>;



    constructor(length: number) {
        this.length = length
        this.data = []
    }

    push(item: T): void {
        if (this.data.length == this.length) {
            throw new Error("Stack Overflow")
        } else {
            this.data[this.data.length] = item
        }
        return undefined
    }
    pop(): T | null {
        if (this.data.length == 0) {
            throw new Error("Stack Underflow")
        } else {
            let val = this.data[this.data.length - 1]
            this.data[this.data.length - 1] = null
            this.data = this.data.filter(val => val != null)
            return val
        }
    }
    peek(): Array<T | null> | undefined {
        return this.data
    }
}

