/*
 * [124] Binary Tree Maximum Path Sum
 *
 * https://leetcode.com/problems/binary-tree-maximum-path-sum
 *
 * algorithms
 * Hard (26.64%)
 * Total Accepted:    113.6K
 * Total Submissions: 425.6K
 * Testcase Example:  '[1,2,3]'
 *
 * 
 * Given a binary tree, find the maximum path sum.
 * 
 * 
 * For this problem, a path is defined as any sequence of nodes from some
 * starting node to any node in the tree along the parent-child connections.
 * The path must contain at least one node and does not need to go through the
 * root.
 * 
 * 
 * For example:
 * Given the below binary tree,
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    2   3
 * 
 * 
 * 
 * Return 6.
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
var maxPathSum = function(root) {
  let res = maxSum(root)[0];
  return res === null ? -Infinity : res;
};

function maxSum(node) {
  if (!node) return [null, null];
  let [leftMaxSum, leftMaxSumEnd] = maxSum(node.left);
  let [rightMaxSum, rightMaxSumEnd] = maxSum(node.right);

  let newMaxSumEnd = Math.max(
    (leftMaxSumEnd ? leftMaxSumEnd : 0) + node.val,
    (rightMaxSumEnd ? rightMaxSumEnd : 0) + node.val,
    node.val
  );
  let newMaxSum = Math.max(
    leftMaxSum ? leftMaxSum : -Infinity,
    rightMaxSum ? rightMaxSum : -Infinity,
    (leftMaxSumEnd ? leftMaxSumEnd : 0) + node.val + (rightMaxSumEnd ? rightMaxSumEnd : 0),
    newMaxSumEnd
  );

  return [newMaxSum, newMaxSumEnd];
}
