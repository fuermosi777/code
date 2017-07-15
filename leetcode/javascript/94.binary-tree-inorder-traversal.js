/*
 * [94] Binary Tree Inorder Traversal
 *
 * https://leetcode.com/problems/binary-tree-inorder-traversal
 *
 * Medium (46.17%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[1,null,2,3]'
 *
 * Given a binary tree, return the inorder traversal of its nodes' values.
 * 
 * 
 * For example:
 * Given binary tree [1,null,2,3],
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3
 * 
 * 
 * 
 * return [1,3,2].
 * 
 * 
 * Note: Recursive solution is trivial, could you do it iteratively?
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
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (root === null) return [];
  let stack = [];
  let res = [];

  stack.push(root);

  while (stack.length > 0) {
    let node = stack[stack.length - 1];
    
    if (node.left !== null && !node.left.visited) {
      stack.push(node.left);
      continue;
    } else if (!node.visited) {
      res.push(node.val);
      node.visited = true;
    }
    if (node.right !== null && !node.right.visited) {
      stack.push(node.right);
    } else {
      stack.pop();
    }
  }

  return res;
};
