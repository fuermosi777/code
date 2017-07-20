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
  delete this.emitter.subscriptions[this.e];
};

var Emitter = function() {
  this.subscriptions = {};
};

Emitter.prototype.subscribe = function(event, callback) {
  this.subscriptions[event] = new Subscription(event, callback, this);
  return this.subscriptions[event];
};

Emitter.prototype.emit = function(event, ...args) {
  if (this.subscriptions.hasOwnProperty(event)) {
    this.subscriptions[event].cb.apply(null, args);
  }
};

let emitter = new Emitter();
let sub = emitter.subscribe('testEvent', function(...args) {
  console.log(args);
});

emitter.emit('testEvent', 1, 2);
emitter.emit('testEvent', 3, 4);
sub.release();
emitter.emit('testEvent', 5, 6);