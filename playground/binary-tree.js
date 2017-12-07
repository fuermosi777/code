class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.depth = 0;
    this.size = 0;
  }

  add(...args) {
    args.forEach(this.addSingle.bind(this));
  }

  addSingle(val) {
    let node = new Node(val);
    if (this.root === null) {
      this.root = node;
      this.height = 1;
    } else {
      let queue = [this.root];
      let isAdded = false;

      while (queue.length > 0) {
        let levelNodes = [];

        while (queue.length > 0) {
          levelNodes.push(queue.shift());
        }

        for (let i = 0; i < levelNodes.length; i++) {
          if (levelNodes[i].left === null) {
            levelNodes[i].left = node;
            if (i === 0) {
              this.height += 1;
            }
            isAdded = true;
            break;
          } else if (levelNodes[i].right === null) {
            levelNodes[i].right = node;
            isAdded = true;
            break;
          }
        }

        if (!isAdded) {
          for (let i = 0; i < levelNodes.length; i++) {
            queue.push(levelNodes[i].left);
            queue.push(levelNodes[i].right);
          }
        }
      }
    }

    this.size += 1;
  }

  bfs(fn) {
    if (this.root === null) return;

    let queue = [this.root];
    while (queue.length > 0) {
      let nodes = [];
      while (queue.length > 0) {
        nodes.push(queue.shift());
      }

      nodes.forEach(node => fn(node.val));

      nodes.forEach(node => {
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      })
    }
  }

  dfs(node, order, fn) {

    if (!node) return;

    node.visited = true;

    if (order === 'preorder') fn(node.val);

    this.dfs(node.left, order, fn);
    
    if (order === 'inorder') fn(node.val);

    this.dfs(node.right, order, fn);

    if (order === 'postorder') fn(node.val);
  }

  inorder(fn) {
    this.dfs.call(this, this.root, 'inorder', fn);
  }

  preorder(fn) {
    this.dfs.call(this, this.root, 'preorder', fn);
  }

  postorder(fn) {
    this.dfs.call(this, this.root, 'postorder', fn);
  }
}

let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4, 5);

tree.bfs(fn)
console.log('---')
tree.inorder(fn)
console.log('---')
tree.preorder(fn)
console.log('---')
tree.postorder(fn)