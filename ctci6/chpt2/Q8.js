var Node = require('../utils/Node');

function loopStart(head) {
    var node = head;
    while (node && !node.isVisited()) {
        node.visit();
        node = node.next;
    }
    return node;
}

function test() {
    var a = new Node("a");
    var b = new Node("b");
    var c = new Node("c");
    var d = new Node("d");
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = b;
    console.log(loopStart(a));
}

test();