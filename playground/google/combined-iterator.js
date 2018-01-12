function combineIterator(iters) {
  if (iters.length === 0) throw new RangeError();

  let q = iters.map(iter => iter);

  return {
    next() {

      let toIter = q.shift();
      let n = toIter.next();
      if (!n.done) {
        q.push(toIter);
      }

      return {
        value: n.value,
        done: q.length === 0
      }
    }
  };
}

function makeIter(level) {
  let ct = 0;
  let maxCt = 10;
  let start = level;
  return {
    next() {
      ct++;
      let stg = start;
      start += level;
      return { value: stg, done: ct > maxCt };
    }
  }
}

let iter1 = makeIter(1);
let iter2 = makeIter(2);
let iter3 = makeIter(3);
let combine = combineIterator([iter1, iter2, iter3]);

console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());
console.log(combine.next());