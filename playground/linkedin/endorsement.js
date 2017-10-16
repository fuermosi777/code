/**
 * convert 
 * 
 * [{
 *   skill: 'css', user: 'Bill',
 * }, {
 *   skill: 'javascript', user: 'Other',
 * }]
 *
 * to
 *
 * [{
 *   skill: 'css', user: ['Bill'], count: 1,
 *   ...
 * }]
 * 
 * Follow up 1: sort by count
 */

function reorder(data) {
  let map = {};
  data.forEach(d => {
    if (!map.hasOwnProperty(d.skill)) {
      map[d.skill] = {user: [], count: 0};
    }
    map[d.skill].user.push(d.user);
    map[d.skill].count += 1;
  });
  let res = [];
  Object.keys(map).forEach(k => {
    res.push({
      skill: k,
      user: map[k].user,
      count: map[k].count
    })
  });
  res.sort((a, b) => (b.count - a.count));
  return res;
}

var data =  [{
  skill: 'css', user: 'Bill',
}, {
  skill: 'javascript', user: 'Other',
}, {
  skill: 'html', user: 'Sue',
}, {
  skill: 'css', user: 'Tom'
}];

reorder(data);