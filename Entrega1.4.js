console.log("Entrega 1.4");
//Nivel 1 - Ejercicio 1

let employees = [
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

let salaries = [
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

const getEmployee = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const employee = employees.find((employee) => employee.id === id);
    employee
      ? resolve(employee)
      : reject(new Error("Employee ID not found"));
  });

const getSalary = (id) =>
  new Promise((resolve, reject) => {
    // Search employees
    const salary = salaries.find((salary) => salary.id === id);
    salary ? resolve(salary) : reject(new Error("Salary ID not found"));
  });

const getEmployeeInfo = async (id) => {
  const employee = await getEmployee(id).catch(err => undefined);
  const salary = await getSalary(id).catch(err => undefined);
  employee && salary && console.log(`${employee.name}: $${salary.salary}`);
  !(employee && salary) && console.log('ID not found');
}

getEmployeeInfo(1);
getEmployeeInfo(2);
getEmployeeInfo(3);
getEmployeeInfo(4);