// check if b is a's permutation
// @param String a
// @param String b
// @return Bool

function isPermutation(a, b) {
    if (a.length === 0) return false;
    if (a.length !== b.length) return false;
    if (a === b) return false;

    var aMap = {};
    for (var i = 0; i < a.length; i++) {
        if (aMap.hasOwnProperty(a[i])) {
            aMap[a[i]]++;
        } else {
            aMap[a[i]] = 1;
        }
    }
    for (i = 0; i < b.length; i++) {
        if (aMap.hasOwnProperty(b[i])) {
            aMap[b[i]]--;
            if (aMap[b[i]] === -1) return false;
        } else {
            return false;
        }
    }
    for (var key in aMap) {
        if (aMap[key] !== 0) {
            return false;
        }
    }
    return true;
}

console.log(isPermutation('abc', 'acb'));

// O(a) + O(b)