/**
 * Call, Apply, Bind
 */

function test(arg1, arg2) {
  console.log(arg1, arg2, this.val);
}

test.apply(this, [1, 2]);
test.call({val: 7}, 3, 4);

var boundTest = test.bind(this, 5, 6);
boundTest();