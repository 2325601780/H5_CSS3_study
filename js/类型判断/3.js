let s = 'hello'
let num = 123
let f = true
let u = undefined
let n = null
let sy = Symbol(1)
let big = 12343242n

let arr = []
let obj = {}
let fn = function(){}

console.log(Object.prototype.toString.call(s));
console.log(s.constructor === String);
console.log(Object.prototype.toString.call(num));
console.log(Object.prototype.toString.call(arr).slice(8, -1));
console.log(Object.prototype.toString.call(fn).slice(8, -1)); // '[object Function]'

