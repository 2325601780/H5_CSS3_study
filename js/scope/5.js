// var a = 1 
// var a = 2
// console.log(a)



// console.log(a)

// let a = 1


// let a = 1
// let a = 2
// console.log(a)

// if(true){
//     var a = 1
// }
// console.log(a)

// if(true){
//     let a = 1  // 块级作用域

// }
// console.log(a)

// if(true){
//     let a = 2
//     var b = 3
// }
// console.log(b)

// {
//     var a = 1
// }
// console.log(a)

// {
//     let a = 1
// }
// console.log(a)


var a = 100
if(true){                  //暂时性死区
    console.log(a)
    let a = 1000
}