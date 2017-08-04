/**
 * Two identical DOM trees, givin a node, find the corresbonding node in the other. 
 */

// function find(tree1, tree2, node) {
//   if (tree1 === node) return tree2;
//   if ('childNodes' in tree1) {
//     for (let i = 0; i < tree1.childNodes.length; i++) {
//       let res = find(tree1.childNodes[i], tree2.childNodes[i], node);
//       if (res !== null) return res;
//     }
//   } 
//   return null;
// }

// iteration

// function find(t1, t2, node) {
//   var q1 = [t1], q2 = [t2];
//   while (q1.length > 0) {
//     let n1 = q1.shift();
//     let n2 = q2.shift();
//     if (n1 === node) return n2;
//     for (let i = 0; i < n1.childNodes.length; i++) {
//       q1.push(n1.childNodes[i]);
//       q2.push(n2.childNodes[i]);
//     }
//   }
//   return null;
// }

// function find(tree1, tree2, node) {
//   var stack = [];
//   var n1 = node;
//   while (tree1 !== n1) {
//     stack.push(Array.prototype.indexOf.call(n1.parentNode.childNodes, n1));
//     n1 = n1.parentNode;
//   }
//   var n2 = tree2;
//   while (stack.length > 0) {
//     let index = stack.pop();
//     n2 = n2.childNodes.item(index);
//   }
//   return n2;
// }