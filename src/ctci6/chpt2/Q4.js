var SinglyLinkedList = require('../utils/SinglyLinkedList');
var Node = SinglyLinkedList.Node;

// @param Node head
// @param Integer v
// @return
function partition(head, v) {
    var leftHead, leftTail, rightHead, rightTail;
    var flag = head;
    var i = 0, j, k;
    while (flag) {
        if (!leftHead) {
            if (flag.val < v) {
                leftHead = new Node(flag.val);
                leftTail = new Node(flag.val);
                j = i;
            }
        }
        if (!rightHead) {
            if (flag.val >= v) {
                rightHead = new Node(flag.val);
                rightTail = new Node(flag.val);
                k = i;
            }
        }
        flag = flag.next;
        i++;
    }
    flag = head;
    i = 0;
    var leftHeadLinked = false, rightHeadLinked = false;

    while (flag) {
        if (flag.val < v && i !== j) {
            leftTail.next = new Node(flag.val);
            leftTail = leftTail.next;
            if (!leftHeadLinked) {
                leftHead.next = leftTail;
                leftHeadLinked = true;
            }
            i++;
        } else if (flag.val >= v && i !== k) {
            rightTail.next = new Node(flag.val);
            rightTail = rightTail.next;
            if (!rightHeadLinked) {
                rightHead.next = rightTail;
                rightHeadLinked = true;
            }
            j++;
        }
        i++;
        flag = flag.next;
    }
    leftTail.next = rightHead;
    return leftHead;
}

// test
function test() {
    var input = [3, 5, 8, 5, 10, 2, 1];
    var list = SinglyLinkedList.arrayToLinkedList(input);
    console.log(SinglyLinkedList.toString(list));
    list = partition(list, 5);
    console.log(SinglyLinkedList.toString(list));
}

test()
