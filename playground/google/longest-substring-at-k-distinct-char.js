/**
 *
 * LC 430
 *
 * Given a string, find the length of the longest substring T that contains at most k distinct characters.
 * 
 * For example, Given s = “eceba” and k = 2,
 * 
 * T is "ece" which its length is 3.
 */

/**
 * @param {string} str
 * @param {number} k
 * @return {string}
 */
function lsk(str, k) {
  let maxLen = 0;
  let map = new Map();
  let i = 0, j = 0;
  let ct = 0;

  while (i <= j && j < str.length) {
    let ch = str.charAt(j);

    if (!map.has(ch) && ct >= k) {
      while (i <= j && ct >= k) {
        let startCh = str.charAt(i);
        let startChCt = map.get(startCh);
        if (startChCt === 1) {
          map.delete(startCh);
          ct--;
        } else {
          map.set(startCh, startChCt - 1);
        }
        i++;
      }
    }

    if (!map.has(ch)) {
      ct++;
    }

    map.set(ch, (map.get(ch) || 0) + 1);
    maxLen = Math.max(maxLen, j - i + 1);

    j++;
  }

  return maxLen;
}

console.log(lsk('abcba', 2))