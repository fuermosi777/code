var exports = module.exports = {};

function Node(val) {
    this.val = val;
    this.next = null;
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

module.exports = Node;

// test
function test() {
    var node1 = new Node(1);
    var node2 = new Node(2);
    node1.next = node2;
    console.log(node1.toString());
}

if (require.main === module) test();