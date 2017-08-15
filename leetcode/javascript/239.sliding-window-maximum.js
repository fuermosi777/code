/*
 * [239] Sliding Window Maximum
 *
 * https://leetcode.com/problems/sliding-window-maximum
 *
 * algorithms
 * Hard (32.89%)
 * Total Accepted:    64.6K
 * Total Submissions: 196.3K
 * Testcase Example:  '[]\n0'
 *
 * Given an array nums, there is a sliding window of size k which is moving
 * from the very left of the array to the very right. You can only see the k
 * numbers in the window. Each time the sliding window moves right by one
 * position.
 * 
 * For example,
 * Given nums = [1,3,-1,-3,5,3,6,7], and k = 3.
 * 
 * 
 * Window position                Max
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * ⁠1 [3  -1  -3] 5  3  6  7       3
 * ⁠1  3 [-1  -3  5] 3  6  7       5
 * ⁠1  3  -1 [-3  5  3] 6  7       5
 * ⁠1  3  -1  -3 [5  3  6] 7       6
 * ⁠1  3  -1  -3  5 [3  6  7]      7
 * 
 * 
 * Therefore, return the max sliding window as [3,3,5,5,6,7].
 * 
 * Note: 
 * You may assume k is always valid, ie: 1 ≤ k ≤ input array's size for
 * non-empty array.
 * 
 * Follow up:
 * Could you solve it in linear time?
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
    while (i > 1 && this.cp(Math.floor(i / 2), i) >= 0) {
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

var Node = function(val, pos) {
  this.val = val;
  this.pos = pos;
};

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let res = [];
  let pq = new MinPQ((a, b) => (b.val - a.val));
  for (let i = 0; i < k; i++) {
    let node = new Node(nums[i], i);
    pq.insert(node);
  }

  res.push(pq.top.val);

  for (let i = k; i < nums.length; i++) {
    let max = pq.top();
    let node = new Node(nums[i], i);

    if (max.pos === i - k) {
      pq.deleteMin();
      pq.insert(node);
    } else {
      
    }
  }
  return res;
};

console.log(maxSlidingWindow([1,3,-1,-3,-5,3,6,7], 3))
