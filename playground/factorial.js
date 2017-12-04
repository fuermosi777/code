

function factorial(x) {
  let facs = [1];

  function _fac(y) {
    let prev = facs[y - 1] || _fac(y - 1);
    let fac = prev * y;
    facs[y] = fac;
    return fac;
  }

  if (x === 0) return 1;

  return _fac(x);
}

console.log(factorial(10));