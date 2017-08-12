/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// This iteration is not good
// Use the iteration in 1.js, which one is DFS, much better and clearer
// iterative
function isArraySymmetric(nums) {
  if (nums.length <= 1) return true;
  for (let i = 0, j = nums.length - 1; i <= j; i++, j--) {
    if (nums[i] === null && nums[j] === null) continue;
    if ((nums[i] === null && nums[j] !== null) || (nums[i] !== null && nums[j] === null)) return false;
    if (nums[i].val !== nums[j].val) return false;
  }
  return true;
}
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (root === null) return true;
  let stack = [];
  stack.push(root);
  while (true) {
    let arr = [];
    while (stack.length > 0) {
      arr.push(stack.pop());
    }
    if (!isArraySymmetric(arr)) {
      return false;
    } else {
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== null) {
          stack.push(arr[i].left);
          stack.push(arr[i].right);
        }
      }
    }
    if (arr.length === 0) break;
  }
  return true;
};