
const fs = require("fs");

// Example 1: Handle invalid JSON
try {
  const x = JSON.parse("this is not json");
  console.log(x);
} catch (error) {
  console.log("Oops, something went wrong.");
}

console.log("The program is still alive!");

// Example 2: Handle a missing file
try {
  const data = fs.readFileSync("nothing.json", "utf8");
  console.log(data);
} catch (error) {
  console.log("File not found, please create it first.");
}

console.log("Still running!");
