const fs = require("fs");

const text = fs.readFileSync("student.json","utf8");

const student = JSON.parse(text);
 console.log(`${student.name} has a cgpa of ${student.cgpa}`);