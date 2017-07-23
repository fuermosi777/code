export default class Graph {
  constructor(v) {
    this.V = v;
    this.E = 0;
    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }

  /**
   * The total account of vectors
   * @return {number}
   */
  V() {
    return this.V;
  }

  /**
   * Total number of edges
   * @return {number}
   */
  E() {
    return this.E;
  }

  /**
   * Add an edge between v and w
   * @param {number} v
   * @param {number} w
   * @return {void}
   */
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.E += 1;
  }

  /**
   * Get all adjunct vectors of v
   * @param  {number} v
   * @return {number[]}
   */
  adj(v) {
    return this.adj[v];
  }
}