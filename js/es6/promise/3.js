function xq() {
    // Promise 内部拥有一个状态 state = pending
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('xq');
            resolve()
        }, 2000)
    })
}

function marry() {
    setTimeout(() => {
        console.log('marry');
    }, 1000)
}

xq().then(() => {
    marry()
})