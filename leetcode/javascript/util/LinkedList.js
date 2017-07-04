
// WIP
export default class LinkedList {
  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }
  add(val) {
    let node = new ListNode(val);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    }
    this.size += 1;
  }
  remove(node) {
    
  }
  shift() {
    if (this.size === 0) throw new Error('List is empty');
    
  }
}