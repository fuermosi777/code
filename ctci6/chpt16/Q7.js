function flip(bit) {
    return 1 ^ bit;
}

function max(a, b) {
    var sign = (a - b) >> 31;
    var positive = flip(sign);
    var negative = flip(positive);
    return a * positive + b * negative;
}

function main() {
    console.log(max(12, 3));
}

main();