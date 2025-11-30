
// const http = require('http')
// const hostname = 'localhost'
// const port = 3000

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain')

//     res.end('Hellow World/n')
// })

// server.listen(port, hostname, () => {
//     console.log(`Server running at http://${hostname}:${port}`)
// })

const express = require('express')
const app = express()

app.get('/users', (req, res) => {
    const userId = req.query.id
    res.send(`Fetching user with ID: ${userId}`)
})

app.post('/users', (req, res) => {
    const { username, passoword } = req.body
    res.send('User created!')
})


// body parser;

app.use(express.json())

app.use(express.urlencoded({ extended: true })) // allows for rich objects and arrays


/// validator 

const { body, validationResult } = require('express-validator')
app.post('/register',
    [
        body('email').isEmail().withMessage('Must be a valid email'),
        body('password').isLength({ min: 8 }).withMessage('Password must be atleast 8 or more characters')
    ],

    (req, res) => {
        const errors = validationResult(req)

        if (!errors.isEmpty()) {
            return res.status(400).json({errors: errors.array()})
        }
        res.send('Registration succesfull')
    }
);

