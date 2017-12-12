/*
 * [68] Text Justification
 *
 * https://leetcode.com/problems/text-justification
 *
 * algorithms
 * Hard (19.61%)
 * Total Accepted:    64.5K
 * Total Submissions: 328.1K
 * Testcase Example:  '[""]\n0'
 *
 * 
 * Given an array of words and a length L, format the text such that each line
 * has exactly L characters and is fully (left and right) justified.
 * ⁠
 * 
 * 
 * You should pack your words in a greedy approach; that is, pack as many words
 * as you can in each line. Pad extra spaces ' ' when necessary so that each
 * line has exactly L characters.
 * 
 * 
 * 
 * Extra spaces between words should be distributed as evenly as possible. If
 * the number of spaces on a line do not divide evenly between words, the empty
 * slots on the left will be assigned more spaces than the slots on the
 * right.
 * 
 * 
 * 
 * For the last line of text, it should be left justified and no extra space is
 * inserted between words.
 * 
 * 
 * 
 * For example,
 * words: ["This", "is", "an", "example", "of", "text", "justification."]
 * L: 16.
 * 
 * 
 * 
 * Return the formatted lines as:
 * 
 * [
 * ⁠  "This    is    an",
 * ⁠  "example  of text",
 * ⁠  "justification.  "
 * ]
 * 
 * 
 * 
 * 
 * Note: Each word is guaranteed not to exceed L in length.
 * 
 * 
 * 
 * click to show corner cases.
 * 
 * Corner Cases:
 * 
 * 
 * A line other than the last line might contain only one word. What should you
 * do in this case?
 * In this case, that line should be left-justified.
 * 
 * 
 */

var Cache = function(L) {
  this.L = L;
  this.clear();
};

Cache.prototype = {
  constructor: Cache,
  clear() {
    this.content = [];
    this.length = 0;
  },

  canAdd(word) {
    if (this.length === 0) return true;

    return (this.length + word.length + this.content.length <= this.L);
  },

  add(word) {
    if (word) this.content.push(word);
    this.length += word.length;
  },

  getJustified() {
    let res = '';
    let spaceCount = Math.floor((this.L - this.length) / (this.content.length - 1));
    let extraSpace = (this.L - this.length) % (this.content.length - 1);

    if (this.content.length === 1) {
      // Corner case
      res += this.content[0];

      for (let i = 0; i < this.L - this.length; i++) {
        res += ' ';
      }
    } else {
      for (let i = 0; i < this.content.length; i++) {
        res += this.content[i];
        if (i === this.content.length - 1) continue;

        for (let j = 0; j < spaceCount; j++) {
          res += ' ';
        }
        if (i < extraSpace) {
          res += ' ';
        }
      }
    }

    return res;
  }
};

/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
  let cache = new Cache(maxWidth);
  let i = 0;
  let res = [];
  
  while (i < words.length) {
    while (i < words.length && cache.canAdd(words[i])) {
      cache.add(words[i]);
      i++;
    }

    res.push(cache.getJustified());
    cache.clear();
  }

  if (cache.length > 0) res.push(cache.getJustified());

  res[res.length - 1] = leftAlign(res[res.length - 1], maxWidth);

  return res;
};

function leftAlign(line, L) {
  let trimmed = line.replace(/\s\s+/g, ' ');
  for (let i = trimmed.length; i < L; i++) {
    trimmed += ' ';
  }
  return trimmed;
}
