function swap(a, i, j) {
    a[i] = a[i] + a[j]; // ^
    a[j] = a[i] - a[j];
    a[i] = a[i] - a[j];
}

function main() {
    var a = [1, 3];
    swap(a, 0, 1);
    console.log(a);
}

main();