// 1. Write a JavaScript program to map Employee Records according to Employee
// IDs.
// Employee: { id, name, salary }
// a) Print an array of all employee ids
// b) Print count of employees
// c) Print the name of the employee according to their id { key: value }
// d) Store the salaries of all employees in an array
// e) Calculate the average salary the company is paying to its employees
// Sample Input:
// "id": [ 67, 48, 29 ]
// "name": [ "Hitanshu", “Ninad”, “Amandeep” ]
// "salary": [ 75000, 82000, 98000 ]
// Output:
// [ 67, 48, 29 ]
// 3
// 67: Hitanshu
// 48: Ninad
// 29: Amandeep
// [ 75000, 82000, 98000 ]
// 85000

//Code

const employees = {
  id: [67, 48, 29],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  salary: [75000, 82000, 98000],
};

// a) Print an array of all employee ids
console.log(employees.id);

// b) Print count of employees
console.log(employees.id.length);

// c) Print the name of the employee according to their id { key: value }
const idToName = {};
for (let i = 0; i < employees.id.length; i++) {
  idToName[employees.id[i]] = employees.name[i];
}
console.log(idToName);

// d) Store the salaries of all employees in an array
console.log(employees.salary);

// e) Calculate the average salary the company is paying to its employees
const totalSalary = employees.salary.reduce((acc, curr) => acc + curr);
const averageSalary = totalSalary / employees.salary.length;
console.log(averageSalary);
