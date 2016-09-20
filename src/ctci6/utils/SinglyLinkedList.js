var exports = module.exports = {};

function Node(val) {
    this.val = val;
    this.next = null;
}

function arrayToLinkedList(array) {
    var head;
    var last;
    for (var i = 0; i < array.length; i++) {
        var node = new Node(array[i]);
        if (i === 0) {
            head = node;
        }
        if (i > 0) {
            last.next = node;
        }
        last = node;
    }
    return head;
}

function toString(head) {
    var node = head;
    var s = "";
    while (node !== null) {
        s += node.val;
        if (node.next) {
            s += " -> ";
        }
        node = node.next;
    }
    return s;
}

exports.Node = Node;

exports.arrayToLinkedList = arrayToLinkedList;

exports.toString = toString;
