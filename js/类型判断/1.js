let myname = {a:1}

function greeting(name) {
    if(typeof name == 'string') {
        return `i am ${name}`
    }
    return 'not string'
}

console.log(greeting(myname));


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

// console.log(typeof s);
// console.log(typeof num);
// console.log(typeof f);
// console.log(typeof u);
// console.log(typeof n);   // object
// console.log(typeof sy);
// console.log(typeof big);

// console.log(typeof arr);  // object
// console.log(typeof obj);   // object
// console.log(typeof fn);   // function


let o = {}

if (typeof o == 'object' && o !== null) {

}