function throttle(fn, delay) {
  var timer = null;

  return function() {
    let args = arguments;
    if (timer === null) {
      fn.apply(null, args);
      timer = setTimeout(() => {
        clearTimeout(timer);  
        timer = null;
      }, delay);
    }
  }
}