/**
 * Given a point P and other N points in two dimensional space, find K points out of the N points which are nearest to P.
 */

const UNIT = 200;

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.color = 'black';
  }

  markRed() {
    this.color = 'red';
  }
}

function getDistance(p1, p2) {
  return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)) | 0;
}

/**
 * @param  {Point} P
 * @param  {Point[]} points
 * @param  {number} k
 * @return {Point[]}
 */
function findKNearest(P, points, k) {
  let minPQ = new MinPQ((p1, p2) => (getDistance(p1, P) - getDistance(p2, P)));
  points.forEach(p => {
    minPQ.insert(p);
  });

  let res = [];
  let i = 0;
  while (i < k) {
    let p = minPQ.deleteMin();
    res.push(p);
    i++;
  }

  return res;
}

function genPoints(n) {
  let points = [];
  for (let i = 0; i < n; i++) {
    points.push(new Point(Math.random() * UNIT | 0, Math.random() * UNIT | 0));
  }
  return points;
}

function main() {
  let points = genPoints(40);
  let targetPoint = points[0];
  const K = 10;
  let kPoints = findKNearest(targetPoint, points, K);
  let farestPoint = kPoints[kPoints.length - 1];
  kPoints.forEach(p => p.markRed());

  let boardDiv = document.querySelector('.board');
  points.forEach((p, i) => {
    let pointDiv = document.createElement('div');
    pointDiv.classList.add('point');
    if (i === 0) {
      pointDiv.classList.add('target');
    }
    pointDiv.style.backgroundColor = p.color;
    pointDiv.style.left = `${p.y}px`;
    pointDiv.style.bottom = `${p.x}px`;

    boardDiv.appendChild(pointDiv,);
  });

  let circleDiv = document.createElement('div');
  circleDiv.classList.add('circle');
  circleDiv.style.width = `${getDistance(farestPoint, targetPoint) * 2}px`;
  circleDiv.style.height = `${getDistance(farestPoint, targetPoint) * 2}px`;
  circleDiv.style.left = `${targetPoint.y - getDistance(farestPoint, targetPoint)}px`;
  circleDiv.style.bottom = `${targetPoint.x - getDistance(farestPoint, targetPoint)}px`;
  boardDiv.appendChild(circleDiv);
}

if (typeof document !== 'undefined') main();