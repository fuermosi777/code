/*
 * [530] Minimum Absolute Difference in BST
 *
 * https://leetcode.com/problems/minimum-absolute-difference-in-bst/description/
 *
 * algorithms
 * Easy (47.12%)
 * Total Accepted:    30.3K
 * Total Submissions: 64.4K
 * Testcase Example:  '[1,null,3,2]'
 *
 * Given a binary search tree with non-negative values, find the minimum
 * absolute difference between values of any two nodes.
 * 
 * 
 * Example:
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    3
 * ⁠   /
 * ⁠  2
 * 
 * Output:
 * 1
 * 
 * Explanation:
 * The minimum absolute difference is 1, which is the difference between 2 and
 * 1 (or between 2 and 3).
 * 
 * 
 * 
 * 
 * Note:
 * There are at least two nodes in this BST.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var getMinimumDifference = function(root) {
  // Method 1:
  let order = [];
  dfs(root, order);
  let min = order[1] - order[0];
  for (let i = 2; i < order.length; i++) {
    let diff = order[i] - order[i - 1];
    min = Math.min(diff, min);
  }

  return min;
  
  // Method 2:
  return getValues(root)[2];
};

/**
 * Method 1: convert to in-order array
 * @param  {Node} node
 * @param  {number[]} arr
 * @return {void}
 */
function dfs(node, arr) {
  if (!node) return;
  dfs(node.left, arr);
  arr.push(node.val);
  dfs(node.right, arr);
}

/**
 * Method 2: recursion
 * @param  {Node} node
 * @return {[min: number, max: number, minDiff: number]}
 */
function getValues(node) {
  if (!node) {
    return null;
  }
  let left = getValues(node.left);
  let right = getValues(node.right);
  let min = left ? left[0] : node.val;
  let max = right ? right[1] : node.val;
  let minToCompare = [];
  if (left) {
    minToCompare.push(node.val - left[1]);
    minToCompare.push(left[2]);
  }
  if (right) {
    minToCompare.push(right[0] - node.val);
    minToCompare.push(right[2]);
  }
  return [min, max, Math.min(...minToCompare)];
}
