/*
Write an emitter class:

emitter = new Emitter();

// 1. Support subscribing to events.
sub = emitter.subscribe('event_name', callback);
sub2 = emitter.subscribe('event_name', callback2);

// 2. Support emitting events.
// This particular example should lead to the `callback` above being invoked with `foo` and `bar` as parameters.
emitter.emit('event_name', foo, bar);

// 3. Support unsubscribing existing subscriptions by releasing them.
sub.release(); // `sub` is the reference returned by `subscribe` above

*/ 

var Subscription = function(event, callback, emitter) {
  this.e = event;
  this.cb = callback;
  this.emitter = emitter;
};

Subscription.prototype.release = function() {
  let subs = this.emitter.subscriptions[this.e];
  for (let i = 0; i < subs.length; i++) {
    if (this === subs[i]) {
      subs.splice(i, 1);
    }
  }
  if (subs.length === 0) {
    delete this.emitter.subscription[this.e];
  }
  this.emitter = null;
  this.cb = null;
  this.e = null;
};

var Emitter = function() {
  /** @property {Subscription[]} */
  this.subscriptions = {};
};

Emitter.prototype.subscribe = function(event, callback) {
  let subscription = new Subscription(event, callback, this);
  if (!this.subscriptions.hasOwnProperty(event)) {
    this.subscriptions[event] = [subscription];
  } else {
    this.subscriptions[event].push(subscription);
  }
  return subscription;
};

Emitter.prototype.emit = function(event, ...args) {
  if (this.subscriptions.hasOwnProperty(event)) {
    for (let i = 0; i < this.subscriptions[event].length; i++) {
      this.subscriptions[event][i].cb.apply(null, args);
    }
  }
};

let emitter = new Emitter();
let sub1 = emitter.subscribe('testEvent', function(...args) {
  console.log('test callback 1' + args);
});
let sub2 = emitter.subscribe('testEvent', function(...args) {
  console.log('test callback 2' + args);
});

emitter.emit('testEvent', 'hello');
emitter.emit('testEvent', 'world');
sub1.release();
emitter.emit('testEvent', 'again');