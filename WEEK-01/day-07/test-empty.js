const { loadStudents } = require("./store");

const students = loadStudents();
console.log(students);