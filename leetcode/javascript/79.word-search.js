/*
 * [79] Word Search
 *
 * https://leetcode.com/problems/word-search
 *
 * algorithms
 * Medium (26.55%)
 * Total Accepted:    128.7K
 * Total Submissions: 484.7K
 * Testcase Example:  '["ABCE","SFCS","ADEE"]\n"ABCCED"'
 *
 * 
 * Given a 2D board and a word, find if the word exists in the grid.
 * 
 * 
 * The word can be constructed from letters of sequentially adjacent cell,
 * where "adjacent" cells are those horizontally or vertically neighboring. The
 * same letter cell may not be used more than once.
 * 
 * 
 * 
 * For example,
 * Given board = 
 * 
 * [
 * ⁠ ['A','B','C','E'],
 * ⁠ ['S','F','C','S'],
 * ⁠ ['A','D','E','E']
 * ]
 * 
 * 
 * word = "ABCCED", -> returns true,
 * word = "SEE", -> returns true,
 * word = "ABCB", -> returns false.
 * 
 */
var Point = function(i, j) {
  this.i = i;
  this.j = j;
}

function adj(point, board, inword) {
  let res = [];
  let i = point.i, j = point.j;
  if (i > 0 && !inword[`${i - 1}+${j}`]) {
    res.push(new Point(i - 1, j));
  }
  if (j > 0 && !inword[`${i}+${j - 1}`]) {
    res.push(new Point(i, j - 1));
  }
  if (i < board.length - 1 && !inword[`${i + 1}+${j}`]) {
    res.push(new Point(i + 1, j));
  }
  if (j < board[0].length - 1 && !inword[`${i}+${j + 1}`]) {
    res.push(new Point(i, j + 1));
  }
  return res;
}

function dfs(point, board, ct, word, inword) {
  if (board[point.i][point.j] === word[ct]) {
    ct++;
    if (ct === word.length) return true;
    inword[`${point.i}+${point.j}`] = true;
    let adjs = adj(point, board, inword);
    if (adjs.length === 0) return false;

    for (let i = 0; i < adjs.length; i++) {
      if (dfs(adjs[i], board, ct, word, inword)) {
        return true;
      }
    }
  } 

  inword[`${point.i}+${point.j}`] = false;
  return false;
}

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let m = 0; m < board.length; m++) {
    for (let n = 0; n < board[m].length; n++) {
      let inword = {};
      let ct = 0;
      let startpoint = new Point(m, n);
      if (dfs(startpoint, board, ct, word, inword)) {
        return true;
      }
    }
  }

  return false;
};
