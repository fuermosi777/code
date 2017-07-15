/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function isValid(node, lo, hi) {
  if (node === null) return true;
  if (lo !== null && node.val <= lo) {
    return false;
  }
  if (hi !== null && node.val >= hi) {
    return false;
  }
  return isValid(node.left, lo, node.val) && isValid(node.right, node.val, hi);
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  return isValid(root, null, null);
};
