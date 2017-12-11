1. What's closure?

A function and the variables it can use.

2. What is "this"? Meet the following code:

```
var obj = {
  foo: function(){
    console.log(this)
  }
}

var bar = obj.foo
obj.foo() // obj
bar() // window
```

There are three normal ways to use a function:

- `func(p1, p2)` = `func.call(undefined, p1, p2)` -> undefined will print window if not strict mode
- `obj.method(p1, p2)` = `obj.method.call(obj, p1, p2)`
- `func.call(context, p1, p2)`

```
btn.addEventListener('click' ,function handler(){
  console.log(this)
})

handler.call(event.currentTarget, event);
```

3. What's diff between `console.log` and `console.dir`?

4. box-sizing, inline, inline-block and block

box-sizing default content-box, width = content's width
border-box, width = content + padding + border width

box-sizing: https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing

block/inline: https://quirksmode.org/css/css2/display.html#block

5. What will happen after I input an url in a browser and hit enter?

https://stackoverflow.com/questions/2092527/what-happens-when-you-type-in-a-url-in-browser

6. CSRF

https://www.ibm.com/developerworks/cn/web/1102_niugang_csrf/

7. Array.slice() and Array.splice()

slice() creates a shallow copy of array: HTMLElements to array -> Array.prototype.slice.call(xxx)
splice() remove or insert element to an array

8. Cookie, sessionStorage, localStorage

https://www.quora.com/What-is-the-difference-between-sessionstorage-localstorage-and-Cookies

9. long polling, websockets

http://www.jianshu.com/p/d3f66b1eb748

10. `<script>` defer vs async

https://segmentfault.com/q/1010000000640869

12. array vs object?

13. map vs forEach?

14. What's DOM's data structure?

15. If a balanced DOM tree has n nodes, what's its depth?

O(logn)

16. There are five basic data type: Undefined, Null, Boolean, String, and Number

17. What is website accessibility and how to improve the accessibility of a website?

Web accessibility means that people with disabilities can use the Web. 

- Use ALT attr for images
- Tab indexes
- Use access key

18. CSS preprocessor

Used Less and Sass.

Pros:

- Modularization
- Reduse redundancy using variables and mixins
- Better architecture (e.g. colors) 
- Code reuse
- Nested, easy to read

Cons: 

- Need an engine first
- Too many nested layers may cause low performance

19. 

https://medium.com/javascript-scene/master-the-javascript-interview-what-s-the-difference-between-class-prototypal-inheritance-e4cd0a7562e9

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create

20. What's event loop?

https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop

