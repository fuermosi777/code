function multiply(a, b) {
    var res = 0;
    for (var i = 1; i <= b; i++) {
        res += a;
    }
    return res;
}

function divide(a, b) {
    var res = 0;
    var left = a;
    while (left > 0) {
        left = left - b;
        res++;
    }
    return res;
}

function subtract(a, b) {

}

function main() {
    console.log(multiply(8, 9));
    console.log(divide(8, 9));
}

main();