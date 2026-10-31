function Promise(fn) {
    this.state = 'pending'      // 准备状态
    const resolve = () => {
        this.state = 'resolved'     // 成功状态
    }
    const reject = () => {}

    fn(resolve, reject)

}



new Promise((resolve, reject) => {
    resolve()
})