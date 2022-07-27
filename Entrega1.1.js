// Entrega 1.1
console.log("Entrega 1.1");
//Nivel 1 - Ejercicio 1
console.log("Nivel 1 - Ejercicio 1");
const showName = (name) => console.log(name);
showName("Marçal");

//Nivel 2 - Ejercicio 1
console.log("Nivel 2 - Ejercicio 1");
const firstName = "Marçal";
const lastName = "Chaiben";
console.log(`${firstName} ${lastName}`);

//Nivel 2 - Ejercicio 2
console.log("Nivel 2 - Ejercicio 2");
const fullName = (firstName, lastName) =>
  console.log(`${firstName} ${lastName}`);
fullName("Marçal", "Chaiben");

//Nivel 3 - Ejercicio 1
console.log("Nivel 3 - Ejercicio 1");
const functionArray = [
    counter0 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter1 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter2 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter3 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter4 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter5 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter6 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter7 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter8 = () => {for (let i = 0; i < 10; i++) { console.log(i) }},
    counter9 = () => {for (let i = 0; i < 10; i++) { console.log(i) }}
]
functionArray.forEach(func => func());

//Nivel 3 - Ejercicio 2
console.log("Nivel 3 - Ejercicio 2");
((nom) => console.log(nom))("Marçal");