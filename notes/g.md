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

电面：. 鍥磋鎴戜滑@1point 3 acres
白人小哥，设计一个Tree的Class，要支持插入，查找和删除（整个sub tree). 插入时要带一个callback function删除时叫。删除时要从上层往下层呼叫callback，BFS。就这样一条水题，小哥人很好。貌似一年前地里也有人面了一样的题也是白人小哥，莫非这白人小哥是长期发糖的？

白人中哥，说是在google做了11年了。一开始因为有Angular经验就问了一下，结果因为最近一年都是在修改，忘记大部分Angular语法了,主要是如何实现directive之间的沟通，随便水了下。然后问了JSON的特性，以company为例写一个例子包含json的所有特性，随便写了个不靠谱的例子。follow up：用js object来写company来体现js object的特性，用{}语法写了个。结果follow up问哪些是static function, private function和public function.直接蒙了，{}语法全都是static。所以用function语法重写了。再follow up就是如何继承。 

中国人大哥，带着强大的气场进来，小弟直接被镇住了。开始问问js基础，closure scope ==之类的。然后算法题很简单，数组里找最大的连续和，只返回最大和。lc的简单题，但是因为被气场压制了，紧张的回答了它的进阶版，说了two pointer。演算是发现那两个pointer根本没鸟用，大哥说没关系我也要，没挺准这句的意思，导致后面改edge case的时候大哥一直说不对，结果原来已经进入了进阶版的状态。 

白人小哥，问了下基础CSS问题,然而因为CSS基础很差，听不懂术语。想问的angular题被问了就直接算法。LC的原题，求一个矩阵对角线是否对称。做出了检验是否矩阵和正方形的情况，准备推广到长方形时时间到了。最后闲聊时突然想到就提了一下解题思路。

分不清是阿三哥还是中东人，不是那种标准阿三的长相，但是也像。唯一一个是JAVA的老兄。设计题，设计negativeIterator，地里有说明，不重复了。 剩下15分钟做一个check all的html checkbox。

亚裔，名字像是日本人，英语完美。一上来问CSS，理所当然的答错了。然后设计一个comparator可以让Array.sort用。是用来sort file path的：
abc
cde/mbc
cde/efg/a
cde/efg/b

要求file优先于folder，字母顺序次之。一开始没看到file优先的条件，做出来被提醒，改了之后只能使用第一层，于是放入while loop里面。最后问run time。回答O(N)，被告知不对，因为while里面用了shift，所以是O(N^2)；可以用pop然后reverse（然后就在下就说出了一开始提到的傻话）

---


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


