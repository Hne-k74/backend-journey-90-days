const fs = require("fs");

// 1 + 2: read and parse
const text = fs.readFileSync("students.json", "utf8");
const students = JSON.parse(text);

// 3: add a new student (no mutation, spread like Day 3)
const newStudent = { id: 3, name: "Jacob", cgpa: 3.53 };
const updated = [...students, newStudent];

// 4 + 5: stringify and save
fs.writeFileSync("students.json", JSON.stringify(updated, null, 2));
console.log("Student added!");