const { loadStudents } = require("./store");
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from my first server!");
});
app.get("/about",(req,res) =>{
res.send("I am Henok ,I am learning backend");
});
app.get("/student", (req, res) => {
  res.json({ id: 1, name: "Henok", cgpa: 3.8 });
});
app.get("/students" , (req,res) =>{
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
});app.get("/students/:id", (req, res) => {
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
app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});