Question pool (the order matters):

- FE: design and implement a table component
- product of last K
- bunker

  - http://shortn/_D5G4IXJGNs, http://shortn/_HMbhlBLfP4
  - What if messages may be dropped?
  - optimize the algorithm by minimizing the number of book exchanges - spanning tree

    B
    /
    A---C

    B--D
    /
    A---C

```ts
class Bunker {
  isInitiator: boolean;
  parent = null;
  neighbors: Bunker[];
  index = -1;

  // Send a message to self.
  send(receiver: Bunkder, content: any) {}

  constructor() {
    this.sent = new Set();
  }

  onReceive(sender: Bunker, msg: any) {
    if (!this.parent && !this.isInitiator) {
      // Other bunkder receives stuff for the first time.
      this.parent = sender;

      if (this.neighbors.length > 1) {
        // Starts to send info to neighbors.
        let nextNeighbor;
        while (!nextNeighbor && this.index < this.neighbors.length>) {
          nextNeighbor = this.neighbors[this.index];
          if (nextNeighbor === this.parent) {
            nextNeighbor = null;
          }
          this.index += 1;
        }
        this.send(nextNeighbor, 0);
      } else {
        // No neighbors except for the parent, send self's info back to parent.
        this.send(this.parent, msg + 1);
      }
    } else if (this.sent.has(sender)) {
      this.population += msg;
    } else {
      // The msg comes from a cycle, send it back and do nothing.
      this.send(sender, 0);
    }
  }
}
```

Algo + DS
number of valid metrics: https://docs.google.com/document/d/1QseU25zSUEyHc5HAwcA4rBu5-6cTK2nIiLjp3sPzMiU/edit#

Algo + DS
FTE score: https://ideas.corp.google.com/InterviewQuestions/view?idea=2595&f_field=text&f_status=idle&f_tags=%22Algorithms%22&sort=approval
1. [Verbal] What is the score for each eid in the given example?
   1. 5,3,1,1,1
2. [Verbal] In what cases do we say the map is invalid?
   1. One FTE must report to one and only one except for the CEO
   2. Only one CEO
   3. No loop
3. [Warmup] Write a function, input is an employee ID, output is the FTE score. The map is a global variable you can access anywhere.
   1. Assume the map is valid.
   2. Time complexity?
4. [Main] Assume the function in the last question will be called again and again with different input eid, how do we optimize the efficiency of lookup?
   1. Assume the map is valid and no not.
   2. The map can be changed.
   3. No CEO eid.
5. [ExtraScore] Is full report?
