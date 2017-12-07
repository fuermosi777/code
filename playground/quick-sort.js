function quickSort(arr, compareFunc) {
  function compare(a, b) {
    if (compareFunc) return compareFunc(a, b);
    return a - b;
  }

  function comp(i, j) {
    return compare(arr[i], arr[j]);
  }

  function swap(i, j) {
    let t = arr[i];
    arr[i] = arr[j];
    arr[j] = t;
  }

  function shuffle() {
    for (let i = 0; i < arr.length; i++) {
      swap(i, Math.random() * arr.length | 0);
    }
  }

  function sort(lo, hi) {
    if (lo >= hi) return;
    let i = lo + 1, j = hi;

    while (i <= j) {
      if (comp(i, lo) >= 0 && comp(j, lo) >= 0) {
        j--;
      } else if (comp(i, lo) < 0 && comp(j, lo) < 0) {
        i++;
      } else if (comp(i, lo) >= 0 && comp(j, lo) < 0) {
        swap(i, j);
      } else {
        i++; j--;
      }
    }

    swap(lo, j);

    sort(lo, j);
    sort(j + 1, hi);
  }

  shuffle();

  sort(0, arr.length - 1);
}

// 4    5      9
// 4    2      9
// 4    3      2
// 4    5      2

let arr = [2, -4, 1, 99, 3, 3, 0];

quickSort(arr);

console.log(arr);