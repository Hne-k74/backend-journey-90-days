const { loadStudents } = require("./store");

const students = loadStudents();
students.forEach((s) => console.log(`${s.id}. ${s.name}`));