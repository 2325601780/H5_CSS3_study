function Parent() {
  this.name = '张三'
  this.age = 18
}

function Child() {
  this.sex = '男'
}

Child.prototype = new Parent()

c1 = new Child()
console.log(c1.__proto__.constructor)
console.log(Child.prototype)
