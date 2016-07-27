/**
 * @param {string[]} strs
 * @return {string}
 */

var findCmn = function(str1, str2) {
    var n1 = str1.length;
    var n2 = str2.length;
    var nmin = Math.min(n1, n2);
    var cmn = "";
    for (var i = 0; i < nmin; i++) {
        if (str1[i] === str2[i]) {
            cmn += str1[i];
        } else {
            return cmn;
        }
    }
    return cmn;
}

var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    if (strs.length === 1) return strs[0];
    var cmn = strs[0];
    for (var i = 0; i < strs.length - 1; i++) {
        cmn = findCmn(cmn, strs[i + 1]);
    }
    return cmn;
};