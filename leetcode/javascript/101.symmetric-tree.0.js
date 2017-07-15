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
