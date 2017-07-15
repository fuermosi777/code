function validate(nums) {
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    if (map.hasOwnProperty(nums[i]) && nums[i] !== '.') return false;
    map[nums[i]] = true;
  }
  return true;
}

function add9(board, i, j) {
  let nums = "";
  for (let a = i; a < i + 3; a++) {
    for (let b = j; b < j + 3; b++) {
      nums += board[a][b];
    }
  }
  return nums;
}
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  for (let i = 0; i < board.length; i++) {
    if (!validate(board[i])) return false;
  }

  for (let i = 0; i < board.length; i++) {
    let nums = "";
    for (let j = 0; j < board.length; j++) {
      nums += board[j][i];
    }
    if (!validate(nums)) return false;
  }

  let start = [0, 3, 6];
  for (let i = 0; i < start.length; i++) {
    for (let j = 0; j < start.length; j++) {
      if (!validate(add9(board, start[i], start[j]))) return false;
    }
  }
  return true;
};