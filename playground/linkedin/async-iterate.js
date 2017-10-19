var asyncFunc = function(item, cb) {
  setTimeout(() => {
    console.log(item);
    cb();
  }, 1000);
};

var asyncIteration = function(items, asyncFunc) {
  let makePromise = item => {
    return new Promise((resolve, reject) => {
      asyncFunc(item, () => {
        resolve();
      });
    });
  };

  var next = function(i) {
    if (i < items.length) {
      let p = makePromise(items[i]);
      p.then(() => {
        next(i + 1);
      });
    }
  };

  next(0);
};

asyncIteration([1, 2, 3], asyncFunc);