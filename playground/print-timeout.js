/**
 * Print numbers 1 - 10 with 1 second lag - Beepi
 */

// recursion
function print1(ct) {
  if (!ct) ct = 1;
  if (ct <= 10) {
    console.log(ct);
    setTimeout(print1.bind(null, ct + 1), 1000);
  }
}

// iteration
function print2() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}

// print1();
print2();