var map = {};
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
  if (s === '') return true;
  if (map.hasOwnProperty(s)) return false;
  for (let i = 0; i < wordDict.length; i++) {
    let word = wordDict[i];

    if (s.startsWith(word)) {
      if (wordBreak(s.substring(word.length), wordDict)) {
        return true;
      }
    }
  }
  map[s] = false;
  return false;
};
