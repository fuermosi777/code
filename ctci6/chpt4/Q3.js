var LinkedList = require('../utils/LinkedList');
var Node = require('../utils/BinaryTreeNode');
var Queue = require('../utils/Queue');

function listOfDepths(node) {
    var q = new Queue();
    q.enqueue(node);
    var lists = [];
    var i = 0;
    var height = node.height();
    while (i <= height) {
        var aux = new Queue();
        while (!q.isEmpty()) {
            var node = q.dequeue();
            if (!lists[i]) {
                lists[i] = new LinkedList();
            }
            lists[i].add(node.val);
            if (node.left) aux.enqueue(node.left);
            if (node.right) aux.enqueue(node.right);
        }
        q = aux;
        i++;
    }
    return lists;
}

function test() {
    var a = new Node(1);
    var b = new Node(2);
    var c = new Node(3);
    var d = new Node(4);
    var e = new Node(5);
    var f = new Node(6);
    var g = new Node(7);
    a.left = b;
    a.right = c;
    b.left = d;
    b.right = e;
    c.left = f;
    c.right = g;
    var lists = listOfDepths(a);
    for (var i = 0; i < lists.length; i++) {
        console.log(lists[i].toString());
    }
}

test();