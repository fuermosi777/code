/**
 * Alex is standing on the top left cell (1,1) of a n*m table. The table has n rows and m columns. Initially, he is facing its right cell. He moves on the table in the following way:  

>He moves one step forward.  
>He turns to his right  
>While moving forward, if he would go out of the table or reach a visited cell, he turns to his right.  

He moves in the table as much as he can. Can you find out the number of cells he visits before he stops?  

For example, given a 9x9 grid, the following would be his moves. The number on each cell represents the step he would land on that particular cell.  
1 2 55 54 51 50 47 46 45  
4 3 56 53 52 49 48 43 44  
5 6 57 58 79 78 77 42 41  
8 7 60 59 80 75 76 39 40  
9 10 61 62 81 74 73 38 37  
12 11 64 63 68 69 72 35 36  
13 14 65 66 67 70 71 34 33  
16 15 20 21 24 25 28 29 32  
17 18 19 22 23 26 27 30 31  

Input:  
The first line of the input contains two integer numbers n and m.  
n and m are between 1 and 100.  

Output:  
Print an integer to the output being the answer of the test.  

Sample input #00:  
3 3  

Sample output #00:  
9  

Sample input #01:  
7 4  

Sample output #01:  
18
 */

function nextDir(dir) {
  if (dir === 'east') return 'south';
  if (dir === 'south') return 'west';
  if (dir === 'west') return 'north';
  if (dir === 'north') return 'east';
}

function next(visits, i, j, row, col, dir, fails) {
  if (fails === 4) return null;
  let d = nextDir(dir);
  if (dir === 'east') {
    if (j === col - 1 || visits[i][j + 1]) {
      return next(visits, i, j, row, col, d, fails + 1);
    } else {
      return {i, j: j + 1, d};
    }
  } else if (dir === 'south') {
    if (i === row - 1 || visits[i + 1][j]) {
      return next(visits, i, j, row, col, d, fails + 1);
    } else {
      return {i: i + 1, j, d};
    }
  } else if (dir === 'west') {
    if (j === 0 || visits[i][j - 1]) {
      return next(visits, i, j, row, col, d, fails + 1);
    } else {
      return {i, j: j - 1, d};
    }
  } else { // dir === 'north'
    if (i === 0 || visits[i - 1][j]) {
      return next(visits, i, j, row, col, d, fails + 1);
    } else {
      return {i: i - 1, j, d};
    }
  }
}

function steps(row, col) {
  let visits = [];
  for (let i = 0; i < row; i++) {
    visits[i] = [];
    for (let j = 0; j < col; j++) {
      visits[i][j] = false;
    }
  }
  let ct = 1;
  let dir = 'east';
  let i = 0, j = 0;
  while (true) {
    let n = next(visits, i, j, row, col, dir, 0);
    if (n === null) break;
    visits[i][j] = true;
    dir = n.d;
    i = n.i;
    j = n.j;
    ct++;
  }
  return ct;
}

var expect = require('chai').expect;

expect(steps(3, 3)).to.equal(9);
expect(steps(7, 4)).to.equal(18);