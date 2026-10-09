const fs = require("fs");

function loadStudents() {
  const text = fs.readFileSync("students.json", "utf8");
  return JSON.parse(text);
}

function saveStudents(students) {
  fs.writeFileSync("students.json", JSON.stringify(students, null, 2));
}

function addStudent(newStudent) {
  const students = loadStudents();

  const existing = students.find((s) => s.id === newStudent.id);
  if (existing) {
    return false;
  }

  const updated = [...students, newStudent];
  saveStudents(updated);
  return true;
}

module.exports = { loadStudents, saveStudents, addStudent };