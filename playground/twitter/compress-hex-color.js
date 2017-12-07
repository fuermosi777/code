/**
 * Twitter question
 * 
 * Compress HEX color:
 * #EEAABB -> EAB
 * #E0ACF0 -> DAE
 *
 * decimal <- parseInt(HEX, 16)
 * hex = decimal.toString(16)
 *
 * 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
 */

// const hexDec = {
//   '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
// };

// function getNearestDouble(s) {
//   if (s[0] === s[1]) return s[0];

//   let current = s[0];
//   let prev, next, left, right, result;
//   if (current === '0') {
//     prev = '0';
//   } else {
//     prev = Object.keys(hexDec)[Object.keys(hexDec).indexOf(current) - 1];
//   }
//   if (current === 'F') {
//     next = 'F';
//   } else {
//     next = Object.keys(hexDec)[Object.keys(hexDec).indexOf(current) + 1];
//   }
//   if (hexDec[s[0]] < hexDec[s[1]]) {
//     left = current;
//     right = next;
//     if (hexDec[s[1]] - hexDec[s[0]] < hexDec['F'] - hexDec[s[1]] + hexDec[right]) {
//       return left;
//     } else {
//       return right;
//     }
//   } else {
//     left = prev;
//     right = current;
//     if (hexDec[right] - hexDec[s[1]] < hexDec[s[1]] + hexDec['F'] - hexDec[left]) {
//       return right;
//     } else {
//       return left;
//     }
//   }

// }

// function compose(color) {
//   let colors = color.split('#')[1];

//   return '#' + getNearestDouble(colors[0] + colors[1]) + getNearestDouble(colors[2] + colors[3]) + getNearestDouble(colors[4] + colors[5]);
// }
// 

let doubleList = () => {
  let res = [];
  for (let i = 0; i <= 15; i++) {
    res.push(parseInt(i.toString(16) + i.toString(16), 16));
  }

  return res;
};

let findNearest = (list, value) => {
  let lo = 0, hi = list.length - 1;
  while (lo < hi) {
    let mid = lo + (hi - lo) / 2 | 0;
    if (list[mid] === value) {
      return mid;
    } else if (list[mid] > value) {
      hi = mid;
    } else if (list[mid] < value) {
      lo = mid;
    }
    if (hi - lo === 1) {
      if (Math.abs(value - list[hi]) > Math.abs(value - list[lo])) {
        return lo;
      } else {
        return hi;
      }
    }
  }
};

function comp(hex) {
  if (hex[0] === hex[1]) return hex[0];
  
  let list = doubleList();
  let singleHex = findNearest(list, parseInt(hex, 16));

  return list[singleHex].toString(16)[0].toUpperCase();
}

function compose(color) {
  let hexes = color.split('#')[1];

  return '#' + comp(hexes[0] + hexes[1]) + comp(hexes[2] + hexes[3]) + comp(hexes[4] + hexes[5])
}

console.log(compose('#E0ACF0'));