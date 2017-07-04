//Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

function digPow(n, p){
  var digits = n.toString().split('');
  var sum = 0;
  for (var i = 0; i < digits.length; i++) {
    sum += Math.pow(digits[i], p + i);
  }
  if (sum / n % 1 === 0) return sum / n;
  return -1;
}