/*
 * [211] Add and Search Word - Data structure design
 *
 * https://leetcode.com/problems/add-and-search-word-data-structure-design
 *
 * algorithms
 * Medium (22.54%)
 * Total Accepted:    55.6K
 * Total Submissions: 246.5K
 * Testcase Example:  '["WordDictionary","addWord","addWord","addWord","search","search","search","search"]\n[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]'
 *
 * 
 * Design a data structure that supports the following two operations:
 * 
 * 
 * void addWord(word)
 * bool search(word)
 * 
 * 
 * 
 * search(word) can search a literal word or a regular expression string
 * containing only letters a-z or .. A . means it can represent any one
 * letter.
 * 
 * 
 * For example:
 * 
 * addWord("bad")
 * addWord("dad")
 * addWord("mad")
 * search("pad") -> false
 * search("bad") -> true
 * search(".ad") -> true
 * search("b..") -> true
 * 
 * 
 * 
 * Note:
 * You may assume that all words are consist of lowercase letters a-z.
 * 
 * 
 * click to show hint.
 * 
 * You should be familiar with how a Trie works. If not, please work on this
 * problem: Implement Trie (Prefix Tree) first.
 * 
 */
let Node = function() {
  this.hasValue = false;
  this.childNodes = {};
};

/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
  this.root = new Node();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
  let n = this.root;
  for (let i = 0; i < word.length; i++) {
    let char = word[i];
    if (!n.childNodes.hasOwnProperty(char)) {
      n.childNodes[char] = new Node();
    }
    n = n.childNodes[char];
  }
  n.hasValue = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
  return this._search(word, 0, this.root);
  
};

WordDictionary.prototype._search = function(word, start, root) {
  let char = word[start];
  if (start === word.length) {
    return !!root.hasValue;
  }

  if (char === '.') {
    let keys = Object.keys(root.childNodes);
    for (let i = 0; i < keys.length; i++) {
      if (this._search(word, start + 1, root.childNodes[keys[i]])) {
        return true;
      }
    }
  } else if (root.childNodes.hasOwnProperty(char)) {
    return this._search(word, start + 1, root.childNodes[char]);
  }

  return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = Object.create(WordDictionary).createNew()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */