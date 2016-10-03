// function action(callback) {
//   setTimeout(function() {
//     callback('Hollla')
//   }, 2000)
// }

// function sayHI

// action(function(arg){
//   console.log(arg)
// })

// function action(callback) {
//   return new Promise(function(resolve, reject) {
//     setTimeout(function() {
//       resolve('holaaa')
//     }, 2000)
//   })
// }

// action()
//   .then(function(word) {
//     console.log(word)
//   })


var fs = require('fs')



function readFile(filePath) {
  return new Promise(function(resolve, reject) {
    fs.readFile(filePath, function(err, file) {
      return err ? reject(err) : resolve(file.toString().trim())
    })
  })
}

function readAllFiles() {
  var promises = [readFile('test.md'), readFile('test.md'), readFile('test.md')]
  return Promise.all(promises)
}

readAllFiles()
  .then(function(files) {
    console.log(files)
  })

// readFile('test.md')
//   .then(function(file) {
//     console.log(file)
//     return 'Hey'
//   })
//   .then(function(word) {
//     console.log(word)
//   })
//   .catch(function(err){
//     console.log(err)
//   })




