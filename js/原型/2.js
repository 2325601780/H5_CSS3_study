Car.prototype.name = 'su7'
Car.prototype.length = 4800
Car.prototype.height = 1400
function Car(color){
    //var this = {}

    // this.name = 'su7'
    // this.length = 4800
    // this.height = 1400
    this.color = color

    //this.__proto__ = Car.prototype
    //return this
}

const car = new Car('blue')
car.name = '蔚来'

console.log(car);

