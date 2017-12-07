class Node {
  constructor(val) {
    this.val = val;
    this.parent = null;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.s = 0;
    this.root = null;
  }

  add(...args) {
    args.forEach(arg => {
      this.addSingle(arg);
    });
  }

  addSingle(item) {
    let node = new Node(item);
    if (this.root === null) {
      this.root = node;
    } else {
      this.addToTree(this.root, node);
    }

    this.s += 1;
  }

  addToTree(root, node) {
    if (root.val >= node.val) {
      if (root.left) {
        this.addToTree(root.left, node);
      } else {
        root.left = node;
        node.parent = root;
      }
    } else {
      if (root.right) {
        this.addToTree(root.right, node);
      } else {
        root.right = node;
        node.parent = root;
      }
    }
  }

  has(val) {
    return this.hasFromTree(this.root, val);
  }

  hasFromTree(root, val) {
    if (root === null) return false;
    if (root.val === val) {
      return true;
    } else if (root.val < val) {
      return this.hasFromTree(root.right, val);
    } else {
      return this.hasFromTree(root.left, val);
    }
  }

  findFromTree(root, val) {
    if (root === null) return null;
    if (root.val === val) {
      return root;
    } else if (root.val < val) {
      return this.findFromTree(root.right, val);
    } else {
      return this.findFromTree(root.left, val);
    }
  }

  /**
   * @todo
   */
  remove(val) {
    // let nodeToRemove = this.findFromTree(this.root, val);
    // if (nodeToRemove === null) return;

    // if (this.size === 1) this.root = null;

    // let parent = nodeToRemove.parent;
    // if (nodeToRemove.left === null && nodeToRemove.right === null) {
    //   parent.left = parent.right = null;
    // } else if (nodeToRemove.)

    // this.size -= 1;
  }

  size() {
    return this.s;
  }
}

let tree = new BinarySearchTree;
tree.add(1, 2, 3, 4)
tree.add(5)
console.log(tree.has(2));                          // true
console.log(tree.has(5));                          // true
tree.remove(3)                        // undefined
console.log(tree.size());                           // 4