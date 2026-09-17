// 模拟一个耗时 1 秒的异步函数（如网络请求、复杂计算）
const add = (a, b) => {
  return new Promise((resolve) => {
    console.log('开始计算...')
    setTimeout(() => {
      resolve(a + b)
    }, 3000)
  })
}

const calc = memoize(add)

function memoize(fn) {
  const cache = new Map()
  return async function (...args) {
    const key = args.join(',')   // 数组转字符串作为缓存 key
    if (cache.has(key)) {
      console.log('命中缓存')
      return cache.get(key)
    }
    const result = await fn(...args)
    cache.set(key, result)
    return result
  }
}

// 测试：第一次等 1 秒，第二次命中缓存瞬间返回
;(async () => {
  console.time('第一次调用')
  console.log(await calc(1, 2))
  console.timeEnd('第一次调用')   // 约 1000ms

  console.time('第二次调用')
  console.log(await calc(1, 2))
  console.timeEnd('第二次调用')   // 约 0ms
})()
