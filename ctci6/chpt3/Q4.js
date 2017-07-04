var Stack = require('../utils/Stack');

function MyQueue() {
    this.in = new Stack();
    this.out = new Stack();
}

MyQueue.prototype.enqueue = function(item) {
    this.in.push(item);
}

MyQueue.prototype.dequeue = function() {
    if (this.in.isEmpty()) return null;
    this._moveOut();
    var item = this.out.pop();
    if (!this.out.isEmpty()) {
        this._moveIn();
    }
    return item;
}

MyQueue.prototype._moveOut = function() {
    while (!this.in.isEmpty()) {
        this.out.push(this.in.pop());
    }
}

MyQueue.prototype._moveIn = function() {
    while (!this.out.isEmpty()) {
        this.in.push(this.out.pop());
    }
}
