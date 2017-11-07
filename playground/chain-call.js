// let arr = [call1, call2, call3, call4, handleResults];

/**
 * Should call the async functions in array in order
 * @param  {Function[]} arr
 * @return {void}
 */
function callThemAll(arr) {
  let res = [];
  for (let i = 0; i < arr.length - 1; i++) {
    res.push(arr[i]());
  }
  arr[arr.length - 1](res);
}

// test

var fn1 = () => {
  return 1;
};

var fn2 = () => {
  return 2;
};

var fn3 = () => {
  return 3;
};

var final = (...args) => {
  console.log(args.reduce((a, b) => (a + b)));
};

callThemAll([fn1, fn2, fn3, final]);