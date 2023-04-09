const http = require('http')
const port = 8080

const server = http.createServer((req, res) => res.end('hello world!'))

server.listen(port)
console.log(`Server listening on port ${port}`)
