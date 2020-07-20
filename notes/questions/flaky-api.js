function fetch(url) {
  console.log('Fetching ', url.url);
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (url.err) {
        reject(url.err);
      } else {
        resolve(url.result);
      }
    }, url.latency);
  });
}

function getBestAvailable(urls) {

}

getBestAvailable([{
  url: 'a',
  latency: 500,
  err: false,
  result: 'a result'
}, {
  url: 'b',
  latency: 100,
  err: true,
}, {
  url: 'c',
  latency: 1500,
  err: true,
}])