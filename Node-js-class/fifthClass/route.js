
const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h1>Home Page</h1>")
    } else if (req.url === './about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.end("<h2>About Us Page</h2>")
    }
    else {
        res.write(404, { 'content-type': 'text/html' })
        res.end("<h1>404 - Page not Foudn</h1>")
    }
})