var DirectedGraphNode = require('./DirectedGraphNode');

function DirectedGraph() {
    this.V = 0;
    this.E = 0;
    this.nodes = [];
}

DirectedGraph.prototype = {
    
    addVertex(node) {
        this.nodes.push(node);
        this.V++;
    },

    addEdge(v, w) {
        v.addChild(w);
        this.E++;
    },

    adj(v) {
        return v.children;
    },

    toString() {
        var res = '';
        for (var i = 0; i < this.V; i++) {
            var children = this.nodes[i].children.map(item => item.val).join(", ");
            res += this.nodes[i].val + ': ' + children + '\n';
        }
        return res;
    }
}

module.exports = DirectedGraph;

function test() {
    var g = new DirectedGraph();
    var a = new DirectedGraphNode(1);
    var b = new DirectedGraphNode(2);
    var c = new DirectedGraphNode(3);
    var d = new DirectedGraphNode(4);
    var e = new DirectedGraphNode(5);
    g.addVertex(a);
    g.addVertex(b);
    g.addVertex(c);
    g.addVertex(d);
    g.addVertex(e);
    g.addEdge(a, b);
    g.addEdge(b, c);
    g.addEdge(a, d);
    g.addEdge(d, e);
    console.log(g.toString());
}

if (require.main === module) test();