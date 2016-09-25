var SinglyLinkedList = require('../utils/SinglyLinkedList');

// @param Node node
// @param undefined
function deleteNode(node) {
    if (node == null || node.next == null) return;
    var next = node.next;
    node.val = next.val;
    node.next = next.next;
}

function test() {
    var list = ['a', 'b', 'c', 'd', 'e', 'f'];
    var linkedList = SinglyLinkedList.arrayToLinkedList(list);
    console.log(SinglyLinkedList.toString(linkedList));
    var node = linkedList.next.next;
    deleteNode(node);
    console.log(SinglyLinkedList.toString(linkedList));
}

test();