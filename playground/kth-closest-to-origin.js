//Find the K closest points to the origin(0,0) in a 2D plane, given an array containing N points.
/**
 * @param {number} x
 * @param {number} y
 */
var Point = function(x, y) {
  this.x = x;
  this.y = y;
};

function less(p1, p2) {
  return p1.x * p1.x + p1.y * p1.y - p2.x * p2.x - p2.y * p2.y < 0;
}

/**
 * Sort
 * @param  {Point[]} points
 * @param  {number} k
 * @return {Point[]}
 */
// function findKClosest(points, k) {
//   points.sort((a, b) => {
//     return Math.sqrt(a.x * a.x + a.y * a.y) - Math.sqrt(b.x * b.x + b.y * b.y);
//   });

//   return points.slice(0, k);
// }

var MinPQ = require('../leetcode/javascript/util/MinPQ');
/**
 * PQ
 * @param  {Point[]} points
 * @param  {number} k
 * @return {Point[]}
 */
// function findKClosest(points, k) {
//   let pq = new MinPQ((a, b) => (b.x * b.x + b.y * b.y - a.x * a.x - a.y * a.y));
//   for (let i = 0; i < k; i++) {
//     pq.insert(points[i]);
//   }
//   for (let i = k; i < points.length; i++) {
//     if (!less(pq.top(), points[i])) {
//       pq.deleteMin();
//       pq.insert(points[i]);
//     }
//   }
//   let res = [];
//   while (!pq.isEmpty()) {
//     res.push(pq.deleteMin());
//   }
//   return res;
// }

/**
 * Quick selection
 * @param  {Point[]} points
 * @param  {number} k
 * @return {Point[]}
 */
function findKClosest(points, k) {
  let res = [];
  find(points, 0, points.length - 1, k, res);
  return res;
}

function find(points, lo, hi, k, res) {

}

// test
var expect = require('chai').expect;

/**
 * @param  {number} n
 * @return {Point[]}
 */
function createPoints(n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    res.push(new Point(Math.random() * 100 | 0, Math.random() * 100 | 0));
  }
  return res;
}

function findKClosestBench(points, k) {
  points.sort((a, b) => Math.sqrt(a.x * a.x + a.y * a.y) - Math.sqrt(b.x * b.x + b.y * b.y));
  return points.slice(0, k);
}

let points = createPoints(100000);
expect(findKClosest(points, 200).map(point => String(point.x + point.y)))
.to.have.same.members(findKClosestBench(points, 200).map(point => String(point.x + point.y)));
console.log('passed!');
