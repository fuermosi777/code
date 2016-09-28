require('../utils/Array');
var Node = require('../utils/Node');

function add(node1, node2) {
    var extra = 0;
    var n1 = node1, n2 = node2, n3, node3;
    while (n1 || n2) {
        var val1 = n1 ? n1.val : 0;
        var val2 = n2 ? n2.val : 0;
        var sum = val1 + val2 + extra;
        var val = sum >= 10 ? sum - 10 : sum;
        extra = sum >= 10 ? 1 : 0;
        if (!n3) {
            n3 = new Node(val);
            node3 = n3;
        } else {
            n3.next = new Node(val);
            n3 = n3.next;
        }
        if (n1) n1 = n1.next;
        if (n2) n2 = n2.next;
    }
    if (extra > 0) n3.next = new Node(extra);
    return node3;
}

function addReverse(node1, node2) {
    return reverse(add(reverse(node1), reverse(node2)));
}

function reverse(head) {
    if (!head) return null;
    if (!head.next) return head;
    var stack = [];
    var node = head;
    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    var reversedHead, reversed;
    reversedHead = new Node(stack.pop());
    reversed = reversedHead;
    while (stack.length > 0) {
        reversed.next = new Node(stack.pop());
        reversed = reversed.next;
    }
    return reversedHead;
}

// test
function test() {
    // var num1 = [7, 1, 6].toLinkedList();
    // var num2 = [5, 9, 2].toLinkedList();
    // var num3 = add(num1, num2);
    // console.log(num3.toString());

    var num4 = [6,1,7].toLinkedList();
    var num5 = [2,9,5].toLinkedList();
    var num6 = addReverse(num4, num5);
    console.log(num6.toString());
}

test()