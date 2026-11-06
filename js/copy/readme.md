# 递归
1. 找公式
2. 找出口


# 拷贝
克隆一份原对象，得到一份新对象

- 浅拷贝：将原对象的属性值直接赋值给新对象，如果原对象的属性值是引用类型，那么新对象的属性值是引用类型的地址
Object.assign({}, obj)
[].slice(0)

- 深拷贝：将原对象中的所有子对象，层层拷贝，引用地址都是全新的
JSON.parse(JSON.stringify(obj))   //无法处理bigInt,undefined,NaN,Infinity,函数
structuredClone(obj)