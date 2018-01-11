/**
 * Given a linked list 1->2->3->4->5->6
 *
 * give some nodes 1, 3, 4, 6
 *
 * home many continuous parts are there?
 *
 * => 3
 */

function Node(val) {
  this.val = val;
  this.next = null;
}

// related: 725, 148, 674, union find

function partsCount(treeNode, ...args) {
  // sort a linked list
  
  let set = new Set();
  args.forEach(arg => set.add(arg));

  let ct = 0;
  let node = treeNode;
  let isGroup = false;

  while (node) {
    if (set.has(node)) {
      if (!isGroup) {
        isGroup = true;
        ct++;
      } 
    } else {
      isGroup = false;
    }
    
    node = node.next;
  }
  return ct;
}


// test


let a = new Node('a');
let b = new Node('b');
let c = new Node('c');
let d = new Node('d');
let e = new Node('e');
let f = new Node('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

console.log('=== test ===')
console.log(partsCount(a, a, c, d, f)); // 3
console.log(partsCount(a, b, c, a)); // 1
console.log(partsCount(a, e, c)); // 2
console.log(partsCount(a)); // 0