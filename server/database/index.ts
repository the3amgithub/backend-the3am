import sql from 'mysql'

const sqlConnection = async () => {
  const config = {
    user: 'root',
    password: 'infotech',
    host: 'localhost',
    database: 'xda_blogs',
  }
  const connection = sql.createConnection(config)
  connection.connect((err) => {
    if (err) throw err
  })
  console.log('database connected')
}
export default sqlConnection
