console.log('+-------------+')
console.log('| Entrega 1.1 |')
console.log('+-------------+')
console.log('')
//Nivel 1 - Ejercicio 1
console.log('Nivel 1 - Ejercicio 1')
const showName = (name) => console.log(name)
showName('Marçal')

//Nivel 2 - Ejercicio 1
console.log('Nivel 2 - Ejercicio 1')
const firstName = 'Marçal'
const lastName = 'Chaiben'
console.log(`${firstName} ${lastName}`)

//Nivel 2 - Ejercicio 2
console.log('Nivel 2 - Ejercicio 2')
const fullName = (firstName, lastName) =>
    console.log(`${firstName} ${lastName}`)
fullName('Marçal', 'Chaiben')

//Nivel 3 - Ejercicio 1
console.log('Nivel 3 - Ejercicio 1')
const functionArray = [
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }}),
    (() => {for (let i = 0; i < 10; i++) { console.log(i) }})
]
functionArray.forEach(func => func())

//Nivel 3 - Ejercicio 2
console.log('Nivel 3 - Ejercicio 2');
((nom) => console.log(nom))('Marçal')