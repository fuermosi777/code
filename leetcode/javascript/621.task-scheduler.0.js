/*
 * [621] Task Scheduler
 *
 * https://leetcode.com/problems/task-scheduler
 *
 * algorithms
 * Medium (41.83%)
 * Total Accepted:    6.3K
 * Total Submissions: 15K
 * Testcase Example:  '['A','A','A','B','B','B']n2'
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

function Task(type) {
  this.type = type;
  this.ct = 1;
}
/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
  let map = {};
  for (let task of tasks) {
    if (map[task]) {
      map[task].ct += 1;
    } else {
      map[task] = new Task(task);
    }
  }
  let ts = [];
  Object.keys(map).forEach(key => {
    ts.push(map[key]);
  });

  ts.sort((a, b) => (b.ct - a.ct));

  let maxCt = ts[0].ct;
  let space = (maxCt - 1) * n;
  let extra = 0;
  for (let i = 1; i < ts.length; i++) {
    if (space === 0) {
      extra += ts[i].ct;
    } else if (ts[i].ct === maxCt) {
      extra += 1;
      let tmp = space;
      space -= (ts[i].ct - 1);
      if (space < 0) {
        space = 0;
        extra += (ts[i].ct - 1) - tmp;
      }
    } else {
      let tmp = space;
      space -= ts[i].ct;
      if (space < 0) {
        space = 0;
        extra += ts[i].ct - tmp;
      }
    }
  }
  return maxCt + (maxCt - 1) * n + extra;
};