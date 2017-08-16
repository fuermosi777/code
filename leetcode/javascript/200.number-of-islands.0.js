/*
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands
 *
 * algorithms
 * Medium (34.29%)
 * Total Accepted:    111.4K
 * Total Submissions: 324.9K
 * Testcase Example:  '["11110","11010","11000","00000"]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 11110110101100000000
 * Answer: 1
 * Example 2:
 * 11000110000010000011
 * Answer: 3
 * 
 * Credits:Special thanks to @mithmatt for adding this problem and creating all
 * test cases.
 */

function dsp(grid, i, j, visited) {
  if (grid[i][j] === '0') return;
  visited[i][j] = true;
  if (i > 0 && !visited[i - 1][j]) {
    dsp(grid, i - 1, j, visited);
  }
  if (i < grid.length - 1 && !visited[i + 1][j]) {
    dsp(grid, i + 1, j, visited);
  }
  if (j > 0 && !visited[i][j - 1]) {
    dsp(grid, i, j - 1, visited);
  }
  if (j < grid[0].length - 1 && !visited[i][j + 1]) {
    dsp(grid, i, j + 1, visited);
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let visited = [];
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
  }

  let ct = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        dsp(grid, i, j, visited);
        ct++;
      }
    }
  }
  return ct;
};
