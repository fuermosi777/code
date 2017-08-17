/*
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal
 *
 * algorithms
 * Medium (39.48%)
 * Total Accepted:    178K
 * Total Submissions: 451K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
 * ⁠ [15,7]
 * ]
 * 
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
 * 81.13%
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if (root === null) return res;
  let queue = [root];
  while (queue.length > 0) {
    let item = [];
    let len = queue.length;
    while (item.length < len) {
      let deq = queue.shift();
      item.push(deq.val);
      if (deq.left) queue.push(deq.left);
      if (deq.right) queue.push(deq.right);
    }
    res.push(item);
  }
  return res;
};
