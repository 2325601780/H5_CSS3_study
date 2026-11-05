# == 和 ===
== 在判断类型是否相等时会自动进行隐式类型转换

# 类型转换
1. 显示类型转换
 - String(x) -> ToString(x)
 - Number(x) -> ToNumber(x)
 - Boolean(x) -> ToBoolean(x)

## 引用类型转字符串
 - String({a:1}) -> ToString({a:1}) -> ToPrimitive({a:1}, String)
 - ToPrimitive({a:1}, String)
  1. 调用{a:1}.toString(),如果得到一个原始值，则返回
  2. 调用{a:1}.valueOf(),如果得到一个原始值，则返回
  3. 报错

  - Number({a:1}) -> ToNumber({a:1}) -> ToPrimitive({a:1}, Number)
  - ToPrimitive({a:1}, Number)
  1. 调用{a:1}.valueOf(),如果得到一个原始值，则返回
  2. 调用{a:1}.toString(),如果得到一个原始值，则返回
  3. 报错

 * valueOf() 只能将包装类的对象转成原始值

 - 所有的引用类型转 布尔 都是 true

### toString()  一共有三种
 1. Object.prototype.toString()  //返回 "[object Object]"
 2. [].toString()               // 返回数组内部元素以逗号拼接成的字符串
 3. xx.toString()               //返回 "xx"



2. 隐式类型转换，什么时候发生
 - 四则运算 + - * / %
 - 判断语句：if  while  switch  ==  >=  <=  !=  >  <

 - +作为一元运算符  +'1' -> 1  (朝 number 转)
 - +作为二元运算符
  x + y
  // 令 lprim 为 ToPrimitive(x)
  // 令 rprim 为 ToPrimitive(y) 的结果
  // lprim + rprim
  // 如果 lprim 或 rprim 有一个是字符串，就将另一个也转成字符串进行拼接
  // 否则全部转 number 进行相加