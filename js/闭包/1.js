// function bar(){
//     console.log(myName)
// }

// function foo(){
//     var myName = 'zs'
//     bar()
// }

// var myName = 'ls'
// foo()


let count = 1
function main() {
    let count = 2
    function bar() {
        let count = 3
        // function foo() {
        //     console.log(count)
        // }
        foo()
    }
    bar()
}
function foo() {
    console.log(count)
}
main()