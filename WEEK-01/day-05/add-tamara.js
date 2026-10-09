const fs = require ("fs");

const text = fs.readFileSync("students.json","utf8");
const students = JSON.parse(text);
console.log(students);

const newTamara = { id: 4, name: "Tamara", cgpa: 3.65 }

const existing = students.find((s) => s.id === newTamara.id);

if (existing) {
  console.log(`Student with id ${newTamara.id} already exists.`);
} else {
  const wow = [...students,newTamara];
  fs.writeFileSync("students.json", JSON.stringify(wow, null, 2));
  console.log("Student added!");
}

const vamos = fs.readFileSync("students.json","utf8");
const nuuk = JSON.parse(vamos);
nuuk.forEach((student) => {
  console.log(`${student.id}. ${student.name}`);
});
