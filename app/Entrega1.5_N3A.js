console.log('+-------------------------+')
console.log('| Entrega 1.5 - Nivel 3 A |')
console.log('+-------------------------+')
console.log('')
// Nivel 3 - Ejercicio 1
// A) Crea una funció que creï dos fitxers a partir del fitxer del nivell 1, codificats en:
// - hexadecimal
// - base64 respectivament
const FILE = 'newFile.txt'
const fs = require('fs')

const file2HexAndBase64 = () => {
  // Read file
  fs.readFile(FILE, 'utf-8', (err, data) => {
    if (err) throw err
    else {
      const buff = Buffer.from(data)
      fs.writeFile('FileHex.txt', buff.toString('hex'), (err) => {
        if (err) throw err
        else console.log('FileHex.txt created')
      })
      fs.writeFile('File64.txt', buff.toString('base64'), (err) => {
        if (err) throw err
        else console.log('File64.txt created')
      })
    }
  })
}

file2HexAndBase64()
