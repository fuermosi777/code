class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {

  }

  add(...args) {

  }

  bfs(fn) {

  }

  inorder(fn) {

  }

  preorder(fn) {

  }

  postorder(fn) {

  }
}

let tree = new BinaryTree
let fn = value => console.log(value)
tree.add(1, 2, 3, 4)
tree.bfs(fn)
tree.inorder(fn)
tree.preorder(fn)
tree.postorder(fn)