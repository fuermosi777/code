/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
    var x = parseInt(str) || 0;
    if (x > 2147483647) {
        x = 2147483647;
    }
    if (x < -2147483648) {
        x = -2147483648;
    }
    return x;
};