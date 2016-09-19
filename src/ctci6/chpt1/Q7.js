// @param Array matrix
// @return Array

function rotate(matrix) {
    for (var x = 0; x < Math.floor(matrix.length / 2); x++) {
        var temp = top(matrix, x);
        leftToTop(matrix, x);
        bottomToLeft(matrix, x);
        rightToBottom(matrix, x);
        tempToRight(matrix, temp, x);
    }
}

function top(matrix, i) {
    var top = [];
    for (var j = 0; j < matrix.length; j++) {
        top.push(matrix[i][j]);
    }
    return top;
}

function leftToTop(matrix, i) {
    for (var j = i; j < matrix.length - i; j++) {
        matrix[i][matrix.length - 1 - j] = matrix[j][i];
    }
}

function bottomToLeft(matrix, i) {
    for (var j = i; j < matrix.length - i; j++) {
        matrix[j][i] = matrix[matrix.length - i - 1][j];
    }
}

function rightToBottom(matrix, i) {
    for (var j = i; j < matrix.length - i; j++) {
        matrix[matrix.length - 1 - i][j] = matrix[matrix.length - 1 - j][matrix.length - 1 - i];
    }
}

function tempToRight(matrix, temp, i) {
    for (var j = i; j < matrix.length - i; j++) {
        matrix[j][matrix.length - 1 - i] = temp[j];
    }
}


// test
var matrix = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16]
];

rotate(matrix, 0);
console.log(matrix);
