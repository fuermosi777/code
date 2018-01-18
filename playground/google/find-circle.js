/**
 * 给一个有向图返回所有从起点到起点的环组成的图，输入只有一个起点
 */

class Node {
  constructor(val) {
    this.val = val;
    this.to = [];
    this.from = null;
  }
}

function findCircles(node) {
  let circles = [];
  walk(node, circles, node);

  return circles;
}

function walk(node, circles, start) {

  for (let i = 0; i < node.to.length; i++) {
    let w = node.to[i];

    w.from = node;

    if (w === start) {
      let circle = [];
      let u = node;
      while (u !== start) {
        circle.push(u.val);
        u = u.from;
      }
      circle.push(start.val)
      circles.push(circle);
    } else {
      walk(node.to[i], circles, start);
    }
  }
}

let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');
let g = new Node('g');

a.to.push(b);
b.to.push(d, c);
c.to.push(a);
d.to.push(e);
e.to.push(c, f);
f.to.push(g);
g.to.push(a);

console.log(findCircles(a))