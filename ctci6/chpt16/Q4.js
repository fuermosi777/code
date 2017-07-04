// TODO not finished

class Board {

    constructor(text) {
        this.pieces = [];
        var lines = text.split('\n');
        this.M = lines.length;

        this.marked = [];
        for (let i = 0; i< this.M; i++) {
            this.marked = [];
        }

        for (let i = 0; i < this.M; i++) {
            this.pieces[i] = [];
            for (let j = 0; j < this.M; j++) {
                this.pieces[i][j] = lines[i][j];
            }
        }
    }
    check() {

    }
    checkPos(r, c, type) {

    }
}

function main() {
    var board = new Board('xoo\nxxx\noxo');
    console.log(board.pieces)
}

main();