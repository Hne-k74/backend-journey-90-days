# Day 8: Express basics
- npm init -y, npm install express
- app.get(path, (req, res) => ...) defines a route
- res.send for text, res.json for JSON
- :id in a route, read with req.params.id (a string)
- res.status(404).json(...) sets the status code
- one request = one response, use return after sending