/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var ls = {};
    var n = 0;
    for (var i = 0; i < s.length; i++) {
        var keys, length;
        var c = s[i];
        if (!ls.hasOwnProperty(c)) {
            ls[c] = true;
            keys = Object.keys(ls);
            length = keys.length;
            if (n < length) {
                n = length;
            }
        } else {
            keys = Object.keys(ls);
            length = keys.length;
            for (var j = 0; j < length; j++) {
                if (keys[j] !== c) {
                    delete ls[keys[j]];
                } else {
                    delete ls[keys[j]];
                    break;
                }
            }
            ls[c] = true;
        }
    }
    return n;
};