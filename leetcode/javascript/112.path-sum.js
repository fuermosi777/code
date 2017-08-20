/*
 * [112] Path Sum
 *
 * https://leetcode.com/problems/path-sum
 *
 * algorithms
 * Easy (33.98%)
 * Total Accepted:    172.4K
 * Total Submissions: 507.2K
 * Testcase Example:  '[]\n1'
 *
 * 
 * Given a binary tree and a sum, determine if the tree has a root-to-leaf path
 * such that adding up all the values along the path equals the given sum.
 * 
 * 
 * For example:
 * Given the below binary tree and sum = 22,
 * 
 * ⁠             5
 * ⁠            / \
 * ⁠           4   8
 * ⁠          /   / \
 * ⁠         11  13  4
 * ⁠        /  \      \
 * ⁠       7    2      1
 * 
 * 
 * 
 * return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Recursive
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
// var hasPathSum = function(root, sum) {
//   if (root === null) return false;
//   if (!root.left && !root.right) {
//     if (sum === root.val) return true;
//     else return false;
//   } else if (root.left && !root.right) {
//     return hasPathSum(root.left, sum - root.val);
//   } else if (root.right && !root.left) {
//     return hasPathSum(root.right, sum - root.val);
//   } else {
//     return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
//   }
// };
// 

Array.prototype.top = function() {
  return this[this.length - 1];
};

/**
 * Iteration
 * @param {TreeNode} root
 * @param {number} sum
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) return false;
  
  let poss = [];
  let stack = [root];
  root.sum = root.val;

  while (stack.length > 0) {
    let top = stack.top();
    top.visited = true;
    if (top.left) {
      top.left.sum = top.sum + top.left.val;
      stack.push(top.left);
    }
    if (top.right) {
      top.right.sum = top.sum + top.right.val;
      stack.push(top.right);
    }
    if (!top.left && !top.right) {
      poss.push(top.sum);
      while (stack.length > 0 && stack.top().visited) {
        stack.pop();
      }
    }
  }
  return poss.indexOf(sum) > -1;
};