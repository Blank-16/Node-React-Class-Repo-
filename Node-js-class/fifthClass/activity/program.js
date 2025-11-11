
// create a simple http server that displays hello world in the browser
// create an http server that sends html response to the client 
// create to handle multiple routes like about, contact page, address page by usnig http
// program to read data from a text file that send data as http response
// program to send json data like product details 
// create a server on custom port
// write to display status node(200, 404, 500) based on the route accessed

import { createServer } from 'http';
import { readFile, writeFileSync } from 'fs';

const products = [
    { id: 1, name: 'Laptop', price: 999 },
    { id: 2, name: 'Phone', price: 699 }
];

const server = createServer((req, res) => {
    if (req.url === '/' || req.url === '/home') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello World</h1>');
    }
    else if (req.url === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>About Page</h1>');
    }
    else if (req.url === '/contact') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Contact: email@example.com</h1>');
    }
    else if (req.url === '/address') {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Address: 123, CA</h1>');
    }
    else if (req.url === '/file') {
        readFile('sample.txt', 'utf8', (err, data) => {
            if (err) {
                const content = 'This is sample text from file';
                writeFileSync('sample.txt', content);
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>File Content:</h1><p>${content}</p>`);
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(`<h1>File Content:</h1><p>${data}</p>`);
            }
        });
    }
    else if (req.url === '/products') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(products));
    }
    else if (req.url === '/error') {
        res.writeHead(500, { 'Content-Type': 'text/html' });
        res.end('<h1>500 - Internal Server Error</h1>');
    }
    else {
        res.writeHead(404, { 'Content-Type': 'text/html' });
        res.end('<h1>404 - Page Not Found</h1>');
    }
});

server.listen(9999, () => {
    console.log('Server is running on http://localhost:9999');
});