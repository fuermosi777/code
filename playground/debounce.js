// function debounce(fn, delay) {
//   let timeout = null;

//   return function() {
//     let args = arguments;

//     clearTimeout(timeout);
//     timeout = setTimeout(() => {
//       fn.apply(null, args);
//     }, delay);
//   };
// }

function debounce(fn, delay) {
  let t = null;

  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => {
      t = null;
      fn(...args);
    }, delay);
  }
}