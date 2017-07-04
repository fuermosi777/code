require('../utils/Array');
var Node = require('../utils/Node');

function isPalindrome(head) {
    var reversed = reverse(head);
    var node = head;
    var reversedNode = reversed;
    while (node) {
        if (node.val !== reversedNode.val) return false;
        reversedNode = reversedNode.next;
        node = node.next;
    }
    return true;
}

function reverse(head) {
    if (!head) return null;
    var stack = [];
    var node = head;
    while (node) {
        stack.push(node.val);
        node = node.next;
    }
    var reversedHead, reversedNode;
    reversedHead = new Node(stack.pop());
    reversedNode = reversedHead;
    while (stack.length > 0) {
        reversedNode.next = new Node(stack.pop());
        reversedNode = reversedNode.next;
    }
    return reversedHead;
}

function test() {
    var list = ['a', 'b', 'c', 'b', 'a'].toLinkedList();
    console.log(isPalindrome(list));
}

test();