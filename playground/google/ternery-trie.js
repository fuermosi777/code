class Node {
  constructor(char, val) {
    this.char = char;
    this.val = val;
    this.left = null;
    this.mid = null;
    this.right = null;
  }
}

class TerneryTrie {
  constructor() {
    this.root = null;
  }
  put(key, val) {
    this.root = this._put(this.root, key, val, 0);
  }
  _put(node, key, val, d) {
    let char = key[d];
    if (!node) node = new Node(char, null);
    if (node.char > char) {
      node.left = this._put(node.left, key, val, d);
    } else if (node.char < char) {
      node.right = this._put(node.right, key, val, d);
    } else if (d === key.length - 1) {
      node.val = val;
    } else {
      node.mid = this._put(node.mid, key, val, d + 1);
    }
    return node;
  }
  get(key) {
    return this._get(this.root, key, 0);
  }
  _get(node, key, d) {
    let char = key[d];
    if (!node) return null;
    if (node.char > char) {
      return this._get(node.left, key, d);
    } else if (node.char < char) {
      return this._get(node.right, key, d);
    } else if (d === key.length - 1) {
      return node.val;
    } else {
      return this._get(node.mid, key, d + 1);
    }
  }
  delete(key) {

  }
}

let trie = new TerneryTrie();

trie.put('bbc', 3);
trie.put('abc', 4);
trie.put('bac', 5);

console.log(trie.get('abc'));
console.log(trie.get('bbc'));
console.log(trie.get('bac'));