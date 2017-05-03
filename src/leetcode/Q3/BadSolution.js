/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    var ls = "";
    var ts = "";
    for (var i = 0; i < s.length; i++) {
        var findDuplicate = ts.indexOf(s[i]);
        if (findDuplicate > -1) {
            if (ts.length > ls.length) {
                ls = ts;
            }
            i -= ts.length - findDuplicate - 1;
            ts = s[i];
        } else {
            ts += s[i];
        }
    }
    if (ts.length > ls.length) {
        ls = ts;
    }
    return ls.length;
};