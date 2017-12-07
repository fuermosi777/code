function hash (string) {
  return string
    .split('')
    .reduce((a, b) => ((a << 5) + a) + b.charCodeAt(0), 5381)
}

class Node {
  constructor(key, val, next) {
    this.key = key;
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }
  add(key, val) {
    let n = new Node(key, val);

    if (this.tail === null) {
      this.head = this.tail = n;
    } else {
      this.tail.next = n;
      this.tail = n;
    }

    this.size += 1;
  }
  get(key) {
    let flag = this.head;

    while (flag !== null) {
      if (flag.key === key) {
        return flag.val;
      } else {
        flag = flag.next;
      }
    }

    return null;
  }
}

class HashMap {

  constructor(M) {
    this.M = M || 31;
    this.arr = [];
    for (let i = 0; i < this.M; i++) {
      this.arr[i] = new LinkedList();
    }
  }

  hashCode(key) {
    return hash(key) % this.M;
  }

  set(key, val) {
    let hashCode = this.hashCode(key);
    let ll = this.arr[hashCode];
    ll.add(key, val);
  }

  get(key) {
    let hashCode = this.hashCode(key);
    let ll = this.arr[hashCode];
    return ll.get(key);
  }
}

let map = new HashMap();
map.set('abc', 123);
map.set('foo', 'bar');
map.set('foo', 'baz');
console.log(map.get('abc'));
console.log(map.get('foo'));
console.log(map.get('def'));

console.log(hash('13323434')% 31)