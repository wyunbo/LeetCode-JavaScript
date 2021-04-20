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
