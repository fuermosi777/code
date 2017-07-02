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

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    let res = [];
    let n = words[0].length;

    for (let i = 0; i < n; i++) {
      let sp = -1; // starting position
      let q = createQueue();
      let map = {};

      for (let k = 0; k < words.length; k++) {
        if (map.hasOwnProperty(words[k])) {
          map[words[k]] = map[words[k]] + 1;
        } else {
          map[words[k]] = 1;
        }
      }

      for (let j = i; j <= s.length - n; j += n) {
        let part = s.substring(j, j + n);
        if (!map.hasOwnProperty(part)) {
          sp = j - 1;
          while (q.size > 0) {
            let node = q.dequeue();
            map[node.val] = map[node.val] + 1;
          }
        } else if (map[part] > 0) {
          if (q.size === 0) sp = j;
          map[part] = map[part] - 1;
          q.enqueue(part);
        } else {
          let s = 0; // the count of nodes dequeued
          while (true) {
            if (q.size === 0) break;
            let node = q.dequeue();
            s++;
            map[node.val] = map[node.val] + 1;
            if (node.val === part) break;
          }
          map[part] = map[part] - 1;
          q.enqueue(part);
          sp = sp + s * n;
        }

        if (q.size === words.length) {
          res.push(sp);
          sp = sp + n;
          let node = q.dequeue();
          map[node.val] = map[node.val] + 1;
        }
      }
    }

    return res;
};

// console.log(findSubstring('barfoothefoobarmanfoofoobarbar', ['foo', 'bar']));
// console.log(findSubstring('aabacccaab', ['a', 'b']));
// console.log(findSubstring('barfoofoobarthefoobarman', ["bar","foo","the"]));
// console.log(findSubstring('abababab', ["ab","ba"]));
