class EventEmitter {
  constructor() {
    this.callbackMap = {};
  }

  fire(eventName) {
    if (this.callbackMap.hasOwnProperty(eventName)) {
      this.callbackMap[eventName].forEach(callback => {
        callback();
      })
    } else {
      return;
    }
  }

  listenFor(eventName, callback) {
    if (!this.callbackMap.hasOwnProperty(eventName)) {
      this.callbackMap[eventName] = [];
    }
    this.callbackMap[eventName].push(callback);
  }
}

let eventEmitter = new EventEmitter();

eventEmitter.listenFor('testEvent', () => { console.log('testEvent is called') });
eventEmitter.listenFor('testEvent', () => { console.log('another testEvent is called') });

eventEmitter.fire('testEvent');