var exports = module.exports = {};

function Node(val) {
    this.val = val;
    this.next = null;
    this.visited = false;
}

Node.prototype.toString = function() {
    var node = this;
    var s = "";
    while (node !== null) {
        s += node.val;
        if (node.next) {
            s += " -> ";
        }
        node = node.next;
    }
    return s;
};

Node.prototype.visit = function() {
    this.visited = true;
}

Node.prototype.size = function() {
    var node = this;
    var size = 0;
    while (node !== null) {
        size++;
        node = node.next;
    }
    return size;
}

Node.prototype.last = function() {
    var node = this;
    while (node.next !== null) {
        node = node.next;
    }
    return node;
}

Node.prototype.isVisited = function() {
    return this.visited;
}

module.exports = Node;

// test
function test() {
    var node1 = new Node(1);
    var node2 = new Node(2);
    node1.next = node2;
    console.log(node1.toString());
}

if (require.main === module) test();