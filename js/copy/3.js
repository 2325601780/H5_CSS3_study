let obj = {
    age: 18,
    name: 'zs',
    like: ['打瓦','三角洲']
}

// let oo = Object.assign({}, obj)
// obj.like[0] = 'ys'


function shallowCopy(obj) {
    let newObj = Array.isArray(obj) ? [] : {}
    for(let k in obj) {
        if(obj.hasOwnProperty(k)){
            newObj[k] = obj[k]
        }
    }
    return newObj
}

let oo = shallowCopy(obj)
obj.like[0] = 'ys'
console.log(oo); 