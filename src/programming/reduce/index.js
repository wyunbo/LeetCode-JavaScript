Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== 'function' || !this.length) {
    return [];
  }
  let hasInititalValue = initialValue !== undefined;
  let value = hasInititalValue ? initialValue : this[0];
  for (let i = hasInititalValue ? 0 : 1; i < this.length; i++) {
    const el = this[i];
    value = callback(value, el, i, this);
  }
  return value;
};

let arr = [1, 2, 3, 4, 5];
let res = arr.myReduce((pre, cur, i, arr) => {
  console.log(pre, cur, i, arr);
  return pre + cur;
}, 10);
console.log(res); //25
