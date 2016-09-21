var SinglyLinkedList = require('../utils/SinglyLinkedList');

// @param Node
// @param undefined
function removeDups(head) {
    var i = head;
    while (i.next !== null) {
        var j = i.next;
        var last;
        while (j !== null && j.next !== null) {
            if (i.val === j.val) {
                if (j.next != null) {
                    last.next = j.next;
                } else {
                    last.next = null;
                }
            }
            last = j;
            j = j.next;
        }
        i = i.next;
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

// O(n^2)