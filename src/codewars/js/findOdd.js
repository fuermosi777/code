/*

Given an array, find the int that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

*/

var Quick = {

  shuffle: function(a) {
    for (var i = 0; i < a.length; i++) {
      var j = Math.floor(Math.random() * i);
      var temp = a[i];
      a[i] = a[j];
      a[j] = temp;
    }
  },
  
  sort: function(a) {
    this.shuffle(a);
    this.partition(a, 0, a.length - 1);
  },
  
  partition: function(a, lo, hi) {
    if (lo >= hi) return;
    var k = lo, j = hi + 1;
    while (true) {
      while (a[++k] < a[lo] && k < hi) {}
      while (a[--j] > a[lo] && j > lo) {}
      if (k >= j) break;
      this.exch(a, k, j);
    }
    this.exch(a, j, lo);
    this.partition(a, lo, j - 1);
    this.partition(a, j + 1, hi);
  },
  
  exch: function(a, k, j) {
    var temp = a[k];
    a[k] = a[j];
    a[j] = temp;
  }
  
};

function findOdd(A) {
  Quick.sort(A);
  var sign;
  for (var i = 0; i <= A.length; i++) {
    if (i === A.length && !sign) {
      return A[i - 1];
    }
    
    if (i === 0) {
      sign = false;
    } else if (A[i] === A[i - 1]) {
      sign = !sign;
    } else {
      if (!sign) return A[i - 1];
      sign = false;
    }
    
  }
  return 0;
}