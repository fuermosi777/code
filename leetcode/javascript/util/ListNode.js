class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

function arrayToListNode(array) {
  let head;
  let node = null;

  for (let i = 0; i < array.length; i++) {
    let n = new ListNode(array[i]);
    if (i === 0) head = n;
    if (node !== null) node.next = n;
    node = n;
  }
  return head;
}

function listNodeToArray(listNode) {
  let array = [];
  let n = listNode;
  while (n !== null) {
    array.push(n.val);
    n = n.next;
  }
  return array;
}

exports.ListNode = ListNode;
exports.arrayToListNode = arrayToListNode;
exports.listNodeToArray = listNodeToArray;