/**
 * @param  {Document} document
 * @param  {string} className
 * @return {Element[]}
 */
function getElementsByClassName(root, className) {
  let res = [];

  dfs(root, className, res);
  return res;
}

function dfs(node, className, resList) {
  if (node.nodeType === 1 && node.classList.contains(className)) {
    resList.push(node);
  }

  for (let i = 0; i < node.childNodes.length; i++) {
    dfs(node.childNodes[i], className, resList);
  }
}