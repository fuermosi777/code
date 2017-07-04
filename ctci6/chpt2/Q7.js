require('../utils/Array');
var Node = require('../utils/Node');

function intersection(head1, head2) {
    if (head1.last() !== head2.last()) return null;
    var longer = head1.size() > head2.size() ? head1 : head2;
    var shorter = head1 === longer ? head2 : head1;
    var flag = 0;
    var node1 = longer;
    while (flag !== longer.size() - shorter.size()) {
        node1 = node1.next;
        flag++;
    }
    var node2 = shorter;
    while (node1 !== null) {
        if (node1 === node2) return node1;
        node1 = node1.next;
        node2 = node2.next;
    }
    return null;
}

// helpers
function reverse(head) {
    var stack = [];
    var node = head;
    while (node !== null) {
        stack.push(node);
        var temp = node.next;
        node.next = null;
        node = temp;
    }
    var rNode = stack.pop();
    while (stack.length > 0) {
        rNode.next = stack.pop();
        rNode = rNode.next;
    }
}

// test
function test() {
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    var f = new Node('f');
    var g = new Node('g');
    g.next = a;
    a.next = b;
    b.next = c;
    d.next = e;
    e.next = c;
    c.next = f;
    console.log(intersection(g, d)) // -> c;
}


test();