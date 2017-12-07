// function throttle(fn, delay) {
//   var timer = null;

//   return function() {
//     let args = arguments;
//     if (timer === null) {
//       fn.apply(null, args);
//       timer = setTimeout(() => {
//         // clearTimeout(timer);  
//         timer = null;
//       }, delay);
//     }
//   }
// }

function throttle(fn, delay) {
  let t = null;
  
  return (...args) => {
    if (!t) {
      fn(...args);
      t = setTimeout(() => {
        t = null;
      }, delay);
    }
  }
}