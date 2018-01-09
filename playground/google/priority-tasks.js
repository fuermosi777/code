/**
 * Give a list of tasks of priorities, always run the task with the highest priority
 *
 * [{priority: 6, task: func}]
 */

class TaskRunner {
  constructor(task = null) {
    this.tasks = [];
    this.size = 0;

    if (task) this.addTask(task);
  }

  sink() {
    let i = 1;
    while (i <= this.size) {
      let task = this.tasks[i];
      let child = this.tasks[i * 2];
      let childIndex = i * 2;
      if (!child) break;

      let rightChild = this.tasks[childIndex + 1];
      if (rightChild && rightChild.priority > child.priority) {
        child = rightChild;
        childIndex = childIndex + 1;
      }
      
      if (task.priority < child.priority) {
        this.swap(i, childIndex);
        i = childIndex;
      } else {
        break;
      }
    }
  }

  swim() {
    let i = this.size;
    while (i >= 1) {
      let task = this.tasks[i];
      let parentIndex = i / 2 | 0;
      let parent = this.tasks[parentIndex];

      if (!parent) break;

      if (parent.priority < task.priority) {
        this.swap(i, parentIndex);
        i = parentIndex;
      } else {
        break;
      }
    }
  }

  swap(i, j) {
    let t = this.tasks[i];
    this.tasks[i] = this.tasks[j];
    this.tasks[j] = t;
  }

  topTask() {
    return this.tasks[1];
  }

  addTask(task) {
    this.tasks[this.size + 1] = task;
    this.size += 1;
    this.swim();
  }

  runTask() {
    if (this.size === 0) return;

    this.tasks[1].task.call(null);

    this.swap(1, this.size);

    this.tasks[this.size] = null;

    this.size -= 1;

    this.sink();
  }
}

let task1 = {priority: 1, task: () => { console.log(1); }}
let task4 = {priority: 4, task: () => { console.log(4); }}
let task3 = {priority: 3, task: () => { console.log(3); }}
let task5 = {priority: 5, task: () => { console.log(5); }}

let taskRunner = new TaskRunner();
taskRunner.runTask();
taskRunner.addTask(task3);
taskRunner.addTask(task4);
taskRunner.addTask(task1);
taskRunner.runTask(); 
taskRunner.addTask(task5);
taskRunner.runTask(); 
taskRunner.runTask(); 
taskRunner.runTask(); 

