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
function deleteStudent(id) {
  const students = loadStudents();
  const remaining = students.filter((s) => s.id !== id);

  if (remaining.length === students.length) {
    return false;
  }

  saveStudents(remaining);
  return true;
}
function updateCgpa(id, newCgpa) {
  const students = loadStudents();
  const exists = students.find((s) => s.id === id);

  if (!exists) {
    return false;
  }

  const updated = students.map((s) => (s.id === id ? { ...s, cgpa: newCgpa } : s));
  saveStudents(updated);
  return true;
}
module.exports = { loadStudents, saveStudents, addStudent, deleteStudent, updateCgpa };


function loadStudents() {
  try {
    const text = fs.readFileSync("students.json", "utf8");
    return JSON.parse(text);
  } catch (error) {
    return [];
  }
}