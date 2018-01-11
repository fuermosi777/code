function Snake(board, i, j) {
  let bornPlace = `${i}-${j}`;

  this.head = bornPlace;
  this.tail = bornPlace;
  this.board = board;
  this.direction = 'E';
  this.size = 1;
  this.queue = [bornPlace];
  this.body = new Set();
  this.body.add(bornPlace);
}

Snake.prototype = {
  constructor: Snake,

  setDirection(dir) {
    this.direction = dir;
  },

  goForward(onSuccess, onError) {
    let hasFoodInBelly = false;

    let [i, j] = this.head.split('-');

    if (this.direction === 'E') {
      j++;
    } else if (this.direction === 'S') {
      i++;
    } else if (this.direction === 'W') {
      j--;
    } else {
      i--;
    }

    if (i < 0 || i > this.board.length || j < 0 || j > this.board[0].length) {
      onError('Hitting the wall');
      return;
    }

    let next = `${i}-${j}`;

    if (this.body.has(next)) {
      onError('Hitting self');
      return;
    }

    if (this.board[i][j] === 1) {
      hasFoodInBelly = true;
    }

    this.queue.push(next);
    this.body.add(next);
    
    this.head = next;

    if (this.hasFoodInBelly) {
      this.size += 1;
    } else {
      let oldTail = this.queue.shift();
      this.body.delete(oldTail);
      this.tail = this.queue[0];
    }

    onSuccess();

  }
}

var isGameRunning = false;
var snake, board;
var tick;
var appleTick = 50000;

function startGame(t = 1000) {
  board = drawBoard(10, 10);
  snake = new Snake(board, 0, 0);
  isGameRunning = true;
  tick = t;

  handleSnakeGoFoward();
}

function handleSnakeGoFoward() {
  if (!isGameRunning) return;

  setTimeout(() => {
    snake.goForward(handleSnakeGoFoward, handleSnakeDie);
  }, tick);
}

function handleSnakeDie(err) {
  console.log('Die: ', err);
  isGameRunning = false;
}

function handleApple() {
  setTimeout(() => {
    generateApples(2, board, handleApple);
  }, appleTick);
}

function generateApples(count, board, callback) {
  for (let i = 0; i < count; i++) {
    let i = Math.floor(Math.random() * board.length);
    let j = Math.floor(Math.random() * board[0].length);
    if (board[i][j] !== 1) {
      board[i][j] = 1;
    }
  }
  callback();
}

function drawBoard(row, col) {
  let board = [];
  for (let i = 0; i <= row; i++) {
    board[i] = [];
    for (let j = 0; j <= col; j++) {
      board[i][j] = 0;
    }
  }
  return board;
}


startGame();