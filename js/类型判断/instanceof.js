function myInstanceof(left, right) {
    if(typeof left !== 'object' && typeof left !== "function" || typeof left == null) {
        return false
    }
    let rProto = right.prototype
    while(left !== null) {
        if(left.__proto__ == rProto) {
            return true
        }
        left = left.__proto__
    }
    return false
}

console.log(myInstanceof([], Array));
console.log(myInstanceof({}, Object));
console.log(myInstanceof([], Object));

console.log(myInstanceof('abc', String));
console.log(myInstanceof(null, Object));

