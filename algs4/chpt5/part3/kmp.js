// pattern ABCDABD

// @param String pattern
// @return Array
var fail = function(pattern) {
    var mode = [];
    for (let i = 0; i < pattern.length; i++) {
        mode[i] = 0;
    }
    var i = 0, j;
    for (j = 1; j < pattern.length; j++) {
        while (i > 0 && pattern[i] !== pattern[j]) {
            i = mode[i - 1];
        }
        if (pattern[i] === pattern[j]) {
            i++;
        } else {
            i = 0;
        }
        mode[j] = i;
    }
    return mode;
};

String.prototype.kmpIndexOf = function(p) {
    var mode = fail(p);
    var i = 0, j = 0;
    for (i; i < this.length; i++) {
        if (j === p.length - 1) return i - p.length + 1;
        if (this[i] === p[j]) {
            j++;
        } else if (j === 0) {
        } else {
            j = mode[j - 1];
            i--;
        }
    }
    return -1;
};

console.log("ABC ABCDAB ABCDABCDABDE".kmpIndexOf("ABCDABD"));