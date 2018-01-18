function height(node) {
  if (!node) return 0;
  return Math.max(height(node.left), height(node.right)) + 1;
}

var {  buildTreeFromArray } = require('../leetcode/javascript/util/TreeNode');

let t1 = buildTreeFromArray([1,2,3,4,5]);

console.log(height(t1));