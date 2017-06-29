var buildMode = function(needle) {
    let mode = [];
    mode[0] = 0;
    for (let i = 1; i < needle.length; i++) {
        let a = mode[i - 1];
        while (a > 0 && needle[a] !== needle[i]) {
            a = mode[a - 1];
        }
        if (needle[a] === needle[i]) {
            mode[i] = a + 1;
        } else {
            mode[i] = a;
        }
    }

    return mode;
};

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    if (needle.length === 0) return 0;
    let mode = buildMode(needle);
    let i = 0, j = 0;
    while (i < haystack.length && j < needle.length) {
        if (haystack[i] === needle[j]) {
            i++;
            j++;
        } else if (j - 1 >= 0) {
            i = i - mode[j - 1];
            j = 0;
        } else {
            i++;
            j = 0;
        }
    }

    if (j === needle.length) return i - j;
    else return -1;
};

// console.log(buildMode('ABACCAB'));
// console.log(buildMode('issip'));
// console.log(strStr('mississippi', 'issip'));
