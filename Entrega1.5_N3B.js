console.log('+-------------------------+')
console.log('| Entrega 1.5 - Nivel 3 B |')
console.log('+-------------------------+')
console.log('')

// B) Crea una funció que
//  - guardi els fitxers del punt anterior encriptats amb l'algoritme aes-192-cbc,
//  - i esborri els fitxers inicials.

const fs = require('fs')

const ALGORITME = 'aes-192-cbc'
const PASSWORD = 'Bon dia mundo! Buscar a Nemo'
const crypto = require('crypto')

// let iv = crypto.randomBytes(16); // Random initialization vector - this is not secret

const iv = '1234567812345678' // Random initialization vector - this is not secret

const criptyData = (secretMessage) => {
  const key = crypto.scryptSync(PASSWORD, 'salt', 24)

  const cipher = crypto.createCipheriv(ALGORITME, key, iv)
  let encryeted = cipher.update(secretMessage, 'utf-8', 'hex')
  encryeted += cipher.final('hex')
  return encryeted
}

const cryptFile = () => {
  fs.readFile('FileHex.txt', 'utf-8', (err, data) => {
    if (err) throw err
    else {
      fs.writeFile('FileHexCrypted.txt', criptyData(data), (err) => {
        if (err) throw err
        else { console.log('FileHexCrypted.txt created') }
        fs.unlink('FileHex.txt', (err) => {
          if (err) throw err
          else console.log('FileHex.txt deleted')
        })
      })
    }
  })
  fs.readFile('File64.txt', 'utf-8', (err, data) => {
    if (err) throw err
    else {
      fs.writeFile('File64Crypted.txt', criptyData(data), (err) => {
        if (err) throw err
        else { console.log('FileHexCrypted.txt created') }
        fs.unlink('File64.txt', (err) => {
          if (err) throw err
          else console.log('File64.txt deleted')
        })
      })
    }
  })
}

cryptFile()
