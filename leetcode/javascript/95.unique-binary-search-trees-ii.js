/*
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii
 *
 * Medium (31.23%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1...n.
 * 
 * 
 * For example,
 * Given n = 3, your program should return all 5 unique BST's shown below.
 * 
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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

function getTrees(lo, hi) {
  let res = [];
  if (lo === hi) {
    res.push(new TreeNode(lo));
  } else if (lo < hi) {
    for (let i = lo; i <= hi; i++) {
      let lTrees = getTrees(lo, i - 1);
      let rTrees = getTrees(i + 1, hi);
      lTrees.forEach(lTree => {
        rTrees.forEach(rTree => {
          let root = new TreeNode(i);
          root.left = lTree;
          root.right = rTree;
          res.push(root);
        });
      });
    }
  } else {
    res.push(null);
  }
  return res;
}

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
  if (n === 0) return [];
  return getTrees(1, n);
};
