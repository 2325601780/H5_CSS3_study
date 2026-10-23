function add(){
    let count = 0
    return function(){
        count++
        return count
    }
}

var bar = add()

console.log(bar());
console.log(bar());
console.log(bar());
