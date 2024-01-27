const { createServer } = require('http')
const app = require('./app')
const { Server } = require('socket.io')
require('dotenv').config()

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: 'http://localhost:8093/api/socket/chat',
  },
})

require('./utils/io')(io)

httpServer.listen(process.env.DJMT_PORT, () => {
  console.log('server listening on port ', process.env.DJMT_PORT)
})
