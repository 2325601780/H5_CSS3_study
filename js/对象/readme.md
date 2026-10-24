# 对象
- 万物皆对象

1. 原始类型：string,number,boolean,null,undefined,symbol,bigint
2. 引用类型：object,array,function

- 创建对象的方式有哪些
1. 字面量
2. new Object()
3. new 一个构造函数

- 函数有二义性：可以普通调用，也可以new 调用

- new 的工作原理：
 1. new 会往函数内凭空创建一个this对象
 2. 执行函数中的对象
 3. 让这个对象的原型 等于 函数的原型    this.__proto__ = Xxx.prototype
 3. return 这个this对象

# 包装类
- 原始类型是不能添加属性和方法的
- v8 在对象中查找属性，如果找不到，就会去它的原型上去找

1. 当用户创建一个字面量，v8 会默认执行成 new Xxx()
2. 因为原始类型不能增加属性和方法，所以 v8 在 new 出这个实例对象后，立即会做一个拆箱操作
3. str.length length是String函数原型上的属性，并不是给字符串增加的属性