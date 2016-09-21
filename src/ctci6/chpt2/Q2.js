var SinglyLinkedList = require('../utils/SinglyLinkedList');

// Find the Kth to last element of a linked list

// @param Node head
// @param Integer k
// @return Node
function kthToLast(head, k) {
    var size = 0;
    var node = head;
    while (node.next !== null) {
        size++;
        node = node.next;
    }

    node = head;
    var i = 0;

    if (k > size) return null;

    while (i !== size - k) {
        node = node.next;
        i++;
    }
    return node;
}


// alternative solution

function kthToLast2(head, k) {
    var knode = head;
    var i = 0;
    while (i !== k) {
        if (knode === null) return null;
        knode = knode.next;
        i++;
    }
    var node = head;
    while (knode.next !== null) {
        node = node.next;
        knode = knode.next;
    }
    return node;
}

// test

function test() {
    var list = [4,3,7,5,9,3,2,7,5,0,2];
    var linkedList = SinglyLinkedList.arrayToLinkedList(list);
    console.log(SinglyLinkedList.toString(linkedList));
    console.log(kthToLast(linkedList, 3).val);
    console.log(kthToLast2(linkedList, 3).val);
}

test();