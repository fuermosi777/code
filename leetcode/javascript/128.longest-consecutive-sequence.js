/*
 * [128] Longest Consecutive Sequence
 *
 * https://leetcode.com/problems/longest-consecutive-sequence
 *
 * algorithms
 * Hard (36.79%)
 * Total Accepted:    108.8K
 * Total Submissions: 295.6K
 * Testcase Example:  '[100,4,200,1,3,2]'
 *
 * 
 * Given an unsorted array of integers, find the length of the longest
 * consecutive elements sequence.
 * 
 * 
 * For example,
 * Given [100, 4, 200, 1, 3, 2],
 * The longest consecutive elements sequence is [1, 2, 3, 4]. Return its
 * length: 4.
 * 
 * 
 * Your algorithm should run in O(n) complexity.
 * 
 */
/**
 * O(nlogn) - edge cases: empty, duplicates
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//   if (nums.length === 0) return 0;

//   nums.sort((a, b) => (a - b));
//   let max = 1, current = 1;
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i] - nums[i - 1] === 1) {
//       current++;
//     } else if (nums[i] !== nums[i - 1]) {
//       current = 1;
//     }
//     max = Math.max(max, current);
//   }
//   return max;
// };

/**
 * O(n)
 * @param {number[]} nums
 * @return {number}
 */
// var longestConsecutive = function(nums) {
//   if (nums.length === 0) return 0;
//   let map = {};
//   for (let i = 0; i < nums.length; i++) {
//     let n = nums[i];
//     let left = n - 1, right = n + 1;
//     if (map[n]) continue;
//     if (map[left] && map[right]) {
//       if (map[left].start <= map[right].start && map[left].end >= map[right].end) continue;
//       if (map[right].start <= map[left].start && map[right].end >= map[left].end) continue;
//       let leftRange = map[left].start < map[right].start ? map[left] : map[right];
//       let rightRange = map[left] === leftRange ? map[right] : map[left];

//       let range = new Range(leftRange.start, rightRange.end);
//       delete map[leftRange.end];
//       delete map[rightRange.start];
//       map[leftRange.start] = range;
//       map[rightRange.end] = range;
//     } else if (map[left]) {
//       if (map[left].end >= n) continue;
//       let range = map[left];
//       let oldEnd = range.end;
//       if (oldEnd !== range.start) {
//         delete map[oldEnd];
//       }
//       range.end = n;
//       map[n] = range;
//     } else if (map[right]) {
//       if (map[right].start <= n) continue;
//       let range = map[right];
//       let oldStart = range.start;
//       if (oldStart !== range.end) {
//         delete map[oldStart];
//       }
//       range.start = n;
//       map[n] = range;
//     } else {
//       map[n] = new Range(n, n);
//     }
//   }
//   // console.log(map)
//   return Math.max.apply(null, Object.keys(map).map(key => (map[key].end - map[key].start + 1)))
// };

// function Range(start, end) {
//   this.start = start;
//   this.end = end;
// }

/**
 * O(n) - simpler
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let map = {};
  for (let n of nums) {
    if (!map[n]) map[n] = true;
  }
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    let n = nums[i];
    let left = n - 1;
    let right = n + 1;
    let ct = 1;
    while (map[left]) {
      ct++;
      delete map[left];
      left--;
    }
    while (map[right]) {
      ct++;
      delete map[right];
      right++;
    }
    max = Math.max(max, ct);
  }

  return max;
};
