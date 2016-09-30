var Queue = require('./Queue');

class BinaryTreeNode {
    constructor (val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.d = 0; // depth
        this.h = 0; // height
    }

    height() {
        var max = 0;
        var q = new Queue();
        q.enqueue(this);
        while (!q.isEmpty()) {
            var node = q.dequeue();
            if (node.d > max) max = node.d;
            var left = node.left;
            var right = node.right;
            if (left) {
                left.d = node.d + 1;
                q.enqueue(left);
            }
            if (right) {
                right.d = node.d + 1;
                q.enqueue(right)
            }
        }
        return max;
    }
}

module.exports = BinaryTreeNode;

function test() {
    var node = new BinaryTreeNode(1);
    var a = new BinaryTreeNode(2);
    var b = new BinaryTreeNode(3);
    node.left = a;
    node.right = b;
    console.log(node.height());
}

if (require.main === module) test();