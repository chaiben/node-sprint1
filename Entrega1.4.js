console.log('+-------------+')
console.log('| Entrega 1.4 |')
console.log('+-------------+')
console.log('')
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

const getEmployeeInfo = async (id) => {
  const employee = await getEmployee(id).catch(() => undefined)
  const salary = await getSalary(id).catch(() => undefined)
  employee &&
    salary &&
    console.log(`N1E1: ${employee.name}: $${salary.salary}`)
  !(employee && salary) && console.log('N1E1: ID not found')
}

getEmployeeInfo(1)
getEmployeeInfo(2)
getEmployeeInfo(3)
getEmployeeInfo(4)

// Nivel 1 - Ejercicio 2
const resolveAfterDelay = () =>
  new Promise((resolve) => setTimeout(() => resolve('Resolved'), 2000))

const callDelay = async () => {
  const result = await resolveAfterDelay()
  console.log('N1E2:', result)
  return result
}

module.exports.callDelay = callDelay

callDelay()

// Nivel 2 - Ejercicio 1
const doubleNumberDelay = async (number) => {
  return new Promise((resolve, reject) => {
    if (/^\d+$/.test(number)) {
      setTimeout(() => resolve(number * 2), 2000)
    } else {
      reject(Error('The function \'doubleNumberDelay\' only accept numbers'))
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

sumTheDoubleOf3NumbersWithDelay(1, 2, 3).then((result) =>
  console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
)

// Nivel 3 - Ejercicio 1
try {
  sumTheDoubleOf3NumbersWithDelay('4', 'a', 5).then((result) => {
    console.log(result)
  })
} catch (err) {
  console.log(err)
}
try {
  sumTheDoubleOf3NumbersWithDelay('6', 'b', '').then((result) => {
    console.log(result)
  })
} catch (err) {
  console.log(err)
}
try {
  sumTheDoubleOf3NumbersWithDelay('2c').then((result) => {
    console.log(result)
  })
} catch (err) {
  console.log(err)
}
try {
  sumTheDoubleOf3NumbersWithDelay(null, undefined, false).then((result) => {
    console.log(result)
  })
} catch (err) {
  console.log(err)
}
try {
  sumTheDoubleOf3NumbersWithDelay(0, 7, 8).then((result) => {
    console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
  })
} catch (err) {
  console.log(err)
}
