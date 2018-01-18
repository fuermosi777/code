/**
 * Given a binary tree, find the length of the longest consecutive sequence path.

The path refers to any sequence of nodes from some starting node to any node in the tree along the parent-child connections. The longest consecutive path need to be from parent to child (cannot be the reverse).

For example,

   1
    \
     3
    / \
   2   4
        \
         5
Longest consecutive sequence path is 3-4-5, so return 3.

   2
    \
     3
    / 
   2    
  / 
 1
Longest consecutive sequence path is 2-3,not3-2-1, so return 2.

 */

function lcs(treeNode) {
  return getLcs(treeNode)[1];
}

function getLcs(node) {
  if (!node) return null;
  let left = getLcs(node.left);
  let right = getLcs(node.right);

  let maxWith = 1, max = 1;
  if (left) {
    if (node.val + 1 === node.left.val) {
      maxWith = left[0] + 1;
    } else {
      maxWith = 1;
    }
    max = Math.max(maxWith, left[1]);
  }
  if (right) {
    if (node.val + 1 === node.right.val) {
      maxWith = Math.max(maxWith, right[0] + 1);
    } else {
      maxWith = Math.max(maxWith, 1);
    }
    max = Math.max(maxWith, right[1]);
  }

  return [maxWith, max];
}

const { buildTreeFromArray } = require('../../leetcode/javascript/util/TreeNode');

let tree = buildTreeFromArray([1,2,3,4,5,6,4,5,0,6,7,0,8,5,4,3]);
console.log(lcs(tree));