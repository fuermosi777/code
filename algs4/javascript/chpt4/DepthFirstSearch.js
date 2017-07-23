export default class DepthFirstSearch {
  /**
   * @param  {Graph} G
   * @param  {number} s
   * @return {void}
   */
  constructor(G, s) {
    this.marked = [];
    this.count = 0;
    this.dfs(G, s);
  }

  dfs(G, v) {
    this.marked[v] = true;
    this.count++;
    let adjs = G.adj(v);
    for (let i = 0; i < adjs.length; i++) {
      let w = adjs[i];
      if (!this.marked(w)) {
        dfs(G, w);
      }
    }
  }

  marked(w) {
    return this.marked[w];
  }

  count() {
    return this.count;
  }
}