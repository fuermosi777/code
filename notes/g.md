## Links:

http://www.1point3acres.com/bbs/forum.php?mod=collection&action=view&ctid=84995

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

> LC 53 124 523

白人小哥，问了下基础CSS问题,然而因为CSS基础很差，听不懂术语。想问的angular题被问了就直接算法。LC的原题，求一个矩阵对角线是否对称。做出了检验是否矩阵和正方形的情况，准备推广到长方形时时间到了。最后闲聊时突然想到就提了一下解题思路。

> LC 498 223 391

分不清是阿三哥还是中东人，不是那种标准阿三的长相，但是也像。唯一一个是JAVA的老兄。设计题，设计negativeIterator，地里有说明，不重复了。 剩下15分钟做一个check all的html checkbox。

亚裔，名字像是日本人，英语完美。一上来问CSS，理所当然的答错了。然后设计一个comparator可以让Array.sort用。是用来sort file path的：
abc
cde/mbc
cde/efg/a
cde/efg/b

要求file优先于folder，字母顺序次之。一开始没看到file优先的条件，做出来被提醒，改了之后只能使用第一层，于是放入while loop里面。最后问run time。回答O(N)，被告知不对，因为while里面用了shift，所以是O(N^2)；可以用pop然后reverse（然后就在下就说出了一开始提到的傻话）

---

http://www.1point3acres.com/bbs/thread-279509-1-1.html

---

http://www.1point3acres.com/bbs/thread-205549-1-1.html

---

http://www.1point3acres.com/bbs/thread-217122-1-1.html

第一轮：前端设计。设计一个tilt maze游戏，先从数据结构入手，在提示下选择了graph，然后写了整个class来描述球的移动，然后到如何将数据翻译成游戏地图，最后大致讨论了如何写html/css将游戏呈现到UI。

第二轮：algorithm。题目是写一个combined iterator class，输入是list<Iterator>，next()要按iterator的顺序依次return每个iterator的element。用queue解决了。

第三轮：前端设计。这一轮按照安排本来是考algorithm，但还是考的前端设计。主题是form validators。先从最简单的问题入手，讨论了validator的作用，如何提高安全性，然后开始在白板上写一个最简单的form validator来验证username。写完后面试官不断诱导，又让我加入后端验证和validation info display，最后加入limitor去限制单位时间内的user input。

第四轮：前端设计。面试官很奇怪，上来问我想要他出什么题，我也不知道说什么，然后他就列举了几个让我选，感觉都没有写过，就随便选了一个前端cache的题。大概就是以request为key，response为value。以前没写过类似的cache，加上面试官举了个很奇怪的例子，花了很长时间我才理解题意。写的很差，毫无疑问挂在了这一轮。

第五轮：algorithm。题目是生成tournament对阵顺序，输入是队伍支数，输出为对阵顺序。例如有8只队伍参赛，用数值表示球队能力值，1最强，8最弱。每一轮要求最强跟最弱对阵，次强跟次弱对阵。。。强者始终胜出。[1, 8, 4, 5, 2, 7, 3, 6] -> [1, 4, 2, 3] -> [1, 2] ->[1]。所以这里输入是8，输出是[1, 8, 4, 5, 2, 7, 3, 6]。我只提出了O(nlogn)的解法，用map<Integer, List>来存每一轮的对阵，key是list中最强队伍，然后不断merge，最终得出对阵序列。然后讨论了一下如何O(n)，大致就是不断展开：[1] -> [1, 2] -> [1, 4, 2, 3] -> [1, 8, 4, 5, 2, 7, 3, 6]。

---

http://www.1point3acres.com/bbs/thread-226722-1-1.html youtube 前端

---

http://www.1point3acres.com/bbs/thread-280663-1-1.html

其实这次面试槽点满满，不过不在这里吐了-google 1point3acres
面的是偏前端的role 所以 有两轮专问前端，主要集中在 search, autocomplete ui, trie 这些topic 都是用javascript写
还有三轮coding ， 2046 游戏划一下update board status， 看着简单其实容易有bug；乐扣三丝洞， 用常规方法秒了，然后让优化算法（虽然最后我并不觉得那是最优的。。。）；给一个unsorted array 切开分别sort 在按切的顺序合并后必须是原来的sorted array，求如何切，先是假定数字在1-n 然后去掉这个假定咋做； 乐扣额要伞；
总体来讲算法部分有些难度，主要是思路的部分，有了思路写code很轻松，还有建议大家练习一下在题难的状态下如何情绪不受影响而写出bug free的code

---

http://www.1point3acres.com/bbs/thread-210141-1-1.html

---

Other shits:

http://www.geeksforgeeks.org/auto-complete-feature-using-trie/

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

http://www.1point3acres.com/bbs/thread-314139-1-1.html

---

5

CS fundamental algorithm data structure

1. html
2. pace of answering - ask qualifying question, verbal, n = 10, 32 int triple ai + aj + ak < n
http://www.geeksforgeeks.org/find-a-sorted-subsequence-of-size-3-in-linear-time/

3. longest path of tree  longest of array - 
4. topological
  - find circle in a directed graph
  
5. what to add to html, js , pace of answering

JavaScript, mountain view


TODO:

- LC300, https://www.geeksforgeeks.org/longest-consecutive-sequence-binary-tree/
- Topological, find circle