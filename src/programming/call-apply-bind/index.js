!(function (prototype) {
  function getDefaultContext(context) {
    context = context || window;
    let type = typeof context;
    //   if(['number', 'boolean', 'string'].includes(type)){
    //       context = new context.constructor(context);
    //   }
    return Object(context);
  }
  function call2(context, ...args) {
    context = getDefaultContext(context);
    let symbol = Symbol('fn');
    context[symbol] = this;
    context[symbol](...args);
    delete context[symbol];
  }

  function apply2(context, args) {
    context = getDefaultContext(context);
    let symbol = Symbol('fn');
    context[symbol] = this;
    context[symbol](...args);
    delete context[symbol];
  }

  function bind2(context, ...outerArgs) {
    return (...args) => this.call2(context, ...outerArgs, ...args);
  }

  // 支持new
  Object.create = function (proto) {
    function F() {}
    F.prototype = proto;
    return new F();
  };
  function bind3(context, ...outerArgs) {
    var thatFunc = this,
      fBound = function (...innerArgs) {
        return thatFunc.call(
          this instanceof thatFunc ? this : context,
          ...outerArgs,
          ...innerArgs
        );
      };
    fBound.prototype = Object.create(thatFunc.prototype);
    return fBound;
  }

  prototype.call2 = call2;
  prototype.apply2 = apply2;
  prototype.bind2 = bind2;
  prototype.bind3 = bind3;
})(Function.prototype);

function getInfo(age, home) {
  console.log(this.name, age, home);
}
let obj = { name: 'LeBron' };
getInfo.call2(obj, 36, 'Cleveland');
getInfo.apply2(obj, [36, 'Cleveland']);
let bindInfo = getInfo.bind2(obj, 36);
bindInfo('Cleveland');

let bindInf3 = getInfo.bind3(obj, 36);
bindInf3('Cleveland');
function Person(name) {
  this.name = name;
}
Person.prototype.getInfo = function (age, home) {
  console.log(this.name, age, home);
};

let bindInfo3 = Person.bind3(null, 'LeBron');

new bindInfo3().getInfo(36, 'Cleveland');
