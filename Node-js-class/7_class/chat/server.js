
const express = require('express')
const http = require("http")
const { Server } = require("socket.io")
const path = require("path")

const app = express()
const server = http.createServer(app)
const io = new Server(server)

app.use(express.static(__dirname))

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

io.on("connection", (socket) => {
    console.log("New user Connected")
    socket.on("chatMessage", (data) => {
        io.emit("chatMessage", data)
    })

    socket.on("disconnect", () => {
        console.log("user disconnected")
    })
})

server.listen(8001, () => {
    console.log("Server started on port 8001")
})

