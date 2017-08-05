var DigraphNode = require('./DigraphNode');

var Digraph = function(v) {
  this.V = v;
  this.E = 0;
  this.nodes = new Map();
};

Digraph.prototype = {
  constructor: Digraph,

  V() {
    return this.V;
  },

  E() {
    return this.E;
  },

  /**
   * @param {DigraphNode} v
   * @param {DigraphNode} w
   * @return {void}
   */
  addEdge(v, w) {
    if (!this.nodes.has(v)) {
      this.nodes.set(v, []);
    } 
    this.nodes.get(v).push(w);
    this.E += 1;
  },

  adj(v) {
    return this.nodes.get(v) || null;
  },

  /**
   * @return {Digraph}
   */
  reverse() {
    let res = new Digraph(this.V);
    for (let [v, adj] of this.nodes) {
      for (let w of adj) {
        res.addEdge(w, v);
      }
    }
    return res;
  }
};

module.exports = Digraph;