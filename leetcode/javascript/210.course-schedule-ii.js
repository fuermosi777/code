/*
 * [210] Course Schedule II
 *
 * https://leetcode.com/problems/course-schedule-ii
 *
 * algorithms
 * Medium (27.93%)
 * Total Accepted:    65.7K
 * Total Submissions: 235.4K
 * Testcase Example:  '2\n[[1,0]]'
 *
 * 
 * There are a total of n courses you have to take, labeled from 0 to n - 1.
 * 
 * Some courses may have prerequisites, for example to take course 0 you have
 * to first take course 1, which is expressed as a pair: [0,1]
 * 
 * 
 * Given the total number of courses and a list of prerequisite pairs, return
 * the ordering of courses you should take to finish all courses.
 * 
 * There may be multiple correct orders, you just need to return one of them.
 * If it is impossible to finish all courses, return an empty array.
 *  
 * 
 * For example:
 * 2, [[1,0]]
 * There are a total of 2 courses to take. To take course 1 you should have
 * finished course 0. So the correct course order is [0,1]
 * 
 * 4, [[1,0],[2,0],[3,1],[3,2]]
 * There are a total of 4 courses to take. To take course 3 you should have
 * finished both courses 1 and 2. Both courses 1 and 2 should be taken after
 * you finished course 0. So one correct course order is [0,1,2,3]. Another
 * correct ordering is[0,2,1,3].
 * 
 * Note:
 * 
 * The input prerequisites is a graph represented by a list of edges, not
 * adjacency matrices. Read more about how a graph is represented.
 * You may assume that there are no duplicate edges in the input
 * prerequisites.
 * 
 * 
 * 
 * click to show more hints.
 * 
 * Hints:
 * 
 * This problem is equivalent to finding the topological order in a directed
 * graph. If a cycle exists, no topological ordering exists and therefore it
 * will be impossible to take all courses.
 * Topological Sort via DFS - A great video tutorial (21 minutes) on Coursera
 * explaining the basic concepts of Topological Sort.
 * Topological sort could also be done via BFS.
 * 
 * 
 */

function DirectedGraph(V) {
  this.V = V;
  this.adj = [];
  this.order = [];
  this.visited = [];
  this.hasCycle = false;
  this.onStack = [];
  for (let i = 0; i < this.V; i++) {
    this.adj[i] = [];
  }
}

DirectedGraph.prototype.add = function(v, w) {
  this.adj[v].push(w);
};

DirectedGraph.prototype.dfs = function(v) {
  this.onStack[v] = true;
  this.visited[v] = true;
  for (let w of this.adj[v]) {
    if (!this.visited[w]) {
      this.dfs(w);
    } else if (this.onStack[w]) {
      this.hasCycle = true;
      return;
    }
  }
  this.order.push(v);
  this.onStack[v] = false;
};

DirectedGraph.prototype.topologicalOrder = function() {
  if (this.V > 0 && this.order.length === 0) {
    for (let i = 0; i < this.V; i++) {
      if (!this.visited[i]) {
        this.dfs(i);
      }
    }
  }

  let res = [];
  if (this.hasCycle) return res;
  while (this.order.length > 0) {
    res.push(this.order.pop());
  }
  return res;
};

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
  let g = new DirectedGraph(numCourses);
  for (let pre of prerequisites) {
    g.add(pre[1], pre[0]);
  }

  return g.topologicalOrder();
};
