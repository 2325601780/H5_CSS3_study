const obj = {       //对象字面量
    name:'zs'
}
obj.age=18
let hello = 'world'

obj[hello] = 123
delete obj[hello]

console.log(obj)