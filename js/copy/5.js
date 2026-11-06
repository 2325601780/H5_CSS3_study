let obj = {
    a: 123n,
    b: undefined,
    c: NaN,
    d: Infinity,
    //e: function(){},
    age: 18,
    name: 'zs',
    like: {
        n: '打瓦',
        m: '三角洲',
    }
}

// const oo = JSON.parse(JSON.stringify(obj))
// obj.like.n = 'ys'
// console.log(oo);

const oob = structuredClone(obj)
console.log(oob);

