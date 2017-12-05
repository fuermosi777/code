function swap(arr, a, b) {
  let t = arr[a];
  arr[a] = arr[b];
  arr[b] = t;
}

function reverse(arr) {
  for (let i = 0; i < arr.length / 2 | 0; i++) {
    swap(arr, i, arr.length - i - 1);
  }
}

let arr = [1, 2];
reverse(arr);