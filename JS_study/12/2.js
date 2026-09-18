function myInstanceof(obj, constructor) {
  while (obj !== null) {
    if (obj === constructor.prototype) {
      return true
    }
    obj = Object.getPrototypeOf(obj)
  }
  return false
}

console.log(myInstanceof(12, Number)) 