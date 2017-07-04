class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    toString() {
        return `(${this.x}, ${this.y})`;
    }
}

class Line {
    constructor(start, end) {
        this.start = start;
        this.end = end;
        this.k = (end.y - start.y) / (end.x - start.x);
        this.b = (end.y - this.k * end.x);
    }
}

function intersection(lineA, lineB) {
    var x = (lineA.b - lineB.b) / (lineB.k - lineA.k);
    var y = x * lineA.k + lineA.b;
    return new Point(x, y);
}

function main() {
    var a = new Point(0, 1);
    var b = new Point(4, 3);
    var lineA = new Line(a, b);

    var c = new Point(1, 0);
    var d = new Point(0, -2);
    var lineB = new Line(c, d);

    console.log(intersection(lineA, lineB).toString());
}

main();