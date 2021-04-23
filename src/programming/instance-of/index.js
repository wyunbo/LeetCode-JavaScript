const instanceOf = (L, R) => {
  let O = R.prototype;
  L = L.__proto__;
  while (true) {
    console.log(L, O);
    if (L === null) return false;
    if (L === O) return true;
    L = L.__proto__;
  }
};
console.log(instanceOf([], Array));
console.log(instanceOf('', Array));
console.log(instanceOf(Function, Object));
console.log(instanceOf(() => {}, Function));
