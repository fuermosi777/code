require('../utils/Array');

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

// solution 2
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
    var linkedList = list.toLinkedList();
    console.log(linkedList.toString());
    removeDups(linkedList);
    console.log(linkedList.toString());
}

test();