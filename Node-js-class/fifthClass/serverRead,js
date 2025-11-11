
const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        fs.readFileSync('index.html', (err, data) => {
            if (err) {
                res.writeHead(500)
                res.end("Error loading html file")
            } else {
                res.writeHead(200, { 'content-type': 'text/html' })
                res.end(data)
            }
        })
    } else {
        res.writeHead(404, {'content-type' : 'text/plain'})
        res.end("Page not Found")
    }
})

server.listen(3000, () => console.log('server Running at http://localhost:3000/'))