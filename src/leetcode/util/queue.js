function createNode(val) {
  return {
    val: val,
    next: null
  }
}

function createQueue() {
  return {
    head: null,
    tail: null,
    size: 0,
    enqueue(val) {
      let node = createNode(val);
      if (this.head === null) {
        this.head = node;
        this.tail = node;
      } else {
        let oldTail = this.tail;
        oldTail.next = node;
        this.tail = node;
      }
      this.size += 1;
    },
    dequeue() {
      if (this.size === 0) throw new Error("Queue is empty");
      let newHead = this.head.next;
      let node = this.head;
      this.head = newHead;
      this.size -= 1;
      return node;
    }
  }
}

function printQueue(q) {
  if (q.size === 0) return '';

  let res = '';
  let node = q.head;
  while (node !== null) {
    res += node.val;
    if (node.next !== null) res += ' <- ';
    node = node.next;
  }

  console.log(res);
}

let q = createQueue();
q.enqueue(1); printQueue(q);
q.enqueue(2); printQueue(q);
q.enqueue(3); printQueue(q);
q.dequeue(); printQueue(q);
q.dequeue(); printQueue(q);
q.enqueue(1); printQueue(q);
q.enqueue(2); printQueue(q);
q.enqueue(3); printQueue(q);
q.dequeue(); printQueue(q);