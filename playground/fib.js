function fibonacci(x) {
  let fibs = [0, 1];

  function _fib(y) {
    if (y < 2) return fibs[y];

    let a = fibs[y - 2] || _fib(y - 2);
    let b = fibs[y - 1] || _fib(y - 1);
    fibs[y] = a + b;

    return fibs[y];
  }

  return _fib(x);
}

console.log(fibonacci(15))