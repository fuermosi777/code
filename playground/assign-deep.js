function cloneDeep(obj) {
  if (typeof obj !== 'object') return obj;
  let cloned = {};

  for (let key in obj) {
    if (typeof obj[key] === 'object') {
      cloned[key] = cloneDeep(obj[key]);
    } else {
      cloned[key] = obj[key];
    }
  }

  return cloned;
}

function assignDeep(obj1, obj2) {
  if (!obj1 || typeof obj1 !== 'object') {
    return cloneDeep(obj2);
  }
  for (let key in obj2) {
    obj1[key] = assignDeep(obj1[key], obj2[key]);
  }

  return obj1;
}


console.dir(assignDeep({ a: 1 }, {}));
console.dir(assignDeep({ a: 1 }, { a: 2 }))
console.dir(assignDeep({ a: 1 }, { a: { b: 2 } }))
console.dir(assignDeep({ a: { b: { c: 1 }}}, { a: { b: { d: 2 }}, e: 3 }))

// console.dir(assignShallow(null, {a: 1}));

// console.log(cloneDeep({a: 1, b: {c: 1}, d: {e: {f: 2}}}))