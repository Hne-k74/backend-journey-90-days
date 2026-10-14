   # Day 9: HTTP and POST
   - Client sends a request (method + path), server sends a response (status code + body)
   - GET reads, POST creates
   - Status codes: 200 OK, 201 Created, 400 bad request, 404 not found, 409 conflict
   - curl -i shows the status line the browser hides
   - app.use(express.json()) creates req.body
   - POST route: validate (400), save (409 if duplicate), reply 201