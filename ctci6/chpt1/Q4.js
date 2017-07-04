// @param String a
// @return Bool

function isPP(a) {
    var b = a.replace(" ", "");
    b = b.toLowerCase();
    var map = {};
    for (var i = 0; i < b.length; i++) {
        if (map.hasOwnProperty(b[i])) {
            map[b[i]]++;
        } else {
            map[b[i]] = 1;
        }
    }
    var k = Object.keys(map).length;
    if (k === 0) {
        return false;
    } else if (k === 1) {
        return true;
    }
    if (b.length % 2 === 0) {
        for (var key in map) {
            if (map[key] % 2 !== 0) {
                return false;
            }
        }
    } else {
        var odd = 0;
        for (var key in map) {
            if (map[key] % 2 !== 0) {
                if (odd === 0) {
                    odd = 1;
                } else {
                    return false;
                }
            }
        }
    }
    return true;
}

console.log(isPP("Tt"));
console.log(isPP("Tact Coa"));
console.log(isPP("Tact Coacc"));
console.log(isPP("bbca"));