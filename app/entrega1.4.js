// Nivel 1 - Ejercicio 1

// Import existing variables
const { salaries } = require('./Entrega1.3')
const { getEmployee } = require('./Entrega1.3')

const getSalary = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === id)
    salary ? resolve(salary) : reject(new Error('N1E1: Salary ID not found'))
  })

module.exports.getSalary = getSalary

const getEmployeeInfo = async (id) => {
  const employee = await getEmployee(id).catch(() => undefined)
  const salary = await getSalary(id).catch(() => undefined)
  employee &&
    salary &&
    console.log(`N1E1: ${employee.name}: $${salary.salary}`)
  !(employee && salary) && console.log('N1E1: ID not found')
}

module.exports.getEmployeeInfo = getEmployeeInfo

// Nivel 1 - Ejercicio 2
const resolveAfterDelay = () =>
  new Promise((resolve) => setTimeout(() => resolve('Resolved'), 2000))

const callDelay = async () => {
  const result = await resolveAfterDelay()
  console.log('N1E2:', result)
  return result
}

module.exports.callDelay = callDelay

// Nivel 2 - Ejercicio 1
const doubleNumberDelay = async (number) => {
  return new Promise((resolve, reject) => {
    if (/^\d+$/.test(number)) {
      setTimeout(() => resolve(number * 2), 2000)
    } else {
      reject(Error("The function 'doubleNumberDelay' only accept numbers"))
    }
  })
}

module.exports.doubleNumberDelay = doubleNumberDelay

const sumTheDoubleOf3NumbersWithDelay = async (n1, n2, n3) => {
  let d1, d2, d3
  try {
    d1 = await doubleNumberDelay(n1)
  } catch (err) {
    return Error(err)
  }
  try {
    d2 = await doubleNumberDelay(n2)
  } catch (err) {
    return Error(err)
  }
  try {
    d3 = await doubleNumberDelay(n3)
  } catch (err) {
    return Error(err)
  }
  return d1 + d2 + d3
}

module.exports.sumTheDoubleOf3NumbersWithDelay = sumTheDoubleOf3NumbersWithDelay
