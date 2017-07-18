/**
 * Find the max number in an array
 */

function max(arr) {
  return Math.max.apply(null, arr);
}

console.log(max([1,4,2,3,1,2,100]));