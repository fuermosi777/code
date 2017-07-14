/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  let maps = {};
  let res = [];
  strs.forEach(str => {
    let key = str.split('').sort().join('');
    if (maps.hasOwnProperty(key)) {
      res[maps[key]].push(str);
    } else {
      res.push([str]);
      maps[key] = res.length - 1;
    }
  });
  return res;
};