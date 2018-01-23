var flights = [
  {from: 'SFO', to: 'CKG', price: 1000},
  {from: 'SFO', to: 'PEK', price: 500},
  {from: 'SFO', to: 'DAL', price: 600},
  {from: 'DAL', to: 'CKG', price: 150},
  {from: 'PEK', to: 'CKG', price: 100},
  {from: 'SFO', to: 'CAN', price: 200},
  {from: 'CAN', to: 'DAL', price: 150}
];

class Node {
  constructor(name) {
    this.name = name;
    this.destinations = [];
  }
  addDestination(node, price) {
    this.destinations.push({node, price});
  }
}

function lowestCost(flights, from, to, k /* max stops */) {
  let map = new Map(); /* string, Node */
  for (let i = 0; i < flights.length; i++) {
    let flight = flights[i];
    let fromNode, toNode;
    if (map.has(flight.from)) {
      fromNode = map.get(flight.from);
    } else {
      fromNode = new Node(flight.from);
      map.set(flight.from, fromNode);
    }
    if (map.has(flight.to)) {
      toNode = map.get(flight.to);
    } else {
      toNode = new Node(flight.to);
      map.set(flight.to, toNode);
    }
    fromNode.addDestination(toNode, flight.price);
  }
  
  let min = {cost: Infinity};
  fly(map.get(from), from, to, min, 0, 0, k);

  return min.cost;
}

function fly(node, from, to, min, cost, k, maxK) {
  if (k - 1 > maxK) return; // too many stops
  if (node.name === to) {
    min.cost = Math.min(min.cost, cost);
    return;
  }
  for (let i = 0; i < node.destinations.length; i++) {
    let dest = node.destinations[i];
    if (dest.node.name !== from) {
      fly(dest.node, from, to, min, cost + dest.price, k + 1, maxK);
    }
  }
}

console.log(lowestCost(flights, 'SFO', 'CKG', 2));