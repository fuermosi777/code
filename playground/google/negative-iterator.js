function makeNegativeIterator(arr) {
  let i = 0;

  return {
    next() {
      while (i < arr.length && arr[i] >= 0) {
        i++;
      }
      return arr[i++];
    },
    hasNext() {
      let j = i;

      while (j < arr.length && arr[j] >= 0) {
        j++;
      }

      if (j >= arr.length) {
        return false;
      } else {
        return true;
      }
    }
  }
}

let iter = makeNegativeIterator([-6,1,2,3,4,-2,-1,-3,4,-5]);

while (iter.hasNext()) {
  console.log(iter.next());
}