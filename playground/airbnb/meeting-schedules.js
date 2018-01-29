/**
 *
Example input:
[
  [[4,5],[6,10],[12,14]],
  [[4,5],[5,9],[13,16]],
  [[11,14]]
]

Example Output:
[[0,4],[11,12],[16,23]]  
 */

function availabilities(schedules) {
  let busy = [];
  let i = 0;
  while (i < schedules.length) {
    busy = mergeSchedules(busy, schedules[i]);
    i++;
  }
  console.log(busy)
}

function mergeSchedules(schs1, schs2) {
  let res = [];
  let i = 0, j = 0;
  while (i < schs1.length || j < schs2.length) {
    let top = res[res.length - 1];
    if (i < schs1.length && j < schs2.length) {
      let min = compare(schs1[i], schs2[j]) < 0 ? schs1[i] : schs2[j];
      if (top && isIntersect(top, min)) {
        res[res.length - 1] = merge(top, min);
      } else {
        res.push(min);
      }
      if (compare(schs1[i], schs2[j]) < 0) {
        i++;
      } else {
        j++;
      }
    } else if (i < schs1.length) {
      if (top && isIntersect(top, schs1[i])) {
        res[res.length - 1] = merge(top, schs1[i]);
      } else {
        res.push(schs1[i]);
      }
      i++;
    } else {
      if (top && isIntersect(top, schs2[j])) {
        res[res.length - 1] = merge(top, schs2[j]);
      } else {
        res.push(schs2[j]);
      }
      j++;
    }
  }
  return res;
}

function isIntersect(sch1, sch2) {
  return !(sch1[1] < sch2[0] || sch1[0] > sch2[1]);
}

function merge(sch1, sch2) {
  if (sch1[0] <= sch2[0] && sch1[1] >= sch2[1]) {
    return sch1;
  } else if (sch1[0] >= sch2[0] && sch1[1] <= sch2[1]) {
    return sch2;
  } else {
    return [Math.min(sch1[0], sch2[0]), Math.max(sch1[1], sch2[1])];
  }
}

function compare(sch1, sch2) {
  if (sch1[0] < sch2[0]) {
    return -1;
  } else if (sch1[0] === sch2[0]) {
    if (sch1[1] === sch2[1]) {
      return 0;
    } else if (sch1[1] < sch2[1]) {
      return -1;
    } else {
      return 1;
    }
  } else {
    return 1;
  }
}

let schs = [
  [[4,5],[6,10],[12,14]],
  [[4,5],[5,9],[13,16]],
  [[11,14]]
]

availabilities(schs);