function dfs(grid, i, j, visited) {
  if (grid[i][j] === '0') return;
  visited[i][j] = true;
  if (i > 0 && !visited[i - 1][j]) {
    dfs(grid, i - 1, j, visited);
  }
  if (j > 0 && !visited[i][j - 1]) {
    dfs(grid, i, j - 1, visited);
  }
  if (i < grid.length - 1 && !visited[i + 1][j]) {
    dfs(grid, i + 1, j, visited); 
  }
  if (j < grid[0].length - 1 && !visited[i][j + 1]) {
    dfs(grid, i, j + 1, visited);
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let visited = [];
  let ct = 0;
  for (let i = 0; i < grid.length; i++) {
    visited[i] = [];
    for (let j = 0; j < grid[i].length; j++) {
      visited[i][j] = false;
    }
  }

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (!visited[i][j] && grid[i][j] === '1') {
        ct++;
        dfs(grid, i, j, visited);
      }
    }
  }

  return ct;
};