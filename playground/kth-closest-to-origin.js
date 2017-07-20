//Find the K closest points to the origin(0,0) in a 2D plane, given an array containing N points.

var Point = function(x, y) {
  this.x = x;
  this.y = y;
}

/**
 * @param  {Point[]} points
 * @param  {number} k
 * @return {Point[]}
 */
function findKClosest(points, k) {
  points.sort((a, b) => {
    return Math.sqrt(a.x * a.x + a.y * a.y) - Math.sqrt(b.x * b.x + b.y * b.y);
  });

  return points.slice(0, k);
}

var expect = require('chai').expect;

let p1 = new Point(1, 1);
let p2 = new Point(2, 1);
let p3 = new Point(3, 3);
let points = [p1, p2, p3];
let res = findKClosest(points, 2);
expect(res).to.deep.equal([p1, p2]);
