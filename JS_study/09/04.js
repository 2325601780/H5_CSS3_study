// 1. 父类
function Parent() {
  this.name = '张三'                  // 实例属性
  this.hobbies = ['游泳', '读书']   // 引用类型属性
}

// 父类原型方法
Parent.prototype.say = function () {
  console.log('我是' + this.name)
}

// 2. 子类
function Child() {
  Parent.call(this)    
  this.sex = '男'            
}


Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child

const c1 = new Child()

