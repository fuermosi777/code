/**
 * Givien a list and a set, find out if list has a sublist that is the same as the set.
 *
 * [1,4,3,2,5]
 * 
 * {1,3,2}
 */

/**
 * @param  {number[]} list
 * @param  {Set<number>} set
 * @return {bool}
 */
function findSame(list, set) {
  let i = 0, j = 0;
  while (i < list.length) {
    let num = list[i];
    if (set.has(num)) {
      j++;
    } else {
      j = 0;
    }
    if (j === set.size) return true;
    i++;
  }

  return false;
}

/**
 * []
 * {}
 *
 * [1,2]
 * {}
 *
 * []
 * {1,2}
 *
 * [2,2,2]
 * {2}
 * {1,2}
 */

let list1 = [1,4,3,2,5];
let set1 = new Set();
set1.add(3);set1.add(2);

console.log(findSame(list1, set1));
