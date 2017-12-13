function querySelectorAll(selector) {
  dfs(document, addHash);

  let res = [];
  let resMap = {};
  let selectors = selector.split(',');

  selectors.forEach(s => {
    let nodes = querySingleSelector(s);

    if (nodes && nodes.length > 0) {

      for (let i = 0; i < nodes.length; i++) {
        if (!resMap.hasOwnProperty(nodes[i].hash)) {
          resMap[nodes[i].hash] = true;
          res.push(nodes[i]);
        }
      }
    }
  });

  return res;

}

const ID_SELECTOR_REGEX = /^(.*)#(.+)$/;
const CLASS_SELECTOR_REGEX = /^(.*)\.(.+)$/;

function addHash(node) {
  node.hash = Math.random().toString();
}

function dfs(node, func) {
  if (!node) return;

  func(node);

  for (let i = 0; i < node.childNodes.length; i++) {
    dfs(node.childNodes[i], func);
  }
}

function querySingleSelector(selector) {
  let res = [];

  if (ID_SELECTOR_REGEX.test(selector)) {
    let matchArr = selector.match(ID_SELECTOR_REGEX);
    console.log(selector, selector, ID_SELECTOR_REGEX)
    let nodeName = matchArr[1];
    let idName = matchArr[2];
    dfs(document, node => {
      if (node.nodeType !== Node.ELEMENT_NODE) return;

      if (
        (nodeName && node.nodeName === nodeName.toUpperCase() && node.id === idName) || 
        (!nodeName && node.id === idName)
      ) {
        res.push(node);
      }
    });
  } else if (CLASS_SELECTOR_REGEX.test(selector)) {
    // TODO
  } else {
    // TODO
  }

  return res;
}