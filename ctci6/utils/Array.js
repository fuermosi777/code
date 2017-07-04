var Node = require('./Node');

Array.prototype.toLinkedList = function() {
    var head;
    var last;
    for (var i = 0; i < this.length; i++) {
        var node = new Node(this[i]);
        if (i === 0) {
            head = node;
        }
        if (i > 0) {
            last.next = node;
        }
        last = node;
    }
    return head;
};

module.exports = Array;

// test
function test() {
    var array = [1,2,3,4,5];
    console.log(array.toLinkedList().toString());
}

if (require.main === module) test();