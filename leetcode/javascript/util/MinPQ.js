/**
 * Minimize value Priority Queue
 * Author: Hao Liu
 */

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
  top() {
    if (this.isEmpty()) throw new Error('PQ is empty');
    return this.vals[1];
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
    if (this.cpFunc) {
      return this.cpFunc(this.vals[i], this.vals[j]);
    } else {
      return this.vals[i] - this.vals[j];
    }
  }
}

module.exports = MinPQ;

function test() {
  let pq = new MinPQ();
  pq.insert(2); console.log(pq.vals);
  pq.insert(1); console.log(pq.vals);
  pq.insert(0); console.log(pq.vals);
  pq.deleteMin(); console.log(pq.vals);
  pq.deleteMin(); console.log(pq.vals);
  pq.deleteMin(); console.log(pq.vals);

  let pq2 = new MinPQ((a, b) => (a.val - b.val));
  pq2.insert({val: 2}); console.log(pq2.vals);
  pq2.deleteMin();
}

// test();