function divisors(num) {
    var divisors = [];
    var a = num;
    while (true) {
        if (a % 2 == 0) {
            divisors.push(2);
            a /= 2;
        } else if (a % 5 == 0) {
            divisors.push(5);
            a /= 5;
        } else {
            divisors.push(a);
            break;
        }
    }
    return divisors;
}

function zeros(num) {
    var divisorPool = [];
    for (let i = 1; i <= num; i++) {
        divisorPool = divisorPool.concat(divisors(i));
    }
    var ct2 = 0;
    var ct5 = 0;
    for (let i = 0; i < divisorPool.length; i++) {
        if (divisorPool[i] == 2) ct2++;
        if (divisorPool[i] == 5) ct5++;
    }

    return Math.min(ct2, ct5);
}

function main() {
    console.log(zeros(30));
}

main();