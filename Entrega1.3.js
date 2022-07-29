console.log("Entrega 1.3");
//Nivel 1 - Ejercicio 1
const promise = (isResolved) =>
  new Promise((resolve, reject) => {
    if (isResolved) resolve("Nivel 1 - Ejercicio 1: The promise was Resolved");
    else reject(new Error("Nivel 1 - Ejercicio 1: The promise was Rejected"));
  });

// Promise Resolved
promise(true)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

// Promise Rejected
promise(false)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err.message);
  });

//Nivel 1 - Ejercicio 2
const sayHello = (name) => console.log(`Nivel 1 - Ejercicio 2: Hello ${name}`)
const talk = (name, callback) => {
  callback(name);
}
talk('Marçal', sayHello);

//Nivel 2 - Ejercicio 1
console.log("Nivel 2 - Ejercicio 1");
let employees = [{
  id: 1,
  name: 'Linux Torvalds'
}, {
  id: 2,
  name: 'Bill Gates'
},{
  id: 3,
  name: 'Jeff Bezos'
}];

let salaries = [{
  id: 1,
  salary: 4000
}, {
  id: 2,
  salary: 1000
}, {
  id: 3,
  salary: 2000
}];

const getEmployee = (id) => new Promise ((resolve, reject) => {
})
