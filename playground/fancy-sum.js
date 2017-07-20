/**
 * If sum(1, 2, 3) === 6, make the following also work: sum(1)(2, 3), sum(1, 2)(3), sum(1)(2)(3) - Beepi
 */

function sum() {
  let args = Array.prototype.slice.apply(arguments);
  if (args.length === 3) {
    return args.reduce((a, b) => a + b);
  } else {
    return function() {
      for (let i = 0; i < arguments.length; i++) {
        args.push(arguments[i]);
      }
      return sum.apply(null, args);
    }
  }
}

console.log(sum(1, 2, 3));
console.log(sum(1)(2, 3));
console.log(sum(1, 2)(3));
console.log(sum(1)(2)(3));