11:00-12:00，一位面试官。题目是给了个地图，上面有很多点， 每个点是个object, x, y 坐标都给了， 比如{x: 5, y: 5}
已知 包含所有点的 array, 某一个点，和半径d, 写一个function 返回到这个点的距离小于或等于d 的所有点。. From 1point 3acres bbs
怎么优化。我当时答得是把整个地图分成小的区域，每一小块2d的正方形。然后找这个点所在的方块和周围的几个方块。这样就不用遍历地图里所有的点了。.1point3acres缃�

12:00-1:00，吃饭. LinkedIn的食堂的饭还是很好吃的。. visit 1point3acres.com for more.
. more info on 1point3acres.com
1:00-2:00。还是两位面试官。 系统设计。linkedin新加的功能, 页面的右下角可以发messenger. 
对于messenger这个feature, 先列一下有哪些功能要实现。然后对每个功能讲讲怎么实现。

2:00-2:45，这一轮和manager聊，学习经历和工作经历，全程聊天穿插一些behavior question。你想给LinkedIn增加哪些新功能。 

2:45-3:30。product and cultule fit。 说一个你最喜欢的应用， 为什么喜欢，还有哪些需要改进的地方。你想给LinkedIn增加哪些新功能（这一轮又问到了）。


3:30 - 4:15。 写个function 来 parse query string. 先让你写个带query string的url. 
http://example.com/over/there?name=ferret&id=1  parse完后生成一个object {name: "ferret", id: "1"}
followup 1: http://example.com/over/there?name=ferret&name=tom&id=1 parse完后生成一个object {name: [", id: "1"}
生成的object 没有写全。应该是 {name: ["ferret", "tom"], id: "1"}
followup 2: 如果url是encode,要先decode

---

1. 设计一个dashboard，dashboard是一个地图，当有新用户注册账号时，需要实时在dashboard上显示用户位置？
. 1point 3acres 璁哄潧
follow up：前端用什么library？(d3.js)，需要向前端发送哪些数据？（经纬度或者geohash），push vs pull？怎么实现push service？（消息队列）？怎么测试？

2. js，
第一题，输入数组endorsements：
输入格式是
endorsements = [{skill: 'javascript', user: 'user1'}, {skill: 'css', user: 'user2'}, {skill: 'html', user: 'user3'}, {skill: 'javascript', user: 'user2'}, {skill: 'css', user: 'user3'}, {skill: 'javascript', user: 'user3'}]
输出
[{skill: 'javascript', users:['user1', 'user2', 'user3'], count: 3}, {skill: 'css', users:['user2', 'user3'], count: 2},  {skill: 'html', users: ['user3'], count: 1}]
follow up: 输出需要按照count排序

用了一个map把skill作为key，遍历endorsements数组处理，然后用Object.values(map)输出结果。

. Waral 鍗氬鏈夋洿澶氭枃绔�,
第二题，给一个url：
http://www.linkedin.com?q1=v1&q2=v2
写一个函数提取query string，返回 鏉ユ簮涓€浜�.涓夊垎鍦拌鍧�. 
{q1: 'v1', q2: 'v2'}
有点坑，需要考虑没query string，或者有fragement的情况http://www.linkedin.com?q1=v1&q2=v2#xxx
这样子的话就要写regular expression进行处理

3. ui
写一个类似于点赞功能的ui，点赞之后旁边的数字+1，取消之后-1
写html的时候问了怎么改进accessiblity和symentic？用了一些<header><footer>之类的标签，加了role属性。.1point3acres缃�
写了个js函数来处理button toggle，事件绑定在外层容器上用了事件代理来处理点击操作

---

Onsite 一共7轮，包括吃饭在内也算1轮（吃饭的人也要写 comment）。

Round 1：JavaScript 算法

Q1：给两个 dom element，判断第二个是不是第一的 child。child 可能不是直接 child。解法是从第二个开始找 parent element，直到找到 HTML element 都找不到的话就返回 false。
Q2：Leetcode 273，要考虑小数


