var Node = require('./Node');

function LinkedList() {
    this.first = null;
    this.last = null;
}

LinkedList.prototype = {
    add: function(item) {
        var node = new Node(item);
        if (!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
    },
    addArray: function(array) {
        for (var i = 0; i < array.length; i++) {
            this.add(array[i]);
        }
    },
    get: function(index) {

    },
    getFirst: function() {

    },
    getLast: function() {

    },
    toArray: function() {

    },
    size: function() {

    },
    push: function(item) {

    },
    pop: function() {

    },
    toString: function() {
        return this.first.toString();
    }
}

// test
function test() {
    var ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.addArray([1,2,3,4,5])
    console.log(ll.toString());
}

if (require.main === module) test();