function getTopo(dependencies) {
  let order = [];
  let stack = [];
  let visited = new Set();
  for (let key of Object.keys(dependencies)) {
    dfs(key, stack, visited, dependencies);
  }
  while (stack.length > 0) {
    order.push(stack.pop());
  }

  return order;
}

function dfs(node, stack, visited, dependencies) {
  if (visited.has(node)) return;
  visited.add(node);
  for (let i = 0; i < dependencies[node].length; i++) {
    dfs(dependencies[node][i], stack, visited, dependencies);
  }
  stack.push(node);
}

let dependencies = {
  a: ['d', 'c'],
  b: ['a', 'd'],
  c: [],
  d: []
};

console.log(getTopo(dependencies));