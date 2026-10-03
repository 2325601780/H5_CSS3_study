let input = {
    a:1,
    b:[1,2,{c:true},[3]],
    d:{e:4,f:5},
    g:null,
}

let output = {
    'a':1,
    'b[0]':1,
    'b[1]':2,
    'b[2].c':true,
    'b[3][0]':3,
    'd.e':4,
    'd.f':5,
    'g':null,
}

function flattenObj(obj){
    const res = {}
    function dfs(target,oldKey = ''){   //尾递归
        for(let key in target){
            let newKey
            if(oldKey){
                //newKey = `${oldKey}.${key}`
                if(Array.isArray(target)){
                    newKey = `${oldKey}[${key}]`  
                }else{
                    newKey = `${oldKey}.${key}`
                }
            }else{
                newKey = key
            }

            if(typeof target[key] === 'object'&&target[key]!==null){
                dfs(target[key],newKey)
            }else{
                res[newKey] = target[key]
            }
        }
    }
    dfs(obj,'')
    return res
}

console.log(flattenObj(input))