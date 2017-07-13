/*
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree
 *
 * Easy (38.45%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '[1,2,2,3,4,4,3]'
 *
 * Given a binary tree, check whether it is a mirror of itself (ie, symmetric
 * around its center).
 * 
 * 
 * For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠/ \ / \
 * 3  4 4  3
 * 
 * 
 * 
 * But the following [1,2,2,null,3,null,3]  is not:
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   2
 * ⁠  \   \
 * ⁠  3    3
 * 
 * 
 * 
 * 
 * Note:
 * Bonus points if you could solve it both recursively and iteratively.
 * 
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// recursive

function isSym(r1, r2) {
  if (r1 === null && r2 === null) return true;
  if (r1 === null && r2 !== null) return false;
  if (r1 !== null && r2 === null) return false;
  if (r1.val !== r2.val) return false;
  return isSym(r1.left, r2.right) && isSym(r1.right, r2.left);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
  return isSym(root.left, root.right);
};
