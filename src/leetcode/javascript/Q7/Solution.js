/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var y = x < 0 ? -x : x;
    y = parseInt(y.toString().split('').reverse().join(''));
    y = x < 0 ? -y : y;
    y = (y > 2147483647 || y < -2147483647) ? 0 : y;
    return y;
};