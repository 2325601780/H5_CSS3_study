console.log(String({a:1}));

// ToPrimitive({a: 1}, String)
// 1. 调用 {a: 1}.toString()，如果得到一个原始值，则返回
// 2. 调用 {a: 1}.valueOf()，如果得到一个原始值，则返回
// 3. 否则，报错


//1.  {a: 1}.toString()   发生了什么 
//2.  function toString() {
//   ToObject(this)
// }
//3.  "[object Object]"

console.log(String([1]));

// ToPrimitive([], String)
// 1. 调用 [].toString()，如果得到一个原始值，则返回    ''
// 2. 调用 [].valueOf()，如果得到一个原始值，则返回
// 3. 否则，报错