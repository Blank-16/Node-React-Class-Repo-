
const { log } = require('console');
const http = require('http')
const PORT = 3000

const server = http.createServer((req, res) => {
    const { url, method } = req;

    console.log(`Incoming req: ${method} ${url}`)

    if (url === '/') {
        if (method === 'GET') {
            res.writeHead(200, { 'Content-Type': 'text/html' })
            res.end('<h1>Welcome to the Home Page!</h1><p>This is served via Node.js</p>')
        }
        else {
            res.writeHead(405)
            res.end('Method not allowed')
        }
    }

    else if (url === '/api/users') {
        if (method === 'GET') {
            const users = [
                { id: 1, name: 'Blank', role: 'Dev' },
                { id: 2, name: 'Miku', role: 'Designer' }
            ];

            res.writeHead(200, { 'Content-Type': 'application/json' })
            // stringifying objects is necessary before sending them over http
            res.end(JSON.stringify({ message: `Users created Successfully` }))
        }
    }

    else if (url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('ABOUT US: BLANK')
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' })
        res.end('<h1>404 - Page Not Found</h1>')
    }
})

server.listen(PORT, () => {
    log(`Server is running at http://localhost:${PORT}`)
    log(`Visit : / , /about , /api/users`)
})