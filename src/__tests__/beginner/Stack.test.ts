import Stack_Solution from '../../solution/beginner/Stack'
import Stack from '../../beginner/Stack'

const stageArg = process.argv.filter((x) => x.startsWith("-stage="))[0];
const stage = stageArg ? stageArg.split("=")[1] : "solution";

let stack: any;
if (stage === "solution") {
    stack = new Stack_Solution(5)
} else {
    stack = new Stack(5)
}
function test_stack_push() {
    expect(stack.push(1)).toEqual(undefined);
    expect(stack.push(2)).toEqual(undefined);
    expect(stack.push(3)).toEqual(undefined);
    expect(stack.push(4)).toEqual(undefined);
    expect(stack.push(5)).toEqual(undefined);
}

function test_stack_pop() {
    expect(stack.pop()).toEqual(5);
    expect(stack.pop()).toEqual(4);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
}


test("Pushing on to the Stack ", test_stack_push)

test("Pushing more elements than designated ", () => {
    expect(() => {
        stack.push(1)
    }).toThrow("Stack Overflow");
})

test("Popings elements from the Stack ", test_stack_pop)

test("Poping Elements after emptying the stacks", () => {
    expect(() => {
        stack.pop()
    }).toThrow("Stack Underflow");
})