function getSide(width, height) {
  let output = '';
  for (let i = 0; i < height; i++) {
    let putStar = false;
    if (i === 0) putStar = true;
    output += '|';
    output += getLine(width - 2, ' ', putStar);
    output += '|';
    if (i < height - 1) output += '\n';
  }
  return output;
}

function getLine(width, ch='-', putStar=false) {
  let output = '';
  let center = width / 2 | 0;
  for (let i = 0; i < width; i++) {
    if (putStar && i === center) {
      output += '*';
    } else {
      output += ch;
    }
  }
  return output;
}

function draw() {
  console.log(getLine(10));
  console.log(getSide(10, 5));
  console.log(getLine(10));
}

draw();