const { Client } = require('pg')

const pg = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '1234',
  port: 5432,
})
pg.connect(err => {
  if (err) console.log('err', err)
  //   else {
  //     console.log('연결 성공')
  //   }
})
pg.query("select 'success' as connection_Test", (err, res) => {
  if (err != null) {
    console.log(err)
  }
  console.log('test data >> ', res.rows)
})

module.exports = pg
