const userController = require('../Controllers/user.controller')
module.exports = function (io) {
  //io ~~
  io.on('connection', async socket => {
    // 연결 됨
    console.log('client is connected', socket.id)

    // socket.on('login', async (userName, cb) => {
    //   const user = await userController.saveUser(userName, socket.id)
    //   try {
    //     console.log('user >> ', user)
    //     cb({
    //       ok: true,
    //       data: user,
    //     })
    //   } catch (error) {
    //     cb({
    //       ok: false,
    //       error: error.massage,
    //     })
    //   }

    //   console.log('back uuu', userName)
    // })
    socket.on('disconnect', () => {
      console.log('user is disconnected', socket.id)
    })
  })
}
