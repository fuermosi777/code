/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    var N = 0;
    var queues = [];
    for (var i = 0; i < numRows; i++) {
        queues.push([]);
    }

    var ct = 0;
    var ctDir;
    while (N < s.length) {
        queues[ct].push(s[N]);
        if (numRows !== 1) {
            if (ct === 0) {
                ctDir = true;
            }
            if (ct === numRows - 1) {
                ctDir = false;
            }
            if (ctDir) {
                ct++;
            } else {
                ct--;
            }
        }

        N++;
    }
    var result = "";
    while (queues.length !== 0) {
        var q = queues.shift();
        while (q.length !== 0) {
            result += q.shift();
        }
    }
    return result;
};