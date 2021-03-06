/*
 * [133] Clone Graph
 *
 * https://leetcode.com/problems/clone-graph
 *
 * Medium (25.09%)
 * Total Accepted:    
 * Total Submissions: 
 * Testcase Example:  '{}'
 *
 * 
 * Clone an undirected graph. Each node in the graph contains a label and a
 * list of its neighbors.
 * 
 * 
 * 
 * 
 * OJ's undirected graph serialization:
 * 
 * 
 * Nodes are labeled uniquely.
 * 
 * 
 * We use # as a separator for each node, and , as a separator for node label
 * and each neighbor of the node.
 * 
 * 
 * 
 * 
 * As an example, consider the serialized graph {0,1,2#1,2#2,2}.
 * 
 * 
 * 
 * The graph has a total of three nodes, and therefore contains three parts as
 * separated by #.
 * 
 * First node is labeled as 0. Connect node 0 to both nodes 1 and 2.
 * Second node is labeled as 1. Connect node 1 to node 2.
 * Third node is labeled as 2. Connect node 2 to node 2 (itself), thus forming
 * a self-cycle.
 * 
 * 
 * 
 * 
 * Visually, the graph looks like the following:
 * 
 * ⁠      1
 * ⁠     / \
 * ⁠    /   \
 * ⁠   0 --- 2
 * ⁠        / \
 * ⁠        \_/
 * 
 * 
 * 
 * 
 */
/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

function cloneNode(node) {
  if (node === null) return null;

  let cloned = new UndirectedGraphNode(node.label);
  node.cloned = cloned;
  for (let n of node.neighbors) {
    if (!n.cloned) {
      cloned.neighbors.push(cloneNode(n));
    } else {
      cloned.neighbors.push(n.cloned);
    }
  }
  return cloned;
}

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph) {
  let cloned = cloneNode(graph);

  return cloned;
};
