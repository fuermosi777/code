function findRec(matrix) {
  let set = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      for (let k = j + 1; k < matrix[i].length; k++) {
        if (matrix[i][j] === 1 && matrix[i][k] === 1) {
          if (set.has(`${j}-${k}`)) {
            return true;
          }
          set.add(`${j}-${k}`);
        }
      }
    }
  }
  return false;
}

let matrix = [
  [1, 0, 0, 1, 0],
  [0, 0, 1, 0, 1],
  [0, 0, 0, 1, 0],
  [1, 0, 1, 0, 1],
];

console.log(findRec(matrix));