/**
 * 王位继承，长子及其后代有优先继承权，然后是次子及其后代，依次类推。完成birth(parentname, childname)和death(name)以及输出王位继承顺序三个function
 */

class Person {
  constructor(name) {
    this.name = name;
    this.children = [];
    this.parent = null;
  }
}

class Inherit {
  constructor() {
    /** @type {Map<string, Person>} */
    this.people = new Map();
  }

  /**
   * @param  {string} parentname
   * @param  {string} childname
   * @return {void}
   */
  birth(parentname, childname) {
    let parent = this.people.get(parentname) || new Person(parentname);
    let child = this.people.get(childname) || new Person(childname);
    parent.children.push(child);
    child.parent = parent;

    this.people.set(parentname, parent);
    this.people.set(childname, child);
  }

  /**
   * @param  {string} name
   * @return {void}
   */
  death(name) {
    let person = this.people.get(name);
    if (!person) return;

    for (let i = 0; i < this.person.parent.children.length; i++) {
      if (this.person.parent.children[i] === this.person) {
        this.person.parent.children.splice(i, 1);
      }
    }

    this.people.delete(name);
  }

  /**
   * @return {string[]}
   */
  sequence(kingname) {
    let seq = [];
    let king = this.people.get(kingname);
    if (!king) return;
    for (let i = 0; i < king.children.length; i++) {
      this.dfs(king.children[i], seq);
    }

    return seq;
  }

  dfs(person, seq) {
    if (!person) return;
    seq.push(person.name);
    for (let i = 0; i < person.children.length; i++) {
      this.dfs(person.children[i], seq);
    }
  }
}

let i = new Inherit();

i.birth('a', 'b');
i.birth('a', 'c');
i.birth('b', 'd');
i.birth('b', 'e');
i.birth('b', 'f');
i.birth('f', 'g');
i.birth('c', 'h');
i.birth('c', 'i');

console.log(i.sequence('a'))