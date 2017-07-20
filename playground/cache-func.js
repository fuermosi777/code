/**
 * Create a cache function to cache functions that took 2s to run
 * For example, complexFunction has a runtime of 2s. The cachedFunction has a runtime of 2s when it first runs, and later it will return the result instantly. All functions that need to be cached will return a value and has no other side effects
 */

function cache(fn) {
  let map = {};
  return function() {
    let args = arguments;
    let key = JSON.stringify(Array.prototype.slice.apply(args));

    if (!map.hasOwnProperty(key)) {
      map[key] = fn.apply(null, args);
    }
    return map[key];
  }
}

// test

function functionTook2s(val) {
  return val;
}

let cachedFunc = cache(functionTook2s);