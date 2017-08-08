/*
 * [477] Total Hamming Distance
 *
 * https://leetcode.com/problems/total-hamming-distance
 *
 * algorithms
 * Medium (46.55%)
 * Total Accepted:    18.1K
 * Total Submissions: 38.9K
 * Testcase Example:  '[4,14,2]'
 *
 * The Hamming distance between two integers is the number of positions at
 * which the corresponding bits are different.
 * 
 * Now your job is to find the total Hamming distance between all pairs of the
 * given numbers.
 * 
 * 
 * Example:
 * 
 * Input: 4, 14, 2
 * 
 * Output: 6
 * 
 * Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is
 * 0010 (just
 * showing the four bits relevant in this case). So the answer will be:
 * HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2
 * + 2 + 2 = 6.
 * 
 * 
 * 
 * Note:
 * 
 * Elements of the given array are in the range of 0  to 10^9
 * Length of the array will not exceed 10^4. 
 * 
 * 
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
  let d = 0;
  let length = nums.length;

  for (let i = 0; i < 32; i++) {
    let ct0 = 0;
    for (let num of nums) {
      if (num >> i === 0) {
        ct0++;
      } else if (((num >> i) & 1) === 0) {
        ct0++;
      }      
    }
    d += ct0 * (length - ct0);
  }

  return d;
};