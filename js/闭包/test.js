var arr = []

for(var i=1;i<=5;i++){
    let j = i
    arr.push(function(){
        console.log(j)
    })
}

for(let n = 0;n<arr.length;n++){
    arr[n]()
}