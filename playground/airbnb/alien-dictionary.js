/**
 *

There is a new alien language which uses the latin alphabet. However, the order among letters are unknown to you. You receive a list of words from the dictionary, where words are sorted lexicographically by the rules of this new language. Derive the order of letters in this language.

For example,
Given the following words in dictionary,

[
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
]
The correct order is: "wertf".

 */

class Node {
  constructor(char) {
    this.char = char;
    this.children = [];
    this.visited = false;
  }
}

function getOrder(strs) {
  let map = new Map();

  // build graph
  for (let i = 0; i < strs.length - 1; i++) {
    let word1 = strs[i], word2 = strs[i + 1];
    let j = 0;
    while (j < word1.length && j < word2.length && word1[j] === word2[j]) {
      j++;
    }
    let char1 = word1[j], char2 = word2[j];

    if (char1 && char2) {
      let charNode1, charNode2;
      if (map.has(char1)) {
        charNode1 = map.get(char1);
      } else {
        charNode1 = new Node(char1);
        map.set(char1, charNode1);
      }
      if (map.has(char2)) {
        charNode2 = map.get(char2);
      } else {
        charNode2 = new Node(char2);
        map.set(char2, charNode2);
      }
      charNode1.children.push(charNode2);
    }
  }
  let topoStack = [];

  for (let node of map.values()) {
    walk(node, topoStack);
  }

  let order = topoStack.reverse().map(node => node.char);

  return order;
}

function walk(node, stack) {
  if (node.visited) return;
  node.visited = true;
  for (let i = 0; i < node.children.length; i++) {
    walk(node.children[i], stack);
  } 
  stack.push(node);
}

let dict = [
  "wrt",
  "wrf",
  "er",
  "ett",
  "rftt"
];
console.log(getOrder(dict));