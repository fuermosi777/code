/**
 * http://example.com/over/there?name=ferret&name=tom&id=1
 */

function parseUrl(url) {
  url = decodeURIComponent(url);
  let items = url.split('?');
  if (items.length < 2) return null;

  let item = items[1];
  let attrs = item.split('&');
  let res = {};
  attrs.forEach(attr => {
    let parse = attr.split('=');
    if (parse.length < 2) throw new Error('URL format invalid');
    let key = parse[0];
    let val = parse[1];
    if (res.hasOwnProperty(key)) {
      if (!Array.isArray(res[key])) {
        res[key] = [res[key]];
      }
      res[key].push(val);
    } else {
      res[key] = val;
    }
  });

  return res;
}

var expect = require('chai').expect;

expect(parseUrl('http://example.com/over/there?name=ferret&name=tom&id=1')).to.deep.equal({
  name: ['ferret', 'tom'],
  id: '1'
});

expect(parseUrl('http://example.com/over/there?name=n1&id=3&name=n2&id=1&desc=kill')).to.deep.equal({
  name: ['n1', 'n2'],
  id: ['3', '1'],
  desc: 'kill'
});