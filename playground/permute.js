function permute(str) {
  if (str.length === 0) return [];
  if (str.length === 1) return [str];

  let res = [];
  let map = {};
  for (let i = 0; i < str.length; i++) {
    let ch = str[i];
    let restPermute = permute(str.substring(0, i) + str.substring(i + 1));
    for (let j = 0; j < restPermute.length; j++) {
      let rest = restPermute[j];
      let key = (ch + rest);
      if (!map.hasOwnProperty(key)) {
        res.push(ch + rest);
        map[key] = true;
      }
    }
  }

  return res;
}

console.log(permute('abc'));
console.log(permute('aac'));
console.log(permute(''));