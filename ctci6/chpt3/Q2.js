function StackMin() {
    this.data = [];
    this.minState = [];
}

StackMin.prototype.push = function(item) {
    var min = this.min();
    if (item < min || !min) {
        this.minState.push(item);
    } else {
        this.minState.push(min);
    }
    this.data.push(item);
}

StackMin.prototype.min = function() {
    return this.minState[this.minState.length - 1];
}

StackMin.prototype.pop = function() {
    if (this.data.length === 0) return null;
    var item = this.data.pop();
    this.minState.pop();
    return item;
}

function test() {
    var sm = new StackMin();
    sm.push(2);
    console.log(sm.min());
    sm.push(1);
    console.log(sm.min());
    sm.pop();
    console.log(sm.min());
}

test();