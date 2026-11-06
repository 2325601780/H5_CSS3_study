Object.prototype.sport = 'running'
let obj = {
    age: 18,
    name: 'zs',
    like: ['打瓦','三角洲']
}

const arr = ['a', 'b', 'c']

for(let key in obj) {
    if(obj.hasOwnProperty(key)){
        console.log(key, obj[key]);    
    }
    
}

for(let key in arr) {
    if(arr.hasOwnProperty(key)){
        console.log(key, arr[key]);    
    }
    
}