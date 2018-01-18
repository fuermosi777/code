function Person(val) {
  this.val = val;
  this.next = new Set();
  this.manager = null;
}

function ManagementSystem() {
  this.people = new Map();
}

ManagementSystem.prototype.manages = function(m1, e1) {
  let p1 = this.people.get(m1) || new Person(m1);
  let p2 = this.people.get(e1) || new Person(e1);

  p1.next.add(p2);
  p2.manager = p1;

  this.people.set(m1, p1);
  this.people.set(e1, p2);
}

ManagementSystem.prototype.peer = function(e1, e2) {
  let p1 = this.people.get(e1) || new Person(e1);
  let p2 = this.people.get(e2) || new Person(e2);
  if (p1.manager) {
    p2.manager = p1.manager;
    p1.manager.next.add(p2);
  } else if (p1.manager) {
    p1.manager = p2.manager;
    p2.manager.next.add(p1);
  }

  this.people.set(e1, p1);
  this.people.set(e2, p2);
}

ManagementSystem.prototype.isManaging = function(e1, e2) {
  let p1 = this.people.get(e1) || new Person(e1);
  let p2 = this.people.get(e2) || new Person(e2);

  if (!p1.manager && !p2.manager) {
    return false;
  }

  let m = p2.manager;
  while (m) {
    if (m === p1) {
      return true;
    }
    m = m.manager;
  }

  return false;
}

let system = new ManagementSystem();
system.manages('Hao', 'Rag');
system.peer('Rag', 'Vincent');
console.log(system.isManaging('Hao', 'Vincent'));