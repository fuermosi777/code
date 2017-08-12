var { TreeNode, buildTreeFromArray } = require('../leetcode/javascript/util/TreeNode');
var expect = require('chai').expect;

/**
 * Check if two trees have the same structure (no check value)
 * @param  {TreeNode}  tree1
 * @param  {TreeNode}  tree2
 * @return {Boolean}
 */
function isSame(tree1, tree2) {
  if (tree1 === null && tree2 !== null) return false;
  if (tree1 !== null && tree2 === null) return false;
  if (tree1 === null && tree2 === null) return true;
  return isSame(tree1.left, tree2.left) && isSame(tree1.right, tree2.right);
}


let tree1 = buildTreeFromArray([1,2,3,null,null,4,5]);
let tree2 = buildTreeFromArray([2,4,5,null,null,1,8]);
let tree3 = buildTreeFromArray([2,4,5,null,null,1]);
expect(isSame(tree1, tree2)).to.equal(true);
expect(isSame(tree1, tree3)).to.equal(false);

// ---

function isSymetric(tree1, tree2) {
  if ((tree1 || tree2) === null) return true;
  if ((tree1 && tree2) === null) return false;
  return isSame(tree1.left, tree2.right) && isSame(tree1.right, tree2.left);
}

let tree4 = buildTreeFromArray([1,2,3,4,5]);
expect(isSymetric(tree1, tree4)).to.equal(true);