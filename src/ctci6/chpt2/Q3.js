
require('../utils/Array');

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
    var linkedList = list.toLinkedList();
    console.log(linkedList.toString());
    var node = linkedList.next.next;
    deleteNode(node);
    console.log(linkedList.toString());
}

test();