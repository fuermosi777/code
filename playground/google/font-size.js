/**
 * Given a string and a rectangle with a width and height, get the max font size
 */

function getHeight(ch, fontSize) {

}

function getWidth(ch, fontSize) {

}

function canFit(str, fontSize, width, height) {
  let widths = str.split('').map(ch => getWidth(ch, fontSize));
  let heights = str.split('').map(ch => getHeight(ch, fontSize));
  let maxHeights = [];
  let i = 0;
  let sum = 0;
  let lineCt = 0;
  for (let i = 0; i < str.length; i++) {
    sum += widths[i];
    maxHeights[lineCt] = Math.max(maxHeights[lineCt], heights[i]);
    if (sum > width) {
      sum -= widths[i];
      i--;
      sum = 0;
      lineCt++;
    }
  }
  if (maxHeights.reduce((a, b) => (a + b) > height)) {
    return false;
  }

  return true;
}

function getFontSize(str, width, height, min, max) {
  let lo = min, hi = max;
  let lastFitSize = null;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (canFit(str, mid, width, height)) {
      lastFitSize = mid;
      lo = mid + 1;
    } else {
      hi = lo - 1;
    }
  }

  return lastFitSize;
}