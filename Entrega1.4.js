console.log('+-------------+')
console.log('| Entrega 1.4 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1

// Import existing variables
const { getEmployee, getSalary } = require('./Entrega1.3')

const getEmployeeInfo = (id) => {
  getEmployee(id)
    .then((employee) =>
      getSalary(employee).then((salary) => {
        if (!employee.name) {
          employee.name = 'DESCONOCIDO'
        }
        if (salary.salary === undefined) {
          salary.salary = 0
        }
        console.log(`Entrega 4 N1E1 - Employee id = ${employee.id}: ${employee.name}: $${salary.salary}`)
      })
    )
    .catch((err) => console.log('Entrega 4 N1E1', err.message))
}

getEmployeeInfo(1)
getEmployeeInfo(2)
getEmployeeInfo(3)

// Nivel 1 - Ejercicio 2
const resolveAfterDelay = () =>
  new Promise((resolve) => setTimeout(() => resolve('Resolved'), 2000))

const callDelay = async () => {
  const result = await resolveAfterDelay()
  console.log('Entrega 4 N1E2:', result)
  return result
}

module.exports.callDelay = callDelay

callDelay()

// Nivel 2 - Ejercicio 1
const doubleNumberDelay = async (number) => {
  if (number === undefined) {
    number = 0
  }
  return new Promise((resolve, reject) => {
    if (/^\d+$/.test(number)) {
      setTimeout(() => resolve(number * 2), 2000)
    } else {
      reject(Error('The function "doubleNumberDelay" only accept numbers'))
    }
  })
}

module.exports.doubleNumberDelay = doubleNumberDelay

const sumTheDoubleOf3NumbersWithDelay = async (n1, n2, n3) => {
  if (n1 === undefined || n2 === undefined || n3 === undefined) {
    throw Error('Error sumTheDoubleOf3NumbersWithDelay expects 3 arguments')
  }
  let d1, d2, d3
  try {
    d1 = await doubleNumberDelay(n1)
    d2 = await doubleNumberDelay(n2)
    d3 = await doubleNumberDelay(n3)
    return d1 + d2 + d3
  } catch (err) {
    throw Error('Error sumTheDoubleOf3NumbersWithDelay: ' + err.message)
  }
}

sumTheDoubleOf3NumbersWithDelay(1, 2, 3)
  .then((result) =>
    console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
  )
  .catch((err) => console.log(err.message))

sumTheDoubleOf3NumbersWithDelay(0, '0', 1)
  .then((result) =>
    console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
  )
  .catch((err) => console.log(err.message))

// Nivel 3 - Ejercicio 1 - Força i captura tants errors com puguis dels nivells 1 i 2.
// Nivel 1
getEmployeeInfo(4)
getEmployeeInfo(5)
getEmployeeInfo(6)
getEmployeeInfo()

// Nivel 2
// Checking Errors for sumTheDoubleOf3NumbersWithDelay
sumTheDoubleOf3NumbersWithDelay(1, 2, 'a')
  .then((result) =>
    console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
  )
  .catch((err) => console.log(err.message))
sumTheDoubleOf3NumbersWithDelay(1, 2)
  .then((result) =>
    console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
  )
  .catch((err) => console.log(err.message))
