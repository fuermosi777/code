function includes(arr, item) {
  let lo = 0, hi = arr.length - 1;
  while (lo <= hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (arr[mid] === item) {
      return true;
    } else if (arr[mid] > item) {
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }

  return false;
}

console.log(includes([1, 3, 8, 10], 8));
console.log(includes([1, 3, 8, 8, 15], 15));
console.log(includes([1, 3, 8, 10, 15], 9));