const add = (function (length) {
  let allArgs = [];
  function _add(...args) {
    allArgs = [...allArgs, ...args];
    if (allArgs.length >= length) {
      let sum = allArgs.reduce((pre, cur) => pre + cur, 0);
      allArgs.length = 0;
      return sum;
    } else {
      return _add;
    }
  }
  return _add;
})(5);
// uncurring
Function.prototype.uncurring = function () {
  var self = this; // this代表当前函数
  return function () {
    let obj = Array.prototype.shift.call(arguments);
    return self.apply(obj, arguments);
  };
};
let push = Array.prototype.push.uncurring();
(function () {
  push(arguments, 4, 5);
  console.log(arguments);
})(1, 2, 3);