Round 2：culture fit


Round 3：product + design taste

. Waral 鍗氬鏈夋洿澶氭枃绔�,
Round 4：吃饭。领英的饭还是甩其他家几条街的，有糖醋排骨。


Round 5：用网页写一个带简单 UI 的计算器。有点 Leetcode 224 的意思，但是 UI 的行为要符合简单的计算器，比如屏幕上显示 1 的时候，输入 2，要变成12，但是显示 0 的时候，输入 1，就要变成 1。Edge case 比较多，要好好跟考官交流。一开始只让写有 + 跟 = 就行了。写的不太好，这里又我面试完写的完全版： https://gist.github.com/d6u/2e982bdc965e14ce12a545e6996f0af4 大家可以一起交流。带 +、-、*、/。面试的时候提了 reverse polish notation 但是没用。


Round 6：用 JavaScript 做简单的数据处理，其实就是实现 lodash 的 groupBy。然后探讨下怎么搞 search box auto suggest。


Round 7：Architecture


设计一个 hangman game（Google 一下你就知道）。就是猜字游戏。没有什么 mass scale 的要求，主要注重小功能的实现。比如 HTTP response 的数据结构，数据要不要存 database 里，掉线了怎么重建游戏。后来会一直改 requirement，随机应变就好。

就聊天，聊到某个时候就突然来个问题，绝对答案，比如什么时候用 optimistic update，什么时候会让用户感觉比较顺畅。需要平时积累，多看看 smashing magazine 就能应答如流了。

---


前天去的领英sunnyvale office onsite，为了面试请了两天假。面完后连夜飞回美东接着上班，因为基本上在飞机上就没睡，昨天一天上班都处于懵逼状态。。。今天终于恢复过来了，趁着周五上班比较清闲，来写写面经，攒攒人品~
onsite前一天HR把每一轮的具体时间，内容，以及面试官的LinkedIn Profile链接发给了我。我数了一下，算上中午带着吃饭的lunch大使，一共11位面试官。除了其中某一轮有位华人MM，剩下的全是老美。onsite从早晨9点45开始，一直到下午4点15结束，加上吃饭一共七轮。之前看地里的领英前端面经，貌似只有在职跳槽的前端candidate要面七轮，new grad好像只要五轮。。。
9:45-10:00, HR带着参观下办公室，然后带到一个小会议室，桌子上摆着老三样，一张写着candidate名字的欢迎卡片，一张LinkedIn connection map, 显示你LinkedIn账号的所有联系人，还有一些零食和水。然后见了一下之前联系我的Recruiter，寒暄了几句，之后面试正式开始。
10:00-11:00, 两位面试官，让写一个类似tooltip的widget，当用户把鼠标放在LinkedIn页面上某个联系人的名字上时，会出现一个类似tooltip的预览框，里面有该用户的头像，姓名，degree以及title。要求先用HTML以及CSS mock up下大致的layout，然后用AJAX得到所需要显示的用户信息。
11:00-11:45，两位面试官。题目是写一个function实现计算器里的undo以及redo功能。其实就是考数据结构里的stack。最后的拓展题感觉在问system design，问我如果这种undo以及redo操作是用在占据很大存储空间以及用户量很大的data上该怎么办，我说那就给每个数据加上index，undo以及redo只用在index上，最后再用index去取数据。。。
11:45-12:45，吃饭。可能是我之前对LinkedIn的食堂期待过高，结果事实却让我有点失望。。。饭完全没有想象中的那么好吃。。。不过带我吃饭的小哥说食堂每周都换菜单的，估计我正好轮到了不太好吃的那一周。。。
12:45-13:30。还是两位面试官。出了两道题。第一道是之前地里面经里出现过的，Insert links for each of the members into the content div. The link would be like: <a href="profile.jsp?id=<memeber.id>"><member.name></a> 考点就是DOM Manipulation，怎么向DOM Tree里添加新的节点。Follow up是如果有很多member的链接需要一个一个添加到DOM里，会造成reflow影响页面性能，如何解决。第二题是写一个memoization function，思路就是利用hashTable存之前计算出的结果。. 鐗涗汉浜戦泦,涓€浜╀笁鍒嗗湴
13:30-14:15，product and cultule fit。这轮主要就是扯淡。。。问到好多UI以及设计方面的问题，比如谈谈你对client side rendering以及server side rendering的理解，说一个你最喜欢的应用并列举下优缺点，LinkedIn还有哪些需要改进的地方等等等等。。。. 1point 3acres 璁哄潧
14:15-15:15，一位面试官。我本来以为这轮是考system design的，之前猎头也特意跟我说过会有一轮system design，所以我之前花了挺多时间刷system design的，结果这一轮还是考JS。。。问题就是之前领英前端面经里一直出现的leetcode 273，把数字转换成英文，要考虑小数。我本来以为这题是最有把握的，因为之前做过。。。可没想到最后代码居然没写对，有挺多bug的，这可能就叫做大意失荆州吧。。。这一轮估计是跪了。
15:15-16:15，这一轮和manager接着扯淡，全程聊天穿插一些behavior question。最后由manager送客，onsite结束。
总体来说，LinkedIn家的面试体验是很棒的，流程清晰明了，绝对算是一次难得的经历了。至于最后有没有offer那就只能听天命了。。。

