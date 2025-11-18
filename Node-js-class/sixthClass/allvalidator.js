
import express, { Router, json, urlencoded } from 'express'

import { body, validationResult } from 'express-validator'
const app = express()

const userRouter = Router()

app.use(json)
app.use(urlencoded({ extended: true }))

userRouter.get('/', (req, res) => {
    res.send('User  profile')
})

userRouter.get('./register', (req, res) => {
    res.send(`
        <form action="/user/register" method="POST">

        <label>Email: </label>
        <input type= "email" name="email" require/> <br><br>

        <label>Password: </label><br>
        <input type="password" name="password" required /><br><br>

        <button type="submit">Register</button>

        </form>
        `)
})

userRouter.post(
    '/register',
    body('email').isEmail().normalizeEmail(),
    body('password').islength({ min: 6 }).withMessage('Pasword must be at least 6 characters or more'),
    (req, res) => {
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: error.array() })
        }

        console.log("POST request body: ", req.body)
        res.send("User registered!")
    }
)

app.use('/user', userRouter)

app.listen(3000, () => {
    console.log("Server running http://localhost:3000")
})