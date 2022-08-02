console.log("+-------------+");
console.log("| Entrega 1.3 |");
console.log("+-------------+");
console.log("");
//Nivel 1 - Ejercicio 1
const promise = (isResolved) =>
  new Promise((resolve, reject) => {
    if (isResolved) resolve("N1E1 response: The promise was Resolved");
    else reject(new Error("N1E1 response: The promise was Rejected"));
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
const sayHello = (name) => console.log(`N1E2 response: Hello ${name}`);
const talk = (name, callback) => {
  callback(name);
};
talk("Marçal", sayHello);

//Nivel 2 - Ejercicio 1
/* 
Donats els objectes employees i salaries, 
crea una arrow function getEmployee() 
que retorni una Promise efectuant la cerca en 
l'objecte pel seu id.
*/
const employees = [
  {
    id: 1,
    name: "Linux Torvalds",
  },
  {
    id: 2,
    name: "Bill Gates",
  },
  {
    id: 3,
    name: "Jeff Bezos",
  },
];

const salaries = [
  {
    id: 1,
    salary: 4000,
  },
  {
    id: 2,
    salary: 1000,
  },
  {
    id: 3,
    salary: 2000,
  },
];
module.exports.salaries = salaries;

const getEmployee = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const employee = employees.find((employee) => employee.id === id);
    employee
      ? resolve(employee)
      : reject(new Error("N2E1 response: ID not found"));
  });
module.exports.getEmployee = getEmployee;

getEmployee(1)
  .then((res) => console.log("N2E1", res))
  .catch((err) => console.log(err.message));
getEmployee(3)
  .then((res) => console.log("N2E1", res))
  .catch((err) => console.log(err.message));
getEmployee(4)
  .then((res) => console.log("N2E1", res))
  .catch((err) => console.log(err.message));

// Nivel 2 - Ejercicio 2
const getSalary = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === id);
    salary ? resolve(salary) : reject(new Error("N2E2 response: ID not found"));
  });

getSalary(1)
  .then((res) => console.log("N2E2", res))
  .catch((err) => console.log(err.message));
getSalary(3)
  .then((res) => console.log("N2E2", res))
  .catch((err) => console.log(err.message));
getSalary(4)
  .then((res) => console.log("N2E2", res))
  .catch((err) => console.log(err.message));

// Nivel 2 - Ejercicio 3

getEmployee(1)
  .then((employee) =>
    getSalary(employee.id).
      then((salary) =>
        console.log("N2E3", `${employee.name}: $ ${salary.salary}`)
    )
    .catch(err => console.log("N2E3", err.message))
  )
  .catch((err) => console.log("N2E3", err.message));

  getEmployee(5)
  .then((employee) =>
    getSalary(employee.id).
      then((salary) =>
        console.log("N2E3", `${employee.name}: $ ${salary.salary}`)
    )
    .catch(err => console.log("N2E3", err.message))
  )
  .catch((err) => console.log("N2E3", err.message));
