/**
 * tatt
 * ataa
 * ttaa
 * taat
 * ttta
 * attt
 * atat
 * tatt
 *
 * make row string === col string
 * row[1] === col[1]
 * 2...2
 * 3...3
 *
 * assuming there are duplicates, random length
 */

/**
 * @param  {string[]} strs
 * @return {string[][]}
 */
function stringSquare(strs) {
  let trie = new Trie(strs);
  let res = [];
  for (let i = 0; i < strs.length; i++) {
    let sq = [];
    if (strs[i].length < 2) {
      continue;
    }
    dfs(sq, trie, strs[i], 2);
    res.push(sq);

    sq.forEach(s => {
      trie.addOne(s); // Add count 1 back to the val of str in Trie
    });
  }
}

function dfs(square, trie, str, length) {
  if (length >= str.length) return;
  let nextStr = getString(trie, str.substring(0, length + 1), length);
  if (nextStr) {
    square.push(nextStr);
  }
  dfs(sq, trie, str, length + 1);
}


/**
 * Get string from trie with the prefix and the length
 * @param  {Trie} trie
 * @param  {number} prefix
 * @param  {number} length
 * @return {string}
 */
function getString(trie, prefix, length) {

}