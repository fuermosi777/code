/*
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval
 *
 * algorithms
 * Hard (27.52%)
 * Total Accepted:    97.8K
 * Total Submissions: 355.2K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * 
 * Example 1:
 * Given intervals [1,3],[6,9], insert and merge [2,5] in as [1,5],[6,9].
 * 
 * 
 * 
 * Example 2:
 * Given [1,2],[3,5],[6,7],[8,10],[12,16], insert and merge [4,9] in as
 * [1,2],[3,10],[12,16].
 * 
 * 
 * 
 * This is because the new interval [4,9] overlaps with [3,5],[6,7],[8,10].
 * 
 */

/*function Interval(start, end) {
  this.start = start;
  this.end = end;
}*/

/**
 * @param {Interval[]} intervals
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
  if (intervals.length === 0) return [newInterval];
  let res = [];
  let mergedInterval = new Interval();
  let isMerging = false;
  let isMerged = false;
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    
    if (!isMerging && isMerged) { // Day end: push the current
      res.push(interval);
    }

    if (!isMerging && !isMerged) { // Day 0: just see start
      if (newInterval.start < interval.start) {
        mergedInterval.start = newInterval.start;
        isMerging = true;
      } else if (newInterval.start <= interval.end) {
        mergedInterval.start = interval.start;
        isMerging = true;
      } else {
        res.push(interval);
      }
    }

    if (isMerging) {
      if (newInterval.end < interval.start) {
        mergedInterval.end = newInterval.end;
        res.push(mergedInterval, interval);
        isMerged = true;
        isMerging = false;
      } else if (newInterval.end <= interval.end) {
        mergedInterval.end = interval.end;
        res.push(mergedInterval);
        isMerged = true;
        isMerging = false;
      }
    }
  }
  if (isMerging) {
    mergedInterval.end = newInterval.end;
    res.push(mergedInterval);
    isMerging = false;
    isMerged = true;
  }
  if (!isMerged) {
    res.push(newInterval);
    isMerged = true;
  }
  return res;
};
