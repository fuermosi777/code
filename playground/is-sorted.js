function isSorted(arr) {

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < arr[i - 1]) return false;
  }

  return true;
}

var expect = require('chai').expect;

expect(isSorted([])).to.equal(true);
expect(isSorted([-Infinity, -5, 0, 3, 9])).to.equal(true);
expect(isSorted([3, 9, -3, 10])).to.equal(false);
expect(isSorted([1])).to.equal(true);
expect(isSorted([1, 1])).to.equal(true);
expect(isSorted([1, 1, -1])).to.equal(false);