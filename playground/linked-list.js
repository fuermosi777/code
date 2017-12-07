// Prototype

let node = {
  val: null,
  next: null
};

export default class LinkedList {
  constructor(...args) {
    this.head = null;
    this.tail = null;
    this.size = 0;

    args.forEach(arg => {
      this.add(arg);
    });
  }
  add(val) {
    let n = Object.create(node);
    n.val = val;

    if (this.tail === null) {
      this.head = this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }

    this.size += 1;
  }
  has(val) {
    let flag = this.head;

    while (flag !== null) {
      if (flag.val === val) {
        return true;
      } else {
        flag = flag.next;
      }
    }

    return false;
  }
}

// let list = new LinkedList(1, 2, 3)
// list.add(4)                           // undefined
// list.add(5)                           // undefined
// list.has(1)                           // true
// console.log(list.has(4))                           // true
// console.log(list.has(6))                          // false