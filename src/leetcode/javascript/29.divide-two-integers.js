/*
 * [29] Divide Two Integers
 *
 * https://leetcode.com/problems/divide-two-integers
 *
 * Medium (15.97%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '0\n1'
 *
 * 
 * Divide two integers without using multiplication, division and mod
 * operator.
 * 
 * 
 * If it is overflow, return MAX_INT.
 * 
 */
/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
var divide = function(dividend, divisor) {
    if (divisor === 0) return Number.MAX_VALUE;
    let n3 = true;
    if ((dividend < 0 && divisor < 0) || (dividend > 0 && divisor > 0)) {
        n3 = false;
    }
    if (dividend < 0) {
        dividend = 0 - dividend;
    }
    if (divisor < 0) {
        divisor = 0 - divisor;
    }
    if (dividend < divisor) return 0;
    let res = 0;
    let r = dividend;
    while (r >= divisor) {
        r -= divisor;
        res++;
    }
    if (n3) return 0 - res;
    return res;
};