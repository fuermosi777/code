var { TreeNode, buildTreeFromArray } = require('../leetcode/javascript/util/TreeNode');

function addThread(binaryTreeNode) {
  let inorder = [];
  dfs(binaryTreeNode, inorder);

  for (let i = 0; i < inorder.length; i++) {
    let prev, next, node = inorder[i];
    if (i > 0) {
      prev = inorder[i - 1];
    }
    if (i < inorder.length - 1) {
      next = inorder[i + 1];
    }
    if (prev && !node.left) {
      node.left = prev;
    }
    if (next && !node.right) {
      node.right = next;
    }
  }
}

function dfs(node, seq) {
  if (!node) return;

  dfs(node.left, seq);
  seq.push(node);
  dfs(node.right, seq);
}

let tree = buildTreeFromArray([1, 2, 3, 4, 5, 6]);

addThread(tree);

console.dir(tree);