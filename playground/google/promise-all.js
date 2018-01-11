Promise.myAll = function(arr) {
  let resolved = arr.map(a => false);
  let result = [];

  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      let promise = arr[i];

      promise.then(res => {
        result[i] = res;
        resolved[i] = true;

        if (resolved.indexOf(false) === -1) {
          resolve(result);
        }
      }).catch(err => {
        reject(err);
        return;
      });
    }
  });
};

let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
});

Promise.myAll([p1, p2, p3]).then(values => {
  console.log(values);
}).catch(err => {
  console.log(err);
});
