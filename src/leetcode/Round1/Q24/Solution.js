/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swap = function(n1) {
    if (!n1.next) return;
    var n2 = n1.next;
    if (!n2.next) {
        n1.next = null;
        n2.next = n1;
        return;
    }
    var n3 = n2.next;
    var n4 = n3.next;
    if (!n4) {
        n2.next = n1;
        n1.next = n3;
    } else {
        n2.next = n1;
        n1.next = n4;
    }
};
 
var swapPairs = function(head) {
    if (!head) return null;
    var second = head.next;
    if (!second) return head;
    
    var i = 1;
    var node = head;
    while (node) {
        if (!node.next) break;
        let next = node.next.next;
        swap(node);
        node = next;
        i++;  
    }
    return second;
};