// 2. Write a program in JavaScript to map the student ids, names and scores.
// a) Add data for 3 students (use map functions)
// b) Get Student Names using map functions
// c) Delete Student Scores using map functions

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3
// parameters (value + key + map) for the student
// Sample Input:
// "id": [ 1, 2, 3 ]
// "name": [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// "scores": [ 90, 88, 92 ]
// Output:
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// -----one parameter-----
// [ 1, 2, 3 ]
// [ 'Hitanshu', 'Ninad', 'Amandeep' ]
// [ 90, 88, 92 ]
// -----two parameter-----
// id 1, 2, 3
// name Hitanshu,Ninad,Amandeep
// scores 90,88,92
// -----three parameter-----
// id 1, 2, 3
// Map(3) {
// 'id' => [ 67, 48, 29 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// name Hitanshu,Ninad,Amandeep
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }
// scores 90,88,92
// Map(3) {
// 'id' => [ 1, 2, 3 ],
// 'name' => [ 'Hitanshu', 'Ninad', 'Amandeep' ],
// 'scores' => [ 90, 88, 92 ]
// }

//Solution:

const students = {
  id: [1, 2, 3],
  name: ["Hitanshu", "Ninad", "Amandeep"],
  scores: [90, 88, 92],
};

// a) Add data for 3 students (use map functions)
//students.id.push(4);
//students.name.push("John");
//students.scores.push(85);

// b) Get Student Names using map functions
const studentNames = students.name.map((name) => name);
console.log(studentNames);

// c) Delete Student Scores using map functions
students.scores = students.scores.map((scores) => scores);
//console.log(students.scores);

// d) Display 1 parameter (only value), 2 parameters (value + key), and 3 parameters (value + key + map) for the student
console.log("-----one parameter-----");
console.log(students.id);
console.log(students.name);
console.log(students.scores);

console.log("-----two parameter-----");
console.log(`id ${students.id}`);
console.log(`name ${students.name}`);
console.log(`scores ${students.scores}`);

console.log("-----three parameter-----");
console.log(`id ${students.id}`);
console.log(students);
console.log(`name ${students.name}`);
console.log(students.name);
console.log(students);
console.log(`scores ${students.scores}`);
