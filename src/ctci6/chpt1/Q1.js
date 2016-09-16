const assert = require('assert');

var isUnique = function(s) {
    var array = s.split('');
    array.sort();
    for (var i = 1; i < array.length; i++) {
        var a = array[i];
        if (array[i] === array[i - 1]) {
            return false;
        }
    }
    return true;
}

assert(isUnique('wtf') === true);
assert(isUnique('wwf') === false);