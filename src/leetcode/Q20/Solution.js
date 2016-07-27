/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for (var i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(s[i]);
        }
        if (s[i] === '[') {
            stack.push(s[i]);
        }
        if (s[i] === '{') {
            stack.push(s[i]);
        }
        if (s[i] === ')') {
            if (stack.pop() !== '(') return false;
        }
        if (s[i] === ']') {
            if (stack.pop() !== '[') return false;
        }
        if (s[i] === '}') {
            if (stack.pop() !== '{') return false;
        }
    }
    if (stack.length !== 0) return false;
    return true;
};