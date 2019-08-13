

function main() {
  let button = document.querySelector('button');
  button.onclick = draw
}

const DN = 'down';
const UP = 'up';

function nextPosition(pos, row, col) {
  if (pos.dir === DN) {
    if (pos.y === row) {
      pos.x += 1;
      pos.dir = UP;
    } else {
      pos.y += 1;
    }
  } else {
    if (pos.y === 0) {
      pos.x += 1;
      pos.dir = DN;
    } else {
      pos.y -= 1;
    }
  }
}

function snake(row, col) {
  let result = [];
  for (let i = 0; i < row; i++) {
    result[i] = [];
  }
  let pos = {
    x: 0,
    y: 0,
    dir: 'down'
  };
  let current = 1;
  let max = row * col;
  while (current <= max) {
    result[pos.y][pos.x] = current;
    nextPosition(pos, row - 1, col - 1);
    current++;
  }
  return result;
}

function draw() {
  let row_ct = Number(document.querySelector('#row_ct').value);
  let col_ct = Number(document.querySelector('#col_ct').value);
  let canvas = document.querySelector('#canvas');

  canvas.innerHTML = '';
  let result = snake(row_ct, col_ct);
  for (let row of result) {
    let row_dom = document.createElement('div');
    for (let item of row) {
      row_dom.innerHTML += `<span>${item}</span>`;
    }
    canvas.appendChild(row_dom);
  }
}

document.addEventListener("DOMContentLoaded", main);