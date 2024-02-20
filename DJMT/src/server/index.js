const express = require('express')
const app = express()
const http = require('http')
const cors = require('cors')
const { Server } = require('socket.io')
const db = require('./config/db')
// const { log } = require('console')

// cross-origin 전체 허용
app.use(cors())

const server = http.createServer(app)
const serverPort = 5173

const io = new Server(server, {
  cors: {
    origin: [
      'http://localhost:5173/chat',
      'http://127.0.0.1:5173/chat',
      // "http://192.168.1.166:3000",
    ],
    methods: ['GET', 'POST'],
  },
})
app.get('/chat', (req, res) => {
  res.send({ text: 'this was sent from server' })
})
io.on('connection', socket => {
  socket.on('join_room', data => {
    socket.join(data.room)
    console.log(`${data.username}유저가 ${data.room}번 방에 입장했습니다`)
    let noti = {
      message: `${data.username} 유저가 방에 입장했습니다`,
      author: '알림',
    }
    socket.to(data.room).emit('receive_message', noti)
  })

  socket.on('send_message', data => {
    console.log('data > ', data)
    socket.to(data.room).emit('receive_message', data)
  })

  socket.on('disconnect', () => {
    console.log(`${socket.id}가 접속을 끊었습니다`)
  })
  socket.on('connect_failed', data => {
    console.log('error >> ', data)
  })
})

server.listen(serverPort, () =>
  console.log(`server running on port ${serverPort}`)
)
