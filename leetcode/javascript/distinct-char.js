/**
  Given a string, find the length of the longest substring T that contains at most 2 distinct characters.
  For example, Given s = “eceba”,
  T is "ece" which its length is 3.

  abbbacbabbcb
*/

function longestDistinct(str) {
  let map = new Map(); // <char, count>
  let maxLen = 1;
  
  map.set(str[0], 1);

  let i = 0, j = 1;
  while (j < str.length) {
    let char = str[j];
    if (!map.has(char)) {
      map.set(char, 0);
    }
    map.set(char, map.get(char) + 1);

    while (map.size > 2 && i < j) {
      let charStart = str[i];
      map.set(charStart, map.get(charStart) - 1);
      if (map.get(charStart) === 0) {
        map.delete(charStart);
      }
      i++;
    }

    let len = j - i + 1;
    maxLen = Math.max(maxLen, len);

    j++;
  }

  return maxLen;
}

console.log(longestDistinct('abbbacbabbcb'))