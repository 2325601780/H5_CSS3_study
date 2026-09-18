// 2. 块级作用域：var vs let/const 的区别

// ========== var 没有块级作用域，会泄漏到外层 ==========
{
  var varInBlock = 'var 声明的变量'
  let letInBlock = 'let 声明的变量'
}

console.log(varInBlock)  // 'var 声明的变量'  var 不受 {} 限制
// console.log(letInBlock)  //  ReferenceError  let 受块级作用域限制


// ========== var 在 if 语句中也会泄漏 ==========
if (true) {
  var x = 10
  let y = 20
}
console.log(x)  //  10  var 泄漏到外层
// console.log(y)  //  ReferenceError  let 受限于 if 块


// ========== 函数作用域对 var/let 都生效 ==========
function test() {
  var a = 1
  let b = 2
}
// console.log(a)  //  ReferenceError  函数作用域内 var 也无法外访
// console.log(b)  //  ReferenceError


// ========== 同一作用域 var 可重复声明，let 不行 ==========
var m = 1
var m = 2  //  var 允许重复声明
console.log(m)  // 2

let n = 1
// let n = 2  //  SyntaxError: Identifier 'n' has already been declared