---

onsite一共四轮，每轮1小时，中间还有1小时吃饭。
第一轮 manager面： 主要根据简历的情况，很随机地问了很多behaviour的问题，所以简历里写的东西自己一定要熟悉，manager人好好呀，感觉特别亲和，有活力。
第二轮 UI Design？ 我以为这一轮按照HR给的reference,应该是要设计一个网页上的widget什么的，结果没想到不按套路出牌，让design一个 undo feature, 要有通用性，要写一些js代码，后面follow up说如果全组的人都用你这个feature要如何做？楼主表示很懵逼。。。虽然面试官韩国妹妹很亲和，但目测她对我的回答很无语。
第三轮 coding & algorithm 面算法，第一题很简单，回文串的题，follow up是能不能用一行js代码解决，第二题比较复杂，说有一个电子支票，用户输入一个float类型的数之后，把这个数转换成英文单词，比如123.45，转换成" one hundred twenty three and 45 / 100 “ 这种形式，面试官人很好，循循善诱。
第四轮 system design 楼主以为这个是要high level的设计一个系统或者service，包括分析QPS， concurrent user那些，到后台用哪种database存，push or pull，这些，结果完全又不按套路出牌，让设计一个日历，要写detail的HTML和js代码，这一轮的面试小哥非常严肃，提示也比较confusing....楼主表示全程很懵逼，他问的问题也比较随机，看到你写到某个地方的时候，会突然根据你写的提出一个问题，感觉他有点想到什么问什么。
吃饭：LinkedIn食堂顿顿有中餐，这个还是比较赞的，带着吃饭的小哥人也很好，很实在也很健谈，乐意分享。O(∩_∩)O

总结一下：
我觉得这次onsite所面的内容很偏industry，面试官抛出的问题实践性比较强，楼主准备了很多算法，但似乎没有太大用，感觉还是要在平时的学习工作中多积累经验，在做项目写代码的时候多想想为什么要这样做，有没有什么优化的方法，如何reuse,这些问题。最后还是感谢能得到这次onsite的机会，不管最后结果如何，多经历总是好的嘛。最后希望能帮助到地里一起努力奋斗的小伙伴们啦，大家继续一起加油吧！

---

两个前端程序员一起面的，考了基本的POST和GET的区别，event delegation。
然后给了一张图，要求写出实现其图的前端代码，非常基本的CSS。
感觉他们家非常重视jQuery，需要好好看看相关的documentation。

---
