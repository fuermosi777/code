// @param String a
// @param Integer length
// @return String

function URLify(a, length) {
    var b = "";
    for (var i = 0; i < length; i++) {
        if (a[i] === " ") {
            b += "%20";
        } else {
            b += a[i];
        }
    }
    return b;
}

console.log(URLify("Mr John Smith     ", 13));

// O(k) : k is length