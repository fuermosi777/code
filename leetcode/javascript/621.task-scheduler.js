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

var MinPQ = require('./util/MinPQ');

var Task = function(val) {
  this.val = val;
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

  let pq = new MinPQ((a, b) => (b.count - a.count));
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
    let size = pq.size;
    let temp = [];
    let i = 0;
    while (i <= n) {
      if (pq.isEmpty()) break;

      let task = pq.deleteMin();
      task.count -= 1;
      temp.push(task);
      res++;
      i++;
    }
    for (let t of temp) {
      if (t.count > 0) {
        pq.insert(t);
      }
    }
    if (!pq.isEmpty() && temp.length < n + 1) {
      res += n - temp.length + 1;
    }
  }
  return res;
};

console.log(leastInterval(['A','A','A','A','A','A','B','C','D','E','F','G'], 2));
