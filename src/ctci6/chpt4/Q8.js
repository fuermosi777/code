function firstCommonAncestor(v, w) {
    var node = v;
    while (node) {
        if (searchSibilings(node, w)) return node.parent;
        else node = node.parent;
    }
    return node;
}

function searchSibilings(v, w) {
    var parent = v.parent;
    if (!parent) return false;
    var sibiling = parent.left === v ? w : v;
    return dfs(sibiling, w);
}

function dfs(v, w) {
    if (v == null) return false;
    if (v == w) return true;
    if (v.left) dfs(v.left);
    if (v.right) dfs(v.right);
}

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
        this.parent = null;
    }
}

function test() {
    var a = new Node('a');
    var b = new Node('b');
    var c = new Node('c');
    a.left = b; a.right = c; c.parent = a; b.parent = a;
    console.log(firstCommonAncestor(b, c));
}

test();