   # Day 11: Organizing code with a Router
   - express.Router() is a mini-app that holds a group of routes
   - In the router file: router.get("/"), router.get("/:id"), ...
   - In server.js: const studentsRouter = require("./routes/students");
                   app.use("/students", studentsRouter);
   - The prefix comes from app.use, so router paths drop "/students"
   - Router file imports store with "../store" (go up one folder)
   - server.js only sets up the server and plugs in routers
   - Both lines are needed: require gets the router, app.use plugs it in