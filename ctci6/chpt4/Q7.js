var DirectedGraph = require('../utils/DirectedGraph');
var Node = require('../utils/DirectedGraphNode');
var Stack = require('../utils/Stack');
var Queue = require('../utils/Queue');

function order(graph) {
    var stack = new Stack();
    for (var v of graph.nodes) {
        if (!v.marked) {
            dfs(stack, graph, v);
        }
    }
    var queue = new Queue();
    while (!stack.isEmpty()) {
        queue.enqueue(stack.pop());
    }
    return queue;
}

function dfs(stack, graph, v) {
    if (v == null) return;
    v.marked = true;
    for (var w of graph.adj(v)) {
        if (!w.marked) {
            dfs(stack, graph, w);
        }
    }
    stack.push(v);
}

function test() {
    var g = new DirectedGraph();
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    var d = new Node('d');
    var e = new Node('e');
    var f = new Node('f');
    g.addVertex(a);
    g.addVertex(b);
    g.addVertex(c);
    g.addVertex(d);
    g.addVertex(e);
    g.addVertex(f);
    g.addEdge(a, d);
    g.addEdge(f, b);
    g.addEdge(b, d);
    g.addEdge(f, a);
    g.addEdge(d, c);
    
    var rpo = order(g);
    for (var node of rpo) {
        console.log(node.val);
    }
}

test();