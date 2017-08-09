/*
 * [621] Task Scheduler
 *
 * https://leetcode.com/problems/task-scheduler
 *
 * algorithms
 * Medium (41.84%)
 * Total Accepted:    6.2K
 * Total Submissions: 14.9K
 * Testcase Example:  '[\'A\',\'A\',\'A\',\'B\',\'B\',\'B\']\n2'
 *
 * Given a char array representing tasks CPU need to do. It contains capital
 * letters A to Z where different letters represent different tasks.Tasks could
 * be done without original order. Each task could be done in one interval. For
 * each interval, CPU could finish one task or just be idle.
 * 
 * However, there is a non-negative cooling interval n that means between two
 * same tasks, there must be at least n intervals that CPU are doing different
 * tasks or just be idle. 
 * 
 * You need to return the least number of intervals the CPU will take to finish
 * all the given tasks.
 * 
 * Example 1:
 * 
 * Input: tasks = ['A','A','A','B','B','B'], n = 2
 * Output: 8
 * Explanation: A -> B -> idle -> A -> B -> idle -> A -> B.
 * 
 * 
 * 
 * Note:
 * 
 * The number of tasks is in the range [1, 10000].
 * The integer n is in the range [0, 100].
 * 
 * 
 */

// var MinPQ = require('./util/MinPQ');
// TODO: remove the following and replace with the module when accepted
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

var Task = function(val) {
  this.val = val;
  this.worktime = 1;
  this.count = 1;
};

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  if (tasks.length === 0) return 0;
  if (n === 0) return tasks.length;

  let pq = new MinPQ((a, b) => {
    if (a.worktime !== b.worktime) {
      return a.worktime - b.worktime;
    } else {
      return b.count - a.count;
    }
  });
  let map = {};
  for (let task of tasks) {
    if (map.hasOwnProperty(task)) {
      map[task].count += 1;
    } else {
      map[task] = new Task(task);
    }
  }
  for (let taskKey in map) {
    pq.insert(map[taskKey]);
  }
  let res = 0;
  while (!pq.isEmpty()) {
    let nextTask = pq.deleteMin();
    res += nextTask.worktime;
    console.log(nextTask.val);
    nextTask.count -= 1;
    let w = nextTask.worktime;
    nextTask.worktime = n;
    if (nextTask.count > 0) {
      for (let t of pq.vals) {
        if (t && t.worktime > 1) t.worktime -= w;
      }
      pq.insert(nextTask);
    }
  }
  return res + 1;
};

console.log(leastInterval(['A','A','A','B','B','B'], 50));
