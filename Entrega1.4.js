console.log('+-------------+')
console.log('| Entrega 1.4 |')
console.log('+-------------+')
console.log('')
// Nivel 1 - Ejercicio 1

// Import existing variables
const { getEmployee, getSalary } = require('./Entrega1.3')

const getEmployeeInfo = (id) => {
  getEmployee(id).then((employee) =>
    getSalary(employee).then((salary) =>
      console.log(`Entrega 4 N1E1: ${employee.name}: $${salary.salary}`)
    )
  ).catch(err => console.log('Entrega 4 N1E1', err.message))
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
  console.log('Entrega 4 N1E2:', result)
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
      reject(Error('The function "doubleNumberDelay" only accept numbers'))
    }
  })
}

module.exports.doubleNumberDelay = doubleNumberDelay

const sumTheDoubleOf3NumbersWithDelay = async (n1, n2, n3) => {
  let d1, d2, d3
  try {
    d1 = await doubleNumberDelay(n1)
    d2 = await doubleNumberDelay(n2)
    d3 = await doubleNumberDelay(n3)
    return d1 + d2 + d3
  } catch (err) {
    console.log(err.message)
  }
}

sumTheDoubleOf3NumbersWithDelay(1, 2, 3).then((result) =>
  console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
)

// Nivel 3 - Ejercicio 1
sumTheDoubleOf3NumbersWithDelay('4', 'a', 5).then((result) => { console.log(result) })
// try {
//   sumTheDoubleOf3NumbersWithDelay('4', 'a', 5).then((result) => {
//     console.log(result)
//   })
// } catch (err) {
//   console.log(err.message)
// }

// try {
//   sumTheDoubleOf3NumbersWithDelay('6', 'b', '').then((result) => {
//     console.log(result)
//   })
// } catch (err) {
//   console.log(err.message)
// }

// try {
//   sumTheDoubleOf3NumbersWithDelay('2c').then((result) => {
//     console.log(result)
//   })
// } catch (err) {
//   console.log(err.message)
// }

// try {
//   sumTheDoubleOf3NumbersWithDelay(null, undefined, false).then((result) => {
//     console.log(result)
//   })
// } catch (err) {
//   console.log(err.message)
// }

// try {
//   sumTheDoubleOf3NumbersWithDelay(0, 7, 8).then((result) => {
//     console.log('Result sumTheDoubleOf3NumbersWithDelay: ', result)
//   })
// } catch (err) {
//   console.log(err.message)
// }
