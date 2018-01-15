class Tile {
  constructor(val) {
    this.val = val;
  }

  canMerge(tile) {
    return this.val === tile.val;
  }

  mergeWith(tile) {
    if (tile.val === this.val) {
      this.val *= 2;
    } else {
      throw new Error('Cannot merge. Out val: '  + this.val + ' their val: ' + tile.val);
    }
  }
}

class Game {
  constructor(size = 4) {
    this.size = size;
    this.tileMap = new Map();
    this.generateRandomTiles(2);

  }

  generateRandomTiles(n) {
    let genCt = 0;
    while (genCt < n) {
      if (this.tileMap.size >= this.size * this.size) break;

      let key = `${(Math.random() * (this.size) + 1) | 0}-${(Math.random() * (this.size) + 1) | 0}`;
      if (!this.tileMap.has(key)) {
        this.tileMap.set(key, new Tile(1));
        genCt++;
      }
    }
  }

  moveUp(onMove) {
    let keys = this.tileMap.keys();
    for (let key of keys) {
      let [i, j] = key.split('-');
      i = Number(i);
      j = Number(j);

      while (i > 1) {
        let tile = this.tileMap.get(`${i}-${j}`);
        let nextTile = this.tileMap.get(`${i - 1}-${j}`);

        if (!nextTile) {
          this.tileMap.delete(`${i}-${j}`);
          this.tileMap.set(`${i - 1}-${j}`, tile);
          i -= 1;
        } else if (!nextTile.canMerge(tile)) {
          break;
        } else {
          nextTile.mergeWith(tile);
          this.tileMap.delete(`${i}-${j}`);
          i -= 1;
        }
      }
    }
    onMove();
  }
  moveDown(onMove) {
    let keys = this.tileMap.keys();
    for (let key of keys) {
      let [i, j] = key.split('-');
      i = Number(i);
      j = Number(j);

      while (i < this.size) {
        let tile = this.tileMap.get(`${i}-${j}`);
        let nextTile = this.tileMap.get(`${i + 1}-${j}`);

        if (!nextTile) {
          this.tileMap.delete(`${i}-${j}`);
          this.tileMap.set(`${i + 1}-${j}`, tile);
          i += 1;
        } else if (!nextTile.canMerge(tile)) {
          break;
        } else {
          nextTile.mergeWith(tile);
          this.tileMap.delete(`${i}-${j}`);
          i += 1;
        }
      }
    }
    onMove();
  }
  moveLeft(onMove) {
    let keys = this.tileMap.keys();
    for (let key of keys) {
      let [i, j] = key.split('-');
      i = Number(i);
      j = Number(j);

      while (j > 1) {
        let tile = this.tileMap.get(`${i}-${j}`);
        let nextTile = this.tileMap.get(`${i}-${j - 1}`);

        if (!nextTile) {
          this.tileMap.delete(`${i}-${j}`);
          this.tileMap.set(`${i}-${j - 1}`, tile);
          j -= 1;
        } else if (!nextTile.canMerge(tile)) {
          break;
        } else {
          nextTile.mergeWith(tile);
          this.tileMap.delete(`${i}-${j}`);
          j -= 1;
        }
      }
    }
    onMove();
  }
  moveRight(onMove) {
    let keys = this.tileMap.keys();
    for (let key of keys) {
      let [i, j] = key.split('-');
      i = Number(i);
      j = Number(j);

      while (j < this.size) {
        let tile = this.tileMap.get(`${i}-${j}`);
        let nextTile = this.tileMap.get(`${i}-${j + 1}`);

        if (!nextTile) {
          this.tileMap.delete(`${i}-${j}`);
          this.tileMap.set(`${i}-${j + 1}`, tile);
          j += 1;
        } else if (!nextTile.canMerge(tile)) {
          break;
        } else {
          nextTile.mergeWith(tile);
          this.tileMap.delete(`${i}-${j}`);
          j += 1;
        }
      }
    }
    onMove();
  }
}

function updateView(game) {
  let board = document.querySelector('.board');
  board.innerHTML = '';

  let keys = game.tileMap.keys();
  for (let key of keys) {
    let [i, j] = key.split('-');
    let tile = document.createElement('div');
    tile.classList.add('tile');
    tile.style.top = `${(i - 1) * 50}px`;
    tile.style.left = `${(j - 1) * 50}px`;
    tile.textContent = game.tileMap.get(key).val;
    board.appendChild(tile);
  }
}

function main() {
  let game = new Game();
  updateView(game);

  document.onkeydown = checkKey;

  function checkKey(e) {
    if (e.keyCode == '38') {
      game.moveUp(() => {
        game.generateRandomTiles(2);
      });
    } else if (e.keyCode == '40') {
      game.moveDown(() => {
        game.generateRandomTiles(2);
      });
    } else if (e.keyCode == '37') {
      game.moveLeft(() => {
        game.generateRandomTiles(2);
      });
    } else if (e.keyCode == '39') {
      game.moveRight(() => {
        game.generateRandomTiles(2);
      });
    }
    updateView(game);
  }
}

main();
