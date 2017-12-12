## FRONT END

http://www.1point3acres.com/bbs/thread-215351-1-1.html

给你两个string, 找说他们的common prefix

leetcode 的text justification

要求写一个function， 可以一直传进去带priority 的task， 每次调用这个function的时候，总是执行priority 最大的task。  我说可以用max-heap 来做，但是js没有内置的heap。于是就变成了如何用js实现一个heap

convert a binary tree to threaded binary tree

---

http://www.1point3acres.com/bbs/thread-205034-1-1.html

第一轮：算法

给出 wifi 发射点的覆盖距离，和一些 1D 的房子坐标，求需最少要几个 wifi 发射点（one pass 就能解出来）. From 1point 3acres bbs
follow up：给出最多可以安装的发射点的数量，求发射点最覆盖距离（用房子总长除以发射点数量得到最大覆盖距离，用二分法套到第一个解写出来的函数里不断尝试从1到最大覆盖）

第二轮：

第一题：上了一段写的很烂的代码，让你简化，把一些写的烂的地方变成可以理解的。这个就是考大家平时写代码的习惯，比如不该用 loop 的时候别用 loop，可以用 if else 的时候别用 swift。. 1point 3acres 璁哄潧
第二题：求两个 string 的 common prefix（从头开始比较即可）
follow up：怎么优化（用二分法）

第三轮：

考察简单的用 JS 处理数据的思路。说给一个网页，跟一个 getHash 函数，求返回页面里所的 img，要求用 hash 去重。就用简单的 DOM API，中间需要用到 promise（或者 callback）来获取 image data 给 getHash 用来计算 hash。用什么不重要，主要看你习不习惯 JS 里面的 async flow control。
. From 1point 3acres bbs
第四轮：. visit 1point3acres.com for more.

要求实现 querySelectorAll。没思路，没答好，感觉应该看看 jQuery 源代码就没问题。
. 鍥磋鎴戜滑@1point 3 acres
第五轮：

Decode string，输入 2[ab]2[c3[d]]，要求输出 ababcdddcddd。只考虑重复的部分是 letter 的情况。但是就像大家已经看到的，[ ] 是可以套多层的。用 stack 或者 recursion 都可以做。懒得设计 stack 怎么存了，就用了 recursion。

---

用js 写trie search

---

http://www.1point3acres.com/bbs/thread-144999-1-1.html

#1 website optimization
#2 cross-site scripting (xss)
coding: implement getElementbyClassName without any APIs 

---

http://www.1point3acres.com/bbs/thread-225553-1-1.html


## Glassdoor


Minesweeper problem. Write a function reveal() that outputs the number of tiles shown when a user clicks on a tile. Each tile shows the number of bombs as its neighbor. If the user click on a tile that is a bomb, the game is over. If that tile is 0, reveal all its neighbors.  

---

Find k-nearest points

---

I had to do recursion in a tree to find values. Similar to a find common parents algorithm

---

Implement a deferred event handler that recursively walks up the tree to determine whether to fire.  

---

What all happens in a browser when you click on a link?  

---


