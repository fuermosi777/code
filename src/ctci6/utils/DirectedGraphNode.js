function DirectedGraphNode(val) {
    this.val = val;
    this.children = [];
    this.marked = false;
}

DirectedGraphNode.prototype = {
    addChild(node) {
        this.children.push(node);
    }
}

module.exports = DirectedGraphNode;