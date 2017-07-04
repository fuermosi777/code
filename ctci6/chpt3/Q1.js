function TripleStacks() {
    this.data = [];
    this.sizes = [0, 0, 0];
}

TripleStacks.prototype.push = function(whichStack, item) {
    if (whichStack < 0 || whichStack > 2) return;
    this.data[3 * this.sizes[whichStack] + whichStack] = item;
    this.sizes[whichStack]++;
};

TripleStacks.prototype.pop = function(whichStack) {
    if (whichStack < 0 || whichStack > 2) return null;
    var delKey = 3 * (this.sizes[whichStack] - 1) + whichStack;
    if (delKey < 0) return null;
    var del = this.data[delKey];
    this.data[delKey] = null;
    return del;
};

function test() {
    var stack = new TripleStacks();
    stack.push(0, 'a');
    stack.push(2, 'a');
    stack.push(0, 'b');
    stack.push(1, 'a');
    console.log(stack.pop(1));
}

test();