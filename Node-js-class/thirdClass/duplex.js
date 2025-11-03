
import { createServer } from 'net'

const server = createServer((socket) => {
    console.log('Client Connected.')
     socket.on('data', (chunk) => {
        console.log(`Recieved : ${chunk.toString()}`)
        socket.write(`Server Recieved: ${chunk}`)
     })
})

server.listen(3000, () => {
    console.log(`Server listening port 3000`)
})