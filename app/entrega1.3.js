// Nivel 1 - Ejercicio 1
const promise = (isResolved) =>
  new Promise((resolve, reject) => {
    if (isResolved) resolve('N1E1 response: The promise was Resolved')
    else reject(new Error('N1E1 response: The promise was Rejected'))
  })

module.exports.promise = promise

// Nivel 1 - Ejercicio 2
const sayHello = (name) => {
  if (name === undefined || typeof name !== 'string') {
    throw new Error(
      'This function expects to receive a "name" string as parameter'
    )
  }
  console.log(`N1E2 response: Hello ${name}`)
}
module.exports.sayHello = sayHello

const talk = (name, callback) => {
  if (
    name === undefined ||
    typeof name !== 'string' ||
    callback === undefined ||
    typeof callback !== 'function'
  ) {
    throw new Error(
      'This function expects to receive a "name" string and a "callback" function as parameters'
    )
  }
  callback(name)
}
module.exports.talk = talk

// Nivel 2 - Ejercicio 1
/*
Donats els objectes employees i salaries,
crea una arrow function getEmployee()
que retorni una Promise efectuant la cerca en
l'objecte pel seu id.
*/
const employees = [
  {
    id: 1,
    name: 'Linux Torvalds'
  },
  {
    id: 2,
    name: 'Bill Gates'
  },
  {
    id: 3,
    name: 'Jeff Bezos'
  }
]
module.exports.employees = employees

const salaries = [
  {
    id: 1,
    salary: 4000
  },
  {
    id: 2,
    salary: 1000
  },
  {
    id: 3,
    salary: 2000
  }
]
module.exports.salaries = salaries

const getEmployee = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const employee = employees.find((employee) => employee.id === id)
    employee
      ? resolve(employee)
      : reject(new Error('N2E1 response: ID not found'))
  })
module.exports.getEmployee = getEmployee

// Nivel 2 - Ejercicio 2
const getSalary = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === id)
    salary ? resolve(salary) : reject(new Error('N2E2 response: ID not found'))
  })

module.exports.getSalary = getSalary
