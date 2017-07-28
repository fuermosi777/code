/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
  let tmap = {};
  let unique = 0;
  for (let i = 0; i < t.length; i++) {
    if (!tmap.hasOwnProperty(t[i])) {
      tmap[t[i]] = 0;
      unique++;
    }
    tmap[t[i]] += 1;
  }

  let uniqueTodo = 0;
  let smap = {};

  let min = s.length;
  let minstart = 0;
  let minend = s.length - 1;

  let i = 0, j = 0;
  while (i < s.length) {
    let ch = s[i];
    if (!tmap.hasOwnProperty(ch)) {
      i++;
      continue;
    }

    if (!smap.hasOwnProperty(ch)) smap[ch] = 0;
    smap[ch] += 1;
    if (smap[ch] === tmap[ch]) uniqueTodo++;
    if (uniqueTodo === unique) {
      while (j < i) {
        if (smap.hasOwnProperty(s[j])) {
          if (smap[s[j]] - 1 >= tmap[s[j]]) {
            smap[s[j]] -= 1;
            j++;
          } else {
            break;
          }
        } else {
          j++;
        }
      }
      if (i - j + 1 < min) {
        minstart = j;
        minend = i;
        min = i - j + 1;
      }
    }
    i++;
  }

  if (uniqueTodo !== unique) return ''; // edge case

  return s.substring(minstart, minend + 1);
};