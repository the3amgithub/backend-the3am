import express from 'express'
import sqlConnection from './database'
const app: express.Application = express()

const PORT = 8080
const init = () => {
  app.listen(PORT, async () => {
    await sqlConnection()
    console.log(`App Is Running at http://localhost:${PORT}`)
  })
}
init()
