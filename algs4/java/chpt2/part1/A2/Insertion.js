/**
 * Created by hao on 6/24/16.
 */

function sort(a) {
    for (var i = 0; i < a.length; i++) {
        var j = i;
        while (j > 0 && a[j - 1] > a[j]) {
            var t = a[j];
            a[j] = a[j - 1];
            a[j - 1] = t;
            j--;
        }
    }
    return a;
}

// test
var a = [4,3,2,7,5,9,3,0,6,5,3,8,7,6,3];
sort(a);
console.log(a);