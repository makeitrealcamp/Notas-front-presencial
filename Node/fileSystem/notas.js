/// NOTAS

// Es necesario tener requerir el modulo fs para poder usarlo

var fs = require('fs')

// Mezclado con path nos permite llegar a cualquier parte de nuestra heraquia de archivos y carpetas

var path = require('path')

// todos los metodos funcionan de forma asyncrona y sincronica, lo ideal es usar la asyncrona para no bloquear el proceso

// Creando un archivo

// Ubicamos el sitio donde vamos a crear el archivo
var location = path.join(__dirname, '..', 'joke.txt')

///// Escribimos el archivo de forma asyncrona
fs.writeFile(location, 'Broken pencils are pointless.', function(err){
  if (err) {
    throw err
  }

  console.log('huehuehue buen chiste')
})

///// Escribimos de forma syncronica

// fs.writeFileSync(location, 'Broken pencils are pointless.')

// Leemos el archivo

///// De forma syncronica

// var file = fs.readFileSync(location)
// console.log(file.toString())

//// De form asyncronica

fs.readFile(location, function(err, file) {
  if (err) {throw err}

  console.log(file.toString())
})

// Podemos hacer todo tipo de manipulacion de archivos y carpetas siguiendo estos patrones

