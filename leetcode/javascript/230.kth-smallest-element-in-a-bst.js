/*
 * [230] Kth Smallest Element in a BST
 *
 * https://leetcode.com/problems/kth-smallest-element-in-a-bst
 *
 * algorithms
 * Medium (43.77%)
 * Total Accepted:    104.9K
 * Total Submissions: 239.6K
 * Testcase Example:  '[1]\n1'
 *
 * Given a binary search tree, write a function kthSmallest to find the kth
 * smallest element in it.
 * 
 * Note: 
 * You may assume k is always valid, 1 ? k ? BST's total elements.
 * 
 * Follow up:
 * What if the BST is modified (insert/delete operations) often and you need to
 * find the kth smallest frequently? How would you optimize the kthSmallest
 * routine?
 * 
 * Credits:Special thanks to @ts for adding this problem and creating all test
 * cases.
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

// function dfs(node, flatten) {
//   if (node === null) return;
//   dfs(node.left, flatten);
//   flatten.push(node.val);
//   dfs(node.right, flatten);
// }

/**
 * Flatten DFS
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// var kthSmallest = function(root, k) {
//   let flatten = [];
//   dfs(root, flatten);
//   return flatten[k - 1];
// };


function size(node) {
  if (node === null) return 0;
  let left = size(node.left);
  let right = size(node.right);
  node.size = left + right + 1;
  return node.size;
}

function findK(node, k) {
  let leftSize = node.left ? node.left.size : 0;

  if (k === leftSize + 1) {
    return node.val;
  } else if (k > leftSize + 1) {
    return findK(node.right, k - leftSize - 1);
  } else {
    return findK(node.left, k);
  }
}

/**
 * Follow-up
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
  size(root);
  console.log(root)
  return findK(root, k);
};

