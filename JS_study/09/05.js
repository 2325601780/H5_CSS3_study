class Parent {
  constructor() {
    this.name = '张三'
    this.age = 18
  }
}

class Child extends Parent {
  constructor() {
    super()
    this.sex = '男'
  }
}