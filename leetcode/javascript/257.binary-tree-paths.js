/*
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths
 *
 * algorithms
 * Easy (38.43%)
 * Total Accepted:    118.3K
 * Total Submissions: 307.9K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * 
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * 
 * For example, given the following binary tree:
 * 
 * 
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * 
 * 
 * All root-to-leaf paths are:
 * ["1->2->5", "1->3"]
 * 
 * 
 * Credits:Special thanks to @jianchao.li.fighter for adding this problem and
 * creating all test cases.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function dfs(node, line, res) {
  if (node === null) return;

  line = `${line}${line === '' ? '' : '->'}${node.val}`;
  if (node.left) {
    dfs(node.left, line, res);
  }
  if (node.right) {
    dfs(node.right, line, res);
  }
  if (!node.left && !node.right) {
    res.push(line);
  }
}

/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  let res = [];
  dfs(root, '', res);
  return res;
};
