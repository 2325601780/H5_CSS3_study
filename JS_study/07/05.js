// 5. 经典面试题：for 循环中的 var vs let

// ========== 用 var：三个都打印 3 ==========
// 原因：var 没有块级作用域，i 是函数作用域（这里相当于全局）
// 循环结束后 i === 3，定时器回调执行时访问的 i 都是同一个
for (var i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log('var:', i)  // var: 3 / var: 3 / var: 3
  }, 100)
}

// ==========  用 let：正常打印 0 1 2 ==========
// 原因：let 有块级作用域，每轮循环创建新的 i
// 每个定时器回调引用的是自己那一轮的 i
for (let j = 0; j < 3; j++) {
  setTimeout(() => {
    console.log('let:', j)  // let: 0 / let: 1 / let: 2
  }, 200)
}


// ========== 解法：用 IIFE 闭包保存当时的 var i ==========
for (var k = 0; k < 3; k++) {
  ;(function (index) {
    // 每次循环创建一个新函数作用域，保存当时的 index
    setTimeout(() => {
      console.log('IIFE:', index)  // IIFE: 0 / IIFE: 1 / IIFE: 2
    }, 300)
  })(k)
}


// ========== 等价理解：let 相当于自带闭包 ==========
// for (let j = 0; j < 3; j++) 等价于：
// 第1轮: { let j = 0; setTimeout(() => console.log(j)) }  ← j 被块级作用域捕获
// 第2轮: { let j = 1; setTimeout(() => console.log(j)) }
// 第3轮: { let j = 2; setTimeout(() => console.log(j)) }
// 每个 j 都是独立的变量
