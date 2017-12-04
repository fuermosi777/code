function filter(arr, fn) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i])) {
      res.push(arr[i])
    }
  }

  return res;
}

var expect = require('chai').expect;

expect(filter([1, 2, 3, 4], n => n < 3)).to.deep.equal([1, 2]);