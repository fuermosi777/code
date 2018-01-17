var a = {};

Object.defineProperty(a, 'f1', {
  get() {
    return f1;
  },
  set(val) {
    console.log('val changed');
    f1 = val;
  }
});

a.f1 = 'shit2'
console.log(a.f1)