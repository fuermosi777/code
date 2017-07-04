var Node = require('../utils/BinaryTreeNode');
var Queue = require('../utils/Queue');


function isBalanced(node) {
    node.h = dfs(node);
    var q = new Queue();
    q.enqueue(node);
    while (!q.isEmpty()) {
        var c = q.dequeue();
        if (c.left) {
            q.enqueue(c.left);
        }
        if (c.right) {
            q.enqueue(c.right);
        }
        if (c.left && c.right && Math.abs(c.left.h - c.right.h) > 1) {
            return false;
        }
    }
    return true;
}

function dfs(node) {
    var l = -1, r = -1;
    if (node.left) {
        l = dfs(node.left);
        node.left.h = l;
    }
    if (node.right) {
        r = dfs(node.right);
        node.right.h = r;
    }
    if (!node.left && !node.right) {
        return 0;
    } else {
        return Math.max(l, r) + 1;
    }
}

function test() {
    var a = new Node(1);
    var b = new Node(2);
    var c = new Node(3);

    var d = new Node(4);
    var e = new Node(5);

    var f = new Node(6);

    a.left = b;
    a.right = c;

    c.left = d;
    c.right = e;

    // e.left = f;

    console.log(isBalanced(a));
}

test();