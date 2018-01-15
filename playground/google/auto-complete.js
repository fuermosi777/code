'use strict';

class Node {
  constructor(val) {
    this.val = val;
    this.next = [];
  }
}

class Trie {
  constructor(words) {
    this.root = new Node();

    words.forEach(this.add.bind(this));

    console.log('n', this.root);
  }

  add(word) {
    let node = this.root;
    for (let i = 0; i <= word.length; i++) {
      let code = word.charCodeAt(i);
      if (!node.next[code]) {
        node.next[code] = new Node();
      }
      if (i === word.length) {
        node.val = true;
      }

      node = node.next[code];
    }
  }

  /**
   * @param  {string} prefix
   * @return {string[]}
   */
  withPrefix(prefix) {
    let node = this.root;
    let res = [];
    
    for (let i = 0; i < prefix.length; i++) {
      let code = prefix.charCodeAt(i);
      if (!node) break;

      node = node.next[code];
    }

    console.log(node)

    this.collect(node, prefix, res);

    return res;
  }

  collect(node, pre, arr) {
    if (!node) return;
    if (node.val) {
      arr.push(pre);
    }
    for (let i = 0; i < node.next.length; i++) {
      this.collect(node.next[i], pre + String.fromCharCode(i), arr);
    }
  }
}

function throttle(func, wait) {
  let t;
  return function(...args) {
    if (!t) {
      setTimeout(() => {
        func(...args);
      }, wait);
    }
  }
}

(function() {
  const hintDict = [
    'google', 'get you', 'go go go', 'go get help', 'go', 'g letter', 'ga', 'google map', 'go get some sleep', 'go get some help', 'abc is what', 'google is falling', 'google translate'
  ];
  var hintList = [];

  document.querySelector('input').addEventListener('keyup', throttle(handleInputKeyup, 300));
  document.querySelector('.hints').addEventListener('click', handleHintClick);

  let trie = new Trie(hintDict);

  function handleInputKeyup(e) {
    const text = e.target.value;

    hintList = trie.withPrefix(text);

    updateView();
  }

  function handleHintClick(e) {
    if (e.target.nodeName === 'LI') {
      document.querySelector('input').value = e.target.textContent;
      hintList = [];
      updateView();
    }
  }

  function updateView() {
    const hints = document.querySelector('.hints');
    hints.innerHTML = '';

    if (hintList.length === 0) {
      hints.classList.add('hide');
    } else {
      hints.classList.remove('hide');
      hintList.forEach(hint => {
        let li = document.createElement('li');
        li.textContent = hint;
        hints.appendChild(li);
      });
    }
  }
})();