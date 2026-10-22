let str = 'hello world'  //string 类型

let str2 = str + 'js'

str2 = `${str} js`

// console.log(str2[5])
// console.log(str2.at(-1))

// console.log(str2.slice(0, 5))

// let num = 123  //number
// let num2 = num + 0.1
// console.log(num2.toString())
// console.log(num2 + '5')

// let n = 1
// let m = "2"
// console.log(n + Number(m))
// console.log(9007199254740992 + 1)  //2**53

// if (NaN) {     //boolean 布尔
//     console.log('true')
// }


// let u = undefined
// console.log(u + '')

//let n = null

// let b = 123123123n  //bigint 
// let c = 9007199254740992n

// console.log(b + c)

// let a = 'hello'
// let b = 'hello'

// console.log(a === b)

// let b = 1
// let c = '1'

// console.log(b == c)
// console.log(b === c)

let s = Symbol('hello')
let p = Symbol('hello')
console.log(s == p)