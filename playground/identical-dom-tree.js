/**
 * Two identical DOM trees, givin a node, find the corresbonding node in the other. 
 */

function find(tree1, tree2, node) {
  if (tree1 === node) return tree2;
  if ('childNodes' in tree1) {
    for (let i = 0; i < tree1.childNodes.length; i++) {
      let res = find(tree1.childNodes[i], tree2.childNodes[i], node);
      if (res !== null) return res;
    }
  } 
  return null;
}