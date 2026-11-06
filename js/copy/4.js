let obj = {
    age: 18,
    name: 'zs',
    like: {
        n: '打瓦',
        m: '三角洲',
    }
}

function deepCopy(obj){
    let res = {}
    for(let k in obj) {
        if(obj.hasOwnProperty(k)){
            if(typeof obj[k] == 'object' && obj[k] !== null) {
                res[k] = deepCopy(obj[k])
            }else{
                res[k] = obj[k]
            }
        }
    }
    return res
}

console.log(deepCopy(obj));
