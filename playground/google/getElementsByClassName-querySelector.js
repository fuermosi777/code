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

function querySelector(root, selector) {
  let selectors = selector.split(',');
  selectors.forEach(s => s = s.trim());

  for (let i = 0; i < selectors.length; i++) {
    let firstChar = selectors[i][0];
    let className = '';
    if (firstChar === '.') {
      className = selectors[i].substring(1);

      let nodes = getElementsByClassName(root, className);

      if (nodes.length > 0) return nodes[0];
    }
  }

  return null;
}