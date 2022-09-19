console.log('+-------------+')
console.log('| Entrega 1.3 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1
const promise = (isResolved) =>
  new Promise((resolve, reject) => {
    if (isResolved) resolve('Entrega 3 N1E1 response: The promise was Resolved')
    else reject(new Error('Entrega 3 N1E1 response: The promise was Rejected'))
  })

// Promise Resolved
promise(true)
  .then((res) => {
    console.log(res)
  })

// Promise Rejected
promise(false)
  .catch((err) => {
    console.log(err.message)
  })

// Nivel 1 - Ejercicio 2

// This is the higher-order-function
const createIntro = (name, callback) => {
  const intro = `Entrega 3 N1E2: My name is ${name}. Nice to meet you!`
  callback(intro)
}

// This is used as our callback function
const logIntro = (name) => {
  console.log(name)
}

createIntro('Marçal', logIntro)

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
  },
  {
    id: 5
  },
  {
    id: 6,
    name: ''
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
  },
  {
    id: 5,
    salary: 0
  },
  {
    id: 6
  }
]
module.exports.salaries = salaries

const getEmployee = (id) =>
  new Promise((resolve, reject) => {
    if (id === undefined) {
      reject(new Error('Entrega 3 N2E1 getEmployee expects an "id"'))
    }
    // Search employees
    const employee = employees.find((employee) => employee.id === id)
    employee
      ? resolve(employee)
      : reject(new Error(`Entrega 3 N2E1 response: id = ${id} not found`))
  })
module.exports.getEmployee = getEmployee

getEmployee(1).then((res) => console.log('Entrega 3 N2E1', res))
getEmployee(3).then((res) => console.log('Entrega 3 N2E1', res))
getEmployee(4).catch((err) => console.log(err.message))

// Nivel 2 - Ejercicio 2
const getSalary = (employee) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === employee.id)
    salary ? resolve(salary) : reject(new Error('Entrega 3 N2E2 response: ID not found'))
  })

module.exports.getSalary = getSalary

getEmployee(1).then(emloyee => getSalary(emloyee).then((res) => console.log('Entrega 3 N2E2', res)))
getEmployee(2).then(emloyee => getSalary(emloyee).then((res) => console.log('Entrega 3 N2E2', res)))
getEmployee(3).then(emloyee => getSalary(emloyee).then((res) => console.log('Entrega 3 N2E2', res)))
getEmployee(4).then(emloyee => getSalary(emloyee).then((res) => console.log('Entrega 3 N2E2', res))).catch(err => console.log(err.message))

// Nivel 2 - Ejercicio 3
getEmployee(1)
  .then((employee) =>
    getSalary(employee)
      .then((salary) =>
        console.log('Entrega 3 N2E3', `${employee.name}: $ ${salary.salary}`)
      )
  )

// Nivel 3 - Ejercicio 1
getEmployee(5).catch((err) => console.log('Entrega 3 N2E3', err.message))
