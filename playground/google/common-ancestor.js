let a = document.getElementById('a');
let b = document.getElementById('b');
let c = document.getElementById('c');
let d = document.getElementById('d');
let e = document.getElementById('e');
let f = document.getElementById('f');
let g = document.getElementById('g');

function getCommonAncestor(n1, n2) {
  let chain1 = getFamilyChain(n1);
  let chain2 = getFamilyChain(n2);

  let lca = null;
  let i = 0;

  while (chain1[i] && chain2[i]) {
    if (chain1[i] === chain2[i]) {
      lca = chain1[i];
      i++;
    }
  }

  return lca;
}

function getFamilyChain(node) {
  let chain = [];
  let n = node;
  while (n) {
    if (n.parentNode && n.parentNode.nodeName === 'DIV') chain.unshift(n.parentNode);
    n = n.parentNode;
  }
  return chain;
}

console.log(getCommonAncestor(a, f), 'null');
console.log(getCommonAncestor(a, e), 'null');
console.log(getCommonAncestor(d, e), 'a');
console.log(getCommonAncestor(c, e), 'a');
console.log(getCommonAncestor(b, c), 'a');