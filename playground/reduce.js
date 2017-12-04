function reduce(arr, fn, init) {
  let res = init || null;

  for (let i = 0; i < arr.length; i++) {
    res = fn(res, arr[i]);
  }

  return res;
}

var expect = require('chai').expect;

expect(reduce([1, 2, 3, 4], (a, b) => a + b, 0)).to.deep.equal([1, 2, 3, 4].reduce((a, b) => a + b, 0));

expect(reduce([1, 2, 3, 4], (a, b) => a + b)).to.deep.equal([1, 2, 3, 4].reduce((a, b) => a + b));