const { addStudent } = require("./store");

const result = addStudent({ id: 5, name: "Mark", cgpa: 3.2 });

if (result) {
  console.log("Added!");
} else {
  console.log("Already exists.");
}