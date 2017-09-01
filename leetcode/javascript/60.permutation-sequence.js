/*
 * [60] Permutation Sequence
 *
 * https://leetcode.com/problems/permutation-sequence
 *
 * algorithms
 * Medium (28.52%)
 * Total Accepted:    87.4K
 * Total Submissions: 305.7K
 * Testcase Example:  '1\n1'
 *
 * The set [1,2,3,…,n] contains a total of n! unique permutations.
 * 
 * By listing and labeling all of the permutations in order,
 * We get the following sequence (ie, for n = 3):
 * 
 * "123"
 * "132"
 * "213"
 * "231"
 * "312"
 * "321"
 * 
 * 
 * 
 * Given n and k, return the kth permutation sequence.
 * 
 * Note: Given n will be between 1 and 9 inclusive.
 */

/**
 * @param  {string} n
 * @param  {number} k
 * @return {string}
 */
function getPer(str, k, fac) {
  let n = str.length;
  if (k === 1) return str;
  let t = fac[n - 1];
  // console.log(str, k, t)
  if (k === 0) return '';
  if (k <= t) {
    return str[0] + getPer(str.substring(1), k, fac);
  } else {
    let q = k / t | 0;
    let r = k % t;

    let arr = str.split('');
    arr.sort();
    if (r === 0) {
      let firstChar = arr[q - 1];
      return firstChar + getPer(str.substring(0, q - 1) + str.substring(q), t, fac);
    } else {
      let firstChar = arr[q];
      return firstChar + getPer(str.substring(0, q) + str.substring(q + 1), r, fac); 
    }
  }
}

/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
var getPermutation = function(n, k) {
  let fac = [];
  fac[0] = 1;
  for (let i = 1; i <= 9; i++) {
    fac[i] = fac[i - 1] * i;
  }
  let str = '';
  for (let i = 1; i <= n; i++) {
    str += i;
  }
  return getPer(str, k, fac);
};
