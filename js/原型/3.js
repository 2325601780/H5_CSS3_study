Person.prototype.say = function(){
    console.log('zzz');
    
}
function Person(){
    this.name = 'zs'
}

const p = new Person()      //p.__proto__ === Person.prototype

p.say()