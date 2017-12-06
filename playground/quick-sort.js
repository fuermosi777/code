function quickSort(arr, compareFunc) {
  function compare(a, b) {
    if (compareFunc) return compareFunc(a, b);
    return a - b;
  }

  function greater(a, b) {
    return compare(a, b) > 0;
  }

  
}