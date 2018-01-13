// http://www.mathsisfun.com/games/tilt-maze.html

const CELL_SIZE = 20;

class Cell {
  constructor(i, j) {
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
    this.i = i;
    this.j = j;
  }
}

class Board {
  constructor(width, height) {
    this.width = width;
    this.height = height;

    const map = this.cellMap = new Map();
    this.point = null;
    this.prize = null;
    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        let cell = new Cell(i, j);
        let key = i + '-' + j;
        map.set(key, cell);
        if (j - 1 >= 0) {
          let leftCell = map.get(`${i}-${j - 1}`);
          if (leftCell && !leftCell.right) {
            leftCell.right = cell;
            cell.left = leftCell;
          }
        }
        if (i - 1 >= 0) {
          let upCell = map.get(`${i - 1}-${j}`);
          if (upCell && !upCell.down) {
            upCell.down = cell;
            cell.up = upCell;
          }
        }   
      }
    }
  }

  putPoint(i, j) {
    this.point = this.cellMap.get(`${i}-${j}`);
  }

  putPrize(i, j) {
    this.prize = this.cellMap.get(`${i}-${j}`);
  }

  addWall(i, j, dir /* up, down, left, right */) {
    let cell = this.cellMap.get(`${i}-${j}`);
    let counterCell = cell[dir];
    let counterDir;
    switch (dir) {
      case 'up': counterDir = 'down'; break;
      case 'down': counterDir = 'up'; break;
      case 'left': counterDir = 'right'; break;
      case 'right': counterDir = 'left'; break;
    }
    if (counterCell) {
      cell[dir] = null;
      counterCell[counterDir] = null;
    }
  }

  _move(dir, callback) {
    while (this.point[dir]) {
      this.point = this.point[dir];
      if (this.point === this.prize) break;
    }
    callback(this);
  }

  moveUp(cb) {
    this._move('up', cb);
  }

  moveDown(cb) {
    this._move('down', cb);
  }

  moveRight(cb) {
    this._move('right', cb);
  }

  moveLeft(cb) {
    this._move('left', cb);
  }
}

let board = new Board(10, 10);
board.putPoint(0, 0);
board.putPrize(6, 7);
board.addWall(0, 7, 'right');
board.addWall(5, 5, 'up');
updateView(board);

document.onkeydown = checkKey;

function checkKey(e) {
  if (e.keyCode == '38') {
    board.moveUp(updateView);
  } else if (e.keyCode == '40') {
    board.moveDown(updateView);
  } else if (e.keyCode == '37') {
    board.moveLeft(updateView);
  } else if (e.keyCode == '39') {
    board.moveRight(updateView);
  }
}

function updateView(board) {
  let gameBoardEl = document.querySelector('.game-board');
  gameBoardEl.innerHTML = '';
  gameBoardEl.style.width = `${board.width * CELL_SIZE}px`;
  gameBoardEl.style.height = `${board.height * CELL_SIZE}px`;
  gameBoardEl.style.position = 'relative';

  let iter = board.cellMap.values();
  for (let cell of iter) {
    let cellEl = document.createElement('div');
    cellEl.style.width = `${CELL_SIZE}px`;
    cellEl.style.height = `${CELL_SIZE}px`;
    cellEl.style.position = 'absolute';
    cellEl.style.top = `${cell.i * CELL_SIZE}px`;
    cellEl.style.left = `${cell.j * CELL_SIZE}px`;
    if (!cell.left) cellEl.style.borderLeft = '1px solid black';
    if (!cell.right) cellEl.style.borderRight = '1px solid black';
    if (!cell.up) cellEl.style.borderTop = '1px solid black';
    if (!cell.down) cellEl.style.borderBottom = '1px solid black';
    if (board.prize === cell) cellEl.textContent = '🍎';
    if (board.point === cell) cellEl.textContent = '🙆‍♂️';
    gameBoardEl.appendChild(cellEl);
  }
}
