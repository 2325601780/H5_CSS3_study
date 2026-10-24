// const str = 'hello'     //字符串字面量  const str = new String('hello')

// str.name = 'zs'     //str.name = 'zs'
//                     //delete str.name   
//                     //str.[[PrimitiveValue]]
// console.log(str);




// var num = 123
// num.len = 3
// console.log(num)

String.prototype.len = 5
var str = 'abc'
console.log(str.len);

