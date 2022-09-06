console.log("+-------------+");
console.log("| Entrega 1.4 |");
console.log("+-------------+");
console.log("");
//Nivel 1 - Ejercicio 1

// Import existing variables
const {salaries} = require('./entrega1.3');
const {getEmployee} = require('./entrega1.3');

const getSalary = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === id);
    salary ? resolve(salary) : reject(new Error("N1E1: Salary ID not found"));
  });

const getEmployeeInfo = async (id) => {
  const employee = await getEmployee(id).catch((err) => undefined);
  const salary = await getSalary(id).catch((err) => undefined);
  employee &&
    salary &&
    console.log(`N1E1: ${employee.name}: $${salary.salary}`);
  !(employee && salary) && console.log("N1E1: ID not found");
};

getEmployeeInfo(1);
getEmployeeInfo(2);
getEmployeeInfo(3);
getEmployeeInfo(4);

//Nivel 1 - Ejercicio 2
const resolveAfterDelay = () =>
  new Promise((resolve) => setTimeout(() => resolve("Resolved"), 2000));

const callDelay = async () => {
  const result = await resolveAfterDelay();
  console.log("N1E2:", result);
};

callDelay();

//Nivel 2 - Ejercicio 1
const doubleNumberDelay = (number) =>
  new Promise((resolve, reject) => {
    /^\d+$/.test(number)
      ? setTimeout(() => resolve(2 * number), 2000)
      : reject(
          new Error(
            `N2E1: Error - "${number}" is not a number. Please, use only numbers`
          )
        );
  });

const double3NumbersWithDelay = async (n1, n2, n3) => {
  const d1 = await doubleNumberDelay(n1).catch((err) =>
    console.log(err.message)
  );
  d1 && console.log("N2E1: d1 = ", d1);
  const d2 = await doubleNumberDelay(n2).catch((err) =>
    console.log(err.message)
  );
  d2 && console.log("N2E1: d2 = ", d2);
  const d3 = await doubleNumberDelay(n3).catch((err) =>
    console.log(err.message)
  );
  d3 && console.log("N2E1: d3 = ", d3);
};

double3NumbersWithDelay(1, 2, 3);

//Nivel 3 - Ejercicio 1
double3NumbersWithDelay("4", "a", 5);
double3NumbersWithDelay("6", "b", "");
double3NumbersWithDelay("2c");
double3NumbersWithDelay(null, undefined, false);
double3NumbersWithDelay(0, 7, 8);