function print(arr) {
  let textArr = [];
  let isUppercase = false;
  for (let char of arr) {
    if (char === 'BACKSPACE') {
      textArr.pop();
    } else if (char === 'CAPS') {
      isUppercase = !isUppercase;
    } else if (isUppercase) {
      textArr.push(char.toUpperCase());
    } else {
      textArr.push(char);
    }
  }

  return textArr.join('');
}

function compare(arr1, arr2) {
  return print(arr1) === print(arr2);
}

function isSameLetterButDiffCase(char1, char2) {
  return char1 !== char2 && char1.toUpperCase() === char2.toUpperCase();
}

function compareInplace(arr1, arr2) {
  let i = arr1.length - 1, j = arr2.length - 1;
  let oweCapsCount = 0;
  while (i >= 0 && j >= 0) {
    let backCount1 = 0;
    let backCount2 = 0;

    // Back to last normal letter.
    while (i >= 0) { 
      if (arr1[i] === 'BACKSPACE') {
        backCount1++;
        i--;
      } else if (arr1[i] === 'CAPS') {
        oweCapsCount--;
        i--;
      } else {
        break;
      }
    }
    i -= backCount1;
    while (j >= 0) { 
      if (arr2[j] === 'BACKSPACE') {
        backCount2++;
        j--;
      } else if (arr2[j] === 'CAPS') {
        oweCapsCount--;
        j--;
      } else {
        break;
      }
    }
    j -= backCount2;
    
    if (isSameLetterButDiffCase(arr1[i], arr2[j])) {
      oweCapsCount++;
      i--; j--;
    } else if (arr1[i] === arr2[j]) {
      i--; j--;
    } else {
      return false;
    }
  }
  if (oweCapsCount !== 0) return false;
  return true;
}

console.log(compareInplace(['a','b', 'BACKSPACE', 'B'], ['c', 'a', 'BACKSPACE', 'BACKSPACE', 'a', 'CAPS', 'b', 'x', 'BACKSPACE']));
console.log(compareInplace([], ['a', 'B', 'CAPS', 'CAPS', 'BACKSPACE', 'BACKSPACE']));