class Node {
  constructor(val, callback) {
    this.val = val;
    this.callback = callback;
    this.left = null;
    this.right = null;
    this.parent = null;
  }
}

/**
 * Basically a BST due to search
 */
class Tree {
  constructor() {
    this.root = null;
  }
  insert(val, callback) {
    let node = new Node(val, callback);

    if (!this.root) {
      this.root = node;
    } else {
      this.insertDFS(this.root, node);
    }
  }
  insertDFS(node, nodeToAdd) {
    if (node.val === nodeToAdd.val) return;
    if (node.val < nodeToAdd.val) {
      if (node.right) {
        this.insertDFS(node.right, nodeToAdd);
      } else {
        node.right = nodeToAdd;
        nodeToAdd.parent = node;
      }
    } else {
      if (node.left) {
        this.insertDFS(node.left, nodeToAdd);
      } else {
        node.left = nodeToAdd;
        nodeToAdd.parent = node;
      }
    }
  }
  dfs(node, callback) {
    if (!node) return;
    callback(node);

    this.dfs(node.left, callback);
    this.dfs(node.right, callback);
  }

  search(val) {
    return this.searchDFS(this.root, val);
  }


  searchDFS(node, val) {
    if (!node) return false;
    if (node.val === val) {
      return true;
    } else if (node.val > val) {
      let exist = this.searchDFS(node.left, val);
      if (exist) {
        return true;
      }
    } else {
      let exist = this.searchDFS(node.right, val);
      if (exist) {
        return true;
      }
    }

    return false;
  }
  removeSubtree(val) { // BFS call all callbacks
    let queue = [];
    queue.push(this.root);
    while (queue.length > 0) {
      let nodes = [];
      while (queue.length > 0) {
        nodes.push(queue.shift());
      }

      for (let i = 0; i < nodes.length; i++) {
        let n = nodes[i];
        if (n.callback) callback();
        if (n.val === val) {
          let parent = n.parent;
          if (parent) {
            if (parent.right === n) {
              parent.right = null;
            } else {
              parent.left = null;
            }
          } else {
            this.root === null;
          }
        } else {
          if (n.left) queue.push(n.left);
          if (n.right) queue.push(n.right);
        }
      }
    }
  }
}

function test() {
  let tree = new Tree;
  tree.insert(1, null);
  tree.insert(2, null);
  tree.insert(3, null);
  console.log(tree.search(3));
  tree.removeSubtree(3);
  console.log(tree.search(3));
  console.log(tree.search(1));
  console.log(tree.search(2));
  tree.insert(3, null);
  console.log(tree.search(3));
}

test();