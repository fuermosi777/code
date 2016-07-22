var lengthOfLongestSubstring = function(s) {
    var map = {};
    var longest = 0;
    var pointer = 0, flag = 0;
    var N = s.length;
    while (flag <= N - 1) {
        var c = s[flag];
        var pos = -1;
        if (map.hasOwnProperty(c)) {
            pos = map[c];
        }
        if (pos < pointer) {
            map[c] = flag;
            var length = flag - pointer + 1;
            if (length > longest) {
                longest = length;
            }
        } else {
            pointer = pos + 1;
            map[c] = flag;
        }
        flag++;
    }
    return longest;
};