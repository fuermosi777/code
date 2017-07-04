var Node = require('./Node');

function LinkedList() {
    this.first = null;
    this.last = null;
    this.N = 0;
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
        this.N++;
    },
    addArray: function(array) {
        for (var i = 0; i < array.length; i++) {
            this.add(array[i]);
        }
    },
    get: function(index) {
        if (!this.first) return null;
        var i = 0;
        var node = this.first;
        while (i < index) {
            node = node.next;
            i++;
        }
        return node;
    },
    getFirst: function() {
        return this.first;
    },
    getLast: function() {
        return this.last;
    },
    toArray: function() {
        var array = [];
        var node = this.first;
        while (node !== null) {
            array.push(node.val);
            node = node.next;
        }
        return array;
    },
    size: function() {
        return this.N;
    },
    isEmpty: function() {
        return this.N === 0;
    },
    push: function(item) {
        this.add(item);
    },
    pop: function() {
        if (this.size() === 0) return;
        var node = this.last;
        if (this.size() === 1) {
            this.first = null;
            this.last = null;
        } else {
            var i = 0;
            var flag = this.first;
            while (i < this.size() - 2) {
                i++;
                flag = flag.next;
            }
            flag.next = null;
            this.last = flag;
        }
        this.N--;
        return node;
    },
    // @return
    removeFirst() {
        if (this.isEmpty()) return;
        var node = this.first;
        if (this.size() === 1) {
            this.first = null;
            this.last = null;
        } else {
            var second = this.first.next;
            this.first = second;
        }
        this.N--;
        return node;
    },
    toString: function() {
        return this.first.toString();
    }
}

module.exports = LinkedList;

// test
function test() {
    var ll = new LinkedList();
    ll.add(1);
    ll.add(2);
    ll.addArray([1,2,3,4,5])
    ll.pop();
    console.log(ll.toArray());
}

if (require.main === module) test();