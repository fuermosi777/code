var SinglyLinkedList = require('../utils/SinglyLinkedList');

// @param Node
// @param undefined
function removeDups(head) {
    var map = {};
    var node = head;
    var last;
    while (node !== null) {
        if (map.hasOwnProperty(node.val)) {
            if (node.next) {
                last.next = node.next;
            } else {
                last.next = null;
            }
        } else {
            map[node.val] = true;
        }
        last = node;
        node = node.next;
    }
}

// test
function test() {
    var list = [4,3,7,5,9,3,2,7,5,0,2];
    var linkedList = SinglyLinkedList.arrayToLinkedList(list);
    console.log(SinglyLinkedList.toString(linkedList));
    removeDups(linkedList);
    console.log(SinglyLinkedList.toString(linkedList));
}

test();