   # Day 12: Middleware
   - Middleware is a function (req, res, next) that runs before the route answers
   - app.use(fn) runs it on every request
   - next() passes the request on. Forgetting it makes the request hang forever
   - Order matters: Express runs top to bottom, general middleware goes first
   - A middleware below a route that answers never sees that request
   - Built a logger: timestamp + method + url
   - express.json() is middleware too