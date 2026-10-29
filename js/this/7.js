// function foo() {        // 函数声明
//     console.log(this);
    
// }

// foo()

// var bar = function() {      // 函数表达式

// }

// bar()

// var baz = (x, y) => {
//     return x + y
// }

// console.log(baz(2, 5));

// var fn = () => {
//     console.log(this.a);
// }

// var obj = {
//     a: 1,
//     fn: fn
// }
// obj.fn()

function foo() {
    var fn = () => {
        this.a = 2
    }
    fn()
}
var obj = {
    a: 1,
    bar: foo
}
obj.bar()
console.log(obj.a);

