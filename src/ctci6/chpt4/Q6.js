var Queue = require('../utils/Queue');

function next(node) {
    var q = new Queue();
    
    dfs(q, root(node));

    while (!q.isEmpty()) {
        if (node == q.dequeue()) {
            break;
        }
    }

    if (q.isEmpty()) {
        return null;
    } else {
        return q.dequeue();
    }
}

function dfs(q, node) {
    if (node == null) return;
    if (node.left) dfs(q, node.left);
    q.enqueue(node);
    if (node.right) dfs(q, node.right);
}

function root(node) {
    var parent = node;
    while (parent.parent) {
        parent = parent.parent;
    }
    return parent;
}

// test
class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function test() {
    var a = new Node('1');
    var b = new Node('2');
    var c = new Node('3');
    var d = new Node('4');
    var e = new Node('5');
    var f = new Node('6');
    var g = new Node('7');
    var h = new Node('8');
    var i = new Node('9');
    var j = new Node('10');
    var k = new Node('11');
    var l = new Node('12');
    e.left = b; e.right = i; b.parent = e; i.parent = i;
    b.left = a; a.parent = b;
    b.right = c; c.parent = b;
    c.right = d; d.parent = c;
    console.log(next(b).val);
}

test();