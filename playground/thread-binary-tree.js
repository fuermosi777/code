var { TreeNode, buildTreeFromArray } = require('../leetcode/javascript/util/TreeNode');

// function addThread(binaryTreeNode) {
//   let inorder = [];
//   dfs(binaryTreeNode, inorder);

//   for (let i = 0; i < inorder.length; i++) {
//     let prev, next, node = inorder[i];
//     if (i > 0) {
//       prev = inorder[i - 1];
//     }
//     if (i < inorder.length - 1) {
//       next = inorder[i + 1];
//     }
//     if (prev && !node.left) {
//       node.left = prev;
//     }
//     if (next && !node.right) {
//       node.right = next;
//     }
//   }
// }

// function dfs(node, seq) {
//   if (!node) return;

//   dfs(node.left, seq);
//   seq.push(node);
//   dfs(node.right, seq);
// }

// ===

let pre = null;

function addThreadInPlace(binaryTreeNode) {
  // addParent(binaryTreeNode);

  dfs(binaryTreeNode, null);
}

// function addParent(binaryTreeNode) {
//   _addP(binaryTreeNode);
// }

// function _addP(node) {
//   if (!node) return;

//   if (node.left) node.left.parent = node;
//   if (node.right) node.right.parent = node;
//   _addP(node.left);
//   _addP(node.right);
// }

function dfs(node) {
  if (!node) return null;

  dfs(node.left);
  
  if (pre) {
    if (!node.left) {
      node.left = pre;
    }
    if (!pre.right) {
      pre.right = node;
    }
  }

  pre = node;

  dfs(node.right);
}

let tree = buildTreeFromArray([1, 2, 3, 4, 5]);

// addThread(tree);




addThreadInPlace(tree);

function printThreadTree(tree) {
  let node = tree;
  while (node) {
    console.log(node.val);
    node = node.right
  }
}

// console.log(tree.left)

printThreadTree(tree.left.left)
