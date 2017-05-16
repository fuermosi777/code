/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

ListNode.prototype.toNumber = function() {
    var stack = [];
    var l = this;
    while (l !== null) {
        stack.push(l.val);
        l = l.next;
    }
    var num = 0;
    var N = stack.length;
    for (var i = 0; i < N; i++) {
        var add = Math.pow(10, (N - i - 1)) * stack.pop();
        num += add;
    }
    return num;
};

Number.prototype.toListNodes = function() {
    var strings = this.toString().split('').reverse();
    var prev;
    var first;
    for (var i = 0; i < strings.length; i++) {
        var next = new ListNode(parseInt(strings[i]));
        if (i === 0) {
            first = next;
        }
        if (prev) {
            prev.next = next;
        }
        prev = next;
    }
    return first;
};

var addTwoNumbers = function(l1, l2) {
    return (l1.toNumber() + l2.toNumber()).toListNodes();
};