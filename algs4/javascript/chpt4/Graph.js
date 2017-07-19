class Graph {
  constructor(v) {
    this.V = v;
    this.E = 0;
    this.adj = [];
    for (let i = 0; i < v; i++) {
      this.adj[i] = [];
    }
  }
  V() {
    return this.V;
  }
  E() {
    return this.E;
  }
  addEdge(v, w) {
    this.adj[v].push(w);
    this.adj[w].push(v);
    this.E += 1;
  }
  adj(v) {
    return this.adj[v];
  }
}