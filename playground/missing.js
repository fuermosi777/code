/**
 * Required O(n)
 * arr is unsorted, no repeat
 * @param  {number[]} arr
 * @return {number} 1 or 0 missing number
 */
function missing(arr) {
  let markers = [];
  for (let i = 0; i < arr.length; i++) {
    markers[arr[i]] = true;
  }
  for (let i = 1; i <= markers.length; i++) {
    if (!markers[i] && i !== markers.length) return i;
  }

  return null;
}

console.log(missing([]));
console.log(missing([1, 4, 3]));
console.log(missing([2, 3, 4]));
console.log(missing([5, 1, 4, 2]));
console.log(missing([1, 2, 3, 4]));