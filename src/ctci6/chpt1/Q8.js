// @param Integer i
// @param Integer j
// @return void

function zeroMatrix(matrix, i, j) {
    for (var x = 0; x < matrix[i].length; x++) {
        matrix[i][x] = 0;
    }
    for (x = 0; x < matrix.length; x++) {
        matrix[x][i] = 0;
    }
}

// test
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20]
];

zeroMatrix(matrix, 1, 2);
console.log(matrix);
