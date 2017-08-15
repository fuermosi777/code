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

/**
 * PQ
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
// var maxSlidingWindow = function(nums, k) {
//   let res = [];
//   if (nums.length === 0) return res;
//   let pq = new MinPQ((a, b) => (b.val - a.val));
//   for (let i = 0; i < k; i++) {
//     let node = new Node(nums[i], i);
//     pq.insert(node);
//   }

//   res.push(pq.top().val);

//   for (let i = k; i < nums.length; i++) {
//     let node = new Node(nums[i], i);
//     pq.insert(node);

//     // find max
//     let tmax = pq.top();
//     while (tmax.pos <= i - k) {
//       pq.deleteMin();
//       tmax = pq.top();
//     }
//     res.push(tmax.val);
//   }
//   return res;
// };

/**
 * Deque
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function(nums, k) {
  let queue = [];
  let pos = [];
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    if (queue.length === 0) {
      queue.push(nums[i]);
      pos.push(i);
    } else {
      // check max legit

      while (pos[pos.length - 1] <= i - k && pos.length > 0) {
        queue.pop();
        pos.pop();
      }

      if (nums[i] >= queue[queue.length - 1]) {
        queue.push(nums[i]);
        pos.push(i);
      } else {
        while (queue[0] <= nums[i] && queue.length > 0) {
          queue.shift();
          pos.shift();
        }
        queue.unshift(nums[i]);
        pos.unshift(i);
      }
    }
    if (i >= k - 1) {
      res.push(queue[queue.length - 1]);
    }
  }
  return res;
};
