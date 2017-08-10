/*
 * [297] Serialize and Deserialize Binary Tree
 *
 * https://leetcode.com/problems/serialize-and-deserialize-binary-tree
 *
 * algorithms
 * Hard (33.22%)
 * Total Accepted:    67.2K
 * Total Submissions: 202.4K
 * Testcase Example:  '[]'
 *
 * Serialization is the process of converting a data structure or object into a
 * sequence of bits so that it can be stored in a file or memory buffer, or
 * transmitted across a network connection link to be reconstructed later in
 * the same or another computer environment. 
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no
 * restriction on how your serialization/deserialization algorithm should work.
 * You just need to ensure that a binary tree can be serialized to a string and
 * this string can be deserialized to the original tree structure.
 * 
 * 
 * For example, you may serialize the following tree
 * 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠    / \
 * ⁠   4   5
 * 
 * as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a
 * binary tree. You do not necessarily need to follow this format, so please be
 * creative and come up with different approaches yourself.
 * 
 * 
 * 
 * Note: Do not use class member/global/static variables to store states. Your
 * serialize and deserialize algorithms should be stateless.
 * 
 * 
 * Credits:Special thanks to @Louis1992 for adding this problem and creating
 * all test cases.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  let arr = [null];
  _serialize(root, 0, arr, 'M');
  return arr.join(',');
};

function _serialize(node, parentPos, arr, dir) {
  if (node === null) return;
  arr.push(`${parentPos}#${dir}#${node.val}`);
  let pos = arr.length - 1;
  _serialize(node.left, pos, arr, 'L');
  _serialize(node.right, pos, arr, 'R');
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let arr = data.split(',');
  let nodes = [null];
  if (arr.length <= 1) return null;
  let root;
  for (let i = 1; i < arr.length; i++) {
    let parse = arr[i].split('#');
    let parentPos = parse[0];
    let dir = parse[1];
    let val = parse[2];
    let parent = nodes[parentPos];
    let node = new TreeNode(parseInt(val));
    nodes[i] = node;
    if (parentPos !== '0') {
      if (dir === 'L') {
        parent.left = node;
      } else if (dir === 'R') {
        parent.right = node;
      }
    } else {
      root = node;
    }
  }
  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */