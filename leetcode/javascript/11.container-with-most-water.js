/*
 * [11] Container With Most Water
 *
 * https://leetcode.com/problems/container-with-most-water/description/
 *
 * algorithms
 * Medium (36.90%)
 * Total Accepted:    174.6K
 * Total Submissions: 472.9K
 * Testcase Example:  '[1,1]'
 *
 * Given n non-negative integers a1, a2, ..., an, where each represents a point
 * at coordinate (i, ai). n vertical lines are drawn such that the two
 * endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together
 * with x-axis forms a container, such that the container contains the most
 * water.
 * 
 * Note: You may not slant the container and n is at least 2.
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxHeight = 0;
  let maxArea = 0;
  for (let i = 0; i < height.length - 1; i++) {
    if (height[i] > maxHeight) {
      let stop = false;
      for (let j = height.length - 1; !stop && j > i; j--) {
        let area = getArea(i, j, height);
        maxArea = Math.max(area, maxArea);
        if (height[j] > height[i]) {
          stop = true;
        }
      }
      maxHeight = height[i];
    }
  }

  return maxArea;
};

function getArea(i, j, heights) {
  return Math.abs(i - j) * Math.min(heights[i], heights[j]);
}
