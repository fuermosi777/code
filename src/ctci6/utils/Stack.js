function Stack() {
    this.data = [];
}

Stack.prototype.pop = function() {
    return this.data.pop();
}

Stack.prototype.push = function(item) {
    this.data.push(item);
}

Stack.prototype.peek = function() {
    return this.data[this.data.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.data.length === 0;
}

module.exports = Stack;

function test() {
    var stack = new Stack();
    stack.push(3);
}

if (require.main === module) test();