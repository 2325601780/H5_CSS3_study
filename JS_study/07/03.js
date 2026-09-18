// 3. 词法作用域（静态作用域）
// 函数的作用域在"定义时"就确定了，而不是"调用时"

// ========== 例1：词法作用域 ==========
let name = 'global'

function foo() {
  // foo 在全局定义，所以它的词法作用域是全局
  // 即使在 bar 中被调用，name 仍然是 'global'
  console.log(name)  // 'global'
}

function bar() {
  let name = 'bar'  // 这是 bar 的局部变量，不影响 foo
  foo()  // 调用 foo 时，foo 仍访问全局的 name
}

bar()  // 输出: 'global'  ← 词法作用域，看定义位置


// ========== 例2：对比动态作用域 ==========
let city = '北京'

function getCity() {
  // 定义时，词法环境是全局，city = '北京'
  return city
}

function show() {
  let city = '上海'
  return getCity()  // 虽然在 show 中调用，但 getCity 仍取全局的 '北京'
}

console.log(show())  // '北京'  ← 不是 '上海'


// ========== 例3：闭包也体现词法作用域 ==========
function outer() {
  let count = 0

  function inner() {
    // inner 定义在 outer 内部，词法作用域包含 outer
    // 所以能访问 count
    count++
    console.log(count)
  }

  return inner
}

const fn = outer()  // outer 执行完，但 inner 的词法作用域仍引用 count
fn()  // 1
fn()  // 2
// count 被 inner 的词法作用域保存下来（这就是闭包）
