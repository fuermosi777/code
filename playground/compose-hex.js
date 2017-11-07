/**
 * Compose HEX color:
 * #EEAABB -> EAB
 * #E0ACF0 -> DAE
 *
 * 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F
 */

const hexDec = {
  '0': 0, '1': 1, '2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, 'A': 10, 'B': 11, 'C': 12, 'D': 13, 'E': 14, 'F': 15
};

function getNearestDouble(s) {
  if (s[0] === s[1]) return s[0];

  let current = s[0];
  let prev, next, left, right, result;
  if (current === '0') {
    prev = '0';
  } else {
    prev = Object.keys(hexDec)[Object.keys(hexDec).indexOf(current) - 1];
  }
  if (current === 'F') {
    next = 'F';
  } else {
    next = Object.keys(hexDec)[Object.keys(hexDec).indexOf(current) + 1];
  }
  if (hexDec[s[0]] < hexDec[s[1]]) {
    left = current;
    right = next;
    if (hexDec[s[1]] - hexDec[s[0]] < hexDec['F'] - hexDec[s[1]] + hexDec[right]) {
      return left;
    } else {
      return right;
    }
  } else {
    left = prev;
    right = current;
    if (hexDec[right] - hexDec[s[1]] < hexDec[s[1]] + hexDec['F'] - hexDec[left]) {
      return right;
    } else {
      return left;
    }
  }

}

function compose(color) {
  let colors = color.split('#')[1];

  return '#' + getNearestDouble(colors[0] + colors[1]) + getNearestDouble(colors[2] + colors[3]) + getNearestDouble(colors[4] + colors[5]);
}

console.log(compose('#E0ACF0'));