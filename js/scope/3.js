// var a = 1        //全局作用域

// function foo(b){
//     var a = 2
//     console.log(a,b);     //foo的函数作用域
// }

// foo(2)

var a = 1 
function foo(){
    var a = 2
}
foo()
console.log(a)


//var a = 1 
function foo(){
    var a = 2
}
foo()
console.log(a)