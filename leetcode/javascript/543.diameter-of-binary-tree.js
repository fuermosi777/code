/*
 * [543] Diameter of Binary Tree
 *
 * https://leetcode.com/problems/diameter-of-binary-tree
 *
 * algorithms
 * Easy (43.55%)
 * Total Accepted:    24.2K
 * Total Submissions: 55.5K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 
 * Given a binary tree, you need to compute the length of the diameter of the
 * tree. The diameter of a binary tree is the length of the longest path
 * between any two nodes in a tree. This path may or may not pass through the
 * root.
 * 
 * 
 * 
 * Example:
 * Given a binary tree 
 * 
 * ⁠         1
 * ⁠        / \
 * ⁠       2   3
 * ⁠      / \     
 * ⁠     4   5    
 * 
 * 
 * 
 * Return 3, which is the length of the path [4,2,1,3] or [5,2,1,3].
 * 
 * 
 * Note:
 * The length of path between two nodes is represented by the number of edges
 * between them.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function dfs(node, max) {
  if (node === null) return;
  dfs(node.left, max);
  dfs(node.right, max);
  let leftH = node.left ? node.left.height + 1 : 0;
  let rightH = node.right ? node.right.height + 1 : 0;
  max.val = Math.max(max.val, leftH + rightH);
  node.height = Math.max(leftH, rightH);
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  let max = {val: 0};
  dfs(root, max);
  return max.val;
};
