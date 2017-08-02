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
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  let res = [];
  if (root === null) return res;
  let q = [];
  q.push(root);
  let i = 0;
  while (q.length > 0) {
    res[i] = [];
    let len = q.length;
    while (len > 0) {
      let n = q.shift();
      res[i].push(n.val);
      if (n.left) q.push(n.left);
      if (n.right) q.push(n.right);  
      len--;
    }

    i++;
  }

  return res;
};
