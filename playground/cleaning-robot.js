/**
 * @Google
 * A robot is cleaning in a room, which is a 2-D grid.
 *
 * There are four methods avaiable.
 *
 * Write a function to clean all cells of the room.
 * 
 */

function Robot(room) {
  const dirs = ['E', 'N', 'S', 'W'];
  /** @private @enum */
  this.dir = dirs[Math.floor(Math.random() * dirs.length)]; // random init direction
  this.room = room; // load room map

  this.i = Math.random() * (room[0].length - 1) | 0;
  this.j = Math.random() * (room.length - 1) | 0;
}

Robot.prototype.isClean = function() { return this.room[this.i][this.j]; }

Robot.prototype.goForward = function() {
  if (this.dir === 'E') {
    this.j += 1;
    if (this.room[this.i].length - 1 === this.j) return false;
  }
  if (this.dir === 'S') {
    this.i += 1;
    if (this.room.length - 1 === this.i) return false;
  }
  if (this.dir === 'W') {
    this.j -= 1;
    if (this.j === 0) return false;
  }
  if (this.dir === 'N') {
    this.i -= 1;
    if (this.i === 0) return false;
  }
  return true;
}

Robot.prototype.canGoForward = function() {
  if (this.dir === 'E') {
    if (this.room[this.i].length - 1 === this.j) return false;
  }
  if (this.dir === 'S') {
    if (this.room.length - 1 === this.i) return false;
  }
  if (this.dir === 'W') {
    if (this.j === 0) return false;
  }
  if (this.dir === 'N') {
    if (this.i === 0) return false;
  }
  return true;
}

Robot.prototype.rotate = function(hand) {
  if (hand === 'right') {
    if (this.dir === 'N') {
      this.dir = 'E';
    } else if (this.dir === 'E') {
      this.dir = 'S';
    } else if (this.dir === 'S') {
      this.dir = 'W';
    } else if (this.dir === 'W') {
      this.dir = 'N';
    }
  } else if (hand === 'left') {
    if (this.dir === 'N') {
      this.dir = 'W';
    } else if (this.dir === 'W') {
      this.dir = 'S';
    } else if (this.dir === 'S') {
      this.dir = 'E';
    } else if (this.dir === 'E') {
      this.dir = 'N';
    }
  }
}

/**
 * @param  {number} i
 * @param  {number} j
 * @param  {number[][]} room
 * @return {void}
 */
Robot.prototype.clean = function() { this.room[this.i][this.j] = true; }

function generateRoom(min = 1, max = 100, cleanedPercentage = 0.3) {
  let row = Math.random() * (max - min) + min;
  let col = Math.random() * (max - min) + min;
  let room = [];
  for (let i = 0; i < row; i++) {
    let r = [];
    for (let j = 0; j < col; j++) {
      r[j] = Math.random() < cleanedPercentage;
    }
    room[i] = r;
  }
  return room;
}

function isRoomClean(room) {
  for (let i = 0; i < room.length; i++) {
    for (let j = 0; j < room[i].length; j++) {
      if (!room[i][j]) return false;
    }
  }
  return true;
}

/**
 * This is unknown
 */
let room = generateRoom(4,10);
let robot = new Robot(room);

/**
 * Now let's start.
 */

function clean() {
  // Go to a corner
  while (robot.canGoForward()) {
    robot.goForward();
  }

  robot.rotate('left');

  while (robot.canGoForward()) {
    robot.goForward();
  } // now the robot is at the corner

  robot.rotate('left');
  robot.rotate('left');

  let nextRotateDir = 'right';

  while (true) {
    robot.clean();
    while (robot.canGoForward()) {
      robot.goForward();
      robot.clean();
    }

    robot.rotate(nextRotateDir);
    if (robot.canGoForward()) {
      robot.goForward();
      robot.clean();
    } else {
      break;
    }
    robot.rotate(nextRotateDir);
    nextRotateDir = nextRotateDir === 'right' ? 'left' : 'right';
  }
}

clean(room);

console.log(isRoomClean(room));
