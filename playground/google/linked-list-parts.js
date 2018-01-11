function Node(val) {
  this.val = val;
  this.next = null;
}

function partsCount(...args) {
  // sort a linked list
  
  let ct = 0;

  let isConnected = false;
  let node = args[0];
  let i = 0;

  while (node && i < args.length) {
    let targetNode = args[i];

    if (node === targetNode) {
      if (!isConnected) {
        isConnected = true;
        ct++;
      }
      i++;
      node = node.next;
    } else {
      isConnected = false;
      node = node.next;
    }
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
console.log(partsCount(a, c, d, f)); // 3
console.log(partsCount(b, c, a)); // 1
console.log(partsCount(c, e)); // 2
console.log(partsCount()); // 0