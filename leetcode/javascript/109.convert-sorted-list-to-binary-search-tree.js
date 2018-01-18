/*
 * [109] Convert Sorted List to Binary Search Tree
 *
 * https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/description/
 *
 * algorithms
 * Medium (35.02%)
 * Total Accepted:    123.9K
 * Total Submissions: 353.8K
 * Testcase Example:  '[-10,-3,0,5,9]'
 *
 * Given a singly linked list where elements are sorted in ascending order,
 * convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree
 * in which the depth of the two subtrees of every node never differ by more
 * than 1.
 * 
 * 
 * 
 * 
 * Example:
 * 
 * Given the sorted linked list: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following
 * height balanced BST:
 * 
 * ⁠     0
 * ⁠    / \
 * ⁠  -3   9
 * ⁠  /   /
 * ⁠-10  5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
  let arr = [];
  let n = head;
  while (n) {
    arr.push(n.val);
    n = n.next;
  }
  return genTree(arr, 0, arr.length - 1);
};

function genTree(arr, lo, hi) {
  if (lo > hi) return null;
  if (lo === hi) return new TreeNode(arr[lo])
  let mid = lo + (hi - lo) / 2 | 0;
  let node = new TreeNode(arr[mid]);
  node.left = genTree(arr, lo, mid - 1);
  node.right = genTree(arr, mid + 1, hi);

  return node;
}