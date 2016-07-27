/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var size = 0;
    var node = head;
    while (node) {
        size++;
        node = node.next;
    }

    if (size === 1) return null;

    var order = size - n + 1;
    if (order <= 0) order = 1;

    node = head;
    var i = 1;
    var lastNode;
    while (i < order) {
        lastNode = node;
        node = node.next;
        i++;
    }

    if (!lastNode) {
        return head.next;
    } else {
        lastNode.next = node.next;
        node = null;
        return head;
    }
};