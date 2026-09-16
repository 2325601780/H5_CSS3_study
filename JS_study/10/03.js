function foo(){                  
    console.log(this.name)
}                         

const obj = {
    name: '张三'
}

Function.prototype.myCall = function(context, ...args){   //rest参数  [4,5]剩余所有参数的收集
    context = context || window
    const fn = Symbol('fn')
    context[fn] = this
    context[fn](...args)
    delete context[fn]
}

Function.prototype.myApply = function(context, args){
    return this.myCall(context, ...args)
}

Function.prototype.myBind = function(context, ...args){
    context = context || window
    const _this = this
    return function f(...argF){
        if(this instanceof f){
            return new _this(...args, ...argF)
        }
        return _this.myApply(context, ...args, ...argF)
    }
}

foo.MyCall(obj)