/*

Suppose you are at a party with n people (labeled from 0 to n - 1) and among them, there may exist one celebrity. The definition of a celebrity is that all the other n - 1 people know him/her but he/she does not know any of them.

Now you want to find out who the celebrity is or verify that there is not one. The only thing you are allowed to do is to ask questions like: "Hi, A. Do you know B?" to get information of whether A knows B. You need to find out the celebrity (or verify there is not one) by asking as few questions as possible (in the asymptotic sense).

You are given a helper function bool knows(a, b) which tells you whether A knows B. Implement a function int findCelebrity(n), your function should minimize the number of calls to knows.

Note: There will be exactly one celebrity if he/she is in the party. Return the celebrity's label if there is a celebrity in the party. If there is no celebrity, return -1.

*/

/**
 * @param  {number} a
 * @param  {nubmer} b
 * @return {boolean}
 */
function knows(relations) {
  return function(a, b) {
    return Boolean(relations[a][String(b)]);
  }
}

/**
 * O(n)
 * @param {number} n
 * @param {object[]} relations
 * @return {number}
 */
function findCelebrity(knows) {
  return function(n) {
    let i = 0;
    while (i < n) {
      if (i === n - 1) break;
      let j = i + 1;
      while (j < n) {
        if (!knows(j, i)) {
          i = j - 1;
          break;
        }
        j++;
      }
      i++;
    }
    let k = 0;

    for (k; k < n; k++) {
      if (k !== i && !knows(k, i)) return -1;
    }
    return i;
  }
}

var expect = require('chai').expect;
var relations = [{1: true, 2: true, 3: true}, {3: true}, {1: true, 3: true}, {}];
expect(findCelebrity(knows.call(null, relations))(relations.length)).to.equal(3);