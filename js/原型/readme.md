# 原型 prototype（显示原型）
1. 函数天生拥有的一个属性
2. 我们可以将一些属性的原型和方法挂载到原型上，在创建实例后，实例属性就可以调用这个属性和方法
3. 我们也可以将一些共用的属性和方法添加到原型上，减少构造函数在执行时的开销
4. 实例对象无法修改原型上的属性值

- 实例对象中显示拥有的属性 来自于 构造函数中定义的属性
- 实例对象中隐示拥有的属性 来自于 构造函数的原型上

# 对象原型 __proto__ (隐式原型)
1. 每个对象都拥有 __proto__ 属性，该属性也是一个对象
2. v8 在访问对象中的一个属性时，先访问对象中显示存在的属性，如果没有，就会去对象的隐式原型中查找
3. 实例对象的隐式原型 === 构造函数的显示原型

4. constructor 构造器属性，记录该实例对象是由谁创建的

# 原型链
v8 在访问对象中的一个属性时，先访问对象中显示存在的属性，如果没有，就会去对象的隐式原型中查找，如果还没有。就会顺着隐式原型一直往上找，直到找到null为止，这个查找关系，就叫原型链查找


const f1 = new Foo()
1. f1.__proto__ = Foo.prototype
2. Foo.prototype.__proto__ = Object.prototype
3. Object.prototype.__proto__ = null

4. Foo.__proto__ = Function.prototype
5. Function.prototype.__proto__ = Object.prototype

6. Function.__proto__ = Function.prototype