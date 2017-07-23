var BreadthFirstPaths = function(Graph, s) {
  this.marked = [];
  this.edgeTo = [];
  this.s = s;
  this.bfs(G, s);
};

BreadthFirstPaths.prototype = {
  constructor: BreadthFirstPaths,

  bfs(G, s) {
    let queue = [];
    marked[s] = true;
    queue.push(s);
    while (queue.length > 0) {
      let v = queue.shift(); // dequeue
      let adjs = G.adj(v);
      for (let w of adjs) {
        if (!marked[w]) {
          queue.push(w);
          edgeTo[w] = v;
          marked[w] = true;
        }
      }
    }
  }
}

export default BreadthFirstPaths;