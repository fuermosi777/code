function byFilePath(a, b) {
  let ra = a.split('/').reverse();
  let rb = b.split('/').reverse();


  if (ra.length !== rb.length) {
    return ra.length - rb.length;
  } else {
    let i = 0;
    while (i < ra.length) {
      let fa = ra[i], fb = rb[i];
      if (fa !== fb) {
        return fa - fb;
      }
      i++;
    }

    return 0;
  }
}

let paths = [
  'abc',
  'cde/efg/a',
  'cde/efg/b',
  'cde/mbc',
  'abc/z'
];

paths.sort(byFilePath);

console.log(paths);