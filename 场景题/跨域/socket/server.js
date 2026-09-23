const WebSocket = require('ws')
const wss = new WebSocket.Server({ port: 3000 })
wss.on('connection', (socket) => {
    console.log('client connected')

    socket.on('message', (message) => {
        console.log(message.toString())
    })
    
})
