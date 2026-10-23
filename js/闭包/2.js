function bar (){
    var myName = 'zs'
    let test1 = 100
    if(1){
        let myName = 'ls'
        console.log(test)
    }
}

function foo() {
  var myName = 'ww'
  let test = 2
  {
    let test = 3
    bar()
  }
}
var myName = 'ls'
let myAge = 18
let test = 1
foo()