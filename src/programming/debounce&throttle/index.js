function debounce(callback, wait) {
  let timeout;
  return function () {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(callback, wait);
  };
}

function throttle(func, delay) {
  let prev = Date.now();
  return function () {
    let context = this;
    let args = arguments;
    let now = Date.now();
    if (now - prev >= delay) {
      func.apply(context, args);
      prev = now;
    }
  };
}
