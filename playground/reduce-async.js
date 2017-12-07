/**
 * @param  {Promise[]} arr
 * @param  {function} fn
 * @param  {any} defaultVal
 * @return {[type]}
 */
async function reduceAsync(arr, fn, defaultVal) {
  let res = defaultVal;

  for (let i = 0; i < arr.length; i++) {
    let current = await arr[i]();
    res = fn(res, current);
  }

  console.log(res);
  return res;
}

async function main() {
  let a = () => Promise.resolve('a')
  let b = () => Promise.resolve('b')
  let c = () => new Promise(resolve => setTimeout(() => resolve('c'), 100))
  await reduceAsync([a, b, c], (acc, value) => [...acc, value], [])
  // ['a', 'b', 'c']
  await reduceAsync([a, c, b], (acc, value) => [...acc, value], ['d'])
  // ['d', 'a', 'c', 'b']
}

main();