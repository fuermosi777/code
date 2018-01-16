class Cell {
  constructor(i, j, isBomb = false) {
    this.i = i;
    this.j = j;
    this.val = 0;
    this.isBomb = isBomb;
    this.isVisible = false;
    this.up = null;
    this.down = null;
    this.left = null;
    this.right = null;
  }

  makeVisiable() {
    this.isVisible = true;
  }
}

class Game {
  constructor(size = 20, bombCt = 80, eventEmitter) {
    this.events = new Map();
    this.size = size;
    this.cells = new Map();
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        this.cells.set(`${i}-${j}`, new Cell(i, j, Math.random() < (bombCt / (size * size))));
      }
    }

    // connect cells to build graph
    for (let i = 0; i < this.size; i++) {
      for (let j = 0; j < this.size; j++) {
        let cell = this.cells.get(`${i}-${j}`);
        let upCell = this.cells.get(`${i - 1}-${j}`);
        let leftCell = this.cells.get(`${i}-${j - 1}`);
        if (upCell) {
          upCell.down = cell;
          cell.up = upCell;
        }
        if (leftCell) {
          leftCell.right = cell;
          cell.left = leftCell;
        }
      }
    }

    // add values
    let cells = this.cells.values();
    for (let cell of cells) {
      if (cell.isBomb) {
        if (cell.up) cell.up.val += 1;
        if (cell.down) cell.down.val += 1;
        if (cell.left) cell.left.val += 1;
        if (cell.right) cell.right.val += 1;
      }
    }
  }

  on(eventName, handler) {
    if (!this.events.get(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(handler);
  }

  emit(eventName) {
    if (this.events.get(eventName)) {
      this.events.get(eventName).forEach(handler => {
        handler(this);
      });
    }
  }

  detect(i, j) {
    let cell = this.cells.get(`${i}-${j}`);
    if (cell.isBomb) {
      this.end();
      return;
    }
    if (!cell.isVisible) {
      this.check(cell);
      this.emit('change');
    }
  }

  check(cell) {
    if (!cell) return;
    if (cell.isVisible) return;

    cell.makeVisiable();

    if (cell.val === 0) {
      this.check(cell.up);
      this.check(cell.down);
      this.check(cell.left);
      this.check(cell.right);  
    }
  }

  start() {
    this.emit('change');
  }

  end() {
    this.emit('end');
  }
}

function main() {
  let board = document.querySelector('.board');
  let game = new Game();

  game.on('change', handleViewUpdate);
  game.on('end', () => { alert('BOMB!'); });

  game.start();

  board.addEventListener('click', e => {
    handleBoardClick(e, game);
  });
}

function handleBoardClick(e, game) {
  if (e.target.classList.contains('cell')) {
    let i = e.target.getAttribute('data-i');
    let j = e.target.getAttribute('data-j');
    game.detect(i, j);
  }
}

function handleViewUpdate(game) {
  let board = document.querySelector('.board');

  board.innerHTML = '';

  board.style.width = `${game.size * 20}px`;
  board.style.height = `${game.size * 20}px`;

  let cells = game.cells.values();
  for (let cell of cells) {
    let cellDiv = document.createElement('div');
    cellDiv.classList.add('cell');
    cellDiv.style.width = '20px';
    cellDiv.style.height = '20px';
    cellDiv.style.top = `${cell.i * 20}px`;
    cellDiv.style.left = `${cell.j * 20}px`;
    cellDiv.setAttribute('data-i', cell.i);
    cellDiv.setAttribute('data-j', cell.j);
    if (cell.isVisible) {
      cellDiv.classList.add('visible');
      if (cell.val !== 0) cellDiv.textContent = cell.val;
    }
    board.appendChild(cellDiv);
  }
}

main();