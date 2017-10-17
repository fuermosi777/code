/**
 * Similar to LC 236, but no root.
 */

function TreeNode(parent, val) {
  this.parent = parent;
  this.val = val;
  this.left = this.right = null;
}

function lca(root, p, q) {
  if (root === null) return null;
  if (root === p || root === q) return root;

  let left = lca(root.left, p, q);
  let right = lca(root.right, p, q);
  if (left && right) {
    return root;
  } else if (left) {
    return left;
  } else if (right) {
    return right;
  }
  return null;
}

var lowestCommonAncestor = function(p, q) {
  let root = p;
  while (root.parent) {
    root = root.parent;
  }
  return lca(root, p, q);
}

let a1 = new TreeNode(null, '1');
let a2 = new TreeNode(a1, '2');
let a3 = new TreeNode(a1, '3');
a1.left = a2;
a1.right = a3;

console.log(lowestCommonAncestor(a2, a3).val);