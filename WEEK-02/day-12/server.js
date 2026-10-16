const { loadStudents, addStudent, deleteStudent, updateCgpa } = require("./store");
const studentsRouter = require("./routes/students");
const express = require("express");
const app = express();

app.use(express.json());

app.use("/students", studentsRouter);
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();

  console.log(`${timestamp} ${req.method} ${req.url}`);

  next();
});
app.get("/", (req, res) => {
  res.send("Hello from my first server!");
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});
