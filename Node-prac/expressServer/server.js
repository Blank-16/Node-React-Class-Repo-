const express = require('express')
const app = express()
const PORT = 3000

// parse json bodies(for api clients sending content-type : application/json)
app.use(express.json())

// Parse url-encoded bodies for html form and accepting objects and arrays
app.use(express.urlencoded({ extended: true }))

// Get request: retrieve data
app.get('/api/users', (req, res) => {
    const mockUsers = [
        { id: 1, name: 'Alice', role: 'Developer' },
        { id: 2, name: 'Bob', role: 'Designer' }
    ]

    res.status(200).json({
        message: 'Users retrieved successfully',
        data: mockUsers
    })
})

// Post request: specific resource
// Accessing via Postman or Curl

app.post('/api/users', (req, res) => {
    const { name, role } = req.body;

    if (!name || !role) {
        return res.status(400).json({
            error: 'Please provide both name and role'
        })
    }

    const newUser = {
        id: Math.floor(Math.random() * 1800),
        name: name,
        role: role,
        createdAt: new Date()
    }

    console.log('New User Created', newUser)

    res.status(201).json({
        message: 'User created successfully',
        data: newUser
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})