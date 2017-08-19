/*
Given two sparse matrices A and B, return the result of AB.

You may assume that A's column number is equal to B's row number.

Example:

A = [
  [ 1, 0, 0],
  [-1, 0, 3]
]

B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
]


     |  1 0 0 |   | 7 0 0 |   |  7 0 0 |
AB = | -1 0 3 | x | 0 0 0 | = | -7 0 3 |
                  | 0 0 1 |
*/

var expect = require('chai').expect;

var Node = function(val, pos) {
  this.val = val;
  this.pos = pos;
  this.next = null;
};

function toNodes(nums) {
  let head = null;
  let last = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      let node = new Node(nums[i], i);
      if (!head) head = node;
      if (last) last.next = node;
      last = node;
    }
  }
  return head;
}

function nodesMultiply(n1, n2) {
  if (n1 === null || n2 === null) return 0;
  let a = n1, b = n2;
  let res = 0;
  while (a !== null && b !== null) {
    if (a.pos === b.pos) {
      res += a.val * b.val;
      a = a.next;
      b = b.next;
    } else if (a.pos > b.pos) {
      b = b.next;
    } else {
      a = a.next;
    }
  }
  return res;
}

function multiple(m1, m2) {
  let m3 = [];
  for (let i = 0; i < m1.length; i++) {
    m3[i] = []
    for (let j = 0; j < m2.length; j++) {
      let m2col = [];
      for (let k = 0; k < m2.length; k++) {
        m2col.push(m2[k][j]);
      }
      m3[i][j] = nodesMultiply(toNodes(m1[i]), toNodes(m2col));
    }
  }
  return m3;
}

var A = [
  [ 1, 0, 0],
  [-1, 0, 3]
];

var B = [
  [ 7, 0, 0 ],
  [ 0, 0, 0 ],
  [ 0, 0, 1 ]
];

var C = [
  [7, 0, 0],
  [-7, 0, 3]
];

expect(multiple(A, B)).to.deep.equal(C);