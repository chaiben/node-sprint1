console.log('+-------------+')
console.log('| Entrega 1.1 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1
console.log('Nivel 1 - Ejercicio 1')
const showName = (name) => console.log(name)
showName('Marçal')

// Nivel 2 - Ejercicio 1
console.log('Nivel 2 - Ejercicio 1')
const firstName = 'Marçal'
const lastName = 'Chaiben'
console.log(`${firstName} ${lastName}`)

// Nivel 2 - Ejercicio 2
// Invoca una funció que retorni un valor des de dins d'una template literal.
const returnName = (name) => name
console.log('Nivel 2 - Ejercicio 2')
const fullName = (firstName, lastName) =>
  console.log(`${returnName(firstName)} ${returnName(lastName)}`)
fullName('Marçal', 'Chaiben')

// Nivel 3 - Ejercicio 1
console.log('Nivel 3 - Ejercicio 1')
const functionArray = () => {
  let result = []
  for (let y = 0; y < 10; y++) {
    result = [...result,
      () => { for (let i = 0; i < 10; i++) { console.log(i) } }
    ]
  }
  return result
}
functionArray().forEach(func => func())

// Nivel 3 - Ejercicio 2
console.log('Nivel 3 - Ejercicio 2')
const variable = ((nom) => {
  console.log(nom)
  return nom
})('Hello Marçal')
console.log('Print variable result: ', variable)
