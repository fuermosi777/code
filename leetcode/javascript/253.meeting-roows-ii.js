/*

Given an array of meeting time intervals consisting of start and end times [[s1,e1],[s2,e2],...] (si < ei), find the minimum number of conference rooms required.

For example,
Given [[0, 30],[5, 10],[15, 20]],
return 2.

*/

var MinPQ = require('./util/MinPQ');
var expect = require('chai').expect;

function compare(a, b) {
  if (a[0] !== b[0]) {
    return a[0] - b[0];
  } else {
    return a[1] - b[1];
  }
}

function isConflict(a, b) {
  return b[0] < a[1];
}

function minRoom(times) {
  times.sort(compare);
  let min = 0;
  let i = 0;
  let pq = new MinPQ((a, b) => {
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    } else {
      return a[0] - b[0];
    }
  });
  while (i < times.length) {
    if (i === 0) {
      pq.insert(times[i]);
      min++;
    } else {
      let top = pq.top();
      if (!isConflict(top, times[i])) {
        pq.deleteMin();
      }
      pq.insert(times[i]);
      min = Math.max(min, pq.size);
    }
    i++;
  }
  return min;
}

expect(minRoom([[15, 20], [0, 30],[5, 10]])).to.equal(2);