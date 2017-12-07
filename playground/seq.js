/**
 * async/await version
 * @param  {Promise[]} arr
 * @return {*[]}
 */
async function seq(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    res.push(await arr[i]());
  }

  console.log(res);
  return res;
}

(async () => {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => Promise.resolve('c')
  await seq([a, b, c])                  // ['a', 'b', 'c']
  await seq([a, c, b])
})();