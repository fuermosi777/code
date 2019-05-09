/* styles.sort((s1, s2) => {
      if (s1.start > s2.start) {
        return 1;
      } else if (s1.end > s2.end) {
      return 1
      } else {
        return -1;
      }
    }); */

function styling1(text, styles) {
  let charStyles = [];
  for (let style of styles) {
    for (let i = style.start; i <= style.end; i++) {
      if (!charStyles[i]) {
        charStyles[i] = [];
      }
      charStyles[i].push(style.style);
    }
  }
  let result = "";
  for (let i = 0; i < text.length; i++) {
    let char = text[i];
    result += `<span class="${
      charStyles[i] ? charStyles[i].join(" ") : ""
    }">${char}</span>`;
  }
  return result;
}

// Not finished. Has some bugs. But sort of the way it should work.
function styling2(text, styles) {
  let rangeCutters = new Set();
  for (let s of styles) {
    rangeCutters.add(s.start);
    rangeCutters.add(s.end);
  }
  let cutters = [...rangeCutters];
  cutters.sort((a, b) => (a - b));
  let ranges = {}; // {"0-4": [0, 4, [s1, s2,...]]}
  for (let s of styles) {
    findRanges(s, cutters, ranges);
  }

  let rangeList = [];
  for (let key in ranges) {
    rangeList.push(ranges[key]);
  }
  rangeList.sort((r1, r2) => {
    if (r1[0] > r2[0]) {
      return 1;
    } else {
      return -1;
    }
  })

  // ranges sorting

  let result = ''
  for (let range of rangeList) {
    let char = text.substring(range[0], range[1])
    let charStyles = range[2];
    result += `<span class="${
      charStyles.join(" ")
    }">${char}</span>`;
  }
  return result;
}

function findRanges(style, cutters, ranges) {
  let i = cutters.indexOf(style.start);
  let j = cutters.indexOf(style.end);
  for (let m = i; m < j; m++) {
    let rangeStart = cutters[m];
    let rangeEnd = cutters[m + 1];
    let rangeKey = `${rangeStart}-${rangeEnd}`;
    if (!ranges[rangeKey]) {
      ranges[rangeKey] = [rangeStart, rangeEnd, []]
    }
    ranges[rangeKey][2].push(style.style);
  }
}

// TEST

let styles = [
  {
    start: 3,
    end: 7,
    style: "italic"
  },
  {
    start: 0,
    end: 11,
    style: "underline"
  },
  {
    start: 0,
    end: 4,
    style: "bold"
  },
  {
    start: 6,
    end: 7,
    style: "bold"
  }
];

function main() {
  let toadd = document.querySelector("#to-add");
  const result = styling2(toadd.textContent, styles);
  toadd.innerHTML = result;
}

document.addEventListener("DOMContentLoaded", main);
