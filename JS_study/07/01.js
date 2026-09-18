// 1. 三种作用域 + 访问规则

// ========== 全局作用域 ==========
let globalVar = '全局变量'  // 全局作用域，随处可访问

function foo() {
  // ========== 函数作用域 ==========
  let funcVar = '函数内变量'  // 函数作用域，外部无法访问

  console.log(globalVar)  //  内层可以访问外层
  console.log(funcVar)    //  自己的作用域

  // ========== 块级作用域 ==========
  {
    let blockVar = '块级变量'  // let/const + {} 形成块级作用域
    console.log(blockVar)  //  块内可访问
    console.log(funcVar)   //  内层访问外层函数作用域
  }

  // console.log(blockVar)  //  ReferenceError: 块外不能访问块内
}

foo()

// console.log(funcVar)  //  ReferenceError: 外层不能访问函数内层
