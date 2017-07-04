// @param String a
// @param String b
// @return b

function oneaway(a, b) {
    if (a === b) return true;
    if (a.length === b.length) {
        var diff = 0;
        for (var i = 0; i < a.length; i++) {
            if (a[i] !== b[i]) {
                if (diff === 0) {
                    diff++;
                } else {
                    return false;
                }
            }
        }
        return true;
    }
    if (Math.abs(a.length - b.length) === 1) {
        var shorter = a.length < b.length ? a : b;
        var longer = shorter === a ? b : a;
        var diff = 0;
        var i = 0, j = 0;
        while (i < longer.length && j < shorter.length) {
            if (longer[i] !== shorter[j]) {
                if (diff === 0) {
                    diff++;
                    i++;
                    continue;
                } else {
                    return false;
                }
            } else {
                i++;
                j++;
            }
        }
        return true;
    }
}

console.log(oneaway('pale', 'ple'));
console.log(oneaway('pales', 'pale'));
console.log(oneaway('pale', 'bale'));
console.log(oneaway('pale', 'bake'));