// @param String a
// @return String

function compress(a) {
    if (a.length === 0) return a;

    var b = "";
    var i = 0;
    var flag;
    var num = 1;
    while (i < a.length) {
        if (a[i] !== flag) {
            if (i !== 0) {
                b += num;
            }
            flag = a[i];
            num = 1;
            b += flag;
        } else {
            num++;
        }
        if (i === a.length - 1) {
            b += num;
        }
        i++;
    }
    if (b.length > a.length) return a;
    else return b;
}

console.log(compress('aaaaaaabbbccssssssssssdaddfdfffffa'));