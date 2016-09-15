//// OOP

function Animal() {

}

Animal.prototype.hello = function() {
  return 'Soy un animal'
}

function Dog(name) {
  this.name = name
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.identify = function() {
  return 'soy ' + this.name
}

var ozu = new Dog('Ozu')
var moshi = new Dog('Moshi')

moshi.bark = function() {
  console.log('Woof woof Hola ' + this.identify())
}

ozu.constructor === Dog
moshi.constructor === ozu.constructor
ozu.__proto__ === Dog.prototype

//
