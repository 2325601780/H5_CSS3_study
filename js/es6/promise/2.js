let a = null

function A() {
    // 向后端请求数据 耗时 1s
    setTimeout(() => {
        a = 100
        B()
    }, 1000)
}

function B() {
    // 将得到的数据渲染到页面上
    console.log(a);
    
}

A()
