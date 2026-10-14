const { loadStudents, addStudent } = require("./store");
const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from my first server!");
});

app.get("/students", (req, res) => {
  res.json(loadStudents());
});

app.get("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  if (Number.isNaN(id)) {
    return res.status(400).json({ message: "Id must be a number" });
  }

  const student = loadStudents().find((s) => s.id === id);

  if (!student) {
    return res.status(404).json({ message: "Student not found" });
  }

  res.json(student);
});
app.post("/students", (req, res) => {
  const { id, name, cgpa } = req.body;

  if (typeof id !== "number" || !name || typeof cgpa !== "number") {
    return res.status(400).json({ message: "id, name and cgpa are required" });
  }

  const ok = addStudent({ id, name, cgpa });

  if (!ok) {
    return res.status(409).json({ message: "Student already exists" });
  }

  res.status(201).json({ message: "Student saved!", data: { id, name, cgpa } });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
