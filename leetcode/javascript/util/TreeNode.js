var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * @param  {string[] | number[]}
 * @param  {number}
 * @return {TreeNode}
 */
var buildNode = function(arr, i) {
  if (i >= arr.length || arr[i] === null) return null;
  let node = new TreeNode(arr[i]);
  let left = buildNode(arr, 2 * i + 1);
  let right = buildNode(arr, 2 * i + 2);
  node.left = left;
  node.right = right;
  return node;
};

/**
 * Convert array [1, null, 2, 3, 4] to a binary tree
 * @param  {string[] | number[]} arr
 * @return {TreeNode}
 */
var buildTreeFromArray = function(arr) {
  return buildNode(arr, 0);
};

/**
 * @return {string[] | number[]}
 */
TreeNode.prototype.toArray = function() {
  let arr = [];
  this.buildArray(this, arr, 0);
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'undefined') {
      arr[i] = null;
    }
  }
  return arr;
};

/**
 * @param  {TreeNode}
 * @param  {string[] | number[]}
 * @param  {number}
 * @return {void}
 */
TreeNode.prototype.buildArray = function(node, arr, i) {
  if (node === null) {
    arr[i] = null;
  } else {
    arr[i] = node.val;
    if (node.left !== null || node.right !== null) {
      this.buildArray(node.left, arr, 2 * i + 1);
      this.buildArray(node.right, arr, 2 * i + 2);
    }
  }
};

module.exports = {
  TreeNode,
  buildTreeFromArray
};

// test
function test() {
  let tree1 = buildTreeFromArray([1,null,3]);
  console.log(tree1.toArray());
}

test();