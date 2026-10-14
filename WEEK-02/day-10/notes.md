   # Day 10: DELETE and PUT (full CRUD)
   - DELETE /students/:id removes a student (filter + save)
   - PUT /students/:id changes a student (map + spread + save)
   - Store functions return true/false, routes turn that into 200 or 404
   - 500 means the server crashed, so check the server terminal
   - module.exports goes in the file that defines functions, require in the file that uses them
   - Every new function: update export in store.js AND import in server.js