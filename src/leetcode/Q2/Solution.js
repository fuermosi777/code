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
 * @param {number} re
 * @return {Object}
 */

function addNodes(l1, l2, re) {
    var v1 = l1 !== null ? l1.val : 0;
    var v2 = l2 !== null ? l2.val : 0;
    var sum = v1 + v2 + re;
    var remain = sum >= 10 ? 1 : 0;
    return {
        listNode: new ListNode(sum >= 10 ? sum - 10 : sum),
        remain: remain
    };
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var listNodeList = [];
    var re = 0;
    while (l1 !== null || l2 !== null || (l2 === null && l1 === null && re !== 0)) {
        var obj = addNodes(l1, l2, re);
        var prev = listNodeList.length === 0 ? null : listNodeList[listNodeList.length - 1];
        if (prev) {
            prev.next = obj.listNode;
        }
        listNodeList.push(obj.listNode);
        re = obj.remain;
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    return listNodeList[0];
};