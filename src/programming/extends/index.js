var _extends = (function () {
  var extendStatics = function (Child, Father) {
    return Object.setPrototypeOf(Child, Father);
  };
  return function (Child, Father) {
    extendStatics(Child, Father);
    function Temp() {
      this.constructor = Child;
    }
    Temp.prototype = Father.prototype;
    Child.prototype = new Temp();
  };
})();

Object.create = function (proto) {
  function F() {}
  F.prototype = proto;
  return new F();
};
function _new(clazz, ...args) {
  let _this = Object.create(clazz.prototype);
  let result = clazz.call(_this, ...args);
  if (
    (result != null && typeof result === 'object') ||
    typeof result === 'function'
  ) {
    return result;
  }
  return _this;
}
