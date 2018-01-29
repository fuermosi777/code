/**
 * Given an array of numbers A = [x1, x2, ..., xn] and T = Round(x1+x2+... +xn).
    We want to find a way to round each element in A such that after rounding we get a new array B = [y1, y2, ...., yn] such that y1+y2+...+yn = T where  yi = Floor(xi) or Ceil(xi), ceiling or floor of xi.
    We also want to minimize sum |x_i-y_i|
 */

function round(nums) {
  let sum = 0;
  let diffNums = [];
  let floorSum = 0;
  
  for (let num of nums) {
    let floor = Math.floor(num);
    let ceil = Math.ceil(num);
    floorSum += floor;
    sum += num;
    diffNums.push({ceil, diff: ceil - num});
  }

  let T = Math.round(sum);

  let diff = T - floorSum;

  diffNums.sort((a, b) => (a.diff - b.diff));

  let i = 0;
  let res = [];
  while (i < diff) {
    res.push(diffNums[i].ceil);
    i++;
  }

  while (i < nums.length) {
    res.push(diffNums[i].ceil - 1);
    i++;
  }

  return res;
}

console.log(round([1.2, 2.3, 3.4, 5.2]))


// var expect = require('chai').expect;

// expect(round([1.2, 2.3, 3.4]).to.deep.equal([1, 2, 4]);