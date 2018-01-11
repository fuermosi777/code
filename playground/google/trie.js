const DICT_SIZE = 256;

class Node {
  constructor() {
    this.val = null;
    this.content = [];
    // for (let i = 0; i < DICT_SIZE; i++) {
    //   this.next[i] = new Node();
    // }
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  put(key, val) {
    this.root = this._put(this.root, key, val, 0);
  }

  _put(node, key, val, d) {
    let cc = key.charCodeAt(d);
    if (!node) node = new Node();
    if (d === key.length - 1) {
      node.val = val;
    } else {
      node.content[cc] = this._put(node.content[cc], key, val, d + 1);
    }
    return node;
  }

  get(key) {
    return this._get(this.root, key, 0);
  }

  _get(node, key, d) {
    if (!node) return null;
    let cc = key.charCodeAt(d);
    if (d === key.length - 1) {
      return node.val;
    } else {
      return this._get(node.content[cc], key, d + 1);
    }
  }

}

let trie = new Trie();

trie.put('bbc', 3);
trie.put('abc', 4);
trie.put('bac', 5);

console.log(trie.get('abc'));
console.log(trie.get('bbc'));
console.log(trie.get('bac'));