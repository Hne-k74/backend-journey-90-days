const fs = require("fs");

const student = { id: 1, name: "Henok", cgpa: 3.8 };

fs.writeFileSync("student.json", JSON.stringify(student));
console.log("File saved!");