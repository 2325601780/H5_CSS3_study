function Car(color){
    //var this = {}
    this.name = 'su7'
    this.height = 1400
    this.lang = 4800
    this.weight = 1500
    this.color = color
    //return this
}

const zCar = new Car('red')     //实例对象
const qCar = new Car('blue')

qCar.name = 'su8'

console.log(zCar);
console.log(qCar);
