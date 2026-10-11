
const { loadStudents, addStudent } = require("./store");

const command = process.argv[2];

switch (command) {
  case "list": {
    const students = loadStudents();

    students.forEach((s) => {
      console.log(`${s.id}. ${s.name} (${s.cgpa})`);
    });

    break;
  }

  case "find": {
    const id = Number(process.argv[3]);

    if (!process.argv[3] || Number.isNaN(id)) {
      console.log("Please provide a valid student ID.");
      break;
    }
    

    const students = loadStudents();
    const student = students.find((s) => s.id === id);

    if (student) {
      console.log(student);
    } else {
      console.log("Student not found");
    }

    break;
  }

case "add": {
  const id = Number(process.argv[3]);
  const name = process.argv[4];
  const cgpa = Number(process.argv[5]);

  if (
    process.argv[3] === undefined ||
    process.argv[5] === undefined ||
    Number.isNaN(id) ||
    Number.isNaN(cgpa) ||
    !name
  ) {
    console.log("Usage: node app.js add <id> <name> <cgpa>");
    break;
  }

  const ok = addStudent({ id, name, cgpa });

  console.log(
    ok
      ? "Student added!"
      : "Student with that id already exists."
  );

  break;
}

  default:
    console.log(
      "Unknown command. Try: list, find <id>, add <id> <name> <cgpa>"
    );
}