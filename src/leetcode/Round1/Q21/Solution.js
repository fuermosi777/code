/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (l1 === null && l2 === null) return null;

    var p1 = l1, p2 = l2;
    var p3;
    var lastp;
    var firstp;
    while (p1 !== null || p2 !== null) {
        lastp = p3;
        p3 = new ListNode();
        if (p1 === null) {
            p3.val = p2.val;
            p2 = p2.next;
        } else if (p2 === null) {
            p3.val = p1.val;
            p1 = p1.next;
        } else if (p1.val < p2.val) {
            p3.val = p1.val;
            p1 = p1.next;
        } else {
            p3.val = p2.val;
            p2 = p2.next;
        }
        if (lastp) {
            lastp.next = p3;
        } else {
            firstp = p3;
        }
    }
    return firstp;
};