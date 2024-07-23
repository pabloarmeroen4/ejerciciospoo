let weak = new WeakMap();
let obj = {};
weak.set(obj,'valor1 del weak')
console.log(weak.get(obj));