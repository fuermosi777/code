var Stack = require('../utils/Stack');

function sort(stack) {
    var helper = new Stack();

    var size = 0;
    while (!stack.isEmpty()) {
        helper.push(stack.pop());
        size++;
    }
    while (!helper.isEmpty()) {
        stack.push(helper.pop());
    }

    var i = 0, maxLimit = Infinity;
    while (i < size) {
        var max = - Infinity;
        while (!stack.isEmpty()) {
            var item = stack.pop();
            if (item < maxLimit && item > max) {
                max = item;
            }
            helper.push(item);
        }
        maxLimit = max;
        var j = 0;
        while (j < size) {
            var item = helper.pop();
            if (item === max) {

            } else {
                stack.push(item);
            }
            j++;
        }
        stack.push(max);

        i++;
    }
}

function test() {
    var stack = new Stack();
    stack.push(3);
    stack.push(2);
    stack.push(4);
    stack.push(5);
    stack.push(1);
    sort(stack);
    console.log(stack.toString());
}

test();