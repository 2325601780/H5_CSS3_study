function a(){
    console.log(myname);
}
function b(){
    var myname = 'ls'
    a()
}
var myname = 'ww'
b()
function c(){
    console.log(1);
}
c()



function foo (){
    var myname = '张三'
    var age = 18
    function bar (){
        console.log(myname)
    }
    return bar
}

var baz = foo()
baz()