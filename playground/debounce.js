function debounce(fn, delay) {
  let timeout = null;

  return function() {
    let args = arguments;

    clearTimeout(timeout);
    timeout = setTimeout(() => {
      fn.apply(null, args);
      clearTimeout(timeout);
    }, delay);
  };
}