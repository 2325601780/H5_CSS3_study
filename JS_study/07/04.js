// 4. 作用域查找规则
// 1. 先在当前作用域查找
// 2. 当前没有 → 去父作用域查找
// 3. 层层往上，直到全局作用域
// 4. 全局也没有 → ReferenceError

// ========== 嵌套作用域查找示例 ==========
let globalName = '全局的 name'

function outer() {
  let outerName = '外层的 name'

  function middle() {
    let middleName = '中层的 name'

    function inner() {
      // 当前作用域没有 globalName/outerName/middleName
      // 查找规则：当前 → middle → outer → 全局
      console.log(middleName)   //  在 middle 作用域找到
      console.log(outerName)    //  在 outer 作用域找到
      console.log(globalName)   //  在全局作用域找到
    }

    inner()
  }

  middle()
}

outer()


// ========== 变量遮蔽（同名变量，内层覆盖外层） ==========
let x = '外层 x'

function shadow() {
  let x = '内层 x'  // 遮蔽了外层的 x
  console.log(x)  // '内层 x'  ← 就近原则，用当前作用域的值
}

shadow()
console.log(x)  // '外层 x'  ← 外层的 x 不受影响


// ========== 找不到时报 ReferenceError ==========
function notFound() {
  // console.log(undefinedVar)  // ❌ ReferenceError: undefinedVar is not defined
}
notFound()
