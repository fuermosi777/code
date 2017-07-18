var expect = require('chai').expect;

// recursion in-place
var flattenArray = function(item) {
  if (Array.isArray(item)) {
    if (item.length === 0) return [];
    let i = 0;
    while (i < item.length) {
      let flattened = flattenArray(item[i]);
      if (Array.isArray(flattened)) {
        item.splice(i, 1);
        for (let j = 0; j < flattened.length; j++) {
          item.splice(i + j, 0, flattened[j]);
        }
      }
      i++;
    }
  }

  return item;
};

// iteration in-place
var flattenArray1 = function(item) {
  let i = 0;
  while (i < item.length) {
    let it = item[i];
    if (Array.isArray(it)) {
      item.splice(i, 1);
      for (let j = 0; j < it.length; j++) {
        item.splice(i + j, 0, it[j]);
      }
    }
    if (!Array.isArray(item[i])) i++;
  }

  return item;
};

// recursion not in place
var flattenArray3 = function(item) {
  let res = item.reduce((a, b) => {
    if (Array.isArray(b)) {
      return a.concat(flattenArray3(b));
    } else {
      return a.concat(b);
    }
  }, []);

  return res;
}

// tests
var testCases = [{
  input: [1,2,3],
  expect: [1,2,3]
}, {
  input: [],
  expect: []
}, {
  input: [[]],
  expect: []
}, {
  input: [[[[1]]]],
  expect: [1]
}, {
  input: [1, [2], 3],
  expect: [1, 2, 3]
}, {
  input: [1, [2, [3, 4], 5], 6, [7, 8], []],
  expect: [1, 2, 3, 4, 5, 6, 7, 8]
}, {
  input: [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]],
  expect: [0, 1, 2, 3, 4, 5]
}];

testCases.forEach(testCase => {
  // expect(flattenArray(testCase.input)).to.deep.equal(testCase.expect);
  // expect(flattenArray1(testCase.input)).to.deep.equal(testCase.expect);
  // expect(flattenArray3(testCase.input)).to.deep.equal(testCase.expect);
});