/*
 * [59] Spiral Matrix II
 *
 * https://leetcode.com/problems/spiral-matrix-ii
 *
 * algorithms
 * Medium (39.67%)
 * Total Accepted:    85.1K
 * Total Submissions: 214.2K
 * Testcase Example:  '0'
 *
 * Given an integer n, generate a square matrix filled with elements from 1 to
 * n2 in spiral order.
 * 
 * 
 * For example,
 * Given n = 3,
 * 
 * You should return the following matrix:
 * 
 * [
 * ⁠[ 1, 2, 3 ],
 * ⁠[ 8, 9, 4 ],
 * ⁠[ 7, 6, 5 ]
 * ]
 * 
 */

var dir = 'E';

function nextE(prev, visited) {
  dir = 'E';
  let i = prev[0], j = prev[1];
  if (j < visited.length - 1 && !visited[i][j + 1]) {
    return [i, j + 1];
  } else {
    return nextS(prev, visited)
  }
}

function nextS(prev, visited) {
  dir = 'S';
  let i = prev[0], j = prev[1];
  if (i < visited.length - 1 && !visited[i + 1][j]) {
    return [i + 1, j];
  } else {
    return nextW(prev, visited)
  }
}

function nextW(prev, visited) {
  dir = 'W';
  let i = prev[0], j = prev[1];
  if (j > 0 && !visited[i][j - 1]) {
    return [i, j - 1];
  } else {
    return nextN(prev, visited)
  }
}

function nextN(prev, visited) {
  dir = 'N';
  let i = prev[0], j = prev[1];
  if (i > 0 && !visited[i - 1][j]) {
    return [i - 1, j];
  } else {
    return nextE(prev, visited)
  }
}

var next = {
  E: nextE,
  S: nextS,
  W: nextW,
  N: nextN
};

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function(n) {
  let res = [];
  let visited = [];
  for (let i = 0; i < n; i++) {
    res[i] = [];
    visited[i] = [];
  }

  let prev = [0, 0];
  let k = 1;
  while (k <= n * n) {
    res[prev[0]][prev[1]] = k;
    visited[prev[0]][prev[1]] = true;
    if (k < n * n) prev = next[dir](prev, visited);
    k++;
  }

  return res;
};
