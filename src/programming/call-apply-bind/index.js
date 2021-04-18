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
    context[symbol](args);
    delete context[symbol];
  }

  function bind2(context, ...outerArgs) {
    return (...args) => this.call2(context, ...outerArgs, ...args);
  }

  prototype.call2 = call2;
  prototype.apply2 = apply2;
  prototype.bind2 = bind2;
})(Function.prototype);

function getInfo(age, home) {
  console.log(this.name, age, home);
}
let obj = { name: 'LeBron' };
getInfo.call2(obj, 36, 'Cleveland');
getInfo.apply(obj, [36, 'Cleveland']);

let bindInfo = getInfo.bind(obj, 36);
bindInfo('Cleveland');
