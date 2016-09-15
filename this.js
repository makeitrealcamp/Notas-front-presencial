// Constructores

function House (address, floors, color) {
  this.address = address
  this.floors = floors
  this.color = color
}

var miCasa = new House('cedritos', 1, 'blanca')


var house = {
  color: 'blanca',
  area: 30,
  growArea: function(size) {

    this.area = this.area + 30
  }
}

var apartment = {
  area: 50,
}


house.growArea.call(apartment)


function Dog(name, age, color) {
  this.name = name
  this.age = age
  this.color = color
}

// Usando New

var ozu = new Dog('ozu', 5, 'negro')

// Default

var ozu = Dog('ozu', 5, 'negro')
