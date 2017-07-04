var dict = {
    1: 'One',
    2: 'Two',
    3: 'Three',
    4: 'Four',
    5: 'Five',
    6: 'Six',
    7: 'Seven',
    8: 'Eight',
    9: 'Nine',
    10: 'Ten',
    11: 'Eleven',
    12: 'Twelve',
    13: 'Thirteen',
    14: 'Fourteen',
    15: 'Fifteen',
    18: 'Eighteen',
    20: 'Twenty',
    30: 'Thirty',
    50: 'Fifty'
};

var units = [
    'Thousand',
    'Million',
    'Billion',
    'Trillion',
    'Quadrillion'
];

function digitNumToEnglish(a) {
    var res = "";
    if (dict.hasOwnProperty(a)) return dict[a];

    if (a < 20) {
        res += dict[a % 10] + 'teen';
    } else if (a % 10 == 0) {
        res += dict[a / 10] + 'ty';
    } else {
        res += digitNumToEnglish(Math.floor(a / 10) * 10) + ' ' + dict[a % 10];
    }
    return res;
}

function hundredNumToEnglish(a) {
    if (a < 100) return digitNumToEnglish(a);
    var b = a.toString();
    var h = parseInt(b[0]);
    var d = parseInt(b[1] + b[2]);
    var res = '';
    res += dict[h] + ' Hundred ';
    res += digitNumToEnglish(d);
    return res;
}

Number.prototype.toEnglish = function() {
    var s = this.toString();
    var stack = [];
    var i;
    for (i = s.length - 1; i >= 0; i -= 3) {
        if (i - 2 >= 0) {
            stack.push(parseInt(s[i - 2] + s[i - 1] + s[i]));
        }
    }
    if (i < 0) i += 3;
    if (i < 2) {
        stack.push(parseInt(s.substring(0, i + 1)));
    }

    var res = "";
    while (stack.length > 0) {
        var a = stack.pop();
        res += hundredNumToEnglish(a) + ' ' + (units[stack.length - 1] || '') + ' ';
    }

    return res;
}

function main() {
    var a = 12342;
    // console.log(hundredNumToEnglish(329));
    console.log(a.toEnglish());
}

main();
