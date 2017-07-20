/*
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache
 *
 * Hard (17.45%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * 
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 * 
 * 
 * 
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently
 * used item before inserting a new item.
 * 
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * LRUCache cache = new LRUCache( 2 );
 * 
 * cache.put(1, 1);
 * cache.put(2, 2);
 * cache.get(1);       // returns 1
 * cache.put(3, 3);    // evicts key 2
 * cache.get(2);       // returns -1 (not found)
 * cache.put(4, 4);    // evicts key 1
 * cache.get(1);       // returns -1 (not found)
 * cache.get(3);       // returns 3
 * cache.get(4);       // returns 4
 * 
 * 
 */

// Beat 90.41%

var Node = function(key, val) {
  this.val = val;
  this.key = key;
  this.prev = null;
  this.next = null;
}

/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
  this.cap = capacity;
  this.size = 0;
  this.head = null; // mostly recent used
  this.tail = null;
  this.map = {};
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
  if (this.map.hasOwnProperty(key)) {
    let node = this.map[key];

    if (this.head !== node) {
      this.removeNode(node);
      this.addNode(node);
    }

    return node.val;
  }

  return -1;
};

LRUCache.prototype.removeNode = function(node) {
  if (this.head === this.tail) { // only 1 node
    this.head = null;
    this.tail = null;
  } else if (node === this.head) {
    let next = node.next;
    next.prev = null;
    this.head = next;
  } else if (node === this.tail) {
    let prev = node.prev;
    prev.next = null;
    this.tail = prev;
  } else {
    let prev = node.prev;
    let next = node.next;
    prev.next = next;
    next.prev = prev;
  }
};

LRUCache.prototype.addNode = function(node) {
  if (this.head === null) {
    this.head = node;
    this.tail = node;
  } else {
    let head = this.head;
    head.prev = node;
    node.next = head;
    this.head = node;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
  if (this.map.hasOwnProperty(key)) {
    let node = this.map[key];
    node.val = value;
    this.removeNode(node);
    this.addNode(node);
  } else if (this.size === this.cap) {
    let tail = this.tail;
    this.removeNode(tail);
    delete this.map[tail.key];

    let node = new Node(key, value);
    this.map[key] = node;
    this.addNode(node);
  } else {
    let node = new Node(key, value);
    this.map[key] = node;
    this.addNode(node);
    this.size += 1;
  }
  return null;
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
