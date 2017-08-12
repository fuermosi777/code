/*
 * [101] Symmetric Tree
 *
 * https://leetcode.com/problems/symmetric-tree
 *
 * algorithms
 * Easy (38.70%)
 * Total Accepted:    186.2K
 * Total Submissions: 481.1K
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

/**
 * Recursive
 * @param {TreeNode} root
 * @return {boolean}
 */
// var isSymmetric = function(root) {
//   if (root === null) return true;
//   return _isSymmetric(root.left, root.right);
// };

// function _isSymmetric(node1, node2) {
//   if ((node1 || node2) === null) return true;
//   if ((node1 && node2) === null) return false;
//   if (node1.val !== node2.val) return false;
//   return _isSymmetric(node1.left, node2.right) && _isSymmetric(node1.right, node2.left);
// }

/**
 * Iteration DSP
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
  return isSym(root.left, root.right);
};

function isSym(n1, n2) {
  if (n1 === null && n2 === null) return true;
  let s1 = [n1], s2 = [n2];
  while (s1.length > 0 || s2.length > 0) {
    let t1 = s1[s1.length - 1];
    let t2 = s2[s2.length - 1];
    if (t1 === null || t2 === null) return false;
    if (t1.val !== t2.val) return false;
    t1.visited = true;
    t2.visited = true;

    if ((t1.left !== null || t2.right !== null) &&
      (t1.left !== null && !t1.left.visited) || (t2.right !== null && !t2.right.visited)) {
      s1.push(t1.left);
      s2.push(t2.right);
    } else if ((t1.right !== null || t2.left !== null) && 
      (t1.right !== null && !t1.right.visited) || (t2.left !== null && !t2.left.visited)) {
      s1.push(t1.right);
      s2.push(t2.left);
    } else {
      s1.pop();
      s2.pop();
    }
  }
  return true;
}

