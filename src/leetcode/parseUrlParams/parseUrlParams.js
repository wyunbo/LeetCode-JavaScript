const parse = (str) => {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=');
    if (!value) {
      return o;
    }
    deepSet(
      o,
      key.split(/[\[\]]/g).filter((v) => v),
      value
    );
    return o;
  }, {});
};
const deepSet = (o, path, value) => {
  let i = 0;
  for (; i < path.length - 1; i++) {
    if (o[path[i]] === undefined) {
      if (path[i].match(/^\d+$/)) {
        o[path[i]] = [];
      } else {
        o[path[i]] = {};
      }
    }
    o = o[path[i]];
  }
  o[path[i]] = decodeURIComponent(value);
};
export default parse;
