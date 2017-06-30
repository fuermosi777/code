const MAX_32_INT = 2147483647;
const MAX_32_INT_N = -2147483648;

var divide = function(dividend, divisor) {
    if (divisor === 0) return MAX_32_INT;
    let n = true; // is negative
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
        n = false;
    }
    if (dividend < 0) {
        dividend = 0 - dividend;
    }
    if (divisor < 0) {
        divisor = 0 - divisor;
    }
    if (dividend < divisor) return 0;

    let res = 0;
    let r = dividend; // what remains
    let m = divisor; // multiplier
    let a = 1; // adder for result
    while (true) {
        r = r - m;
        if (r < 0 && r + m >= divisor) {
            r = r + m;
            m = divisor;
            a = 1;
        } else if (r < 0 && r + m < divisor) {
            break;
        } else if (r === 0) {
            res = res + a;
            break;
        } else {
            res = res + a;
            m = m + m;
            a = a + a;
        }
    }

    if (n) {
        res = 0 - res;
    }
    
    if (res > MAX_32_INT) res = MAX_32_INT;
    if (res < MAX_32_INT_N) res = MAX_32_INT_N;

    return res;
};