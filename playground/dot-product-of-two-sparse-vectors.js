/*
Given two sparse Vectors, compute the Dot Product. 
Input Format : The first line will contain two numbers(k and n), which are the number of entries for the two vectors respectively. 
The next k lines are the entries for the first vector, of the form : x y 
where x is the position and y is the value at that position in the vector. 
The n lines are the entries of the second vector. 
Any entries not specified indicate zero at that position. 
The two vectors will always be of the same length 

Example input: 
3 3 
1 4 
4 2 
5 3 
1 7 
2 6 
5 1 

Sample Answer: Dot Product = 4*7+3*1 = 31 (only print 31)
*/

var expect = require('chai').expect;

var Node = function(pos, val) {
  this.val = val;
  this.pos = pos;
  this.next = null;
};

/**
 * @param  {string} str
 * @return {number}
 */
function dotProduct(str) {
  let arr = str.split('\n');
  let parseSize = arr[0].split(' ');
  let m = Number(parseSize[0]), n = Number(parseSize[1]);
  let list1, list2;
  let last = null;
  for (let i = 1; i < 1 + m; i++) {
    let parse = arr[i].split(' ');
    let node = new Node(parse[0], parse[1]);
    if (last) last.next = node;
    last = node;
    if (i === 1) list1 = node;
  }
  last = null;
  for (let i = 1 + m; i < arr.length; i++) {
    let parse = arr[i].split(' ');
    let node = new Node(parse[0], parse[1]);
    if (last) last.next = node;
    last = node;
    if (i === 1 + m) list2 = node;
  }
  let n1 = list1, n2 = list2;
  let res = 0;
  while (n1 !== null) {
    if (Number(n1.pos) === Number(n2.pos)) {
      res += Number(n1.val) * Number(n2.val);
      n1 = n1.next;
      n2 = n2.next;
    } else if (Number(n1.pos) > Number(n2.pos)) {
      n2 = n2.next;
    } else {
      n1 = n1.next;
    }
  }
  return res;
}

expect(dotProduct('3 3\n1 4\n4 2\n5 3\n1 7\n2 6\n5 1')).to.equal(31);