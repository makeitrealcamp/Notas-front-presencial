// Notas


// Filename, dirname,
var path = require('path')

console.log(`Rock on World from ${path.basename(__filename)}`)
console.log(__dirname)
console.log(__filename)

console.log(path.basename(__filename))




// Process stdout, stdin
process.stdout.write('> hola como estas \n')
process.stdout.write('Escribe algo: \n')

process.stdin.on('data', (data) => {
  var data = data.toString().trim()
  if (data === 'chao') {
    process.exit()
  }
  console.log(data)

  process.stdout.write(`Dijiste ${data} \n`)
})

process.on('exit', () => {
  process.stdout.write('Chaooo')
})

//Process.argv

// Es un arreglo
// Los primeros dos elmentos siempre son el path donde esta instaldo node y el segundo el path del archivo donde el proceso esta corriendo
console.log(process.argv)
