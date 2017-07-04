var DirectedGraph = require('../utils/DirectedGraph');
var DirectedGraphNode = require('../utils/DirectedGraphNode');
var Queue = require('../utils/Queue');

function isConnected(graph, v, w) {
    var queue = new Queue();
    queue.enqueue(v);

    while (!queue.isEmpty()) {
        var k = queue.dequeue();
        k.marked = true;

        for (var i = 0; i < graph.adj(k).length; i++) {
            var node = graph.adj(k)[i];
            if (node === w) {
                return true;
            }
            if (!node.marked) {
                queue.enqueue(node);
            }
        }
    }
    return false;
}

function test() {
    var g = new DirectedGraph();
    var a = new DirectedGraphNode(1);
    var b = new DirectedGraphNode(2);
    var c = new DirectedGraphNode(3);
    var d = new DirectedGraphNode(4);
    g.addVertex(a);
    g.addVertex(b);
    g.addVertex(c);
    g.addVertex(d);
    g.addEdge(a, b);
    g.addEdge(b, c);
    g.addEdge(a, d);

    console.log(isConnected(g, a, c));
    console.log(isConnected(g, c, b));
}

test();
