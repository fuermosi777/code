var Node = require('../utils/BinaryTreeNode');

function minTree(array) {
    if (array.length === 0) return null;
    var root = partition(array, 0, array.length - 1);
    return root;
}

function partition(array, lo, hi) {
    if (lo > hi) return null;
    var mid = lo + Math.floor((hi - lo) / 2);
    var node = new Node(array[mid]);
    node.left = partition(array, lo, mid - 1);
    node.right = partition(array, mid + 1, hi);
    return node;
}

function test() {
    console.log(minTree([1,2,3,4,5,6,7,8,9]));
}

test();