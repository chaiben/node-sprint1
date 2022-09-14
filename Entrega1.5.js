console.log('+-------------+')
console.log('| Entrega 1.5 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1
const FILE = 'newFile.txt'
module.exports.FILE = FILE

const fs = require('fs')

const writePhrase = () =>
  fs.writeFile(
    FILE,
    `Hola Marçal!
Que tal estás?
Hoy hace mucho calor... y como estoy estudiando... ufff
Pero bueno... el sacrificio seguro que valdrá.

Animo!`,
    (err) => {
      if (err) throw err
    }
  )

writePhrase()

// Nivel 1 - Ejercicio 2
const readPhrase = () =>
  fs.readFile(FILE, 'utf-8', (err, data) => {
    if (err) throw err
    console.log(data)
  })

readPhrase()

// Nivel 1 - Ejercicio 3
const zlib = require('zlib')
const gzip = zlib.createGzip()

const input = fs.createReadStream(FILE)
const output = fs.createWriteStream(`${FILE}.gz`)

input.pipe(gzip).pipe(output)

// Nivel 2 - Ejercicio 1
const recursiveCountDown = (n) => {
  if (!/^\d+$/.test(n)) {
    console.log('Please, enter a number')
  } else {
    setTimeout(() => {
      if (n === 0) {
        console.log(n)
      } else {
        console.log(n)
        recursiveCountDown(n - 1)
      }
    }, 1000)
  }
}

recursiveCountDown(3)

// Nivel 2 - Ejercicio 2
const cp = require('child_process')

const homedir = require('os').homedir()

const execOptions = {
  cwd: homedir,
  env: null,
  encoding: 'utf8',
  timeout: 0,
  maxBuffer: 200 * 1024, // 200k
  killSignal: 'SIGTERM' // señal de terminación, que solicita al proceso limpiar su estado y salir.
}

cp.exec('ls -l', execOptions, (err, stdout, stderr) => {
  if (err) console.log('N2E2', new Error(stderr))
  else console.log('N2E2', stdout)
})
