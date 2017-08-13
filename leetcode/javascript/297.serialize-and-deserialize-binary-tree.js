// ✔ Accepted
// ✔ 47/47 cases passed (175 ms)
// ✔ Your runtime beats 83.33 % of javascript submissions

/**
 * My original method
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