/**
 * O(n), n is x
 */
function isPrime(x) {
  if (x < 2) return false;
  for (let i = 2; i < x; i++) {
    if (x % i === 0) {
      return false;
    }
  }
  return true;
}

var expect = require('chai').expect;

expect(isPrime(0)).to.equal(false);
expect(isPrime(1)).to.equal(false);
expect(isPrime(2)).to.equal(true);
expect(isPrime(3)).to.equal(true);
expect(isPrime(9)).to.equal(false);
expect(isPrime(17)).to.equal(true);
expect(isPrime(541)).to.equal(true);
expect(isPrime(179426548)).to.equal(false);
expect(isPrime(179426549)).to.equal(true);
expect(isPrime(1000000000)).to.equal(false);