/**
 * @param  {number} n Total number of people
 * @param  {number} k Person to kill
 * @return {number}
 */
function safe(n, k, toSave = 1) {
  let i = 1;
  let start;
  let last = null;
  while (i <= n) {
    let node = new Node(i);
    if (i === 1) start = node;
    if (last !== null) last.next = node;
    last = node;
    i++;
  }
  last.next = start;

  let current = start;
  while (i > toSave) {
    let j = 1;
    while (j < k) {
      last = current;
      current = current.next;
      j++;
    }
    let toKill = current;
    let next = toKill.next;
    last.next = next;
    current = next;
    i--;
  }

  return current.pos;
}

function Node(pos) {
  this.pos = pos;
  this.next = null;
}

var expect = require('chai').expect;

expect(safe(3, 2)).to.equal(3);
expect(safe(5, 2)).to.equal(3);
expect(safe(6, 3)).to.equal(1);