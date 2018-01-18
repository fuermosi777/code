/**
 * array: [1,2,4,6,7,9] k =5
 * return the first value <= 5
 */

function getLowerBound(arr, k) {
  let lo = 0, hi = arr.length;
  while (lo < hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === k) return mid;
    if (arr[mid] > k) {
      hi = mid;
    } else {
      lo = mid;
    }
    if (hi - lo === 1) {
      if (arr[hi] === k) return hi;
      if (arr[lo] === k) return lo;
      break;
    }
  }

  if (k < arr[0]) return -1;

  return lo;
}

var expect = require('chai').expect;

expect(getLowerBound([1,3,4,5,6,7], 5)).to.equal(3);
expect(getLowerBound([1,3,4,5,6,7], 2)).to.equal(0);
expect(getLowerBound([1,3,4,5,6,7], 8)).to.equal(5);
expect(getLowerBound([1,3,4,5,6,7], 4)).to.equal(2);
expect(getLowerBound([1,3,4,5,6,7], 0)).to.equal(-1);
expect(getLowerBound([1,3,4,5,6,7], 7)).to.equal(5);