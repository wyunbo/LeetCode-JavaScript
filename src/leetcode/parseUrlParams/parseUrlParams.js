const parse = (str) => {
  return str.split('&').reduce((o, kv) => {
    const [key, value] = kv.split('=');
    if (!value) {
      return o;
    }
    deepSet(
      o,
      key.split(/[\[\]]/g).filter((x) => x),
      value
    );
    return o;
  }, {});
};
