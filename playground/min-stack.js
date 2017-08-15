/**
 * Design a stack that has getMin() with O(1) time
 */

var MinStack = function() {
  this.stack = [];
  this.minHelper = [];
};

MinStack.prototype = {
  constructor: MinStack,

  isEmpty() {
    return this.stack.length === 0;
  },

  push(val) {
    if (this.isEmpty()) {
      
      this.minHelper.push(val);
    } else {
      let min = this.getMin();
      if (val < min) {
        this.minHelper.push(val);
      } else {
        this.minHelper.push(min);
      }
    }
    this.stack.push(val);
  },

  pop() {
    let val = this.stack.pop();
    this.minHelper.pop();

    return val;
  },

  getMin() {
    if (this.isEmpty()) return null;
    return this.minHelper[this.minHelper.length - 1];
  }
}

// test
let ms = new MinStack();

ms.push(2);
ms.push(3);
ms.push(4);
ms.push(-1);

console.log(ms.getMin());
ms.pop();
console.log(ms.getMin());