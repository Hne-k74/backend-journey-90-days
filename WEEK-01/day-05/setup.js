const fs = require("fs");

const students = [
  { id: 1, name: "Henok", cgpa: 3.8 },
  { id: 2, name: "Lucinda", cgpa: 3.4 },
];

fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
console.log("students.json created!");