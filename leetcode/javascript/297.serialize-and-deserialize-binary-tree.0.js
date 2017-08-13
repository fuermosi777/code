/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Leetcode OJ method
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let arr = [];
  serial(root, arr);
  return arr.join(',');
};

function serial(node, arr) {
  if (node === null) {
    arr.push('x');
    return;
  }
  arr.push(node.val);
  serial(node.left, arr);
  serial(node.right, arr);
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(',');
  return deserial(arr);
};

function deserial(arr) {
  let first = arr.shift();
  if (first === 'x') return null;
  let node = new TreeNode(parseInt(first));
  node.left = deserial(arr);
  node.right = deserial(arr);
  return node;
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */