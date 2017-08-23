/*

Convert '5(4(3)(7))(6()(8))'

to

      5
    /  \
   4    6
  / \    \
3   7     8

*/

var {TreeNode} = require('../leetcode/javascript/util/TreeNode');

/**
 * Recursion
 * @param  {string} str
 * @return {TreeNode}
 */
function convert(str) {
  if (str === '') return null;
  let val;
  let a = str.indexOf('(');
  if (a === -1) {
    val = str;
  } else {
    val = str.substring(0, a);
  }
  let node = new TreeNode(val);
  if (a > -1){
    let act = 1;
    let b = a;
    while (act > 0) {
      b++;
      if (str[b] === '(') act++;
      else if (str[b] === ')') act--;
    }
    let d = str.length - 1;
    let dct = 1;
    let c = d;
    while (dct > 0) {
      c--;
      if (str[c] === ')') dct++;
      else if (str[c] === '(') dct--;
    }

    let leftStr = str.substring(a + 1, b);
    let rightStr = str.substring(c + 1, d);
    node.left = convert(leftStr);
    node.right = convert(rightStr);
  }
  return node;
}

console.log(convert('5(4(3)(7))(6()(8))').toArray());