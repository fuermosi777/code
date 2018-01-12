/*
 * [637] Average of Levels in Binary Tree
 *
 * https://leetcode.com/problems/average-of-levels-in-binary-tree/description/
 *
 * algorithms
 * Easy (55.85%)
 * Total Accepted:    31.8K
 * Total Submissions: 57K
 * Testcase Example:  '[3,9,20,15,7]'
 *
 * Given a non-empty binary tree, return the average value of the nodes on each
 * level in the form of an array.
 * 
 * Example 1:
 * 
 * Input:
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * Output: [3, 14.5, 11]
 * Explanation:
 * The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on
 * level 2 is 11. Hence return [3, 14.5, 11].
 * 
 * 
 * 
 * Note:
 * 
 * The range of node's value is in the range of 32-bit signed integer.
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  let res = [];
  let queue = [root];

  while (queue.length > 0) {
    let stg = [];
    while (queue.length > 0) {
      stg.push(queue.pop());
    }
    let avg = sum(stg) / stg.length;
    res.push(avg);
    stg.forEach(s => {
      if (s.left) queue.push(s.left);
      if (s.right) queue.push(s.right);
    });
  }

  return res;
};

function sum(nodes) {
  let sum = 0;
  for (let i = 0; i < nodes.length; i++) {
    sum += nodes[i].val;
  }
  return sum;
}