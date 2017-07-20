/**
 * Two arrays A and B. Reorder objects in A with givin indexes in B. Don't change A's length.
 *
 * var A = [C, D, E, F, G];
 * var B = [3, 0, 4, 1, 2];
 *
 * sort(A, B);
 * // A is [D, F, G, C, E]
 */

function shuffle(a, b) {
  for (let i = 0; i < a.length; i++) {
    let ri = Math.floor(Math.random() * i);
    swap(a, i, ri);
    swap(b, i, ri);
  }
}

function swap(nums, i, j) {
  let t = nums[i];
  nums[i] = nums[j];
  nums[j] = t;
}

function quick(a, b, lo, hi) {
  if (lo >= hi) return;
  let marker = b[lo];

  let i = lo + 1;
  let j = hi;
  while (i <= j) {
    if (b[j] > marker && b[i] > marker) {
      j--;
    } else if (b[i] < marker && b[j] < marker) {
      i++;
    } else if (b[i] < marker && b[j] > marker) {
      i++;
      j--;
    } else {
      swap(a, i, j);
      swap(b, i, j);
      i++;
      j--;
    } 
  }
  if (marker > b[j]) {
    swap(a, lo, j);
    swap(b, lo, j);
  }
  quick(a, b, lo, i - 1);
  quick(a, b, i, hi);
}

// in-place O(nlogn) quick sort
function sort(a, b) {
  shuffle(a, b);
  quick(a, b, 0, b.length - 1);
}

// test
var expect = require('chai').expect;
let a = ['C', 'D', 'E', 'F', 'G'];
let b = [3, 0, 4, 1, 2];
let c = ['D', 'F', 'G', 'C', 'E'];
sort(a, b);
expect(a).to.deep.equal(c);