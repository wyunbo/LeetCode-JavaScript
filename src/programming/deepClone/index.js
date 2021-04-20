function deepClone(source, map = new Map()) {
  if (typeof source === 'object') {
    if (map.get(source)) {
      return map.get(source);
    }
    let target = Array.isArray(source) ? [] : {};
    map.set(source, target);
    for (const key in source) {
      target[key] = deepClone(source[key], map);
    }
    return target;
  }
  return source;
}

// 判断各种类型
function deepClone2(source, map = new Map()) {}
