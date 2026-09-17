function add(a,b,c){
    return a+b+c;
}

const curriedAdd = curry(add)

function curry(fn){
    return function (...args) {
        return fn.apply(this, args);
    }
}

console.log(curriedAdd(1)(2)(3));
