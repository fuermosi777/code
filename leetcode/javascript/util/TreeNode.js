var TreeNode = function(val) {
  this.val = val;
  this.left = this.right = null;
};

/**
 * Convert array [1, null, 2, 3, 4] to a binary tree
 * @param  {string[] | number[]} arr
 * @return {TreeNode}
 */
TreeNode.prototype.buildFromArray = function(arr) {
  if (arr.length === 0 || arr[0] === null) return null;


};

/**
 * @return {string[] | number[]}
 */
TreeNode.prototype.toArray = function() {

};

/**
 * @return {string}
 */
TreeNode.prototype.toString = function() {

};

module.exports = TreeNode;