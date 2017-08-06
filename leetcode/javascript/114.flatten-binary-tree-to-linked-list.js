/*
 * [114] Flatten Binary Tree to Linked List
 *
 * https://leetcode.com/problems/flatten-binary-tree-to-linked-list
 *
 * algorithms
 * Medium (34.93%)
 * Total Accepted:    130.5K
 * Total Submissions: 373.2K
 * Testcase Example:  '[]'
 *
 * 
 * Given a binary tree, flatten it to a linked list in-place.
 * 
 * 
 * 
 * For example,
 * Given
 * 
 * ⁠        1
 * ⁠       / \
 * ⁠      2   5
 * ⁠     / \   \
 * ⁠    3   4   6
 * 
 * 
 * 
 * The flattened tree should look like:
 * 
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠     \
 * ⁠      3
 * ⁠       \
 * ⁠        4
 * ⁠         \
 * ⁠          5
 * ⁠           \
 * ⁠            6
 * 
 * 
 * click to show hints.
 * 
 * Hints:
 * If you notice carefully in the flattened tree, each node's right child
 * points to the next node of a pre-order traversal.
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

var helper = function(root) {
  if (root === null) return [null, null];
  let left = helper(root.left);
  let right = helper(root.right);
  if (left[0] === null && right[0] === null) return [root, root];
  
  if (left[0] !== null) {
    root.left = null;
    root.right = left[0];
    left[1].left = null;
    left[1].right = right[0];
  }
  if (right[0] !== null) {
    return [root, right[1]]; 
  } else {
    return [root, left[1]];
  }
};  

/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
  helper(root);
};
