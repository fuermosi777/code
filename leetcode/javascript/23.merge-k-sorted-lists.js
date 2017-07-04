/**
 * Use PQ
 */

// const { ListNode, arrayToListNode, listNodeToArray } = require('./util/ListNode');

class MinPQ {
  constructor(cpFunc) {
    this.vals = [];
    this.size = 0;
    this.cpFunc = cpFunc;
  }
  isEmpty() {
    return this.size === 0;
  }
  insert(val) {
    this.vals[this.size + 1] = val;
    this.swim(this.size + 1);
    this.size += 1;
  }
  deleteMin() {
    if (this.isEmpty()) throw new Error('PQ is empty');
    let d = this.vals[1];
    this.vals[1] = null;
    this.swap(1, this.size);
    this.sink(1);
    this.size -= 1;

    return d;
  }
  sink(i) {
    while (i <= this.size) {
      let ci = i * 2;
      if (!this.vals[ci]) break;
      if (this.vals[ci + 1] && this.cp(ci + 1, ci) < 0) ci = ci + 1;
      if (this.cp(ci, i) >= 0) break;
      this.swap(ci, i);
      i = ci;
    }
  }
  swim(i) {
    while (i > 1 && this.cp(Math.floor(i / 2), i) > 0) {
      let pi = Math.floor(i / 2); // parent index
      this.swap(pi, i);
      i = pi;
    }
  }
  swap(i, j) {
    let t = this.vals[i];
    this.vals[i] = this.vals[j];
    this.vals[j] = t;
  }
  cp(i, j) { // compare function
    if (this.cpFunc !== null) {
      return this.cpFunc(this.vals[i], this.vals[j]);
    } else {
      return this.vals[i] - this.vals[j];
    }
  }
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let pq = new MinPQ((a, b) => {
    return a.val - b.val;
  });
  for (let i = 0; i < lists.length; i++) {
    if (lists[i] !== null) pq.insert(lists[i]);
  }
  let head = null;
  let node = null;
  while (!pq.isEmpty()) {
    let min = pq.deleteMin();
    if (head === null) {
      head = new ListNode(min.val);
      node = head;
    } else {
      node.next = new ListNode(min.val);
      node = node.next;
    }

    let next = min.next;
    if (next !== null) {
      pq.insert(next);
    }
  }

  return head;
};

// let a1 = arrayToListNode([2,2,3]);
// let a2 = arrayToListNode([1,4,6]);
// let a3 = arrayToListNode([5,6,6]);
// console.log(listNodeToArray(mergeKLists([null])));
