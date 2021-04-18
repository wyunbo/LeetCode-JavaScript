// If Array
// const arr = [
//   1,
//   2,
//   3,
//   4,
//   [1, 2, 3, [1, 2, 3, [1, 2, 3]]],
//   5,
//   'string',
//   { name: '弹铁蛋同学' },
// ];
// console.log(arr instanceof Array);
// console.log(arr.constructor === Array);
// console.log(Object.prototype.toString.call(arr) === '[object Array]');

// 1. concat + 递归

// no strict
// const flat = (arr) => {
//   if (!arr) return null;
//   let res = [];
//   arr.forEach((item) => {
//     if (Array.isArray(item)) {
//       res = res.concat(arguments.callee(item));
//     } else {
//       res.push(item);
//     }
//   });
//   return res;
// };

const flat = (arr) => {
  if (!arr) return null;
  let res = [];
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      res = res.concat(flat(item));
    } else {
      res.push(item);
    }
  });
  return res;
};

// 2. reduce
const flat2 = (arr) => {
  return arr.reduce((p, v) => {
    return p.concat(Array.isArray(v) ? flat2(v) : v);
  }, []);
};

// 3. stack
const flat3 = (arr) => {
  const res = [];
  const stack = [...arr];
  while (stack.length !== 0) {
    const val = stack.pop();
    if (Array.isArray(val)) {
      stack.push(...val);
    } else {
      res.unshift(val);
    }
  }
  return res;
};

// 4. depth
const flat4 = (arr, depth) => {
  return depth > 0
    ? arr.reduce(
        (pre, cur) =>
          pre.concat(Array.isArray(cur) ? flat4(cur, depth - 1) : cur),
        []
      )
    : arr.slice();
};

// 5. Generator

// 6. While
const flat6 = (arr, depth) => {
  while (depth > 0 && arr.some((item) => Array.isArray(item))) {
    arr = [].concat(...arr);
    depth--;
  }
  return arr;
};

// 7. toString
const flat7 = (arr) => {
  return arr
    .toString()
    .split(',')
    .map((item) => Number(item));
};

// 8. stringify
const flat8 = (arr) => {
  return JSON.stringify(arr)
    .replace(/\[|\]/g, '')
    .split(',')
    .map((item) => Number(item));
};

export { flat, flat2, flat3, flat4, flat6, flat7, flat8 };
