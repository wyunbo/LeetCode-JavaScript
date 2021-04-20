function printOrder(urlArr, callback) {
  let result = {};
  function sendRequest(url, index) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
        result[index] = xhr.response;
        if (Object.keys(result).length == urlArr.length) {
          result.length = Object.keys(result).length;
          callback(null, Array.from(result));
        }
      }
    };
    xhr.send();
  }
  urlArr.forEach(function (url, index) {
    sendRequest(url, index);
  });
}
