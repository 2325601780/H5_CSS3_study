Grand.prototype.house = function(){
    console.log('house');
    
}
function Grand(){
    this.card = 100
}

Father.prototype = new Grand()
function Father(){
    this.lastName = '张'
}


Child.prototype = new Father()
function Child(){
    this.age = 18
}

const p = new Child()       //p.__proto__ === Child.prototype

console.log(p.lastName);
p.house()
