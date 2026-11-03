# 类型
1. 原始类型：number, string, boolean, null, undefined, bigint, symbol
2. 引用类型：array, function, object, date

# typeof
1. 可以准确的判断除了 null 之外的所有原始类型
2. 所有的引用类型在 typeof 眼里都是object，除了function

- typeof 是通过将值转换为二进制来判断类型的，二进制前三位为零的统一被判断为引用类型，在计算机中，所有引用类型被转为二进制前三位都是零（除了函数），而 null 转换为二进制是一整串零

# instanceof
1. 只能判断引用类型，无法判断原始类型
2. 它是通过隐式原型链来查找 right.prototype 是否出现在 left 的原型链上

https://es5.github.io/#x15.2.4.2
# Object.prototype.toString(x)
1. 如果 this 值为 undefined，则返回 "[object Undefined]"。
2. 如果此值为 null，则返回 "[object Null]"。
3. 令 O 为调用 ToObject 并将 this 值作为参数传递所得到的结果。 
// const O = ToObject(this)     ToObject的作用是对Number等类型new Number(x)
// 没有.call(x), O 永远都是 Object
4. 令class为O的[[Class]]内部属性的值。 // const class = O.[[class]]
5. 返回将三个字符串 "[object "、class 和 "]" 拼接后得到的字符串值。

# Object.prototype.toString.call(x)
// Object.prototype.toString = function() { 
    // const O = ToObject(this)   // this == new Number(123) 
    // const class = O.[[class]]  // { [[class]]: Number } 
    // return "[object " + class + "]"    // '[object Number]' 
}

# Array.isArray()