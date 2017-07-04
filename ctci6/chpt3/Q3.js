var Stack = require('../utils/Stack');

function SetOfStacks(threshold) {
    this.threshold = threshold;
    this.stacks = new Stack();
}

SetOfStacks.prototype.push = function(item) {
    var stack = this.stacks.peek();
    if (stack === null) {
        stack = new Stack();
        stack.push(item);
        this.stacks.push(stack);
    } else {
        if (stack.size() >= this.threshold) {
            var addStack = new Stack();
            addStack.push(item);
            this.stacks.push(addStack);
        } else {
            stack.push(item);
        }
    }
}

SetOfStacks.prototype.pop = function() {
    var peekStack = this.stacks.pop();
    if (peekStack === null) return null;
    var item = peekStack.pop();
    if (!peekStack.isEmpty()) {
        this.stacks.push(peekStack);
    }
    return item;
}

SetOfStacks.prototype.popAt = function(key) {
    var stack = this.stacks.find(key);
    if (stack === null) return null;
    var item = stack.pop();
    if (stack.isEmpty()) {
        this.stacks.remove(key);
    }
    return item;
}

function test() {
    var st = new SetOfStacks(2);
    st.push(1);
    st.push(1);
    st.push(1);
    st.push(1);
    st.push(1);
    st.pop();
    console.log(st.stacks);

}

test();