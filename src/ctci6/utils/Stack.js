function Stack() {
    this.data = [];
}

Stack.prototype.pop = function() {
    if (this.isEmpty()) return null;
    return this.data.pop();
}

Stack.prototype.push = function(item) {
    this.data.push(item);
}

Stack.prototype.peek = function() {
    if (this.isEmpty()) return null;
    return this.data[this.data.length - 1];
}

Stack.prototype.isEmpty = function() {
    return this.data.length === 0;
}

Stack.prototype.size = function() {
    return this.data.length;
}

Stack.prototype.find = function(key) {
    if (!this.data[key]) return null;
    return this.data[key];
}

Stack.prototype.toString = function() {
    return this.data.join(" - ");
}

Stack.prototype.remove = function(key) {
    if (!this.data[key]) return null;
    for (var i = key; i < this.data.length - 2; i++) {
        this.data[i] = this.data[i + 1];
    }
    this.data[this.data.length - 1] = null;
}

module.exports = Stack;

function test() {
    var stack = new Stack();
    stack.push(3);
}

if (require.main === module) test();