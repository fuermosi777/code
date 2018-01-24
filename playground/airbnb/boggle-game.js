/**
 * boggle game，给一个board和字典，找出board上出现最多的单词集合，单词不能重叠在同一个位置

例如

board:
{'a', 'b', 'c'},
{'d', 'e', 'f'},
{'g', 'h', 'i'}

dict:
["abc", "cfi", "beh", "defi", "gh"]
答案应该是 ["abc", "defi", "gh"]
 */

class Node {
  constructor(ch) {
    this.char = ch;
    this.next = [null, null, null, null];
  }
}

function boggleGame(board, dict) {
  let trie = new Trie(dict);
  let nodes = buildGraph(board);
  let current = {
    max: [],
  };
  for (let i = 0; i < nodes.length; i++) {
    let set = new Set();
    current.words = [];
    walk(nodes[i], trie, set, '', current);
  }
}

function walk(node, trie, visitedSet, currentWord, current) {
  visitedSet.add(node);
  let nextWord = currentWord + node.char;
  if (trie.has(nextWord)) {
    current.words.push(nextWord);
    current.max = current.words.length > current.max.length ? current.words : current.max;
  } else if (trie.hasPrefix(currentWord + node.char)) {

    for (let i = 0; i < node.next.length; i++) {
      let nextNode = node.next[i];
      if (nextNode && !visitedSet.has(nextNode)) {
        walk(nextNode, trie, visitedSet, nextWord, current);
      }
    }
  }
  visitedSet.delete(node);
}

let board = [
  ['a', 'b', 'c'],
  ['d', 'e', 'f'],
  ['g', 'h', 'i']
];
let dict = ["abc", "cfi", "beh", "defi", "gh"];

console.log(boggleGame(board, dict));
