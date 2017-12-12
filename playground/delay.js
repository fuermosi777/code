function delay(fn, timeout) {
  setTimeout(fn, timeout);
}

function customFunc(x, y) {
  console.log(x + y);
}

delay(customFunc.bind(null, 3, 4), 1000);
