/*
 * [23] Merge k Sorted Lists
 *
 * https://leetcode.com/problems/merge-k-sorted-lists
 *
 * algorithms
 * Hard (27.09%)
 * Total Accepted:    155.8K
 * Total Submissions: 575.1K
 * Testcase Example:  '[]'
 *
 * 
 * Merge k sorted linked lists and return it as one sorted list. Analyze and
 * describe its complexity.
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @constructor {PriorityQueue}
 * @param {func} compareFunc
 * @return {void}
 */
function PQ(compareFunc) {
  this.arr = [];
  this.size = 0;
  this.compareFunc = compareFunc;
}

PQ.prototype = {
  constructor: PQ,

  compare(a, b) {
    if (this.compareFunc) {
      return this.compareFunc(a, b) > 0;
    } else {
      return a - b > 0;
    }
  },

  _swap(a, b) {
    let t = this.arr[a];
    this.arr[a] = this.arr[b];
    this.arr[b] = t;
  },

  peek() {
    return this.arr[1];
  },

  removePeek() {
    let peek = this.peek();
    if (!peek) {
      return null;
    }

    this.arr[1] = null;
    this._swap(1, this.size);
    this._sink(1);

    this.size -= 1;
    return peek;
  },

  add(item) {
    this.arr[this.size + 1] = item;
    this.size += 1;

    this._swim(this.size);
  },

  /**
   * Compare item with i with its two children and sink if possible
   * @param  {number} i - index
   * @return {void}
   */
  _sink(i) {
    while (true) {
      let next = 2 * i;
      let child = this.arr[next];
      if (!child) break;

      let rightChild = this.arr[next + 1];

      if (rightChild && this.compare(rightChild, child)) {
        child = rightChild;
        next += 1;
      }

      if (this.compare(child, this.arr[i])) {
        this._swap(i, next);
        i = next;
      } else {
        break;
      }
    }
  },

  _swim(i) {
    while (i >= 1) {
      let next = i / 2 | 0;
      if (next < 1) break;
      let parent = this.arr[next];
      if (this.compare(this.arr[i], parent)) {
        this._swap(i, next);
        i = next;
      } else {
        break;
      }
    }
  }
}

function createPQ(compareFunc) {
  return new PQ(compareFunc);
}

function createListNode(val, next) {
  return new ListNode(val, next);
}

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
  let pq = createPQ((a, b) => (b.val - a.val));

  for (let i = 0; i < lists.length; i++) {
    if (lists[i])
      pq.add(lists[i]);
  }

  let res = null;
  let flag = null;

  while (pq.size > 0) {
    let peek = pq.removePeek();

    if (res === null) {
      res = createListNode(peek.val);
      flag = res;
    } else {
      flag.next = createListNode(peek.val);
      flag = flag.next;
    }

    if (peek.next !== null) {
      pq.add(peek.next);
    }
  }

  return res;
};
