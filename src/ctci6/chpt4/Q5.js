var Node = require('../utils/BinaryTreeNode');

function isBST(node) {
    if (node.left && node.right) {
        return isBST(node.left) && isBST(node.right) && node.val > node.left.val && node.val < node.right.val;
    } else if (node.left) {
        return isBST(node.left) && node.val > node.left.val;
    } else if (node.right) {
        return isBST(node.right) && node.val < node.right.val;
    } else {
        return true;
    }
}

function test() {
    var a = new Node(1);
    var b = new Node(2);
    var c = new Node(3);
    var d = new Node(4);
    var e = new Node(5);
    var f = new Node(6);
    var g = new Node(7);

    d.left = b; d.right = f;
    b.left = a; b.right = c; f.left = e; f.right = g;

    console.log(isBST(d));
}

test();