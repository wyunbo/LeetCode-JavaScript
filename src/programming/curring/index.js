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
