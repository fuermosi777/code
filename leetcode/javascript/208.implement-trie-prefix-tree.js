var Node = function() {
  this.hasValue = false;
  this.childNodes = {};
};

/**
 * Initialize your data structure here.
 */
var Trie = function() {
  this.root = new Node();
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (!node.childNodes.hasOwnProperty(ch)) {
      node.childNodes[ch] = new Node();
    }
    node = node.childNodes[ch];
  }
  node.hasValue = true;
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
  let node = this.root;
  for (let i = 0; i < word.length; i++) {
    let ch = word[i];
    if (!node.childNodes.hasOwnProperty(ch)) return false;
    node = node.childNodes[ch];
  }
  if (!node.hasValue) return false;
  return true;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
  let node = this.root;
  for (let i = 0; i < prefix.length; i++) {
    let ch = prefix[i];
    if (!node.childNodes.hasOwnProperty(ch)) return false;
    node = node.childNodes[ch];
  }
  return true;
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = Object.create(Trie).createNew()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
