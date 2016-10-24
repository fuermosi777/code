function bs(a, s) {
    var lo = 0, hi = a.length - 1;
    while (lo <= hi) {
        var mid = lo + Math.floor((hi - lo) / 2);
        if (a[mid] == s) {
            return mid;
        } else if (a[mid] > s) {
            hi = mid - 1;
        } else {
            lo = mid + 1;
        }
    }
    return lo;
}

var intCmp = function(a, b) {
    if (a > b) {
        return +1;
    } else if (a < b) {
        return -1;
    } else {
        return 0;
    }
}

function smallestDiff(a, b) {
    a.sort(intCmp);
    b.sort(intCmp);
    var bina = bs(a, b[0]);
    var ainb = bs(b, a[0]);

    var i = 0, j = 0;
    var min = Math.abs(a[i] - b[j]);
    while (i < a.length && j < b.length) {
        var diff = Math.abs(a[i] - b[j]);
        if (diff < min) min = diff;
        if (a[i] > b[j]) {
            j++;
        } else if (a[i] < b[j]) {
            i++;
        } else {
            return 0;
        }
    }

    return min;
}

function main() {
    var a = [1, 3, 15, 11, 2];
    var b = [23, 127, 235, 19, 8, 6, 7, 4];
    console.log(smallestDiff(a, b));
}

main();